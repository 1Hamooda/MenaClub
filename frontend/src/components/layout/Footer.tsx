import Link from "next/link";

export default function Footer() {
  return (
    // Changed bg-gray-100 to bg-black and text-gray-700 to text-gray-300
    <footer className="border-t border-gray-800 bg-black text-gray-300">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <h3 className="font-bold text-lg mb-3">
            {/* Kept blue-700, but added white for the rest of the brand name */}
            <span className="text-blue-500">MENA</span> <span className="text-white">Club</span>
          </h3>
          <p className="text-sm text-gray-400">
            Empowering youth across the MENA region through volunteering, events, and community.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-sm text-white">Quick Links</h4>
          <div className="space-y-2 text-sm text-gray-400">
            <Link href="/about" className="block hover:text-blue-400 transition-colors">About Us</Link>
            <Link href="/events" className="block hover:text-blue-400 transition-colors">Events</Link>
            <Link href="/announcements" className="block hover:text-blue-400 transition-colors">Announcements</Link>
            <Link href="/contact" className="block hover:text-blue-400 transition-colors">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-sm text-white">Get Involved</h4>
          <div className="space-y-2 text-sm text-gray-400">
            <Link href="/register" className="block hover:text-blue-400 transition-colors">Join as Member</Link>
            <Link href="/register" className="block hover:text-blue-400 transition-colors">Volunteer</Link>
            <Link href="/contact" className="block hover:text-blue-400 transition-colors">Partner With Us</Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-sm text-white">Contact</h4>
          <div className="space-y-2 text-sm text-gray-400">
            <p>info@menaclub.org</p>
            <p>Riyadh, Saudi Arabia</p>
          </div>
        </div>

      </div>

      {/* Adjusted border and text color for the copyright section */}
      <div className="border-t border-gray-800 py-6 text-center text-xs text-gray-500">
        © 2026 MENA Club. All rights reserved.
      </div>
    </footer>
  );
}