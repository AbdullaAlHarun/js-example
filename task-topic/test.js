function password(myObject) {
    if (typeof myObject.name !== 'string' || typeof myObject.birthYear !== 'number' || typeof myObject.siteName !== 'string') {
        return 'Invalid input';
    }

    // Check if birthYear is less than 4 digits
    if (myObject.birthYear.toString().length < 4) {
        return 'Invalid input';
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

// Example usage:
const obj1 = { name: "kolimuddin", birthYear: 1999, siteName: "google" };
console.log(password(obj1)); // Output: "Google#kolimuddin@1999"

const obj2 = { name: "rahat" , birthYear: 2002, siteName: "Facebook" };
console.log(password(obj2)); // Output: "Facebook#rahat@2002"

const obj3 = { name: "toky" , birthYear: 200, siteName: "Facebook" }
console.log(password(obj3)); // Output: "Invalid input"

const obj4 = { name: "maisha" , birthYear: 2002 }
console.log(password(obj4)); // Output: "Invalid input"