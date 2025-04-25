import { useParams } from 'react-router-dom';
import { useDataset } from "@civicactions/data-catalog-components";
import Layout from '../components/Layout';
import DatasetHeader from '../components/DatasetHeader';
import MetadataTable from '../components/MetadataTable';
import Distributions from '../components/Distributions';
import KeywordTags from '../components/KeywordTags';
import DatasetPublisherInfo from '../components/DatasetPublisherInfo';
import DatasetDescription from '../components/DatasetDescription';

const Dataset = () => {
  let { id } = useParams();
  if(!id) {
    id = "";
  }
  const rootURL = import.meta.env.VITE_REACT_APP_ROOT_URL;
  const { data, status } = useDataset(rootURL, `dataset_${id}`, id, true)
  if(status === "pending") {
    return <p>loading...</p>
  } else {
    return(
      <Layout title="Dataset">
        <div className="container px-6 m-auto pt-6">
          <div className="grid grid-cols-4 gap-4">
            {data && (
              <>
                <div className="px-4">
                  <DatasetPublisherInfo data={data?.publisher?.data} />
                </div>
                <div className="col-span-3 pr-4">
                  <DatasetHeader title={data.title} />
                  <DatasetDescription description={data.description} />
                  <Distributions distributions={data.distribution} metadata={data} /> 
                  {/*  <KeywordTags />*/}
                  {/* <MetadataTable /> */}
                </div>
              </>
            )}
          </div>

          
        </div>
      </Layout>
    );
  }
  
}

export default Dataset;
