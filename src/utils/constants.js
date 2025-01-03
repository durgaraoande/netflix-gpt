export const Avatar_Url =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg";

export const Logo =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+process.env.REACT_APP_TMDB_API_KEY
  },
};

export const BG_Image="https://i.pinimg.com/736x/36/57/14/365714987436299a240b33b20fe35474.jpg";

export const OPENAI_API_KEY=process.env.REACT_APP_OPENAI_API_KEY;

export const GEMINI_API_KEY=process.env.REACT_APP_GEMINI_API_KEY;
