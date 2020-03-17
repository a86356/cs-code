const express = require('express')

var db = require("./db.js");

var crypto = require('crypto');


const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// 解决跨域问题
app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type,token");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
})

app.post('/addstudent', (req, res) => {
    let {name,age,grade,sex} = req.body;

    let sql=`INSERT INTO cms_student_base( name, age,grade,sex) VALUES("${name}","${age}","${grade}","${sex}")`;
    db.query(sql, (err, rows) =>{
        if(err) {
            var data = {
                code: -1,
                msg: "失败"
            }
        }else{
            var data = {
                code: 0,
                msg: "插入成功"
            }
        }
        res.json(data)
    });
})


app.post('/deletestudent', (req, res) => {
    let {id} = req.body;

    let sql=`delete from cms_student_base where id=`+id;

    db.query(sql, (err, rows) =>{
        if(err) {
            var data = {
                code: -1,
                msg: "失败"
            }
        }else{
            var data = {
                code: 0,
                msg: "成功"
            }
        }
        res.json(data)
    });
})


app.post('/updatestudent', (req, res) => {
    let {id,name,age,grade,sex} = req.body;

    //检测权限，检查token是否在数据库存在，

    let sql=`UPDATE cms_student_base SET name = "${name}",age=${age},grade=${grade},sex=${sex} WHERE id = ${id}`;

    db.query(sql, (err, rows) =>{
        if(err) {
            var data = {
                code: -1,
                msg: "失败"
            }
        }else{
            var data = {
                code: 0,
                msg: "成功"
            }
        }
        res.json(data)
    });
})


app.post('/getstudent', (req, res) => {

    let sql=`select * from cms_student_base`;

    db.query(sql, (err, rows) =>{
        if(err) {
            var data = {
                code: -1,
                msg: "失败"
            }
        }else{
            var data = {
                code: 0,
                data:rows,
                msg: "成功"
            }
        }
        res.json(data)
    });
})
function randomWord(randomFlag, min, max){
    var str = "",
        range = min,
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    // 随机产生
    if(randomFlag){
        range = Math.round(Math.random() * (max-min)) + min;
    }
    for(var i=0; i<range; i++){
        pos = Math.round(Math.random() * (arr.length-1));
        str += arr[pos];
    }
    return str;
}

app.post('/register', (req, res) => {
    let {username,password} = req.body;
    password = crypto.createHash('md5').update(password).digest("hex")
    let auth_key = randomWord(false,32);


    let sql=`INSERT INTO cms_admin_base(username, password,auth_key) VALUES("${username}","${password}","${auth_key}")`;

    db.query(sql, (err, rows) =>{
        if(err) {
            var data = {
                code: -1,
                msg: "失败"
            }
        }else{
            var data = {
                code: 0,
                msg: "成功"
            }
        }
        res.json(data)
    });
})
app.post('/login', (req, res) => {
    let {username,password} = req.body;
    password = crypto.createHash('md5').update(password).digest("hex")

    let sql=`select * from cms_admin_base where username="${username}" and password="${password}"`;

    db.query(sql, (err, rows) =>{
        if(rows.length==0 || err) {
            var data = {
                code: -1,
                msg: "账户或密码错误"
            }
        }else{
            var data = {
                code: 0,
                data:rows,
                msg: "成功"
            }
        }
        res.json(data)
    });
})


app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})
