import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { languageData } from "../Utils/Languages";
import { Search_Movie_API, TMDB_Options, openai } from "../Utils/Constants";
import { addSearchResults, updateSearchErrorMessage } from "../Store/GPTSlice";

const GPTSearch = () => {
  const dispatch = useDispatch();
  const search = useRef();
  const code = useSelector((store) => store.configs.langCode);

  const fetchTMDBforMovieName = async (movieName) => {
    const data = await fetch(
      Search_Movie_API.replace("MOVIENAME", movieName),
      TMDB_Options
    );
    const json = await data.json();
    const rawList = json?.results;
    const filteredList = rawList.filter(
      (movie) => movie.original_language === code
    );
    dispatch(addSearchResults(filteredList));
  };

  const fetchGPT = async (searchQuery) => {
    const query =
      "please be a movie recommendation system and suggest 5 " +
      searchQuery +
      " movies. The movies should be movies separated by comma as in the example ahead: movie1, movie2, movie3, movie4, movie5";
    try {
      const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: query }],
        model: "gpt-3.5-turbo",
      });
      console.log(completion.choices);
      //process results if key is not expired
    } catch (error) {
      //ask user for his api key to continue with GPT results
      dispatch(updateSearchErrorMessage(error.message));
      fetchTMDBforMovieName(searchQuery);
    }
  };

  const handleSearch = () => {
    fetchGPT(search.current.value);
  };
  return (
    <form
      className="absolute bg-black bg-opacity-80 text-white mx-auto left-0 right-0 mt-48 md:mt-40 w-screen md:w-1/2 rounded-lg grid grid-cols-12"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        ref={search}
        type="text"
        className="p-2 my-2 ml-3 mr-2 text-black col-span-9 rounded-lg"
        placeholder={languageData[code].placeholder}
      />
      <button
        onClick={handleSearch}
        className="bg-red-600 p-2 rounded-md font-bold text-sm md:text-lg col-span-3 mr-2 my-2"
      >
        {languageData[code].search}
      </button>
    </form>
  );
};

export default GPTSearch;
