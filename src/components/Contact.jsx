import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
  IoArrowForward,
  IoCheckmarkCircle,
  IoAlertCircle,
} from "react-icons/io5";
import { SocialLinks } from "../data";
import LiquidGlass from "./liquid-glass/LiquidGlass";
import GlassButton from "./liquid-glass/GlassButton";

/**
 * Contact.jsx
 * The showpiece section.
 * - Large Liquid Glass 3 panel container
 * - Ambient radiant light orbs situated directly behind the glass panel for authentic refraction
 * - Tactile physical GlassButton with hover sheen, click compression, loading, and success states
 * - Integrated Liquid Glass animated toast feedback
 */
const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [toastMessage, setToastMessage] = useState(null); // { type: 'success' | 'error', text: '' }

  const showToast = (type, text) => {
    setToastMessage({ type, text });
    setTimeout(() => {
      setToastMessage(null);
    }, 6000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    emailjs
      .sendForm("service_dmxq6sb", "template_m7vyxnm", form.current, {
        publicKey: "TNqEZSn8KabiXckMt",
      })
      .then(
        () => {
          showToast("success", "Message sent successfully! I'll reply within 24 hours.");
          form.current.reset();
          setIsSubmitting(false);
          setIsSuccess(true);
          setTimeout(() => setIsSuccess(false), 5000);
        },
        (error) => {
          console.error("FAILED...", error.text);
          showToast("error", "Failed to send message. Feel free to email me directly.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section
      id="contacts"
      className="w-full py-28 md:py-36 bg-transparent text-white relative overflow-hidden"
    >
      {/* Background Refraction Orbs (Positioned directly behind the glass panel for optical refraction) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-purple-600/20 rounded-full blur-[130px] pointer-events-none animate-fluid-blob" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase px-3.5 py-1.5 rounded-full glass-1-subtle border-cyan-500/20 mb-3 inline-block">
            Start A Collaboration
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mt-2">
            LET'S BUILD{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-500 text-glow">
              SOMETHING GREAT
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-600 mx-auto rounded-full mt-4" />
          <p className="mt-4 text-slate-300 max-w-lg mx-auto text-base sm:text-lg">
            Have an idea, high-stakes frontend project, or engineering leadership opportunity?
          </p>
        </motion.div>

        {/* Showpiece Liquid Glass 3 Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
        >
          <LiquidGlass
            tier="hero"
            interactiveLight={false}
            glow={false}
            className="rounded-3xl p-8 sm:p-12 lg:p-14 border-white/20 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              {/* Left Column: Direct Info & Social Dock */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                    Contact Channels
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-8">
                    Feel free to reach out directly via email or messaging channels. I typically respond within 24 hours.
                  </p>

                  <div className="space-y-4">
                    {/* Email item */}
                    <a
                      href="mailto:benjaminolufemi16@gmail.com"
                      className="flex items-center gap-4 p-3.5 rounded-2xl glass-1-subtle hover:border-cyan-400/40 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-lg group-hover:scale-105 transition-transform">
                        <IoMailOutline />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-mono text-slate-400 uppercase">
                          Direct Email
                        </p>
                        <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">
                          benjaminolufemi16@gmail.com
                        </p>
                      </div>
                    </a>

                    {/* Phone item */}
                    <div className="flex items-center gap-4 p-3.5 rounded-2xl glass-1-subtle">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-lg">
                        <IoCallOutline />
                      </div>
                      <div>
                        <p className="text-[11px] font-mono text-slate-400 uppercase">
                          Telephone
                        </p>
                        <p className="text-sm font-semibold text-white">
                          +234 816 098 9601
                        </p>
                      </div>
                    </div>

                    {/* Location item */}
                    <div className="flex items-center gap-4 p-3.5 rounded-2xl glass-1-subtle">
                      <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 text-lg">
                        <IoLocationOutline />
                      </div>
                      <div>
                        <p className="text-[11px] font-mono text-slate-400 uppercase">
                          Availability
                        </p>
                        <p className="text-sm font-semibold text-white">
                          Global Remote / Hybrid
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Dock */}
                <div className="pt-6 border-t border-white/[0.08]">
                  <p className="text-xs font-mono uppercase text-slate-400 mb-3 tracking-wider">
                    Connect online
                  </p>
                  <div className="flex gap-2.5">
                    {SocialLinks.map((link) => (
                      <motion.a
                        key={link.id}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl glass-1-subtle border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all"
                        title={link.name}
                      >
                        {link.iconSrc}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Physical Glass Form */}
              <div className="lg:col-span-7">
                <form ref={form} onSubmit={sendEmail} className="space-y-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      id="contact-name"
                      required
                      placeholder="e.g. Satoshi Nakamoto"
                      className="w-full rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/15 px-4 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/20 transition-all text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      id="contact-email"
                      required
                      placeholder="satoshi@domain.com"
                      className="w-full rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/15 px-4 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/20 transition-all text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Project Details
                    </label>
                    <textarea
                      name="message"
                      id="contact-message"
                      required
                      rows="4"
                      placeholder="Tell me about your product, timeline, and goals..."
                      className="w-full rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/15 px-4 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/20 transition-all text-sm font-medium resize-none"
                    />
                  </div>

                  {/* Physical Submit Button with tactile states */}
                  <div className="pt-2">
                    <GlassButton
                      type="submit"
                      variant="primary"
                      size="lg"
                      loading={isSubmitting}
                      success={isSuccess}
                      icon={<IoArrowForward className="text-lg" />}
                      className="w-full py-4 text-base"
                    >
                      Send Message
                    </GlassButton>
                  </div>

                  {/* Liquid Glass Dynamic Feedback Toast */}
                  <AnimatePresence>
                    {toastMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className={`p-4 rounded-2xl flex items-center gap-3 border ${
                          toastMessage.type === "success"
                            ? "bg-emerald-950/60 border-emerald-500/40 text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                            : "bg-rose-950/60 border-rose-500/40 text-rose-200 shadow-[0_0_20px_rgba(244,63,94,0.2)]"
                        }`}
                      >
                        {toastMessage.type === "success" ? (
                          <IoCheckmarkCircle className="text-xl text-emerald-400 flex-shrink-0" />
                        ) : (
                          <IoAlertCircle className="text-xl text-rose-400 flex-shrink-0" />
                        )}
                        <span className="text-xs sm:text-sm font-medium">
                          {toastMessage.text}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </div>
          </LiquidGlass>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
