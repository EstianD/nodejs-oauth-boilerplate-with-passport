const router = require('express').Router()
const passport = require('passport')

// AUTH LOGIN
router.get('/login', (req, res) => {
    res.render('login', {
        user: req.user
    })
})

// AUTH LOGOUT
router.get('/logout', (req, res) => {
    // HANDLE WITH PASSPORT
    req.logout()
    res.redirect('/')
})

// AUTH WITH GOOGLE
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}))

// CALLBACK ROUTE FOR GOOGLE TO REDIRECT TO
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/profile/')
})

module.exports = router;