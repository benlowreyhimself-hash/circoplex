import type { Metadata } from "next";
import "./globals.css";
import GTM from "@/components/GTM";
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Circoplex",
    description: "Performance and Life",
    icons: {
        icon: '/favicon.png',
        shortcut: '/favicon.png',
        apple: '/favicon.png',
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <GTM />
                <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                    <header style={{ padding: '2rem 0', borderBottom: '1px solid var(--accent)' }}>
                        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                                Circoplex
                            </Link>
                            <nav style={{ display: 'flex', gap: '2rem' }}>
                                <Link href="/about" style={{ opacity: 0.8, transition: 'opacity 0.2s' }}>About</Link>
                                <Link href="/blog" style={{ opacity: 0.8, transition: 'opacity 0.2s' }}>Blog</Link>
                                <Link href="/contact" style={{ opacity: 0.8, transition: 'opacity 0.2s' }}>Contact</Link>
                            </nav>
                        </div>
                    </header>

                    <main style={{ flex: 1, paddingTop: '2rem' }}>
                        {children}
                    </main>

                    <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--accent)', marginTop: '4rem' }}>
                        <div className="container" style={{ textAlign: 'center', opacity: 0.6 }}>
                            <p>&copy; {new Date().getFullYear()} Circoplex. All rights reserved.</p>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
}
