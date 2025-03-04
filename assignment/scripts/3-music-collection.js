console.log('***** Music Collection *****')
// This week, we'll be exploring objects by creating an application to help maintain a record collection. We will be creating objects using `object literal` syntax.

// ## Topics Covered

// - objects
// - HTML & CSS

// ## Part 3 - Building a Music Collection

// Update the `3-music-collection.js` file to do the following:

// > While working through the features below, make sure to commit after you complete a task! Your commit message should reflect what you added or changed since the previous commit.

// ### Required Features

// - Create a variable `collection` that starts as an empty array.
let collection = [];
//end album

// [x] Add a function named `addToCollection`. This function should:
function addToCollection (title, artist, year){
    let album = {
        title: title,
        artist: artist,
        yearPublished: year   
    }
   collection.push (album);
   return album;
 
}
console.log ('add to collection', addToCollection ('jones', 'anderson', 1967 ));
console.log ('add to collection', addToCollection ('thelma', 'anderson', 1962));
console.log ('add to collection', addToCollection ('wind', 'hearts', 1998));
console.log ('add to collection', addToCollection ('sky', 'fireman', 2002));
console.log ('add to collection', addToCollection ('hurricane', 'fireman', 2006));
console.log ('add to collection', addToCollection ('rain', 'kings', 2016));

console.log (collection);


//   [x] Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   [x]Create a new object having the above properties
//   [x] Add the new object to the end of the `collection` array
//   [x] Return the newly created object

// [x] Test the `addToCollection` function:
//   [x]Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   [x] Console.log each album as added using the returned value.
//   [x] After all are added, console.log the `collection` array.

// [x]Add a function named `showCollection`. This function should:

function showCollection (sound){
    
    for (i=0; i<sound.length; i++){
        console.log (sound[i]);
    }
}
showCollection(collection);
//   [ x] Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//   [ x] Console.log the number of items in the array.
//   [x ] Loop over the array and console.log each album's information formatted 
//        like: `TITLE by ARTIST, published in YEAR`.

// [ x] Test the `showCollection` function.

// [x ] Add a function named `findByArtist`. This function should:
//  [x] Take in `artist` (a string) parameter




function findByArtist(artist) {
    let results = [];
    for (let i=0; i<collection.length; i++){
    if (artist === collection[i].artist) { 
       results.push (collection[i]);       
    }//end if
}  //end for
    return results;
   

} //end findByArtist

console.log (findByArtist('fireman'));


//   [x] Create an array to hold any results, empty to start
//   [x] Loop through the `collection` 
//   [x] add any objects with a matching artist to the array.
//   [x] Return the array with the matching results. 
//   [X ] If no results are found, return an empty array.

// [ X] Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

// > When testing your functions, write all tests in the JavaScript file!





// ### Stretch goals

//   [x] Create a function called `search`. This function should:
// let objectSearch = {
//     artist: James Jones,
//     year: 1999
// }
// function search (title) {
// let newCollection = [];  
    
// }
//   [x] Take an input parameter for a search criteria object. 
//   [x] Create your solution based on a search object that has these properties:
//   ```
//   { artist: 'Ray Charles', year: 1957 }
//   ```
//   [ ] The returned output from `search` should meet these requirements:
//   [ ] Return a new array of all items in the `collection` 
//       matching *all* of the search criteria.
//   [ ] If no results are found, return an empty array.
//   [ ] If there is no search object or an empty search object provided as input, 
//       then return all albums in the `collection`.

//   [ ] Add an array of `tracks` to your album objects. 
//       Each track should have a `name` and `duration`. 
//       You will need to update the functions to support this new property:
//   [ ] Update the `addToCollection` function to also take an input parameter 
//       for the array of tracks.
//   [ ] Update `search` to allow a `trackName` search criteria.
//   [ ] Update the `showCollection` function to display the list of tracks 
//       for each album with its name and duration.
// ```
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
// ```