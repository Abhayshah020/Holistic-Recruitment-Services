"use client"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import RecruitmentForm from "@/components/recruitment-form"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function Home() {
    const { id } = useParams()
    const idString = Array.isArray(id) ? id[0] : id

    const [user, setUser] = useState(null)

    useEffect(() => {
        const user = sessionStorage.getItem("user")
        if (!user) return;
        setUser(JSON.parse(user))
    }, [])

    if(!user) return <>Loading....</>
    
    return (
        <>
            <Navbar />
            <main className="w-full pt-5">
                <Link href="/recruitment-forms">
                    <Button variant="ghost" className="gap-2 cursor-pointer mt-20 mb-6 text-muted-foreground hover:text-foreground">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Portal
                    </Button>
                </Link>
                <RecruitmentForm id={idString} />
            </main>
            <Footer />
        </>
    )
}
