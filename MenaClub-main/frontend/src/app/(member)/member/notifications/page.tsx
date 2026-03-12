import { Bell, Calendar, CheckCircle, XCircle } from "lucide-react";

const notifications = [
  { id: 1, type: "approved", title: "Application Approved", message: "You have been accepted as a Coordinator for Youth Leadership Summit.", time: "2 hours ago", icon: CheckCircle },
  { id: 2, type: "rejected", title: "Application Update", message: "Your application for Tech Hackathon - Designer role was not selected this time.", time: "1 day ago", icon: XCircle },
  { id: 3, type: "info", title: "New Event Available", message: "Cultural Exchange Night in Cairo is now accepting applications.", time: "2 days ago", icon: Calendar },
  { id: 4, type: "approved", title: "Points Earned", message: "You earned 50 points for completing the Community Clean-up event.", time: "3 days ago", icon: CheckCircle },
  { id: 5, type: "info", title: "Reminder", message: "Do not forget to submit your feedback for the Leadership Workshop.", time: "5 days ago", icon: Bell },
];

const iconBg: Record<string, string> = {
  approved: "bg-green-100",
  rejected: "bg-red-100",
  info: "bg-primary/10",
};

const iconColor: Record<string, string> = {
  approved: "text-green-600",
  rejected: "text-red-500",
  info: "text-primary",
};

const badgeStyles: Record<string, string> = {
  approved: "bg-green-100 text-green-700",
  rejected: "bg-red-100 text-red-700",
};

export default function MemberNotifications() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold">Notifications</h1>
        <p className="text-gray-500">Stay updated on your applications and activities.</p>
      </div>

      <div className="space-y-3 max-w-2xl">
        {notifications.map((n) => (
          <div key={n.id} className="bg-white border border-gray-200 rounded-xl p-4 flex items-start gap-4 shadow-sm">
            <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 ${iconBg[n.type]}`}>
              <n.icon className={`h-5 w-5 ${iconColor[n.type]}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-medium text-sm">{n.title}</p>
                {(n.type === "approved" || n.type === "rejected") && (
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full capitalize ${badgeStyles[n.type]}`}>
                    {n.type}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500">{n.message}</p>
              <p className="text-xs text-gray-400 mt-1">{n.time}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}