"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import axiosClient from "@/lib/axiosClient"
import { AlertCircle, CheckCircle2, ChevronRight, File, FileText, ImageIcon, X } from "lucide-react"
import { useRouter } from "next/navigation"
import type React from "react"
import { useEffect, useState } from "react"


interface RecruitmentFormData {
  // Basic Info
  project: string
  countryTags: string[]
  vacancyLocations: string
  vacancyTypeTags: string[]
  workEnvironment: string
  numberOfVacancies: string
  salary: string

  // Files
  marketingFlyer: File | null
  vacancyFlyer: File | null
  candidateIdRequirements: File | null
  processFlowchart: File | null
  frequentlyAskedQuestions: File | null

  // Links
  referralLink: string
  candidatesReferredFor: string
  candidatesInterviewingFor: string
  referralLinkContact: string
  companies: string

  // Cost & Policy
  totalCostToCandidate: string
  refundPolicy: string
  visaPackageCost: string
  costIncludedInVisa: string
  costNotIncludedInVisa: string

  // Requirements
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

  // Documentation & Visa
  documentationVerification: string
  visaProcessTime: string
  agentIntroductoryVisaCost: string
  documentsRequiredForJobOffer: string

  // Additional Info
  prOffered: string
  prAdditionalInformation: string
  additionalDetails: string
  workHours: string
  inclusionsSummary: string
  additionalBenefits: string
}

const initialData: RecruitmentFormData = {
  project: "",
  countryTags: [],
  vacancyLocations: "",
  vacancyTypeTags: [],
  workEnvironment: "",
  numberOfVacancies: "",
  salary: "",
  marketingFlyer: null,
  vacancyFlyer: null,
  candidateIdRequirements: null,
  processFlowchart: null,
  frequentlyAskedQuestions: null,
  referralLink: "https://holisticrs.com.au/recruitment-forms/agent-referral/create",
  candidatesReferredFor: "",
  candidatesInterviewingFor: "",
  referralLinkContact: "",
  companies: "",
  totalCostToCandidate: "",
  refundPolicy: "",
  visaPackageCost: "",
  costIncludedInVisa: "",
  costNotIncludedInVisa: "",
  agePreference: "",
  nationalityPreference: "",
  genderPreference: "",
  licenceCar: "",
  homeCountryRegistration: "",
  qualificationsRequired: "",
  experienceRequired: "",
  englishIELTS: "",
  otherLanguage: "",
  skillAssessmentsRequired: "",
  testing: "",
  documentationVerification: "",
  visaProcessTime: "",
  agentIntroductoryVisaCost: "",
  documentsRequiredForJobOffer: "",
  prOffered: "",
  prAdditionalInformation: "",
  additionalDetails: "",
  workHours: "",
  inclusionsSummary: "",
  additionalBenefits: "",
}


