// Code your solution here

function findMatching ( driversArray, driversName ) {
    return driversArray.filter(x => x.toUpperCase() === driversName.toUpperCase());
};

function fuzzyMatch ( driversArray, driversName ) {
    return driversArray.filter(x => x.slice(0,1) === driversName.slice(0,1))
};

function matchName ( driversArray, driversName ) {
    return driversArray.filter( x => x.name === driversName)
};