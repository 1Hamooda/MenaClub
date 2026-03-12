import { CheckCircle, ShieldCheck } from "lucide-react";

export default function VolunteerCheckin() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold">Attendance Check-in</h1>
        <p className="text-gray-500">Enter your verification code to confirm attendance.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-8 max-w-md shadow-sm">
        <div className="text-center mb-6">
          <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="h-8 w-8 text-primary" />
          </div>
          <h2 className="font-semibold text-lg">Enter Verification Code</h2>
          <p className="text-sm text-gray-500 mt-1">Get this code from your event organizer</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Verification Code</label>
            <input
              placeholder="e.g. MENA-2026-XY7K"
              maxLength={16}
              className="mt-1.5 w-full px-4 py-2 border border-gray-300 rounded-xl text-center text-lg tracking-widest font-mono focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary transition flex items-center justify-center gap-2">
            <CheckCircle className="h-4 w-4" /> Confirm Check-in
          </button>
        </div>
      </div>

      {/* Success Example */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-5 max-w-md">
        <div className="flex items-center gap-3">
          <CheckCircle className="h-6 w-6 text-green-600" />
          <div>
            <p className="font-semibold text-sm">Successfully Checked In!</p>
            <p className="text-xs text-gray-500">Youth Leadership Summit · Mar 25, 2026 · 9:12 AM</p>
          </div>
        </div>
      </div>

    </div>
  );
}