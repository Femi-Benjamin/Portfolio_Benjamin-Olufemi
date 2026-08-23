import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import {
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
  IoSendOutline,
} from "react-icons/io5";
import { SocialLinks } from "../data";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
          toast.success("Email sent successfully!");
          form.current.reset();
          setIsSubmitting(false);
        },
        (error) => {
          console.error("FAILED...", error.text);
          toast.error(
            "Failed to send email. Please try again or email directly.",
          );
          setIsSubmitting(false);
        },
      );
  };

  return (
    <section
      id="contacts"
      className="w-full py-24 bg-transparent text-white relative"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase px-3.5 py-1.5 rounded-full liquid-glass-subtle border border-cyan-500/20 mb-3 inline-block">
            Start A Conversation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-2">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-glow">
              Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-600 mx-auto rounded-full mt-4"></div>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-base">
            Have a project in mind or want to discuss a new collaboration? I'd
            love to connect with you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-5 liquid-glass rounded-3xl p-8 lg:p-10 flex flex-col justify-between border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] relative overflow-hidden"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight mb-3 text-glow">
                  Let's Build Together
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  I'm always open to discussing new software opportunities,
                  frontend architecture, and Web3 solutions.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                {/* Email Item */}
                <a
                  href="mailto:benjaminolufemi16@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl liquid-glass-subtle hover:border-cyan-500/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl liquid-glass-glow flex items-center justify-center text-cyan-400 text-xl group-hover:scale-110 transition-transform">
                    <IoMailOutline />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-mono uppercase">
                      Email
                    </p>
                    <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      benjaminolufemi16@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone Item */}
                <div className="flex items-center gap-4 p-4 rounded-2xl liquid-glass-subtle">
                  <div className="w-12 h-12 rounded-xl liquid-glass-glow flex items-center justify-center text-cyan-400 text-xl">
                    <IoCallOutline />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-mono uppercase">
                      Phone
                    </p>
                    <p className="text-sm font-semibold text-white">
                      08160989601, 08113639891
                    </p>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-4 p-4 rounded-2xl liquid-glass-subtle">
                  <div className="w-12 h-12 rounded-xl liquid-glass-glow flex items-center justify-center text-cyan-400 text-xl">
                    <IoLocationOutline />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-mono uppercase">
                      Workplace
                    </p>
                    <p className="text-sm font-semibold text-white">
                      Available Hybrid & Remote Worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 mt-8 border-t border-white/[0.08]">
              <p className="text-xs font-mono uppercase text-slate-400 mb-4 tracking-wider">
                Connect with me
              </p>
              <div className="flex gap-3">
                {SocialLinks.map((link) => (
                  <motion.a
                    key={link.id}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-2xl liquid-glass-subtle flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all shadow-md"
                    title={link.name}
                  >
                    {link.iconSrc}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7 liquid-glass rounded-3xl p-8 lg:p-10 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  required
                  className="w-full liquid-glass-subtle border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20 transition-all font-medium"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  required
                  className="w-full liquid-glass-subtle border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20 transition-all font-medium"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows="4"
                  className="w-full liquid-glass-subtle border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20 transition-all font-medium resize-none"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-bold py-4 rounded-2xl shadow-[0_0_25px_-3px_rgba(6,182,212,0.5)] hover:shadow-[0_0_35px_0px_rgba(6,182,212,0.7)] transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 border border-white/20"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <IoSendOutline className="text-lg" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
