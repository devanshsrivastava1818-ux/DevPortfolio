import { useEffect, useRef, useState } from "react";
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
  Award,
  ExternalLink,
  Layers3,
  Send,
} from "lucide-react";
import "./index.css";
import devAvatar from "./assets/dev-avatar.png";

const projects = [
  {
    number: "01",
    title: "Anytime Invest",
    category: "FINANCIAL ANALYTICS",
    description:
      "A full-stack wealth analytics platform for client portfolio lookup and downloadable PDF reporting, powered by Databricks SQL Warehouse.",
    tech: ["Node.js", "Express.js", "Databricks", "PDFKit"],
    link: "https://github.com/devanshsrivastava1818-ux/anytime-invest",
  },
  {
    number: "02",
    title: "Smart Ride Sharing",
    category: "DATABASE SYSTEMS",
    description:
      "A database-driven transportation management system for coordinating shared rides and organizing records.",
    tech: ["SQL", "DBMS", "Database Design"],
    link: "https://github.com/devanshsrivastava1818-ux/Smart-Ride-Sharing-DBMS-",
  },
  {
    number: "03",
    title: "Dark Patterns Detection",
    category: "NLP & MACHINE LEARNING",
    description:
      "An NLP-powered system that detects manipulative e-commerce UI/UX patterns using TF-IDF and compares Logistic Regression, SVM, and Random Forest, achieving a best ROC-AUC score of 0.9793.",
    tech: ["Python", "NLP", "TF-IDF", "Random Forest"],
    link: "https://github.com/Devanshpundir-code/College_machine_learning_project",
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

const certifications = [
  {
    title: "Red Hat System Administration I (RH124 - RHA) - Ver. 10",
    issuer: "Red Hat",
    issued: "April 2026",
    credential: "Credly credential",
    link: "https://www.credly.com/badges/dcc8e27d-6581-4d1b-a40e-d3fa8360a7d3",
  },
  {
    title: "Database Management System",
    issuer: "Infosys",
    issued: "November 2025",
    credential: "Course completion certificate",
    link: "https://www.linkedin.com/in/devansh-srivastava-vk18/overlay/Certifications/1438757069/treasury/?profileId=ACoAAFPME1kBXMsq_qwtS4pEYn8E7bnvAFrxR2E",
  },
  {
    title: "Data Structures and Algorithms in C",
    issuer: "Udemy",
    issued: "December 2025",
    credential: "Credential ID: UC-de809488-4493-4e8d-9163-082dc3b032ce",
    link: "https://www.udemy.com/certificate/UC-de809488-4493-4e8d-9163-082dc3b032ce/",
  },
];

const navigation = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Certifications", "#certifications"],
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

function CursorGlow() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!finePointer.matches || reducedMotion.matches) return;

    const moveCursor = (event) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
      cursor.classList.add("is-visible");

      if (event.target.closest("a, button, .project-card, input, textarea")) {
        cursor.classList.add("is-interactive");
      } else {
        cursor.classList.remove("is-interactive");
      }
    };

    const hideCursor = () => cursor.classList.remove("is-visible", "is-interactive");

    document.addEventListener("pointermove", moveCursor, { passive: true });
    document.addEventListener("pointerleave", hideCursor);

    return () => {
      document.removeEventListener("pointermove", moveCursor);
      document.removeEventListener("pointerleave", hideCursor);
    };
  }, []);

  return <span ref={cursorRef} className="cursor-glow" aria-hidden="true" />;
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
      <CursorGlow />
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
              initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="availability-dot" />
              COMPUTER SCIENCE STUDENT
            </motion.div>

            <motion.p
              className="eyebrow hero-eyebrow"
              initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.65, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            >
              HELLO, I'M DEVANSH
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              Ideas into
              <br />
              <span>digital craft.</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.75, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
            >
              I'm Devansh Srivastava.
            </motion.h2>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 12, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.75, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
            >
              A CSE student at JK Lakshmipat University, exploring web
              development, machine learning, and useful solutions to real-world
              problems.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 16, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
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
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.78, ease: [0.22, 1, 0.36, 1] }}
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
                href="https://www.linkedin.com/in/devansh-srivastava-vk18/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
                </svg>
              </a>
              <a href="#contact" aria-label="Contact">
                <Mail size={19} />
              </a>
              <a
                href={`${import.meta.env.VITE_API_URL || "http://localhost:5001"}/api/resume/pdf`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resume PDF"
                title="Resume PDF"
              >
                <Download size={19} />
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.92, y: 14, filter: "blur(7px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.05, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
                onMouseMove={(event) => {
                  const card = event.currentTarget;
                  const rect = card.getBoundingClientRect();

                  const x = (event.clientX - rect.left) / rect.width;
                  const y = (event.clientY - rect.top) / rect.height;

                  card.style.setProperty("--tilt-x", `${(0.5 - y) * 6}deg`);
                  card.style.setProperty("--tilt-y", `${(x - 0.5) * 8}deg`);
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.setProperty("--tilt-x", "0deg");
                  event.currentTarget.style.setProperty("--tilt-y", "0deg");
                }}
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
                  className={`project-link ${project.link === "#" ? "project-link-disabled" : ""}`}
                  href={project.link}
                  target={project.link.startsWith("http") ? "_blank" : undefined}
                  rel={project.link.startsWith("http") ? "noreferrer" : undefined}
                  onClick={project.link === "#" ? (event) => event.preventDefault() : undefined}
                  aria-disabled={project.link === "#" ? "true" : undefined}
                  title={project.link === "#" ? "GitHub repository link will be added when available" : undefined}
                >
                  {project.link.startsWith("http") ? "View on GitHub" : "GitHub link coming soon"} <ArrowUpRight size={16} />
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

        <section className="section certifications-section" id="certifications">
          <SectionHeading
            eyebrow="CONTINUOUS LEARNING"
            title="Certificates &"
            accent="credentials."
            description="Courses and credentials supporting my journey in systems, databases, and programming."
          />

          <div className="certifications-grid">
            {certifications.map((certificate, index) => (
              <motion.article
                className="certification-card"
                key={certificate.title}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="certification-top">
                  <div className="certification-icon"><Award size={21} /></div>
                  <span className="card-index">0{index + 1}</span>
                </div>
                <p className="eyebrow">{certificate.issuer}</p>
                <h3>{certificate.title}</h3>
                <p className="muted">Issued {certificate.issued}</p>
                <p className="certification-credential">{certificate.credential}</p>
                {certificate.link && (
                  <a className="certification-link" href={certificate.link} target="_blank" rel="noopener noreferrer">
                    View credential <ExternalLink size={15} />
                  </a>
                )}
              </motion.article>
            ))}
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
          <a
            href="https://www.linkedin.com/in/devansh-srivastava-vk18/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
            </svg>
            LinkedIn Profile
          </a>
        </div>
        <a className="back-to-top" href="#home">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}