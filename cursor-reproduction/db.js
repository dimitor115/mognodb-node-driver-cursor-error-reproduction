"use strict";

const {MongoClient} = require("mongodb");

const client = new MongoClient(process.env.DBURL, {monitorCommands: true, connectTimeoutMS: 13000});

const clientPromise = client.connect();

client.on('commandStarted', (event) => console.debug(event));
client.on('commandSucceeded', (event) => console.debug(event));
client.on('commandFailed', (event) => console.debug(event));


module.exports = { clientPromise }