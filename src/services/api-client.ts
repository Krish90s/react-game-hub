import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "b06f0f8a056c4e70a5d0f5c8c3d9c9a2" },
});
