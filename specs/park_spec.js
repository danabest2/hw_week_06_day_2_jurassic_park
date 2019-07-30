const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park
     let dinosaur_1
     let dinosaur_2
     let dinosaur_3
     let dinosaur_4

  beforeEach(function () {
    park = new Park('Omega',25)
         dinosaur_1 = new Dinosaur('t-rex', 'carnivore', 50);
         dinosaur_2 = new Dinosaur('Allosaurus','herbivore', 35);
         dinosaur_3 = new Dinosaur('Baryonyx', 'omnivore', 12);
         dinosaur_4 = new Dinosaur('Carnotaurus', 'carnivore', 60)
       });


  it('should have a name', function () {
    const actual = park.name;
    const expected = 'Omega'
    assert.strictEqual(actual,expected);
  });

  it('should have a ticket price', function(){
     const actual = park.ticketPrice;
     const expected = 25;
     assert.strictEqual(actual,expected);
   });

  it('should have a collection of dinosaurs', function(){
     const actual = park.dinosaursCollection.length;
     const expected = 0;
     assert.strictEqual(actual,expected);
  });

  it('should be able to add a dinosaur to its collection', function(){
     park.addDinosaur(dinosaur_1);
     const expected = true;
     const actual = park.insert_dinosaur(dinosaur_1)
     assert.strictEqual(actual, expected);
  });
  // it('should be able to add a dinosaur to its collection',function(){
  //     park.add_dino(dinosaur_1);
  //     const actual = park.has_dino(dinosaur_1)
  //     const expected = true;
  //     assert.strictEqual(actual,expected);


  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur_1);
    park.addDinosaur(dinosaur_2);
    park.remove_dinosaur(dinosaur_1);
   const actual = park.insert_dinosaur(dinosaur_1);
   const expected = false;
   assert.strictEqual(actual,expected);

 });


  xit('should be able to find the dinosaur that attracts the most visitors');

  xit('should be able to find all dinosaurs of a particular species');

  xit('should be able to remove all dinosaurs of a particular species');

});
