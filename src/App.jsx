import { useState } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";

// Import pages
import Home from "./pages/Home";
import Choir from "./pages/Choir";
import Stories from "./pages/Stories";
import Programmes from "./pages/Programmes";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Logo, Donate Button, and Navigation */}
      <header className="bg-[#0a0a3c] text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top section with logo and donate button */}
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img
                  src="https://www.berakhah.org/wp-content/uploads/2019/10/Berakah-web_logo3.png"
                  alt="Berakhah ChildCare Logo"
                  className="h-16 w-auto mr-2"
                />
                <span className="text-2xl font-bold text-white">
                  Berakhah <span className="text-amber-400">ChildCare</span>
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-amber-400 hover:bg-[#0a0a5c]"
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon for menu */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Donate Now Button and Phone */}
            <div className="hidden md:flex flex-col items-end">
              <Link
                to="/contact#donate"
                className="px-6 py-2 bg-[#e91e63] text-white font-bold rounded-md mb-1 hover:bg-[#d81b60] transition-all duration-300 animate-pulse shadow-lg shadow-[#e91e63]/30"
              >
                Donate Now
              </Link>
              <div className="text-white text-lg font-semibold">
                03000 999 786
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:block border-t border-gray-700">
            <div className="flex justify-center py-3">
              <div className="flex space-x-8">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium uppercase tracking-wide ${
                      isActive
                        ? "text-amber-400"
                        : "text-white hover:text-amber-400"
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/choir"
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium uppercase tracking-wide ${
                      isActive
                        ? "text-amber-400"
                        : "text-white hover:text-amber-400"
                    }`
                  }
                >
                  Choir
                </NavLink>
                <NavLink
                  to="/stories"
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium uppercase tracking-wide ${
                      isActive
                        ? "text-amber-400"
                        : "text-white hover:text-amber-400"
                    }`
                  }
                >
                  Stories
                </NavLink>
                <NavLink
                  to="/programmes"
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium uppercase tracking-wide ${
                      isActive
                        ? "text-amber-400"
                        : "text-white hover:text-amber-400"
                    }`
                  }
                >
                  Programmes
                </NavLink>
                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium uppercase tracking-wide ${
                      isActive
                        ? "text-amber-400"
                        : "text-white hover:text-amber-400"
                    }`
                  }
                >
                  Gallery
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium uppercase tracking-wide ${
                      isActive
                        ? "text-amber-400"
                        : "text-white hover:text-amber-400"
                    }`
                  }
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium uppercase tracking-wide ${
                      isActive
                        ? "text-amber-400"
                        : "text-white hover:text-amber-400"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0a5c] pb-3 px-2 space-y-1 sm:px-3 shadow-lg">
            <Link
              to="/"
              onClick={toggleMobileMenu}
              className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-white hover:bg-[#0a0a7c] hover:text-amber-400"
            >
              Home
            </Link>
            <Link
              to="/choir"
              onClick={toggleMobileMenu}
              className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-white hover:bg-[#0a0a7c] hover:text-amber-400"
            >
              Choir
            </Link>
            <Link
              to="/stories"
              onClick={toggleMobileMenu}
              className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-white hover:bg-[#0a0a7c] hover:text-amber-400"
            >
              Stories
            </Link>
            <Link
              to="/programmes"
              onClick={toggleMobileMenu}
              className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-white hover:bg-[#0a0a7c] hover:text-amber-400"
            >
              Programmes
            </Link>
            <Link
              to="/gallery"
              onClick={toggleMobileMenu}
              className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-white hover:bg-[#0a0a7c] hover:text-amber-400"
            >
              Gallery
            </Link>
            <Link
              to="/about"
              onClick={toggleMobileMenu}
              className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-white hover:bg-[#0a0a7c] hover:text-amber-400"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              onClick={toggleMobileMenu}
              className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-white hover:bg-[#0a0a7c] hover:text-amber-400"
            >
              Contact
            </Link>
            <Link
              to="/contact#donate"
              onClick={toggleMobileMenu}
              className="block px-3 py-2 rounded-md text-base font-medium bg-[#e91e63] text-white hover:bg-[#d81b60] w-full text-center animate-pulse shadow-lg shadow-[#e91e63]/30"
            >
              Donate Now
            </Link>
          </div>
        )}
      </header>

      {/* Main Content with Routes */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/choir" element={<Choir />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a0a3c] text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <img
                  src="https://www.berakhah.org/wp-content/uploads/2019/10/Berakah-web_logo3.png"
                  alt="Berakhah ChildCare Logo"
                  className="h-12 w-auto mr-2"
                />
                <div className="text-2xl font-bold">
                  Berakhah <span className="text-amber-400">ChildCare</span>
                </div>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Berakhah childcare exists to care for orphaned and vulnerable
                children in Ugandan Rural villages, providing for their
                physical, emotional, spiritual and educational needs.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/berakhahChildCare/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/berakhahcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/channel/UC9HDwa5BC-r739VFsX_9ywg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400"
                >
                  <span className="sr-only">YouTube</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-amber-400 uppercase tracking-wider">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-amber-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/choir"
                    className="text-gray-300 hover:text-amber-400"
                  >
                    Choir
                  </Link>
                </li>
                <li>
                  <Link
                    to="/stories"
                    className="text-gray-300 hover:text-amber-400"
                  >
                    Stories
                  </Link>
                </li>
                <li>
                  <Link
                    to="/programmes"
                    className="text-gray-300 hover:text-amber-400"
                  >
                    Programmes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="text-gray-300 hover:text-amber-400"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-amber-400"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-amber-400 uppercase tracking-wider">
                Support Us
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    to="/contact#donate"
                    className="text-gray-300 hover:text-amber-400"
                  >
                    Donate
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact#volunteer"
                    className="text-gray-300 hover:text-amber-400"
                  >
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact#sponsor"
                    className="text-gray-300 hover:text-amber-400"
                  >
                    Sponsor a Child
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:text-amber-400"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-[#1a1a5c] pt-8 md:flex md:items-center md:justify-between">
            <p className="text-base text-gray-300 md:mt-0">
              &copy; {new Date().getFullYear()} Berakhah ChildCare. All rights
              reserved.
            </p>
            <p className="mt-4 text-gray-300 text-sm md:mt-0">
              International Great Faith Ministries
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
