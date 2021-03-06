const isEmpty = (string) => {
    if (string.trim() === '') return true
    else return false
}

const isEmail = (email) => {
    const emailRegex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (email.match(emailRegex)) return true
    else return false
}

exports.validateLoginData = (data) => {
    const errors = {}

    if (isEmpty(data.email)) errors.email = 'Must not be empty'
    if (isEmpty(data.password)) errors.password = 'Must not be empty'

    return {
        errors,
        valid: Object.keys(errors).length ? false : true
    }
}

exports.validateSignUpData = (data) => {
    const errors = {}

    if (isEmpty(data.email)) errors.email = 'Must not be empty'
    else if (!isEmail(data.email)) errors.email = 'Must be a valid email address'

    if (isEmpty(data.firstName)) errors.firstName = 'Must not be empty'
    if (isEmpty(data.lastName)) errors.lastName = 'Must not be empty'
    if (isEmpty(data.phoneNumber)) errors.phoneNumber = 'Must not be empty'
    if (isEmpty(data.country)) errors.country = 'Must not be empty'

    if (isEmpty(data.password)) errors.password = 'Must not be empty'
    else if (data.password !== data.confirmPassword) errors.confirmPassword = 'Passowrds must be the same'

    if (isEmpty(data.username)) errors.username = 'Must not be empty'

    return {
        errors,
        valid: Object.keys(errors).length ? false : true
    }
}