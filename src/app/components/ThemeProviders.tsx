'use client';

import React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

interface ThemeProvidersProps {
  children: React.ReactNode;
}

export default function ThemeProviders({ children }: ThemeProvidersProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}