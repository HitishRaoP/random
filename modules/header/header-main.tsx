import Link from 'next/link'
import Image from 'next/image'
import { Menu as MenuIcon, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const HeaderMain = () => {
    return (
        <header className="w-full sticky top-0 z-50 py-3 bg-background backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Image src="/vercel.svg" alt="Nava Studio" width={24} height={24} className="invert" />
                    <Link href="/" className="text-xl font-semibold tracking-tight">Nava.Studio</Link>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant={'outline'} className="hidden sm:inline-flex items-center gap-2 rounded-full p-6 px-10">
                        <MenuIcon className="h-4 w-4" />
                        <span className="text-sm font-medium">Menu</span>
                    </Button>
                    <Button className="rounded-full p-6 px-10">
                        <Link href="#contact" className="inline-flex items-center gap-2">
                            <ArrowRight className="h-4 w-4" />
                            <span>Contact Us</span>
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}
