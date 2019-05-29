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
            document.getElementById("radianes").value = valor*Math.PI/180;
        }
    if(id_elem=="radianes")
        {
            document.getElementById("grados").value = valor*180/Math.PI;
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