export default function Workshops() {
    return (
        <div className="container">
            <section style={{ padding: '4rem 0' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>
                    UK Handstand Workshops
                </h1>
                <p style={{ fontSize: '1.25rem', opacity: 0.8, maxWidth: '700px', marginBottom: '3rem' }}>
                    Workshops designed to progress Yoga, Pole & Fitness enthusiasts towards a solid and confident handstand.
                </p>

                <div style={{ display: 'grid', gap: '2rem', marginBottom: '4rem' }}>
                    <div style={{ padding: '2rem', background: 'var(--secondary)', borderRadius: '1rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>What to Expect</h2>
                        <ul style={{ opacity: 0.8, lineHeight: 1.8 }}>
                            <li>Suitable for beginners who cannot yet balance</li>
                            <li>Learn how to spot each other safely</li>
                            <li>Exercises to challenge every ability level</li>
                            <li>Focus on fun, movement & variety</li>
                            <li>Basic acrobatic movements: cartwheels, walking on hands</li>
                        </ul>
                    </div>

                    <div style={{ padding: '2rem', background: 'var(--secondary)', borderRadius: '1rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Private Lessons</h2>
                        <p style={{ opacity: 0.8, lineHeight: 1.8 }}>
                            One-on-one sessions available for personalized coaching and accelerated progress.
                        </p>
                    </div>
                </div>

                <div style={{ padding: '2rem', background: 'linear-gradient(135deg, #FF9966 0%, #FFCC99 100%)', borderRadius: '1rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'white' }}>Workshop Archive</h2>
                    <p style={{ opacity: 0.9, color: 'white' }}>
                        Over 500 handstand workshops filmed over four years. The archive is now available for viewing.
                    </p>
                </div>
            </section>
        </div>
    );
}
