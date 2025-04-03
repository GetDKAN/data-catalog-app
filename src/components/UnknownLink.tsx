import { Link } from 'react-router-dom';
import isURL from 'validator/es/lib/isURL';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

const UnknownLink = ({ url, text }: {url: string; text: string}) => {
  console.log(url, text)
  if(!isURL(url)) {
    return <>{url}</>
  }
  if(isURL(url, {require_protocol: true})) {
    return(
      <a href={url} target="_blank" rel="noopener">
        {text}
        <FontAwesomeIcon className="ml-2" icon={faExternalLink} />
      </a>
    )
  } else {
    return(
      <Link to={url} className="">{text}</Link>
    );
  }
}

export default UnknownLink;
