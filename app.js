const express = require('express')
const path = require('path')
const passportSetup = require('./config/passport-setup')
const mongoose = require('mongoose')
const keys = require('./config/keys')
const User = require('./models/user-model')
const cookieSession = require('cookie-session')
const passport = require('passport')

// ROUTES
const authRoutes = require('./routes/auth-routes')
const profileRoutes = require('./routes/profile-routes')

const app = express();

// SET VIEW ENGINE
app.set('view engine', 'ejs')


// CONNECT TO MONGODB
mongoose.connect(keys.mongodb.dbURI, { useNewUrlParser: true }, () => console.log('connected'))

// ===============MIDDLEWARE===============
// ENCRYPT COOKIE 
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000, //LIFESPAN OF COOKIE -> 24h
    keys: [keys.session.cookieKey]
}))

// INITIALIZE PASSPORT
app.use(passport.initialize())
// SET SESSION
app.use(passport.session())

// ROUTES
app.use('/auth', authRoutes)
app.use('/profile', profileRoutes)

app.get('/', (req, res) => {
    res.render('home', {
        user: req.user
    })
})


app.use(express.static(path.join(__dirname, 'public')));

// PORT
const PORT = process.env.PORT || 5000;


app.listen(PORT, console.log(`Server is running on port: ${PORT}`));