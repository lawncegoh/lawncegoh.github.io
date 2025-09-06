const { useState } = React;

function App() {
  const [active, setActive] = useState('about');
  const handleNav = (id) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <aside className="sidebar">
        <h1 className="brand">Lawnce G.</h1>
        <nav>
          <a href="#about" className={active === 'about' ? 'active' : ''} onClick={() => handleNav('about')}>Overview</a>
          <a href="#services" className={active === 'services' ? 'active' : ''} onClick={() => handleNav('services')}>Services</a>
          <a href="#skills" className={active === 'skills' ? 'active' : ''} onClick={() => handleNav('skills')}>Skills</a>
          <a href="#projects" className={active === 'projects' ? 'active' : ''} onClick={() => handleNav('projects')}>Projects</a>
          <a href="#contact" className={active === 'contact' ? 'active' : ''} onClick={() => handleNav('contact')}>Contact</a>
        </nav>
      </aside>

      <main className="content">
        <section id="about">
          <h2>About Me</h2>
          <p>
            AI engineer with a strong background in GitHub-based collaboration and a keen focus on
            efficient, scalable GenAI solutions. Passionate about accelerating innovation through intelligent automation.
          </p>
          <div className="stats">
            <div className="stat">
              <h3>Projects</h3>
              <p>20+ AI/ML and GenAI builds</p>
            </div>
            <div className="stat">
              <h3>Open Source</h3>
              <p>Active contributor on GitHub</p>
            </div>
            <div className="stat">
              <h3>Efficiency</h3>
              <p>Optimized workflows & pipelines</p>
            </div>
          </div>
        </section>

        <section id="services">
          <h2>My Services</h2>
          <div className="service-cards">
            <article className="service">
              <h3>AI/ML Engineering</h3>
              <p>Model design, optimization, and deployment with a GenAI focus.</p>
            </article>
            <article className="service">
              <h3>GitHub Consulting</h3>
              <p>Codebase structuring, PR workflows, and automation for efficient team collaboration.</p>
            </article>
            <article className="service">
              <h3>Documentation</h3>
              <p>Clear, concise technical docs for faster onboarding and maintenance.</p>
            </article>
          </div>
        </section>

        <section id="skills">
          <h2>My Skills</h2>
          <div className="skills-grid">
            <div className="skill">
              <span>Python (AI/ML)</span>
              <div className="bar"><div style={{ width: '90%' }}></div></div>
            </div>
            <div className="skill">
              <span>GitHub / GitOps</span>
              <div className="bar"><div style={{ width: '95%' }}></div></div>
            </div>
            <div className="skill">
              <span>Generative AI</span>
              <div className="bar"><div style={{ width: '85%' }}></div></div>
            </div>
            <div className="skill">
              <span>Cloud (AWS/Azure/GCP)</span>
              <div className="bar"><div style={{ width: '80%' }}></div></div>
            </div>
          </div>
        </section>

        <section id="projects">
          <h2>Highlighted Projects</h2>
          <div className="project-card">
            <h3>Project Name</h3>
            <p>
              Short description (e.g., "Implemented LLM-driven summarization tool leveraging GitHub Actions for automated deployment").
            </p>
            <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:you@example.com">you@example.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/lawnce-goh/">lawnce-goh</a></p>
          <p>GitHub: <a href="https://github.com/yourusername">github.com/yourusername</a></p>
        </section>
      </main>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
