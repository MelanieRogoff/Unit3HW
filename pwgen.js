    //Create an array of all special characters
    const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "="];

    // Create an array of all numeric characters
    const numericChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    // Create an array of all capitalized characters
    const caps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    // Create an array of all non-capitalized characters
    const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    //Create empty array for user pw. Create array values, set ranNum/pwNum/passwordLength to 0 - they'll change. 
    //Put a let for endpw and blank quotations so that the value of endpw will be filled with a string. 
    //Declare the below variables FIRST, before anything else, because this declares them globally so that the functios will definitely access them inside the loops. 
    let user = [];
    let spArray;
    let upArray;
    let lowArray;
    let numArray;
    let ranNum = 0;
    let pwNum = 0;
    let passwordLength = 0;
    let endpw = "";

    function password() {
        let pwLength = prompt("How  many characters would you like in your password? Choose between 8 & 128.");

        //If input isn't within 8 - 128 chars, while loop will ask until user inputs the correct amount. Yo While statements are executed AS LONG AS WHAT IS IN THE PARENTHESIS IS TRUE. 
        if (pwLength <= 7 || pwLength >= 129) {
            pwLength = prompt("Try again, please. Enter how many characters you would like - they must be a number between 8 and 128.");
        }

        //Answering OK or Cancel to Uppercase - WE ONLY NEED ONE
        const upConf = confirm("Would you like any uppercase letters?");
        //This declares the variable lowConf in a global scope so the following will work since we're putting the variable inside curly brackets as well. 
        let lowConf;
        if (upConf) {
            lowConf = confirm("Great! Would you like any lowercase letters?");
            console.log(lowConf);
        } else if (!upConf) {
            lowConf = confirm("That's fine - Want any lowercase characters?");
            console.log(lowConf);
        }

        //Special Characters confirm
        spConf = confirm ("Would you like any special characters?");
        //Numerical letters confirm
        const numConf = confirm("Rad! Would you like any numerical characters?");

        //Validating user inputs
        if (numConf || spConf || upConf || lowConf) {
            alert("Alright, here we go! One super-secure password coming right up! *blending and whirring machine noises");
        } else {
            alert("You need to pick one uppercase, lowercase, special character, or numerical character. Start again");
            password();
        }
        
        //Call the function that generates the password. 
        finalpw();

        function finalpw() {
        if (spConf) {
            spArray = user.concat(specialChars)
            user = spArray;
            console.log(user);
        };
        if (upConf) {
            upArray = user.concat(caps);
            user = upArray;
            console.log(user);
        };
        if (lowConf) {
            lowArray = user.concat(lowercase);
            user = lowArray;
            console.log(user);
        };
        if (numConf) {
            numArray = user.concat(numericChars);
            user = numArray;
            console.log(user);
        };

        //Use this for loop to go through each if statement and generate a random PW
        for (let i = 0; i < pwLength; i++) {
            ranNum = Math.floor(Math.random()*user.length);
            //The += is syntax for concatenating, which we need to do with this. user[ranNum] takes the number the user input for password length and then adds the correct amount of characters/letters to the endpw string. 
            endpw += user[ranNum];
        };
        //Console logging endpw so we can see what it actually generated
        console.log(endpw);

        //When clicking the Generate Password button, this shows the user their password
        document.getElementById("genStart").onclick = function() {myFunction()};

        function myFunction() {
            //This links to the id of pass which is in the <textarea> tag in the HTML file, and it grabs the value of the endpw (the final result) and puts it into the text box!
            document.getElementById("pass").value = endpw;
        }
    }
}
//Copy to clipboard

//This is the ID for the clipboard button
document.getElementById("copyToClipboard").addEventListener("click", ()=> {
   //This is the id for the <textarea> tag
    document.getElementById("pass").select();
    //The "copy" text will do the copy command
    document.execCommand("copy");
})
        
    password();        