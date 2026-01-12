"use client"

import ConfirmModal from "@/components/ConfirmModal"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { Pagination } from "@/components/Pagination"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import axiosClient from "@/lib/axiosClient"
import { Edit, Eye, File, FileText, ImageIcon, LinkIcon, Trash } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

/* ================= TYPES ================= */

interface RecruitmentRecord {
    id: string
    project: string
    country: string
    vacancyLocations: string
    vacancyType: string
    workEnvironment: string
    numberOfVacancies: string
    salary: string
    marketingFlyer: string
    vacancyFlyer: string
    candidateIdRequirements: string
    processFlowchart: string
    frequentlyAskedQuestions: string
    referralLink: string
    candidatesReferredFor: string
    candidatesInterviewingFor: string
    referralLinkContact: string
    companies: string
    totalCostToCandidate: string
    refundPolicy: string
    visaPackageCost: string
    costIncludedInVisa: string
    costNotIncludedInVisa: string
    agePreference: string
    nationalityPreference: string
    genderPreference: string
    licenceCar: string
    homeCountryRegistration: string
    qualificationsRequired: string
    experienceRequired: string
    englishIELTS: string
    otherLanguage: string
    skillAssessmentsRequired: string
    testing: string
    documentationVerification: string
    visaProcessTime: string
    agentIntroductoryVisaCost: string
    documentsRequiredForJobOffer: string
    prOffered: string
    prAdditionalInformation: string
    additionalDetails: string
    workHours: string
    inclusionsSummary: string
    additionalBenefits: string
}

/* ================= COLUMN CONFIG ================= */

const COLUMNS = [
    { key: "project", label: "Project", type: "text" },
    { key: "country", label: "Country", type: "tags" },
    { key: "vacancyType", label: "Vacancy Type", type: "tags" },
    { key: "salary", label: "Salary", type: "text" },
    { key: "companies", label: "Companies", type: "text" },
    { key: "visaProcessTime", label: "Visa Process Time", type: "text" },
    { key: "additionalDetails", label: "Additional Details", type: "textarea" },
]

/* ================= FILE PREVIEW ================= */

export function FilePreview({ filePath }: { filePath: string }) {
    const [isOpen, setIsOpen] = useState(false)
    const isImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(filePath)

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-white bg-primary rounded hover:bg-primary/90"
            >
                {isImage ? <ImageIcon size={14} /> : <FileText size={14} />}
                Preview
            </button>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="max-w-[95%] max-h-[95%]">
                    <DialogHeader>
                        <DialogTitle>File Preview</DialogTitle>
                    </DialogHeader>
                    {isImage ? (
                        <img
                            src={`${process.env.NEXT_PUBLIC_IMG_URL}${filePath}`}
                            alt="Preview"
                            className="w-full rounded"
                        />
                    ) : (
                        <iframe
                            src={`${process.env.NEXT_PUBLIC_IMG_URL}${filePath}`}
                            className="w-full h-[70vh] rounded border"
                        />
                    )}
                </DialogContent>
            </Dialog>
        </>
    )
}

/* ================= CELL RENDERER ================= */

function Cell({ column, value }: { column: any; value: any }) {
    if (!value) return <span className="text-muted-foreground text-xs">—</span>

    switch (column.type) {
        case "file":
            return <FilePreview filePath={value} />
        case "link":
            return (
                <a href={value} target="_blank" className="text-primary underline text-sm">
                    Open Link
                </a>
            )
        case "tags":
            return (
                <div className="flex flex-wrap gap-1">
                    {String(value).split(",").map((tag, i) => (
                        <span
                            key={i}
                            className="px-2 py-1 text-xs rounded bg-primary/10 text-primary"
                        >
                            {tag.trim()}
                        </span>
                    ))}
                </div>
            )
        default:
            return <p className="text-sm">{value}</p>
    }
}

/* ================= PAGE ================= */

