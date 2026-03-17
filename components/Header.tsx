"use client";

import { useState } from "react";

const SITE_URL = "https://autonodeai.com";

const navItems = [
  { href: `${SITE_URL}/`, label: "Home" },
  { href: `${SITE_URL}/services`, label: "Services" },
  { href: `${SITE_URL}/sitecore-development`, label: "Sitecore" },
  { href: `${SITE_URL}/headless-cms-development`, label: "Headless CMS" },
  { href: `${SITE_URL}/ai-chatbot-development`, label: "AI Chatbot" },
  { href: `${SITE_URL}/technologies`, label: "Platforms" },
  { href: `${SITE_URL}/blog`, label: "Blog" },
  { href: `${SITE_URL}/about`, label: "About" },
  { href: `${SITE_URL}/contact`, label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openChatbot = () => {
    const event = new CustomEvent("open-chatbot");
    window.dispatchEvent(event);
    setMenuOpen(false);
  };

  return (
    <header className="site-header sticky-top">
      <div className="container">
        <nav className="navbar px-0 py-3" aria-label="Main navigation">
          <div className="d-flex align-items-center justify-content-between w-100 gap-3">
            <a
              href={`${SITE_URL}/`}
              className="navbar-brand brand-mark d-flex align-items-center gap-3 me-0"
              onClick={() => setMenuOpen(false)}
            >
              <span className="brand-orb" aria-hidden="true">
                A
              </span>

              <span>
                <strong>AutonodeAI</strong>
                <small>AI-Powered Digital Experience Engineering</small>
              </span>
            </a>

            <button
              className="menu-toggle d-lg-none"
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span />
              <span />
              <span />
            </button>

            <div className="desktop-nav ms-auto d-none d-lg-flex align-items-center gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-link nav-link-custom px-0"
                >
                  {item.label}
                </a>
              ))}

              <button
                type="button"
                className="btn btn-brand-primary btn-lg"
                onClick={openChatbot}
              >
                Free Website Review
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="mobile-nav d-lg-none mt-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-link nav-link-custom px-0 py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <button
                className="btn btn-brand-primary mt-3 w-100"
                type="button"
                onClick={openChatbot}
              >
                Free Website Review
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
