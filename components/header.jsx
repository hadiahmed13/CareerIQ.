import React from "react";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LayoutDashboardIcon, StarsIcon, ChevronDownIcon, FileText, PenBox, GraduationCap } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

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
                            <Button variant="outline">
                                <LayoutDashboardIcon className="w-4 h-4 mr-2" />
                                <span className="hidden md:block">Industry Insights</span>
                            </Button>
                        </Link>
                    

                        <DropdownMenu>

                            <DropdownMenuTrigger asChild>
                                <Button>
                                    <StarsIcon className="w-4 h-4 mr-2" />
                                    <span className="hidden md:block">Growth Tools</span>
                                    <ChevronDownIcon className="w-4 h-4 ml-2" />
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    <Link href="/resume" className="flex items-center gap-2">
                                        <FileText className="w-4 h-4 mr-2" />
                                        <span>Build Resume</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/ai-cover-letter" className="flex items-center gap-2">
                                        <PenBox className="w-4 h-4 mr-2" />
                                        <span>Cover Letter</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/interview" className="flex items-center gap-2">
                                        <GraduationCap className="w-4 h-4 mr-2" />
                                        <span>Interview Prep</span>
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>

                        </DropdownMenu>
                    </SignedIn>

                    <SignedOut>
                        <SignInButton>
                            <Button variant="outline">Sign In</Button>
                        </SignInButton>
                    </SignedOut>
          
                    <SignedIn>
                        <UserButton 
                            appearance={{
                                elements: {
                                    avatarBox: "h-9 w-9",
                                    userButtonPopoverCard: "shadow-xl",
                                    userPreviewMainIdentifier: "font-semibold",
                                    userButtonMenuButton: "h-10 w-10 px-2 py-0"
                                }
                            }}
                            afterSignOutUrl="/"
                        />
                    </SignedIn>



                </div>
            </nav>



            
        </header>
    )
}

export default Header;