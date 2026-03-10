export default function HomePage() {
  return (
    <main>

      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-24 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to MENA Alliances
        </h1>
        <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
          Join our community of volunteers and members making a difference
          across the MENA region.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/register"
            className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            Join Us
          </a>
          <a
            href="/events"
            className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Browse Events
          </a>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Who We Are
        </h2>
        <p className="text-gray-500 leading-relaxed">
          MENA Alliances is a non-profit organization connecting volunteers,
          members, and partners to create impactful community events and
          career opportunities across the region.
        </p>
      </section>

      {/* Announcements Preview */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">
            Latest Announcements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="border border-gray-200 rounded-xl p-5">
              <span className="text-xs text-blue-600 font-semibold uppercase">
                March 2026
              </span>
              <h3 className="text-gray-800 font-semibold mt-2 mb-1">
                New Partnership with UN Youth
              </h3>
              <p className="text-gray-500 text-sm">
                We are proud to announce our latest collaboration focused on
                youth empowerment.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <span className="text-xs text-blue-600 font-semibold uppercase">
                February 2026
              </span>
              <h3 className="text-gray-800 font-semibold mt-2 mb-1">
                Volunteer of the Month Program
              </h3>
              <p className="text-gray-500 text-sm">
                Recognizing outstanding volunteers who go above and beyond
                in their contributions.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <span className="text-xs text-blue-600 font-semibold uppercase">
                January 2026
              </span>
              <h3 className="text-gray-800 font-semibold mt-2 mb-1">
                Platform Launch
              </h3>
              <p className="text-gray-500 text-sm">
                Our new volunteer management platform is officially live.
                Register today to get started.
              </p>
            </div>

          </div>
          <div className="mt-6 text-center">
            <a href="/announcements" className="text-blue-600 hover:underline text-sm font-medium">
              View all announcements
            </a>
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-1 rounded-full">
                Open
              </span>
              <h3 className="text-gray-800 font-semibold mt-3 mb-1">
                Community Cleanup
              </h3>
              <p className="text-gray-500 text-sm mb-3">
                March 15, 2026 - Hebron City Center
              </p>
              <a href="/events/1" className="text-blue-600 text-sm hover:underline">
                View details
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-1 rounded-full">
                Open
              </span>
              <h3 className="text-gray-800 font-semibold mt-3 mb-1">
                Youth Leadership Workshop
              </h3>
              <p className="text-gray-500 text-sm mb-3">
                March 22, 2026 - Ramallah Cultural Center
              </p>
              <a href="/events/2" className="text-blue-600 text-sm hover:underline">
                View details
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <span className="text-xs bg-yellow-100 text-yellow-700 font-semibold px-2 py-1 rounded-full">
                Filling Fast
              </span>
              <h3 className="text-gray-800 font-semibold mt-3 mb-1">
                Tech for Good Hackathon
              </h3>
              <p className="text-gray-500 text-sm mb-3">
                April 5, 2026 - Online
              </p>
              <a href="/events/3" className="text-blue-600 text-sm hover:underline">
                View details
              </a>
            </div>

          </div>
          <div className="mt-6 text-center">
            <a href="/events" className="text-blue-600 hover:underline text-sm font-medium">
              View all events
            </a>
          </div>
        </div>
      </section>

     
    </main>
  );
}