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
/////////////////////////////////////////////
// switches go down the order until it hits the imnput value that is assigned to the variable, in this case it will execute at case 4
let myNumber = 4
switch(myNumber){
    case 1: console.log("input is 1")
        break; // break inbetween cases allows it to follow each step accordingly
    case 2: console.log("input is 2")
        break;
    case 3: console.log("input is 3")
        break;
    case 4: console.log("input is 4") // this line will execute
            break;
    case 5: console.log("input is 5")
        break;
    default: console.log("input is not between 1-5.");
        break;
}
///////////////////////////////////////////

