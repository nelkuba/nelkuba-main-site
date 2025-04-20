import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = ["Home", "Services", "About", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150; // Add buffer so active state triggers slightly early

      const sections = links.map((link) => {
        const section = document.getElementById(link.toLowerCase());
        return section && {
          id: link.toLowerCase(),
          offsetTop: section.offsetTop,
          offsetHeight: section.offsetHeight,
        };
      }).filter(Boolean);

      for (let section of sections) {
        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="flex items-center justify-between p-4 w-full">
        <div className="text-2xl font-bold text-blue-600 transition-transform transform hover:scale-110 animate-gradient-rotation">
          Nelkuba
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          {links.map((link) => {
            const sectionId = link.toLowerCase();
            const isActive = activeSection === sectionId;
            return (
              <li key={link}>
                <a
                  href={`#${sectionId}`}
                  className={`relative after:block after:h-[2px] after:bg-blue-600 after:transition-transform after:duration-300 after:origin-left hover:text-blue-600 transition-colors duration-200
                    ${isActive ? "text-blue-600 after:scale-x-100" : "after:scale-x-0"}`}
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md hover:bg-gray-100 transition"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden flex flex-col gap-4 bg-white px-6 py-4 shadow-md transition-all duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        {links.map((link) => {
          const sectionId = link.toLowerCase();
          const isActive = activeSection === sectionId;
          return (
            <li key={link}>
              <a
                href={`#${sectionId}`}
                className={`block text-gray-700 font-medium hover:text-blue-600 transition-colors ${
                  isActive ? "text-blue-600" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
