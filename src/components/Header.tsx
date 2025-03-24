import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useWindowDimensions, useMediaQuery } from '../common/useWindowDimensions';


const links = [
  {label: "Home", url: "/", id: "home"},
  {label: "Search", url: "/search", id: "search"},
  {label: "Publishers", url: "/publishers", id: "publishers"},
  {label: "About", url: "/about", id: "about"},
  {label: "API", url: "/api", id: "api"}
];

// absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain 
// bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 
// lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible 
// lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100

const menuLgClasses = "lg:visible lg:flex lg:h-full lg:w-auto lg:items-stretch "

function showMobileHeader(currentBreakpoint) {
  const mobileSizes = [null, "sm", "md"];
  return mobileSizes.includes(currentBreakpoint)
}

const Header = () => {
  const currentBP = useMediaQuery();
  const [isMenuOpen, setIsMenuOpen] = useState(showMobileHeader(currentBP) ? false : true);
  
  useEffect(() => {
    if(showMobileHeader(currentBP)) {
      setIsMenuOpen(false)
    } else {
      setIsMenuOpen(true)
    }
  }, [currentBP])

  return(
    <header className="bg-white">
      <div className="container px-6 m-auto flex items-end py-3 px-4">
        <img src={"https://dkan-default-content-files.s3.amazonaws.com/files/logo.svg"} alt="DKAN Logo" />
        <div className="flex flex-col ml-3">
          <span className="text-lg">Open Data Catalog</span>
          <span>Your slogan here.</span>
        </div>
      </div>
      <div className="bg-sky-900 flex">
        <nav className="container px-6 m-auto text-white px-4">
          <button
            className={`block h-10 w-10 self-center lg:hidden ${
              showMobileHeader(currentBP)
              ? "visible opacity-100"
              : ""
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-label="Toggle main menu"
          >
            Menu
          </button>
          <ul
            role="menubar"
            aria-label="Select page"
            className={`w-full ${menuLgClasses} ${
              isMenuOpen
              ? "visible opacity-100 backdrop-blur-sm"
              : "hidden opacity-0 hidden"
            }`}
          >
            {links.map((link) => (
              <li key={link.id}>
                <NavLink
                  className={({isActive, isPending, isTransitioning}) => [
                    "inline-block py-3 px-4 border-b-3",
                    isPending ? "pending" : "",
                    isActive ? "border-yellow-500" : "border-transparent",
                    isTransitioning ? "transitioning" : "",
                  ].join(" ")}
                  to={link.url}
                  end
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
