// Navigation
export default function Content() {
  return (
    <div className="">
      <nav className="flex flex-row justify-evenly bg-black text-cyan-400 rounded-lg">
        <a
          href="#home"
          className="text-pretty hover:bg-black rounded-lg transition-all duration-300 px-4 py-2 hover:scale-127 hover:shadow-lg"
        >
          Home
        </a>
        <a
          href="#projects"
          className="text-pretty hover:bg-black rounded-lg transition-all duration-300 px-4 py-2 hover:scale-127 hover:shadow-lg"
        >
          Projects
        </a>
        <a
          href="#skills"
          className="text-pretty hover:bg-black rounded-lg transition-all duration-300 px-4 py-2 hover:scale-127 hover:shadow-lg"
        >
          Skills
        </a>
        <a
          href="#contact"
          className="text-pretty hover:bg-black rounded-lg transition-all duration-300 px-4 py-2 hover:scale-127 hover:shadow-lg"
        >
          Contact
        </a>
      </nav>
    </div>
  );
}
