const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomThoughts, getRandomName } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await User.deleteMany({});
    await Thought.deleteMany({});

    const thoughts = getRandomThoughts(30);

    // create 20 random users
    const users = [];

    for (let i = 0; i < 20; i++) {
        const username = getRandomName();
        const email = `${username.replace(/\s+/g,'').toLowerCase()}@gmail.com`;
    
        users.push({
          username,
          email
        });
    };

    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);

    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete');
    process.exit(0);
})