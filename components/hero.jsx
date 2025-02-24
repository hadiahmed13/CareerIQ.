import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Image
        src="/banner6.jpg"
        alt="CareerIQ Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
        {/* Add a margin on large screens to push it slightly right */}
        <div className="max-w-lg text-center text-white md:ml-12">
          <h1 className="text-4xl font-bold mb-4 gradient-title">
            Boost Your Career with AI.
          </h1>
          <p className="mb-6">
            Advance your career with personalized AI-powered insights,
            interview preparation, and job search assistance.
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
