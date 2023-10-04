interface StudentProps {
  name: string;
  rating?: number;
  isRegistered: boolean;
}

function Student(props: StudentProps) { // пропси можна задати деструктурованими {name, rating, isRegistered}: StudentProps
  return (
    <div>
      <div>name : {props.name}</div> 
      <div>rating : {props.rating}</div>
      <div>is registered : {props.isRegistered ? "yes" : "no"}</div>
    </div>
  ) // Якщо у аргументах використовуємо деструктуризацію, то у div props вже писати не треба
}

export default Student;
