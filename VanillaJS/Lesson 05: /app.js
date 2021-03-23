// String Concatenation
str1 = "Beginner"
str2 = "Javascript"
console.log("String Concatenation: ", str1 + " " + str2);
console.log("Appending To Variable String: ", str1 += " " + str2);           // Addition Assignment
console.log('This is Javascript\'s Way To Escape Special Characters');        // Escaping Special Characters with \

// String Functions
console.log("Length() Function:", str1.length);   // String Length
console.log("Concat() Function: ", str1.concat(" Going Intermediate Soon."));       // String Concatenation
console.log("String as Array: ", str1[2]);  // String as Array
console.log("IndexOf() Function", str1.indexOf('r'));  // First Occurence of Character at Index.
console.log("lastIndexOf() Function: ", str1.lastIndexOf('r'));   // Last Occurence of Character at Index.
console.log("CharAt() Function: ", str1.charAt(7));    // Print Character at Given Index.
console.log("Substring Function: ", str1.substring(0, ));    // Substring Prints Character From and To Given Index Range. Missing Final Index Will Print Entire String.
console.log("Slice() Function: ", str1.slice(-10));    // First Index as Negetive will Print Starting From Last.
console.log("Slice() Function: ", str1.slice(0, -11));    // Second Index as Negetive will Slice Characters till Given Index {Math.abs(Second Negetive Index)}.
console.log("Split() Function: ", str1.split(' '));   // Will Split String into Array Using Given Delimeter to Separate.
console.log("Replace() Function: ", str1.replace('Beginner', 'Intermediate'));    // Replace Certain Section of String.
console.log("ToUpperCase() Function: ", str1.toUpperCase());    // Converts String To Upper Case.
console.log("ToLowerCase() Function: ", str1.toLowerCase());    // Converts String To Lower Case.
console.log("Includes Function: ", str1.includes('Java'));    // Returns Boolean.