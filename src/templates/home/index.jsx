import React, {useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import { SearchAPIWrapper, SearchAPIContext } from "@civicactions/data-catalog-components";
import Layout from '../../components/Layout';

const Home = () => {
  return (
    <Layout title="Home">
        <SearchAPIWrapper rootUrl={import.meta.env.VITE_REACT_APP_ROOT_URL}>
          <Hero />
        </SearchAPIWrapper>
    </Layout>
  );
}

export default Home;

const Hero = () => {
  const navigate = useNavigate();
  const searchData = useContext(SearchAPIContext);
  const [fulltext, setFulltext] = useState('');
  function heroSubmit(event) {
    event.preventDefault();
    navigate(`/search?fulltext=${fulltext}`);
  }

  return(
    <div>
      <h2>Welcome to DKAN</h2>
      <form onSubmit={(event) => heroSubmit(event)}>
        <input type='text' onChange={(e) => setFulltext(e.target.value)} value={fulltext} />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
}
