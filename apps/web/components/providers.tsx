"use client";

import { enUS } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@workspace/ui/components/sonner";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import * as React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider localization={enUS}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
        enableColorScheme
      >
        {children}

        <Toaster closeButton position="top-right" className="!z-50 min-w-max" />
      </NextThemesProvider>
    </ClerkProvider>
  );
}
