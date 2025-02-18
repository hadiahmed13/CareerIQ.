import React from "react";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LayoutDashboardIcon } from "lucide-react";
const Header = () => {
    return (
        <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
            <nav className="container mx-auto px-4 py-4 h-16 flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo.png" alt="CareerIQ" width={150} height={100} className="h-12 py-1 w-autoobject-contain"/>
                </Link>

                <div className="flex items-center gap-4">
                    <SignedIn>
                        <Link href="/dashboard">
                            <Button>
                                <LayoutDashboardIcon className="w-4 h-4 mr-2" />
                                Industry Insights
                            </Button>
                        </Link>
                    </SignedIn>

                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                </div>
            </nav>



            <SignedOut>
                <SignInButton />
            </SignedOut>
          
            <SignedIn>
                <UserButton />
            </SignedIn>
        </header>
    )
}

export default Header;