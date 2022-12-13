var Ret : number =0;

//Regular function
function Addition(No1:number,No2:number):number  //return type is optional
{
    var Ans : number =0;
    Ans = No1+No2;
    return Ans;
}

Ret = Addition(10,11);
console.log("Addition is: "+Ret);


//Anonymous Function (FUnction without name)
//use in callback fnction
var Addition2 = function(No1:number,No2:number):number
{
    var Ans : number =0;
    Ans = No1+No2;
    return Ans;
}
Ret = Addition2(10,11);
console.log("Addition is: "+Ret);

//Fat arrow/Lambda/ Arrow function
//same but execute faster ,with out going into stack(stack layout)
var Addition3 = (No1:number,No2:number):number =>
{
    var Ans : number =0;
    Ans = No1+No2;
    return Ans;
}

Ret = Addition3(10,11);
console.log("Addition is: "+Ret);
