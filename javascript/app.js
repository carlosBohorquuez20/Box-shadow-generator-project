//lado izquierdo
//active shadow
const activeShadow = document.querySelector(".active-shadow");
//inset shadow
const insetShadow = document.querySelector(".inset-shadow");
// variables de cajas de numeros izquierda
const numberHorizontalOffset = document.querySelector(".number-horizontal-offset");
const numberVerticalOffset = document.querySelector(".number-vertical-offset");
const numberBlurRadius = document.querySelector(".number-blur-radius");
const numberSpread = document.querySelector(".number-spread");
//cajas number shadow para for of
const numberShadow = document.querySelectorAll(".number-shadow");
//color shadow
const colorShadow = document.querySelector(".color-shadow");
// variables de rangos izquierda
const rangeHorizontalOffset = document.querySelector(".range-horizontal-offset");
const rangeVerticalOffset = document.querySelector(".range-vertical-offset");
const rangeBlurRadius = document.querySelector(".range-blur-radius");
const RangeSpreadRadius = document.querySelector(" .range-spread-radius");
//cubo medio
const cuadrado = document.querySelector(".square-middle");
//lado derecho variables
// variables de cajas de numeros derecha
const numberRadius = document.querySelector(".number-radius");
const numberHeight = document.querySelector(".number-height");
const numberWidth = document.querySelector(".number-width");
//color de cubo
const colorSquare = document.querySelector(".color-square");
// variables de rangos derecha 
const rangeBorderRadius = document.querySelector(".range-border-radius");
const rangeWidth = document.querySelector(".range-width");
const rangeHeight = document.querySelector(".range-height");
//remove boton
const removeBox = document.querySelector(".remove-box");
//Show code box shadow
const showCode = document.querySelector(".show-code");
const modal = document.querySelector(".modal");
const showBoxShadow = document.querySelector(".show-box-shadow");
const closeModal = document.querySelector(".close");
//lado izquierdo
//cajas de numeros con evento
// horizontal offset
rangeHorizontalOffset.addEventListener("input", (e) => {

  numberHorizontalOffset.value = e.target.value;
});

numberHorizontalOffset.addEventListener("input", (e) => {

  rangeHorizontalOffset.value = e.target.value;
});
//vertical offset
rangeVerticalOffset.addEventListener("input", (e) => {

  numberVerticalOffset.value = e.target.value;
});

numberVerticalOffset.addEventListener("input", (e) => {

  rangeVerticalOffset.value = e.target.value;
});
//blur radius
rangeBlurRadius.addEventListener("input", (e) => {

  numberBlurRadius.value = e.target.value;
});

numberBlurRadius.addEventListener("input", (e) => {

  rangeBlurRadius.value = e.target.value;
});
//spread radius
RangeSpreadRadius.addEventListener("input", (e) => {

  numberSpread.value = e.target.value;
});

numberSpread.addEventListener("input", (e) => {

  RangeSpreadRadius.value = e.target.value;
});
//Muestra el valor de la caja de numeros en el box shadow
for (number of numberShadow) {
  number.addEventListener("input", shadowNumber);
}

function shadowNumber() {
  cuadrado.style.boxShadow = `${numberHorizontalOffset.value}px ${numberVerticalOffset.value}px ${numberBlurRadius.value}px ${numberSpread.value}px ${colorShadow.value}`;
  showBoxShadow.innerHTML = `box-shadow: ${numberHorizontalOffset.value}px ${numberVerticalOffset.value}px ${numberBlurRadius.value}px ${numberSpread.value}px ${colorShadow.value}`;
}

//rangos izquierda con evento input guardando valores en el estilo de box shadow
rangeHorizontalOffset.addEventListener("input", (e) => {
  rangeHorizontalOffset.value = e.target.value;
  cuadrado.style.boxShadow = `${rangeHorizontalOffset.value}px ${rangeVerticalOffset.value}px ${rangeBlurRadius.value}px ${RangeSpreadRadius.value}px ${colorShadow.value}`;
  showBoxShadow.innerHTML = `box-shadow: ${rangeHorizontalOffset.value}px ${rangeVerticalOffset.value}px ${rangeBlurRadius.value}px ${RangeSpreadRadius.value}px ${colorShadow.value}`;
});

rangeVerticalOffset.addEventListener("input", (e) => {
  rangeVerticalOffset.value = e.target.value;
  cuadrado.style.boxShadow = `${rangeHorizontalOffset.value}px ${rangeVerticalOffset.value}px ${rangeBlurRadius.value}px ${RangeSpreadRadius.value}px ${colorShadow.value}`;
  showBoxShadow.innerHTML = `box-shadow: ${rangeHorizontalOffset.value}px ${rangeVerticalOffset.value}px ${rangeBlurRadius.value}px ${RangeSpreadRadius.value}px ${colorShadow.value}`;
});

rangeBlurRadius.addEventListener("input", (e) => {
  rangeBlurRadius.value = e.target.value;
  cuadrado.style.boxShadow = `${rangeHorizontalOffset.value}px ${rangeVerticalOffset.value}px ${rangeBlurRadius.value}px ${RangeSpreadRadius.value}px ${colorShadow.value}`;
  showBoxShadow.innerHTML = `box-shadow: ${rangeHorizontalOffset.value}px ${rangeVerticalOffset.value}px ${rangeBlurRadius.value}px ${RangeSpreadRadius.value}px ${colorShadow.value}`;
});

