import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Yitong Zhang",
  description: "Designer in San Francisco",
};

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="nav-link">
      {children}
    </Link>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <nav className="pt-12 pb-8 md:pt-16 md:pb-12">
            <div className="max-w-2xl mx-auto px-6">
              <div className="flex gap-6">
                <NavLink href="/writing">Writing</NavLink>
                <NavLink href="/work">Work</NavLink>
                <NavLink href="/about">About</NavLink>
              </div>
            </div>
          </nav>
          <main className="flex-1 pb-24">
            <div className="max-w-2xl mx-auto px-6">
              {children}
            </div>
          </main>
          <footer className="py-8">
            <div className="max-w-2xl mx-auto px-6">
              <p className="post-date">
                © {new Date().getFullYear()}
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
