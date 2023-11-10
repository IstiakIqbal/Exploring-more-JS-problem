/*
Print numbers from 1 to 50 
1. If the number is divisible by 3, then instead of the number Print "foo"
2. If the number is divisible by 5, then instead of the number Print "bar"
3. If the number is divisible by 3 then instead of the number and 5, Print "foobar"
*/

for(var i=1; i<=50; i++){
    if(i%3 === 0 && i%5 === 0){
        console.log('foobar');
    }
    else if(i%3 === 0)
    {
        console.log('foo');
    }
    else if(i%5 === 0)
    {
        console.log('bar');
    }
    else{
        console.log(i);
    }
}