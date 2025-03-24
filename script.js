// for (currCode in countryList){
//     console.log(currCode, countryList[code]);
// }
const BASE_URL="https://api.currencyapi.com/v3/latest?apikey=cur_live_yoprFRpsBeGrkbSMEU5szjKSD5tcrV3vD5yZXvGy&base_currency=INR";
const dropdownSelects = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");

for(let select of dropdownSelects){
    for(currCode in countryList){
        let newOptions = document.createElement("option");
        newOptions.innerText = currCode;
        newOptions.value = currCode;

        if(select.name==="from" && currCode==="USD"){
            newOptions.selected="selected";
        }else if(select.name==="to" && currCode==="INR"){
            newOptions.selected="selected";
        }
        select.append(newOptions);
    }

    select.addEventListener("change", (evt)=>{
        updateFlag(evt.target);
    })
}

const updateFlag=(element)=>{
    let currCode =element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    
    let img = element.parentElement.querySelector("img");
    img.src= newSrc;
}

btn.addEventListener("click",(evt)=>{
    evt.preventDefault(); //this stops the default things to happen when clicked on the button
    //like refresing the page is stoped

    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal==="" || amtVal<1){
        amtVal=1;
        amount.value="1";
    }
})