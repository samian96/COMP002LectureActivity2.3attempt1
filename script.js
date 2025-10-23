let myGrade = 75;

// if statement is the starting point in checking to see if the statement is true
if (myGrade >= 90){ 
    console.log("A")
// else if statement is followed if the initial if statement was not true and follows down the order till true
} else if (myGrade < 90 && myGrade >= 80){
    console.log("B")
} else if (myGrade < 80 && myGrade >= 70){
    console.log("C")
} else if (myGrade < 70 && myGrade >= 65){
    console.log("D")
// else statement is last, if all other statements are false this is the default statement that will display
} else {
    console.log("F")
}