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

            <section style={{ padding: '6rem 0' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '4rem' }}>
                    Masters of Balance
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <div style={{ padding: '2rem', background: 'var(--secondary)', borderRadius: '1rem' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Daily Drills</h3>
                        <p style={{ opacity: 0.7 }}>Short, effective daily handstand drills to build consistency and form.</p>
                    </div>
                    <div style={{ padding: '2rem', background: 'var(--secondary)', borderRadius: '1rem' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Premium Sessions</h3>
                        <p style={{ opacity: 0.7 }}>Hour-long deep dives into alignment, pressing mechanics, and mobility.</p>
                    </div>
                    <div style={{ padding: '2rem', background: 'var(--secondary)', borderRadius: '1rem' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>The Archive</h3>
                        <p style={{ opacity: 0.7 }}>Access to over 70 exclusive tutorials covering every angle: shoulders, spine, and hips.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
