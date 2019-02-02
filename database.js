const mongoose = require('mongoose');
const URI = 'mongodb://localhost/solveddatabase';


mongoose.connect(URI, {
    useNewUrlParser: true
})
    .then(db => console.log("db connected"))
        .catch(err => console.error(err));


module.exports =  mongoose;