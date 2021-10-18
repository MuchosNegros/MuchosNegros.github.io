const videos = [
  {
    "title": "Se baja de la patera y me la mete entera",
    "description": "Este vídeo fue grabado para celebrar su nueva vida de éxito con sexo y unas gafas de sol ray ban guapísimas que ojalá tenerlas.",
    "id": "se_baja_de_la_patera_y_me_la_mete_entera",
    "thumbnail": "https://ci.phncdn.com/videos/201810/10/186827361/thumbs_30/(m=eafTGgaaaa)(mh=wUDlfCudEgvemmJR)6.jpg?cache=2021072302",
    "url": "video40377013+blacked_turista_rubia_follada_por_el_culo_por_un_local_negro",
    "service": "xvideos"
  },
  {
    "title": "Su primera polla negra",
    "description": "Susana es una chica peculiar con ganas de probar un buen negro y al final consigue hacerlo.",
    "id": "su_primera_polla_negra",
    "thumbnail": "https://ei.phncdn.com/videos/201910/15/255078401/original/(m=eafTGgaaaa)(mh=Dyj6vV9WundRpJjx)8.jpg?cache=2021072701",
    "url": "video51744957/chupando_una_gran_polla_negra_en_el_bano_del_avion",
    "service": "xvideos"
  },
  {
    "title": "Latina mamadora folla negros sin demora",
    "description": "Posiblemente uno de los mejores vídeos que vas a ver.",
    "id": "latina_mamadora_folla_negros_sin_demora",
    "thumbnail": "https://ci.phncdn.com/videos/202012/24/378985672/original/(m=eafTGgaaaa)(mh=wJMZAoA7FibORlBH)10.jpg?cache=2021072701",
    "url": "ph5fe460464a34b",
    "service": "pornhub"
  },
  {
    "title": "Negro accionista se la mete a mileurista",
    "description": "Contratada.",
    "id": "negro_accionista_se_la_mete_a_mileurista",
    "thumbnail": "https://img-hw.xvideos-cdn.com/videos/thumbs169poster/d5/65/4b/d5654b84477871c8dde72baae07b0bc8/d5654b84477871c8dde72baae07b0bc8.5.jpg",
    "url": "video56646961+contratista_de_plomeria_destruye_el_cono_de_cleo_clementine",
    "service": "xvideos"
  }
]

const videosEl = document.getElementById('videos');
if (videosEl == null) {
  const intro = document.getElementById('intro');
  const phVideo = document.getElementById('ph-video');
  const title = document.getElementById('title');
  const description = document.getElementById('description');
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
  intro.onended = async () => {
    switch (video.service) {
      case 'pornhub':
        intro.style.display = 'none';
        phVideo.innerHTML = '<iframe src="https://www.pornhub.com/embed/'+video.url+'" autoplay="" scrolling="no" allowfullscreen="" width="560" height="315" frameborder="0"></iframe>'
      case 'xvideos':
        intro.firstElementChild.src = await getVideoURL(video.url);
        break;
      default:
        intro.firstElementChild.src = video.url;
        break;
    }
    intro.autoplay = true;
    intro.load();
    intro.id = 'video';
  };
} else {
  // Vídeos en la pantalla principal
  for (video of videos.reverse()) {
    const a = document.createElement('a');
    a.href = "video?id="+video.id;
    a.className = 'column is-4';
    a.innerHTML = '<div class="card large"><div class="card-image"><figure class="image is-16by9"><img src="'+video.thumbnail+'"></figure></div><div class="card-content"><p class="title is-4 no-padding">'+video.title+'</p></div></div>';
    videosEl.appendChild(a);
  }
}

async function getVideoURL(streamURL) {
  const response = await fetch(`https://api.muchosnegros.com/video/${streamURL}`);
  return await response.text();
}
