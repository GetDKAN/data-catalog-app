import { Link } from "react-router-dom";
import { buttonClasses, cardClasses } from "../theme/tailwindClasses";

const PublisherCard = ({publisher}) => {
  return(
    <div className={`max-w-xs flex flex-col justify-between ${cardClasses}`}>
      <img
        src={publisher.imageUrl}
        alt="Publisher icon"
        className="w-200"
      />
      <div className="p-6">
        <header className="mb-4">
          <h2 className="text-xl font-medium text-slate-700">
            {publisher.name}
          </h2>
        </header>
        <p className="mb-4">{publisher.description}</p>
      </div>
      <div className="pb-6 px-6">
        <Link className={buttonClasses} to={publisher.searchUrl}>View Datasets</Link>
      </div>
    </div>
  )
}

export default PublisherCard;