## Mongo db node driver cursor error reproduction 
### Steps to reproduce error
(This repo is using serverless framework to simplify the lambda deployment process)

1. Run `yarn` in root to install dependencies
2. Export connection string to your Atlas database in DBURL environment variable
3. Run `node setup.js` which will fill the database with example documents
4. Go to `cursor-reproduction` dir and run `yarn`
5. Make sure you have your AWS credentials configured
6. Put the database connection string into DBURL variable, 13 line of `serverless.yml` file
7. Run `yarn sls deploy`
8. After some time open the Cloud Watch and see error logs for some of the invocations