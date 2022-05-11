const entrada=document.querySelector(".input_text1");
const salida=document.querySelector(".input_text2");

function botonEncriptar(){
    const txtEncr = encrip(entrada.value);
    salida.value = txtEncr;
}
function encrip(strPara){
    let patron = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    strPara = strPara.toLowerCase();

    for(let i=0;i<patron.length;i++){
        if(strPara.includes(patron[i][0])){
            strPara = strPara.replaceAll(patron[i][0],patron[i][1]);
        }
    } 
    var mostrar=document.getElementById("area2");
    if (mostrar.style.display==="none"){
        mostrar.style.display="block";
    }
    else{
        mostrar.style.display="none";
    }   
    return strPara;    
}
function botonDesencriptar(){
    const txtParaDescrepitar=descencrip(salida.value);
    entrada.value=txtParaDescrepitar;
}
function descencrip(strParaDesencip){
    let patron1 = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    for(let i=0;i<patron1.length;i++){
        if(strParaDesencip.includes(patron1[i][0])){
            strParaDesencip = strParaDesencip.replaceAll(patron1[i][0],patron1[i][1])
        }
    }
return strParaDesencip;
}
function copiar(){
    let copyText = document.querySelector(".input_text2");
    copyText.select();    
    alert("Mensaje copiado!");    
}


