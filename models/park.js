const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaursCollection = [];
}



Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaursCollection.push(dinosaur);
};

Park.prototype.remove_dinosaur = function(dinosaur){
  const deleteIndex = this.dinosaursCollection.indexOf(dinosaur);
  this.dinosaursCollection.splice(deleteIndex,1)
  return `${dinosaur.species} removed from Park`
};

Park.prototype.insert_dinosaur = function(dinosaur){
  return this.dinosaursCollection.includes(dinosaur);
};

/*note to self
The includes() method determines whether a string contains the characters of a specified string.

This method returns true if the string contains the characters, and false if not.

Note: The includes() method is case sensitive. */

module.exports = Park;
