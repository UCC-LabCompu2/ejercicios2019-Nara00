/**
 * Created by Agus on 6/5/2017.
 */

/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
function Sumar() {
    var n1 = document.getElementById('txtN1').value;
    var n2 = document.getElementById('txtN2').value;
    var suma = parseInt(n1) + parseInt(n2);
    alert("La suma es: "+suma)
}

function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');

        roundedRect(ctx,12,12,150,150,15);
        roundedRect(ctx,19,19,150,150,9);
        roundedRect(ctx,53,53,49,33,10);
        roundedRect(ctx,53,119,49,16,6);
        roundedRect(ctx,135,53,49,33,10);
        roundedRect(ctx,135,119,25,49,10);

        ctx.beginPath();
        ctx.arc(37,37,13,Math.PI/7,-Math.PI/7,false);
        ctx.lineTo(31,37);
        ctx.fill();

        for(var i=0;i<8;i++){
            ctx.fillRect(51+i*16,35,4,4);
        }

        for(i=0;i<6;i++){
            ctx.fillRect(115,51+i*16,4,4);
        }

        for(i=0;i<8;i++){
            ctx.fillRect(51+i*16,99,4,4);
        }

        ctx.beginPath();
        ctx.moveTo(83,116);
        ctx.lineTo(83,102);
        ctx.bezierCurveTo(83,94,89,88,97,88);
        ctx.bezierCurveTo(105,88,111,94,111,102);
        ctx.lineTo(111,116);
        ctx.lineTo(106.333,111.333);
        ctx.lineTo(101.666,116);
        ctx.lineTo(97,111.333);
        ctx.lineTo(92.333,116);
        ctx.lineTo(87.666,111.333);
        ctx.lineTo(83,116);
        ctx.fill();

        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.moveTo(91,96);
        ctx.bezierCurveTo(88,96,87,99,87,101);
        ctx.bezierCurveTo(87,103,88,106,91,106);
        ctx.bezierCurveTo(94,106,95,103,95,101);
        ctx.bezierCurveTo(95,99,94,96,91,96);
        ctx.moveTo(103,96);
        ctx.bezierCurveTo(100,96,99,99,99,101);
        ctx.bezierCurveTo(99,103,100,106,103,106);
        ctx.bezierCurveTo(106,106,107,103,107,101);
        ctx.bezierCurveTo(107,99,106,96,103,96);
        ctx.fill();

        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(101,102,2,0,Math.PI*2,true);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(89,102,2,0,Math.PI*2,true);
        ctx.fill();
    }
}

// A utility function to draw a rectangle with rounded corners.

function roundedRect(ctx,x,y,width,height,radius){
    ctx.beginPath();
    ctx.moveTo(x,y+radius);
    ctx.lineTo(x,y+height-radius);
    ctx.quadraticCurveTo(x,y+height,x+radius,y+height);
    ctx.lineTo(x+width-radius,y+height);
    ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
    ctx.lineTo(x+width,y+radius);
    ctx.quadraticCurveTo(x+width,y,x+width-radius,y);
    ctx.lineTo(x+radius,y);
    ctx.quadraticCurveTo(x,y,x,y+radius);
    ctx.stroke();
}

function suma() {
    var n1 = document.getElementById('numerador1').value;
    var n2 = document.getElementById('numerador2').value;
    var suma = parseInt(n1) + parseInt(n2);
    alert("La suma es: "+suma)
}

function suma()
{
   document.opeMat.sum_total.value =Number( document.opeMat.sum_num1.value) + Number(document.opeMat. sum_num2.value);
}

function resta()
{
    document.opeMat.res_total.value= Number(document.opeMat.res_num1.value)-Number(document.opeMat. res_num2.value);
}

function multiplicacion()
{
    document.opeMat.mul_total.value= Number(document.opeMat.mul_num1.value)*Number(document.opeMat.mul_num2.value);
}

function dividir()
{
    document.opeMat.div_total.value = Number(document.opeMat.div_num1.value) / Number(document.opeMat.div_num2.value);
}

function conv_Grados_Rad(id_elem, valor)
{
    if(id_elem=="grados")
        {
            document.getElementById('radianes').value = valor*Math.PI/180;
        }
    if(id_elem=="radianes")
        {
            document.getElementById('grados').value = valor*180/Math.PI;
        }
}

function mostrar_ocultar(id_elem)
{
    if(id_elem=="ocultarDiv"){
        document.getElementById("unDiv").style.display= 'none';
    }

    if(id_elem=="mostrarDiv"){
        document.getElementById("unDiv").style.display= 'block';
    }
}

function Bandejas()
{
    PizzaB1();
    PizzaB2();
    PizzaBR();
}

function Nrand()
{
    document.getElementById('N1').value = Math.floor(Math.random() * (7 - 1)) + 1;
    document.getElementById('N2').value = "";
    document.getElementById('Nt').value = "";
    PizzaB1();
    /*PizzaB(SegSumando);
    PizzaB(Resultado);*/
}

function Verif() {
    var n1 = document.getElementById('N1').value;
    var n2 = document.getElementById('N2').value;
    var nt = document.getElementById('Nt').value;
    var result = parseInt(nt) - parseInt(n2);
    if (n1==result)
    {
        alert("Bien hecho!")
    }
    else{
        var pregunta = confirm("¿Deseas repasar la teoría?")
        if (pregunta){
            alert("Te envío allí rápidamente")
            window.location = "https://ucc-labcompu2.github.io/proyectos2019-Dominguez-Nanfara/";
        }
        else{
            alert("Tu puedes!")
        }
    }}


function PizzaB1()
{   var canvas = document.getElementById('PrimSumando');
    var ctx = canvas.getContext('2d');
    var imgbandeja = new Image();
    imgbandeja.src = 'images/auto.png';
    ctx.drawImage(imgbandeja, 0, 0, 350, 350,0,0,524,262);
}

function PizzaB2()
{   var canvas = document.getElementById('SegSumando');
    var ctx = canvas.getContext('2d');
    var imgbandeja = new Image();
    imgbandeja.src = 'images/auto.png';
    ctx.drawImage(imgbandeja, 0, 0, 350, 350,0,0,524,262);
}

function PizzaBR()
{   var canvas = document.getElementById('Resultado');
    var ctx = canvas.getContext('2d');
    var imgbandeja = new Image();
    imgbandeja.src = 'images/auto.png';
    ctx.drawImage(imgbandeja, 0, 0, 350, 350,0,0,524,262);
}