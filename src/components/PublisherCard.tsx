import { Link } from "react-router-dom";

const PublisherCard = ({publisher}) => {
  return(
    <div>
      <h3>{publisher.name}</h3>
      <p>{publisher.description}</p>
      <Link to={publisher.searchUrl}>View Datasets</Link>
    </div>
  )
}

export default PublisherCard;