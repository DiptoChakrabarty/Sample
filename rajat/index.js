express = require("express")

const app = express();

app.get('/', function(req, res){
    res.send('Happy Hacktoberfest')
})

app.listen(8080, () => console.log('listening on port 8080'))