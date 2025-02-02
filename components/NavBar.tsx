import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import ScrollNavbar from "./ScrollNavbar";

const NavBar = () => {
  return (
    <ScrollNavbar>
      <nav className="bg-gray-50 text-gray-900 shadow-md dark:bg-gray-900 dark:text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-4">
          {/* Logo */}
          <div className="text-2xl font-semibold tracking-wide">
            <a
              href="/"
              className="transition duration-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Mor Levi
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center space-x-8 text-lg md:flex">
            {["About", "Experience", "Projects", "Skills", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="transition duration-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {item}
                </a>
              ),
            )}

            <ThemeToggle />
          </div>

          <MobileMenu />
        </div>
      </nav>
    </ScrollNavbar>
  );
};

export default NavBar;
