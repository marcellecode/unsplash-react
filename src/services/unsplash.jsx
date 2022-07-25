import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID H9Nxd9-SXE2iiTk9Ge10Qfd04BI0cbIa48uzInNyEpk",
  },
});
