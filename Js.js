var textMessage= " You are welcome to Bmi calculator..Know your Bmi status to avoid diet complications";

x = window.onload = alert(textMessage);
x.setTimeout(() => {
    timeout = 10000;
}, timeout);
function Calc(){
    const w = document.getElementById("weight").value;
    const h =document.getElementById("height").value;
    const metTosquare = (h*h);
    if(w && h){
    const BMIscore = (w/metTosquare);
    const bmiTodp = BMIscore;
            if(BMIscore>=20 && BMIscore <=25){
            document.getElementById("showScore").textContent ="BMI SCORE: "+ BMIscore + "→ Normal ";
            
            }else if(BMIscore >25 && BMIscore <=30 ){
            document.getElementById("showScore").textContent ="BMI SCORE: "+ BMIscore +"→Overweight ";
            
            }else if(BMIscore >30){
            document.getElementById("showScore").textContent ="BMI SCORE: " + BMIscore +"→ Obese ";
            }else if(BMIscore < 20){
            document.getElementById("showScore").textContent ="BMI SCORE: "+ BMIscore + "→Underweight ";
            }else if(BMIscore="NaN" && w.value=="NaN "  && h.value =="NaN"){
            alert("OOPS there is something wrong enter a valid figure");
            } else if(BMIscore<=0){
            alert("insert a valid weight and height");
            }
        
            }else{
            alert("Please insert RIGHT FIGURE IN EITHER weight OR height INPUT field, NIETHER SHOULD YOU LEAVE THE FIELD EMPTY");
            }
            }
    
    