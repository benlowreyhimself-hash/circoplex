import Link from 'next/link';

export const metadata = {
    title: 'About This Software | Circoplex',
    description: 'Learn about the technology and architecture behind the Circoplex website.',
};

export default function AboutSoftwarePage() {
    return (
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', opacity: 0.7 }}>
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
            </Link>

            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>About This Software</h1>
            <p style={{ opacity: 0.7, marginBottom: '3rem', fontSize: '1.1rem' }}>
                The technology powering circoplex.com
            </p>

            <article style={{ lineHeight: 1.8 }}>
                <p style={{ marginBottom: '1.5rem' }}>
                    Circoplex represents a modern reimagining of what was once a WordPress-powered platform, now rebuilt as a streamlined Next.js application. This migration preserves the rich history of circus and performance content while embracing contemporary web standards for speed, accessibility, and maintainability.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>The Migration Story</h2>
                <p style={{ marginBottom: '1.5rem' }}>
                    Originally built on WordPress with the Divi theme, Circoplex served as a hub for workshops, tutorials, and content about circus arts and performance. The new codebase represents a complete architectural refresh—moving from a PHP-based CMS to a React-powered static generation model. This transition preserves SEO value while dramatically improving page load times and security.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>Technical Architecture</h2>
                <p style={{ marginBottom: '1.5rem' }}>
                    Built with Next.js and TypeScript, the site uses the App Router for modern routing patterns and server-side rendering. The design system is intentionally minimal—using CSS variables and inline styles to maintain simplicity and reduce build complexity. This lightweight approach ensures fast development cycles and easy content updates.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>Key Features</h2>
                <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
                    <li style={{ marginBottom: '0.5rem' }}>Clean, distraction-free reading experience</li>
                    <li style={{ marginBottom: '0.5rem' }}>Static generation for optimal performance</li>
                    <li style={{ marginBottom: '0.5rem' }}>Responsive layout for all screen sizes</li>
                    <li style={{ marginBottom: '0.5rem' }}>Google Tag Manager integration for analytics</li>
                    <li style={{ marginBottom: '0.5rem' }}>SEO-optimised metadata structure</li>
                    <li style={{ marginBottom: '0.5rem' }}>Preserved favicon and brand identity</li>
                </ul>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>Content Sections</h2>
                <p style={{ marginBottom: '1.5rem' }}>
                    The site is organised around five core pillars: Workshops for hands-on learning experiences, Tutorials for self-paced skill development, an About section sharing the story behind the project, a Blog for ongoing insights and updates, and Contact for collaboration opportunities. Each section is designed to serve artists, performers, and enthusiasts in the circus and movement arts community.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>Design Philosophy</h2>
                <p style={{ marginBottom: '1.5rem' }}>
                    The visual design prioritises content legibility with generous whitespace, clear typography, and subtle accent colours. The header-based navigation provides easy access to all sections while the footer maintains copyright and brand presence. This understated aesthetic puts focus on the content itself—the workshops, tutorials, and knowledge sharing that define Circoplex.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' }}>Infrastructure</h2>
                <p style={{ marginBottom: '1.5rem' }}>
                    Deployed on Vercel's global edge network, Circoplex benefits from automatic HTTPS, intelligent caching, and worldwide CDN distribution. The WordPress backup is preserved alongside the new codebase, ensuring historical content can be referenced or restored as needed. This modern infrastructure eliminates the security concerns and maintenance overhead traditionally associated with WordPress hosting.
                </p>

                <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--accent)', opacity: 0.6, fontSize: '0.9rem' }}>
                    <p>
                        Built with Next.js, React, and TypeScript. Deployed on Vercel.
                        <br />
                        © {new Date().getFullYear()} Circoplex. All rights reserved.
                    </p>
                </div>
            </article>
        </div>
    );
}
