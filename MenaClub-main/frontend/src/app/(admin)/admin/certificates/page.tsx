import { Award, Send, Download } from "lucide-react";

const certificates = [
  { name: "Ahmad Khalil", event: "Leadership Summit", role: "Coordinator", hours: 8, generated: true },
  { name: "Layla Mohammed", event: "Leadership Summit", role: "Registration", hours: 8, generated: true },
  { name: "Omar Hassan", event: "Tech Hackathon", role: "Developer", hours: 12, generated: false },
  { name: "Fatima Al-Sayed", event: "Community Clean-up", role: "Team Captain", hours: 6, generated: false },
];

export default function AdminCertificates() {
  return (
    <div className="space-y-6">

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Certificate Management</h1>
          <p className="text-gray-500">Generate and distribute participation certificates.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-primary transition">
            <Award className="h-4 w-4" /> Generate All
          </button>
          <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-50 transition">
            <Send className="h-4 w-4" /> Distribute
          </button>
        </div>
      </div>

      <div className="flex gap-3">
        <select className="px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary">
          <option value="">Filter by event</option>
          <option value="summit">Leadership Summit</option>
          <option value="hack">Tech Hackathon</option>
        </select>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Participant</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Event</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Role</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Hours</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Status</th>
              <th className="text-right px-4 py-3 font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {certificates.map((c, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{c.name}</td>
                <td className="px-4 py-3">{c.event}</td>
                <td className="px-4 py-3">
                  <span className="text-xs border border-gray-300 text-gray-600 px-2 py-0.5 rounded-full">{c.role}</span>
                </td>
                <td className="px-4 py-3">{c.hours}h</td>
                <td className="px-4 py-3">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${c.generated ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                    {c.generated ? "Generated" : "Pending"}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-1">
                    {!c.generated && (
                      <button className="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-gray-100 text-gray-600 text-xs transition">
                        <Award className="h-3.5 w-3.5" /> Generate
                      </button>
                    )}
                    {c.generated && (
                      <>
                        <button className="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-gray-100 text-gray-600 text-xs transition">
                          <Download className="h-3.5 w-3.5" /> Download
                        </button>
                        <button className="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-gray-100 text-gray-600 text-xs transition">
                          <Send className="h-3.5 w-3.5" /> Send
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}