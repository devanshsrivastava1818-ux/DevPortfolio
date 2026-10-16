import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowUpRight,
  Download,
  Code2,
  Database,
  Terminal,
  Menu,
  X,
  Sun,
  Moon
} from "lucide-react";

import "./index.css";

const projects = [
  {
    title: "PhishScan",
    category: "Machine Learning",
    description:
      "An ML-powered phishing URL detector that classifies URLs and displays risk scores.",
    tech: ["Python", "Scikit-learn", "Flask"],
    link: "https://github.com/"
  },
  {
    title: "SchemeAssist",
    category: "AI / Web Development",
    description:
      "A government scheme discovery platform designed to help people find relevant schemes.",
    tech: ["React", "JavaScript", "AI"],
    link: "https://github.com/"
  },
  {
    title: "Smart Ride Sharing",
    category: "Database",
    description:
      "A database-driven transportation management system for coordinating shared rides.",
    tech: ["SQL", "DBMS", "Database Design"],
    link: "https://github.com/"
  }
];

const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "React"],
  Backend: ["Node.js", "Express.js", "REST APIs"],
  "Tools & Technologies": ["Git", "GitHub", "MongoDB", "Python"]
};

export default function App() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  async function submitContact(e) {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL || "http://localhost:5001"}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form)
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Message could not be sent.");
      }

      setStatus(data.message || "Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus(
        "Unable to send. Check that the backend is running on port 5001."
      );
    }
  }

  const nav = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Education", "#education"],
    ["Contact", "#contact"]
  ];

  return (
    <div className={dark ? "site dark" : "site light"}>
      <header className="navbar">
        <a className="brand" href="#home">
          DS<span>.</span>
        </a>

        <nav className={menu ? "nav-links open" : "nav-links"}>
          {nav.map(([name, href]) => (
            <a key={name} href={href} onClick={() => setMenu(false)}>
              {name}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="icon-btn"
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <a href="#contact" className="small-cta">
            Let's talk <ArrowUpRight size={15} />
          </a>

          <button
            className="icon-btn mobile-menu"
            onClick={() => setMenu(!menu)}
            aria-label="Toggle navigation"
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero section" id="home">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="availability">
              <span /> COMPUTER SCIENCE STUDENT
            </div>

            <p className="eyebrow">HELLO, I'M</p>
            <h1>
              Devansh
              <br />
              <span>Srivastava.</span>
            </h1>

            <h2>
              Building ideas into <span>digital experiences.</span>
            </h2>

            <p className="hero-description">
              I'm a CSE student exploring web development, machine learning
              and practical technology solutions.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a href="#contact" className="secondary-btn">
                Get in touch
              </a>
            </div>

            <div className="socials">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Code2 />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Code2 />
              </a>

              <a href="#contact" aria-label="Email">
                <Mail />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="orb">
              <Code2 size={92} strokeWidth={1} />
            </div>
            <div className="floating-card card-one">
              <Code2 size={18} /> Full Stack Development
            </div>
            <div className="floating-card card-two">
              <Database size={18} /> Machine Learning
            </div>
            <div className="visual-caption">
              Curious mind. Practical solutions.
            </div>
          </motion.div>
        </section>

        <section className="section about" id="about">
          <div className="section-heading">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>
              Turning curiosity into <span>creation.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-mark">
              DS<span>.</span>
            </div>

            <div>
              <p className="large-copy">
                I'm Devansh, a Computer Science and Engineering student at
                JK Lakshmipat University, Jaipur.
              </p>

              <p className="muted">
                I enjoy building useful digital products, learning new
                technologies and solving real-world problems through code.
                Currently, I'm developing my skills in the MERN stack,
                databases and machine learning.
              </p>

              <div className="info-row">
                <div>
                  <span>LOCATION</span>
                  <strong>Jaipur, India</strong>
                </div>
                <div>
                  <span>STATUS</span>
                  <strong>Undergraduate student</strong>
                </div>
              </div>

              <a href="#contact" className="text-link">
                Let's connect <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">MY TOOLKIT</p>
            <h2>
              Skills & <span>technologies.</span>
            </h2>
            <p className="muted">
              Technologies I'm learning and working with.
            </p>
          </div>

          <div className="skills-grid">
            {Object.entries(skills).map(([category, items], i) => (
              <motion.div
                className="skill-card"
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="skill-icon">
                  {i === 0 ? (
                    <Code2 />
                  ) : i === 1 ? (
                    <Database />
                  ) : (
                    <Terminal />
                  )}
                </div>

                <h3>{category}</h3>

                {items.map((item, j) => (
                  <div className="skill-item" key={item}>
                    <div className="skill-label">
                      <span>{item}</span>
                      <span>
                        {["Learning", "Practising", "Exploring"][j % 3]}
                      </span>
                    </div>

                    <div className="skill-track">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${65 + (j % 3) * 10}%`
                        }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">SELECTED WORK</p>
            <h2>
              Projects I've <span>worked on.</span>
            </h2>
            <p className="muted">
              A selection of academic and personal projects.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, i) => (
              <motion.article
                className="project-card"
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="project-top">
                  <span>0{i + 1}</span>
                  <Code2 size={22} />
                </div>

                <p className="eyebrow">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="muted">{project.description}</p>

                <div className="tags">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <ArrowUpRight size={16} />
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <div className="section-heading">
            <p className="eyebrow">MY JOURNEY</p>
            <h2>
              Education & <span>milestones.</span>
            </h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-dot" />
              <p className="eyebrow">CURRENT</p>
              <h3>B.Tech — Computer Science & Engineering</h3>
              <p className="muted">
                JK Lakshmipat University, Jaipur
              </p>
              <span className="timeline-date">
                Undergraduate studies
              </span>
            </div>

            <div className="timeline-item">
              <span className="timeline-dot" />
              <p className="eyebrow">PROJECT EXPERIENCE</p>
              <h3>Academic & Personal Projects</h3>
              <p className="muted">
                Building projects in web development, databases and machine
                learning.
              </p>
            </div>
          </div>

          <p className="muted">
            Add your verified certifications, courses and achievements here
            before submission.
          </p>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-heading">
            <p className="eyebrow">GET IN TOUCH</p>
            <h2>
              Have an idea? <span>Let's talk.</span>
            </h2>
            <p className="muted">
              Send me a message using the form below.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-note">
              <Mail size={28} />
              <h3>Let's build something useful.</h3>
              <p className="muted">
                Open to connecting with people, discussing ideas and
                exploring opportunities.
              </p>
              <p className="muted">Jaipur, India</p>
            </div>

            <form className="contact-form" onSubmit={submitContact}>
              <label>
                Name
                <input
                  required
                  minLength={2}
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  placeholder="Your name"
                />
              </label>

              <label>
                Email
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  placeholder="you@example.com"
                />
              </label>

              <label>
                Message
                <textarea
                  required
                  minLength={5}
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Tell me about your idea..."
                />
              </label>

              <button className="primary-btn" type="submit">
                Send message <ArrowUpRight size={17} />
              </button>

              {status && (
                <p role="status" className="form-status">
                  {status}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">
          DS<span>.</span>
        </a>

        <p>Designed & built by Devansh Srivastava.</p>

        <div className="footer-downloads">
          <a href="http://localhost:5001/api/resume/pdf">
            <Download size={15} /> Resume PDF
          </a>
          <a href="http://localhost:5001/api/resume/docx">
            <Download size={15} /> Resume DOCX
          </a>
        </div>

        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}