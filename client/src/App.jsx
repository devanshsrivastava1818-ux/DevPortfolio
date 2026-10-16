
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
  Moon,
  GitBranch,
  Sparkles,
  GraduationCap,
  Layers3,
  Send,
} from "lucide-react";
import "./index.css";
import devAvatar from "./assets/dev-avatar.png";

const projects = [
  {
    number: "01",
    title: "PhishScan",
    category: "MACHINE LEARNING",
    description:
      "An ML-powered phishing URL detection system that classifies suspicious links and presents risk scores.",
    tech: ["Python", "Scikit-learn", "Flask"],
    link: "https://github.com/",
  },
  {
    number: "02",
    title: "SchemeAssist",
    category: "AI / WEB DEVELOPMENT",
    description:
      "A government scheme discovery concept designed to help people explore schemes relevant to their needs.",
    tech: ["React", "JavaScript", "AI"],
    link: "https://github.com/",
  },
  {
    number: "03",
    title: "Smart Ride Sharing",
    category: "DATABASE SYSTEMS",
    description:
      "A database-driven transportation management system for coordinating shared rides and organizing records.",
    tech: ["SQL", "DBMS", "Database Design"],
    link: "https://github.com/",
  },
];

const skills = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Building clean and responsive interfaces.",
    items: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Backend",
    icon: Database,
    description: "Connecting interfaces with data and APIs.",
    items: ["Node.js", "Express.js", "REST APIs", "MongoDB"],
  },
  {
    title: "Tools & Learning",
    icon: Terminal,
    description: "Exploring tools to build practical solutions.",
    items: ["Git & GitHub", "Python", "Machine Learning", "SQL"],
  },
];

const navigation = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

function SectionHeading({ eyebrow, title, accent, description }) {
  return (
    <motion.div
      className="section-heading"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2>
        {title} <span>{accent}</span>
      </h2>
      {description && <p className="muted">{description}</p>}
    </motion.div>
  );
}

