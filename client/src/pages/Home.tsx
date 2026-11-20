import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Cloud,
  Code2,
  GraduationCap,
  Github,
  HeartHandshake,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Facebook,
  ShieldCheck,
  Sparkles,
  Twitter,
  Workflow,
} from "lucide-react";
import PortfolioContactForm from "@/components/PortfolioContactForm";
import PortfolioHeader from "@/components/PortfolioHeader";
import heroImage from "../amonu.jpeg";

const experience = [
   {
    period: "Oct 2026 — Present",
    role: "Cybersecurity Intern",
    organization: "NetworkWalks",
    location: "Remote",
    type: "Part-time",
    highlights: [
      "Cybersecurity & Ethical Hacking internship with hands-on training and real-world projects.",
      "Gaining exposure to network security, vulnerability assessment, and penetration testing.",
      "Learning security operations, incident response, and digital forensics.",
      "Practising risk assessment and cybersecurity best practices.",
      "Completing assigned tasks on time and following organisational security policies.",
    ],
    current: true,
  },
  {
    period: "May 2026 — Present",
    role: "GIFEC District Coordinator",
    organization: "Ghana Investment Fund for Electronic Communications",
    location: "Asante Akyem North District · Agogo, Ashanti",
    type: "Part-time",
    highlights: [
      "Coordinate district operations and uphold consistent service standards at the district center.",
      "Lead community outreach and digital-literacy training for women and young people.",
      "Connect national digital initiatives with the needs of local communities.",
      "Run community outreach programs to increase digital awareness and adoption across the district.",
    ],
    current: true,
  },
  {
    period: "Oct 2024 — Dec 2025",
    role: "Legal Clerk",
    organization: "High Court, Adum — Kumasi",
    location: "Kumasi, Ghana",
    type: "Full-time",
    highlights: [
      "Designed a physical and digital records index that cut retrieval time by 35%.",
      "Protected thousands of sensitive legal records and triaged 100+ high-priority files each week.",
      "Coordinated case-file workflows across four branches, improving processing speed by 20%.",
      "Maintained secure repository practices that brought document displacement close to zero.",
    ],
    current: false,
  },
  {
    period: "Oct 2023 — Dec 2023",
    role: "IT Systems Support Intern",
    organization: "Kumasi South Hospital, Atonsu",
    location: "Kumasi, Ghana",
    type: "Internship",
    highlights: [
      "Monitored network hardware across six clinical departments, maintaining 99.9% availability.",
      "Deployed and secured 50+ workstations and peripheral assets.",
      "Resolved 85% of standard support requests at first contact and documented 30+ troubleshooting guides.",
      "Optimized patches across 40+ endpoints, reducing hardware-related support requests by 10%.",
    ],
    current: false,
  },
];

const capabilities = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Security operations",
    description:
      "Practical foundations in threat monitoring, network security, and careful handling of sensitive information.",
    tags: ["SecOps", "Threat monitoring", "Wireshark", "Nmap"],
  },
  {
    icon: Cloud,
    number: "02",
    title: "Cloud systems",
    description:
      "AWS services and infrastructure concepts for secure, dependable, well-documented systems.",
    tags: ["AWS", "IAM", "VPC", "EC2", "CloudWatch"],
  },
  {
    icon: Workflow,
    number: "03",
    title: "Reliable operations",
    description:
      "Structured troubleshooting, clear technical documentation, and process improvements that make everyday work smoother.",
    tags: ["Root-cause analysis", "Support", "Documentation"],
  },
  {
    icon: HeartHandshake,
    number: "04",
    title: "Digital inclusion",
    description:
      "Community engagement and digital-literacy training that help more people take part in the digital world.",
    tags: ["Digital literacy", "Community outreach", "Collaboration"],
  },
];

const awsServices = [
  "EC2",
  "S3",
  "IAM",
  "VPC",
  "Lambda",
  "API Gateway",
  "CloudFront",
  "ALB",
  "CloudWatch",
  "ACM",
];

