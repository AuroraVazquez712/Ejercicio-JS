/* 
 * Calculadora
 * 
 * La calculadora es un objeto con funciones estaticas que permiten al usuario:
 * 
 * 1. Sumar
 * 2. Restar
 * 3. Multiplicar
 * 4. Dividir
 * 
 * 10 de junio de 2025
*/
class Calculadora
{
    static Sumar(num_uno, num_dos)
    {
        if(typeof(num_uno) !== "number" || typeof(num_dos) !== "number")
            console.log("Los valores ingresados no son validos!");
        else return num_uno + num_dos;
    }

    static Restar(num_uno, num_dos)
    {
        if(typeof(num_uno) !== "number" || typeof(num_dos) !== "number")
            console.log("Los valores ingresados no son validos!");
        else return num_uno - num_dos;
    }

    static Multiplicar(num_uno, num_dos)
    {
        if(typeof(num_uno) !== "number" || typeof(num_dos) !== "number")
            console.log("Los valores ingresados no son validos!");
        else return num_uno * num_dos;
    }

    static Dividir(num_uno, num_dos)
    {
        if(typeof(num_uno) !== "number" || typeof(num_dos) !== "number" || num_dos == 0)
            console.log("Los valores ingresados no son validos!");
        else return num_uno / num_dos;
    }
}