'use client';

import React from 'react';
import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-bold">ISO 42001 vs 27001</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 ISO 42001 vs 27001. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}