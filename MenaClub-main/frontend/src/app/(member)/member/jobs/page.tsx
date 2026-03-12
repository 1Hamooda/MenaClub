"use client";

import { useState } from "react";
import { Briefcase, Star, ArrowRight, Sparkles } from "lucide-react";

const jobMatches = [
  { title: "Event Coordinator", company: "UNDP Youth", match: 95, type: "Full-time", location: "Riyadh" },
  { title: "Community Manager", company: "Google MENA", match: 88, type: "Full-time", location: "Dubai" },
  { title: "Social Media Intern", company: "UNICEF", match: 82, type: "Internship", location: "Amman" },
  { title: "Program Associate", company: "World Bank", match: 78, type: "Contract", location: "Cairo" },
];

const fields = ["Technology", "Marketing", "Education", "Healthcare", "Social Impact", "Finance"];
const experiences = ["0-1 years", "1-3 years", "3-5 years", "5+ years"];
const opportunityTypes = [
  { value: "full", label: "Full-time" },
  { value: "part", label: "Part-time" },
  { value: "intern", label: "Internship" },
  { value: "remote", label: "Remote" },
];

export default function MemberJobs() {
  const [showResults, setShowResults] = useState(false);
  const [selectedType, setSelectedType] = useState("full");

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" /> AI Job Recommendations
        </h1>
        <p className="text-gray-500">Answer a few questions and we will match you with relevant opportunities.</p>
      </div>

      {!showResults ? (
        <div className="bg-white border border-gray-200 rounded-xl p-6 max-w-2xl shadow-sm space-y-5">

          <div>
            <label className="text-sm font-medium text-gray-700">What field are you interested in?</label>
            <select className="mt-1.5 w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Select field</option>
              {fields.map((f) => <option key={f} value={f}>{f}</option>)}
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">What type of opportunity?</label>
            <div className="flex flex-wrap gap-3">
              {opportunityTypes.map((o) => (
                <label key={o.value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="type"
                    value={o.value}
                    checked={selectedType === o.value}
                    onChange={() => setSelectedType(o.value)}
                    className="accent-blue-700"
                  />
                  <span className="text-sm">{o.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Years of experience</label>
            <select className="mt-1.5 w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Select</option>
              {experiences.map((y) => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Preferred location</label>
            <input
              placeholder="e.g. Riyadh, Dubai, Remote"
              className="mt-1.5 w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            onClick={() => setShowResults(true)}
            className="bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-primary transition flex items-center gap-2"
          >
            <Sparkles className="h-4 w-4" /> Find Matches
          </button>

        </div>
      ) : (
        <div className="space-y-4 max-w-2xl">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">Found {jobMatches.length} matches</p>
            <button
              onClick={() => setShowResults(false)}
              className="text-sm text-gray-600 hover:text-primary transition"
            >
              Retake Quiz
            </button>
          </div>
          {jobMatches.map((job) => (
            <div key={job.title} className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4 shadow-sm">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold">{job.title}</h3>
                <p className="text-sm text-gray-500">{job.company} · {job.location}</p>
                <span className="text-xs border border-gray-300 text-gray-600 px-2 py-0.5 rounded-full mt-1.5 inline-block">
                  {job.type}
                </span>
              </div>
              <div className="text-right shrink-0">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="h-4 w-4 text-primary fill-blue-700" />
                  <span className="font-bold text-primary">{job.match}%</span>
                </div>
                <button className="border border-gray-300 text-gray-700 px-3 py-1.5 rounded-xl text-sm hover:bg-gray-50 transition flex items-center gap-1">
                  View <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}