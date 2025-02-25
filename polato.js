var n = 0 //parseint(prompt("0,1,1,2,3,5,8,13,21,34"));
var a = 0, b = 1, temp;

for (var i = 2; i <= n; i++ ){
    temp = a + b;
    a = b;
    b = temp;
}
alert("o numero na posicao" + n + "da sequencia de fibonacci é:" + (n == 0 ? 0: b));
var mateus = prompt("Digite algo: ")
alert(mateus)







