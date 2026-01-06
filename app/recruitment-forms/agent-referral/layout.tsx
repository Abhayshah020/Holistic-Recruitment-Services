import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      <main className="w-full pt-15">
        {children}
      </main>
      <Footer />

    </>
  )
}
