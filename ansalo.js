document.getElementById("n1").addEventListener("click", n1);
document.getElementById("n2").addEventListener("click", n2);
document.getElementById("n3").addEventListener("click", n3);
document.getElementById("n4").addEventListener("click", n4);
document.getElementById("n5").addEventListener("click", n5);
document.getElementById("n6").addEventListener("click", n6);
document.getElementById("n7").addEventListener("click", n7);
document.getElementById("n8").addEventListener("click", n8);
document.getElementById("n9").addEventListener("click", n9);
document.getElementById("n0").addEventListener("click", n0);
document.getElementById("reset").addEventListener("click", reset);
const teclado = document.querySelector("#teclado");

teclado.addEventListener("click", (e) => {
  const cualTecla = e.target;

  let resultado = document.getElementById("inputNumeros");
  let resultadoLetras = document.getElementById("inputLetras");

  if (!cualTecla.matches("button")) {
    return;
  }
  if (
    cualTecla.classList.contains("btn") &&
    resultado.textContent === "1234567890" &&
    resultadoLetras.textContent === "ABCDEFGHIJ"
  ) {
    swal("Terminaste, pulsa RESET");
  }
});

function n1() {
  let resultado = document.getElementById("inputNumeros");
  let resultadoLetras = document.getElementById("inputLetras");
  let tecla = document.getElementById("n1");
  let teclaValor = (tecla.value = "1");
  let teclaLetra = (tecla.value = "A");

  if (resultado.textContent == "1234567890") {
    if (resultadoLetras.textContent == "A") {
      swal("La A ya está, sigue la B");
    } else {
      resultadoLetras.textContent += teclaLetra;
    }
  } else if (resultado.textContent == "") {
    resultado.textContent += teclaValor;
  } else if (resultado.textContent == "1") {
    swal("el 1 ya está, sigue el 2");
  }
}

function n2() {
  let resultado = document.getElementById("inputNumeros");
  let tecla = document.getElementById("n2");
  let teclaValor = (tecla.value = "2");
  let resultadoLetras = document.getElementById("inputLetras");
  let teclaLetra = (tecla.value = "B");

  if (resultado.textContent == "1234567890") {
    if (resultadoLetras.textContent == "A") {
      resultadoLetras.textContent += teclaLetra;
    } else if (resultadoLetras.textContent == "") {
      swal("La primera letra es la A");
    } else {
      swal("la B ya está sigue la C");
    }
  } else if (resultado.textContent == "") {
    swal("El primer número es el 1");
  } else if (resultado.textContent == "1") {
    resultado.textContent += teclaValor;
  } else {
    swal("el 2 ya está, sigue el 3");
  }
}

function n3() {
  let resultado = document.getElementById("inputNumeros");
  let tecla = document.getElementById("n3");
  let teclaValor = (tecla.value = "3");
  let resultadoLetras = document.getElementById("inputLetras");
  let teclaLetra = (tecla.value = "C");

  if (resultado.textContent == "1234567890") {
    if (resultadoLetras.textContent == "AB") {
      resultadoLetras.textContent += teclaLetra;
    } else if (resultadoLetras.textContent == "") {
      swal("La primera letra es la A");
    } else if (resultadoLetras.textContent !== "AB") {
      swal("Siga la secuencia");
    } else {
      swal("la B ya está sigue la C");
    }
  } else if (resultado.textContent == "") {
    swal("El primer número es el 1");
  } else if (resultado.textContent !== "12") {
    swal("Siga la secuencia");
  } else if (resultado.textContent == "12") {
    resultado.textContent += teclaValor;
  } else {
    swal("el 3 ya está, sigue el 4");
  }
}

function n4() {
  let resultado = document.getElementById("inputNumeros");
  let tecla = document.getElementById("n4");
  let teclaValor = (tecla.value = "4");
  let resultadoLetras = document.getElementById("inputLetras");
  let teclaLetra = (tecla.value = "D");

  if (resultado.textContent == "1234567890") {
    if (resultadoLetras.textContent == "ABC") {
      resultadoLetras.textContent += teclaLetra;
    } else if (resultadoLetras.textContent == "") {
      swal("La primera letra es la A");
    } else if (resultadoLetras.textContent !== "ABC") {
      swal("Siga la secuencia");
    } else {
      swal("la C ya está sigue la D");
    }
  } else if (resultado.textContent == "") {
    swal("El primer número es el 1");
  } else if (resultado.textContent !== "123") {
    swal("Siga la secuencia");
  } else if (resultado.textContent == "123") {
    resultado.textContent += teclaValor;
  } else {
    swal("el 4 ya está, sigue el 5");
  }
}

