const {MongoClient} = require("mongodb");
const client = new MongoClient(process.env.DBURL, {monitorCommands: true});

client.on('commandStarted', (event) => console.debug(event));
client.on('commandSucceeded', (event) => console.debug(event));
client.on('commandFailed', (event) => console.debug(event));

const FIVE_MINUTES = 1000 * 60 * 5;

(async function () {
  await client.connect();

  const database = client.db('tmp_reproduction');
  const articles = database.collection('articles');

  setInterval(async () => {
    const a = await articles.find({}).toArray();
    console.log(a.length)
  }, FIVE_MINUTES)
})()