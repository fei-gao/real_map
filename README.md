#Real Map v0.25.0

#Testing Address that have enough data
517 10 ST NE Calgary, AB, T2E 4M4
938 Rundle Crescent Northeast, Calgary, AB, Canada
204 18 St NW, Calgary, AB, Canada

##Address may be not work
3413 1 St Ne, Calgary

## Features
- React Native
- Build Cutom API query language
- generate and dowload report
- add distance calculation ...
- mobile response


## Bugs
- validate queries wont crash the search

## Styling focus
- fix search animations to be smoother

## Getting Started
1. Fork this repository, then clone your fork of this repository.
2. Under root directory, create ```.env```file, then add google map API key and walkscore API key.
3. Install dependencies for the client using the ```npm install``` command.
4. Go to server folder and install dependencies for the server using ```npm install``` command.
5. Under server directory, create ```.env``` file with your correct local information username and password, database, and port is 5432. You might have to create the database in psql before it can be accessed. For example, ```Create ROLE labber WITH LOGIN password 'labber';``` ```Create DATABASE final OWNER labber;```
6. Run migrations: ```knex migrate:latest```
7. Run the seed: ```node ./db/seed.js```. Then open http://localhost:8080/
* This file cannot be run with ```knex seed:run``` because axios makes http requests.
8. Start express server: ```npm start```
9. Start react server under root directory: ```npm start```
10. This app will be served at http://localhost:3000/
