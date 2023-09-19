import { useEffect, useState } from "react";
import ModalTrailer from "./ModalTrailer";
import { Movie_Details_API, TMDB_Options } from "../../Utils/Constants";
import { getGenreNames, minsToHrMin } from "../../Utils/Helper";

const Modal = ({ isOpen, closeModal, movie }) => {
  const [movieOverview, setMovieOverview] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);

  const fetchMovieDetails = async () => {
    console.log("fetchMovieDetails", movie);
    const data = await fetch(
      Movie_Details_API.replace("MOVIEID", movie.id),
      TMDB_Options
    );
    const json = await data.json();
    setMovieDetails(json);
  };

  useEffect(() => {
    fetchMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay h-screen w-full md:w-9/12 bg-black bg-opacity-70 p-8 rounded-xl mt-4">
        <div className="modal-container bg-black text-white p-2 md:max-w-md mx-auto rounded shadow-lg shadow-slate-400 z-50 overflow-y-auto">
          <span
            className="font-bold text-lg top-2 ml-96 px-5 cursor-pointer"
            onClick={closeModal}
          >
            X
          </span>
          <ModalTrailer id={movie.id} />
          {movieDetails && (
            <div className="modal-content text-left px-3 mb-1 mt-1">
              <div className="flex space-x-8">
                <p>
                  {movieDetails.release_date &&
                    movieDetails.release_date.split("-")[0]}
                </p>
                <p>{minsToHrMin(movieDetails.runtime)}</p>
              </div>
              <p className="text-2xl font-bold">{movieDetails.title}</p>
              <p className="truncate">{getGenreNames(movieDetails.genres)}</p>
              {/* <hr className="bg-slate-400" /> */}
              <p
                onClick={() => setMovieOverview(!movieOverview)}
                className={movieOverview ? "py-1" : "py-1 truncate"}
              >
                {movieDetails.overview}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
