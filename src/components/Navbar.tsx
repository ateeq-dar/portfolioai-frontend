import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <nav className="w-full px-8 py-6 flex justify-between items-center">

      <Link to="/" className="text-white font-semibold text-lg tracking-tight">
        Ateequr Rahmaan
      </Link>

      <div className="hidden md:flex gap-8 text-sm text-gray-400">

        <button
          onClick={() => scrollToSection("about")}
          className="hover:text-white transition"
        >
          About
        </button>

        <button
          onClick={() => scrollToSection("skills")}
          className="hover:text-white transition"
        >
          Skills
        </button>

        <button
          onClick={() => scrollToSection("projects")}
          className="hover:text-white transition"
        >
          Projects
        </button>

        {/* ✅ THIS IS ALL YOU NEED */}
        <button
          onClick={() => scrollToSection("contact")}
          className="hover:text-white transition"
        >
          Contact
        </button>

      </div>
    </nav>
  );
};

export default Navbar;