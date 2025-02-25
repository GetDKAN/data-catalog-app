import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white bg-black mt-auto">
      <div>
        <h2>Open Source Open Data</h2>
        <p>We can only realize the full power of open data when the tools used for its collection, publishing and analysis are also open and transparent.</p>
        <span>Powered by DKAN <Link to="https://github.com/getdkan">GetDKAN Github repo</Link></span>
      </div>
    </footer>
  );
}

export default Footer;
