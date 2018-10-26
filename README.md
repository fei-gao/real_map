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
2. Install dependencies for the client using the ```npm install``` command.
3. Go to server folder and install dependencies for the server using ```npm install``` command.
4. Under server directory, create ```.env``` file with your correct local information username and password, database, and port is 5432. You might have to create the database in psql before it can be accessed. For example, ```Create ROLE labber WITH LOGIN password 'labber';``` ```Create DATABASE final OWNER labber;```
5. Run migrations: ```knex migrate:latest```
6. Run the seed: ```node ./db/seed.js```, and open `http://localhost:8080/```
7. Start express server: ```npm start```
8. Start react server under root directory: ```npm start```
9. This app will be served at http://localhost:3000/
