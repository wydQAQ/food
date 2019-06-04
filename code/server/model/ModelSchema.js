const EventEmitter = require('events');
const mongoose = require('mongoose');

class Model  extends EventEmitter {
}

const model = new Model();

mongoose.connect(
  'mongodb://localhost:27017/test',
  {
    server: {
      poolSize: 20
    }
  },
  function(err) {
    if (err) {
      console.log('链接 mongodb 失败，程序退出 ');
      process.exit(1);
      return;
    }

    console.log('connected mongodb');
    const UserScheme = mongoose.Schema({
      username:String,
      password:String,
      avatar:String,
      token:String
    });
    model.User = mongoose.model('userlist', UserScheme);

    const OrderScheme = mongoose.Schema({
      title:String,
      price:Number,
      quantity:Number,
      commodity:String,
      soldout:Boolean,
      img:String
    });
    model.Order = mongoose.model('commodity',OrderScheme);
    const SubmitSchema = mongoose.Schema({
      subTime:String,
      username:{
        type:String,
        required:true
      },
      price:{
        type:Number,
        required:true
      },
      quantity:{
        type:Number,
        required:true
      },
      commodity:{
        type:String,
        required:true
      }

  });
  model.Submit = mongoose.model("Submit", SubmitSchema);
  model.emit('conneted');
  }
);

module.exports = model;