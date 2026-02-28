import './globals.css';
import React, { ReactNode } from 'react';

export const metadata = {
  title: 'Pig Production Management',
  description: 'Frontend for pig production system'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* app shell will be added later */}
        {children}
      </body>
    </html>
  );
}
