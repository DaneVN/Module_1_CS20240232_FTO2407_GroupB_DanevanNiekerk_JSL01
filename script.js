function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let result = ''; // Placeholder for validation result

    // Regular expression to validate the syntax
    const regex = /^pet_\d+[a-zA-Z]+$/;
    /*
    ^pet_: Ensures that the string starts with "pet_".
    \d+: Matches one or more digits (representing the birth year).
    [a-zA-Z]+: Matches one or more letters (representing the pet's name).
    $: Ensures that the entire string matches the pattern (no extra characters at the end).     
    */
    // Check if input matches the regex pattern
    if (regex.test(input)) {
        result = 'Valid Syntax.';
    } else {
        result = 'Invalid Syntax.';
    }
    
    document.getElementById('result').innerText = result;
}


