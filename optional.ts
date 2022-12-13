
//Optional arguments

//Number of required arguments are 2
//Default argumnets should be trailing (from right to left)
function Demo(no1:number,no2 ?:number)
{
    console.log("Inside Demo");
    console.log("Value of no1:"+no1);
    //console.log("Value of no2:"+no2);
    if(no2 != undefined)
    {
        console.log("Value of no2 :"+no2);
    }
    
}

Demo(10,11);  //no1 = 10   no2 =11
Demo(10);     //no1 =10   no2 = undefined
