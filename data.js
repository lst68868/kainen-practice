//Coding Questions

/*

1.  Write a function that, given an array of lowercase words as the argument, returns them all with the first letter of each word uppercase. For example:

    let lowercaseWords = ['apple', 'banana', 'umbrella', 'elephant', 'octopus', 'carrot', 'dragon', 'fox', 'grape', 'house']
    
    should become
    
    ['Apple', 'Banana', 'Umbrella', 'Elephant', 'Octopus', 'Carrot', 'Dragon', 'Fox', 'Grape', 'House'].
    
    HINT 1: There is a method called toUppercase. 
    
    HINT 2: The same way you can find array items within an array by using bracket notation (Example: lowercaseWords[0] gives us apple), you can also find characters within an array item using bracket        notation. (Example: lowercaseWords[0][0] gives us a, lowercaseWords[0][1] gives us p, and so on.


*/




/*

2. Take the function from 1 and add a twist: Only capitalize the first letter of a word IF the word starts with a, b, or c.

    let lowercaseWords = ['apple', 'banana', 'umbrella', 'elephant', 'octopus', 'carrot', 'dragon', 'fox', 'grape', 'house']

    should become 
    
    ['Apple', 'Banana', 'umbrella', 'elephant', 'octopus', 'Carrot', 'dragon', 'fox', 'grape', 'house']

    HINT 1: In javascript || is or, && is and
    HINT 2: you can use && and || statements inside a conditional. For example: if(a < b && a < c ) { do something}. Remember, you can use parentheses to seperate things out and make your life               easier! For example: if( (a < b && a < c) || a > d ) { do something else}


*/

/*

3. Final twist: Adjust your function to accept both the array and a number. If the number is less than or equal to 9, Only capitalize the word at that index. For example, if you pass the function an array and the number 3, it should only capitalize the item at the 3rd index. If the number is greater than 9, the function should only capitalize words starting with a, b, or c like last time.

    If the number is less than or equal to 9...

    let lowercaseWords = ['apple', 'banana', 'umbrella', 'elephant', 'octopus', 'carrot', 'dragon', 'fox', 'grape', 'house']

    should become 
    
    ['apple', 'banana', 'umbrella', 'Elephant', 'octopus', 'carrot', 'dragon', 'fox', 'grape', 'house']

  BUT if the number is greater than 9...  

  let lowercaseWords = ['apple', 'banana', 'umbrella', 'elephant', 'octopus', 'carrot', 'dragon', 'fox', 'grape', 'house']

    should become 
    
    ['Apple', 'Banana', 'umbrella', 'elephant', 'octopus', 'Carrot', 'dragon', 'fox', 'grape', 'house']

*/
