import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="flex flex-col items-center justify-between gap-6 py-8 md:flex-row md:py-12">
          {/* Left: Logo + Tagline */}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Logo />
            <p className="text-sm text-indigo-200/65">
              Cold email marketing that converts
            </p>
          </div>

          {/* Center: Contact Email */}
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20">
              <svg className="h-4 w-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <a 
              href="mailto:contact@veteranoutbound.com"
              className="text-indigo-200/65 transition hover:text-indigo-400"
            >
              contact@veteranoutbound.com
            </a>
          </div>

          {/* Right: Social Links */}
          <div className="flex gap-1">
            <a
              className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-800/40 text-indigo-500 transition hover:bg-gray-800/60 hover:text-indigo-400"
              href="#0"
              aria-label="LinkedIn"
            >
              <svg
                className="h-4 w-4 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-800/40 text-indigo-500 transition hover:bg-gray-800/60 hover:text-indigo-400"
              href="#0"
              aria-label="Twitter"
            >
              <svg
                className="h-4 w-4 fill-current"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="border-t border-gray-800/40 py-4 text-center">
          <p className="text-sm text-indigo-200/65">
            © 2025 Veteran Outbound. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}