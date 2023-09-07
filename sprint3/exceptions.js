// ! Помилка, яка зупиняє програму і виводить помилку в консоль часто називається exception

try {
  // code to run
} catch (error) {
  // handle error
} finally { // це необов'язкове значення
  // always run
}

try {
  console.log('Try block start'); // Try block start
  // ... Code without errors
  console.log('Try block ends'); // Try block ends
} catch (error) {
  console.log('Error has occurred!'); // -
} finally {
  console.log('Final block'); // Final block
}

try {
  console.log('Try block start'); // Try block start
  i += 3; 
  console.log('Try block ends'); // 
} catch (error) {
  console.log('Error has occurred!'); // Error has occurred!
} finally {
  console.log('Final block'); // Final block
} 

// Якщо у коді є синтаксична помилка, то вона більш пріорітетна, ніж наша в коді у catch, тому спершу її буде показувати у консолі. І тут не залежить, де ця синтаксична помилка була зроблена - на початку коду, чи вкінці.

// ! Error object - name, message, stack
try {
  getUser();
} catch (exception) {
  // exception - це об'єкт помилок
  console.log(exception.name); // ReferenceError
  console.log(exception.message); // getUser is not defined
  console.log(exception.stack); // ReferenceError: getUser is not defined + послідовність викликів
}



function enterPIN() {
  const pin = prompt('Enter PIN-number (max length 4):', '');
  if (pin.length > 4) {
    throw new Error('PIN length greater than 4 characters');
  }
  return pin;
}
// enterPIN();

try {
  const result = enterPIN();
} catch (exception) {
  console.log(exception.name); // із рядка throw new Error('PIN length greater than 4 characters') - це Error
  console.log(exception.message); // із рядка throw new Error('PIN length greater than 4 characters'); - це PIN length greater than 4 characters
}