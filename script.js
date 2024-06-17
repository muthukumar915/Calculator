var a=document.getElementById("display");

function appendDisplay(num){
    a.value+=num;
    // console.log(a)
}
function appendClear(){
    a.value="";
}
function appendtoResult(){
    a.value=eval(a.value);
}