export default function Blog() {
    return (
        <div className="container" style={{ padding: '4rem 1rem' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '3rem' }}>Journal</h1>
            <div style={{ display: 'grid', gap: '3rem' }}>
                {[1, 2, 3].map((i) => (
                    <article key={i} style={{ borderBottom: '1px solid var(--accent)', paddingBottom: '3rem' }}>
                        <div style={{ fontSize: '0.9rem', opacity: 0.6, marginBottom: '0.5rem' }}>December {20 + i}, 2024</div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: '600' }}>
                            <a href="#" style={{ textDecoration: 'none' }}>Blog Post {i} Title</a>
                        </h2>
                        <p style={{ fontSize: '1.1rem', opacity: 0.8, marginBottom: '1.5rem' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore...
                        </p>
                        <a href="#" style={{ fontWeight: '500', textDecoration: 'underline' }}>Read more</a>
                    </article>
                ))}
            </div>
        </div>
    );
}
