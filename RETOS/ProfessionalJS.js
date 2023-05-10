class Professional {

    constructor(name, age, weight, height, isRetired, nationality, oscarsNumber, profession, photo) 
    {
      this.name = name;
  
      this.age = age;
  
      this.weight = weight;
  
      this.height = height;
  
      this.isRetired = isRetired;
  
      this.nationality = nationality;
  
      this.oscarsNumber = oscarsNumber;
  
      this.profession = profession;

      this.photo = photo; 
  
    }
  
    atributos() 
    {
      console.log(this.name);
  
      console.log(this.age);
  
      console.log(this.weight);
  
      console.log(this.height);
  
      console.log(this.isRetired);
  
      console.log(this.nationality);
  
      console.log(this.oscarsNumber);
  
      console.log(this.profession);
  
   }
  }

  const profesionales = [
    new Professional("Roberto", 18, 70, 160, false, "Español", 1, "Actor","https://images.generated.photos/Jp8a-enwOuoRaEDHy1oKmKEJOVfV5nzcDDaBiGRyyC8/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92Ml8w/OTUzMzU1LmpwZw.jpg" ),
    new Professional("Thomas", 27, 91, 184, false, "Español", 10, "Actor","https://static-s.aa-cdn.net/img/amazon/30600000277913/28d00a6e1b7ea2bbd249a47c39a5c0b9?v=1"),
    
    
  ]