RangeSpreadRadius.addEventListener("input", (e) => {
  RangeSpreadRadius.value = e.target.value;
  cuadrado.style.boxShadow = `${rangeHorizontalOffset.value}px ${rangeVerticalOffset.value}px ${rangeBlurRadius.value}px ${RangeSpreadRadius.value}px ${colorShadow.value}`;
  showBoxShadow.innerHTML = `box-shadow: ${rangeHorizontalOffset.value}px ${rangeVerticalOffset.value}px ${rangeBlurRadius.value}px ${RangeSpreadRadius.value}px ${colorShadow.value}`;
});
//color shadow
colorShadow.addEventListener("input", (e) => {
  colorShadow.value = e.target.value;
  cuadrado.style.boxShadow = `${rangeHorizontalOffset.value}px ${rangeVerticalOffset.value}px ${rangeBlurRadius.value}px ${RangeSpreadRadius.value}px ${colorShadow.value}`;
  showBoxShadow.innerHTML = `box-shadow: ${rangeHorizontalOffset.value}px ${rangeVerticalOffset.value}px ${rangeBlurRadius.value}px ${RangeSpreadRadius.value}px ${colorShadow.value}`;
});
//lado derecho
//cajas de numeros con evento que almacena el valor en las cajas de numeros
//Border Radius
rangeBorderRadius.addEventListener("input", (e) => {

  numberRadius.value = e.target.value;
});

numberRadius.addEventListener("input", (e) => {
  rangeBorderRadius.value = e.target.value;
});
//Height
rangeHeight.addEventListener("input", (e) => {

  numberHeight.value = e.target.value;
});

numberHeight.addEventListener("input", (e) => {

  rangeHeight.value = e.target.value;
});
//width
rangeWidth.addEventListener("input", (e) => {

  numberWidth.value = e.target.value;
});

numberWidth.addEventListener("input", (e) => {

  rangeWidth.value = e.target.value;
});
//rangos derecha con evento
colorSquare.addEventListener("input", (e) => {
  cuadrado.style.backgroundColor = e.target.value;
});
//border radius
rangeBorderRadius.addEventListener("input", (e) => {
  cuadrado.style.borderRadius = `${e.target.value}px`;
});

numberRadius.addEventListener("input", (e) => {
  cuadrado.style.borderRadius = `${e.target.value}px`;
})
//height
rangeHeight.addEventListener("input", (e) => {
  cuadrado.style.height = `${e.target.value}px`;
});

numberHeight.addEventListener("input", (e) => {

  cuadrado.style.height = `${e.target.value}px`;
});
//width
rangeWidth.addEventListener("input", (e) => {
  cuadrado.style.width = `${e.target.value}px`;
});

numberWidth.addEventListener("input", (e) => {

  cuadrado.style.width = `${e.target.value}px`;
});
//show code
showCode.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add('modal-show');
});
closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove('modal-show');
});
//active shadow
activeShadow.addEventListener("change", (e) => {
  if (e.target.checked) {
    cuadrado.style.boxShadow = `${rangeHorizontalOffset.value}px ${rangeVerticalOffset.value}px ${rangeBlurRadius.value}px ${RangeSpreadRadius.value}px ${colorShadow.value}`;
  } else {
    cuadrado.style.boxShadow = `${0}px ${0}px ${0}px ${0}`;
  }
});
//inset shadow
insetShadow.addEventListener("change", (e) => {
  if (e.target.checked) {
    cuadrado.style.boxShadow = `inset ${rangeHorizontalOffset.value}px ${rangeVerticalOffset.value}px ${rangeBlurRadius.value}px ${RangeSpreadRadius.value}px ${colorShadow.value}`;
  } else {
    cuadrado.style.boxShadow = `${rangeHorizontalOffset.value}px ${rangeVerticalOffset.value}px ${rangeBlurRadius.value}px ${RangeSpreadRadius.value}px ${colorShadow.value}`;
  }
});
//remove
removeBox.addEventListener("click", remove);
//borra datos al actualizar pagina
window.addEventListener('DOMContentLoaded', remove);
//remove function
function remove() {
  //number remove izquierda
  numberHorizontalOffset.value = 0;
  numberVerticalOffset.value = 0;
  numberBlurRadius.value = 0;
  numberSpread.value = 0;
  colorShadow.value = 0;
  //range remove izquierda
  rangeHorizontalOffset.value = 0;
  rangeVerticalOffset.value = 0;
  rangeBlurRadius.value = 0;
  RangeSpreadRadius.value = 0;
  colorShadow.value = "rgba(0,0,0,0.9)";
  cuadrado.style.boxShadow = `${rangeHorizontalOffset.value}px ${rangeVerticalOffset.value}px ${rangeBlurRadius.value}px ${RangeSpreadRadius.value}px ${colorShadow.value}`;
  showBoxShadow.innerHTML = `box-shadow: ${rangeHorizontalOffset.value}px ${rangeVerticalOffset.value}px ${rangeBlurRadius.value}px ${RangeSpreadRadius.value}px ${colorShadow.value}`;
  //remove number derecha
  numberRadius.value = 0;
  numberHeight.value = 100;
  numberWidth.value = 100;
  cuadrado.style.backgroundColor = `#fca311`;
  cuadrado.style.borderRadius = `${numberRadius.value}px`;
  cuadrado.style.height = `${numberHeight.value}px`;
  cuadrado.style.width = `${numberWidth.value}px`;
  //remove range derecha
  rangeBorderRadius.value = 0;
  rangeHeight.value = 100;
  rangeWidth.value = 100;
  //cuadrado estilos con rango
  cuadrado.style.borderRadius = `${rangeBorderRadius.value}px`;
  cuadrado.style.height = `${rangeHeight.value}px`;
  cuadrado.style.width = `${rangeWidth.value}px`;
}
