// to get inupt data
var a=document.getElementById("display");

// add number to input
function appendDisplay(num){
    a.value+=num;
    // console.log(a)
}

// clear function
function appendClear(){
    a.value="";
}
// eval is used to for calculation
function appendtoResult(){
    a.value=eval(a.value);
}