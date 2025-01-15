"use client";

import { Button } from "@workspace/ui/components/button";
import { GoalProgress } from "./components/goal-progress";
import { CreateGoalForm } from "./components/create-goal-form";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@workspace/ui/components/dialog";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { cn } from "@workspace/ui/lib/utils";

export default function GoalsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen p-4 md:p-8"
    >
      <div className="mx-auto max-w-4xl w-full pt-8 pb-24">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl heading font-bold tracking-tight">Goals</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Create goal</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <CreateGoalForm />
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 w-full mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">2025 Reading Goal</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center mt-8">
              <GoalProgress current={1} target={25} />
              <div className="mt-8 grid grid-cols-5 gap-2">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "aspect-square rounded-md border",
                      i === 0 ? "bg-muted" : "bg-card"
                    )}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
