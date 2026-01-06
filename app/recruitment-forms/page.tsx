"use client"

import ConfirmModal from "@/components/ConfirmModal"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import axiosClient from "@/lib/axiosClient"
import { Edit, Eye, File, FileText, ImageIcon, LinkIcon, Trash } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

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
const COLUMNS = [
    { key: "project", label: "Project", type: "text" },
    { key: "country", label: "Country", type: "tags" },
    { key: "vacancyLocations", label: "Vacancy Locations", type: "text" },
    { key: "vacancyType", label: "Vacancy Type", type: "tags" },
    { key: "workEnvironment", label: "Work Environment", type: "text" },
    { key: "numberOfVacancies", label: "# of Vacancies", type: "text" },
    { key: "salary", label: "Salary", type: "text" },
    { key: "marketingFlyer", label: "Marketing Flyer", type: "file" },
    { key: "vacancyFlyer", label: "Vacancy Flyer", type: "file" },
    { key: "candidateIdRequirements", label: "Candidate Requirements", type: "file" },
    { key: "processFlowchart", label: "Process Flowchart", type: "file" },
    { key: "frequentlyAskedQuestions", label: "FAQ", type: "file" },
    { key: "referralLink", label: "Referral Link", type: "link" },
    { key: "candidatesReferredFor", label: "Candidates Referred For", type: "link" },
    { key: "candidatesInterviewingFor", label: "Candidates Interviewing For", type: "link" },
    { key: "referralLinkContact", label: "Referral Contact", type: "text" },
    { key: "companies", label: "Companies", type: "text" },
    { key: "totalCostToCandidate", label: "Total Cost to Candidate", type: "textarea" },
    { key: "refundPolicy", label: "Refund Policy", type: "textarea" },
    { key: "visaPackageCost", label: "Visa Package Cost", type: "text" },
    { key: "costIncludedInVisa", label: "Cost Included in Visa", type: "textarea" },
    { key: "costNotIncludedInVisa", label: "Cost Not Included in Visa", type: "textarea" },
    { key: "agePreference", label: "Age Preference", type: "text" },
    { key: "nationalityPreference", label: "Nationality Preference", type: "tags" },
    { key: "genderPreference", label: "Gender Preference", type: "text" },
    { key: "licenceCar", label: "Licence Car", type: "text" },
    { key: "homeCountryRegistration", label: "Home Country Registration", type: "text" },
    { key: "qualificationsRequired", label: "Qualifications Required", type: "textarea" },
    { key: "experienceRequired", label: "Experience Required", type: "textarea" },
    { key: "englishIELTS", label: "English/IELTS", type: "text" },
    { key: "otherLanguage", label: "Other Language", type: "text" },
    { key: "skillAssessmentsRequired", label: "Skill Assessments Required", type: "textarea" },
    { key: "testing", label: "Testing Fees", type: "text" },
    { key: "documentationVerification", label: "Documentation Verification", type: "textarea" },
    { key: "visaProcessTime", label: "Visa Process Time", type: "text" },
    { key: "agentIntroductoryVisaCost", label: "Agent Visa Cost", type: "text" },
    { key: "documentsRequiredForJobOffer", label: "Documents Required", type: "textarea" },
    { key: "prOffered", label: "PR Offered", type: "text" },
    { key: "prAdditionalInformation", label: "PR Additional Info", type: "textarea" },
    { key: "additionalDetails", label: "Additional Details", type: "textarea" },
    { key: "workHours", label: "Work Hours", type: "textarea" },
    { key: "inclusionsSummary", label: "Inclusions Summary", type: "textarea" },
    { key: "additionalBenefits", label: "Additional Benefits", type: "textarea" },
]

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

function LinkCell({ url, label }: { url: string; label: string }) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary hover:underline text-sm"
        >
            <LinkIcon size={14} />
            {label}
        </a>
    )
}

function Cell({ column, value }: { column: (typeof COLUMNS)[0]; value: any }) {
    if (!value) return <span className="text-muted-foreground text-xs">—</span>

    switch (column.type) {
        case "file":
            return <FilePreview filePath={value} />
        case "link":
            return <LinkCell url={value} label="Open Link" />
        case "tags":
            return (
                <div className="flex flex-wrap gap-1">
                    {(Array.isArray(value) ? value : String(value).split(",")).map(
                        (tag: string, idx: number) => (
                            <span
                                key={idx}
                                className="inline-block bg-accent/20 text-accent px-2 py-1 rounded text-xs font-medium"
                            >
                                {tag.trim()}
                            </span>
                        )
                    )}
                </div>
            )
        case "textarea":
            return <p className="text-xs whitespace-pre-wrap line-clamp-3">{value}</p>
        default:
            return <p className="text-sm">{value}</p>
    }
}

