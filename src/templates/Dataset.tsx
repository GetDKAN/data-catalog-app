import { useParams } from 'react-router-dom';
import { MetadataWrapper } from "@civicactions/data-catalog-components";
import Layout from '../components/Layout';
import DatasetHeader from '../components/DatasetHeader';
import MetadataTable from '../components/MetadataTable';
import Distributions from '../components/Distributions';
import KeywordTags from '../components/KeywordTags';
import DatasetPublisherInfo from '../components/DatasetPublisherInfo';
import DatasetDescription from '../components/DatasetDescription';

const Dataset = () => {
  const { id } = useParams();
  return(
    <Layout title="Dataset">
      <div className="container px-6 m-auto pt-6">
        <MetadataWrapper
          rootUrl={import.meta.env.VITE_REACT_APP_ROOT_URL}
          id={id}
        >
          
          <div className="grid grid-cols-4 gap-4">
            <div className="px-4">
              <DatasetPublisherInfo />
            </div>
            <div className="col-span-3 pr-4">
              <DatasetHeader />
              <DatasetDescription />
              <Distributions />
              <KeywordTags />
              <MetadataTable />
            </div>
          </div>
          <div>
            
            {/* 
            <DownloadLinks />
            
            <Tags />
            */}
          </div>
        </MetadataWrapper>
      </div>
    </Layout>
  );
}

export default Dataset;
