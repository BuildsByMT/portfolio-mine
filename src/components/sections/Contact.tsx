"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, MessageSquare, Phone, MapPin, 
  Send, Sparkles, CheckCircle2, Copy, Check 
} from "lucide-react";
import confetti from "canvas-confetti";

const SERVICES_OPTIONS = [
  "General Inquiry",
  "AI Video / Animation Creation",
  "Voiceover Production",
  "Academic & Research Writing",
  "Reports & Assignments Compilation",
  "Presentation / Slide Deck Design",
  "UI/UX / Front-End Web Development",
  "Social Media Content Strategy"
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", service: "General Inquiry", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    let isValid = true;
    const tempErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required.";
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message cannot be empty.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "6403821a-735a-4e87-8a08-78a327ac23ed",
          name: formData.name,
          email: formData.email,
          subject: `Portfolio Contact - ${formData.service}`,
          message: `Client Name: ${formData.name}\nClient Email: ${formData.email}\nSelected Service: ${formData.service}\n\nMessage Details:\n${formData.message}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        
        // Trigger canvas confetti burst
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#00f2fe", "#7f00ff", "#e100ff", "#4facfe"]
        });

        // Clear form
        setFormData({ name: "", email: "", service: "General Inquiry", message: "" });
      } else {
        alert(result.message || "Failed to send message. Please configure your Web3Forms access key.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Unable to send message due to a connection issue. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("tanveermuzammil03@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#030014]/60 overflow-hidden">
      {/* Visual background glows */}
      <div className="absolute top-1/4 left-1/10 w-[300px] h-[300px] bg-[#00f2fe]/5 blur-[110px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[300px] h-[300px] bg-[#e100ff]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#e100ff]" />
            <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#e100ff]">
              Connection
            </span>
          </motion.div>
          
          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#e100ff]">Project</span>
          </h2>
          
          <p className="font-sans text-gray-400 text-sm sm:text-base max-w-xl font-light">
            Got an idea, a freelance contract, or an internship opportunity? Reach out directly, and let’s discuss the details.
          </p>
        </div>

        {/* Form Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct info cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick Contact detail panel */}
            <div className="glass-panel p-8 rounded-3xl border border-white/5 flex flex-col gap-6">
              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                Quick Shortcuts
              </h3>

              {/* Email Shortcut */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/3 border border-white/5 group hover:border-[#00f2fe]/30 transition-colors">
                <a href="mailto:tanveermuzammil03@gmail.com" className="flex items-center gap-3.5 min-w-0 flex-1 mr-2">
                  <div className="w-10 h-10 rounded-xl bg-[#00f2fe]/20 flex items-center justify-center text-[#00f2fe] flex-shrink-0">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-sans text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Email Me</p>
                    <p className="font-sans text-xs sm:text-sm font-medium text-white group-hover:text-[#00f2fe] transition-colors break-all">tanveermuzammil03@gmail.com</p>
                  </div>
                </a>

                {/* Copy button */}
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 border border-white/15 hover:bg-white/10 text-gray-300 hover:text-white cursor-pointer transition-colors"
                  aria-label="Copy Email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp Shortcut */}
              <a
                href="https://wa.me/923096820353"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/3 border border-white/5 group hover:border-emerald-500/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/25 flex items-center justify-center text-emerald-400">
                  <MessageSquare className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="font-sans text-[10px] text-gray-400 uppercase tracking-wider font-semibold">WhatsApp Chat</p>
                  <p className="font-sans text-xs sm:text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">+92 309 6820353</p>
                </div>
              </a>

              {/* Phone Dial */}
              <a
                href="tel:+923096820353"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/3 border border-white/5 group hover:border-[#4facfe]/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#4facfe]/25 flex items-center justify-center text-[#4facfe]">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="font-sans text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Direct Call</p>
                  <p className="font-sans text-xs sm:text-sm font-medium text-white group-hover:text-[#4facfe] transition-colors">+92-309-6820353</p>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/3 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#7f00ff]/25 flex items-center justify-center text-[#7f00ff]">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="font-sans text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Location</p>
                  <p className="font-sans text-xs sm:text-sm font-medium text-white">Rawalpindi / Islamabad, Pakistan</p>
                </div>
              </div>

            </div>

            {/* Current availability indicator */}
            <div className="glass-panel p-6 rounded-3xl border border-white/5 flex items-center gap-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <div className="font-sans text-xs sm:text-sm text-gray-300 font-light leading-normal">
                Currently taking freelance contracts for Summer 2026. General response turnaround is under 3 hours.
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <motion.div
              layout
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                  >
                    {/* Name input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-name" className="font-sans text-xs font-semibold text-gray-300 uppercase tracking-wide">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-white/7 border hover:border-white/30 transition-colors outline-none font-sans text-sm text-white placeholder:text-gray-500 ${
                          errors.name ? "border-rose-500/50 focus:border-rose-500" : "border-white/20 focus:border-[#00f2fe]/50"
                        }`}
                      />
                      {errors.name && <span className="font-sans text-[10px] text-rose-400 mt-1 font-medium">{errors.name}</span>}
                    </div>

                    {/* Email input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-email" className="font-sans text-xs font-semibold text-gray-300 uppercase tracking-wide">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white/7 border hover:border-white/30 transition-colors outline-none font-sans text-sm text-white placeholder:text-gray-500 ${
                          errors.email ? "border-rose-500/50 focus:border-rose-500" : "border-white/20 focus:border-[#00f2fe]/50"
                        }`}
                      />
                      {errors.email && <span className="font-sans text-[10px] text-rose-400 mt-1 font-medium">{errors.email}</span>}
                    </div>

                    {/* Service Selector dropdown */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-service" className="font-sans text-xs font-semibold text-gray-300 uppercase tracking-wide">
                        Select Service
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#09071b] border border-white/20 hover:border-white/30 focus:border-[#00f2fe]/50 transition-colors outline-none font-sans text-sm text-white cursor-pointer"
                      >
                        {SERVICES_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#09071b] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message box */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-message" className="font-sans text-xs font-semibold text-gray-300 uppercase tracking-wide">
                        Message details
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        placeholder="Hi Muzammil, I would like to discuss a project..."
                        className={`w-full px-4 py-3 rounded-xl bg-white/7 border hover:border-white/30 transition-colors outline-none font-sans text-sm text-white resize-none placeholder:text-gray-500 ${
                          errors.message ? "border-rose-500/50 focus:border-rose-500" : "border-white/20 focus:border-[#00f2fe]/50"
                        }`}
                      />
                      {errors.message && <span className="font-sans text-[10px] text-rose-400 mt-1 font-medium">{errors.message}</span>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-4 flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#7f00ff] text-black font-sans text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(0,242,254,0.2)] hover:shadow-[0_0_30px_rgba(0,242,254,0.5)] transition-all duration-300 disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 rounded-full border-2 border-black border-t-transparent animate-spin" />
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 text-black" />
                        </>
                      )}
                    </button>

                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-10 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    
                    <h3 className="font-display text-2xl font-bold text-white mb-3">
                      Message Dispatched!
                    </h3>
                    
                    <p className="font-sans text-gray-300 text-sm font-light leading-relaxed max-w-sm mb-8">
                      Thank you for reaching out. Your project inquiry has been logged. I will review the details and get back to you shortly.
                    </p>

                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-sans text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
