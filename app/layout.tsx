import '@styles/globals.css';
import type { Metadata } from 'next';
import { Bai_Jamjuree } from 'next/font/google';

import { ClerkProvider } from '@clerk/nextjs';
import Pane from '@/components/ui/Pane';

const bai_jamjuree = Bai_Jamjuree({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={bai_jamjuree.className}>
          <Pane>{children}</Pane>
        </body>
      </html>
    </ClerkProvider>
  );
}
