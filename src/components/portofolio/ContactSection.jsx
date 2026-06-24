import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, CheckCircle } from "lucide-react";

export default function ContactSection({ developer }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [focused, setFocused] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Required";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputBase = "w-full bg-transparent border-0 border-b pb-3 pt-1 text-base text-[#1A1A1A] font-light outline-none placeholder:text-[#D1CDC7] transition-all duration-300";
  const borderColor = (field) =>
    errors[field]
      ? "border-red-400"
      : focused === field
      ? "border-[#1A1A1A]"
      : "border-[#D1CDC7]";

  return (
    <section id="contact" className="bg-[#F9F7F2]" style={{ cursor: "none" }}>
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-24 md:py-32">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#706C67] mb-3">
            Contact
          </p>
          <h2 className="font-serif text-[clamp(2.5rem,7vw,5rem)] font-bold uppercase text-[#1A1A1A] tracking-tight leading-none">
            Get In Touch
          </h2>
          <p className="mt-6 text-base text-[#706C67] font-light max-w-lg leading-relaxed">
            Currently open to senior full-time engineering roles. If you're building something that requires architectural depth, let's talk.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#D1CDC7]">
          {/* Form — 2 cols */}
          <motion.div
            className="md:col-span-2 bg-[#F9F7F2] p-10 md:p-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div className="flex flex-col items-start gap-4 py-16">
                <CheckCircle size={32} className="text-[#3E4C3F]" />
                <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">Message received.</h3>
                <p className="text-[#706C67] font-light leading-relaxed">
                  I'll review your note and get back to you within 24–48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10" noValidate>
                {/* Name + Email row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      className={`${inputBase} ${borderColor("name")}`}
                    />
                    {errors.name && (
                      <p className="font-mono text-[10px] tracking-wider uppercase text-red-400 mt-2">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      className={`${inputBase} ${borderColor("email")}`}
                    />
                    {errors.email && (
                      <p className="font-mono text-[10px] tracking-wider uppercase text-red-400 mt-2">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <textarea
                    placeholder="Message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    className={`${inputBase} resize-none ${borderColor("message")}`}
                  />
                  {errors.message && (
                    <p className="font-mono text-[10px] tracking-wider uppercase text-red-400 mt-2">{errors.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex items-center gap-3 bg-[#1A1A1A] text-[#F9F7F2] font-mono text-[11px] tracking-[0.25em] uppercase px-10 py-5 hover:bg-[#3E4C3F] transition-colors duration-300 disabled:opacity-50"
                >
                  {submitting ? "Sending..." : "Initiate Dialogue"}
                  {!submitting && <ArrowRight size={14} />}
                </button>
              </form>
            )}
          </motion.div>

          {/* Connect sidebar */}
          <motion.div
            className="bg-[#F9F7F2] p-10 md:p-14 flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#706C67] mb-8">
                Connect Online
              </p>
              <div className="space-y-6">
                <a
                  href={developer.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <Github size={16} className="text-[#706C67] group-hover:text-[#1A1A1A] transition-colors flex-shrink-0" />
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#706C67] group-hover:text-[#1A1A1A] transition-colors border-b border-transparent group-hover:border-[#1A1A1A] pb-0.5">
                    GitHub
                  </span>
                </a>
                <a
                  href={developer.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <Linkedin size={16} className="text-[#706C67] group-hover:text-[#1A1A1A] transition-colors flex-shrink-0" />
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#706C67] group-hover:text-[#1A1A1A] transition-colors border-b border-transparent group-hover:border-[#1A1A1A] pb-0.5">
                    LinkedIn
                  </span>
                </a>
                <a
                  href={`mailto:${developer.email}`}
                  className="flex items-center gap-4 group"
                >
                  <Mail size={16} className="text-[#706C67] group-hover:text-[#1A1A1A] transition-colors flex-shrink-0" />
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#706C67] group-hover:text-[#1A1A1A] transition-colors border-b border-transparent group-hover:border-[#1A1A1A] pb-0.5">
                    Email
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-12">
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#D1CDC7] space-y-2">
                <div>Available // Immediately</div>
                <div>Location // Remote-first</div>
                <div>Type // Full-Time</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full h-px bg-[#D1CDC7]" />
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#D1CDC7]">
          © {developer.name} {new Date().getFullYear()}
        </p>
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#D1CDC7]">
          Built with precision. Designed with intention.
        </p>
      </div>
    </section>
  );
}