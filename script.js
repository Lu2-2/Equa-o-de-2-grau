function calcular(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;

    // Aviso caso não tenha nada
    if(a, b, c == ""){
        alert('Insira um numero')
        return
    }

    // Delta
    const delta = parseInt((b**2)+(-4*a*c))
    alert("Δ: " + delta)

    // X1 e X2
    const raizDeDelta = Math.sqrt(delta)
    const x1 = parseFloat((-b+raizDeDelta)/(2*a))
    const x2 = parseFloat((-b-raizDeDelta)/(2*a))
    alert("x1: " + x1)
    alert("x2: " + x2)
}