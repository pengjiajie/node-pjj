var AdminModel = require('../../models/admin/admin')
var crypto = require('crypto');
var md5 = crypto.createHash('md5');

class Admin {
    constructor(){}
    // 注册
    register(req, res){
        AdminModel.findOne({username: req.body.username}, function(err, res_find){
            if(err){
                res.send({
                    status: 5000,
                    message: '注册失败！'
                })
            }else if(res_find){
                res.send({
                    status: 5001,
                    message: '用户名已注册！'
                })
            }else{
                var user = new AdminModel({
                    username: req.body.username,
                    password: md5.update(req.body.password).digest('hex'),
                    create_time: new Date(),
                    phone: req.body.phone
                })
                user.save(function(err, res1){
                    if(err){
                        res.send({
                            status: 5000,
                            message: '注册失败！'
                        })
                    }else{
                        res.send({
                            status: 0,
                            data: res1,
                            message: '注册成功！'
                        })
                    }
                })
            }
        })   
    }
    getUser(req, res){

        var user = new AdminModel({
            username : 'qweqwe',                 //用户账号
            password: 'abcd',                            //密码
            create_time : new Date()                      //最近登录时间
        });
    
        user.save(function (err, res) {
    
            if (err) {
                console.log("Error:" + err);
            }
            else {
                console.log("Res:" + res);
            }
    
        });

        res.send({
            status: 1111
        })
    }
}

module.exports = new Admin()