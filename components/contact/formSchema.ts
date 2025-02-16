import { z } from "zod";

// Regex to strip harmful characters and scripts
const sanitizeInput = (value: string) => value.replace(/<\/?[^>]+(>|$)/g, ""); // Remove HTML tags

export const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name cannot exceed 50 characters." })
    .transform(sanitizeInput),

  email: z
    .string()
    .email({ message: "Invalid email address." })
    .max(100, { message: "Email is too long." }),

  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(500, { message: "Message cannot exceed 500 characters." })
    .transform(sanitizeInput),
});

export type FormData = z.infer<typeof formSchema>;
