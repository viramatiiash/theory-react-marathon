// ! AXIOS GLOBALS
axios.defaults.headers.common['X-Auth-Token'] =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'; // після логіну отримуємо токен. Його буде показувати всюди, якщо ми натиснемо на будь-яку кнопку

// ! GET REQUEST
function getTodos() {
  // console.log('GET Request');
  // axios({
  //   method: 'get',
  //   url: 'https://jsonplaceholder.typicode.com/todos', // це поверне проміс, тому треба метод .then()
  //   params: {
  //     _limit: 5,
  //   },
  // }) // ! код вище можна скоротити кодом нижче:
  axios
    // .get('https://jsonplaceholder.typicode.com/todos?_limit=5') // можна навіть не використовувати метод .get(), тому що він іде у axios по дефолту

    // ? Можна поставити timeout, в межах якого має вібутися request, якщо він не встигне відбутися, то видасть помилку 404
    .get('https://jsonplaceholder.typicode.com/todos?_limit=5', {timeout: 5000})

    // .then(res => console.log(res.data)) // стукаємся до ключа data у об'єкті res. У адресному рядку, ми можемо лімітувати к-ть даних, яких відобразиться на сторінці: https://jsonplaceholder.typicode.com/todos?_limit=5
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

// ! POST REQUEST
function addTodo() {
  // console.log('POST Request');
  // axios({
  //   method: 'post', // тут ми вже додаємо дані на сервер
  //   url: 'https://jsonplaceholder.typicode.com/todos', // це поверне проміс, тому треба метод .then()
  //   data: {
  //     // сюди нам вже треба передати дані, які ми будемо передавати на сервер
  //     title: 'New Todo',
  //     completed: false,
  //   },
  // })
  // ! Знову скорочуємо код вище кодом нижче:
  axios
    .post('https://jsonplaceholder.typicode.com/todos', {
      title: 'New Todo',
      completed: false,
    })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

// ! PUT/PATCH REQUEST
function updateTodo() {
  // console.log('PUT/PATCH Request');

  axios
    .put('https://jsonplaceholder.typicode.com/todos/1', {
      // .put() - замінюємо дані за ідентифікатором і тоді змінюється все - id: 201, title: 'Updated Todo', completed: true, а userId взагалі немає. Якщо нам потрібно замінити тільки ті дані, які ми прописуємо, але не змінювати інші, тоді ми використовуємо метод .patch().
      // ...todo/1 - означає, що ми оновлюємо тудушку із id 1.
      title: 'Updated Todo',
      completed: true,
    }) // другим параметром ідуть дані, які мають з'явитися замість даних, що були під id 1
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

// ! DELETE REQUEST
function removeTodo() {
  // console.log('DELETE Request');
  axios
    .delete('https://jsonplaceholder.typicode.com/todos/1') // нам не потрібно додавати якусь інформацію, тому що ми видаляємо за id
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

// ! SIMULTANEOUS DATA
function getData() {
  // console.log('Simultaneous Request');
  axios
    .all([
      // .all() - дістає всі get-запити, а не лише один
      axios.get('https://jsonplaceholder.typicode.com/todos'),
      axios.get('https://jsonplaceholder.typicode.com/posts'),
    ])
    // .then((res) => {
    //   console.log(res[0]);
    //   console.log(res[1]);
    //   showOutput(res[1]);
    // })
    // ! Код вище можна скоротити до коду нижче:
    .then(axios.spread((todos, posts) => showOutput(posts))) // за допомогою методу spread() можна не використовувати індекси, а вказати аргументи у функцію і використати їх у тому ж порядку, що і get-запити.
    .catch((err) => console.error(err));
}

// ! CUSTOM HEADERS
function customHeaders() {
  const config = {
    // спершу треба авторизуватися, таким чином ми додаємо токен
    headers: {
      'Content-Type': 'application/json',
      Autorization: 'sometoken',
    },
  };
  axios
    .post(
      'https://jsonplaceholder.typicode.com/todos',
      {
        title: 'New Todo',
        completed: false,
      },
      config
    )
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

// ! TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  // console.log('Transform Response');

  const options = {
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/todos',
    data: {
      title: 'Hello World',
    },
    transformResponse: axios.defaults.transformResponse.concat((data) => {
      data.title = data.title.toUpperCase(); // Таким чином ми міняємо дані, тобто, трансформуємо їх
      return data;
    }),
  };

  axios(options).then((res) => showOutput(res));
}

// ! ERROR HANDLING
function errorHandling() {
  // console.log('Error Handling');
  axios
    // .get('https://jsonplaceholder.typicode.com/todoss') // ? todoss видасть 404

    // ? Можна також визначити коди статусів, які будуть приходити
    .get('https://jsonplaceholder.typicode.com/todoss', {
      validateStatus: function (status) {
        return status < 500; // Reject only if status is greater or equal to 500
      }
    })

    .then((res) => showOutput(res))
    .catch((err) => {
      if (err.response) {
        // Server responded with a status other than 200 range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else if (err.request) {
        // Request was made but no response
        console.error(err.request);
      } else {
        console.error(err.message);
      }
    });
}

// ! CANCEL TOKEN - such way we can cancel request on a fly
function cancelToken() {
  // console.log('Cancel Token');
  const source = axios.cancelToken.source();

  axios
    .get('https://jsonplaceholder.typicode.com/todos', {
      cancelToken: source.token,
    })
    .then((res) => showOutput(res))
    .catch(thrown => {
      if (axios.isCancel(thrown)) {
        console.log('Request canceled', thrown.message);
      }
    })
}

// ! INTERCEPTING REQUESTS & RESPONSES - loader
axios.interceptors.request.use(
  (config) => {
    console.log(
      `${config.method.toUpperCase()} request sent to ${
        config.url
      } at ${new Date().getTime()}`
    );
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ! AXIOS INSTANCES
const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// axiosInstance.get('/comments').then(res => showOutput(res));

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
