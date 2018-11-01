#Property Evaluator
Property Evaluator is a real estate app that is valuable for potential property buyer who don't know enough about the property within City of Calgary. It resolves the information asymmetry on economic transactions and designed to give buyer enough information about addresses interested in real time including property values, community population, community crime rate, walkbility score and flood risk.

## Final Product
![Screenshot of landing](https://github.com/fei-gao/real_map/blob/master/doc/landing.png)
![Screenshot of table](https://github.com/fei-gao/real_map/blob/master/doc/table.png)
![Screenshot of chart](https://github.com/fei-gao/real_map/blob/master/doc/chart.png)
![Screenshot of crime_map](https://github.com/fei-gao/real_map/blob/master/doc/crime_map.png)
![Screenshot of api](https://github.com/fei-gao/real_map/blob/master/doc/api.png)
![Screenshot of tech_stack](https://github.com/fei-gao/real_map/blob/master/doc/tech_stack.png)


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
