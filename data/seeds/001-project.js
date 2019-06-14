
exports.seed = function(knex, Promise) {
  return knex('projects').del()
  .then(function () {

  
  
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Clay Creation', 
        description: 'Recreate WonderWoman', 
        completed: 'false'},
        {name: 'Collect the 6 Infinity Stones', 
        description: 'Save the World from Thanos!', 
        completed: 'false'},
        {name: 'Build a Spaceship', 
        description: 'Build a ship and travel through space.', 
        completed: 'false'}
      
      ]);
    })
};
