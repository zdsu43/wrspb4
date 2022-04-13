const server = require('express')
const app = server()

// Settings
app.set('port', process.env.PORT || 80);
app.use(server.static('website'));

// Web Site
app.get('/', (req, res) => {
  res.sendFile('index.html')
})

// #Articles
// app.get('/articles/water-system', (req, res) => {
//   res.sendFile('wsystem.html')
// })

app.listen(app.get('port'),()=>{
    console.log(`server is running at port ${app.get('port')}`);
});