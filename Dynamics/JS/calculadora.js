

class Calculadora
{

    static suma(var1,var2)
    {
        let suma= var1+var2;
        return suma;
    }  

    static resta(var1,var2)
    {
        let resta= var1-var2;
        return resta;
    }

    static mulplicacion(var1,var2)
    {
       let multiplicacion= var1*var2;
       return multiplicacion;
    }

    static division(var1,var2)
    {
        let division= var1/var2;
        return division;
    }
}


const var1 =2;
const var2=10;

let resultados= new Array();

resultados.push(Calculadora.suma(var1,var2));
resultados.push(Calculadora.resta(var1,var2));
resultados.push(Calculadora.mulplicacion(var1,var2));
resultados.push(Calculadora.division(var1,var2));

console.log(resultados);


