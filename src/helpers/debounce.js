// Source: https://www.freecodecamp.org/news/javascript-debounce-example/

function debounce(func = () => {}, timeout = 0){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}


export default debounce;
