let cl =console.log;

let countriesUI = document.getElementById("countriesUI")
let searchBar = document.getElementById("searchBar");
let btnname = document.getElementById("btn-name");
let btncapital = document.getElementById("btn-capital");
let btnpopulation = document.getElementById("btn-population");
let flag = true;



function templating(ele){
    let result = "";
    ele.forEach(element => {
        result += `
        <div class="col-md-3">
            <div class="card">
                <div class="card-body">
                    <figure class="country-info mb-40">
                        <img src="${element.flag}" alt="${element.name}">
                        <figcaption>
                            <h4 class="m-3">${element.name}</h4>
                            <p><strong>Capital</strong> : ${element.capital}</p>
                            <p><strong>Language.</strong>: ${element.languages}</p>
                            <p> <strong>Population</strong>: ${element.population}</p>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>`
         
    });
    countriesUI.innerHTML = result;
}
templating(countries)

function OnkeyUp(ele){
    let keyVal = ele.target.value;
    let newArr = countries.filter(item =>item.name.toLowerCase().includes(keyVal))
    templating(newArr)
}
function OnClickName(ele){
    let sortedArrName = countries.reverse()
    templating(sortedArrName)
}
function OnClickCapital(ele){
    let sortedArrCapital = countries.sort(function(a, b){
        let x = a.capital;
        let y = b.capital;
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;})
        if(flag === true){
            templating(sortedArrCapital)
            flag = false;
        }else{
            templating(sortedArrCapital.reverse())
            flag = true;
        }
        
}
function OnClickPopulation(ele){
    let sortedArrPopulation = countries.sort((a,b)=>{
      return a.population - b.population
    })
    if(flag === true){
        templating(sortedArrPopulation)
        flag = false;
    }else{
        templating(sortedArrPopulation.reverse())
        flag = true;
    }
}








searchBar.addEventListener("keyup", OnkeyUp)
btnname.addEventListener("click", OnClickName)              
btncapital.addEventListener("click", OnClickCapital)              
btnpopulation.addEventListener("click", OnClickPopulation)              
                        
                    