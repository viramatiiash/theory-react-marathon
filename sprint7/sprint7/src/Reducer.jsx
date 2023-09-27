import { useReducer } from 'react';

// ! Якщо є якась складна обробка при зміні стейту, не просто інкрементиться чи декрементиться, то бажано юзати useReducer(), тому що він дозволяє реалізувати цю хитру логіку.

// state - поточний стейт, dispatch - це функція dispatch, у яку ми можемо передавати наш action.

const [state, dispatch] = useReducer(reducer, initialState);