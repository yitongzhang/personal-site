import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Personal Blog",
  description: "A minimal personal blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <nav className="border-b border-gray-200">
            <div className="max-w-4xl mx-auto px-4 py-6">
              <div className="flex gap-8">
                <Link href="/writing" className="hover:text-gray-600 transition-colors">
                  writing
                </Link>
                <Link href="/work" className="hover:text-gray-600 transition-colors">
                  work
                </Link>
                <Link href="/about" className="hover:text-gray-600 transition-colors">
                  about
                </Link>
              </div>
            </div>
          </nav>
          <main className="flex-1">
            <div className="max-w-4xl mx-auto px-4 py-12">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
