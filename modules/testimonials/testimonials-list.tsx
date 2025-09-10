const testimonials = [
    {
        name: 'Jacob B.',
        title: 'HR Manager Bank Central',
        quote: 'The team took time to our vision and understand translated it into a design that feels intentional, and completely authentic.'
    },
    {
        name: 'Sarah N.',
        title: 'Marketing Director',
        quote: 'Every design choice had a reason behind it, and it showed in the results. We’ve had more engagement than ever before!'
    },
]

export const TestimonialsList = () => {
    return (
        <section className="py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                    <p className="text-sm uppercase tracking-widest text-muted-foreground">4.5/5 client review — 1k Satisfied Client</p>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Sweet Words</h2>
                </div>
                <div className="mt-10 grid sm:grid-cols-2 gap-6">
                    {testimonials.map((t, i) => (
                        <figure key={i} className="rounded-2xl border p-6 bg-card">
                            <blockquote className="text-sm text-muted-foreground">“{t.quote}”</blockquote>
                            <figcaption className="mt-4">
                                <div className="font-medium">{t.name}</div>
                                <div className="text-xs text-muted-foreground">{t.title}</div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    )
}


