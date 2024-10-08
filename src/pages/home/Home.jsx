import React, { useEffect, useState } from "react";
import "./Home.css";
import Card from "../../components/cards/Card";
import { API_KEY } from "../../data";

const Home = ({ category, setdetails, search }) => {
  const [data, setdata] = useState([]);

  //Fetching popular movie details
  const fetchData = async () => {
    await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1
`)
      .then((Response) => Response.json())
      .then((dat) => setdata(dat.results));
  };
  //Fetching upcoming movie details
  const fetchupcoming = async () => {
    await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1
`)
      .then((Response) => Response.json())
      .then((dat) => setdata(dat.results));
  };
  //Fetching top-rated movie details
  const fetchTopRated = async () => {
    await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1
`)
      .then((Response) => Response.json())
      .then((dat) => setdata(dat.results));
  };
  //Fetching searched movie details
  const getSearchResult = async () => {
    await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=1
`)
      .then((Response) => Response.json())
      .then((dat) => setdata(dat.results));
  };

  useEffect(() => {
    if (category === "upcoming") {
      fetchupcoming();
    } else if (category === "top-rated") {
      fetchTopRated();
    } else if (category === "searched") {
      if (search) {
        getSearchResult();
      }
    } else {
      fetchData();
    }
  }, [category]);

  return (
    <div className="home">
      {data.map((a, index) => {
        return <Card setdetails={setdetails} key={index} a={a} />;
      })}
    </div>
  );
};

export default Home;
