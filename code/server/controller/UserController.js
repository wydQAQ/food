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
  OrderList: function (req, res) {
    let list = model.Order.find({}, function (err, docs) {
      res.json(docs)
    })
  },
  Userlist: function (req, res) {
    let user = model.User.find({
        username: req.body.username,
        password: req.body.password
      })
      .exec(function (err, docs) {
        if (err) {
          res.json({
            code: 0,
            message: '后台登录异常'
          });
          return;
        }
        if (docs.length > 0) {
          res.json({
            code: 1,
            message: '登录成功',
            user: {
              username: docs[0].username,
              token: docs[0].token,
              avatar: docs[0].avatar
            }
          })
        } else {
          res.json({
            code: 0,
            message: '用户名或密码错误，请重新登录',
          })
        }

      })
  },
  Submitorder: async function (req, res) {
    if (req.body.arr) {
      let arrs = JSON.parse(req.body.arr);
      arrs.forEach(async item => {
        var item = new model.Submit(item);
        item.subTime = Date.now().toString();
        await item.save();
      });

      res.json({
        code: 1,
        msg: '成功'
      });
    }
    //   new model.Submit({
    //     subTime:req.body.time,
    //     username:req.body.username,
    //     price:req.body.price,
    //     quantity:req.body.quantity,
    //     commodity:req.body.commodity

    // }).save(function(err,docs){
    //   if(docs){
    //     res.json({
    //       code:1,
    //       message:'提交订单成功'
    //     })   
    //   }
    // });      
  },
  findCommit: function (req, res) {
    let data = new Date()
    let start = new Date(`${data.getFullYear()}/${data.getMonth() + 1}/${data.getDate()}`).getTime();
    let end = new Date(`${data.getFullYear()}/${data.getMonth() + 1}/${data.getDate()} 23:59:59`).getTime();
    console.log(start,end);
    model.Submit.find({
      subTime:{
        $gt: `${start}`,
        $lt: `${end}`
      }
    }, function (err, docs) {
      console.log(docs);
      if (docs) {
        res.json(docs);
      } else {
        res.json({code: 0, msg: '没有数据！'});
      }
    });
  }
}