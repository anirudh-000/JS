// Isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(word){
    if (typeof word !== "string"){
        return `Not a String`
    } 

    const sorted = word.toLowerCase().split('').sort()
            
    for(let i=0; i < sorted.length-1; i++ ){
        if(sorted[i] === sorted[i + 1]){
        console.log(sorted[i]);
        console.log(sorted[i+1]);
        console.log(sorted);
        return "Not a Isogram"
        }
    }
    console.log(sorted);
    return "Yes, It's an Isogram";
}

console.log(isIsogram("moOse"))


