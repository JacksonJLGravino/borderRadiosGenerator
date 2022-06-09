const corners = document.querySelectorAll('.border-corner'),
  c1 = document.querySelector('#corner-1'),
  c2 = document.querySelector('#corner-2'),
  c3 = document.querySelector('#corner-3'),
  c4 = document.querySelector('#corner-4'),
  hei = document.querySelector('#cornerHeight'),
  wid = document.querySelector('#cornerWidth')

const box = document.querySelector('.box')

const text = document.querySelector('.text')

for (let i = 0; i < corners.length; i++) {
  corners[i].addEventListener('change', () => {
    applyBorder()
  })
}

function applyBorder() {
  let value = `${c1.value}px ${c2.value}px ${c3.value}px ${c4.value}px`
  if (hei.value > 500) {
    hei.value = 500
  }
  if (wid.value > 500) {
    wid.value = 500
  }

  let heiP = `${hei.value}px`
  let widp = `${wid.value}px`
  box.style.borderRadius = value
  box.style.height = heiP
  box.style.width = widp
  showCode(c1.value, c2.value, c3.value, c4.value, hei.value, wid.value)
}

function showCode(c1, c2, c3, c4, hei, wid) {
  const valorElemeto = document.getElementById('textCSS')
  const textoUm = `border-radius: ${c1}px ${c2}px ${c3}px ${c4}px;`
  const textoDois = `height: ${hei}px;`
  const textoTres = `width: ${wid}px;`

  valorElemeto.innerHTML = textoUm + '\n' + textoDois + '\n' + textoTres
}
