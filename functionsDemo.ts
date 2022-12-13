
//Function defination
function fun()
{
    console.log("inside fun");
}
//Function call
fun();

function gun(no:number):any
{
    console.log("Inside gun:"+no);
}
gun(11);

function sun(no:number):number
{
    var i: number = no; //local variables
    i++;
    return i;
}

var ret: number=0
var a : number = 10;
ret = sun(a);
console.log("Return value is:"+ret);