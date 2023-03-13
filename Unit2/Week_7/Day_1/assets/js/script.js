//es.1
class User {
    constructor(firstName, lastName, age, location) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.location = location;
    }
  
    compareAge(other) {
      if (this.age > other.age) {
        return `${this.firstName} è più grande di ${other.firstName}`;
      } else if (this.age < other.age) {
        return `${this.firstName} è più piccolo di ${other.firstName}`;
      } else {
        return `${this.firstName} ha la stessa età di ${other.firstName}`;
      }
    }
  }

  let user1 = new User("Mario", "Rossi", 30, "Milano");
  let user2 = new User("Francesca", "Verdi", 25, "Roma");
  let user3 = new User("Filippo", "Bianchi", 27, "Firenze");


  const userForm = document.getElementById("users-form");
  const userList = document.getElementById("listUsers");
  
  userForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const ageInput = document.getElementById("age");
    const locationInput = document.getElementById("location");
    
    const newUser = new User(
      firstNameInput.value,
      lastNameInput.value,
      ageInput.value,
      locationInput.value
    );
    
    // Aggiungo alla lista
    const li = document.createElement("li");
    li.textContent = `${newUser.firstName} ${newUser.lastName}, ${newUser.age} y/o, from ${newUser.location}`;
    userList.appendChild(li);
  
    // Aggiungo delete
    const delBtn = document.createElement('button');
    delBtn.className = 'delBtn';
    delBtn.innerHTML = 'Delete';
    li.appendChild(delBtn);
  
      delBtn.addEventListener('click', function () {
          userList.removeChild(li);
      })
    
    userForm.reset();
  });

//es.2

class Pet {
    constructor(petName, ownerName, species, breed) {
      this.petName = petName;
      this.ownerName = ownerName;
      this.species = species;
      this.breed = breed;
    }
  
    sameOwner(otherPet) {
      return this.ownerName === otherPet.ownerName;
    }
  }

const petForm = document.getElementById("pet-form");
const petList = document.getElementById("list");

petForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const petNameInput = document.getElementById("pet-name");
  const ownerNameInput = document.getElementById("owner-name");
  const speciesInput = document.getElementById("species");
  const breedInput = document.getElementById("breed");
  
  const newPet = new Pet(
    petNameInput.value,
    ownerNameInput.value,
    speciesInput.value,
    breedInput.value
  );
  
  // Aggiungo alla lista
  const li = document.createElement("li");
  li.textContent = `${newPet.petName} (${newPet.species}, ${newPet.breed}) - owned by ${newPet.ownerName}`;
  petList.appendChild(li);

  // Aggiungo delete
  const delBtn = document.createElement('button');
  delBtn.className = 'delBtn';
  delBtn.innerHTML = 'Delete';
  li.appendChild(delBtn);

    delBtn.addEventListener('click', function () {
        list.removeChild(li);
    })
  
  petForm.reset();
});

