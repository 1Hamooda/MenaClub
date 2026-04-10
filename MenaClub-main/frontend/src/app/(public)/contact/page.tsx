"use client";
import { useState } from "react";

export default function ContactPartnership() {
  const [activeTab, setActiveTab] = useState("support");
  const [submitStates, setSubmitStates] = useState({});

  const handleSubmit = (tab) => {
    setSubmitStates((prev) => ({ ...prev, [tab]: true }));
    setTimeout(() => {
      setSubmitStates((prev) => ({ ...prev, [tab]: false }));
    }, 2500);
  };

  const tabs = [
    { id: "support", label: "Support Request" },
    { id: "partnership", label: "Partnership Proposal" },
    { id: "event", label: "Event Suggestion" },
  ];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f5f3ee", minHeight: "100vh", padding: "2.5rem 1.5rem", color: "#1a1814" }}>

   
      {/* Tabs */}
      <div style={{ display: "flex", gap: ".4rem", marginBottom: "1.6rem", flexWrap: "wrap" }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: ".45rem 1.1rem",
              borderRadius: "8px",
              fontSize: ".875rem",
              fontWeight: 500,
              cursor: "pointer",
              border: activeTab === tab.id ? "1px solid #2e6b4f" : "1px solid transparent",
              background: activeTab === tab.id ? "#2e6b4f" : "transparent",
              color: activeTab === tab.id ? "#fff" : "#8a867e",
              fontFamily: "inherit",
              transition: "all .2s",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Contact Info Bar */}
      <div style={{ background: "#fff", border: "1px solid #e2ddd6", borderRadius: "10px", padding: "1.25rem 1.5rem", marginBottom: "1.4rem", boxShadow: "0 1px 3px rgba(0,0,0,.06)" }}>
        <h3 style={{ fontSize: ".95rem", fontWeight: 700, marginBottom: ".85rem" }}>Contact Information</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: ".55rem" }}>
          {[
            { icon: "✉️", text: "info@menaclub.org" },
            { icon: "📞", text: "+966 50 123 4567" },
            { icon: "📍", text: "Riyadh, Saudi Arabia" },
          ].map((item) => (
            <div key={item.text} style={{ display: "flex", alignItems: "center", gap: ".65rem", fontSize: ".875rem", color: "#8a867e" }}>
              <span>{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* Support Request Form */}
      {activeTab === "support" && (
        <FormCard>
          <FormGrid>
            <FormGroup label="Name" placeholder="Your name" type="text" />
            <FormGroup label="Email" placeholder="you@example.com" type="email" />
            <FormGroup label="Phone" placeholder="+966..." type="tel" />
            <FormGroup label="Organization" placeholder="Your organization" type="text" />
            <FormGroup label="Message" placeholder="Your message..." type="textarea" full />
            <FileUpload />
          </FormGrid>
          <SubmitButton done={submitStates["support"]} onClick={() => handleSubmit("support")} />
        </FormCard>
      )}

      {/* Partnership Proposal Form */}
      {activeTab === "partnership" && (
        <FormCard>
          <FormGrid>
            <FormGroup label="Name" placeholder="Your name" type="text" />
            <FormGroup label="Email" placeholder="you@example.com" type="email" />
            <FormGroup label="Company" placeholder="Company name" type="text" />
            <FormGroup label="Your Role" placeholder="e.g. CEO, Manager" type="text" />
            <FormGroup label="Partnership Proposal" placeholder="Describe your partnership idea..." type="textarea" full />
            <FileUpload />
          </FormGrid>
          <SubmitButton done={submitStates["partnership"]} onClick={() => handleSubmit("partnership")} />
        </FormCard>
      )}

      {/* Event Suggestion Form */}
      {activeTab === "event" && (
        <FormCard>
          <FormGrid>
            <FormGroup label="Name" placeholder="Your name" type="text" />
            <FormGroup label="Email" placeholder="you@example.com" type="email" />
            <FormGroup label="Event Title" placeholder="Event name or idea" type="text" full />
            <FormGroup label="Description" placeholder="Tell us about your event suggestion..." type="textarea" full />
            <FileUpload />
          </FormGrid>
          <SubmitButton done={submitStates["event"]} onClick={() => handleSubmit("event")} />
        </FormCard>
      )}
    </div>
  );
}

function FormCard({ children }) {
  return (
    <div style={{ background: "#fff", border: "1px solid #e2ddd6", borderRadius: "10px", padding: "2rem", boxShadow: "0 1px 3px rgba(0,0,0,.06)" }}>
      {children}
    </div>
  );
}

function FormGrid({ children }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.1rem" }}>
      {children}
    </div>
  );
}

function FormGroup({ label, placeholder, type, full }) {
  const inputStyle = {
    width: "100%",
    fontFamily: "inherit",
    fontSize: ".9rem",
    color: "#1a1814",
    background: "#f5f3ee",
    border: "1px solid #e2ddd6",
    borderRadius: "8px",
    padding: ".65rem .9rem",
    outline: "none",
    resize: "vertical",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: ".4rem", gridColumn: full ? "1 / -1" : "auto" }}>
      <label style={{ fontSize: ".82rem", fontWeight: 600 }}>{label}</label>
      {type === "textarea" ? (
        <textarea placeholder={placeholder} style={{ ...inputStyle, minHeight: "130px" }} />
      ) : (
        <input type={type} placeholder={placeholder} style={inputStyle} />
      )}
    </div>
  );
}

function FileUpload() {
  return (
    <div style={{ gridColumn: "1 / -1" }}>
      <label style={{
        display: "flex", alignItems: "center", gap: ".6rem",
        border: "1.5px dashed #e2ddd6", borderRadius: "8px",
        padding: ".75rem 1rem", cursor: "pointer",
        fontSize: ".85rem", color: "#8a867e", background: "#f5f3ee",
      }}>
        ⬆️ Attach files (optional)
        <input type="file" style={{ display: "none" }} multiple />
      </label>
    </div>
  );
}

function SubmitButton({ done, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        marginTop: "1.4rem",
        background: done ? "#245940" : "#2e6b4f",
        color: "#fff",
        border: "none",
        fontFamily: "inherit",
        fontSize: ".9rem",
        fontWeight: 600,
        padding: ".6rem 1.8rem",
        borderRadius: "9px",
        cursor: "pointer",
        boxShadow: "0 2px 8px rgba(46,107,79,.2)",
      }}
    >
      {done ? "✓ Sent!" : "Submit"}
    </button>
  );
}