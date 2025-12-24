export default function Home() {
    return (
        <div className="container">
            <section style={{
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                gap: '2rem',
                padding: '2rem'
            }}>
                <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: '800', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                    Life in Motion.
                </h1>
                <p style={{ fontSize: '1.5rem', opacity: 0.8, maxWidth: '700px', lineHeight: 1.6 }}>
                    Exploring performance, art, and the spaces in between.
                    The culmination of 500 handstand workshops filmed over four years.
                </p>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                    <a href="/tutorials" className="btn btn-primary">Start Training</a>
                    <a href="/about" className="btn btn-outline">Read The Story</a>
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
