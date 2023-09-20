import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchApi = (url) => {
  const [getData, setGetData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios(url);
        setGetData(data);
      } catch (error) {
        console.log(error.response.status);
      }
    };
    fetch();
  },[]);
  return {getData}
};

export default useFetchApi;
