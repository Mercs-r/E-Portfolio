
export default function Navbar() {
  return (
    <nav initial={{ y: -100, opacity: 0,}}
  animate={{ y: 0, opacity: 1,}}
  transition={{ duration: 0.8,}}
 className="fixed top-0 left-0 w-full bg-white/5 backdrop-blur-xl border-b border-white/10 z-50">

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <h1 className="text-3xl font-bold text-blue-400">
          Rutik Kadam
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">

          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-blue-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-blue-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>

        </div>

      </div>

    </nav>
  );
}