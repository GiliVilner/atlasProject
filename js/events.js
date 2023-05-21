export const declereEvents = (_showCountry, showAllCountries, showUSA) => {

    let input = document.querySelector("#id_input");
    let btn = document.querySelector("#search_btn");
    btn.addEventListener("click", () => {
        _showCountry(input.value);
    });

    let backHome = document.querySelector("i");
    backHome.addEventListener("click", () => {
        _showCountry("israel");
        input.value="";
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            _showCountry(input.value);
        }
    });

    let all = document.querySelector(".all_class");
    all.addEventListener("click", function (event) {
        event.preventDefault();
        showAllCountries();
        input.value="";
    });

    document.querySelector("#id_USA").addEventListener("click", async() => {
        showUSA("USA");
    });

    let links = document.querySelectorAll(".a_class");
    links.forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            _showCountry(this.innerText);
        })
    });
    let select_country = document.querySelector("#id_select_country");
    select_country.addEventListener("change", () => {
        if (select_country.value != 0) {
            console.log(select_country.value + "jjjj");
            _showCountry(select_country.value);
            input.value = select_country.value;

        }
    });
}