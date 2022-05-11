let modeIsDark = false

const changeMode = ()=> {
  modeIsDark = !modeIsDark
  let body = document.querySelector("body");
  
  body.className = modeIsDark ? " dark-mode" : null
}