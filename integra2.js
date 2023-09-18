alert("Ejercicio integrador 2");
alert("Esta es la trivia de la primavera");
nom=prompt("Esribe o ingresa tu nombre");
rpt1=prompt("¿Cómo se llama el primer día de la primavera?\nA:Primer día de primavera\nB: Equinoccio de primavera\nC: Equinoccio de invierno");
if (rpt1=="A"){
    rpt1=0
}
else if(rpt1=="B"){
    rpt1=25
}
else if(rpt1=="C"){
    rpt1=0
}
else{
    alert(nom, "no es una opinión valida")
}
rpt2=prompt("¿Qué sucede en el polo norte en primavera\nA: 6 meses de luz\nB: 6 meses de oscuridad\nC: Seis meses alternado");
if (rpt2=="A"){
    rpt2=0
}
else if(rpt2=="B"){
    rpt2=25
}
else if(rpt2=="C"){
    rpt2=0
}
else{
    alert(nom, "no es una opinión valida")
}
total=rpt1+rpt2
if(total>=25){
    document.write(nom, ", sabes de primavera")
}
else if (total<25){
    document.write(nom, ", no sabes mucho de primavera")
}
