import { Link } from 'react-router-dom';
import FormatIcon from './FileFormatIcon';

const DistributionDownload = ({distribution}) => {
  const { data } = distribution;
  let linkText = "";
  let splitMediaType = data.mediaType.split("/")[1];
  if(data?.title) {
    linkText = `${data.title} (${splitMediaType.toUpperCase()})`
  } else {
    linkText = data.downloadURL.split("/").at(-1)
  }

  return(
    <div className="mb-4">
      <Link
        className="inline-block"
        to={`${data?.downloadURL}`}
      >
        <span className="flex">
          <FormatIcon
            format={splitMediaType.toLowerCase()}
            height={24}
            width={24}
          />
          <span>{linkText}</span>
        </span>
      </Link>
    </div>
  )
}

export default DistributionDownload;
