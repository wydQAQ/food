const model = require('../model/ModelSchema');
const bodyParser = require('body-parser');
console.log(model);
module.exports = {
  // list: function(req, res, next) {
  //   res.send('userlist');
  //   let list =  model.User.find({ name: 'john', age: { $gte: 18 }}, function (err, docs) {
  //     res.json(docs);
  //   });
  // },
  OrderList:function(req,res){
    let list = model.Order.find({},function(err,docs){
      res.json(docs)
    })
  },
  Userlist: function(req,res){
    let user = model.User.find({username:req.body.username,password:req.body.password})
    .exec(function(err,docs){
      if(err){
        res.json({
          code:0,
          message:'登录失败，请重新登录'
        });
        return;
      }
      console.log(docs)
      res.json({
        code:1,
        message:'登录成功',
        token:docs[0].token,
        avatar:docs[0].avatar

      })
    })
  }
}