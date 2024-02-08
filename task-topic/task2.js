function checkName(name) {
    if (typeof name !== 'string') {
        return "invalid";
    }

    const lastLetter = name.trim().slice(-1).toLowerCase();
    const lastGoodLetter = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];

    if (lastGoodLetter.includes(lastLetter)) {
        return "Good Name";
    } else {
        return "Bad Name";
    }
}

