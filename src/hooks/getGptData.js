import { GoogleGenerativeAI } from "@google/generative-ai";
import { setMovies } from "../utils/gptSlice";
import { API_OPTIONS, GEMINI_API_KEY } from "../utils/constants";

const getGptData = async (query, dispatch) => {
  const searchMovieTmdb=async(movie)=>{
    const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&page=1",API_OPTIONS);
    const json=await data.json();
    return json.results;
  }
  const gemini = new GoogleGenerativeAI(GEMINI_API_KEY);
  const model = gemini.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt =
    "Act as movie recommendation system and suggest some movies for the query : " +
    query +
    " . Only give names of 5 movies , comma separated like the example result given ahead. Example result : kalki, rrr, saaho, devara, magadhira";

  const result = await model.generateContent(prompt);

  const movies = result.response.text().split(",");

  const promiseArray=movies.map(movie=>searchMovieTmdb(movie));

  const movieData=await Promise.all(promiseArray);

  dispatch(setMovies({movieNames:movies,movieData:movieData}));
};
export default getGptData;
