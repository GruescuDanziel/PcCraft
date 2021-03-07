const mongoose = require('mongoose');
const db       = mongoose.connection;

mongoose.connect(process.env.MONGOURL,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
db.on('error', console.error.bind(console, 'connection error:'));

module.exports = db
