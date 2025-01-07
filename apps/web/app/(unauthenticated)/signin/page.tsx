import Link from "next/link";

import { Button } from "@workspace/ui/components/button";
import { Icons } from "@workspace/ui/components/icons";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";

export default function SignIn() {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="max-w-[380px] w-full mx-auto">
        <h1 className="text-2xl heading text-gray-700">Sign in</h1>

        <form action="">
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

          <Button className="bg-[#278458] hover:bg-[#389e6e] h-12 text-white w-full">
            Sign in
          </Button>

          <div className="my-5 flex justify-between gap-4 items-center">
            <div className="h-px w-full bg-zinc-200" />
            <span className="text-sm text-zinc-500 font-light">or</span>
            <div className="h-px w-full bg-zinc-200" />
          </div>

          <Button className="h-12 w-full" variant="outline">
            <Icons.apple /> Sign in with Apple
          </Button>

          <div className="mt-5 flex items-center justify-center">
            <span className="text-sm text-zinc-500 ">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="underline">
                Sign up
              </Link>
            </span>
          </div>
        </form>
      </div>
    </main>
  );
}
