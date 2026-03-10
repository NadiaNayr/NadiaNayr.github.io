let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
let Time = 0
let EnergyLevel = 0

//If you need, add any "helper" functions here
function AddTime() {
    //make it wait
    Time = Time + 1
}

//Make one function for each location
function locationA() {
    clear();
    print("\nYou are in Prithvi's bedroom");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\t Bathroom");
    
    function processInput(input){
        if (input.toLowerCase() === "Bathroom") {
            console.log("works")
            locationB();
        } else {
            stayHere();
            waitThenCall(locationA);
        }
    }
    waitForInput(processInput);
}

function locationB() {
    clear();
    print("\nYou are in the bathroom!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\t Prithvi's bedroom");
    
    function processInput(input){
        if (input.toLowerCase() === "Prithvi's Bedroom") {
            locationA();
        } else {
            stayHere();
            waitThenCall(locationB);
        }
    }
    waitForInput(processInput);
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to my game! Press any key to start");

    function processInput(input){
            locationA();
    }
    waitForInput(processInput);
}