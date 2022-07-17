import navSearch from "../components/navSearch.js";
import home from "../components/home.js";
import { makeApiCall, appendData } from "./async";

document.querySelector("#searchBar").innerHTML = navSearch();
document.querySelector("#homePage").innerHTML = home();

let search_term = localStorage.getItem("search_item");

let key = "IbQfsT5hSUQZzIi1vvRrSMZJ2Tbk8W6wd7lOEFIDR2Y";
let url = `https://api.unsplash.com/search/photos?query=${search_term}&client_id=${key}`;

let search = document.querySelector(".home02");

let res = await makeApiCall(url);
console.log("Res", res);

appendData(res.results, search);
