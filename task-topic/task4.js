function password(obj) {
 
    if (!obj.hasOwnProperty('name') || !obj.hasOwnProperty('birthYear') || !obj.hasOwnProperty('siteName')) {
        return "Invalid input!";
    }

    if (obj.birthYear.toString().length < 4) {
        return "Invalid input!";
    }
   
    const { name, birthYear, siteName } = obj;

    const finalPassword = siteName.charAt(0).toUpperCase() 
                            + siteName.slice(1).toLowerCase() 
                            + '#' 
                            + name 
                            + '@' 
                            + birthYear;

    return finalPassword;
}
