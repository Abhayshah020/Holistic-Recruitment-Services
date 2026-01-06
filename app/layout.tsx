import type { Metadata } from 'next'
import './globals.css'
import ProtectedPage from '@/components/ProtectedPage'

export const metadata: Metadata = {
  title: 'Holistic Recruitment Services - Find Your Perfect Job',
  description: 'Connect extraordinary individuals with exceptional opportunities. Finding the perfect job has never been easier.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <ProtectedPage>
          {children}
        </ProtectedPage>
      </body>
    </html>
  )
}
