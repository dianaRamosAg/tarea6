var mongoose = require('mongoose');
var schema = require('./schema');
var Blog = mongoose.model('blog2',schema,'blog2');

mongoose.connect('mongodb://localhost:27017/nlib');

//Documento

var blog = new Blog({
    title:'Nuevo blog',
    author:'Diana Ramos',
    body:'El primer blog de mi vida',
    comments:[{body:'uno',date:'2019-06-19'}],
    date:'2019-06-19',
    hidden:false,
    favs:20
});

/*
blog.save(function(error)
{
    if(error)
    {
        console.log(error);
        process.exit(1);
    }
    console.log("Blog guardado");
    process.exit(0);
});
Blog.find({},function(error,docs)
{
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Consulta gral");
    console.log(docs);
}
);

*/

Blog.update({_id:'5d194a28b224212ff0c18602'},{$set:{author:'Laura Aguilar'}},
function(error,docs)
{
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Actualización");
    console.log(docs);
});

//Eliminar
Blog.findByIdAndRemove({_id:'5d194a28b224212ff0c18602'},
function(erro,docs)
{
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Actualización");
    console.log(docs);
}
);
