export default class CountryClass {
    constructor(_parent, _item) {
        this.parent = _parent;
        this.name = _item.name.common;
        this.amount = _item.population.toLocaleString();
        this.region = _item.region;
        this.capital = _item.capital;
        this.langusges = _item.languages ? Object.values(_item.languages) : "none";
        this.codeName = _item.cca3;
        this.flag = _item.flags.png;
        this.map = _item.latlng;
        this.borders = _item.borders;
        //_item[0].maps.googleMaps;
    }
    render(_showNameByCode,showCountry) {

        let myDiv = document.createElement("div");
        myDiv.className = "d-flex justify-content-center my-3 text-center";
        document.querySelector(this.parent).append(myDiv);
        myDiv.style = " cursor: pointer"
        myDiv.className = "col-lg-3 col-sm-5 my-3 mx-2 text-center";
        myDiv.innerHTML += `
        <div class="card h-100 preBox">
            <img src="${this.flag}" class="card-img-top preImg shadow" width="100%" height: 200px; alt="${this.name}">
            <div class="card-body">
                <h3 class="pnew card-text m-0 p-3"><b>${this.name}</b></h3>
            </div>
        </div>
        `;
        myDiv.querySelector(".preBox").addEventListener("click", () => {
            document.querySelector(this.parent).innerHTML = "";
            this.cardRender(_showNameByCode,showCountry);
        });

    }
    cardRender(_showNameByCode,showCountry) {
        let div = document.createElement("div");
        div.className = "border";
        document.querySelector(this.parent).append(div);
        div.innerHTML = ` <div class="col-md-8 mx-auto p-4 border shadow overflow-hidden" style="background: rgba(255, 255, 255, 0.886);">
         <img src="${this.flag}" alt="${this.name}" class="w-50 float-end ms-4">
         <h2>${this.name}</h2>
         <div>POP: ${this.amount}  </div>
         <div>Region: ${this.region}</div>
         <div>Languages: ${this.langusges}</div>
         <div>Capital: ${this.capital}</div>
         <div class="mt-3 borders-div"><strong>States with borders:</strong><br>
         <p class="card-text Mcard-text borders_div"></p>
         </div>
         <iframe class="mt-4 col-12" height="400" src="https://maps.google.com/maps?q=${this.map[0]},${this.map[1]}&z=7&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy"></iframe>;
        </div>`
        //<a style="color: red; cursor: pointer;">Egypt </a><a style="color: red; cursor: pointer;">Jordan </a><a style="color: red; cursor: pointer;">Lebanon </a><a style="color: red; cursor: pointer;">Palestine </a><a style="color: red; cursor: pointer;">Syria </a>

        if (this.borders) {
            this.borders.forEach(async (element) => {
                let fullNmae = await _showNameByCode(element);
                let span = document.createElement("span");
                span.className = "text-danger bord"
                span.innerHTML = `${fullNmae} `;
                document.querySelector(".borders_div").append(span);
                span.addEventListener("click", () => {
                    showCountry(fullNmae);
                }
                )
            });
        }
        else{
            document.querySelector(".borders-div").style.display="none";
        }


            //`<img src=${this.flag}>
            //     <h2 class="text-center">${this.name}</h2>
            //     <p>POP: ${this.amount}<br>Capital: ${this.capital}<br>Languages: ${this.languages}</p>
            //     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.6428688037463!2d34.781031315328506!3d32.08508505719198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d4221a7d35a3%3A0xf3d2a738df462f9e!2sWestern%20Wall!5e0!3m2!1sen!2sil!4v1620262769669!5m2!1sen!2sil" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            //<iframe class="mt-4 col-12" height="400" src="https://maps.google.com/maps?q=31.47,35.13&amp;z=7&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            //<iframe src=" ${this.map}" alt="${this.name} map">
            //   <button>Back to list</button>
            //     `;




        }
}