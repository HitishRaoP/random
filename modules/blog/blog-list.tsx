const posts = [
    { category: 'Web Design', read: '05 mins read', date: 'March 22, 2025', title: 'A key advantage lies in its powerful software capabilities.' },
    { category: 'Marketing', read: '05 mins read', date: 'March 22, 2025', title: 'A key advantage lies in its powerful software capabilities.' },
    { category: 'Development', read: '05 mins read', date: 'March 22, 2025', title: 'A key advantage lies in its powerful software capabilities.' },
]

export const BlogList = () => {
    return (
        <section id="blogs" className="py-16 sm:py-24 border-t">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                    <p className="text-sm uppercase tracking-widest text-muted-foreground">Insight</p>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Recent Articles</h2>
                    <p className="mt-4 text-muted-foreground">Transforming your digital presence with innovative web design, intuitive app design, and impactful branding to drive business seccess.</p>
                </div>
                <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((p, i) => (
                        <article key={i} className="rounded-2xl border p-6 bg-card">
                            <div className="text-xs text-muted-foreground">{p.category} · {p.read} · {p.date}</div>
                            <h3 className="mt-2 text-base font-medium leading-snug">{p.title}</h3>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}


