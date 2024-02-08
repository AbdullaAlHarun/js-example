function deleteInvalids(checkInvalid) {

    if (!Array.isArray(checkInvalid)) {
        return "Error: Please provide an array!!!";
    }

    const result = [];

    for (let i = 0; i < checkInvalid.length; i++) {
        if (typeof checkInvalid[i] === 'number' && !isNaN(checkInvalid[i])) {
            result.push(checkInvalid[i]); 
        }
    }

    return result;
}
