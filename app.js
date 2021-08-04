const express = require('express')
const cors=require('cors');
const path=require('path')
const app = express()
const port = 3000
let date = new Date()
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();

let fullDate = `${day}.${month}.${year}`;
console.log(fullDate);
var localStorage = require('local-storage');
cors()
app.use(express.static('/home/pi'))
//app.use(express.static(path.join(__dirname,'/home/pi')))
localStorage.set("status1","0")
localStorage.set("status2","0")
localStorage.set("status3","0")
localStorage.set("status4","0")
app.get('/but1',cors(), (req, res) => {
  localStorage.set("status1",req.query.button1)
  res.json({message:"Successfully added!!"})
  })
app.get('/but2',cors(), (req, res) => {
    localStorage.set("status2",req.query.button2)
    res.json({message:"Successfully added!!"})
    })
app.get('/but3',cors(), (req, res) => {
      localStorage.set("status3",req.query.button3)
      res.json({message:"Successfully added!!"})
      })
app.get('/but4',cors(), (req, res) => {
        localStorage.set("status4",req.query.button4)
        res.json({message:"Successfully added!!"})
        })
app.get('/getdata',cors(), (req, res) => {
    res.json({Date:fullDate,button1:localStorage.get("status1"),button2:localStorage.get("status2"),button3:localStorage.get("status3"),button4:localStorage.get("status4")})
  })
app.get('/',cors(), (req, res) => {
   res.json({message:"sukarn"})
 })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})