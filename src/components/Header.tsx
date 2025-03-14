import { useContext } from "react";
import { NavLink } from "react-router-dom";


const links = [
  {label: "Home", url: "/", id: "home"},
  {label: "Search", url: "/search", id: "search"},
  {label: "Publishers", url: "/publishers", id: "publishers"},
  {label: "About", url: "/about", id: "about"},
  {label: "API", url: "/api", id: "api"}
];

const Header = () => {
  
  return(
    <header className="bg-white">
      <div className="flex items-end py-3 px-4">
        <img src={"https://dkan-default-content-files.s3.amazonaws.com/files/logo.svg"} alt="DKAN Logo" />
        <div className="flex flex-col ml-3">
          <span className="text-lg">Open Data Catalog</span>
          <span>Your slogan here.</span>
        </div>
      </div>
      <div className="bg-sky-900 flex">
        <nav className="flex text-white px-4">
          {links.map((link) => (
            <NavLink
              key={link.id}
              className={({isActive, isPending, isTransitioning}) => [
                "py-3 px-4 border-b-3",
                isPending ? "pending" : "",
                isActive ? "border-yellow-500" : "border-transparent",
                isTransitioning ? "transitioning" : "",
              ].join(" ")}
              to={link.url}
              end
            >
            {link.label}
          </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
