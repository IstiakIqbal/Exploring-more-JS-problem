function add (num1, num2){
    if(typeof(num1)!=='number' || typeof(num2)!=='number')
    {
        console.log("It's not a number, pls type a number");
    }
    else{
        sum = num1 + num2;
        return sum;
    }
    
}

var ans = add(2,'9');
console.log(ans);