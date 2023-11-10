//Highest camera MP finding

const phones = [
    {Name : 'iPhone', storage : '256GB', camera : '12MP', price : '32000'},
    {Name : 'Pixel', storage : '128GB', camera : '22MP', price : '28000'},
    {Name : 'Xiaomi', storage : '64GB', camera : '50MP', price : '18000'},
    {Name : 'Vivo', storage : '256GB', camera : '25MP', price : '12000'}
]

function cheapest(){ 
    var highestMP = phones[0];
    for(var i=0; i<phones.length; i++){
        var phone = phones[i];

        if(phone.camera > highestMP.camera){
            highestMP = phone;
        }
    }
    return highestMP;
}

console.log(cheapest());