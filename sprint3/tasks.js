// 1.
function getPromise(delay, message) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(message);
    }, delay);
  });
}

// 2.
function add(x, y) {
  return new Promise((resolve, reject) => {
    if (typeof x === 'number' && typeof y === 'number') {
      resolve(x + y);
    }
    reject('Error!');
  });
}

// 3.
const { getUser, getUserProfile } = require('./Helper.js');

async function getAge() {
  const user = await getUser();
  const userProfile = await getUserProfile(user.id);
  return userProfile.age;
}

// 4.
function* take(n, iterable) {
  const newArr = iterable.splice(null, n);
  for (const i of newArr) {
    yield i;
  }
}

// 5.

const accountPatients = (beds) => {
  let patients = 0;

  function admit() {
    if (beds > 0) {
      patients++;
      beds--;
      console.log(`A patient was admitted, ${beds} beds are available`);
    } else {
      console.log('Can not admit a patient, no beds available');
    }
  }

  function discharge() {
    if (patients > 0) {
      patients--;
      beds++;
      console.log(`A patient was discharged, ${beds} beds are available`);
    } else {
      console.log('There are no patients to discharge');
    }
  }

  return [admit, discharge];
};

// 6.
function checkAdult(age) {
  try {
    if (age === undefined || age === null) {
      throw new Error('Please, enter your age');
    }
    if (age < 0) {
      throw new Error('Please, enter positive number');
    }
    if (typeof age !== 'number') {
      throw new Error('Please, enter number');
    }
    if (!Number.isInteger(age)) {
      throw new Error('Please, enter Integer number');
    }
    if (age < 18) {
      throw new Error('Access denied - you are too young!');
    }
    {
      console.log('Access allowed');
    }
  } catch (error) {
    console.log(`${error.name} ${error.message}`);
  } finally {
    console.log('Age verification complete');
  }
}