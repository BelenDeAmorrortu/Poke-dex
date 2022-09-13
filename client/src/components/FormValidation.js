
const nameRegex = /[\W\d]/g

const urlRegex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig

export function validate(input, value){

    let error

    if(input === 'name'){

        if(value === '') error  = 'Your Pokemon needs to have a Name'
        else if(nameRegex.test(value)) error= "Numbers, special characters and spaces aren't allowed"   

    }

    else{

        if(!urlRegex.test(value) && value != "") error = "Url is not valid"
    }
    
    return error
}