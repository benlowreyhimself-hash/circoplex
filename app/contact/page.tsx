'use client';

export default function Contact() {
    return (
        <div className="container" style={{ padding: '4rem 1rem' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem' }}>Get in Touch</h1>
            <div style={{ maxWidth: '600px' }}>
                <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
                    Interested in collaborating or have a question? Reach out.
                </p>
                <form style={{ display: 'grid', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
                    <div style={{ display: 'grid', gap: '0.5rem' }}>
                        <label htmlFor="name" style={{ fontWeight: '500' }}>Name</label>
                        <input
                            type="text"
                            id="name"
                            style={{
                                padding: '0.75rem',
                                borderRadius: '6px',
                                border: '1px solid var(--accent)',
                                background: 'var(--secondary)',
                                fontSize: '1rem'
                            }}
                        />
                    </div>
                    <div style={{ display: 'grid', gap: '0.5rem' }}>
                        <label htmlFor="email" style={{ fontWeight: '500' }}>Email</label>
                        <input
                            type="email"
                            id="email"
                            style={{
                                padding: '0.75rem',
                                borderRadius: '6px',
                                border: '1px solid var(--accent)',
                                background: 'var(--secondary)',
                                fontSize: '1rem'
                            }}
                        />
                    </div>
                    <div style={{ display: 'grid', gap: '0.5rem' }}>
                        <label htmlFor="message" style={{ fontWeight: '500' }}>Message</label>
                        <textarea
                            id="message"
                            rows={5}
                            style={{
                                padding: '0.75rem',
                                borderRadius: '6px',
                                border: '1px solid var(--accent)',
                                background: 'var(--secondary)',
                                fontSize: '1rem',
                                fontFamily: 'inherit'
                            }}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ justifySelf: 'start' }}>Send Message</button>
                </form>
            </div>
        </div>
    );
}
