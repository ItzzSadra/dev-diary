import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const navigate = useNavigate();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    dark ? html.classList.add("dark") : html.classList.remove("dark");
  }, [dark]);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 overflow-x-hidden">
      {/* NAVBAR */}
      <header className="flex justify-between items-center px-12 py-6 sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50">
        <h1 className="text-2xl font-extrabold cursor-pointer" onClick={() => navigate("/")}>DevDiary</h1>

        <div className="flex items-center gap-6">
          <button className="hover:underline">Learn More</button>
          <button className="hidden md:block border dark:border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100/30">
            Explore App
          </button>
          <button
            onClick={() => setDark(!dark)}
            className="border px-3 py-2 rounded-lg dark:border-gray-700 hover:bg-gray-100/30"
          >
            {dark ? "☀︎" : "☾"}
          </button>
          <button
            className="bg-teal-400 dark:bg-teal-500 px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-12 py-24 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
          <h2 className="text-6xl font-extrabold">
            Track Your Coding Journey
            <br />
            <span className="text-teal-400 dark:text-teal-300">Like a Boss</span>
          </h2>
          <p className="mt-6 text-lg max-w-md text-gray-600 dark:text-gray-300">
            No more forgetting what you did yesterday.  
            Be proud of your growth. Log it. Track it. OWN IT.
          </p>

          <button
            onClick={() => navigate("/login")}
            className="mt-10 bg-teal-400 text-gray-900 dark:bg-teal-500 font-bold px-8 py-4 rounded-lg text-xl hover:scale-105 transition"
          >
            Begin Your Journey
          </button>
        </motion.div>

        {/* Cool shapes */}
        <motion.div className="grid grid-cols-3 gap-4 place-items-center">
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              className={`w-28 h-28 bg-gradient-to-br from-teal-400 dark:from-teal-300 to-transparent rounded-${i % 2 === 0 ? "lg" : "full"}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.06 }}
            />
          ))}
        </motion.div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-12 py-24 text-center">
        <h3 className="text-4xl font-extrabold mb-12">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            "Write your daily logs with ease",
            "Track streaks & achievements",
            "Improve productivity & learning",
          ].map((text, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <p>{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SHOWCASE SECTION */}
      <section className="px-12 py-24 bg-gray-50 dark:bg-gray-800 text-center">
        <h3 className="text-4xl font-bold mb-16">App Showcase</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {["Dashboard", "Daily Entries", "Analytics"].map((title, i) => (
            <motion.div
              key={i}
              className="rounded-xl overflow-hidden shadow-xl bg-gray-200 dark:bg-gray-700 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-full h-48 bg-gradient-to-br from-teal-400 dark:from-teal-300 to-gray-300 dark:to-gray-900 flex items-center justify-center">
                <span className="font-bold text-xl">{title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-12 py-24">
        <h3 className="text-4xl font-extrabold text-center mb-16">Why DevDiary?</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            "Sleek UI to motivate coding",
            "No distractions, just progress ",
            "Fast AF",
            "Works everywhere",
            "Private & secure",
            "Detailed streak system",
          ].map((f, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 border dark:border-gray-700 shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <p className="font-semibold">{f}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-12 py-24 bg-gray-50 dark:bg-gray-800">
        <h3 className="text-4xl font-extrabold text-center mb-16">Developers Love It</h3>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            "“Now I actually remember what I coded yesterday.” – Some Dev",
            "“My streaks are healthier than my sleep schedule.” – Same Dev",
            "“It’s like Tinder for productivity. I keep swiping success.” – Also Same Dev",
          ].map((text, i) => (
            <motion.div
              key={i}
              className="rounded-xl p-8 bg-white dark:bg-gray-900 border shadow-lg"
            >
              <p className="italic">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA END */}
      <section className="px-12 py-24 text-center">
        <h3 className="text-5xl font-extrabold mb-10">Ready to Level Up?</h3>
        <button
          onClick={() => navigate("/login")}
          className="bg-teal-400 dark:bg-teal-500 px-12 py-5 text-xl rounded-xl font-bold hover:scale-110 transition"
        >
          Create Account 🚀
        </button>
      </section>

      {/* FAQ */}
      <section className="px-12 py-24">
        <h3 className="text-4xl mb-12 font-extrabold text-center">FAQ 🙋‍♂️</h3>
        <div className="space-y-6 max-w-3xl mx-auto">
          {[
            ["How much does it cost?", "it's free (for now)"],
            ["Can I export my logs?", "Soon™, I'm thinking PDF"],
            ["Will this help me become a 10x developer?", "What does this have to do with this?"],
          ].map(([q, a], i) => (
            <details key={i} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <summary className="font-bold cursor-pointer">{q}</summary>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center bg-gray-900 text-gray-400">
        <p>© {new Date().getFullYear()} DevDiary Corp — Built with ♡</p>
      </footer>
    </div>
  );
}
