const corners = document.querySelectorAll('.change-box'),
  c1 = document.querySelector('#corner-1'),
  c2 = document.querySelector('#corner-2'),
  c3 = document.querySelector('#corner-3'),
  c4 = document.querySelector('#corner-4'),
  height = document.querySelector('#changeHeight'),
  width = document.querySelector('#changeWidth')

const box = document.querySelector('.box')

for (let i = 0; i < corners.length; i++) {
  corners[i].addEventListener('change', () => {
    applyBorder()
  })
}

function applyBorder() {
  let value = `${c1.value}px ${c2.value}px ${c3.value}px ${c4.value}px`
  if (height.value > 500) {
    height.value = 500
  }
  if (width.value > 500) {
    width.value = 500
  }

  let heightNew = `${height.value}px`
  let widthNew = `${width.value}px`
  box.style.borderRadius = value
  box.style.height = heightNew
  box.style.width = widthNew
  showCode(c1.value, c2.value, c3.value, c4.value, height.value, width.value)
}

function showCode(c1, c2, c3, c4, height, width) {
  const valorElemeto = document.getElementById('textCSS')
  const textOne = `border-radius: ${c1}px ${c2}px ${c3}px ${c4}px;`
  const textTwo = `height: ${height}px;`
  const textThree = `width: ${width}px;`

  valorElemeto.innerHTML = textOne + '\n' + textTwo + '\n' + textThree
}
