// ! while
var students = ['Vira', 'Myshko', 'Yurii', 'Ira', 'Oleg'];

while (students.length > 0) {
  let student = students.pop(); // видаляти по студенту і ретурнити кожного, поки вони не закінчаться
  greetStudent(student);
}