export default function TablePage() {
    const [selectedRecord, setSelectedRecord] = useState<RecruitmentRecord | null>(null)
    const [mockData, setMockData] = useState<RecruitmentRecord[]>([])
    const [user, setUser] = useState(null)
    const router = useRouter()
    const [deleteId, setDeleteId] = useState<string | null>(null);

    useEffect(() => {
        const user = sessionStorage.getItem("user")
        if (!user) return;
        setUser(JSON.parse(user))
    }, [])

    const fetchHandleData = async () => {
        try {
            const result = await axiosClient.get("/recruitment-forms/");
            setMockData(result.data.data)
        } catch (error) {
            console.log(" ~ error:", error)
        }
    }
    useEffect(() => {
        fetchHandleData();
    }, [])

    const handleDeleteFn = async (id: string) => {
        if (!deleteId) return;
        if (!user) return;
        if (user && user?.role !== "admin") return;
        try {
            const res = await axiosClient.delete(`/recruitment-forms/${id}`);
            if (res.status === 200) {
                fetchHandleData();
                setDeleteId(null)
            }
        } catch (error) {
            console.log(" ~ error:", error)
        }
    }

    return (
        <>
            <ConfirmModal
                open={deleteId !== null}
                title="Delete Record"
                description="This action cannot be undone. Are you sure you want to delete this record?"
                confirmText="Delete"
                danger
                onCancel={() => setDeleteId(null)}
                onConfirm={() => deleteId ? handleDeleteFn(deleteId) : ''}
            />

            <Navbar />
            <main className="w-full pb-10 px-10 pt-16 md:pt-25 bg-background">
                <div className="space-y-6">
                    {/* Header */}
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold text-foreground">Recruitment Database</h1>
                        <p className="text-muted-foreground">All recruitment positions and details in spreadsheet view</p>
                        {!!user && user?.role === "admin" && (
                            <a
                                href="/recruitment-forms/create"
                                className="w-fit p-3 px-5 rounded-lg bg-[#007bff] text-primary-foreground cursor-pointer font-semibold hover:bg-[#0056b3] transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 group mt-6"
                            >
                                Create
                            </a>
                        )}
                    </div>

                    {/* Excel-like Table */}
                    <Card className="overflow-hidden border border-border">
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-primary/10 border-b border-border">
                                        <th className="sticky left-0 z-20 w-12 h-12 px-4 text-left text-xs font-semibold text-foreground bg-muted border-r border-border">
                                            #
                                        </th>
                                        {COLUMNS.map((col) => (
                                            <th
                                                key={col.key}
                                                className="px-4 py-3 text-left text-xs font-semibold text-foreground whitespace-nowrap border-r border-border bg-primary/5"
                                            >
                                                {col.label}
                                            </th>
                                        ))}
                                        <th className="sticky right-0 z-20 w-16 h-12 px-4 text-left text-xs font-semibold text-foreground bg-muted border-l border-border">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {mockData.map((record, idx) => (
                                        <tr key={record.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                                            <td className="sticky left-0 z-10 w-12 h-12 px-4 text-xs font-medium text-muted-foreground bg-muted/30 border-r border-border">
                                                {idx + 1}
                                            </td>
                                            {COLUMNS.map((col) => (
                                                <td key={`${record.id}-${col.key}`} className="px-4 py-4 border-r border-border text-sm max-w-xs">
                                                    <Cell column={col} value={(record as any)[col.key]} />
                                                </td>
                                            ))}
                                            <td className="sticky flex flex-col gap-2 right-0 z-10 w-16 px-4 py-4 text-center bg-muted/30 border-l border-border">
                                                <Link
                                                    href={`/recruitment-forms/view/${record.id}`}
                                                    className="text-primary cursor-pointer hover:text-primary/80 transition-colors p-2 hover:bg-primary/10 rounded-lg"
                                                >
                                                    <Eye size={18} />
                                                </Link>
                                                <button
                                                    onClick={() => setSelectedRecord(record)}
                                                    className="inline-flex items-center cursor-pointer justify-center w-8 h-8 text-primary hover:bg-primary/10 rounded transition-colors"
                                                >
                                                    <File size={18} />
                                                </button>
                                                {!!user && user?.role === "admin" && (
                                                    <>
                                                        <button
                                                            onClick={() => router.push(`/recruitment-forms/update/${record.id}`)}
                                                            className="inline-flex cursor-pointer items-center justify-center w-8 h-8 text-primary hover:bg-primary/10 rounded transition-colors"
                                                        >
                                                            <Edit size={18} />
                                                        </button>
                                                        <button
                                                            onClick={() => setDeleteId(record.id)}
                                                            className="inline-flex cursor-pointer items-center justify-center w-8 h-8 text-primary hover:bg-primary/10 rounded transition-colors"
                                                        >
                                                            <Trash size={18} />
                                                        </button>
                                                    </>

                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>

                    {/* Row Count */}
                    <p className="text-sm text-muted-foreground">Total Records: {mockData.length}</p>
                </div>

                {/* Detail Modal - show full record details when clicking expand button */}
                <Dialog open={!!selectedRecord} onOpenChange={() => setSelectedRecord(null)}>
                    <DialogContent className="max-w-7xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle>{selectedRecord?.project}</DialogTitle>
                        </DialogHeader>
                        {selectedRecord && (
                            <div className="grid grid-cols-2 gap-6">
                                {COLUMNS.map((col) => (
                                    <div key={col.key} className="space-y-2">
                                        <p className="text-xs font-semibold text-muted-foreground uppercase">{col.label}</p>
                                        <Cell column={col} value={(selectedRecord as any)[col.key]} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </DialogContent>
                </Dialog>
            </main>
            <Footer />

        </>

    )
}
