const MAX_GB = 1000
let USED_GB = 815

const used_val = document.querySelector('#used')
const leaft_val = document.querySelector('#leaft')
const progress = document.querySelector('.progress .line')

progress.style.width = `${USED_GB * 100 / MAX_GB}%`

used_val.textContent = `${USED_GB}GB`
leaft_val.textContent = `${MAX_GB - USED_GB}`