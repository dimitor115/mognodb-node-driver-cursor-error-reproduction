"use strict";
const { clientPromise } = require("./db");

module.exports.hello = async (event) => {

  const client = await clientPromise;

  const database = client.db('tmp_reproduction');
  const articlesCollection = database.collection('articles');

  const articles = await articlesCollection.find({}).sort({date: -1}).toArray();
  console.log(articles.length)

  return JSON.stringify(articles)
};
