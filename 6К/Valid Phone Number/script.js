function validPhoneNumber(phoneNumber){
    return reg = /^\(\d{3}\)\s\d{3}\-\d{4}$/.test(phoneNumber);
}