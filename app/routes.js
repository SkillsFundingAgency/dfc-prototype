var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index', { data : req.session['data'] })
})

router.post('/data', function(req, res){
	req.session['data'] = req.body;
	res.send({ success : true });
})

// add your routes here

module.exports = router
