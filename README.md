Run server with 'npm run dev'

Add 'config' folder with 'keys.js' file.
module.exports = {
    google: {
        clientID: "",
        clientSecret: ""
    },
    mongodb: {
        dbURI: "connection string to database"
    },
    session: {
        cookieKey: ''
    }
}