"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@workspace/ui/components/button";
import { CheckCircle } from "lucide-react";

export default function RegistrationSuccessful() {
  const router = useRouter();

  return (
    <main className="h-screen flex items-center justify-center">
      <motion.div
        className="max-w-[480px] w-full mx-auto bg-white p-8 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 200,
            damping: 10,
          }}
          className="flex justify-center mb-6"
        >
          <CheckCircle className="w-16 h-16 text-brand" />
        </motion.div>

        <h1 className="text-2xl heading text-gray-700 text-center mb-4">
          Registration Successful!
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Your account has been created successfully. Welcome to Shelfie!
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            className="h-12 w-full mb-4"
            variant="brand"
            onClick={() => router.push("/library")}
          >
            Go to the library
          </Button>

          <div className="text-center">
            <Link
              href="/signin"
              className="text-sm text-zinc-500 hover:text-zinc-700 transition-colors"
            >
              Back to Sign In
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
