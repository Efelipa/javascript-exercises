const findTheOldest = (people) => {
    const oldestPerson = people.sort((a, b) => {
        const lastPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;
        return lastPerson > nextPerson ? -1 : 1;
    })
    return oldestPerson[0];
};

// Do not edit below this line
module.exports = findTheOldest;
