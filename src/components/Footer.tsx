import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const links1 = [
  {label: "Documentation", url: "https://dkan.readthedocs.io/en/latest/index.html", id: "documentation"},
  {label: "Download", url: "https://github.com/getdkan/dkan", id: "download"},
  {label: "CivicActions", url: "https://civicactions.com/", id: "civicactions"},
];

const links2 = [
  {label: "Project Open Data", url: "https://project-open-data.cio.gov/", id: "opendata"},
  {label: "DCAT", url: "https://www.w3.org/TR/vocab-dcat/", id: "dcat"},
  {label: "Drupal", url: "https://drupal.org/", id: "drupal"},
];

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="pt-16 pb-12 text-sm border-t border-slate-200 bg-sky-900">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 md:col-span-8 lg:col-span-6">
              <h2 className="text-2xl font-bold">Open Source Open Data</h2>
              <p className="py-2 max-w-md">We can only realize the full power of open data when the tools used for its collection, publishing and analysis are also open and transparent.</p>
            </div>
            <nav className="col-span-2 md:col-span-4 lg:col-span-2">
              <ul>
                {links1.map((link) => (
                  <li className="mb-2 leading-6" key={link.id}>
                    <Link to={link.url}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav className="col-span-2 md:col-span-4 lg:col-span-2">
              <ul>
                {links2.map((link) => (
                  <li className="mb-2 leading-6" key={link.id}>
                    <Link to={link.url}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="py-4 text-md bg-sky-950">
        <div className="container px-6 mx-auto">
          <div className="grid items-center grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-2 md:col-span-4 lg:col-span-6">
              <span className="mr-2">Powered by DKAN{" "}</span>
              <Link to="https://github.com/getdkan">
                <FontAwesomeIcon className="text-xl" icon={faGithub} />
                <span className="sr-only">GetDKAN Github repo</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
