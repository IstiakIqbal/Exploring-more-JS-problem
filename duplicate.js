const names = ['Miraj', 'Tanim', 'Ishtiak', 'Miraj', 'Tanim'];

function duplicate(names){
    const individual = [];
    for(var i = 0; i<names.length; i++){
        const name = names[i];
        if(individual.includes(name)==false)
        {
            individual.push(name);
        }
    }
    return individual;
}

console.log(duplicate(names));
