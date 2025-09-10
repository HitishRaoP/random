import Link from 'next/link'

export const HeroMain = () => {
    return (
        <section className="relative min-h-[100svh] overflow-hidden bg-black">
            <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-hidden
            >
                <source src="/4d715639-5237-47fe-8534-17ba56661793.mp4.webm" type="video/webm" />
            </video>
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28 min-h-[100svh] flex items-center">
                <div className="grid lg:grid-cols-2 gap-10 items-center w-full">
                    <div className="text-white">
                        <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                            Transforming your digital presence with innovative web design
                        </h1>
                        <p className="mt-6 text-base sm:text-lg text-white/80 max-w-xl">
                            We specialize in transforming your digital brand through impactful design and strategic branding. Our creative approach ensures your brand stands out, connects, and converts.
                        </p>
                    </div>
                    <div className="relative hidden lg:block" />
                </div>
            </div>
        </section>
    )
}




