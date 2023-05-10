class Movie {

    constructor(title, releaseYear, nacionality, genre, photo) 
    {
      this.title = title;

      this.releaseYear = releaseYear;

      this.actors = [];

      this.nacionality = nacionality;

      this.director = "";

      this.writer = "";

      this.language = "";

      this.plataforma = "";

      this.isMCU ="";

      this.mainCharacterName = "";

      this.producer = "";

      this.distributor = "";

      this.genre = genre;

      this.photo = photo;
    }

    atributosPeli() 
    {
        console.log(this.title);

        console.log(this.releaseYear);

        console.log(this.actors);

        console.log(this.nacionality);

        console.log(this.director);

        console.log(this.writer);

        console.log(this.language);

        console.log(this.plataforma);

        console.log(this.isMCU);

        console.log(this.mainCharacterName);

        console.log(this.producer);

        console.log(this.distributor);

        console.log(this.genre);
    }
}




let peliculas = [
 
  new Movie("La Clase", 2023, "España", "Drama", "https://4.bp.blogspot.com/-uaAui5bsmqI/UnmHMdC54CI/AAAAAAAAQM0/Y6oZqrs8Qoo/s1600/logoEdpuzzle.png"),
  new Movie("El Tren", 2022, "EEUU","Acción", "https://static.wixstatic.com/media/de4ab9_aa58a85d90cf44e78a56ce74e5173825~mv2.png/v1/fill/w_256,h_256,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/de4ab9_aa58a85d90cf44e78a56ce74e5173825~mv2.png" )
  
  
  ];


  

