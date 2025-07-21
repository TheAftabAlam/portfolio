import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_onge28l",
        "template_mc3updx",
        {
          recruiter_name: form.current.recruiter_name.value,
          recruiter_email: form.current.recruiter_email.value,
          recruiter_subject: form.current.recruiter_subject.value,
          recruiter_company: form.current.recruiter_company.value,
          recruiter_message: form.current.recruiter_message.value,
          timestamp: new Date().toLocaleString(),
        },
        "RUt7_oo5mm--ZUrFa"
      )
      .then(
        () => {
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
          form.current.reset();
        },
        (error) => {
          console.error("Error:", error);
          toast.error("Failed to send message. Try again!", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[10vw] bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]"
    >
      <ToastContainer />
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white tracking-wide">📬 Contact Me</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg max-w-xl mx-auto">
          Let’s connect! Whether you have an opportunity or a question—drop me a message.
        </p>
      </div>

      <div className="w-full max-w-xl bg-[#131025] p-8 rounded-xl shadow-[0_0_20px_rgba(130,69,236,0.25)] border border-gray-700">
        <h3 className="text-2xl font-semibold text-white text-center mb-6">
          Let’s Talk <span>🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
          <input
            type="email"
            name="recruiter_email"
            placeholder="Your Email"
            required
            className="input-style"
          />
          <input
            type="text"
            name="recruiter_name"
            placeholder="Your Name"
            required
            className="input-style"
          />
          <input
            type="text"
            name="recruiter_company"
            placeholder="Company Name"
            required
            className="input-style"
          />
          <input
            type="text"
            name="recruiter_subject"
            placeholder="Subject"
            required
            className="input-style"
          />
          <textarea
            name="recruiter_message"
            placeholder="Your Message"
            rows="5"
            required
            className="input-style resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md transition ${
              loading ? "opacity-60 cursor-not-allowed" : "hover:opacity-90"
            }`}
          >
            {loading ? (
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
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
