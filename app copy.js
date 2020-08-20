// require packages used in the project
const express = require('express')
const app = express()
const port = 3000

// requure express-handlebars here
const exphbs = require('express-handlebars')

//setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))


// routes setting
app.get('/', (req, res) => {
  const movieLists = [{
    id: 1,
    image: "https://movie-list.alphacamp.io/posters/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg",
    title: 'Jurassic World: Fallen Kingdom'
  }, {
    id: 2,
    title: 'Ant-Man and the Wasp',
    image: 'https://movie-list.alphacamp.io/posters/rv1AWImgx386ULjcf62VYaW8zSt.jpg'
  }, {
    id: 3,
    title: "Thor: Ragnarok",
    image: "https://movie-list.alphacamp.io/posters/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg"
  },
  {
    id: 4,
    title: "Avengers: Infinity War",
    image: "https://movie-list.alphacamp.io/posters/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
  },
  {
    id: 5,
    title: "Mission: Impossible - Fallout",
    image: "https://movie-list.alphacamp.io/posters/80PWnSTkygi3QWWmJ3hrAwqvLnO.jpg"
  },
  {
    id: 6,
    title: "Incredibles 2",
    image: "https://movie-list.alphacamp.io/posters/x1txcDXkcM65gl7w20PwYSxAYah.jpg"
  },
  {
    id: 7,
    title: "Fifty Shades Freed",
    image: "https://movie-list.alphacamp.io/posters/jjPJ4s3DWZZvI4vw8Xfi4Vqa1Q8.jpg"
  },
  {
    id: 8,
    title: "The First Purge",
    image: "https://movie-list.alphacamp.io/posters/2slvblTroiT1lY9bYLK7Amigo1k.jpg"
  },
  ]

  res.render('index', { movies: movieLists })
})

// start and listen
app.listen(port, () => {
  console.log(`Express is listening on localhost: ${port}`)
})

// 布局在 layout//
// 局部布局在views//
//{{ }} => 純字串處裡   {{{ }}}=>非純字串處裡