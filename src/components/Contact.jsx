import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { IoMail, IoCall, IoLocation } from "react-icons/io5";
import { SocialLinks } from "../data";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_dmxq6sb", "template_m7vyxnm", form.current, {
                publicKey: "TNqEZSn8KabiXckMt",
            })
            .then(
                () => {
                    toast.success("Email sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    toast.error("Failed to send email!");
                }
            );
    };

    return (
        <section id="contacts" className="w-full py-20 bg-slate-950 text-white relative">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get in <span className="text-cyan-400">Touch</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-slate-100">Let's Collaborate</h3>
                        <p className="text-slate-300 leading-relaxed">
                            I'm always open to discussing product design work or partnership opportunities.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-cyan-400 text-xl border border-slate-800">
                                    <IoMail />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Email</p>
                                    <a href="mailto:benjaminolufemi16@gmail.com" className="hover:text-cyan-400 transition-colors">
                                        benjaminolufemi16@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-cyan-400 text-xl border border-slate-800">
                                    <IoCall />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Phone</p>
                                    <p>08160989601, 07054405537</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-cyan-400 text-xl border border-slate-800">
                                    <IoLocation />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Location</p>
                                    <p>Available Remote</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <p className="text-sm text-slate-500 mb-4">Follow me</p>
                            <div className="flex gap-4">
                                {SocialLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={link.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-cyan-500 transition-all duration-300"
                                    >
                                        {link.iconSrc}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8"
                    >
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="user_name"
                                    id="name"
                                    required
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    name="user_email"
                                    id="email"
                                    required
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    rows="4"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-1"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
