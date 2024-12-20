import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Brand Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-900">
              Link<span className="text-indigo-500">Byte</span>
            </h2>
            <p className="mt-2 text-sm">
              Shorten your links, track performance, and unlock insights — all in one place.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <div>
              <h3 className="font-semibold text-gray-900">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/about" className="hover:text-indigo-500">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-indigo-500">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-indigo-500">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">Support</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/help" className="hover:text-indigo-500">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-indigo-500">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-indigo-500">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/terms" className="hover:text-indigo-500">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-indigo-500">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="hover:text-indigo-500">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Link<span className="text-indigo-500">Byte</span>. All rights reserved.
          </p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://twitter.com"
              className="text-gray-500 hover:text-indigo-500 transition"
              aria-label="Twitter"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 19c11 0 17-9 17-17v-1a12 12 0 0 0 3-3c-1 .5-2 .7-3 .9a6 6 0 0 0 3-3 12 12 0 0 1-4 2 6 6 0 0 0-10 5A17 17 0 0 1 2 4a6 6 0 0 0 2 8 6 6 0 0 1-3-1v1a6 6 0 0 0 5 6 6 6 0 0 1-3 .1 6 6 0 0 0 5 4c-4 3-9 4-13 4a17 17 0 0 0 9 3" />
              </svg>
            </a>

            <a
              href="https://facebook.com"
              className="text-gray-500 hover:text-indigo-500 transition"
              aria-label="Facebook"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a10 10 0 0 0 10 10c5.523 0 10-4.477 10-10zM9 12H7v7H4V12H2v-2h2V8c0-1.1.9-2 2-2h2v2H8c-.552 0-1 .448-1 1v2h2l-1 2z" />
              </svg>
            </a>

            <a
              href="https://linkedin.com"
              className="text-gray-500 hover:text-indigo-500 transition"
              aria-label="LinkedIn"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2V9zm2-5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
