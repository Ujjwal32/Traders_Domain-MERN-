

const mongoose = require('mongoose');
try {
    (async ()=>{
        await mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });
        
    })();
}catch(err){
    console.log(err);
}


module.exports = mongoose;