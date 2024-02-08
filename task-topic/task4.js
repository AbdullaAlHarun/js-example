function password(myObject) {
    if (typeof myObject.name !== 'string' || typeof myObject.birthYear !== 'number' || typeof myObject.siteName !== 'string') {
        return 'invalid';
    }

    if (myObject.birthYear.toString().length < 4) {
        return 'invalid';
    }

    const { name, birthYear, siteName } = myObject;

    const finalPassword = siteName.charAt(0).toUpperCase() 
                            + siteName.slice(1).toLowerCase() 
                            + '#' 
                            + name 
                            + '@' 
                            + birthYear;

    return finalPassword;
}
