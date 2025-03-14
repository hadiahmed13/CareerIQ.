import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"] });


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CareerIQ",
  description: "Elevate your career with CareerIQ",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark
    }}>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
          {/* header */}
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Toaster richColors />
          {/* footer */}
          <footer className="border-t">
            <div className="container mx-auto px-4 py-8">
              <p className="text-sm text-muted-foreground">
                &copy; 2025 CareerIQ. All rights reserved.
              </p>
            </div>
          </footer>

        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
