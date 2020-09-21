'use strict';
const Queue = require('./queue');
class AnimalShelter {
    constructor() {
        this.dogs = new Queue();
        this.cats = new Queue();
    }
    enqueue(Animal) {
        switch (Animal) {
            case "dog":
                this.dogs.enqueue(Animal);
                return Animal;
            case "cat":
                this.cats.enqueue(Animal);
                return Animal;
            default:
                return null;
                                
        }

    }
    dequeue(pref) {
        switch (pref) {
            case "dog":
                return this.dogs.enqueue();
            case "cat":
                return this.cats.enqueue();
            default:
                return null;
        }
    }
}

module.exports = AnimalShelter;