import { Search, Check, X, Edit } from "lucide-react";

const members = [
  { id: 1, name: "Ahmad Khalil", email: "ahmad@example.com", role: "Member", joined: "Jan 15, 2026", status: "approved" },
  { id: 2, name: "Fatima Al-Sayed", email: "fatima@example.com", role: "Member", joined: "Feb 3, 2026", status: "pending" },
  { id: 3, name: "Omar Hassan", email: "omar@example.com", role: "Volunteer", joined: "Feb 10, 2026", status: "pending" },
  { id: 4, name: "Layla Mohammed", email: "layla@example.com", role: "Volunteer", joined: "Dec 20, 2025", status: "approved" },
  { id: 5, name: "Nour Khalil", email: "nour@example.com", role: "Member", joined: "Mar 1, 2026", status: "rejected" },
  { id: 6, name: "Youssef Ali", email: "youssef@example.com", role: "Volunteer", joined: "Jan 28, 2026", status: "approved" },
];

const statusStyles: Record<string, string> = {
  approved: "bg-green-100 text-green-700",
  pending: "bg-yellow-100 text-yellow-700",
  rejected: "bg-red-100 text-red-700",
};

export default function AdminMembers() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold">Member Management</h1>
        <p className="text-gray-500">Approve, reject, and manage registrations.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            placeholder="Search members..."
            className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <select className="px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary">
          <option value="">All Roles</option>
          <option value="member">Member</option>
          <option value="volunteer">Volunteer</option>
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
              <th className="text-left px-4 py-3 font-medium text-gray-600">Name</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Email</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Role</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Joined</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Status</th>
              <th className="text-right px-4 py-3 font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {members.map((m) => (
              <tr key={m.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{m.name}</td>
                <td className="px-4 py-3 text-gray-500">{m.email}</td>
                <td className="px-4 py-3">{m.role}</td>
                <td className="px-4 py-3 text-gray-500">{m.joined}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full capitalize ${statusStyles[m.status]}`}>
                    {m.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-1">
                    {m.status === "pending" && (
                      <>
                        <button className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-green-50 text-green-600 transition">
                          <Check className="h-4 w-4" />
                        </button>
                        <button className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-red-50 text-red-500 transition">
                          <X className="h-4 w-4" />
                        </button>
                      </>
                    )}
                    <button className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500 transition">
                      <Edit className="h-4 w-4" />
                    </button>
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