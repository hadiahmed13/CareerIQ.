"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import onboardingSchema from "@/app/lib/schema";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
const OnboardingForm = ({ industries }) => {

    const [selectedIndustry, setSelectedIndustry] = useState(null);
    const router = useRouter();

    const {
        register, 
        handleSubmit, 
        formState: {errors},
        setValue,
        watch
    } = useForm({
        resolver: zodResolver(onboardingSchema),
    })

    const subIndustry = watch("subIndustry");

    return (
        <div className="flex items-center justify-center bg-background">
            <Card className="w-full max-w-lg mt-10 mx-2">
            <CardHeader>
                <CardTitle className="text-4xl font-bold gradient-title">Complete your profile</CardTitle>
                <CardDescription>Select your industry to get personalized insights and recommendations</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    
                </form>
            </CardContent>
            </Card>
        </div>
    )
}

export default OnboardingForm;