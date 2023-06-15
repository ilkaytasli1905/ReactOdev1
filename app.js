import getData from './my-module.js';

getData(1).then(data=>console.log(data)).catch((err) => {   console.log(err);});