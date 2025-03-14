import React from "react";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";
import { getIndustryInsights } from "@/actions/dashboard";
import DashboardView from "./_components/dashboard-view";

const IndustryInsightsPage = async () => {
    // check if user is already onboarded
    const { isOnboarded } = await getUserOnboardingStatus();
    const insights = await getIndustryInsights();

    // if user is not onboarded, redirect to onboarding page
    if (!isOnboarded) {
        redirect("/onboarding");
    }
    return (
        <div className="container mx-auto">
            <DashboardView insights={insights} />
        </div>
    )
}

export default IndustryInsightsPage;