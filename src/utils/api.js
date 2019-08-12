import axios from "axios";

const api = {
  // Query NYT API
  searchNYT: function(topic, startYear, endYear) {
    const authKey = "qmraAhCI0gcVpO0novgYHdcBc5inmbAg";
    const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
    authKey + "&q=" + topic + "&begin_date=" + startYear + "&end_date=" + endYear;
    return axios.get(queryURL);
  }
};

export default api;