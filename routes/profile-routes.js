const router = require('express').Router()

// CHECK IF USER IS LOGGED IN 
const authCheck = (req, res, next) => {
    if (!req.user) {
        // IF USER IS NOT LOGGED IN
        res.redirect('/auth/login')
    } else {
        // IF LOGGED IN
        next()
    }
}

router.get('/', authCheck, (req, res) => {
    res.render('dashboard', {
        user: req.user
    })
})

module.exports = router