import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { textInputClasses, buttonClasses } from "../theme/tailwindClasses";

const Hero = () => {
  const navigate = useNavigate();
  const [fulltext, setFulltext] = useState('');
  function heroSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    navigate(`/search?fulltext=${fulltext}`);
  }
  const identifier = "homepage-hero-search"

  return(
    <div className="bg-linear-to-b from-sky-950 to-sky-800 text-white py-10 mb-5">
      <div className="container px-6 m-auto pt-6">
        <div className="flex flex-col items-center max-w-3xl m-auto">
          <h2 className="text-2xl">Welcome to DKAN</h2>
          <p>DKAN is an open-source data management platform. It treats data as content so that you can easily publish, manage, and maintain your open data no matter the size of your team or the level of technical expertise.</p>
          <form className="relative md:my-6 flex items-center w-full" onSubmit={(event) => heroSubmit(event)}>
            <input 
              id={identifier}
              className={`${textInputClasses.input} bg-white`}
              type='search'
              onChange={(e) => setFulltext(e.target.value)}
              value={fulltext}
            />
            <button className={`${buttonClasses}`} type='submit'>Search</button>
            <label htmlFor={identifier} className={"sr-only"}>
              Search
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Hero;