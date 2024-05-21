const findSmallest = ( arr ) => {
    let smallest = arr[0];
    let smallestIndex = 0;
    let arrLen = arr.length;

    for ( let i = 0; i < arrLen; i++ ) {
        if ( arr[i] < smallest ) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
};

/**
 * Sorts recursively an array of numbers
 * @param {Array} arr An array of numbers
 * @return {Array} New sorted array
 */
const selectionSort = ( arr ) => {
    if ( !arr.length ) return [];
    let smallest = arr.splice( findSmallest( arr ), 1 );
    return smallest.concat( selectionSort( arr ) );
};

let arr = [5, 3, 6, 2, 10, 50, 11, 54, 24, 100, 1000, 55];

console.log( selectionSort(arr) );