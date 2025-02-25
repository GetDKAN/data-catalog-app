import { NavLink } from "react-router-dom";

const Header = () => {
  return(
    <header>
      <img src={"https://dkan-default-content-files.s3.amazonaws.com/files/logo.svg"} alt="DKAN Logo" />
      <span>DKAN</span>
      <div className="bg-sky-800">
        <nav className="flex text-white">
          <NavLink className="py-3 px-4" to="/" end>Home</NavLink>
          <NavLink className="py-3 px-4" to="/search" end>Search</NavLink>
          <NavLink className="py-3 px-4" to="/publishers" end>Publishers</NavLink>
          <NavLink className="py-3 px-4" to="/about" end>About</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
