import {
  ContactFormSchema,
  contactFormSchema,
} from "@/services/form-schemas.service";
import { ZodError } from "zod";
import emailjs from "@emailjs/nodejs";

export async function POST(request: Request) {
  const body = await request.json();
  console.log({ body });
  try {
    contactFormSchema.parse(body);

    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        from_name: body.name,
        from_email: body.email,
        to_email: "orestprustayko@gmail.com",
        message: body.message,
      },
      {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        privateKey: process.env.NEXT_PUBLIC_EMAILJS_PRIVATE_KEY!,
      }
    );

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
