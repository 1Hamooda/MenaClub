import { Users, Target, Heart, Globe } from "lucide-react";

const values = [
  { icon: Users, title: "Community", description: "Building bridges across borders, uniting youth from diverse backgrounds." },
  { icon: Target, title: "Impact", description: "Every initiative is designed to create measurable, lasting change." },
  { icon: Heart, title: "Inclusivity", description: "We welcome all, regardless of background, nationality, or experience." },
  { icon: Globe, title: "Global Vision", description: "Thinking globally while acting locally across the MENA region." },
];

const team = [
  { name: "Sarah Al-Rashidi", role: "President", initials: "SR" },
  { name: "Omar Khalil", role: "VP Operations", initials: "OK" },
  { name: "Layla Hassan", role: "VP Events", initials: "LH" },
  { name: "Ahmed Nouri", role: "VP Technology", initials: "AN" },
];

export default function AboutPage() {
  return (
    <div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-transparent py-20">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h1 className="text-4xl font-bold mb-6">
            About <span className="text-primary">MENA</span> Club
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Founded in 2022, MENA Club is a youth-driven organization dedicated to empowering
            the next generation of leaders across the Middle East and North Africa. Through
            volunteering, events, and skill-building programs, we create pathways for personal
            and professional growth.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-white border border-gray-200 rounded-xl text-center p-6 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-gray-500">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {team.map((t) => (
              <div key={t.name} className="bg-white border border-gray-200 rounded-xl text-center p-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 text-primary font-bold text-lg">
                  {t.initials}
                </div>
                <h3 className="font-semibold text-sm">{t.name}</h3>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Arabic Section */}
      <section dir="rtl" className="container mx-auto px-6 py-20">
        <div className="p-8 bg-primary/10 border border-blue-100 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-primary">عن</span> نادي مينا
          </h2>
          <p className="text-gray-500 leading-relaxed">
            نادي مينا هو منظمة شبابية تهدف إلى تمكين الجيل القادم من القادة في منطقة الشرق الأوسط وشمال أفريقيا.
            من خلال التطوع والفعاليات وبرامج بناء المهارات، نخلق مسارات للنمو الشخصي والمهني.
          </p>
        </div>
      </section>

    </div>
  );
}