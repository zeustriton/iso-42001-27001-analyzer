'use client';

import React from 'react';
import Link from 'next/link';
import { Shield } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="hidden font-bold sm:inline-block">
              ISO 42001 vs 27001
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}