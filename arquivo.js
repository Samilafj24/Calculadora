function insert(valor) {
  let txt = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = txt + valor;
}

function clean() {
  document.getElementById("resultado").innerHTML = "";
}
function back() {
  let resul = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = resul.substring(
    0,
    resul.length - 1
  );
}

function comfirma() {
  let resul = document.getElementById("resultado").innerHTML;
  if (resul) {
    document.getElementById("resultado").innerHTML = eval(resul);
  }
}
