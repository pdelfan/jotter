import axios from "axios";
import { baseurl } from "../../../gatsby-browser";

export const getLibrary = async (username) => {
  try {
    const books = await axios.get(`${baseurl}library?user=${username}`);
    return books.data[0].library;
  } catch (error) {
    console.error("error:", error);
  }
};
