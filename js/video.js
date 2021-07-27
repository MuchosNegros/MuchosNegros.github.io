const videos = [
  {
    "title": "Se baja de la patera y me la mete entera",
    "description": "Este vídeo fue grabado para celebrar su nueva vida de éxito con sexo y unas gafas de sol ray ban guapísimas que ojalá tenerlas.",
    "id": "ph5bbda1924810b",
    "thumbnail": "https://ci.phncdn.com/videos/201810/10/186827361/thumbs_30/(m=eafTGgaaaa)(mh=wUDlfCudEgvemmJR)6.jpg?cache=2021072302"
  },
  {
    "title": "Su primera polla negra",
    "description": "Susana es una chica peculiar con ganas de probar un buen negro y al final consigue hacerlo.",
    "id": "ph5da620df24768",
    "thumbnail": "https://ei.phncdn.com/videos/201910/15/255078401/original/(m=eafTGgaaaa)(mh=Dyj6vV9WundRpJjx)8.jpg?cache=2021072701"
  },
  {
    "title": "Latina mamadora folla negros sin demora",
    "description": "Posiblemente uno de los mejores vídeos que vas a ver.",
    "id": "ph5fe460464a34b",
    "thumbnail": "https://ci.phncdn.com/videos/202012/24/378985672/original/(m=eafTGgaaaa)(mh=wJMZAoA7FibORlBH)10.jpg?cache=2021072701"
  },
]

const videosEl = document.getElementById('videos');
if (videosEl == null) {
  const intro = document.getElementById('intro');
  const videoEl = document.getElementById('video');
  const title = document.getElementById('title');
  const description = document.getElementById('description');
  videoEl.style.display = 'none';
  const urlParams = new URLSearchParams(document.location.search.substring(1));
  const id = urlParams.get('id');
  const video = videos.find((v) => v.id == id);
  if (video == null) {
    title.innerHTML = '404';
    description.innerHTML = 'No hemos podido encontrar a ese negro. Mejor pregunta a la guardia costera.';
    intro.style.display = 'none';
  }
  title.innerHTML = video.title;
  document.title = video.title + ' | muchosnegros.com';
  description.innerHTML = video.description;
  intro.poster = video.thumbnail;
  videoEl.innerHTML= '<iframe src="https://www.pornhub.com/embed/'+id+'" autoplay frameborder="0" width="560" height="315" scrolling="no" allowfullscreen></iframe>';
  intro.onended = function() {
    intro.style.display = 'none';
    videoEl.style.display = 'block';
  };
} else {
  // Vídeos en la pantalla principal
  for (video of videos) {
    console.log(video)
    const a = document.createElement('a');
    a.href = "video?id="+video.id;
    a.className = 'column is-4';
    a.innerHTML = '<div class="card large"><div class="card-image"><figure class="image is-16by9"><img src="'+video.thumbnail+'"></figure></div><div class="card-content"><p class="title is-4 no-padding">'+video.title+'</p></div></div>';
    videosEl.appendChild(a);
  }
}
