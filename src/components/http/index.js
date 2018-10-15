// import React from 'react';
import axios from 'axios';

// const apiurl = "http://localhost:8000/api";
const apiurl = "http://35.182.106.106/api";

export const fetchSearchResult = (queryobj, callback) => {
    const url = apiurl + `/search?query=${JSON.stringify(queryobj)}`;
    axios.get(url)
      .then(res => {
            callback(res.data.result);
      })

    // axios(url, {
    //     method: 'GET',
    //     mode: 'no-cors',
    //     headers: {
    //       'Access-Control-Allow-Origin': '*',
    //       'Content-Type': 'application/json',
    //     },
    //     withCredentials: true,
    //     credentials: 'same-origin',
    //   }).then(response => {
    //       console.info(response);
    //   })

    // var data = null;

    // var xhr = new XMLHttpRequest();
    // xhr.withCredentials = true;

    // xhr.addEventListener("readystatechange", function () {
    // if (this.readyState === 4) {
    //     console.info(this.responseText);
    // }
    // });

    // xhr.open("GET", "http://localhost:8000/api/search?query={%22query%22:%22%22,%22category%22:%22all%22}");
    // xhr.setRequestHeader("Cache-Control", "no-cache");
    // xhr.setRequestHeader("Postman-Token", "fb5cf258-c8f9-496e-a54b-1fdeb05e8068");

    // xhr.send(data);


}

export const saveLatesSearchResult = (latestResult, callback) => {

    const url = apiurl + `/saveLatestSearchResult`;
    const params = new URLSearchParams();
    params.append('title', latestResult.title);
    params.append('category', latestResult.category);
    axios.post(url, params)
        .then(res => {
            callback(res.data.result);
            console.info(res.data);
        });
}

// export const history = () => history();