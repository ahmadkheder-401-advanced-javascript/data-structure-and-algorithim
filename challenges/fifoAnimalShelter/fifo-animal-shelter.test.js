'use strict';

const AnimalShelter = require('./fifo-animal-shelter');

describe('AnimalShelter Module', ()=>{
  it(' can enqueue into the queue ',()=>{
    let shelter = new AnimalShelter();
    expect(shelter.enqueue('dog')).not.toEqual(null);
    expect(shelter.enqueue('pet')).toEqual(null);
  });
  it(' can dequeue from the queue ',()=>{
    let shelter = new AnimalShelter();
    shelter.enqueue('dog');
    shelter.enqueue('cat');
    expect(shelter.dequeue('dog')).not.toEqual(null);
    expect(shelter.dequeue('pet')).toEqual(null);
  });

});
