import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2).max(20),
  email: z.string().email(),
  message: z.string().min(10).max(800),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
