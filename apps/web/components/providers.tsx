"use client";

import { enUS } from "@clerk/localizations";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";

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
      </NextThemesProvider>
    </ClerkProvider>
  );
}
