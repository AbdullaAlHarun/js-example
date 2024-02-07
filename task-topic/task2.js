function checkName(name) {
    if (typeof name !== 'string') {
        return "invalid";
    }

    const lastCharacter = name.trim().charAt(name.length - 1).toLowerCase();
    const lastGoodLetter = ['a', 'e', 'i', 'o', 'u', 'y', 'w'];

    if (lastGoodLetter.includes(lastCharacter)) {
        return "Good Name";
    } else {
        return "Bad Name";
    }
}
