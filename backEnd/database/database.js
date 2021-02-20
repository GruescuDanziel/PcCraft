const mongoose = require('mongoose');

const db = mongoose.connection;

//mongoose.connect(process.env.MONGOURL, 
mongoose.connect("danziel:zzxxssdd123@cluster0.fx5ki.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
db.on('error', console.error.bind(console, 'connection error:'));

module.exports = db