function FilePreview({ filePath }: { filePath: string }) {
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

export default function RecruitmentForm({ id }: { id?: string }) {
  const [formData, setFormData] = useState<RecruitmentFormData>(initialData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const router = useRouter();
  const [existingFiles, setExistingFiles] = useState<any>({})

  useEffect(() => {
    if (!id) return;
    if (id && typeof id !== "string") return;
    const fetchHandleData = async () => {
      try {
        const result = await axiosClient.get(`/recruitment-forms/${id}`);
        setFormData(result.data)
        // ONLY file paths here
        setExistingFiles({
          marketingFlyer: result.data.marketingFlyer,
          vacancyFlyer: result.data.vacancyFlyer,
          candidateIdRequirements: result.data.candidateIdRequirements,
          processFlowchart: result.data.processFlowchart,
          frequentlyAskedQuestions: result.data.frequentlyAskedQuestions,
        });
      } catch (error) {
        console.log(" ~ error:", error)
      }
    }
    fetchHandleData();
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target
    if (files?.[0]) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }))
    }
  }

  const addTag = (field: "countryTags" | "vacancyTypeTags", value: string) => {
    if (value.trim() && !formData[field].includes(value.trim())) {
      setFormData((prev) => ({
        ...prev,
        [field]: [...prev[field], value.trim()],
      }))
    }
  }

  const removeTag = (field: "countryTags" | "vacancyTypeTags", index: number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      const formDataToSend = new FormData()

      // Add all text fields
      Object.entries(formData).forEach(([key, value]) => {
        if (key !== "countryTags" && key !== "vacancyTypeTags" && !(value instanceof File)) {
          formDataToSend.append(key, String(value))
        }
      })

      // Add arrays as JSON
      formDataToSend.append("countryTags", JSON.stringify(formData.countryTags))
      formDataToSend.append("vacancyTypeTags", JSON.stringify(formData.vacancyTypeTags))

      // Add files
      if (formData.marketingFlyer) formDataToSend.append("marketingFlyer", formData.marketingFlyer)
      if (formData.vacancyFlyer) formDataToSend.append("vacancyFlyer", formData.vacancyFlyer)
      if (formData.candidateIdRequirements)
        formDataToSend.append("candidateIdRequirements", formData.candidateIdRequirements)
      if (formData.processFlowchart) formDataToSend.append("processFlowchart", formData.processFlowchart)
      if (formData.frequentlyAskedQuestions)
        formDataToSend.append("frequentlyAskedQuestions", formData.frequentlyAskedQuestions)

      await axiosClient.post("/recruitment-forms/", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      router.push("/recruitment-forms")
      // setSuccess(true)
      // setFormData(initialData)
      // setTimeout(() => setSuccess(false), 5000)
    } catch (err: any) {
      setError(err.message || "Something went wrong")
      console.log("Error submitting form:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-3 tracking-tight">
            Recruitment <span className="text-primary">Portal</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Create and manage global recruitment campaigns with precision
          </p>
        </div>

        <Card className="p-10 border border-border/50 shadow-sm bg-card">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
              <h2 className="text-3xl font-bold text-foreground">Complete Position Details</h2>
            </div>
            <p className="text-muted-foreground text-sm">Fill in all recruitment information</p>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-lg bg-destructive/10 border border-destructive/20 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-destructive text-sm">Error</p>
                <p className="text-xs text-destructive/80">{error}</p>
              </div>
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 rounded-lg bg-emerald-50 border border-emerald-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-emerald-700 text-sm">Success</p>
                <p className="text-xs text-emerald-600">Form submitted successfully</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <section className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground border-b pb-3 border-border">Basic Information</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">Project</label>
                  <input
                    type="text"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    placeholder="Job title and location"
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>

                {/* Country Tags */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">Countries (Tags)</label>
                  <div className="flex gap-2 items-start flex-wrap">
                    <input
                      type="text"
                      placeholder="Add country and press +..."
                      className="flex-1 min-w-[150px] px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault()
                          addTag("countryTags", e.currentTarget.value)
                          e.currentTarget.value = ""
                        }
                      }}
                    />
                    <Button
                      type="button"
                      size="sm"
                      onClick={(e: any) => {
                        const input = e.currentTarget.parentElement?.querySelector("input") as HTMLInputElement
                        if (input) {
                          addTag("countryTags", input.value)
                          input.value = ""
                        }
                      }}
                    >
                      +
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.countryTags.map((tag, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium"
                      >
                        {tag}
                        <button type="button" onClick={() => removeTag("countryTags", i)}>
                          <X className="w-4 h-4" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">Vacancy Locations</label>
                  <input
                    type="text"
                    name="vacancyLocations"
                    value={formData.vacancyLocations}
                    onChange={handleChange}
                    placeholder="Cities"
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>

                {/* Vacancy Type Tags */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">Vacancy Types (Tags)</label>
                  <div className="flex gap-2 items-start flex-wrap">
                    <input
                      type="text"
                      placeholder="Add type and press +..."
                      className="flex-1 min-w-[150px] px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault()
                          addTag("vacancyTypeTags", e.currentTarget.value)
                          e.currentTarget.value = ""
                        }
                      }}
                    />
                    <Button
                      type="button"
                      size="sm"
                      onClick={(e: any) => {
                        const input = e.currentTarget.parentElement?.querySelector("input") as HTMLInputElement
                        if (input) {
                          addTag("vacancyTypeTags", input.value)
                          input.value = ""
                        }
                      }}
                    >
                      +
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.vacancyTypeTags.map((tag, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium"
                      >
                        {tag}
                        <button type="button" onClick={() => removeTag("vacancyTypeTags", i)}>
                          <X className="w-4 h-4" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">Work Environment</label>
                  <input
                    type="text"
                    name="workEnvironment"
                    value={formData.workEnvironment}
                    onChange={handleChange}
                    placeholder="Remote, Hybrid, On-site"
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">Number of Vacancies</label>
                  <input
                    type="text"
                    name="numberOfVacancies"
                    value={formData.numberOfVacancies}
                    onChange={handleChange}
                    placeholder="e.g., 5"
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-semibold text-foreground">Salary Range</label>
                  <input
                    type="text"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    placeholder="$100,000 - $150,000"
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
              </div>
            </section>

            {/* File Uploads */}
            <section className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground border-b pb-3 border-border">Documents & Media</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">Marketing Flyer (Images)</label>
                  <input
                    type="file"
                    name="marketingFlyer"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary"
                  />
                  {formData.marketingFlyer && (
                    <p className="text-xs text-muted-foreground">{formData.marketingFlyer.name}</p>
                  )}
                  {existingFiles.marketingFlyer && (
                    <>
                      Previous Data:
                      <FilePreview filePath={existingFiles.marketingFlyer} />
                    </>
                  )}

                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">Vacancy Flyer (PDF)</label>
                  <input
                    type="file"
                    name="vacancyFlyer"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary"
                  />
                  {formData.vacancyFlyer && (
                    <p className="text-xs text-muted-foreground">{formData.vacancyFlyer.name}</p>
                  )}
                  {existingFiles.vacancyFlyer && (
                    <>
                      Previous Data:
                      <FilePreview filePath={existingFiles.vacancyFlyer} />
                    </>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">
                    Candidate ID/Document Requirements (PDF)
                  </label>
                  <input
                    type="file"
                    name="candidateIdRequirements"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary"
                  />
                  {formData.candidateIdRequirements && (
                    <p className="text-xs text-muted-foreground">{formData.candidateIdRequirements.name}</p>
                  )}
                  {existingFiles.candidateIdRequirements && (
                    <>
                      Previous Data:
                      <FilePreview filePath={existingFiles.candidateIdRequirements} />
                    </>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">Process Flowchart (Images)</label>
                  <input
                    type="file"
                    name="processFlowchart"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary"
                  />
                  {formData.processFlowchart && (
                    <p className="text-xs text-muted-foreground">{formData.processFlowchart.name}</p>
                  )}
                  {existingFiles.processFlowchart && (
                    <>
                      Previous Data:
                      <FilePreview filePath={existingFiles.processFlowchart} />
                    </>
                  )}
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-semibold text-foreground">Frequently Asked Questions (PDF)</label>
                  <input
                    type="file"
                    name="frequentlyAskedQuestions"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary"
                  />
                  {formData.frequentlyAskedQuestions && (
                    <p className="text-xs text-muted-foreground">{formData.frequentlyAskedQuestions.name}</p>
                  )}
                  {existingFiles.frequentlyAskedQuestions && (
                    <>
                      Previous Data:
                      <FilePreview filePath={existingFiles.frequentlyAskedQuestions} />
                    </>
                  )}
                </div>
              </div>
            </section>

            {/* Links Section */}
            <section className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground border-b pb-3 border-border">Links</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">Referral Link</label>
                  <input
                    type="url"
                    name="referralLink"
                    value={formData.referralLink}
                    onChange={handleChange}
                    placeholder="https://example.com/referral"
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">Candidates Referred For (Link)</label>
                  <input
                    type="url"
                    name="candidatesReferredFor"
                    value={formData.candidatesReferredFor}
                    onChange={handleChange}
                    placeholder="https://example.com/referred"
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">Candidates Interviewing For (Link)</label>
                  <input
                    type="url"
                    name="candidatesInterviewingFor"
                    value={formData.candidatesInterviewingFor}
                    onChange={handleChange}
                    placeholder="https://example.com/interviewing"
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">Referral Link Contact</label>
                  <input
                    type="text"
                    name="referralLinkContact"
                    value={formData.referralLinkContact}
                    onChange={handleChange}
                    placeholder="Contact person or email"
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-semibold text-foreground">
                    Companies (from Referral Link Contact)
                  </label>
                  <input
                    type="text"
                    name="companies"
                    value={formData.companies}
                    onChange={handleChange}
                    placeholder="Company names"
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
              </div>
            </section>

            {/* Cost & Policy */}
            <section className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground border-b pb-3 border-border">Cost & Policy</h3>

              <div className="grid grid-cols-1 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">
                    Total Cost to Candidate (incl visa pkg)
                  </label>
                  <textarea
                    name="totalCostToCandidate"
                    value={formData.totalCostToCandidate}
                    onChange={handleChange}
                    placeholder="Enter total cost details..."
                    rows={4}
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">Refund Policy</label>
                  <textarea
                    name="refundPolicy"
                    value={formData.refundPolicy}
                    onChange={handleChange}
                    placeholder="Enter refund policy details..."
                    rows={4}
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">Visa Package Cost</label>
                  <textarea
                    name="visaPackageCost"
                    value={formData.visaPackageCost}
                    onChange={handleChange}
                    placeholder="Enter visa package cost..."
                    rows={4}
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">Cost Included in Visa Package</label>
                  <textarea
                    name="costIncludedInVisa"
                    value={formData.costIncludedInVisa}
                    onChange={handleChange}
                    placeholder="Enter costs included..."
                    rows={4}
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">Cost NOT Included in Visa Package</label>
                  <textarea
                    name="costNotIncludedInVisa"
                    value={formData.costNotIncludedInVisa}
                    onChange={handleChange}
                    placeholder="Enter costs not included..."
                    rows={4}
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  />
                </div>
              </div>
            </section>

            {/* Requirements */}
            <section className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground border-b pb-3 border-border">Requirements</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">Age Preference</label>
                  <input
                    type="text"
                    name="agePreference"
                    value={formData.agePreference}
                    onChange={handleChange}
                    placeholder="e.g., 25-45 years"
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">Nationality Preference</label>
                  <input
                    type="text"
                    name="nationalityPreference"
                    value={formData.nationalityPreference}
                    onChange={handleChange}
                    placeholder="Preferred nationalities"
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">Gender Preference</label>
                  <input
                    type="text"
                    name="genderPreference"
                    value={formData.genderPreference}
                    onChange={handleChange}
                    placeholder="Gender preference"
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">Licence & Car</label>
                  <input
                    type="text"
                    name="licenceCar"
                    value={formData.licenceCar}
                    onChange={handleChange}
                    placeholder="Licence and car requirements"
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">Home Country Registration</label>
                  <input
                    type="text"
                    name="homeCountryRegistration"
                    value={formData.homeCountryRegistration}
                    onChange={handleChange}
                    placeholder="Registration requirements"
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">Qualifications Required</label>
                  <input
                    type="text"
                    name="qualificationsRequired"
                    value={formData.qualificationsRequired}
                    onChange={handleChange}
                    placeholder="Required qualifications"
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">Experience Required</label>
                  <input
                    type="text"
                    name="experienceRequired"
                    value={formData.experienceRequired}
                    onChange={handleChange}
                    placeholder="Years of experience needed"
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">English (IELTS)</label>
                  <input
                    type="text"
                    name="englishIELTS"
                    value={formData.englishIELTS}
                    onChange={handleChange}
                    placeholder="IELTS score requirement"
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">Other Language</label>
                  <input
                    type="text"
                    name="otherLanguage"
                    value={formData.otherLanguage}
                    onChange={handleChange}
                    placeholder="Other language requirements"
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">Skill Assessments Required</label>
                  <input
                    type="text"
                    name="skillAssessmentsRequired"
                    value={formData.skillAssessmentsRequired}
                    onChange={handleChange}
                    placeholder="Required assessments"
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">Testing Required</label>
                  <input
                    type="text"
                    name="testing"
                    value={formData.testing}
                    onChange={handleChange}
                    placeholder="Yes/No"
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
              </div>
            </section>

            {/* Documentation & Visa */}
            <section className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground border-b pb-3 border-border">
                Documentation & Visa
              </h3>

              <div className="grid grid-cols-1 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">
                    Documentation Verification, Exam Fees, etc.
                  </label>
                  <textarea
                    name="documentationVerification"
                    value={formData.documentationVerification}
                    onChange={handleChange}
                    placeholder="Enter documentation details..."
                    rows={4}
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">Visa Process Time</label>
                  <textarea
                    name="visaProcessTime"
                    value={formData.visaProcessTime}
                    onChange={handleChange}
                    placeholder="Estimated time for visa processing..."
                    rows={4}
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">Agent Introductory Visa Package Cost</label>
                  <textarea
                    name="agentIntroductoryVisaCost"
                    value={formData.agentIntroductoryVisaCost}
                    onChange={handleChange}
                    placeholder="Enter agent visa package cost..."
                    rows={4}
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">
                    Documents Required for Job Offer / Work Permit
                  </label>
                  <textarea
                    name="documentsRequiredForJobOffer"
                    value={formData.documentsRequiredForJobOffer}
                    onChange={handleChange}
                    placeholder="List required documents..."
                    rows={4}
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  />
                </div>
              </div>
            </section>

            {/* Additional Information */}
            <section className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground border-b pb-3 border-border">
                Additional Information
              </h3>

              <div className="grid grid-cols-1 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">PR Offered (Y/N)</label>
                  <input
                    type="text"
                    name="prOffered"
                    value={formData.prOffered}
                    onChange={handleChange}
                    placeholder="Yes/No"
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">PR Additional Information</label>
                  <textarea
                    name="prAdditionalInformation"
                    value={formData.prAdditionalInformation}
                    onChange={handleChange}
                    placeholder="Enter PR details..."
                    rows={4}
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">Additional Details</label>
                  <textarea
                    name="additionalDetails"
                    value={formData.additionalDetails}
                    onChange={handleChange}
                    placeholder="Enter additional details..."
                    rows={4}
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">Work Hours</label>
                  <textarea
                    name="workHours"
                    value={formData.workHours}
                    onChange={handleChange}
                    placeholder="Enter work hours details..."
                    rows={4}
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">Inclusions Summary</label>
                  <textarea
                    name="inclusionsSummary"
                    value={formData.inclusionsSummary}
                    onChange={handleChange}
                    placeholder="Enter inclusions summary..."
                    rows={4}
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground">Additional Benefits</label>
                  <textarea
                    name="additionalBenefits"
                    value={formData.additionalBenefits}
                    onChange={handleChange}
                    placeholder="Enter additional benefits..."
                    rows={4}
                    className="px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  />
                </div>
              </div>
            </section>

            <div className="flex items-center justify-between gap-4 pt-8 border-t border-border/50">
              <Button type="button" variant="outline" onClick={() => setFormData(initialData)}>
                Reset
              </Button>

              <Button
                type="submit"
                disabled={loading}
                className="gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
              >
                {loading ? "Submitting..." : "Submit"}
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}
