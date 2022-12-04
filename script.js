// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i

// ---------------------------------------------------------------

function generateKey (length, characters){
    characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let str = "";
    for (let i = 0; i < length; i++) {
        str += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return str;
}
console.log(generateKey(16)); 

// -------------------------або так---------------------------------

function generateKey(length, characters) {
    characters = 'abcdefghijklmnopqrstuvwxyz012345678'
    let string = '';
    while (length--) 
        string += characters[Math.floor(Math.random() * characters.length)];
    return string;
  }
  
  console.log(generateKey(16));