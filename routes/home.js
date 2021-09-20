const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index', {title : 'Home page', layout : './layout/index'})
});
router.post('/calculateIncome', (req, res) => {
    const {salary, name} = req.body
    res.render('calculate', {title : 'Expense calculation page', layout : './layout/expanse', salary, name})
});



module.exports = router;


