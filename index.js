const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')

const app = express()

const conn = require('./db/conn')

//models
const Livro = require('./models/Livro')
const User = require('./models/User')

// import routes

const livrosRoutes = require('./routes/livrosRoutes')

// import controller
const LivrosController = require('./controllers/LivroController')

// template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// receber resposta do body
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

// session middlewere

app.use(
  session({
    name:"session",
    secret: "nosso_secret",
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
      logFn: function() {},
      path: require('path').join(require('os').tmpdir(), 'sessions'),
    }),
    cookie: {
      secure: false,
      maxAge:360000,
      expires: new Date(Date.now() + 360000),
      httpOnly: true
    }
  }),
)

// flash messages
app.use(flash())

//public path
app.use(express.static('public'))

// set session to res


// routes

app.use('/livros', livrosRoutes)

app.get('/', LivrosController.showLivros)

conn
  //.sync({ force: true})
  .sync()
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => console.log(err))
