import { useParams } from 'react-router-dom';
import { MetadataWrapper } from "@civicactions/data-catalog-components";
import Layout from '../components/Layout';
import DatasetHeader from '../components/DatasetHeader';
import MetadataTable from '../components/MetadataTable';
import Distributions from '../components/Distributions';
import KeywordTags from '../components/KeywordTags';

const Dataset = () => {
  const { id } = useParams();
  return(
    <Layout title="Dataset">
      <MetadataWrapper
        rootUrl={import.meta.env.VITE_REACT_APP_ROOT_URL}
        id={id}
      >
        <div className="grid grid-cols-4 gap-4">
          <div className="px-4">
            <div>
              Publisher info
            </div>
          </div>
          <div className="col-span-3 pr-4">
            <DatasetHeader />
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
    </Layout>
  );
}

export default Dataset;
