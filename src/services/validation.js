function validate(formProp) {
    const {firstName, secondName,
        userName, email, password,
        repeatPassword, photo, region} = formProp;
    return {
        firstName: firstName.length === 0 || !checkStr(firstName),
        secondName: secondName.length === 0 || !checkStr(secondName),
        userName: userName.length === 0 || !checkStr(userName),
        email: email.length === 0 || !validateEmail(email),
        password: password.length <= 0,
        repeatPassword: repeatPassword !== password,
        region: region.length === 0,
        photo: !photo || !validatePhoto(photo),
    };
}

function validateEmail(email) {
    const possibleEmails = ['gmail.com', 'ukr.net', '@yandex.ru'];
    const emailParts = email.split('@');
    return possibleEmails.includes(emailParts[emailParts.length-1])
}

function validatePhoto(photo) {
    if (!!photo) {
        return photo.type === 'image/jpeg' || photo.type === 'image/png'
    }
}

function checkStr(str) {
    return str.match(/^[A-Za-z0-9]+$/);
}

export default validate;