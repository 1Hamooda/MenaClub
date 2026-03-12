"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedButton from "@/components/ui/AnimatedButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Events", href: "/events" },
    { label: "Announcements", href: "/announcements" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      animate={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,1)",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.08)" : "0 1px 0 rgba(0,0,0,0.06)",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
      }}
      transition={{ duration: 0.3 }}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      <div style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "0 24px",
        height: scrolled ? "60px" : "72px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "height 0.3s",
      }}>

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <Image src="/logo.png" alt="MENA Club" width={40} height={40} unoptimized quality={100} style={{ height: "40px", width: "auto" }} />
          <span style={{ fontWeight: "700", fontSize: "1.1rem", color: "#0d0b08" }}>MENA Club</span>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }} className="hidden md:flex">
          {links.map((link) => (
            <motion.div key={link.href} whileHover={{ y: -1 }} transition={{ type: "spring", stiffness: 400 }}>
              <Link href={link.href} style={{ fontSize: "0.9rem", fontWeight: "500", color: "#333133", textDecoration: "none" }}>
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }} className="hidden md:flex">
          <Link href="/login">
            <AnimatedButton variant="outline" style={{ padding: "8px 20px", fontSize: "0.875rem" }}>
              Login
            </AnimatedButton>
          </Link>
          <Link href="/register">
            <AnimatedButton variant="primary" style={{ padding: "8px 20px", fontSize: "0.875rem" }}>
              Join Now
            </AnimatedButton>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex" }}
          className="md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25 }}
          style={{ borderTop: "1px solid #f0f0f0", backgroundColor: "#ffffff", padding: "16px 24px 24px" }}
        >
          {links.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{ display: "block", padding: "12px 0", fontSize: "1rem", fontWeight: "500", color: "#333133", textDecoration: "none", borderBottom: "1px solid #f5f5f5" }}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
            <Link href="/login" style={{ flex: 1 }}>
              <AnimatedButton variant="outline" fullWidth>Login</AnimatedButton>
            </Link>
            <Link href="/register" style={{ flex: 1 }}>
              <AnimatedButton variant="primary" fullWidth>Join Now</AnimatedButton>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}