export default function App() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function submitContact(e) {
    e.preventDefault();
    setSending(true);
    setStatus("Sending your message...");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL || "http://localhost:5001"}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Message could not be sent.");
      }

      setStatus(data.message || "Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus(
        error.message === "Failed to fetch"
          ? "Unable to connect. Please try again in a moment."
          : error.message || "Unable to send your message."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <div className={dark ? "site dark" : "site light"}>
      <header className="navbar">
        <a className="brand" href="#home" aria-label="Devansh home">
          d<span>.</span>
        </a>

        <nav className={menu ? "nav-links open" : "nav-links"}>
          {navigation.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenu(false)}>
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="icon-btn theme-toggle"
            onClick={() => setDark((value) => !value)}
            aria-label="Toggle color theme"
            title="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a className="small-cta" href="#contact">
            Let's talk <ArrowUpRight size={15} />
          </a>

          <button
            className="icon-btn mobile-menu"
            onClick={() => setMenu((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={menu}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <motion.div
              className="availability"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="availability-dot" />
              COMPUTER SCIENCE STUDENT
            </motion.div>

            <motion.p
              className="eyebrow hero-eyebrow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              HELLO, I'M DEVANSH
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
            >
              Ideas into
              <br />
              <span>digital craft.</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              I'm Devansh Srivastava.
            </motion.h2>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              A CSE student at JK Lakshmipat University, exploring web
              development, machine learning, and useful solutions to real-world
              problems.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <a href="#projects" className="primary-btn">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a href="#contact" className="secondary-btn">
                Get in touch
              </a>
            </motion.div>

            <motion.div
              className="socials"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GitBranch size={19} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Code2 size={19} />
              </a>
              <a href="#contact" aria-label="Contact">
                <Mail size={19} />
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="visual-grid" />
            <motion.div
              className="orbit orbit-one"
              animate={{ rotate: 360 }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="orbit orbit-two"
              animate={{ rotate: -360 }}
              transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="hero-photo-frame"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="hero-photo-glow" />
              <img
                className="hero-avatar"
                src={devAvatar}
                alt="Illustrated portrait of Devansh Srivastava"
              />
              <div className="hero-photo-shine" />
            </motion.div>

            <motion.div
              className="floating-card card-one"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Code2 size={17} />
              <span>
                <strong>Web development</strong>
                <small>Building for the web</small>
              </span>
            </motion.div>

            <motion.div
              className="floating-card card-two"
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Database size={17} />
              <span>
                <strong>Machine learning</strong>
                <small>Curiosity into projects</small>
              </span>
            </motion.div>

            <span className="visual-caption">
              CURIOUS MIND. PRACTICAL SOLUTIONS.
            </span>
          </motion.div>

          <a className="scroll-cue" href="#about">
            <span /> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="section about" id="about">
          <SectionHeading
            eyebrow="A LITTLE ABOUT ME"
            title="Curiosity meets"
            accent="creation."
          />

          <motion.div
            className="about-grid"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="about-mark">
              <img
                className="about-avatar"
                src={devAvatar}
                alt="Devansh's illustrated avatar"
              />
              <div className="about-mark-caption">STUDENT · BUILDER · LEARNER</div>
            </div>

            <div className="about-copy">
              <p className="large-copy">
                I like turning interesting ideas into useful digital
                experiences.
              </p>
              <p className="muted">
                I'm Devansh, a Computer Science and Engineering student at JK
                Lakshmipat University, Jaipur. I'm currently exploring the MERN
                stack, databases, and machine learning through practical
                projects and continuous learning.
              </p>

              <div className="info-row">
                <div>
                  <span>BASED IN</span>
                  <strong>Jaipur, India</strong>
                </div>
                <div>
                  <span>FOCUS</span>
                  <strong>Web & technology</strong>
                </div>
              </div>

              <a href="#contact" className="text-link">
                Let's connect <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        </section>

        <section className="section" id="skills">
          <SectionHeading
            eyebrow="MY TOOLKIT"
            title="Tools for"
            accent="building."
            description="Technologies I'm learning and putting into practice."
          />

          <div className="skills-grid">
            {skills.map(({ title, icon: Icon, description, items }, index) => (
              <motion.article
                className="skill-card"
                key={title}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -5 }}
              >
                <div className="skill-card-top">
                  <div className="skill-icon">
                    <Icon size={21} />
                  </div>
                  <span className="card-index">0{index + 1}</span>
                </div>
                <h3>{title}</h3>
                <p className="muted">{description}</p>
                <div className="skill-tags">
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="A few things"
            accent="I've built."
            description="Academic and personal projects exploring practical problems."
          />

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                className="project-card"
                key={project.title}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -7 }}
              >
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <div className="project-symbol">
                    <Layers3 size={21} />
                  </div>
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
                  View on GitHub <ArrowUpRight size={16} />
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <SectionHeading
            eyebrow="MY JOURNEY"
            title="Learning by"
            accent="building."
            description="My current academic journey and areas of exploration."
          />

          <div className="timeline">
            <motion.article
              className="timeline-item"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="timeline-dot" />
              <div className="timeline-item-heading">
                <div className="timeline-icon">
                  <GraduationCap size={20} />
                </div>
                <span className="timeline-date">CURRENT</span>
              </div>
              <h3>B.Tech — Computer Science & Engineering</h3>
              <p className="muted">JK Lakshmipat University, Jaipur</p>
              <p className="timeline-detail">
                Exploring software development, databases, and machine
                learning through coursework and projects.
              </p>
            </motion.article>

            <motion.article
              className="timeline-item"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="timeline-dot" />
              <div className="timeline-item-heading">
                <div className="timeline-icon">
                  <Sparkles size={20} />
                </div>
                <span className="timeline-date">ONGOING</span>
              </div>
              <h3>Academic & personal projects</h3>
              <p className="muted">
                Web development · Databases · Machine learning
              </p>
              <p className="timeline-detail">
                Learning by creating practical applications and improving
                development skills step by step.
              </p>
            </motion.article>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <SectionHeading
            eyebrow="GET IN TOUCH"
            title="Have something"
            accent="in mind?"
            description="Have a project idea, question, or just want to connect? Send a message."
          />

          <div className="contact-grid">
            <motion.div
              className="contact-note"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="contact-icon">
                <Mail size={23} />
              </div>
              <h3>Let's make it happen.</h3>
              <p className="muted">
                I'm always happy to connect, exchange ideas, and explore
                interesting projects.
              </p>

              <a href="mailto:" className="contact-direct">
                Say hello <ArrowUpRight size={16} />
              </a>
            </motion.div>

            <motion.form
              className="contact-form"
              onSubmit={submitContact}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <label>
                Your name
                <input
                  required
                  minLength={2}
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  placeholder="What should I call you?"
                />
              </label>

              <label>
                Email address
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
                Your message
                <textarea
                  required
                  minLength={5}
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Tell me what you're thinking..."
                />
              </label>

              <button className="primary-btn" type="submit" disabled={sending}>
                {sending ? "Sending..." : "Send message"}
                <Send size={16} />
              </button>

              {status && (
                <p role="status" className="form-status">
                  {status}
                </p>
              )}
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">
          d<span>.</span>
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
        <a className="back-to-top" href="#home">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}
