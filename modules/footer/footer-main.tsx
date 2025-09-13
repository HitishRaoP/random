import Link from 'next/link'
import { Dribbble, Facebook, Instagram, Twitter } from 'lucide-react'

export const FooterMain = () => {
	return (
		<footer id="contact" className="mt-16  relative overflow-visible">
			<h2 className="font-serif absolute left-1/2 -translate-x-1/2 top-[-2.5rem] sm:top-[-3rem] md:top-[-6rem] z-30 font-semibold leading-none text-[10vw] sm:text-[11vw] md:text-[9vw] lg:text-[7vw] xl:text-[6vw] whitespace-nowrap">
				LET'S WORK
			</h2>
			<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					{/* Brand + Social */}
					<div>
						<div className="text-2xl font-semibold">Nava.Studio</div>
						<p className="mt-6 text-sm text-muted-foreground/90">Connect with me:</p>
						<div className="mt-4 flex items-center gap-4">
							<Link href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors">
								<Dribbble className="h-5 w-5" />
							</Link>
							<Link href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors">
								<Facebook className="h-5 w-5" />
							</Link>
							<Link href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors">
								<Twitter className="h-5 w-5" />
							</Link>
							<Link href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors">
								<Instagram className="h-5 w-5" />
							</Link>
						</div>
					</div>

					{/* Pages */}
					<div>
						<div className="text-xl font-semibold text-white">Pages</div>
						<ul className="mt-6 space-y-6 text-lg">
							<li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
							<li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
							<li><Link href="#works" className="hover:text-white transition-colors">Our Works</Link></li>
							<li><Link href="/contact" className="hover:text-white transition-colors">Contact us</Link></li>
						</ul>
					</div>

					{/* Contact Details */}
					<div>
						<div className="space-y-8">
							<div>
								<div className="text-sm uppercase tracking-wide text-neutral-400">Phone:</div>
								<div className="mt-2 text-lg text-white">+906 2093 0087</div>
							</div>
							<div>
								<div className="text-sm uppercase tracking-wide text-neutral-400">Email:</div>
								<div className="mt-2 text-lg text-white">hello@navastudio.com</div>
							</div>
							<div>
								<div className="text-sm uppercase tracking-wide text-neutral-400">Address:</div>
								<div className="mt-2 text-lg text-white max-w-xs">123 Maplewood Drive Springfield, IL 62704 United States</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-16 border-t border-neutral-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
					<div>Copyright 2025. All rights reserved.</div>
					<div className="flex items-center gap-4">
						<Link href="#" className="hover:text-white">Privacy Policy</Link>
						<span>|</span>
						<Link href="#" className="hover:text-white">Terms of Conditions</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}


