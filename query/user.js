export function AddUser(data){
    return `
     insert into user 
     set
     ?
    ;
     `
}

export function getuser(email,password){
    return `
    select * from user 

    where email = '${email}'
    and
      password = '${password}'
    
    ;
    `
}

export default {
    AddUser,
    getuser
}