'use client';

import Link from 'next/link';
import { useState } from 'react';
import DiscoveryModal from './DiscoveryModal';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/technologies', label: 'Platforms' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header sticky-top">
        <div className="container">
          <nav className="navbar px-0 py-3" aria-label="Main navigation">
            <div className="d-flex align-items-center justify-content-between w-100 gap-3">
              <Link
                href="/"
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
              </Link>

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

              <div
                className={`desktop-nav ms-auto d-none d-lg-flex align-items-center gap-4`}
              >
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="nav-link nav-link-custom px-0"
                  >
                    {item.label}
                  </Link>
                ))}
                <button
                  type="button"
                  className="btn btn-brand-primary btn-lg"
                  onClick={() => {
                    const event = new CustomEvent("open-chatbot");
                    window.dispatchEvent(event);
                  }}
                >
                  Free Website Review
                </button>
              </div>
            </div>

            {menuOpen ? (
              <div className="mobile-nav d-lg-none mt-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="nav-link nav-link-custom px-0 py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <button
                  className="btn btn-brand-primary mt-3 w-100"
                  type="button"
                  onClick={() => {
                    setOpen(true);
                    setMenuOpen(false);
                  }}
                >
                  Book a discovery call
                </button>
              </div>
            ) : null}
          </nav>
        </div>
      </header>

      <DiscoveryModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
