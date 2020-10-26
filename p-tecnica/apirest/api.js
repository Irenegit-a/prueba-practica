let express = require("express");
let bodyParser = require("body-parser");
let app = express();
let cors = require("cors");
app.use(cors());
app.use(bodyParser.urlencoded( {extended:false} ));
app.use(bodyParser.json());


class User {
    constructor(name, date, id){
        this.name = name;
        this.date = date;
        this.id = id;
    }
}

let newUser = new User;

// app.get("http://hello-world.innocv.com/api/user", function(req, res)
//     {
//         console.log("GET de todos");
//     });

// app.getOne("http://hello-world.innocv.com/api/user/id", function(req, res)
//     {
//         console.log("GET de un user")
//     });

app.get("http://hello-world.innocv.com/api/user", function(req, res)
    {
        if(req.url == "http://hello-world.innocv.com/api/user")
            {
                console.log("GET de todos");
            }
        else
            {
                res.send(this.json[req.query.id]);
                console.log("GET de un user");
            }
    });

app.post("http://hello-world.innocv.com/api/user", function(req, res)
    {
        newUser = new User
        (
            req.body.name,
            req.body.date
        )

        let rta = {error: false, message: "POST. User creado", result: newUser};
        res.send(rta);
        console.log(rta);
    });

app.put("http://hello-world.innocv.com/api/user", function(req, res)
    {
        if(req.body.name.length == 0 || req.body.date.length == 0)
            {
                let fail = {error: true, message: "Faltan atributos por rellenar"};
                res.send(fail);
                console.log(fail.message)
            }
        else
            {
                this.json[req.body.id].name = req.body.name;
                this.json[req.body.id].date = req.body.date;
                let rta = {error: false, message: "PUT. Actualización de un user", result: newUser};
                res.send(rta);
                console.log(rta);
            }
    });

app.delete("http://hello-world.innocv.com/api/user", function(req, res)
    {
        this.json.splice([req.query.id], 1);
        res.send(this.json.name, this.json.date, this.json.id)
        console.log("DELETE. Eliminaste un user")
    });




app.use(function(req, res, next)
    {
        let rta = {error: true, codigo: 404, message: "URL no encontrada"};
        res.status(404).send(rta);
    });


app.listen(3000);