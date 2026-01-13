"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import axiosClient from "@/lib/axiosClient"
import ConfirmModal from "@/components/ConfirmModal"
import { Eye, Trash } from "lucide-react"
import { useRouter } from "next/navigation"

interface AgentReferral {
    id: number
    firstName: string
    surname: string
    email: string
    mobile: string
    passportNumber: string
    status: string
    createdAt: string
}

export default function AgentReferralList() {
    const [data, setData] = useState<AgentReferral[]>([])
    const [loading, setLoading] = useState(true)
    const [deleteId, setDeleteId] = useState<any | null>(null)
    const router = useRouter()
    const [user, setUser] = useState<any>(null)

    useEffect(() => {
        const user = sessionStorage.getItem("user")
        if (!user) return;
        setUser(JSON.parse(user))
    }, [])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const res = await axiosClient.get("/agent-referrals")
            setData(res.data.data || [])
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async (id: string) => {
        try {
            await axiosClient.delete(`/agent-referrals/${id}`)
            fetchData();
            setDeleteId(null)
        } catch (error) {
            console.log("🚀 ~ handleFetch ~ error:", error)
        }
    }

    return (
        <div className="p-4 sm:p-6 lg:p-8">
            {/* Header */}
            <ConfirmModal
                open={deleteId !== null}
                title="Delete Record"
                description="This action cannot be undone."
                confirmText="Delete"
                danger
                onCancel={() => setDeleteId(null)}
                onConfirm={() => deleteId && handleDelete(deleteId)}
            />

            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h1 className="text-xl sm:text-2xl font-semibold">
                    Agent Referrals
                </h1>

                <Link
                    href="/recruitment-forms/agent-referral/create"
                    className="w-full sm:w-auto rounded-lg bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-900"
                >
                    New Referral
                </Link>
            </div>

            {/* ================= DESKTOP / TABLET TABLE ================= */}
            <div className="hidden md:block overflow-x-auto rounded-xl border bg-white shadow-sm">
                <table className="w-full border-collapse text-sm">
                    <thead className="bg-gray-50 text-left">
                        <tr>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th>Mobile</Th>
                            <Th>Passport No</Th>
                            <Th>Status</Th>
                            <Th>Created</Th>
                            <Th>Action</Th>
                        </tr>
                    </thead>

                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan={7} className="p-6 text-center">
                                    Loading...
                                </td>
                            </tr>
                        ) : data.length === 0 ? (
                            <tr>
                                <td colSpan={7} className="p-6 text-center">
                                    No records found
                                </td>
                            </tr>
                        ) : (
                            data.map((item) => (
                                <tr
                                    key={item.id}
                                    className="border-t hover:bg-gray-50"
                                >
                                    <Td>{item.firstName} {item.surname}</Td>
                                    <Td>{item.email}</Td>
                                    <Td>{item.mobile}</Td>
                                    <Td>{item.passportNumber}</Td>
                                    <Td>
                                        <StatusBadge status={item.status} />
                                    </Td>
                                    <Td>
                                        {new Date(item.createdAt).toLocaleDateString()}
                                    </Td>
                                    <Td >
                                        <Eye
                                            size={18}
                                            className="cursor-pointer text-primary"
                                            onClick={() => router.push(`/recruitment-forms/agent-referral/view/${item.id}`)}
                                        />
                                        {!!user && user?.role === "admin" && (
                                            <>
                                                <Trash
                                                    size={18}
                                                    className="cursor-pointer text-destructive"
                                                    onClick={() => setDeleteId(item.id)}
                                                />
                                            </>
                                        )}
                                    </Td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* ================= MOBILE CARD VIEW ================= */}
            <div className="md:hidden space-y-4">
                {loading ? (
                    <div className="rounded-lg border bg-white p-4 text-center">
                        Loading...
                    </div>
                ) : data.length === 0 ? (
                    <div className="rounded-lg border bg-white p-4 text-center">
                        No records found
                    </div>
                ) : (
                    data.map((item) => (
                        <div
                            key={item.id}
                            className="rounded-xl border bg-white p-4 shadow-sm space-y-2"
                        >
                            <div className="flex items-center justify-between">
                                <h2 className="font-semibold">
                                    {item.firstName} {item.surname}
                                </h2>
                                <StatusBadge status={item.status} />
                            </div>

                            <div className="text-sm text-gray-600">
                                <p><span className="font-medium">Email:</span> {item.email}</p>
                                <p><span className="font-medium">Mobile:</span> {item.mobile}</p>
                                <p><span className="font-medium">Passport:</span> {item.passportNumber}</p>
                                <p>
                                    <span className="font-medium">Created:</span>{" "}
                                    {new Date(item.createdAt).toLocaleDateString()}
                                </p>
                            </div>

                            <div className="pt-2">
                                <Link
                                    href={`/recruitment-forms/agent-referral/view/${item.id}`}
                                    className="inline-block rounded-lg border px-4 py-2 text-sm font-medium text-black hover:bg-gray-100"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

/* ---------- UI Helpers ---------- */

const Th = ({ children }: { children: React.ReactNode }) => (
    <th className="px-4 py-3 font-medium text-gray-700 whitespace-nowrap">
        {children}
    </th>
)

const Td = ({ children }: { children: React.ReactNode }) => (
    <td className="px-4 py-3 whitespace-nowrap">
        {children}
    </td>
)

function StatusBadge({ status }: { status: string }) {
    const color =
        status === "approved"
            ? "bg-green-100 text-green-700"
            : status === "rejected"
                ? "bg-red-100 text-red-700"
                : "bg-yellow-100 text-yellow-700"

    return (
        <span className={`rounded-full px-3 py-1 text-xs font-medium ${color}`}>
            {status}
        </span>
    )
}
