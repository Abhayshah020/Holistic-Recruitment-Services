"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import axiosClient from "@/lib/axiosClient"
import { FileText, ImageIcon } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export function FilePreview({ filePath }: { filePath: string }) {
    const [isOpen, setIsOpen] = useState(false)
    const isImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(filePath)

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-white bg-primary rounded hover:bg-primary/90 transition-colors"
            >
                {isImage ? <ImageIcon size={14} /> : <FileText size={14} />}
                {isImage ? "View Image" : "View PDF"}
            </button>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="max-w-[90%] max-h-[90%]">
                    <DialogHeader>
                        <DialogTitle>File Preview</DialogTitle>
                    </DialogHeader>
                    {isImage ? (
                        <img src={`${process.env.NEXT_PUBLIC_IMG_URL}${filePath}` || "/file.svg"} alt="Preview" className="w-full h-auto rounded" />
                    ) : (
                        <div className="bg-muted rounded p-4">
                            <p className="text-center text-muted-foreground mb-4">PDF Preview</p>
                            <iframe
                                src={`${process.env.NEXT_PUBLIC_IMG_URL}${filePath}`}
                                className="w-full h-[600px] rounded border"
                                title="PDF Preview"
                            />
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    )
}

export default function AgentReferralView() {
    const { id } = useParams()
    const router = useRouter()
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (id) fetchData()
    }, [id])

    const fetchData = async () => {
        try {
            const res = await axiosClient.get(`/agent-referrals/${id}`)
            setData(res.data.data)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    if (loading) return <PageWrapper>Loading...</PageWrapper>
    if (!data) return <PageWrapper>Not found</PageWrapper>

    return (
        <PageWrapper>
            <div className="mb-6 flex justify-between">
                <h1 className="text-2xl font-semibold">
                    Referral Details
                </h1>

                <button
                    onClick={() => router.replace("/recruitment-forms/agent-referral")}
                    className="text-sm underline"
                >
                    Back
                </button>
            </div>

            <Section title="Candidate Information">
                <Item label="Name" value={`${data.firstName} ${data.surname}`} />
                <Item label="Email" value={data.email} />
                <Item label="Mobile" value={data.mobile} />
                <Item label="DOB" value={data.dateOfBirth} />
                <Item label="Country of Birth" value={data.countryOfBirth} />
                <Item label="Passport Number" value={data.passportNumber} />
            </Section>

            <Section title="Documents">
                <FileLink label="Resume" url={data.resumePath} />
                <FileLink label="Passport" url={data.passportPath} />
            </Section>

            <Section title="Provider Contact">
                <Item label="Name" value={data.providerContactName} />
                <Item label="Email" value={data.providerContactEmail} />
                <Item label="Phone" value={data.providerContactPhone} />
            </Section>

            <Section title="Status">
                <StatusBadge status={data.status} />
            </Section>
        </PageWrapper>
    )
}

/* ---------- Reusable UI ---------- */

function PageWrapper({ children }: { children: React.ReactNode }) {
    return <div className="p-8 max-w-4xl mx-auto">{children}</div>
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="mb-8 rounded-lg border bg-white p-6">
            <h2 className="mb-4 text-lg font-medium">{title}</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {children}
            </div>
        </div>
    )
}

function Item({ label, value }: { label: string; value: string }) {
    return (
        <div>
            <p className="text-xs text-gray-500">{label}</p>
            <p className="font-medium">{value || "-"}</p>
        </div>
    )
}

function FileLink({ label, url }: { label: string; url: string }) {
    return (
        <div>
            <p className="text-xs text-gray-500">{label}</p>
            {url ? (
                <FilePreview filePath={url} />
            ) : (
                <p>-</p>
            )}
        </div>
    )
}

function StatusBadge({ status }: { status: string }) {
    const color =
        status === "approved"
            ? "bg-green-100 text-green-700"
            : status === "rejected"
                ? "bg-red-100 text-red-700"
                : "bg-yellow-100 text-yellow-700"

    return (
        <span className={`inline-block rounded-full px-4 py-1 text-sm ${color}`}>
            {status}
        </span>
    )
}