const certifications = [
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "Oct 2026", mark: "AWS" },
  { name: "Google Cybersecurity Professional Certificate", issuer: "Coursera", date: "Oct 2026", mark: "GC" },
  { name: "AI Security Fundamentals", issuer: "Microsoft", date: "Sep 2026", mark: "MS" },
  { name: "Introduction to Generative AI", issuer: "Google", date: "Aug 2026", mark: "AI" },
  { name: "Certified in Cybersecurity (CC)", issuer: "ISC2", date: "Mar 2026", mark: "CC" },
  { name: "Networking Basics", issuer: "Cisco Networking Academy", date: "Feb 2026", mark: "NW" },
  { name: "AI Career Essentials", issuer: "ALX Africa", date: "Apr 2024", mark: "ALX" },
];

const education = [
  {
    qualification: "BSc, Information Technology Education",
    school: "Akenten Appiah-Menka University of Skills Training and Entrepreneurial Development",
    shortName: "AAMUSTED · now USTED, Kumasi",
    date: "Jan 2021 — Oct 2024",
  },
  {
    qualification: "Secondary School Certificate Education · General Arts",
    school: "Kumasi Wesley Girls’ Senior High School",
    shortName: "Tafo, Kumasi",
    date: "Sep 2017 — Sep 2020",
  },
];

const impact = [
  { value: "35%", label: "faster legal-record retrieval" },
  { value: "99.9%", label: "system availability across six clinical departments" },
  { value: "50+", label: "production assets deployed and configured" },
];

