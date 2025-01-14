"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { Eye, EyeOff } from "lucide-react";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log("Password reset submitted");
  };

  return (
    <main className="h-screen flex items-center justify-center">
      <div className="max-w-[380px] w-full mx-auto">
        <h1 className="text-2xl heading text-gray-700">Create new password</h1>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <Label
              htmlFor="password"
              className="py-5 text-sm text-zinc-500 font-light"
            >
              New Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter new password"
                className="flex-1 px-4 py-[14px] h-14 pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-500" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-col">
            <Label
              htmlFor="confirmPassword"
              className="py-5 text-sm text-zinc-500 font-light"
            >
              Confirm New Password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm new password"
              className="flex-1 px-4 py-[14px] h-14"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Button className="h-12 w-full mt-5" variant="brand" type="submit">
              Reset Password
            </Button>
          </motion.div>

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
