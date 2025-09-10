const services = [
    { title: 'Branding', desc: 'We master the art of shaping a unique identity that resonates with audiences and sets a business apart.' },
    { title: 'App Design', desc: 'We focus on creating user-friendly interfaces and seamless experiences for mobile and desktop applications.' },
    { title: 'Web Design', desc: 'Streamline processes. AI-powered HR solutions built for smarter. Adipiscing sagittis diam potenti id convallis' },
    { title: 'Development', desc: 'Turning design concepts into functional software through coding. It includes front-end, back-end, and full-stack d' },
]

export const ServicesGrid = () => {
    return (
        <section id="services" className="py-16 sm:py-24 border-t">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                    <p className="text-sm uppercase tracking-widest text-muted-foreground">Services We Provide</p>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Expert Services to Drive Success</h2>
                    <p className="mt-4 text-muted-foreground">Enable businesses to thrive online by delivering tailored web development</p>
                </div>
                <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((s, i) => (
                        <div key={i} className="rounded-2xl border p-6 hover:shadow-sm transition-shadow bg-card">
                            <div className="text-lg font-semibold">{s.title}</div>
                            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                            <button className="mt-4 text-sm underline underline-offset-4">Learn More</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


