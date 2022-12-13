var no1 : number = 10;  //dataa definations
var no2 : number =11;
var ret : number =0;

ret = Addition(no1,no2);
console.log("Addition is:"+ret);

function Addition(value1 : number, value2: number):number  //function defiantion
{
    var ans : number=0;
    ans = value1 + value2;
    return ans;
}