export const metadata = {
  title: "JSON Formatter App",
  description: "A simple JSON Formatter App using Next.js App Router",
};

import { ReactNode } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          <header className="app-header">
            <h1>Next.js JSON Formatter</h1>
          </header>
          <main>{children}</main>
          <footer className="app-footer">
            <p>© 2024 JSON Formatter. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
