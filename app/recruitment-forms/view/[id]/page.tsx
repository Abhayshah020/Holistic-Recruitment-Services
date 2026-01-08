"use client"

import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import axiosClient from "@/lib/axiosClient"
import { ArrowLeft, Briefcase, CheckCircle, Clock, DollarSign, FileText, ImageIcon, MapPin } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"


function FilePreview({ filePath }: { filePath: string }) {
    const [isOpen, setIsOpen] = useState(false)
    const isImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(filePath)

    return (
        <>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-medium 
                           text-white bg-primary rounded-md hover:bg-primary/90 transition-colors"
            >
                {isImage ? <ImageIcon size={14} /> : <FileText size={14} />}
                <span className="hidden sm:inline">
                    {isImage ? "View Image" : "View PDF"}
                </span>
                <span className="sm:hidden">View</span>
            </button>

            {/* Preview Dialog */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent
                    className="
                        w-[95vw] sm:w-auto
                        max-w-[95vw] sm:max-w-4xl lg:max-w-5xl
                        h-[90vh]
                        overflow-hidden
                    "
                >
                    <DialogHeader>
                        <DialogTitle className="text-base sm:text-lg">
                            File Preview
                        </DialogTitle>
                    </DialogHeader>

                    {/* Image Preview */}
                    {isImage ? (
                        <div className="flex items-center justify-center h-full overflow-auto">
                            <img
                                src={`${process.env.NEXT_PUBLIC_IMG_URL}${filePath}` || "/file.svg"}
                                alt="Preview"
                                className="
                                    max-h-[75vh]
                                    w-auto
                                    max-w-full
                                    rounded-lg
                                    object-contain
                                "
                            />
                        </div>
                    ) : (
                        /* PDF Preview */
                        <div className="flex flex-col h-full gap-3">
                            <p className="text-center text-xs sm:text-sm text-muted-foreground">
                                PDF Preview
                            </p>

                            <iframe
                                src={`${process.env.NEXT_PUBLIC_IMG_URL}${filePath}`}
                                className="
                                    w-full
                                    flex-1
                                    rounded-lg
                                    border
                                    min-h-[300px]
                                    sm:min-h-[500px]
                                "
                                title="PDF Preview"
                            />
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    )
}

export default function ViewPage() {

    const params = useParams();

    const [mockData, setMockData] = useState({
        id: "",
        project: "",
        country: [""],
        vacancyLocations: "",
        vacancyType: [""],
        workEnvironment: "",
        numberOfVacancies: "",
        salary: "",
        workHours: "",
        totalCostToCandidate: "",
        refundPolicy: "",
        visaPackageCost: "",
        agentVisaPackageCost: "",
        costIncludedInVisaPackage: "",
        costNotIncludedInVisaPackage: "",
        visaProcessTime: "",
        qualificationsRequired: "",
        experienceRequired: "",
        agePreference: "",
        nationalityPreference: "",
        genderPreference: "",
        licence: "",
        homeCountryRegistration: "",
        englishIELTS: "",
        otherLanguage: "",
        skillAssessmentsRequired: "",
        testing: "",
        documentationVerification: "",
        documentsRequiredJobOffer: "",
        candidateIdRequirements: "",
        frequentlyAskedQuestions: "",
        processFlowchart: "",
        additionalDetails: "",
        referralLink: "",
        candidatesReferredFor: "",
        candidatesInterviewingFor: "",
        referralLinkContact: "",
        companiesFromReferral: "",
        inclusionsSummary: "",
        additionalBenefits: "",
        prOffered: "",
        prAdditionalInfo: "",
        marketingFlyer: "",
        vacancyFlyer: "",
        faq: ""
    })
    useEffect(() => {
        const fetchHandleData = async () => {
            try {
                const result = await axiosClient.get(`/recruitment-forms/${params.id}`);
                setMockData(result.data)
            } catch (error) {
                console.log(" ~ error:", error)
            }
        }
        fetchHandleData();
    }, [])

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background py-10 px-4">
                <div className="w-full pb-10  md:px-10 pt-16 md:pt-25 bg-background">
                    {/* Header */}
                    <div className="mb-8">
                        <Link href="/recruitment-forms">
                            <Button variant="ghost" className="gap-2 mb-6 text-muted-foreground hover:text-foreground">
                                <ArrowLeft className="w-4 h-4" />
                                Back to Portal
                            </Button>
                        </Link>

                        <div className="mb-6">
                            <h1 className="text-4xl font-bold text-foreground mb-2">{mockData.project}</h1>
                        </div>
                    </div>

                    {/* Key Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <Card className="p-5 border border-border/50 bg-card hover:shadow-sm transition-shadow">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <Briefcase className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground">Vacancies</div>
                                    <div className="text-2xl font-bold text-foreground">{mockData.numberOfVacancies}</div>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-5 border border-border/50 bg-card hover:shadow-sm transition-shadow">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-accent/10">
                                    <DollarSign className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground">Salary</div>
                                    <div className="text-lg font-bold text-foreground">$120-150k</div>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-5 border border-border/50 bg-card hover:shadow-sm transition-shadow">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <Clock className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground">Type</div>
                                    <div className="text-lg font-bold text-foreground">Full-time</div>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-5 border border-border/50 bg-card hover:shadow-sm transition-shadow">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-accent/10">
                                    <MapPin className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground">Locations</div>
                                    <div className="text-lg font-bold text-foreground">Sydney</div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Position Details */}
                    <Card className="p-8 border border-border/50 bg-card mb-8">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                            <div className="h-8 w-1 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                            <h2 className="text-2xl font-bold text-foreground">Position Details</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Country</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {mockData?.countryTags?.map((c) => (
                                        <Badge key={c} variant="secondary">
                                            {c}
                                        </Badge>
                                    ))}
                                </div>

                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Vacancy Locations</p>
                                <p className="text-muted-foreground mb-6">{mockData.vacancyLocations}</p>

                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Vacancy Type</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {mockData?.vacancyTypeTags?.map((t) => (
                                        <Badge key={t} variant="secondary">
                                            {t}
                                        </Badge>
                                    ))}
                                </div>

                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Work Environment</p>
                                <p className="text-muted-foreground mb-6">{mockData.workEnvironment}</p>
                            </div>

                            <div>
                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Salary</p>
                                <p className="text-primary font-semibold mb-6">{mockData.salary}</p>

                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Work Hours</p>
                                <p className="text-muted-foreground mb-6">{mockData.workHours}</p>

                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Number of Vacancies</p>
                                <p className="text-muted-foreground">{mockData.numberOfVacancies}</p>
                            </div>
                        </div>
                    </Card>

                    {/* Cost & Visa Information */}
                    <Card className="p-8 border border-border/50 bg-card mb-8">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                            <div className="h-8 w-1 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                            <h2 className="text-2xl font-bold text-foreground">Cost & Visa Information</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                                    Total Cost to Candidate (Incl. Visa)
                                </p>
                                <p className="text-muted-foreground mb-6 whitespace-pre-wrap">{mockData.totalCostToCandidate}</p>

                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Visa Package Cost</p>
                                <p className="text-muted-foreground mb-6">{mockData.visaPackageCost}</p>

                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                                    Agent Introductory Visa Package Cost
                                </p>
                                <p className="text-muted-foreground mb-6">{mockData.agentVisaPackageCost}</p>

                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Visa Process Time</p>
                                <p className="text-muted-foreground">{mockData.visaProcessTime}</p>
                            </div>

                            <div>
                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                                    Cost Included in Visa Package
                                </p>
                                <p className="text-muted-foreground mb-6 whitespace-pre-wrap">{mockData.costIncludedInVisaPackage}</p>

                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                                    Cost Not Included in Visa Package
                                </p>
                                <p className="text-muted-foreground mb-6 whitespace-pre-wrap">{mockData.costNotIncludedInVisaPackage}</p>

                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Refund Policy</p>
                                <p className="text-muted-foreground">{mockData.refundPolicy}</p>
                            </div>
                        </div>
                    </Card>

                    {/* Requirements */}
                    <Card className="p-8 border border-border/50 bg-card mb-8">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                            <div className="h-8 w-1 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                            <h2 className="text-2xl font-bold text-foreground">Candidate Requirements</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Qualifications Required</p>
                                <p className="text-muted-foreground mb-6 whitespace-pre-wrap">{mockData.qualificationsRequired}</p>

                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Experience Required</p>
                                <p className="text-muted-foreground mb-6 whitespace-pre-wrap">{mockData.experienceRequired}</p>

                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Age Preference</p>
                                <p className="text-muted-foreground mb-6">{mockData.agePreference}</p>

                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Nationality Preference</p>
                                <p className="text-muted-foreground mb-6">{mockData.nationalityPreference}</p>

                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Gender Preference</p>
                                <p className="text-muted-foreground">{mockData.genderPreference}</p>
                            </div>

                            <div>
                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Licence & Car</p>
                                <p className="text-muted-foreground mb-6">{mockData.licence}</p>

                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                                    Home Country Registration
                                </p>
                                <p className="text-muted-foreground mb-6">{mockData.homeCountryRegistration}</p>

                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">English (IELTS)</p>
                                <p className="text-muted-foreground mb-6">{mockData.englishIELTS}</p>

                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Other Language</p>
                                <p className="text-muted-foreground">{mockData.otherLanguage}</p>
                            </div>
                        </div>
                    </Card>

                    {/* Skills & Assessment */}
                    <Card className="p-8 border border-border/50 bg-card mb-8">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                            <div className="h-8 w-1 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                            <h2 className="text-2xl font-bold text-foreground">Skills & Assessment</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                                    Skill Assessments Required
                                </p>
                                <p className="text-muted-foreground mb-6 whitespace-pre-wrap">{mockData.skillAssessmentsRequired}</p>

                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Testing Required</p>
                                <p className="text-muted-foreground">{mockData.testing}</p>
                            </div>

                            <div>
                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                                    Documentation Verification & Fees
                                </p>
                                <p className="text-muted-foreground">{mockData.documentationVerification}</p>
                            </div>
                        </div>
                    </Card>

                    {/* Documents Required */}
                    <Card className="p-8 border border-border/50 bg-card mb-8">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                            <div className="h-8 w-1 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                            <h2 className="text-2xl font-bold text-foreground">Documents & Files</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>

                                <p className="text-xs text-muted-foreground">Vacancy Flyer</p>
                                <FilePreview filePath={mockData.vacancyFlyer} />

                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                                    Candidate ID/Document Requirements
                                </p>
                                <FilePreview filePath={mockData.candidateIdRequirements} />
                            </div>

                            <div>
                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">File Attachments</p>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-border/30">
                                        <FileText className="w-5 h-5 text-primary" />
                                        <div>
                                            <p className="text-xs text-muted-foreground">Marketing Flyer</p>
                                            <FilePreview filePath={mockData.marketingFlyer} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Benefits */}
                    <Card className="p-8 border border-border/50 bg-card mb-8">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                            <div className="h-8 w-1 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                            <h2 className="text-2xl font-bold text-foreground">Benefits & Inclusions</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Inclusions Summary</p>
                                <p className="text-muted-foreground mb-6 whitespace-pre-wrap">{mockData.inclusionsSummary}</p>
                            </div>

                            <div>
                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Additional Benefits</p>
                                <p className="text-muted-foreground">{mockData.additionalBenefits}</p>
                            </div>
                        </div>
                    </Card>

                    {/* PR Information */}
                    <Card className="p-8 border border-border/50 bg-card mb-8">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                            <div className="h-8 w-1 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                            <h2 className="text-2xl font-bold text-foreground">PR Pathway</h2>
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg border border-primary/20 mb-6">
                            <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-foreground mb-2">PR Offered: {mockData.prOffered}</p>
                                <p className="text-muted-foreground whitespace-pre-wrap">{mockData.prAdditionalInfo}</p>
                            </div>
                        </div>
                    </Card>

                    {/* Process & Additional Info */}
                    <Card className="p-8 border border-border/50 bg-card mb-8">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                            <div className="h-8 w-1 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                            <h2 className="text-2xl font-bold text-foreground">Process & Information</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-border/30">
                                    <ImageIcon className="w-5 h-5 text-primary" />
                                    <div>

                                        <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                                            Process Flow Chart
                                        </p>
                                        <FilePreview filePath={mockData.processFlowchart} />
                                    </div>
                                </div>


                                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-border/30">
                                    <FileText className="w-5 h-5 text-primary" />
                                    <div>
                                        <FilePreview filePath={mockData.frequentlyAskedQuestions} />
                                        <p className="text-xs text-muted-foreground">FAQ Document</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Additional Details</p>
                                <p className="text-muted-foreground">{mockData.additionalDetails}</p>
                            </div>
                        </div>
                    </Card>

                    {/* Referral Links */}
                    <Card className="p-8 border border-border/50 bg-card mb-8">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                            <div className="h-8 w-1 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                            <h2 className="text-2xl font-bold text-foreground">Referral & Contact Information</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Referral Link Contact</p>
                                <p className="text-muted-foreground mb-6">{mockData.referralLinkContact}</p>

                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                                    Companies (From Referral)
                                </p>
                                <p className="text-muted-foreground mb-6">{mockData.companiesFromReferral}</p>
                            </div>

                            <div>
                                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Links</p>
                                <div className="space-y-2">
                                    <a
                                        href={mockData.referralLink}
                                        className="text-primary hover:underline text-sm block"
                                    >
                                        Referral Link →
                                    </a>
                                    <a
                                        href={mockData.candidatesReferredFor}
                                        className="text-primary hover:underline text-sm block"
                                    >
                                        Candidates Referred For →
                                    </a>
                                    <a
                                        href={mockData.candidatesInterviewingFor}
                                        className="text-primary hover:underline text-sm block"
                                    >
                                        Candidates Interviewing For →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Card>

                </div>
            </div>
            <Footer />
        </>
    )
}