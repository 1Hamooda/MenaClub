import { Send, Users } from "lucide-react";

const groups = ["All Members", "All Volunteers", "Event Participants", "Pending Applications"];

export default function AdminNotifications() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold">Send Notifications</h1>
        <p className="text-gray-500">Compose and send targeted notifications.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 max-w-2xl shadow-sm">
        <div className="space-y-5">

          <div>
            <label className="text-sm font-medium text-gray-700 block mb-3">Target Group</label>
            <div className="space-y-2">
              {groups.map((g) => (
                <label key={g} className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors">
                  <input type="checkbox" className="accent-blue-700 h-4 w-4" />
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">{g}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Notification Type</label>
            <select className="mt-1.5 w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Select type</option>
              <option value="general">General Update</option>
              <option value="event">Event Reminder</option>
              <option value="urgent">Urgent Notice</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows={4}
              placeholder="Write your notification message..."
              className="mt-1.5 w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex gap-2">
            <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-primary transition">
              <Send className="h-4 w-4" /> Send Notification
            </button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-50 transition">
              Preview
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}