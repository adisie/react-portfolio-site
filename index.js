const pattern = /^(\+251)[^\d]+/

const phone = '+2519239967u6'

if(pattern.test(phone)){
    console.log("VALID")
}else{
    console.log("INVALID")
}