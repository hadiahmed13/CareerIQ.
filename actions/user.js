"use server";

import { auth } from "@clerk/nextjs/server";

export async function updateUser(data) {
    const {userID} = await auth();

    if (!userID) {
        return { error: "Unauthorized" };
    }

    const user = await db.user.findUnique({
        where: {
            clerkUserId: userID,
        },
    });

    if (!user) throw new Error("User not found");

    try {
        const result = await db.$transaction(async (tx) => {
            // find if the industry exists
            const industry = await tx.industry.findUnique({
                where: {
                    name: data.industry,
                },
            });
            // if not, create it with default values
            if (!industryInsight) {
                industryInsight = await tx.industryInsight.create({
                    data: {
                        industry: data.industry,
                        salaryRanges: [], // Default empty array
                        growthRate: 0, // Default value
                        demandLevel: "Medium", // Default value
                        topSkills: [], // Default empty array
                        marketOutlook: "Neutral", // Default value
                        keyTrends: [], // Default empty array
                        recommendedSkills: [], // Default empty array
                        nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
                    },
                });
            }
            // update the user with the new industry
            
            const updatedUser = await tx.user.update({
                where: {
                    id: user.id,
                },
                data: {
                    industry: data.industry,
                    experience: data.experience,
                    bio: data.bio,
                    skills: data.skills,

                },
            });

            return {updatedUser, industryInsight};

        }, {
            timeout: 10000,
        });

        return result.user;

    } catch (error) {
        console.error("Error updating user", error);
        throw new Error("Failed to update user");
    }
    
}

export async function getUserOnboardingStatus() {
    const {userID} = await auth();

    if (!userID) {
        return { error: "Unauthorized" };
    }

    const user = await db.user.findUnique({
        where: {
            clerkUserId: userID,
        },
    });

    if (!user) throw new Error("User not found");

    try {
        const user = await db.user.findUnique({
            where: {
                clerkUserId: userID,
            },
            select: {
                industry: true,
            },
        });

        return {
            isOnboarded: !!user?.industry,
        };
        
        
    } catch (error) {

        console.error("Error getting user onboarding status", error);
        throw new Error("Failed to get user onboarding status");
    }
}