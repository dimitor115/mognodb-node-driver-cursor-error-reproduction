const {MongoClient} = require("mongodb");
const fs = require('fs');
const client = new MongoClient(process.env.DBURL);

(async function () {
  await client.connect();
  const database = client.db('tmp_reproduction');
  const articles = database.collection('articles');

  const mocks = JSON.parse(fs.readFileSync('mock_articles.json', 'utf8'))
  for (let i = 0; i < 100; i++) {
    const ops = mocks.map(it => ({insertOne: {document: {...it, index: i}}}))
    console.log(await articles.bulkWrite(ops));
  }
})()