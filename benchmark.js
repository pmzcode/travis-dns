const siege = require('siege');

siege()
    .on(3000)
    .for(5).seconds
    .concurrent(1000)
    .get('http://localhost:3000/api/domain/')
    .attack();