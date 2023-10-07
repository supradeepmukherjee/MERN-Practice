const mongoose = require('mongoose');
const uri = process.env.URI;


mongoose.connect(uri, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
}).then(() => { }).catch((err) => { console.log(err);})