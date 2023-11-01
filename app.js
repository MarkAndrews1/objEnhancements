//1.
  function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName
    }
  }

//2.
  let favoriteNumber = 42;
  let instructorFavoriteNumber = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
  }

//3.
  let instructor = {
    firstName: "Colt",
    sayHi() {
        return "Hi!"
    },
    sayBye() {
        return this.firstName + "says bye!"
    }
  }
  
//4.
  function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise
        }
    }
  } 