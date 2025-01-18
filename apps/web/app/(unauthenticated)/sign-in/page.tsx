"use client";

import Link from "next/link";
import { useSignIn } from "@clerk/nextjs";

import { Button } from "@workspace/ui/components/button";
import { Icons } from "@workspace/ui/components/icons";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type SignInFormData = z.infer<typeof signInSchema>;

export default function SignIn() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [error, setError] = useState<null | string>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInFormData) => {
    if (!isLoaded) {
      return;
    }

    try {
      const result = await signIn.create({
        identifier: data.email,
        password: data.password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/library");
      } else {
        console.error(JSON.stringify(result, null, 2));
      }
    } catch (err: any) {
      console.error("error", err.errors[0].message);
      setError(err.errors[0].message);
    }
  };

  if (!isLoaded) {
    return null;
  }

  return (
    <main className="h-screen flex items-center justify-center">
      <div className="max-w-[380px] w-full mx-auto">
        <h1 className="text-2xl heading text-gray-700">Sign in</h1>

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
              {...register("email")}
            />
          </div>
          <div className="flex flex-col">
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
              {...register("password")}
            />
          </div>

          <div className="mt-2 mb-5">
            <Link
              href="/forgot-password"
              className="text-sm text-zinc-500 underline hover:text-zinc-900 transition-colors"
            >
              Forgot password
            </Link>
          </div>

          <Button className="h-12 w-full" variant="brand" type="submit">
            Sign in
          </Button>

          <div className="my-5 flex justify-between gap-4 items-center">
            <div className="h-px w-full bg-zinc-200" />
            <span className="text-sm text-zinc-500 font-light">or</span>
            <div className="h-px w-full bg-zinc-200" />
          </div>

          <Button className="h-12 w-full" variant="outline" type="button">
            <Icons.apple /> Sign in with Apple
          </Button>

          <div className="mt-5 flex items-center justify-center">
            <span className="text-sm text-zinc-500 ">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className="underline">
                Sign up
              </Link>
            </span>
          </div>
        </form>
      </div>
    </main>
  );
}
