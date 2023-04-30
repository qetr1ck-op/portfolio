import { z } from "zod";

const ENV_VARS = z.object({
  EMAILJS_SERVICE_ID: z.string(),
  EMAILJS_TEMPLATE_ID: z.string(),
  EMAILJS_PUBLIC_KEY: z.string(),
  EMAILJS_PRIVATE_KEY: z.string(),
  TO_EMAIL: z.string(),
  REDIS_URL: z.string(),
  REDIS_TOKEN: z.string(),
  NEXT_PUBLIC_HCAPTCHA_SITE_KEY: z.string(),
  HCAPTCHA_SECRET_KEY: z.string(),
});

ENV_VARS.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof ENV_VARS> {}
  }
}
