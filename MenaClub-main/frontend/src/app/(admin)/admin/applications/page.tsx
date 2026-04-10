import { Check, X } from "lucide-react";

const applications = [
  { name: "Ahmad Khalil", event: "Leadership Summit", role: "Coordinator", status: "pending", date: "Mar 2" },
  { name: "Fatima Al-Sayed", event: "Leadership Summit", role: "Facilitator", status: "pending", date: "Mar 3" },
  { name: "Omar Hassan", event: "Tech Hackathon", role: "Developer", status: "approved", date: "Mar 1" },
  { name: "Layla Mohammed", event: "Tech Hackathon", role: "Designer", status: "approved", date: "Feb 28" },
  { name: "Nour Khalil", event: "Leadership Summit", role: "Photography", status: "rejected", date: "Mar 1" },
  { name: "Youssef Ali", event: "Community Clean-up", role: "Team Captain", status: "pending", date: "Mar 5" },
];

const statusStyles: Record<string, string> = {
  approved: "bg-green-100 text-green-700",
  pending: "bg-yellow-100 text-yellow-700",
  rejected: "bg-red-100 text-red-700",
};

export default function AdminApplications() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold">Event Applications</h1>
        <p className="text-gray-500">Review and manage applicant roles.</p>
      </div>

      <div className="flex gap-3">
        <select className="px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary">
          <option value="">Filter by event</option>
          <option value="summit">Leadership Summit</option>
          <option value="hack">Tech Hackathon</option>
          <option value="clean">Community Clean-up</option>
        </select>
        <select className="px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary">
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Applicant</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Event</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Role</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Applied</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Status</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Assign Task</th>
              <th className="text-right px-4 py-3 font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {applications.map((a, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{a.name}</td>
                <td className="px-4 py-3">{a.event}</td>
                <td className="px-4 py-3">
                  <span className="text-xs border border-gray-300 text-gray-600 px-2 py-0.5 rounded-full">{a.role}</span>
                </td>
                <td className="px-4 py-3 text-gray-500">{a.date}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full capitalize ${statusStyles[a.status]}`}>
                    {a.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  {a.status === "approved" && (
                    <select className="px-2 py-1 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="">Assign task</option>
                      <option value="setup">Setup</option>
                      <option value="reg">Registration</option>
                      <option value="media">Media</option>
                    </select>
                  )}
                </td>
                <td className="px-4 py-3">
                  {a.status === "pending" && (
                    <div className="flex justify-end gap-1">
                      <button className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-green-50 text-green-600 transition">
                        <Check className="h-4 w-4" />
                      </button>
                      <button className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-red-50 text-red-500 transition">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}