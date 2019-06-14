
exports.seed = function(knex, Promise) {
  
      // Inserts seed entries
      return knex('table_name').insert([
        {name: 'Clay Creation', description: 'Recreate WonderWoman', completed: 'false'},
        {name: 'Collect the 6 Infinity Stones', description: 'Save the World from Thanos!', completed: 'false'},
        {name: 'Build a Spaceship', description: 'Build a ship and travel through space.', completed: 'false'}
      ]);
};
