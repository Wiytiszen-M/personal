const Hero: React.FC = () => (
  <section className="flex flex-col items-center justify-center min-h-screen bg-background text-center px-4">
    <p className="text-secondary mb-2">
      👋 Hi! I’m Martín, a FullStack Developer (Front-Focused)
    </p>
    <h1 className="text-5xl md:text-7xl font-bold mb-4">
      I build <span className="text-primary">Digital Products</span>
    </h1>
    <p className="text-lg text-text max-w-xl mb-6">
      Turning ideas into solutions that inspire, solve problems, and create
      impact.
    </p>
    <div className="flex gap-4">
      <a
        href="/cv.pdf"
        download
        className="bg-primary text-button-text font-semibold px-6 py-3 rounded hover:bg-hover transition"
      >
        Download CV
      </a>
      <a
        href="https://www.linkedin.com/in/wiytiszen"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-primary text-primary font-semibold px-6 py-3 rounded hover:bg-primary hover:text-button-text transition"
      >
        Contact Me
      </a>
    </div>
  </section>
);

export default Hero;
