var express = require('express');
const userController = require('../controller/UserController');
var router = express.Router();

function auth(req, res, next) {
    if (req.get('Authorization')) {
        next();
    } else {
        res.status(401).jsonp({
            code: 9,
            msg: '用户没有登录，不能访问'
        });
    }
}
router.post('/user', userController.Userlist);
router.get('/order', auth, userController.OrderList);
router.post('/commit', auth, userController.Submitorder);
router.get('/findcommit', auth, userController.findCommit);
module.exports = router