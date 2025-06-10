class Cancion{

    constructor(nombre, id, genero, artista, url)
    {
        this.nombre= nombre;
        this.id= id;
        this.genero= genero;
        this.artista=artista;
        this.url=url;
        this.reproduciendo = false; 
    }

    /*
            Deben de asignar a los atributos que faltan de la clase Cancion como corresponda
    */
//----------------------------------------------------------------------------------
    setNombre(nombre)
    {
        this.nombre = nombre;
    } 
    setID(id)
    {
        this.id=id;
    }  
    setGenero(genero)
    {
        this.genero=genero;
    }
    setArtista(artista)
    {
        this.artista=artista;
    }  
    setURL(url)
    {
        this.url=url;
    }
//---------------------------------------------------------------------
    getNombre()
    {
        return this.nombre;
    }
    getID()
    {
        return this.id;
    }
    getGenero()
    {
        return this.genero;
    }
    getArtista()
    {
        return this.artista;
    }
    getURL()
    {
        return this.url;
    }
    /*
        Deben de colocar los getters y setters que faltan
    */
//--------------------------------------------------------------------------------

    //Devuelve true si esta reproduciendo, false en otro caso
    estaReproduciendo()
    {
        return this.reproduciendo;   
    }

    //Cambia de no reproduciendo a reproduciendo
    play()
    {
        this.reproduciendo = true;
    }

    //Cambia de reproduciendo a no reproduciendo
    stop()
    {
        this.reproduciendo = false;
    }
}
//--------------------------------------------------------------------------------

class ListaDeReproduccion
{

    constructor(arreglo)
    {
        this.lista = arreglo
    }
    
    //Elimína el elemento del índice y lo devuelve
    pop(indice)
    {
        //Pista: Investiguen el método splice(inicio,numero_de_elementos_a_borrar) dentro del objeto Array
        return this.lista.splice(indice, 1);    
    
    }

    //Inserta un objeto canción dentro de la lista
    push(objeto)
    {
        this.lista.push (objeto);
    }

    //Devuelve la longitud de la lista
    getSize()
    {
        return this.lista.length
    }
    
    shuffle()
    {
       for (let i=0; i<this.lista.length; i++)
       {
        let j= Math.floor(Math.random() *(i+1));
        intercambiar (this.lista,i,j);
       }
        //Visto en clase
    }

    //Devuelve la lista
    get()
    {
        return this.lista;
        
    }

    fusionar(listaDeReproduccion)
    {
        return listaDeReproduccion.get().concat(this.lista)
        //Visto en clase
    }

}


function intercambiar(arreglo, indicea, indiceb)
{
    let c= arreglo[indicea]
    arreglo[indicea]= arreglo[indiceb]
    arreglo[indiceb]= c;
}


canciones = 
[ 
  new Cancion("Bohemian Rhapsody", 1, "Rock", "Queen", "https://www.youtube.com/watch?v=yk3prd8GER4"),
  new Cancion("Billie Jean", 2, "Pop", "Michael Jackson", "https://www.youtube.com/watch?v=DKFS2tDsZRY"),
  new Cancion("Still D.R.E.", 3, "Hip Hop", "Dr. Dre ft. Snoop Dogg", "https://www.youtube.com/watch?v=BaFF4OkLOss"),
  new Cancion("Wake Me Up", 4, "Electrónica", "Avicii", "https://www.youtube.com/watch?v=p_9pwEiOQ6E"),
  new Cancion("Kill Bill", 5, "R&B", "SZA", "https://www.youtube.com/watch?v=sk6rMb8OsQY"),
  new Cancion("Despacito", 6, "Pop", "Justin Beiber ft. Luis Fonsi & Daddy Yankee", "https://www.youtube.com/watch?v=TfkP5ubz1z4"),
  new Cancion("Take Me Home, Country Roads", 7, "Country", "John Denver", "https://www.youtube.com/watch?v=uu7j_xljCRY"),
  new Cancion("What a Wonderful World", 8, "Jazz", "Louis Armstrong", "https://www.youtube.com/watch?v=A3yCcXgbKrE"),
  new Cancion("The Thrill Is Gone", 9, "Blues", "B.B. King", "https://www.youtube.com/watch?v=HpP5ri5yv04"),
  new Cancion("The Other Side", 10, "Pop", "The Greatest Showman", "https://www.youtube.com/watch?v=-OX6pEeVVVo"),
  new Cancion("Domestic De Violence", 11, "J-pop", "ADO", "https://www.youtube.com/watch?v=Cdt-KtXCHCw&pp=ygUfZG9tZXN0aWMgZGUgdmlvbGVuY2UgYWRvIGx5cmljcw%3D%3D"),
  new Cancion("Hai Yorokonde", 12, "J-pop", "Kocchi no Kento", "https://www.youtube.com/watch?v=i62rtMpP3Es"),
  new Cancion("Pierdeme el respeto", 13, "Pop", "Playa Limbo", "https://www.youtube.com/watch?v=VjRmmCRXDhY&pp=ygUacGllcmRlbWUgZWwgcmVzcGV0byBseXJpY3M%3D"),
  new Cancion("All I want", 14, "Rock", "The Offspring", "https://www.youtube.com/watch?v=CzuolmEMIEk&pp=ygUfYWxsIGkgd2FudCB0aGUgb2Zmc3ByaW5nIGx5cmljcw%3D%3D"),
  new Cancion("Lueve sobre la ciudad", 15, "Pop", "The Bunkers", "https://www.youtube.com/watch?v=7a3kCFdsJ60&pp=ygUpbGx1ZXZlIHNvYnJlIGxhIGNpdWRhZCBsb3MgYnVua2VycyBseXJpY3M%3D"),
  new Cancion("Thunder Bringer", 16, "Rock", "Jorge Rivera-Herrans", "https://www.youtube.com/watch?v=3oZO_XE-MK4"),
  new Cancion("OTONABLUE", 17, "J-pop", "ATARASHII GAKKO!", "https://www.youtube.com/watch?v=7zS9gtMz0Uk&pp=ygUQb3RvbmFibHVlIGx5cmljcw%3D%3D"),
  new Cancion("Right Hand Man", 18, "Hip Hop", "Lin-Manuel Miranda", "https://www.youtube.com/watch?v=BG2BsgurwMg&pp=ygUVcmlnaHQgaGFuZCBtYW4gbHlyaWNz"),
  new Cancion("La Bachata", 19, "Bachata", "Manuel Turizo", "https://www.youtube.com/watch?v=nEd7mXPQ688&pp=ygURbGEgYmFjaGF0YSBseXJpY3M%3D"),
  new Cancion("Lamento Boliviano", 20, "Rock", "Los Enanitos Verdes", "https://www.youtube.com/watch?v=_dRsmc8vDN0&pp=ygUYbGFtZW50byBib2xpdmlhbm8gbHlyaWNz"),
]

//Probar codigo aqui

let lista2 = new ListaDeReproduccion([1,2,3,4,5,6,7,8,9,10])
console.log()
