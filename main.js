const number1= document.getElementById("textBox");
const result=document.getElementById("result");
const calculate=document.getElementById("calculate");
let zakat;
function convert(){

    if (number1){
        zakat=Number(textBox.value);
        zakat=  zakat/40;
        result.textContent=zakat.toFixed(2) ;
    }
    else{
        result.textContent="Write the total sum of money";
    }
};