function n5() {
  let resultado = document.getElementById("inputNumeros");
  let tecla = document.getElementById("n5");
  let teclaValor = (tecla.value = "5");
  let resultadoLetras = document.getElementById("inputLetras");
  let teclaLetra = (tecla.value = "E");

  if (resultado.textContent == "1234567890") {
    if (resultadoLetras.textContent == "ABCD") {
      resultadoLetras.textContent += teclaLetra;
    } else if (resultadoLetras.textContent == "") {
      swal("La primera letra es la A");
    } else if (resultadoLetras.textContent !== "ABCD") {
      swal("Siga la secuencia");
    } else {
      swal("la E ya está sigue la F");
    }
  } else if (resultado.textContent == "") {
    swal("El primer número es el 1");
  } else if (resultado.textContent !== "1234") {
    swal("Siga la secuencia");
  } else if (resultado.textContent == "1234") {
    resultado.textContent += teclaValor;
  } else {
    swal("el 5 ya está, sigue el 6");
  }
}

function n6() {
  let resultado = document.getElementById("inputNumeros");
  let tecla = document.getElementById("n6");
  let teclaValor = (tecla.value = "6");
  let resultadoLetras = document.getElementById("inputLetras");
  let teclaLetra = (tecla.value = "F");

  if (resultado.textContent == "1234567890") {
    if (resultadoLetras.textContent == "ABCDE") {
      resultadoLetras.textContent += teclaLetra;
    } else if (resultadoLetras.textContent == "") {
      swal("La primera letra es la A");
    } else if (resultadoLetras.textContent !== "ABCDE") {
      swal("Siga la secuencia");
    } else {
      swal("la F ya está sigue la G");
    }
  } else if (resultado.textContent == "") {
    swal("El primer número es el 1");
  } else if (resultado.textContent !== "12345") {
    swal("Siga la secuencia");
  } else if (resultado.textContent == "12345") {
    resultado.textContent += teclaValor;
  } else {
    swal("el 6 ya está, sigue el 7");
  }
}

function n7() {
  let resultado = document.getElementById("inputNumeros");
  let tecla = document.getElementById("n7");
  let teclaValor = (tecla.value = "7");
  let resultadoLetras = document.getElementById("inputLetras");
  let teclaLetra = (tecla.value = "G");

  if (resultado.textContent == "1234567890") {
    if (resultadoLetras.textContent == "ABCDEF") {
      resultadoLetras.textContent += teclaLetra;
    } else if (resultadoLetras.textContent == "") {
      swal("La primera letra es la A");
    } else if (resultadoLetras.textContent !== "ABCDEF") {
      swal("Siga la secuencia");
    } else {
      swal("la G ya está sigue la H");
    }
  } else if (resultado.textContent == "") {
    swal("El primer número es el 1");
  } else if (resultado.textContent !== "123456") {
    swal("Siga la secuencia");
  } else if (resultado.textContent == "123456") {
    resultado.textContent += teclaValor;
  } else {
    swal("el 7 ya está, sigue el 8");
  }
}

function n8() {
  let resultado = document.getElementById("inputNumeros");
  let tecla = document.getElementById("n8");
  let teclaValor = (tecla.value = "8");
  let resultadoLetras = document.getElementById("inputLetras");
  let teclaLetra = (tecla.value = "H");

  if (resultado.textContent == "1234567890") {
    if (resultadoLetras.textContent == "ABCDEFG") {
      resultadoLetras.textContent += teclaLetra;
    } else if (resultadoLetras.textContent == "") {
      swal("La primera letra es la A");
    } else if (resultadoLetras.textContent !== "ABCDEFG") {
      swal("Siga la secuencia");
    } else {
      swal("la H ya está sigue la I");
    }
  } else if (resultado.textContent == "") {
    swal("El primer número es el 1");
  } else if (resultado.textContent !== "1234567") {
    swal("Siga la secuencia");
  } else if (resultado.textContent == "1234567") {
    resultado.textContent += teclaValor;
  } else {
    swal("el 8 ya está, sigue el 9");
  }
}

