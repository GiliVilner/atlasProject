import CountryClass from "./countryClass.js";
import { declereEvents } from "./events.js";
let allCountries_ar = [];
let firstCountry_ar = [];
const init = () => {
    doApi();
}
const doApi = async () => {
    let url = `https://restcountries.com/v3.1/all`;
    let resp = await fetch(url);
    let data = await resp.json();
    data.map(item => {
        allCountries_ar.push(item);
    })
    showCountry("Israel");
    declereEvents(showCountry, showAllCountries, showUSA);
    fillSelectBox();

}
const showCountry = async (_country) => {
    document.querySelector("#id_parent").innerHTML = "";
    let countries = allCountries_ar.filter(item => item.name.common.toLowerCase().includes(_country.toLowerCase()));
    if (countries.length >= 1) {
        countries.map(element => {
            let country = new CountryClass("#id_parent", element);
            country.render(showNameByCode, showCountry);
        })
    }
    else {
        // console.log(_country);
        // let name = await showNameByCode(_country.toUpperCase());
        // if (name.length > 1) {
        //     console.log(_country);
        //     let coun = allCountries_ar.find(item => item.name.common == name);
        //     coun = new CountryClass("#id_parent", coun);
        //     coun.render(showNameByCode, showCountry);
        // }
        // else {
        document.querySelector("#id_parent").innerHTML = `<h1 class="text-center p-4 text-white">The country ${_country} not found</h1>`;
    }
    // }
}
const showUSA = async (_country) => {
    document.querySelector("#id_parent").innerHTML = "";
    let name = await showNameByCode(_country.toUpperCase());
        let coun = allCountries_ar.find(item => item.name.common == name);
        coun = new CountryClass("#id_parent", coun);
        coun.render(showNameByCode, showCountry);
    }
    const showAllCountries = () => {
        document.querySelector("#id_parent").innerHTML = "";
        allCountries_ar.forEach(item => {
            let coun = new CountryClass("#id_parent", item);
            coun.render(showNameByCode, showCountry);
        })

    }
    const showNameByCode = async (code) => {
        let url = `https://restcountries.com/v3.1/alpha/${code}`;
        let resp = await fetch(url);
        let data = await resp.json();
        // console.log(data[0].name.common);
        return data[0].name.common;
    }
    export const fillSelectBox = async () => {

        allCountries_ar.sort((a, b) => a.name.common.localeCompare(b.name.common))
        let select_country = document.querySelector("#id_select_country");
        allCountries_ar.map(item => {
            select_country.innerHTML += `
<option value=${item.name.common}>${item.name.common}</option>`
        });
    }
    init();