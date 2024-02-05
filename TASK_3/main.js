// let students=["Андрей", "Иван", "Стас"]; //массив
// students[2] = false; //поменять элемент (в [ ] ) массива на любой другой (false/true, 254, евгений)
// student[50] = "ИНдекс 50";

// console.log(students); //вывод

// let college = [ ["Андрей", "Иван", "Стас"], [205, 111, 304]]; //вложенные массивы
// college[1][1] = 112; //замена элемента в массиве на другое значение
// let kab = college[1][1]; //выведет кабинет 111. 1 массив 1 элемент (начало с нуля)
// console.log(college);

// let number = [ 1, 2, 3, 4, 5, 6, 7 ];
// console.log(number);

// const countLength = 5;

// if (number.length === countLength) {
//     console.log("ok");
// }
// else if (number.length < countLength) {
//     let result = countLength - number.length;
//     console.log(`Длина вашего массива: ${number.length}. Длину нужно увеличить до ${countLength}. Не хватает еще ${result} элементов`);
// }
// else if (number.length > countLength) {
//     result = number.length - countLength;
//     console.log(`Длина вашего массива: ${number.length}. Длину нужно уменьшить до ${countLength}. Удалите из массива ${result} элементов`);
// }

// const array = ["Tom", "bob, 3, 4"];
// console.log(array)

// let person = { //атрибуты
//     name: "Tom",
//     age: 18,
//     hobbies: ["Кушать", "Спать", "Читать книги"],
//     contacts: {
//         phone: [88005553255, 89007298181],
//         email: ["tom@gmail.com", "tom@example.com"],
//         social: "www.github.com"
//     }
// }

// console.log(`Имя - ${person["name"]}. Возраст - ${person["age"]}`);
// console.log(person["hobbies"][2]);
// console.log(person["hobbies"][2]);


// let college = [
//     { name: "Tom", age: 23, group: "ИС-2-2"},
//     { name: "Tom", age: 23, group: "ИС-2-2"},
//     { name: "Tom", age: 23, group: "ИС-2-2"},
//     { name: "Tom", age: 23, group: "ИС-2-2"}
// ];

// let count = 2
// let studentAge = college[count]["age"];
// let studentName = college[count]["name"];

// if (college[0]["age" >= 18]) {
//     console.log(`Студент ${studentName} совершеннолетний. Ему ${studentAge} лет`)
// }
// else if (college[0]["age" < 18]) {
//     console.log(`Студент ${studentName} не совершеннолетний. Ему ${studentAge} лет`)
// }

let college = [
    {
        name: "Harry",
        age: 18,
        group: "ИС-2-1",
        studID: 542398,
        typeLearning: "Очная",
        task: ["Физ-ра", "МДК-02-02", "Философия", "МДК-02-01"],
        cash: 589,
        isStudent: true
    },
    {
        name: "Ron",
        age: 19,
        group: "ССА-3-2",
        studID: 324615,
        typeLearning: "Заочная",
        task: ["БЖ", "МДК-03-02", "Право", "Психология"],
        cash: 0,
        isStudent: true
    },
    {
        name: "Damn",
        age: 37,
        groupKurator: "ИС-2-1",
        studID: 324615,
        typeLearning: "Заочная",
        task: ["БЖ", "МДК-03-02", "Право", "Психология"],
        cash: 0,
        isStudent: true
    }
];

if (college[0][isStudent] === true) {
    console.log("Студент")
}
else if (college[0][isStudent] === false) {
    console.log("Преподаватель")
}
