"use client";

import { enUS } from "@clerk/localizations";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@workspace/ui/components/sonner";

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
