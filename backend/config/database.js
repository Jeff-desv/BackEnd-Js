const postgres = require("postgres");

const connectDatabase = () => {
    postgres.connect(
        process.env.DB_URLI, {
            useNewUrlParser:true, 
            useUnifiedTopology:true, 
            useCreateIndex:true,
        }).then(
        (data)=>{
            console.log(`conexão com sucesso: ${data.connection.host}`);
        }) .catch ((err) =>{
                console.log(err)
        })
}

module.exports = connectDatabase;
