const postgres = require("postgres");
const produtoSchema = postgres.Schema({

    name:{
        type: String,
        required:[true, "Digite o Produto"]
    },

    descricao:{
        type: String,
        required:[true, "Digite a Descrição"]
    },

    price:{
        type: String,
        required:[true, "Digite o Preço"],
        maxLength:[8, "Apenas 8 caracteres"]
    },

    rating:{
        type: Number,
        required:0
    },

    images:[

        {
            public_id:{
                type: String,
                require: true
            },
            url:{
                type: String,
                require:true
            }
        }

    ],

    category:{
        type: String,
        required:[true, "Digite a Categoria"],
    },

    estoque:{
        type: Number,
        required:[true, "Digite a Quantidade"],
        maxLength:[4, "Digite apenas 4"]
    },

    
})

module.exports = postgres.model("Produto", produtoSchema);