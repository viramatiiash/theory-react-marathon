// ! Classes - шаблон для створення однотипних об'єктів
class Student {
  constructor(name, course) {
    // constructor - це метод, у якому ініціалізуються властивості об'єкта
    this.name = name; // це потрібно, щоб властивості коректно додалися у наш клас. Це означає, що у проперті name цього об'єкта, буде додаватися значення, яке зайде на вході.
    this.course = course; // this це контекст, який вказує на поточний об'єкт
  }

  showName() {
    return this.name; // метод пишеться після методу конструктор
  }

  static studentType = 'magistr';

  get studentCourse() {
    return this.course; // З допомогою getter ми дістаємо якесь значення з класу
  }

  set studentCourse(value) {
    if (value > 6) {
      console.log(`${value} is wrong course!`);
      // return;
    }
    console.log(`This course is: ${this.course = value}`);
  }
}

// Робимо екземпляр класу вище:
const student = new Student('Petro', 2);
console.log(student); // Student {name: 'Petro', course: 2}
console.log(student.showName()); // Petro

const student1 = new Student('Sara', 4);
console.log(student1); // Student {name: 'Sara', course: 4}
console.log(student1.showName()); // Sara

console.log(student.studentType); // undefined - тому що до властивості static можна дістатися тільки в межах класу, а не через його екземпляр.
console.log(Student.studentType); // magistr . Ми звертаємося безпосередньо до класу Student
console.log(student.studentCourse); // 2 . Щоб викликати геттер не потрібно так як з функцією, чи методом писати дужки.

student.studentCourse = 7; // таким чином вносимо значення до сеттера
console.log(student.studentCourse);
student.studentCourse = 3; // таким чином вносимо значення до сеттера
console.log(student.studentCourse);

