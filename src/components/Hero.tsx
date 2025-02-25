import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [fulltext, setFulltext] = useState('');
  function heroSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    navigate(`/search?fulltext=${fulltext}`);
  }

  return(
    <div>
      <h2 className="text-2xl">Welcome to DKAN</h2>
      <p>DKAN is an open-source data management platform. It treats data as content so that you can easily publish, manage, and maintain your open data no matter the size of your team or the level of technical expertise.</p>
      <form onSubmit={(event) => heroSubmit(event)}>
        <input className="" type='text' onChange={(e) => setFulltext(e.target.value)} value={fulltext} />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
}

export default Hero;