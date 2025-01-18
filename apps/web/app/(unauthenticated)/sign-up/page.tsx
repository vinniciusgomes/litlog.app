"use client";

import Link from "next/link";
import { useSignUp } from "@clerk/nextjs";

import { Button } from "@workspace/ui/components/button";
import { Icons } from "@workspace/ui/components/icons";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp";
import { LoaderCircle } from "lucide-react";
import type { clerkErrorType } from "@/lib/clerk";

const signUpSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type SignUpFormData = z.infer<typeof signUpSchema>;

export default function SignUp() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [error, setError] = useState<null | clerkErrorType>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpFormData) => {
    if (!isLoaded) {
      return;
    }

    try {
      setLoading(true);
      await signUp.create({
        emailAddress: data.email,
        password: data.password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setPendingVerification(true);
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  async function onPressVerify(e: React.FormEvent) {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    setLoading(true);

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignUp.status !== "complete") {
        console.log(JSON.stringify(completeSignUp, null, 2));
      }

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.push("/library");
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
      setError(err);
    }

    setLoading(false);
  }

  if (!isLoaded) {
    return null;
  }

  return (
    <main className="h-screen flex items-center justify-center">
      <div className="max-w-[380px] w-full mx-auto">
        <h1 className="text-2xl heading text-gray-700">
          {pendingVerification ? "Verify your email" : "Sign up"}
        </h1>

        {!pendingVerification ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              <Label
                htmlFor="email"
                className="py-5 text-sm text-zinc-500 font-light"
              >
                Email
              </Label>
              <Input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-[14px] h-14"
                error={
                  error?.errors?.find(
                    (e) => e.meta.paramName === "email_address"
                  )?.message
                }
                {...register("email")}
              />
            </div>
            <div className="flex flex-col mb-8">
              <Label
                htmlFor="password"
                className="py-5 text-sm text-zinc-500 font-light"
              >
                Password
              </Label>
              <Input
                type="password"
                placeholder="Password"
                className="flex-1 px-4 py-[14px] h-14"
                error={
                  error?.errors?.find((e) => e.meta.paramName === "password")
                    ?.message
                }
                {...register("password")}
              />
            </div>

            <Button
              className="h-12 w-full"
              variant="brand"
              type="submit"
              disabled={loading}
            >
              Sign up{" "}
              {loading && <LoaderCircle className="h-4 w-4 animate-spin" />}
            </Button>

            <div className="my-5 flex justify-between gap-4 items-center">
              <div className="h-px w-full bg-zinc-200" />
              <span className="text-sm text-zinc-500 font-light">or</span>
              <div className="h-px w-full bg-zinc-200" />
            </div>

            <Button
              className="h-12 w-full"
              variant="outline"
              type="button"
              disabled={loading}
            >
              <Icons.apple /> Sign up with Apple
            </Button>

            <div className="mt-5 flex items-center justify-center">
              <span className="text-sm text-zinc-500 ">
                Already have an account?{" "}
                <Link href="/sign-in" className="underline">
                  Sign in
                </Link>
              </span>
            </div>
          </form>
        ) : (
          <form onSubmit={onPressVerify}>
            <div className="flex flex-col mb-8">
              <Label
                htmlFor="code"
                className="py-5 text-sm text-zinc-500 font-light"
              >
                Code
              </Label>

              <InputOTP
                maxLength={6}
                onChange={setCode}
                className="w-full flex items-center justify-between gap-2"
              >
                <InputOTPGroup className="flex-1 flex justify-between">
                  <InputOTPSlot
                    index={0}
                    className="h-14 flex-1 min-w-[40px]"
                  />
                  <InputOTPSlot
                    index={1}
                    className="h-14 flex-1 min-w-[40px]"
                  />
                  <InputOTPSlot
                    index={2}
                    className="h-14 flex-1 min-w-[40px]"
                  />
                </InputOTPGroup>
                <InputOTPSeparator className="w-auto" />
                <InputOTPGroup className="flex-1 flex justify-between">
                  <InputOTPSlot
                    index={3}
                    className="h-14 flex-1 min-w-[40px]"
                  />
                  <InputOTPSlot
                    index={4}
                    className="h-14 flex-1 min-w-[40px]"
                  />
                  <InputOTPSlot
                    index={5}
                    className="h-14 flex-1 min-w-[40px]"
                  />
                </InputOTPGroup>
              </InputOTP>

              {error?.errors[0].long_message && (
                <p className="mt-[6px] text-sm text-destructive">
                  {error?.errors[0].long_message}
                </p>
              )}
            </div>

            <Button
              className="h-12 w-full"
              variant="brand"
              type="submit"
              disabled={code.length !== 6 || loading}
            >
              Verify Email{" "}
              {loading && <LoaderCircle className="h-4 w-4 animate-spin" />}
            </Button>
          </form>
        )}

        <div id="clerk-captcha" />
      </div>
    </main>
  );
}
