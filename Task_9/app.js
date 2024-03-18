const calculate = () => {
    const inputGrade5 = parseInt/*Переобразование в инт*/(document.querySelector(' #grade-5').value); //h1; .title; #grade-5
    const inputGrade4 = parseInt(document.querySelector(' #grade-4').value);
    const inputGrade3 = parseInt(document.querySelector(' #grade-3').value);
    const inputGrade2 = parseInt(document.querySelector(' #grade-2').value);
    
    if (isNaN(inputGrade5) || isNaN(inputGrade4) || isNaN(inputGrade3) || isNaN(inputGrade3)) {
        alert("Заполните все поля!");
        return;
    }

    let gradeSum = inputGrade5 + inputGrade4 + inputGrade3 + inputGrade2;

    //объект
    const percentages = {
        '5': ((inputGrade5 / gradeSum) * 100).toFixed(2)/*То, сколько чисел мы хотим видеть после точки ( в данном случае 2)*/,
        '4': ((inputGrade4 / gradeSum) * 100).toFixed(2),
        '3': ((inputGrade3 / gradeSum) * 100).toFixed(2),
        '2': ((inputGrade2 / gradeSum) * 100).toFixed(2),
    };

    const resultDiv = document.querySelector('#result');
    resultDiv.innerHTML = `
        <p>Оценка 5: ${percentages[5]}%<p>
        <p>Оценка 4: ${percentages[4]}%<p>
        <p>Оценка 3: ${percentages[3]}%<p>
        <p>Оценка 2: ${percentages[2]}%<p>
    `;


}