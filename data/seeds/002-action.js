
exports.seed = function(knex, Promise) {
  
      // Inserts seed entries
      return knex('actions').insert([
        {description: 'we need fresh clay for this project', notes: 'she will have the beauty of Aphrodite, the wisdom of Athena, the strength of Hercules, and the speed of Hermes', project_id: 1, completed: 'false'},
        {description: 'the fate of the world is in our hands', notes: 'the 6 stones are, the Soul stone, Reality stone, Space stone, Time stone, Mind stone and Power stone', project_id: 2, completed: 'false'},
        {description: 'we need spaceship stuff', notes: 'we need people way smarter than us to complete this project', project_id: 3, completed: 'false'}
      ]);
};
