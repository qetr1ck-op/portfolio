import {
  ContactFormSchema,
  contactFormSchema,
} from "@/services/form-schemas.service";
import { ZodError } from "zod";
import emailjs from "@emailjs/nodejs";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.REDIS_URL!,
  token: process.env.REDIS_TOKEN!,
});

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(1, "10 s"),
  analytics: true,
});

function sendEmail({
  email,
  message,
  name,
  toEmail = process.env.EMAILJS_TO_EMAIL!,
}: {
  email: string;
  name: string;
  message: string;
  toEmail?: string;
}) {
  return emailjs.send(
    process.env.EMAILJS_SERVICE_ID!,
    process.env.EMAILJS_TEMPLATE_ID!,
    {
      from_name: name,
      from_email: email,
      to_email: toEmail,
      message: message,
    },
    {
      publicKey: process.env.EMAILJS_PUBLIC_KEY!,
      privateKey: process.env.EMAILJS_PRIVATE_KEY!,
    }
  );
}

export async function POST(request: Request) {
  const body = await request.json();

  const identifier = "api";
  const { success } = await ratelimit.limit(identifier);

  if (!success) {
    return new Response("Too many requests ", {
      status: 429,
    });
  }

  try {
    contactFormSchema.parse(body);

    await sendEmail({
      email: body.email,
      message: body.message,
      name: body.name,
    });

    return new Response("OK", {
      status: 201,
    });
  } catch (error) {
    console.log({ error });
    if (error instanceof ZodError<ContactFormSchema>) {
      return new Response(error.toString(), {
        status: 400,
      });
    }

    return new Response(error as any, {
      status: 500,
    });
  }
}
