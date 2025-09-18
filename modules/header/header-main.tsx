import Link from 'next/link'
import Image from 'next/image'
import { Menu as MenuIcon, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const HeaderMain = () => {
    return (
        <header className="w-full sticky top-0 z-50 py-3 bg-background backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Image src="/vercel.svg" alt="work0" width={24} height={24} className="invert" />
                    <Link href="/" className="text-xl tracking-tight font-mono">Work0</Link>
                </div>
                <div className="flex items-center gap-3">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="relative hidden sm:block">
                                <Button variant={'outline'} className="inline-flex items-center gap-2 rounded-full p-6">
                                    <MenuIcon className="h-4 w-4" />
                                    <span className="text-sm font-medium">Menu</span>
                                </Button>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="backdrop-blur-md w-[85vw] sm:w-[520px] max-w-[320px]">
                            <div className="space-y-5 sm:space-y-6">
                                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Home</h3>
                                <nav className="space-y-4 sm:space-y-5 text-lg sm:text-2xl text-neutral-300">
                                    <Link href="#about" className="block hover:text-white">About us</Link>
                                    <Link href="#works" className="block hover:text-white">Works</Link>
                                    <Link href="#pricing" className="block hover:text-white">Pricing</Link>
                                </nav>
                            </div>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button className="rounded-full hidden sm:flex  p-6 px-10">
                        <Link href="/contact" className="inline-flex items-center gap-2">
                            <ArrowRight className="h-4 w-4" />
                            <span>Let's Connect</span>
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}
