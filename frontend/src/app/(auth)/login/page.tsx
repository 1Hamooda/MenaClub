import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100/30 p-4">
      <div className="w-full max-w-md p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">

        {/* Header */}
        <div className="text-center mb-8">
          <Image src="/logo.jpeg" alt="MENA Club" width={56} height={56} className="h-14 w-auto mx-auto mb-4" />
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="text-sm text-gray-500 mt-1">Sign in to your account</p>
        </div>

        {/* Form */}
        <form className="space-y-4">
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
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-500">
              <input type="checkbox" className="rounded" /> Remember me
            </label>
            <a href="#" className="text-blue-700 hover:underline">Forgot password?</a>
          </div>
          <Link href="/member/dashboard">
            <button
              type="button"
              className="w-full bg-blue-700 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition mt-2"
            >
              Sign In
            </button>
          </Link>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-blue-700 font-medium hover:underline">Sign up</Link>
        </p>

        {/* Demo Links */}
        <div className="mt-6 text-center text-xs text-gray-400 space-x-3">
          <Link href="/member/dashboard" className="hover:text-blue-700">Member Demo</Link>
          <span>·</span>
          <Link href="/volunteer/dashboard" className="hover:text-blue-700">Volunteer Demo</Link>
          <span>·</span>
          <Link href="/admin/dashboard" className="hover:text-blue-700">Admin Demo</Link>
        </div>

      </div>
    </div>
  );
}