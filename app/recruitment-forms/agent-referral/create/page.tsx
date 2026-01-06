"use client"

import { Button } from "@/components/ui/button"
import axiosClient from "@/lib/axiosClient"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function AgentReferralForm() {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        firstName: "",
        surname: "",
        mobile: "",
        email: "",
        dateOfBirth: "",
        countryOfBirth: "",
        passportNumber: "",
        providerContactName: "",
        providerContactEmail: "",
        providerContactPhone: ""
    })

    const [resume, setResume] = useState<File | null>(null)
    const [passport, setPassport] = useState<File | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const payload = new FormData()

            Object.entries(formData).forEach(([key, value]) => {
                payload.append(key, value)
            })

            if (resume) payload.append("resume", resume)
            if (passport) payload.append("passport", passport)

            await axiosClient.post("/agent-referrals", payload, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })

            alert("Agent referral submitted successfully")
        } catch (err) {
            console.error(err)
            alert("Something went wrong")
        } finally {
            setLoading(false)
        }
    }


    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow">
                <Link href="/recruitment-forms">
                    <Button variant="ghost" className="gap-2 cursor-pointer mb-6 text-muted-foreground hover:text-foreground">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Portal
                    </Button>
                </Link>
                <h1 className="mb-6 text-2xl font-semibold text-gray-800">
                    Agent Referral Form
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Details */}
                    <Section title="Candidate Details">
                        <Input name="firstName" label="First Name" onChange={handleChange} required />
                        <Input name="surname" label="Surname" onChange={handleChange} required />
                        <Input name="mobile" label="Mobile Number" onChange={handleChange} required />
                        <Input name="email" label="Email" type="email" onChange={handleChange} />
                        <Input name="dateOfBirth" label="Date of Birth" type="date" onChange={handleChange} required />
                        <Input name="countryOfBirth" label="Country of Birth" onChange={handleChange} required />
                        <Input name="passportNumber" label="Passport Number" onChange={handleChange} />
                    </Section>

                    {/* Files */}
                    <Section title="Documents">
                        <FileInput
                            label="Resume (PDF / Image)"
                            onChange={(e) => setResume(e.target.files?.[0] || null)}
                            required
                        />
                        <FileInput
                            label="Passport (PDF / Image)"
                            onChange={(e) => setPassport(e.target.files?.[0] || null)}
                            required
                        />
                    </Section>

                    {/* Provider */}
                    <Section title="Provider Contact Details">
                        <Input name="providerContactName" label="Contact Name" onChange={handleChange} />
                        <Input name="providerContactEmail" label="Contact Email" type="email" onChange={handleChange} />
                        <Input name="providerContactPhone" label="Contact Phone" onChange={handleChange} />
                    </Section>

                    <button
                        disabled={loading}
                        className="w-full rounded-lg bg-black py-3 text-white transition hover:bg-gray-900 disabled:opacity-50"
                    >
                        {loading ? "Submitting..." : "Submit Referral"}
                    </button>
                </form>
            </div>
        </div>
    )
}

/* ---------- Reusable Components ---------- */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div>
            <h2 className="mb-4 text-lg font-medium text-gray-700">{title}</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{children}</div>
        </div>
    )
}

function Input({
    label,
    ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
    return (
        <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-600">{label}</label>
            <input
                {...props}
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none"
            />
        </div>
    )
}

function FileInput({
    label,
    ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
    return (
        <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-600">{label}</label>
            <input
                type="file"
                {...props}
                className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm"
                accept=".pdf,image/*"
            />
        </div>
    )
}
