let exemploArrayOriginal1 = [20, 25, 30, 35, 40, 45]
let exemploArrayOriginal2 = ["batata", "cenoura", "moranga", "tomate"]
let exemploArrayOriginal3 = ["cavalo", 2, 3>5, "gato"]


let exemploArrayOriginal1Copia = exemploArrayOriginal1.slice()
let exemploArrayOriginal2Copia = exemploArrayOriginal2.slice()
let exemploArrayOriginal3Copia = exemploArrayOriginal3.slice()

exemploArrayOriginal1Copia.unshift(10)
console.log(exemploArrayOriginal1)
console.log(exemploArrayOriginal1Copia)

exemploArrayOriginal2Copia.pop()
console.log(exemploArrayOriginal2)
console.log(exemploArrayOriginal2Copia)

exemploArrayOriginal3Copia.splice(1, 1)
console.log(exemploArrayOriginal3)
console.log(exemploArrayOriginal3Copia)

