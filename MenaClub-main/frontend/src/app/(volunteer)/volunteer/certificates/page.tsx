import { Download, Award, Eye } from "lucide-react";

const certificates = [
  { title: "Youth Leadership Summit 2026", date: "Mar 25, 2026", role: "Registration Desk", hours: 8 },
  { title: "Community Clean-up Drive", date: "Feb 15, 2026", role: "Team Captain", hours: 6 },
  { title: "Tech Mentorship Program", date: "Jan 10, 2026", role: "Facilitator", hours: 12 },
  { title: "Cultural Exchange Night", date: "Dec 5, 2025", role: "Event Host", hours: 5 },
];

export default function VolunteerCertificates() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold">Certificates</h1>
        <p className="text-gray-500">Download your participation certificates.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {certificates.map((cert) => (
          <div key={cert.title} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">

            {/* Certificate Preview */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 text-center border-b border-gray-200">
              <div className="border-2 border-blue-200 rounded-2xl p-6 bg-white/80">
                <Award className="h-10 w-10 text-primary mx-auto mb-3" />
                <p className="text-xs text-gray-500 mb-1">Certificate of Participation</p>
                <p className="font-bold text-sm">MENA Club</p>
                <p className="text-lg font-semibold mt-2">{cert.title}</p>
                <p className="text-xs text-gray-500 mt-2">Awarded to Layla Hassan</p>
              </div>
            </div>

            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs border border-gray-300 text-gray-600 px-2 py-0.5 rounded-full">
                  {cert.role}
                </span>
                <span className="text-xs bg-primary/10 text-primary font-semibold px-2 py-0.5 rounded-full">
                  {cert.hours}h
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-4">{cert.date}</p>
              <div className="flex gap-2">
                <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-xl text-sm font-medium hover:bg-gray-50 transition flex items-center justify-center gap-1">
                  <Eye className="h-3.5 w-3.5" /> Preview
                </button>
                <button className="flex-1 bg-primary text-white py-2 rounded-xl text-sm font-medium hover:bg-primary transition flex items-center justify-center gap-1">
                  <Download className="h-3.5 w-3.5" /> Download
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}