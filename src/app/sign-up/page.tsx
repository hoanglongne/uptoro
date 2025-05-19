"use client"

import Link from "next/link"
import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
})

export default function SignUp() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    try {
      const apiUrl = process.env.NEXT_PUBLIC_VERCEL_URL
        ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/waitlist`
        : '/api/waitlist';

      console.log("Submitting to API URL:", apiUrl);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: values.email }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error:', response.status, errorText);
        throw new Error(`API error ${response.status}: ${errorText || 'Unknown error'}`);
      }

      const data = await response.json();
      console.log('Email added to waitlist:', values.email);
      setIsSuccess(true);
    } catch (error) {
      console.error('Error submitting email:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-[80vh] flex-col px-8 pt-20 max-w-screen-xl mx-auto">
      <div className="w-full md:max-w-6xl">
        {isSuccess ? (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Thank you for joining!</h1>
            <p className="text-gray-500 mb-6">We'll notify you as soon as Nook is ready for you to try.</p>
            <Link href="/">
              <button className="rounded-full bg-[#f25d9c] text-white hover:bg-[#f25d9c]/90 px-6 py-2.5 text-base font-bold">
                Back to home
              </button>
            </Link>
          </div>
        ) : (
          <div>
            <p className="text-[20px] md:text-[24px] font-medium mb-4">
              Be the first to earn up to <span className="text-[#6eb88e] font-medium">8.4% APY</span> on your savings
            </p>
            <h1 className="text-[56px] md:text-[90px] leading-[1.1] font-extrabold mb-5">Reserve your spot today</h1>
            <p className="text-gray-400 text-[18px] mb-12 max-w-2xl">
              Join the waitlist to be first to be notified about updates and rollout of the beta.
            </p>

            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
              <div className="flex items-center gap-3 max-w-[442px]">
                <div className="relative flex-grow">
                  <input
                    type="email"
                    placeholder="name@email.com"
                    {...form.register("email")}
                    className="w-full h-[50px] px-5 py-2 text-base rounded-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-500 text-sm mt-1 ml-5">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-[50px] w-[100px] rounded-full bg-black text-white hover:bg-black/90 px-0 text-base font-medium transition-colors"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Joining...
                    </span>
                  ) : "Join"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </main>
  )
}
