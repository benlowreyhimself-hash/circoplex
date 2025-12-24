export default function Home() {
    return (
        <div className="container">
            <section style={{
                minHeight: '60vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                gap: '2rem'
            }}>
                <h1 style={{ fontSize: '4rem', fontWeight: '800', lineHeight: 1.1 }}>
                    Life in Motion.
                </h1>
                <p style={{ fontSize: '1.25rem', opacity: 0.8, maxWidth: '600px' }}>
                    Welcome to the new digital home of Circoplex. Exploring performance, art, and the spaces in between.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href="/about" className="btn btn-primary">Read More</a>
                    <a href="/contact" className="btn btn-outline">Get in Touch</a>
                </div>
            </section>

            <section style={{ padding: '4rem 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {[1, 2, 3].map((i) => (
                    <div key={i} style={{
                        aspectRatio: '16/9',
                        background: 'var(--secondary)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0.5
                    }}>
                        <span>Content Placeholder {i}</span>
                    </div>
                ))}
            </section>
        </div>
    );
}
