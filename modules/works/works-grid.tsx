import Image from 'next/image'

const items = [
    { title: 'Rhrive — 2025', tags: ['Design','Web Design'] },
    { title: 'Q. Arch — 2025', tags: ['Design','Web Design'] },
    { title: 'Rhrive — 2025', tags: ['Design','Web Design'] },
]

export const WorksGrid = () => {
    return (
        <section id="works" className="py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                    <p className="text-sm uppercase tracking-widest text-muted-foreground">Our Works</p>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Our Work Speaks Than Words</h2>
                    <p className="mt-4 text-muted-foreground">Enable businesses to thrive online by delivering tailored web development</p>
                </div>
                <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, idx) => (
                        <div key={idx} className="rounded-2xl border overflow-hidden hover:shadow-sm transition-shadow">
                            <div className="aspect-video bg-secondary" />
                            <div className="p-4">
                                <div className="font-medium">{item.title}</div>
                                <div className="mt-1 text-sm text-muted-foreground">{item.tags.join(' · ')}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