function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  id,
}: {
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
  id: string;
}) {
  return (
    <div className="section-heading">
      <p className="section-heading__eyebrow">
        <span>{index}</span>
        {eyebrow}
      </p>
      <div className="section-heading__row">
        <h2 id={id}>{title}</h2>
        {intro && <p className="section-heading__intro">{intro}</p>}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="site-shell" id="top">
      <PortfolioHeader />
      <main id="main-content">
        <section className="hero page-wrap" id="home" aria-labelledby="hero-title">
          <div className="hero__copy">
            <p className="eyebrow"><span className="eyebrow__dot" /> IT · CYBERSECURITY · DIGITAL ACCESS</p>
            <h1 id="hero-title">Secure systems.<br /><em>Shared possibility.</em></h1>
            <p className="hero__lede">
              I’m <strong>Erica Gyamfuaa Fordjour</strong>, an IT professional building a career around
              trustworthy technology and meaningful digital access.
            </p>
            <div className="hero__actions">
              <a className="button button--lime" href="#contact">
                Let’s connect <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a
                className="button button--outline-light"
                href="https://www.linkedin.com/in/erica-gyamfuaa-fordjour/"
                target="_blank"
                rel="noreferrer noopener"
              >
                LinkedIn <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a
                className="button button--outline-light"
                href="https://github.com/myzz-rica"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="hero__identity">
              <span className="hero__monogram" aria-hidden="true">EF</span>
              <div>
                <span className="hero__identity-name">Erica Gyamfuaa Fordjour</span>
                <span className="hero__identity-location"><MapPin size={13} aria-hidden="true" /> Kumasi, Ghana</span>
              </div>
            </div>
          </div>

          <div className="hero__art" aria-label="Abstract digital network artwork">
            <img
              src={heroImage}
              alt="Abstract network lines and nodes representing secure, community-centered digital infrastructure"
              fetchPriority="high"
            />
            <div className="hero__art-shade" />
            <div className="hero__art-topline"><span>CONNECTED BY DESIGN</span><span>01 — 06</span></div>
            <div className="hero__art-caption">
              <span className="hero__art-icon"><Sparkles size={16} aria-hidden="true" /></span>
              <span><strong>Technology with people in mind</strong><small>Security · cloud · digital literacy</small></span>
            </div>
            <span className="hero__art-orbit hero__art-orbit--one" aria-hidden="true" />
            <span className="hero__art-orbit hero__art-orbit--two" aria-hidden="true" />
          </div>
          <a className="hero__scroll" href="#about" aria-label="Scroll to the about section">
            <span>SCROLL TO EXPLORE</span><ArrowDownRight size={16} aria-hidden="true" />
          </a>
        </section>

        <div className="signal-strip" aria-label="Professional focus">
          <div className="signal-strip__inner page-wrap">
            <p><span className="signal-strip__index">01</span><span>Thoughtful security</span></p>
            <p><span className="signal-strip__index">02</span><span>Reliable cloud systems</span></p>
            <p><span className="signal-strip__index">03</span><span>Digital opportunity for all</span></p>
          </div>
        </div>

        <section className="about-section section-pad page-wrap" id="about" aria-labelledby="about-title">
          <SectionHeading
            index="01"
            eyebrow="A little about me"
            title="Technology should move people forward."
            intro="Curious by nature. Practical by training. Focused on making digital tools safer and more useful in everyday life."
            id="about-title"
          />
          <div className="about-grid">
            <div className="about-copy">
              <p className="about-copy__lead">
                I’m an IT professional shaped by both systems support and community work.
              </p>
              <p>
                My experience spans hospital infrastructure, sensitive court records, and district-wide digital-literacy programs. I enjoy solving problems carefully, learning new tools, and helping people feel more confident using technology.
              </p>
              <p>
                With a BSc in Information Technology Education and practical foundations in programming, I’m especially interested in cybersecurity, cloud computing, and the role AI can play in inclusive digital development across Africa.
              </p>
              <a className="text-link" href="#experience">Explore my experience <ArrowRight size={16} aria-hidden="true" /></a>
            </div>
            <aside className="about-card" aria-label="Professional approach">
              <div className="about-card__symbol"><Code2 size={22} strokeWidth={1.7} aria-hidden="true" /></div>
              <p className="about-card__label">MY NORTH STAR</p>
              <blockquote>“Make technology secure enough to trust—and accessible enough to matter.”</blockquote>
              <div className="about-card__rule" />
              <p className="about-card__foot">People-first thinking, grounded in real systems.</p>
              <span className="about-card__number" aria-hidden="true">EF.</span>
            </aside>
          </div>

          <div className="impact-row" aria-label="Selected career achievements">
            {impact.map((item) => (
              <div className="impact-item" key={item.value + item.label}>
                <span className="impact-item__value">{item.value}</span>
                <span className="impact-item__label">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="experience-section section-pad" id="experience" aria-labelledby="experience-title">
          <div className="page-wrap">
            <SectionHeading
              index="02"
              eyebrow="Experience"
              title="Work that keeps systems—and people—moving."
              intro="A path through community technology, legal operations, and hands-on IT support."
              id="experience-title"
            />
            <div className="timeline">
              {experience.map((job, index) => (
                <article className="timeline-item" key={job.role}>
                  <div className="timeline-item__rail" aria-hidden="true">
                    <span className={job.current ? "timeline-item__dot timeline-item__dot--current" : "timeline-item__dot"} />
                    {index < experience.length - 1 && <span className="timeline-item__line" />}
                  </div>
                  <div className="timeline-item__content">
                    <div className="timeline-item__meta">
                      <span>{job.period}</span>
                      {job.current && <span className="status-pill"><span /> Current</span>}
                    </div>
                    <div className="timeline-item__heading">
                      <div>
                        <h3>{job.role}</h3>
                        <p className="timeline-item__organization">{job.organization}</p>
                        <p className="timeline-item__location">{job.location}{job.type && ` · ${job.type}`}</p>
                      </div>
                      <span className="timeline-item__index">0{index + 1}</span>
                    </div>
                    <ul className="timeline-item__list">
                      {job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="expertise-section section-pad page-wrap" id="expertise" aria-labelledby="expertise-title">
          <SectionHeading
            index="03"
            eyebrow="Areas of focus"
            title="A practical toolkit, with room to grow."
            intro="Building capability across security, cloud, support, and the human side of digital change."
            id="expertise-title"
          />
          <div className="expertise-grid">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <article className="expertise-card" key={capability.number}>
                  <div className="expertise-card__top">
                    <span className="expertise-card__icon"><Icon size={20} strokeWidth={1.8} aria-hidden="true" /></span>
                    <span className="expertise-card__number">{capability.number}</span>
                  </div>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                  <div className="tag-list" aria-label={`${capability.title} skills`}>
                    {capability.tags.map((tag) => <span className="skill-tag" key={tag}>{tag}</span>)}
                  </div>
                </article>
              );
            })}
          </div>
          <div className="cloud-band">
            <div className="cloud-band__heading">
              <Cloud size={19} aria-hidden="true" />
              <div><span>AWS SERVICES</span><strong>Cloud foundations</strong></div>
            </div>
            <div className="cloud-band__tags">
              {awsServices.map((service) => <span key={service}>{service}</span>)}
            </div>
          </div>
        </section>

        <section className="credentials-section section-pad" id="credentials" aria-labelledby="credentials-title">
          <div className="page-wrap">
            <SectionHeading
              index="04"
              eyebrow="Learning in motion"
              title="Grounded in learning."
              intro="Formal study and focused certifications keep my technical foundations moving forward."
              id="credentials-title"
            />
            <div className="credentials-grid">
              <div className="education-column">
                <div className="subsection-title"><GraduationCap size={19} aria-hidden="true" /><h3>Education</h3></div>
                {education.map((item) => (
                  <article className="education-item" key={item.qualification}>
                    <span className="education-item__date">{item.date}</span>
                    <h4>{item.qualification}</h4>
                    <p>{item.school}</p>
                    <span className="education-item__school">{item.shortName}</span>
                  </article>
                ))}
                <div className="learning-note">
                  <Sparkles size={16} aria-hidden="true" />
                  <p>Continuous learning across cybersecurity, AI, networking, and cloud foundations.</p>
                </div>
              </div>
              <div className="cert-column">
                <div className="subsection-title"><ShieldCheck size={18} aria-hidden="true" /><h3>Certifications</h3></div>
                <div className="cert-list">
                  {certifications.map((item) => (
                    <article className="cert-item" key={item.name}>
                      <span className="cert-item__mark" aria-hidden="true">{item.mark}</span>
                      <div className="cert-item__body">
                        <h4>{item.name}</h4>
                        <p>{item.issuer}</p>
                      </div>
                      <span className="cert-item__date">{item.date}</span>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="impact-banner page-wrap" aria-labelledby="impact-title">
          <div className="impact-banner__icon"><HeartHandshake size={22} aria-hidden="true" /></div>
          <div>
            <p className="eyebrow">BEYOND THE SCREEN</p>
            <h2 id="impact-title">Digital confidence is part of digital progress.</h2>
            <p>At GIFEC, I help women and young people build practical digital skills—because access matters most when people can use it with confidence.</p>
          </div>
          <a className="impact-banner__link" href="#contact" aria-label="Contact Erica about digital inclusion">
            <ArrowUpRight size={21} aria-hidden="true" />
          </a>
        </section>

        <section className="projects-section section-pad page-wrap" id="projects" aria-labelledby="projects-title">
          <SectionHeading
            index="05"
            eyebrow="Selected projects"
            title="Ways I put technology to work."
            intro="Sample project summaries."
            id="projects-title"
          />
          <div className="projects-grid">
            <article className="project-card">
              <div className="project-card__topline"><span>PROJECT 01</span><span>INCIDENT INVESTIGATION</span></div>
              <div className="project-card__icon"><ShieldCheck size={23} aria-hidden="true" /></div>
              <h3>Investigating a Phishing-Led Ransomware Attack</h3>
              <p className="project-card__summary">A capstone investigation into a fictional ransomware attack on Rexmi State University, where a phishing email led to the overnight encryption of its learning management system.</p>
              <div className="project-card__details">
                <div><strong>Key finding</strong><p>Weak email controls, an unpatched domain controller, late SIEM detection, and unisolated backups let the attack escalate.</p></div>
                <div><strong>Investigation</strong><p>Reconstructed the attack timeline from authentication, firewall, system, and web server logs.</p></div>
                <div><strong>Frameworks</strong><p>MITRE ATT&amp;CK · NIST Incident Response · CIA Triad · CVSS v3.1</p></div>
              </div>
              <a className="project-card__link" href="https://github.com/myzz-rica/cybersecurity-incident-investigation-of-a-phishing-led-ransomware-attack" target="_blank" rel="noreferrer noopener">
                View project on GitHub <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </article>
            <article className="project-card project-card--accent">
              <div className="project-card__topline"><span>PROJECT 02</span><span>AWS Cloud Event Registration System</span></div>
              <div className="project-card__icon"><Cloud size={23} aria-hidden="true" /></div>
              <h3>Event Registration, Listing &amp; Ticketing System</h3>
              <p className="project-card__summary">A serverless AWS REST API that replaces manual event sign-ups with automated registration, seat tracking, and confirmation hosted using AWS resources.</p>
              <div className="project-card__details">
                <div><strong>Architecture</strong><p>API Gateway · Python AWS Lambda · DynamoDB · S3</p></div>
                <div><strong>Capabilities</strong><p>Event listing, registration, attendee lookup, and cancellation through four REST endpoints.</p></div>
                <div><strong>Security &amp; delivery</strong><p>Least-privilege IAM, CloudWatch monitoring, and GitHub Actions deployment using OIDC.</p></div>
              </div>
              <div className="project-card__links">
                  <a className="project-card__link" href="https://github.com/myzz-rica/event-registration-ticketing-system" target="_blank" rel="noreferrer noopener">
                  View source on GitHub <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact" aria-labelledby="contact-title">
          <div className="page-wrap">
            <SectionHeading
              index="06"
            eyebrow="Contact"
            title="Let’s make technology work for more people."
            intro="Have an opportunity, a question, or an idea around secure and inclusive technology? I’d be glad to hear from you."
            id="contact-title"
          />
            <div className="contact-grid">
              <div className="contact-details">
                <a className="contact-detail" href="mailto:ericagyamfuaafordjour@gmail.com">
                  <span className="contact-detail__icon"><Mail size={17} aria-hidden="true" /></span>
                  <span><small>EMAIL</small><strong>ericagyamfuaafordjour@gmail.com</strong></span>
                </a>
                <a className="contact-detail" href="tel:+233544916738">
                  <span className="contact-detail__icon"><Phone size={17} aria-hidden="true" /></span>
                  <span><small>PHONE</small><strong>+233 54 491 6738</strong></span>
                </a>
                <a className="contact-detail" href="https://www.linkedin.com/in/erica-gyamfuaa-fordjour/" target="_blank" rel="noreferrer noopener">
                  <span className="contact-detail__icon"><Linkedin size={17} aria-hidden="true" /></span>
                  <span><small>LINKEDIN</small><strong>Connect with Erica</strong></span>
                </a>
                <a className="contact-detail" href="https://github.com/myzz-rica" target="_blank" rel="noreferrer noopener">
                  <span className="contact-detail__icon"><Github size={17} aria-hidden="true" /></span>
                  <span><small>GITHUB</small><strong>Follow Erica on GitHub</strong></span>
                </a>
                <a className="contact-detail" href="https://x.com/myzz_rica" target="_blank" rel="noreferrer noopener">
                  <span className="contact-detail__icon"><Twitter size={17} aria-hidden="true" /></span>
                  <span><small>TWITTER</small><strong>Follow Erica on Twitter</strong></span>
                </a>
                <a className="contact-detail" href="https://www.instagram.com/myzz_rica/" target="_blank" rel="noreferrer noopener">
                  <span className="contact-detail__icon"><Instagram size={17} aria-hidden="true" /></span>
                  <span><small>INSTAGRAM</small><strong>Follow Erica on Instagram</strong></span>
                </a>
                <a className="contact-detail" href="https://www.facebook.com/myzzrica" target="_blank" rel="noreferrer noopener">
                  <span className="contact-detail__icon"><Facebook size={17} aria-hidden="true" /></span>
                  <span><small>FACEBOOK</small><strong>Follow Erica on Facebook</strong></span>
                </a>
                <div className="contact-availability"><span className="contact-availability__dot" /> A good conversation can start anywhere.</div>
              </div>
              <PortfolioContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-wrap site-footer__inner">
          <a href="#home" className="footer-brand"><span className="brand-mark" aria-hidden="true">EF</span><span>Erica Gyamfuaa Fordjour</span></a>
          <p>Secure systems. Shared possibility.</p>
          <a className="back-top" href="#top">Back to top <ArrowUpRight size={14} aria-hidden="true" /></a>
        </div>
        <div className="page-wrap site-footer__fineprint"><span>© {new Date().getFullYear()} Erica Gyamfuaa Fordjour</span></div>
      </footer>
    </div>
  );
}
