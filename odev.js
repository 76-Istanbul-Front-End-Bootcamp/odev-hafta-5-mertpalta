import data from "./data.js"
import {createTableElements} from "./main.js";

/*
  ALWAYS USE IMPORTED data ARRAY TO MAKE MANIPULATIONS

  ID for allcities table is #allcities
  ID for singlecity table is #singlecity
/*

/*
* PASS ARRAY TO createTableElements function to fill tables
* first argument - data
* second argument - tableId
* Example createTableElements([{name: "Istanbul"}], "allcities");
*/

/*
    ids for buttons and select

    Population - bigger than 500.000 => #populationBigger
    land area - less than 1000 => #landAreaLess
    Does any city has population less than 100.000? => #isPopulationLess
    Does every city has land area bigger than 100? => #isLandBigger
    city select => #selectcity
*/

/* RESET ACTION */
document.querySelector("#reset").addEventListener("click", () => {
    createTableElements(data, "allcities");
    createTableElements([], "singlecity")
});

/* START CODING HERE */
// population bigger than 500.000
document.querySelector("#populationBigger").addEventListener("click",() => {
    const crowdCity = data.filter((city) => {
            return city.population > 500000 ;
    });
    createTableElements(crowdCity, "allcities")
});
// land area less than 1000
document.querySelector("#landAreaLess").addEventListener("click",() => {
    const lessArea = data.filter((city) => {
        return city.landArea < 1000 ;
    });
    createTableElements(lessArea, "allcities")
});
// population less than 100.000
document.querySelector("#isPopulationLess").addEventListener("click",() => {
    const town = data.some((city) => {
        return city.population < 100000;
    })
    if(town){
        alert("YES");
    }else{
        alert("NO");
    }
})
//land area bigger than 1000
document.querySelector("#isLandBigger").addEventListener("click", () => {
    const bigger = data.every(city => city.landArea >100);
    if(bigger) {
        alert("YES");
    }else {
        alert("NO");
    }
});
// select city
const cityName = data.map(cityName => cityName.name);
const citySelect = document.querySelector(".custom-select");
cityName.forEach((element) => {
    
    const cityCreate = document.createElement("option");
    cityCreate.setAttribute("value",element);
    cityCreate.textContent = element;
    citySelect.appendChild(cityCreate);
  });
// found item
citySelect.addEventListener("change", (e) => {
    const selectCities = data.filter(cities => e.target.value === cities.name);
    createTableElements(selectCities, "singlecity");
});