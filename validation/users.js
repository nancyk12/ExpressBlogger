
/*let email = email;
//let firstName = body.firstName;
////let lastName = body.lastname;
//let age = body.age;
//let favoriteFoods = body.favoriteFoods;


const userInfo =  {
    email,
    firstName,
    lastName, 
    age,
    favoriteFoods,
    fullName: firstName + lastName, 
    createdAt: new Date(),
    lastModified: newDate(),
};
*/

let validateUserData = (userInfo) => {

    if (userInfo.firstName === undefined || typeof(userInfo.firstName) !== "string") {
        return {
            isValid: false,
            message: "First name needs to be inputed as a string"
        }
    }

    if (userInfo.lastname === undefined || typeof(userInfo.lastName) !== "string") {
        return {
            isValid: false,
            message: "Last name needs to be inputed as a string"
    }

}
if (userInfo.email === undefined || typeof(userInfo.email) !== "string"){
    return {
        isValid: false,
        message: "Email needs to be inputed as a string"
    }
}
if (userInfo.age !== undefined && typeof(userInfo.age) !== "number") {
    return {
        isValid: false,
        message: "Age needs to be inputed as a number"
    }
}



let isValid = true;

userInfo.favoriteFoods.forEach(food => {

    if (typeof(food) !== "string" ) {
        isValid = false;
    }
})

if (isValid === false){

    return {
        isValid: false,
        message: "Food needs to be inputed as a string"
    }
}

if (userInfo.favoriteFoods === undefined || !Array.isArray(userInfo.favoriteFoods) || userInfo.favoriteFoods.length === 0 ) {
    return {
        isValid: false,
        message: "favorite foods should be inputed as an array of strings"
    }
}


let stringFoods = userInfo.favoriteFoods.filter((favoriteFood)=>{
    if (typeof(favoriteFood) !== 'string') {
        return true
    } else {
        return false
    }
})
console.log("stringFoods ", stringFoods)

if (stringFoods.length > 0) {
    return {
        isValid: false,
        message: "favorite foods should be inputed as and array of strings"
    }
}
return {
    isValid: true
}


module.exports = {
    //userInfoValidation, 
    validateUserData,
}}
/*
//Note: if we have a function, we want to return similar values for all possible
const validateUserData = (userData)=> {

}

module.exports = {
    // These two lines are equivalent becaue the variable name and the key for the
    // validatedUserData: validateUserData
    validateUserData,
}*/



