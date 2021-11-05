/*
- Gli oggetti nell’array di oggetti rappresentano tutti i post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine (non tutti i post devono avere una immagine), numero di likes.
- Stampiamo i post del nostro feed.
- Sotto al nome NON inseire il calcolo della data (es 4 mesi fa) ma la data i formato italiano (GG/MM/AAAA)
*/

const d = new Date();

const post = [
  {
    authorName: 'Phil Mangione',
    profilePictures:'https://unsplash.it/300/300?image=15',
    data: [d.getDay(), d.getMonth(), d.getFullYear()], 
    postText:'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    content:'https://unsplash.it/600/300?image=171',
    likesNumbers: 80
  },
  {
    authorName: 'Sofia Perlari"',
    profilePictures:'https://unsplash.it/300/300?image=10',
    data: [d.getDay(), d.getMonth(), d.getFullYear()], 
    postText:'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    content:'https://unsplash.it/600/400?image=112',
    likesNumbers: 120
  },
  {
    authorName: 'Chiara Passaro',
    profilePictures:'https://unsplash.it/300/300?image=20',
    data: [d.getDay(), d.getMonth(), d.getFullYear()], 
    postText:'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    content:'https://unsplash.it/600/400?image=234',
    likesNumbers: 78
  },
  {
    authorName: 'Luca Formicola',
    profilePictures: null,
    data: [d.getDay(), d.getMonth(), d.getFullYear()], 
    postText:'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    content:'https://unsplash.it/600/400?image=24',
    likesNumbers: 56
  },
  {
    authorName: 'Alessandro Sainato',
    profilePictures:'https://unsplash.it/300/300?image=29',
    data: [d.getDay(), d.getMonth(), d.getFullYear()], 
    postText:'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    content:'https://unsplash.it/600/400?image=534',
    likesNumbers: 95
  },
]

console.log(post);