function n9() {
  let resultado = document.getElementById("inputNumeros");
  let tecla = document.getElementById("n9");
  let teclaValor = (tecla.value = "9");
  let resultadoLetras = document.getElementById("inputLetras");
  let teclaLetra = (tecla.value = "I");

  if (resultado.textContent == "1234567890") {
    if (resultadoLetras.textContent == "ABCDEFGH") {
      resultadoLetras.textContent += teclaLetra;
    } else if (resultadoLetras.textContent == "") {
      swal("La primera letra es la A");
    } else if (resultadoLetras.textContent !== "ABCDEFGH") {
      swal("Siga la secuencia");
    } else {
      swal("la I ya está sigue la J");
    }
  } else if (resultado.textContent == "") {
    swal("El primer número es el 1");
  } else if (resultado.textContent !== "12345678") {
    swal("Siga la secuencia");
  } else if (resultado.textContent == "12345678") {
    resultado.textContent += teclaValor;
  } else {
    swal("el 9 ya está, sigue el 0");
  }
}

function n0() {
  let resultado = document.getElementById("inputNumeros");
  let tecla = document.getElementById("n0");
  let teclaValor = (tecla.value = "0");
  let resultadoLetras = document.getElementById("inputLetras");
  let teclaLetra = (tecla.value = "J");

  if (resultado.textContent == "1234567890") {
    if (resultadoLetras.textContent == "ABCDEFGHI") {
      resultadoLetras.textContent += teclaLetra;
    } else if (resultadoLetras.textContent == "") {
      swal("La primera letra es la A");
    } else if (resultadoLetras.textContent !== "ABCDEFGHI") {
      swal("Siga la secuencia");
    } else {
      swal("la J ya está.");
    }
  } else if (resultado.textContent == "") {
    swal("El primer número es el 1");
  } else if (resultado.textContent !== "123456789") {
    swal("Siga la secuencia");
  } else if (resultado.textContent == "123456789") {
    resultado.textContent += teclaValor;
  } else {
    swal("el 0 ya está");
  }
}

function reset() {
  let resultado = document.getElementById("inputNumeros");
  resultado.textContent = "";
  let resultadoLetras = document.getElementById("inputLetras");
  resultadoLetras.textContent = "";
}

let darkmode = document.getElementById("darkmode");

darkmode.addEventListener("click", () => {
  document.querySelector(".ansalo").classList.add("dark");
  document.querySelectorAll(".screen").forEach((el) => {
    el.classList.add("dark");
  });
  document.querySelectorAll(".btn").forEach((el) => {
    el.classList.add("dark");
  });

  localStorage.setItem("tema", "dark");
});

const temaEnStorage = () => {
  const temaGuardado = localStorage.getItem("tema");
  if (temaGuardado == "dark") {
    document.querySelector(".ansalo").classList.add("dark");
    document.querySelectorAll(".screen").forEach((el) => {
      el.classList.add("dark");
    });
    document.querySelectorAll(".btn").forEach((el) => {
      el.classList.add("dark");
    });
  } else if (temaGuardado == "retro") {
    document.querySelector(".ansalo").classList.remove("dark");
    document.querySelectorAll(".screen").forEach((el) => {
      el.classList.remove("dark");
    });
    document.querySelectorAll(".btn").forEach((el) => {
      el.classList.remove("dark");
    });
  }
};

temaEnStorage();

let retromode = document.getElementById("retromode");

retromode.addEventListener("click", () => {
  document.querySelector(".ansalo").classList.remove("dark");
  document.querySelectorAll(".screen").forEach((el) => {
    el.classList.remove("dark");
  });
  document.querySelectorAll(".btn").forEach((el) => {
    el.classList.remove("dark");
  });
  localStorage.setItem("tema", "retro");
});