export default function TablePage() {
    const [mockData, setMockData] = useState<RecruitmentRecord[]>([])
    const [user, setUser] = useState<any>(null)
    const [deleteId, setDeleteId] = useState<string | null>(null)
    const router = useRouter()
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalData, setTotalData] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    useEffect(() => {
        const user = sessionStorage.getItem("user")
        if (!user) return;
        setUser(JSON.parse(user))
    }, [])


    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handleFetch = async () => {
        try {
            await axiosClient.get("/recruitment-forms/", {
                params: {
                    page: currentPage,
                    limit: itemsPerPage,
                },
            }).then(res => {
                setMockData(res.data.data || [])
                setTotalPages(Math.ceil(Number(res.data.total) / Number(res.data.pageSize)));
                setTotalData(Number(res.data.total))
            })
        } catch (error) {
            console.log("🚀 ~ handleFetch ~ error:", error)
        }
    }

    const handleDelete = async (id: string) => {
        try {
            const res = await axiosClient.delete(`/recruitment-forms/${id}`)
            handleFetch();
        } catch (error) {
            console.log("🚀 ~ handleFetch ~ error:", error)
        }
    }

    useEffect(() => {
        if (!user) return;
        handleFetch();
    }, [currentPage, itemsPerPage, user])

    if (!user) return <>Loading....</>

    return (
        <>
            <ConfirmModal
                open={deleteId !== null}
                title="Delete Record"
                description="This action cannot be undone."
                confirmText="Delete"
                danger
                onCancel={() => setDeleteId(null)}
                onConfirm={() => deleteId && handleDelete(deleteId)}
            />

            <Navbar />

            <main className="px-4 sm:px-6 lg:px-10 pt-20 pb-10 space-y-6">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold">Recruitment Database</h1>
                    <p className="text-muted-foreground text-sm">
                        All recruitment positions and details
                    </p>

                    {!!user && user?.role === "admin" && (
                        <Link
                            href="/recruitment-forms/create"
                            className="inline-block mt-4 rounded-lg bg-primary px-5 py-2 text-white font-medium"
                        >
                            Create
                        </Link>
                    )}
                </div>

                {/* ================= MOBILE CARDS ================= */}
                <div className="md:hidden space-y-4">
                    {mockData.map(record => (
                        <Card key={record.id} className="p-4 space-y-3">
                            <div className="flex justify-between items-start">
                                <h2 className="font-semibold">{record.project}</h2>
                                <div className="flex gap-2">
                                    <Eye
                                        size={18}
                                        className="cursor-pointer text-primary"
                                        onClick={() => router.push(`/recruitment-forms/view/${record.id}`)}
                                    />
                                    {!!user && user?.role === "admin" && (
                                        <Trash
                                            size={18}
                                            className="cursor-pointer text-destructive"
                                            onClick={() => setDeleteId(record.id)}
                                        />
                                    )}
                                </div>
                            </div>

                            {COLUMNS.map(col => (
                                <div key={col.key}>
                                    <p className="text-xs font-semibold text-muted-foreground">
                                        {col.label}
                                    </p>
                                    <Cell column={col} value={(record as any)[col.key]} />
                                </div>
                            ))}
                        </Card>
                    ))}
                </div>

                {/* ================= DESKTOP TABLE ================= */}
                <div className="hidden md:block">
                    <Card className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                            <thead className="bg-muted">
                                <tr>
                                    {COLUMNS.map(col => (
                                        <th key={col.key} className="px-4 py-3 text-left">
                                            {col.label}
                                        </th>
                                    ))}
                                    <th className="px-4 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mockData.map(record => (
                                    <tr key={record.id} className="border-t hover:bg-muted/50">
                                        {COLUMNS.map(col => (
                                            <td key={col.key} className="px-4 py-3">
                                                <Cell column={col} value={(record as any)[col.key]} />
                                            </td>
                                        ))}
                                        <td className="px-4 py-3 flex gap-2">
                                            <Eye
                                                size={18}
                                                className="cursor-pointer text-primary"
                                                onClick={() => router.push(`/recruitment-forms/view/${record.id}`)}
                                            />
                                            {!!user && user?.role === "admin" && (
                                                <>
                                                    <Edit
                                                        size={18}
                                                        className="cursor-pointer"
                                                        onClick={() =>
                                                            router.push(`/recruitment-forms/update/${record.id}`)
                                                        }
                                                    />
                                                    <Trash
                                                        size={18}
                                                        className="cursor-pointer text-destructive"
                                                        onClick={() => setDeleteId(record.id)}
                                                    />
                                                </>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Card>
                </div>

                <Pagination totalPages={totalPages} handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} currentPage={currentPage} itemsPerPage={itemsPerPage} onItemsPerPageChange={(size: any) => { setItemsPerPage(size); setCurrentPage(1) }} />

                <p className="text-sm text-muted-foreground">
                    Total Records: {totalData}
                </p>
            </main>

            <Footer />
        </>
    )
}
