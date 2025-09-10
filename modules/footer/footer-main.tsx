export const FooterMain = () => {
    return (
        <footer id="contact" className="mt-16 border-t">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    <div>
                        <h3 className="text-2xl font-semibold">Let’s work Together</h3>
                        <p className="mt-2 text-muted-foreground">Connect with me:</p>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-6 text-sm">
                        <div>
                            <div className="font-medium">Phone:</div>
                            <div className="text-muted-foreground mt-1">+906 2093 0087</div>
                        </div>
                        <div>
                            <div className="font-medium">Email:</div>
                            <div className="text-muted-foreground mt-1">hello@navastudio.com</div>
                        </div>
                        <div>
                            <div className="font-medium">Address:</div>
                            <div className="text-muted-foreground mt-1">123 Maplewood Drive Springfield, IL 62704 United States</div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
                    <div>Copyright 2025. All rights reserved.</div>
                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <span>|</span>
                        <a href="#" className="hover:underline">Terms of Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}


