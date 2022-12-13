
//Default arguments

//Number of required arguments are 2
//Default argumnets should be trailing (from right to left)
function Demo(no1:number,no2:number =20,no3:number=30)
{
    console.log("Inside Demo");
    
}

//Demo();  //Error 
Demo(10); //no1 =10, no2 =20,no3= 30
Demo(10,11); //no1=10, no=11,no3 = 30
Demo(10,20,30);  //no1 = 10,no2=11, no3=12