import Axios from "axios";
import { API_URL_SUFFIX, ACCESS_TOKEN } from "../Constants/constants";

const apiEndpoint = API_URL_SUFFIX + ACCESS_TOKEN  + "/search/";
const jsonHeadersConfig = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
export const getSuperHeroId = (name) => {
  return Axios.get(apiEndpoint + name , { jsonHeadersConfig });
};
