/*
- Gli oggetti nell’array di oggetti rappresentano tutti i post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine (non tutti i post devono avere una immagine), numero di likes.
- Stampiamo i post del nostro feed.
- Sotto al nome NON inseire il calcolo della data (es 4 mesi fa) ma la data i formato italiano (GG/MM/AAAA)
*/

const d = new Date();
const day = d.getDay();
const month = d.getMonth();
const year = d.getFullYear();

const post = [
  {
    authorName: 'Phil Mangione',
    iniziali: 'P M',
    profilePictures:'https://unsplash.it/300/300?image=15',
    data: `${day}/${month}/${year}`, 
    postText:'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    content:'https://unsplash.it/600/300?image=171',
    likesNumbers: 80
  },
  {
    authorName: 'Sofia Perlari"',
    iniziali: 'S P',
    profilePictures:'https://unsplash.it/300/300?image=10',
    data: `${day}/${month}/${year}`, 
    postText:'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    content:'https://unsplash.it/600/400?image=112',
    likesNumbers: 120
  },
  {
    authorName: 'Chiara Passaro',
    iniziali: 'C P',
    profilePictures:'https://unsplash.it/300/300?image=20',
    data: `${day}/${month}/${year}`, 
    postText:'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    content:'https://unsplash.it/600/400?image=234',
    likesNumbers: 78
  },
  {
    authorName: 'Luca Formicola',
    iniziali: 'L F',
    profilePictures: null,
    data: `${day}/${month}/${year}`, 
    postText:'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    content:'https://unsplash.it/600/400?image=24',
    likesNumbers: 56
  },
  {
    authorName: 'Alessandro Sainato',
    iniziali: 'A S',
    profilePictures:'https://unsplash.it/300/300?image=29',
    data: `${day}/${month}/${year}`, 
    postText:'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    content:'https://unsplash.it/600/400?image=534',
    likesNumbers: 95
  },
]

const container = document.getElementById('container');
container.innerHTML= '';

// 1 per ogni object creo un div class post

for(let index in post){
  const divPost = document.createElement('div');
  divPost.classList = 'post';
  container.append(divPost);
  
  //dentro ogni div metto il contenuto del post
  divPost.innerHTML = 
  `
    <div class="post__header">
      <div class="post-meta">                    
        <div class="post-meta__icon">
          <img class="profile-pic" src="${post[index].profilePictures} " alt="${post[index].iniziali}">                    
        </div>
        <div class="post-meta__data">
          <div class="post-meta__author">${post[index].authorName} </div>
          <div class="post-meta__time">${post[index].data} </div>
        </div>                    
      </div>
    </div>
    <div class="post__text">${post[index].postText} </div>
    <div class="post__image">
      <img src="${post[index].content}" alt="">
    </div>
    <div class="post__footer">
      <div class="likes js-likes">
        <div class="likes__cta">
          <a class="like-button  js-like-button" href="#" data-postid="1">
              <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
              <span class="like-button__label">Mi Piace</span>
          </a>
        </div>
        <div class="likes__counter">
          Piace a <b id="like-counter-1" class="js-likes-counter">${post[index].likesNumbers}</b> persone
        </div>
      </div> 
    </div> 
  `
}

//Al click del like-button incrementare di uno i like

let likeButton = document.getElementsByClassName('js-like-button');

console.log(likeButton);

for(let i = 0; i < likeButton.length; i++){
  likeButton[i].addEventListener('click', function(){
    console.log('ciao');
  })
}


