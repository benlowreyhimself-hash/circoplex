export default function Tutorials() {
    return (
        <div className="container">
            <section style={{ padding: '4rem 0' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>
                    Video Tutorials
                </h1>
                <p style={{ fontSize: '1.25rem', opacity: 0.8, maxWidth: '700px', marginBottom: '3rem' }}>
                    Comprehensive video library covering every angle: shoulders, spine, and hips.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <div style={{ padding: '2rem', background: 'var(--secondary)', borderRadius: '1rem' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Daily Drills</h3>
                        <p style={{ opacity: 0.7 }}>Short, effective daily handstand drills to build consistency and form.</p>
                    </div>

                    <div style={{ padding: '2rem', background: 'var(--secondary)', borderRadius: '1rem' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Deep Dives</h3>
                        <p style={{ opacity: 0.7 }}>Hour-long sessions on alignment, pressing mechanics, and mobility.</p>
                    </div>

                    <div style={{ padding: '2rem', background: 'var(--secondary)', borderRadius: '1rem' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>The Archive</h3>
                        <p style={{ opacity: 0.7 }}>Access to over 70 exclusive tutorials covering technique fundamentals.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
