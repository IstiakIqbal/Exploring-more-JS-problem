//Wood needed for each chair =  3cft.
//Wood needed for each table =  10cft.
//Wood needed for each bed =  15cft.
//I will calculate the total wood needed.

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 15;

    var chairWood = perChairWood * chairQuantity;
    var tableWood = perTableWood * tableQuantity;
    var bedWood = perBedWood * bedQuantity;

    var total = chairWood + tableWood + bedWood;
    return total
}

const total = woodCalculator(5, 7, 10);
console.log(total);