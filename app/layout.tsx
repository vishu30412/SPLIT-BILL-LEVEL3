import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Split Bill Calculator – Stellar dApp',
  description: 'A production-ready Stellar dApp for tracking shared bills with Soroban smart contracts and Freighter wallet.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
