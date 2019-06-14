
exports.seed = function(knex, Promise) {
  return knex('actions')
  .del()
  .then(function() {
  
      // Inserts seed entries
      return knex('actions').insert([
        {
        project_id: "1",
        description: 'we need fresh clay for this project', 
        notes: 'she will have the beauty of Aphrodite, the wisdom of Athena, the strength of Hercules, and the speed of Hermes', 
         completed: 'false'},

        {
        project_id: "2",
        description: 'the fate of the world is in our hands', 
        notes: 'the 6 stones are, the Soul stone, Reality stone, Space stone, Time stone, Mind stone and Power stone', 
         completed: 'false'},

        {
        project_id: "2",
        description: 'we need spaceship stuff', 
        notes: 'we need people way smarter than us to complete this project', 
         completed: 'false'}
      ]);
    })
};
