export function AddFruit(){
    return `
    insert into Fruit
    set ?
    
    `
}
export function viewAllFruit(){
    return `
    select * from fruit;
    `
}

export function searchFruit(query){
    return `
    select * from Fruit where name = '${query}'
    `
}

export function updateFruit(name){
    return `
        update Fruit
        set
        ?
        where name = '${name}';
    `
}

export default{
    AddFruit,
    viewAllFruit,
    searchFruit,
    updateFruit
}