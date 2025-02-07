import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="max-w-[380px] w-full mx-auto">
        <h1 className="text-2xl heading text-gray-700">Forgot password</h1>

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

          <Button className="h-12 w-full mt-5" variant="brand">
            Send Reset Link
          </Button>

          <div className="mt-5 flex items-center justify-center">
            <span className="text-sm text-zinc-500">
              Remember your password?{" "}
              <Link href="/signin" className="underline">
                Sign in
              </Link>
            </span>
          </div>
        </form>
      </div>
    </main>
  );
}
