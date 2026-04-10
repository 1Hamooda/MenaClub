import { Bell, Calendar, CheckCircle, Award } from "lucide-react";

const notifications = [
  { type: "approved", title: "Event Registration Confirmed", message: "You are registered for Youth Leadership Summit as Registration Desk.", time: "1 hour ago", icon: CheckCircle },
  { type: "info", title: "New Event Available", message: "MENA Debate Championship is now looking for volunteers.", time: "1 day ago", icon: Calendar },
  { type: "approved", title: "Certificate Ready", message: "Your certificate for Community Clean-up is ready to download.", time: "3 days ago", icon: Award },
  { type: "info", title: "Reminder", message: "Leadership Summit is tomorrow. Please arrive by 8:30 AM.", time: "4 days ago", icon: Bell },
];

const iconBg: Record<string, string> = {
  approved: "bg-green-100",
  info: "bg-primary/10",
};

const iconColor: Record<string, string> = {
  approved: "text-green-600",
  info: "text-primary",
};

export default function VolunteerNotifications() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold">Notifications</h1>
        <p className="text-gray-500">Updates about your volunteer activities.</p>
      </div>

      <div className="space-y-3 max-w-2xl">
        {notifications.map((n, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 flex items-start gap-4 shadow-sm">
            <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 ${iconBg[n.type]}`}>
              <n.icon className={`h-5 w-5 ${iconColor[n.type]}`} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-medium text-sm">{n.title}</p>
                {n.type === "approved" && (
                  <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full">
                    Approved
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