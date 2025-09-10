export const PartnersRow = () => {
    return (
        <section className="py-12 border-y bg-secondary/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center text-sm text-muted-foreground">Nava Studio works with the industry's top platforms.</div>
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="h-12 rounded-lg border bg-card flex items-center justify-center text-xs">Logo</div>
                    ))}
                </div>
            </div>
        </section>
    )
}


