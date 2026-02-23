const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-6 py-32 text-center"
    >
      <h2 className="text-4xl font-bold text-white mb-12">
        Connect With Me
      </h2>

      <div className="max-w-lg mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-xl bg-black/40 border border-white/10 focus:border-purple-500 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-xl bg-black/40 border border-white/10 focus:border-purple-500 outline-none"
          />

          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 rounded-xl bg-black/40 border border-white/10 focus:border-purple-500 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-xl hover:scale-105 transition"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
};

export default Contact;