let ans = document.getElementById("display");

function clicked(arg){
    ans.value += arg;
}

function show_result(){
    try{
        ans.value = eval(ans.value);
    }
    catch(err){
        alert("please check your input expression");
    }
    
}

function all_clear(){
    ans.value = " ";
}

function clear_one(){
    ans.value = ans.value.slice(0,-1);
}