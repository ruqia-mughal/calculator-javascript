function getnumber(num) {
   
    var result = document.getElementById("result");
    result.value += num; 
    
}

function clearResult(num){
    var output = document.getElementById("result");
    output.value = "";
}
function getResult(){
    var output = document.getElementById("result");
    output.value = eval(output.value);
}

function back(){
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0,value.length-1);
}

 