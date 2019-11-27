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
        
        //Call the function that generates the password
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
        for (let i = 0; i < pwLength; i++) {
            ranNum = Math.floor(Math.random()*user.length);
            endpw += user[ranNum];
        };
        console.log(endpw);
     }   
}
    password();        