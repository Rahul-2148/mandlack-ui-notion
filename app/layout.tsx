import './globals.css';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Mandlack',
  description: 'Camera Monitoring UI',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={true}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
