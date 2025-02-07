"use client";

import { Progress } from "@workspace/ui/components/progress";
import { AnimatePresence,motion } from "framer-motion";
import { useState } from "react";

import { Genre,OnboardingData } from "../types/onboarding";
import { FavoriteBooksStep } from "./favorite-books-step";
import { PreferencesStep } from "./preferences-step";
import { TopBooksStep } from "./top-books-step";

const steps = ["preferences", "favoriteBooks", "topBooks"] as const;
type Step = (typeof steps)[number];

export function Onboarding() {
  const [currentStep, setCurrentStep] = useState<Step>("preferences");
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({
    preferences: [],
    favoriteBooks: [],
  });

  const handlePreferencesNext = (preferences: Genre[]) => {
    setOnboardingData((prev: OnboardingData) => ({ ...prev, preferences }));
    setCurrentStep("favoriteBooks");
  };

  const handleFavoriteBooksNext = (favoriteBooks: string[]) => {
    setOnboardingData((prev: OnboardingData) => ({ ...prev, favoriteBooks }));
    setCurrentStep("topBooks");
  };

  const handleFinish = () => {
    console.log("Onboarding concluído:", onboardingData);
    // Aqui você pode enviar os dados para o servidor ou realizar outras ações necessárias
  };

  const currentStepIndex = steps.indexOf(currentStep);
  const progress = ((currentStepIndex + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Progress value={progress} className="mb-8" />
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {currentStep === "preferences" && (
                <PreferencesStep onNext={handlePreferencesNext} />
              )}
              {currentStep === "favoriteBooks" && (
                <FavoriteBooksStep onNext={handleFavoriteBooksNext} />
              )}
              {currentStep === "topBooks" && (
                <TopBooksStep onFinish={handleFinish} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
