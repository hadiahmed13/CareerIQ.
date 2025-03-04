import { z } from "zod";

const onboardingSchema = z.object({
    industry: z.string({required_error: "Industry is required"}).min(1),
    subIndustry: z.string({required_error: "Sub Industry is required"}).min(1),
    experience: z
    .string()
    .transform((val) => parseInt(val, 10))
    .pipe(
        z
        .number()
        .min(0, {message: "Experience must be a positive number"})
        .max(50, {message: "Experience must be less than 50"})
    ),

    
    bio: z.string().max(500).optional(),
    skills: z
    .string().transform((val) => 
        val
           ? val
            .split(",")
            .map((skill) => skill.trim())
            .filter(Boolean)
           : undefined
    ),
});

export default onboardingSchema;