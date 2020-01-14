function validate(formProp) {
    const {firstName, secondName,
        userName, email, password,
        repeatPassword, photo, region} = formProp;
    return {
        firstName: firstName.length === 0 || !checkStr(firstName),
        secondName: secondName.length === 0 || !checkStr(secondName),
        userName: userName.length === 0 || !checkStr(userName),
        email: email.length === 0 || !validateEmail(email),
        password: password.length <= 10,
        repeatPassword: repeatPassword !== password,
        region: region.length === 0,
        photo: !photo || !validatePhoto(photo),
    };
}

function validateEmail(email) {
    const regExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regExp.test(email);
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