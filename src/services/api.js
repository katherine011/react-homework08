import axios from "axios";

const apiUrl = "https://dummyjson.com/quotes?limit=5";

export async function fetchQuotes(setQuote) {
  try {
    const res = await axios.get(apiUrl);
    const data = res.data;

    // console.log("data", data);

    setQuote(data.quotes);
  } catch (error) {
    console.log(error);
  }
}
