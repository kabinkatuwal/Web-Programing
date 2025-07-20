function markToGrade(){
    const markInput = document.getElementById('mark-input-box').value;
    const validationMessage = document.getElementById('validation-message');
    const gradeDisplay = document.getElementById('grade-display');

    validationMessage.textContent = '';
    gradeDisplay.textContent = '';

    let mark;
    try{
        mark = parseInt(markInput);
        if(isNaN(mark)){
            validationMessage.textContent = 'please enter a numerical value.';
            return;
        }
        if(mark < 0){
            validationMessage.textContent = 'Mark cannot be negative.';
            return;
        }
        if(mark > 100){
            validationMessage.textContent = 'Mark cannot exceed 100';
            return;
        }
        let grade;
        if(mark >= 90){
            grade = 'A';
        } 
        else if(mark >= 80){
            grade = 'B';
        }
        else if(mark >= 70){
            grade = 'C';
        }
        else if(mark >=60){
            grade = 'D';
        }
        else if(mark >=50){
            grade = 'E';
        }
        else{
            grade = 'F';
        }
        gradeDisplay.textContent = `Grade: ${grade}`;
    }catch(e){
        validationMessage.textContent = 'Invalid input.Please enter a valid number';
    }
}