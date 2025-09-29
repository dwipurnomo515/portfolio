"use client";

import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M2.01 6.998c0-1.105.897-2.002 2.002-2.002h15.975c1.105 0 2.002.897 2.002 2.002v10.004c0 1.105-.897 2.002-2.002 2.002H4.012a2.004 2.004 0 01-2.002-2.002V6.998zM20 6.998l-8 5.002-8-5.002V17h16V6.998z" />
        </svg>
      ),
      title: "Email",
      description: "Send me an email anytime",
      value: "dwipurnomo5151@gmail.com",
      href: "mailto:dwipurnomo5151@gmail.com",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.064-1.867-3.064-1.868 0-2.154 1.459-2.154 2.969v5.699h-3v-10h2.884v1.367h.041c.402-.761 1.384-1.562 2.848-1.562 3.047 0 3.611 2.005 3.611 4.613v5.582z" />
        </svg>
      ),
      title: "LinkedIn",
      description: "Connect with me professionally",
      value: "linkedin.com/in/dwi-purnomo",
      href: "https://linkedin.com/in/dwi-purnomo",
      color: "from-indigo-600 to-indigo-700",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 008.208 11.004c.6.111.82-.26.82-.577 0-.285-.011-1.04-.017-2.043-3.338.726-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.754-1.333-1.754-1.09-.746.083-.73.083-.73 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.761-1.604-2.665-.304-5.466-1.332-5.466-5.932 0-1.31.468-2.381 1.236-3.222-.124-.304-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.485 11.485 0 016 0c2.291-1.552 3.298-1.23 3.298-1.23.655 1.653.243 2.872.12 3.176.77.841 1.234 1.912 1.234 3.222 0 4.61-2.804 5.625-5.475 5.922.43.371.813 1.103.813 2.222 0 1.604-.014 2.898-.014 3.293 0 .32.216.694.825.576A11.501 11.501 0 0023.5 12c0-6.352-5.148-11.5-11.5-11.5z" />
        </svg>
      ),
      title: "GitHub",
      description: "Check out my code",
      value: "github.com/dwipurnomo515",
      href: "https://github.com/dwipurnomo515",
      color: "from-slate-700 to-slate-800",
    },
  ];

  // State form dan toast
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const showToast = (
    message: string,
    type: "success" | "error" = "success"
  ) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(form.action, { method: form.method, body: data });
      if (res.ok) {
        setFormData({ name: "", email: "", subject: "", message: "" });
        showToast("Message sent successfully!", "success");
      } else {
        showToast("Failed to send message.", "error");
      }
    } catch (err) {
      console.error(err);
      showToast("Error sending message.", "error");
    }
  };

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-8">
            <span className="bg-gradient-to-r from-slate-800 via-indigo-600 to-emerald-600 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
            Ready to collaborate, hire me, or just say hello? I'd love to hear
            from you!
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Get In Touch" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 hover:bg-white/80 no-underline!"
              >
                <div className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">
                    {method.description}
                  </p>
                  <p className="text-sm font-medium text-indigo-600 group-hover:text-emerald-600 transition-colors duration-300">
                    {method.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="form"
        className="px-6 py-20 bg-gradient-to-r from-slate-50 to-indigo-50"
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Send me a message
            </h2>
            <p className="text-lg text-slate-600">
              Prefer to send a direct message? Fill out the form below and I'll
              get back to you as soon as possible.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-lg">
            <form
              className="space-y-6 "
              action="https://getform.io/f/bkkkqpqb"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed bottom-8 right-8 px-6 py-4 rounded-xl shadow-lg text-white font-medium transition-all duration-300 ${
            toast.type === "success"
              ? "bg-gradient-to-r from-indigo-600 to-emerald-600"
              : "bg-red-600"
          }`}
        >
          {toast.message}
        </div>
      )}
    </div>
  );
}
