"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function RegisterPage() {
  const [role, setRole] = useState("member");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100/30 p-4">
      <div className="w-full max-w-md p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">

        {/* Header */}
        <div className="text-center mb-8">
          <Image src="/logo.jpeg" alt="MENA Club" width={56} height={56} className="h-14 w-auto mx-auto mb-4" />
          <h1 className="text-2xl font-bold">
            Join <span className="text-blue-700">MENA</span> Club
          </h1>
          <p className="text-sm text-gray-500 mt-1">Create your account</p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium text-gray-700">First Name</label>
              <input
                placeholder="Ahmad"
                className="mt-1.5 w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Last Name</label>
              <input
                placeholder="Khalil"
                className="mt-1.5 w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1.5 w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1.5 w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Role Selector */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-3 block">I want to join as</label>
            <div className="flex gap-3">

              <button
                type="button"
                onClick={() => setRole("member")}
                className={`flex-1 p-4 text-center rounded-xl border-2 transition-colors ${
                  role === "member"
                    ? "border-blue-700 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <p className="font-semibold text-sm">Member</p>
                <p className="text-xs text-gray-500">Join events and grow</p>
              </button>

              <button
                type="button"
                onClick={() => setRole("volunteer")}
                className={`flex-1 p-4 text-center rounded-xl border-2 transition-colors ${
                  role === "volunteer"
                    ? "border-blue-700 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <p className="font-semibold text-sm">Volunteer</p>
                <p className="text-xs text-gray-500">Help and contribute</p>
              </button>

            </div>
          </div>

          <Link href="/member/profile">
            <button
              type="button"
              className="w-full bg-blue-700 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition mt-2"
            >
              Create Account
            </button>
          </Link>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-700 font-medium hover:underline">Sign in</Link>
        </p>

      </div>
    </div>
  );
}