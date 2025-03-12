import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const links = [
  [
    {label: "Documentation", url: "https://dkan.readthedocs.io/en/latest/index.html", id: "documentation"},
    {label: "Download", url: "https://github.com/getdkan/dkan", id: "download"},
    {label: "CivicActions", url: "https://civicactions.com/", id: "civicactions"},
  ],
  [
    {label: "Project Open Data", url: "https://project-open-data.cio.gov/", id: "opendata"},
    {label: "DCAT", url: "https://www.w3.org/TR/vocab-dcat/", id: "dcat"},
    {label: "Drupal", url: "https://drupal.org/", id: "drupal"},
  ],
];

const Footer = () => {
  return (
    <footer className="text-white bg-sky-950 mt-auto px-4 py-10">
      <div className="container flex items-center">
        <div className="max-w-xl px-4 mr-8">
          <h2 className="text-2xl font-bold">Open Source Open Data</h2>
          <p className="mb-2">We can only realize the full power of open data when the tools used for its collection, publishing and analysis are also open and transparent.</p>
          <span>
            <span className="mr-2">Powered by DKAN{" "}</span>
              <Link to="https://github.com/getdkan">
                <FontAwesomeIcon className="text-xl" icon={faGithub} />
                <span className="sr-only">GetDKAN Github repo</span>
              </Link>
            </span>
        </div>
        <nav className="flex w-xs justify-between">
          {links.map((linkArray, index) => {
            return(
              <div className="flex flex-col" key={linkArray[0].id + index}>
                {linkArray.map((link) => (
                  <Link key={link.id} to={link.url}>
                    {link.label}
                  </Link>
                ))}
              </div>
            )
          })}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
