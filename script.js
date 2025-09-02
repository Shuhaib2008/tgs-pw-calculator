function appendValue(value) {
    document.getElementById("result").value += value;
  }
  
  function clearDisplay() {
    document.getElementById("result").value = "";
  }
  
  function backspace() {
    let currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.slice(0, -1);
  }
  
  function calculate() {
    let expression = document.getElementById("result").value;
  
    if (expression === "") {
      alert("Masukkan angka terlebih dahulu!");
      return;
    }
  
    // Cegah pembagian dengan 0
    if (expression.includes("/0")) {
      document.getElementById("result").value = "Error";
      return;
    }
  
    try {
      let result = eval(expression);
      document.getElementById("result").value = result;
    } catch (error) {
      document.getElementById("result").value = "Error";
    }
  }
