"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  const [isVisible, setIsVisible] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSending(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus(data.error || "Something went wrong.");
        return;
      }

      setStatus("Message sent successfully.");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("Unable to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-4xl">

        {/* Contact Introduction */}
        <div
          className={`text-center transition-all duration-[1500ms] ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Let&apos;s connect.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            I&apos;m open to opportunities in Data Analytics, Data Science, and
            Machine Learning. If you&apos;re interested in discussing a project,
            collaboration, or career opportunity, I&apos;d be glad to connect.
          </p>
        </div>

        {/* Contact Buttons */}
        <div
          className={`mt-10 flex flex-col items-center justify-center gap-4 transition-all duration-[1500ms] ease-out sm:flex-row ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
          style={{
            transitionDelay: "200ms",
          }}
        >
         <button
  type="button"
  onClick={() => setShowForm(!showForm)}
  className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-400"
>
  {showForm ? "Close Form" : "Email Me"}
</button>

          <a
            href="https://www.linkedin.com/in/muhammad-sohaib-9b11a9340/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-cyan-400 hover:text-cyan-400"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/MuhammadSohaib143-hs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-cyan-400 hover:text-cyan-400"
          >
            GitHub
          </a>
        </div>

        {/* Contact Form */}
        <div
          className={`grid transition-all duration-700 ease-out ${
            showForm
              ? "mt-12 grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <form
              onSubmit={handleSubmit}
              className="mx-auto max-w-2xl space-y-6 rounded-2xl border border-white/10 bg-white/[0.03] p-7"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition-colors duration-200 placeholder:text-gray-600 focus:border-cyan-400"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition-colors duration-200 placeholder:text-gray-600 focus:border-cyan-400"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Write your message..."
                  rows={6}
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition-colors duration-200 placeholder:text-gray-600 focus:border-cyan-400"
                />
              </div>

              {/* Send Button */}
              <div className="flex flex-col items-center gap-4">
                <button
                  type="submit"
                  disabled={isSending}
                  className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-colors duration-200 hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>

                {status && (
                  <p className="text-sm text-gray-400">
                    {status}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}