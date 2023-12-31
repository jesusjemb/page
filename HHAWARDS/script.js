$(function () {

  const strL = 'https://images.unsplash.com/photo-';
  const strR =
  '?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ';
const imagendefaul = "imagenes/nohay.jpg";
  let conjuntosDeImagenes = {
    conjunto1: [
    {
      descripcion: 'Simplemente como todo lo que dice, mentiras para cometer flaude.',
      titulo: 'el mes tryhard',
      url: 'imagenes/flaude.jpg',
      votos: 0,
    },
    {
      descripcion: 'Como siempre, robando ideas de los demas. ¿Quien compraria sus fluidos?... ',
      titulo: 'plan squirtcitaa',
      url: 'https://i.ytimg.com/vi/kN2xjKbVmng/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCH9CkeE2ZuMQO5gNTvBOg0_szRQQ',
      votos: 0,
    },
    {
      descripcion:
      'Hanncitaa quedandose jetona... ¿apoco?.',
      titulo: 'perder el vuelo por quedarse dormida',
      url: 'imagenes/sleep.jpg',
      votos: 0,
    },
    {
      descripcion:
      'No me pagan por esto.',
      titulo: 'chorrillo mortal',
      url:"https://ih1.redbubble.net/image.3465022404.1342/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
      votos: 0,
    },
    {
      descripcion:
      'Si Han, que no tienes dinero, ya sabemos.',
      titulo: 'rogar por cerveza',
      url: 'imagenes/pobre.jpg',
      votos: 0,
    },

    ],

    //conjunto 2
    conjunto2: [
    {
      descripcion:
      '',
      titulo: 'miser',
      url: "https://pbs.twimg.com/profile_images/1701068030078242816/0X3hIVpL_400x400.jpg",
      votos: 0,
    },  
    {
      descripcion:
      '',
      titulo: 'fuaa',
      url: "https://pbs.twimg.com/profile_images/1740629239207014400/84zBXaii_400x400.jpg",
      votos: 0,
    },  
    {
      descripcion:
      '',
      titulo: 'yiyi',
      url: "https://pbs.twimg.com/profile_images/1693753558766845952/MOcizJuJ_400x400.jpg",
      votos: 0,
    },  
    {
      descripcion:
      '',
      titulo: 'munguia',
      url: "https://pbs.twimg.com/profile_images/1726810951154855936/--NHCCH8_400x400.jpg",
      votos: 0,
    },  
    {
      descripcion:
      '',
      titulo: 'cinder',
      url: "https://pbs.twimg.com/profile_images/1732597221659381761/CKtaRKpW_400x400.jpg",
      votos: 0,
    },

    ],

      //conjunto 3
    conjunto3: [
    {
      descripcion:
      '',
      titulo: 'Yuki',
      url: "https://pbs.twimg.com/profile_images/1714817342641930240/hyiY6h9g_400x400.jpg",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'Wabi',
      url: "https://pbs.twimg.com/profile_images/1724539875729264640/3g_86YMq_400x400.jpg",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'Aren',
      url: "imagenes/aren.jpg",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'Yamper',
      url: "https://i.pinimg.com/originals/cc/66/9f/cc669f3fc11578b7400863aebaca32b0.jpg",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'Daniel',
      url: "https://pbs.twimg.com/profile_images/1738279425194541056/D3tdWss2_400x400.jpg",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'Emiltrino',
      url: "https://pbs.twimg.com/profile_images/1726101140222214144/Fzb7WULW_400x400.jpg",
      votos: 0,
    },  
  
    ], 

        //conjunto 4
    conjunto4: [
    {
      descripcion:
      '',
      titulo: 'hannheDANCE',
      url: "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_19afb60ee5df4b4abb2e127902ad477e/default/dark/1.0",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'hannheL',
      url: "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_3456036676f9404ba4dca5492d70d4c6/default/light/1.0",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'hannheSKULL',
      url: "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_f60db9b72d6f4d4eb01122a62f140ce9/default/light/1.0",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'hannheSALV',
      url: "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_37936026722f4063a32b86880497262b/default/light/1.0",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'hannheSIGMA',
      url: "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_c41b66f289b74f1ebca44c51a8a1aa8c/default/light/1.0",
      votos: 0,
    },  
  
    ],   
     //conjunto 5 momero
    conjunto5: [
    {
      descripcion:
      '',
      titulo: 'mapache',
      url: "https://pbs.twimg.com/profile_images/1724355741551673344/Zc-cuEyP_400x400.jpg",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'emma',
      url: "imagenes/emma.png",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'gabber',
      url: "https://pbs.twimg.com/profile_images/1668353838804262928/6B_hWI-h_400x400.jpg",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'tempus',
      url: "https://pbs.twimg.com/profile_images/1736597343863025664/d2oZHm4G_400x400.jpg",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'fuaa',
      url: "https://pbs.twimg.com/profile_images/1740629239207014400/84zBXaii_400x400.jpg",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'alber',
      url: "https://pbs.twimg.com/profile_images/1733315479551221760/VJyXRqzv_400x400.jpg",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'mario',
      url: "imagenes/mario.png",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'galax',
      url: "imagenes/galax.jpg",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'renderizado',
      url: "imagenes/rende.png",
      votos: 0,
    },  
  
    ],   

     //conjunto 6 vip
    conjunto6: [
    {
      descripcion:
      '',
      titulo: 'bansky',
      url: "https://hips.hearstapps.com/es.h-cdn.co/hares/images/cultura/ocio/quien-es-banksy-identidad-robin-gunningham/2993422-1-esl-ES/banksy-por-fin-desenmascarado.jpg?crop=1xw:1.0xh;center,top&resize=1200:*",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'mapache',
      url: "https://pbs.twimg.com/profile_images/1724355741551673344/Zc-cuEyP_400x400.jpg",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'robamichis',
      url: "https://c8.alamy.com/compes/2b805eh/ladron-gato-y-una-victima-sobre-fondo-blanco-ilustracion-2b805eh.jpg",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'games',
      url: "https://pbs.twimg.com/profile_images/1595362619656921089/iG75MnzX_400x400.jpg",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'guslin',
      url: "https://www.streamscheme.com/wp-content/uploads/2020/04/bloodtrail-emote.png",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'mario',
      url: "imagenes/mario.png",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'speed',
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKJe8Ho13kqloCDHLa4z-kO0c2cOUkORg3q1hzrrs9u8Vmebql5JdpjhrLw5s2YA1ez8s&usqp=CAU",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'shaggy',
      url: "https://pbs.twimg.com/profile_images/1711887825610682369/cCsvaL3M_400x400.jpg",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'renderizado',
      url: "imagenes/rende.png",
      votos: 0,
    },  
  
    ],  

     

     //conjunto 7 femboy
    conjunto7: [
    {
      descripcion:
      '',
      titulo: 'sataka',
      url: "imagenes/sataka.png",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'fusion',
      url: imagendefaul,
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'eatbullets',
      url: "imagenes/raro1.jpg",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'genocidal',
      url: "imagenes/geno.png",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'weather',
      url: "https://media.cnn.com/api/v1/images/stellar/prod/220419102606-weather-brief-share-logo-large-tease.jpeg?c=16x9&q=h_438,w_780,c_fill",
      votos: 0,
    },  
  
    ], 
    //conjunto 8 shippeo
    conjunto8: [
    {
      descripcion:
      '',
      titulo: 'HannChe (komanche x hanncitaa)',
      url: "https://i.ytimg.com/vi/619kjId8VAY/sddefault.jpg",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'HanniEl (hanncitaa x uriel)',
      url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ec78f66d-af76-4912-ae94-8f1eedc0b721/db204b5-622777e8-7b32-4648-a7fa-3d6c3bba08be.jpg/v1/fill/w_1024,h_1537,q_75,strp/el_uriel__v_by_charlielovesdraw_db204b5-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTUzNyIsInBhdGgiOiJcL2ZcL2VjNzhmNjZkLWFmNzYtNDkxMi1hZTk0LThmMWVlZGMwYjcyMVwvZGIyMDRiNS02MjI3NzdlOC03YjMyLTQ2NDgtYTdmYS0zZDZjM2JiYTA4YmUuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.xp4s3TwQ_h_4JpDPPBWR-1khvOfuNs97kQcp5--Y5oU",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'Cindercitaa (cinder x hanncitaa)',
      url: "imagenes/cinder_x_hann.png",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'Wabicitaa (wabi x hanncitaa)',
      url: "imagenes/xddd.jpg",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'Demoncitaa (demonmika x hanncitaa)',
      url: "data:image/jpeg;base64,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",
      votos: 0,
    },   
  
    {
      descripcion:
      '',
      titulo: 'Hannchez (hanncitaa x karchez)',
      url: "https://i.ytimg.com/vi/laL7EBxw8NY/hqdefault.jpg",
      votos: 0,
    },  
  
    ],

    //conjunto 9 papeada
    conjunto9: [
    {
      descripcion:
      '',
      titulo: 'papeada en forms',
      url: "https://alicekeeler.com/wp-content/uploads/2018/05/Google-Forms-be-notified.png",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'video de mapache',
      url: "imagenes/papaeadahche.png",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'video del alber',
      url: "imagenes/albertxds.PNG",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'papeada de la jefona en twitter',
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu2VYQ2XKmYJ9DTsyFI3JlJmehHdn1YENP8Q&usqp=CAU",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'ya comió chloe?',
      url: "https://clips-media-assets2.twitch.tv/hughQzQdM3sJzIK_jntWoQ/AT-cm%7ChughQzQdM3sJzIK_jntWoQ-preview-480x272.jpg",
      votos: 0,
    },  
  
    ],

    //conjunto 10 bestinactivo
    conjunto10: [
    {
      descripcion:
      '',
      titulo: 'Galax',
      url: "imagenes/galax.jpg",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'Felipollas',
      url: "imagenes/feli.jpg",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'Albert',
      url: "https://pbs.twimg.com/profile_images/1733315479551221760/VJyXRqzv_400x400.jpg",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'Aren',
      url: "imagenes/aren.jpg",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'Capi',
      url: "imagenes/capi.png",
      votos: 0,
    },  
  
    ],

    //conjunto 11 copy
    conjunto11: [
    {
      descripcion:
      '',
      titulo: 'ema',
      url: "imagenes/emma.png",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'octavio',
      url: imagendefaul,
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'the black',
      url: imagendefaul,
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'shaggy',
      url: "https://pbs.twimg.com/profile_images/1711887825610682369/cCsvaL3M_400x400.jpg",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'kisame',
      url: "imagenes/kisame.png",
      votos: 0,
    },  
  
  
    {
      descripcion:
      '',
      titulo: 'cinder',
      url: "https://pbs.twimg.com/profile_images/1732597221659381761/CKtaRKpW_400x400.jpg",
      votos: 0,
    },  
  
  
    {
      descripcion:
      '',
      titulo: 'cfusion',
      url: imagendefaul,
      votos: 0,
    },  
  
  
    {
      descripcion:
      '',
      titulo: 'el munguia',
      url: "https://pbs.twimg.com/profile_images/1726810951154855936/--NHCCH8_400x400.jpg",
      votos: 0,
    },  
  
  
    {
      descripcion:
      '',
      titulo: 'loona',
      url: "imagenes/lon.png",
      votos: 0,
    },  
  
  
    {
      descripcion:
      '',
      titulo: 'mario',
      url: "imagenes/mario.png",
      votos: 0,
    },  
  
  
    {
      descripcion:
      '',
      titulo: 'alber',
      url: "https://pbs.twimg.com/profile_images/1733315479551221760/VJyXRqzv_400x400.jpg",
      votos: 0,
    },  
  
    ],
     //conjunto 12 view
    conjunto12: [
    {
      descripcion:
      '',
      titulo: 'mapache',
      url: "https://pbs.twimg.com/profile_images/1724355741551673344/Zc-cuEyP_400x400.jpg",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'renderizado',
      url: "imagenes/rende.png",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'kisame',
      url: "imagenes/kisame.png",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'shaggy',
      url: "https://pbs.twimg.com/profile_images/1711887825610682369/cCsvaL3M_400x400.jpg",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'genocidal',
      url: "imagenes/geno.png",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'el munguia',
      url: "https://pbs.twimg.com/profile_images/1726810951154855936/--NHCCH8_400x400.jpg",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'guslin',
      url: "https://www.streamscheme.com/wp-content/uploads/2020/04/bloodtrail-emote.png",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'ema',
      url: "imagenes/emma.png",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'gompanchiro',
      url: imagendefaul,
      votos: 0,
    }, 
  
    {
      descripcion:
      '',
      titulo: 'uyahlex',
      url: imagendefaul,
      votos: 0,
    }, 
  
    {
      descripcion:
      '',
      titulo: 'cinder',
      url: "https://pbs.twimg.com/profile_images/1732597221659381761/CKtaRKpW_400x400.jpg",
      votos: 0,
    }, 
  
    {
      descripcion:
      '',
      titulo: 'harry',
      url: imagendefaul,
      votos: 0,
    }, 
  
    {
      descripcion:
      '',
      titulo: 'tacasio',
      url: "imagenes/taca.jpg",
      votos: 0,
    }, 
  
    {
      descripcion:
      '',
      titulo: 'weather',
      url: "https://media.cnn.com/api/v1/images/stellar/prod/220419102606-weather-brief-share-logo-large-tease.jpeg?c=16x9&q=h_438,w_780,c_fill",
      votos: 0,
    },  
  
    ],
     //conjunto 13 fanfic
    conjunto13: [
    {
      descripcion:
      '',
      titulo: 'tempus (sobre alex turner, y otras mafufadas)',
      url: "https://i.redd.it/kpc5burmh6f21.jpg",
      votos: 0,
    },  
  
    {
      descripcion:
      '',
      titulo: 'mapache (detective herrera, la trilogia)',
      url: "imagenes/mapaxd.jpg",
      votos: 0,
    },  
 
  
    ],
    // Agrega más conjuntos según sea necesario
  };
  let imagenesActuales = conjuntosDeImagenes.conjunto1;
  const conjuntoEnURL = getParametro('conjunto');

  let indiceConjuntoActual = Object.keys(conjuntosDeImagenes).indexOf(conjuntoEnURL);

  // Simulación de datos desde la hoja de cálculo (ajusta según tu estructura real)

  function cargarImagenes(conjunto) {
    $('.galeria .contenedorImgs').empty();

    $.each(imagenesActuales, function (i, img) {
      $('.galeria .contenedorImgs').append(`
        <div class="imagen" style="background-image:url('${img.url}')">
        <p class="nombre">${img.titulo}</p>
        </div>`
        );
    });

  // Agrega el botón después de cargar las imágenes
    $('#ganador').attr('data-conjunto', conjunto);

    animarGaleria();

  // Llama a la función para actualizar el texto después de cargar las imágenes
    actualizarTextoConjuntoActual();
  }

  function animarGaleria() {
    $('.galeria').removeClass('vis');

    setTimeout(() => {
      $('.galeria').addClass('vis');
    }, 1000);
  }

  function cambiarImagenesNuevas(conjunto) {
    imagenesActuales = conjuntosDeImagenes[conjunto];
    cargarImagenes(conjunto);

  // Llama a la función para actualizar el texto después de cambiar las imágenes
    actualizarTextoConjuntoActual();
  }


 // Función para obtener el valor de un parámetro de la URL
  function getParametro(nombre) {
    const parametrosURL = new URLSearchParams(window.location.search);
    return parametrosURL.get(nombre);
  }

  // Obtener el valor del parámetro "conjunto" de la URL

  // Cambiar al conjunto de la URL si está definido
  if (conjuntoEnURL && conjuntosDeImagenes[conjuntoEnURL]) {
    cambiarImagenesNuevas(conjuntoEnURL);
  }

  // ...

  // Actualizar la URL cuando se cambia el conjunto
  function actualizarURL(conjunto) {
    // Obtener la URL actual sin los parámetros
    const urlBase = window.location.href.split('?')[0];

    // Crear un nuevo URLSearchParams con el parámetro "conjunto"
    const nuevosParametros = new URLSearchParams({ conjunto: conjunto });

    // Construir la nueva URL con los parámetros actualizados
    const nuevaURL = urlBase + '?' + nuevosParametros.toString();

    // Cambiar la URL del navegador
    window.history.replaceState({}, '', nuevaURL);
  }

  // ...


// Función para actualizar el texto según el conjunto actual
  function actualizarTextoConjuntoActual() {
    const conjuntoActual = Object.keys(conjuntosDeImagenes)[indiceConjuntoActual];
    const textoTema = obtenerTextoTema(conjuntoActual);

  // Actualizar los elementos HTML
    document.getElementById('nombretema').textContent = textoTema.nombre;
    document.getElementById('descripciontema').textContent = textoTema.descripcion;
  }
//categorias
// Función para obtener el texto del tema según el conjunto
  function obtenerTextoTema(conjunto) {
    switch (conjunto.toLowerCase()) {
    case 'conjunto1':
      return {
        nombre: 'HANNEADA DEL AÑO',
        descripcion: 'Aquellos momentos que nos hacen saber que Hanncitaa no es un clon como el Kanye West'
      };
    case 'conjunto2':
      return {
        nombre: 'MOD DEL AÑO',
        descripcion: 'Los que nos encargamos de mantener a esta jauria de changos controlados'
      };

    case 'conjunto3':
      return {
        nombre: 'DIBUJANTE DEL AÑO',
        descripcion: 'Estos si te saben dibujar manos sin la necesidad de borrar mas de 3 veces'
      };

    case 'conjunto4':
      return {
        nombre: 'EMOTE DEL AÑO',
        descripcion: 'Por aquellas imagenes de (28 x 28, 56 x 56 y 112 x 112 px) que sirven para darle valor a la sub a este canal pedorro.'
      };
    case 'conjunto5':
      return {
        nombre: 'MOMERO DEL AÑO',
        descripcion: 'Momero, aquel que degrada la reputacion de una persona con estilo.'
      };

    case 'conjunto6':
      return {
        nombre: 'VIP DEL AÑO',
        descripcion: 'Aquellos con el privilegio de mandar enlaces, y que en secreto desean mandar porno para tumbar el canal'
      };

    case 'conjunto7':
      return {
        nombre: 'FEMBOY DEL AÑO',
        descripcion: 'Conforme el Articulo 149 Tercero del Codigo Penal Federal, la descripcion a sido eliminada'
      };

    case 'conjunto8':
      return {
        nombre: 'SHIPPEO DEL AÑO',
        descripcion: '♫♪Son novios, son novios, se gustan, se quieren, se besan sus bocas, se pasan el chicle, se tocan su partes ♪♫'
      };

    case 'conjunto9':
      return {
        nombre: 'PAPEADA DEL AÑO',
        descripcion: 'Cualquiera puede estar en esta categoria, pero solo uno dejo una mayor marca'
      };

    case 'conjunto10':
      return {
        nombre: 'BEST INACTIVO DEL AÑO',
        descripcion: '¿Como que alguien que no esta va a ganar un premio? Ni que fuera tu papa'
      };

    case 'conjunto11':
      return {
        nombre: 'COPYS DEL CHAT DEL AÑO',
        descripcion: 'Aquellos que tienen la habilidad de robar el texto de otros y hacerlos spam en solo medio segundo'
      };

    case 'conjunto12':
      return {
        nombre: 'VIEWER REVELACIÓN',
        descripcion: 'Por aquellos que son capaces de activar el modo insano y ver un directo de Hanncitaa sin dormir'
      };

    case 'conjunto13':
      return {
        nombre: 'FANFIC DEL AÑO',
        descripcion: 'Estos premios estan amañados!!!'
      };
    // Agrega más casos según sea necesario
    default:
      return {
        nombre: 'Si estas viendo esto, esque algo anda mal',
        descripcion: 'xdxdxd'
      };
    }
  }
// Manejar el botón para el conjunto anterior
  $('#botonConjuntoAnterior').on('click', function () {
    if (indiceConjuntoActual > 0) {
      indiceConjuntoActual--;
      const nuevoConjunto = Object.keys(conjuntosDeImagenes)[indiceConjuntoActual];
      cambiarImagenesNuevas(nuevoConjunto);
      actualizarURL(nuevoConjunto);
    }
  });


// Manejar el botón para el conjunto siguiente
$('#botonConjuntoSiguiente').on('click', function () {
  const conjuntosTotales = Object.keys(conjuntosDeImagenes).length;

  if (indiceConjuntoActual < conjuntosTotales - 1) {
    // Si hay más conjuntos, realiza el cambio como lo estás haciendo actualmente
    indiceConjuntoActual++;
    const nuevoConjunto = Object.keys(conjuntosDeImagenes)[indiceConjuntoActual];
    cambiarImagenesNuevas(nuevoConjunto);
    actualizarURL(nuevoConjunto);
  } else {
    // Si ya no hay más conjuntos, redirige a otra página
    window.location.href = 'finalpremios/index.html';
  }
});

// ...

  $('.galeria').on('click', '.contenedorImgs .imagen', function () {
    var imagen = imagenesActuales[$(this).index()].url;
    var titulo = imagenesActuales[$(this).index()].titulo;
    var descripcion = imagenesActuales[$(this).index()].descripcion;
    $('.galeria').addClass('scale');
    $(this).addClass('activa');
    if (!$('.fullPreview').length) {
      $('body').append(`
        <div class="fullPreview">
        <div class="cerrarModal"></div>
        <div class="wrapper">
        <div class="blur" style="background-image:url(${imagen})"></div>
        <p class="titulo">${titulo}</p>
        <img src="${imagen}">
        <p class="desc">${descripcion}</p>
        </div>
        <div class="controles">
        <div class="control av"></div>
        <div class="control ret"></div>
        </div>
        </div>`
        );
      $('.fullPreview').fadeIn().css('display', 'flex');
    }
  });

  $('body').on('click', '.fullPreview .cerrarModal', function(){
    $('.contenedorImgs .imagen.activa').removeClass('activa');
    $('.galeria').removeClass('scale');
    $(this).parent().fadeOut(function(){
      $(this).remove();
    })
  })

  $('body').on('click', '.fullPreview .control', function () {
    var activa = $('.contenedorImgs .imagen.activa');
    var index;
    if ($(this).hasClass('av')) {
      index = activa.next().index();
      if (index < 0) index = 0;
    } else {
      index = activa.prev().index();
      if (index < 0) index = imagenesActuales.length - 1;
    }
    $('.fullPreview').addClass('anim');
    setTimeout(() => {
      $('.contenedorImgs .imagen.activa').removeClass('activa');
      $('.contenedorImgs .imagen').eq(index).addClass('activa');
      $('.fullPreview').find('.blur').css('background-image', 'url(' + imagenesActuales[index].url + ')');
      $('.fullPreview').find('img').attr('src', imagenesActuales[index].url);
      $('.fullPreview').find('.titulo').text(imagenesActuales[index].titulo);
      $('.fullPreview').find('.desc').text(imagenesActuales[index].descripcion);
      $('.fullPreview').removeClass('anim');
    }, 500);
  });

  var preloaded = document.querySelector('.preloaded');
  var queue = new createjs.LoadQueue(true, null, true);

  queue.on('fileload', handleLoad, this);
  queue.on('progress', handleProgress, this);
  queue.on('complete', handleComplete, this);

// Las URLs de las imágenes
  var imageUrls = [
    'https://png.pngtree.com/background/20210710/original/pngtree-black-gold-wind-simple-award-ceremony-background-material-picture-image_978650.jpg',
    'https://png.pngtree.com/background/20210710/original/pngtree-black-gold-wind-simple-award-ceremony-background-material-picture-image_978650.jpg'
    ];

  queue.loadManifest(
    imageUrls.map((url, index) => ({
      id: `image${index + 1}`,
      crossOrigin: true,
      type: createjs.Types.IMAGE,
      src: url
    }))
    );

  function handleProgress(event) {
    console.log(event.progress);
  }

  function handleLoad(event) {
    var img = new Image();
    img.src = event.item.src;
    preloaded.appendChild(img);
  }

  function handleComplete() {
    document.querySelector('.main-container').classList.add('loaded');
    console.log('done');
  }

  
  // Función para obtener y mostrar el ganador de cada conjunto
// Función para obtener y mostrar el ganador de un conjunto específico
// ... (código anterior sin cambios)

// Función para obtener y mostrar el ganador de un conjunto específico
  function mostrarGanadorDelConjunto(conjunto) {
    const conjuntoEnURL = getParametro('conjunto');

// Verificar si conjuntoEnURL es undefined o no está en conjuntosDeImagenes
    let conjuntoActual;
    if (conjuntoEnURL && conjuntosDeImagenes[conjuntoEnURL]) {
      conjunto = conjuntoEnURL;
    } else {
  // Si conjuntoEnURL no está definido o no existe, utiliza un conjunto predeterminado
      conjunto = 'conjunto1';
    }
    const ganadoresSpreadsheetId = '1DLhZ1EhiRenP-ZVJEy5vH3P7EhUdj20lkzKBItljQcY';
    const ganadoresSheetName = 'Hoja 1';
    const ganadoresUrl = `https://sheets.googleapis.com/v4/spreadsheets/${ganadoresSpreadsheetId}/values/${ganadoresSheetName}?key=AIzaSyCR25USMbhCwU_FkJ8QZ3SzPBPkftLPv0g`;

  // Realiza la solicitud para obtener los ganadores
    fetch(ganadoresUrl)
    .then(response => response.json())
    .then(data => {
      console.log('Data received from Winners Sheet:', data);

      // Verifica si hay datos en la hoja de cálculo de ganadores
      if (data.values && data.values.length > 0) {
        // Obtiene los ganadores separados por comas
        const ganadoresTexto = data.values[0][0];

        // Divide los ganadores en un array
        const ganadores = ganadoresTexto.split(', ');

        // Encuentra el ganador correspondiente al conjunto
        let ganadorConjunto = '';
        switch (conjunto.toLowerCase()) {
        case 'conjunto1':
          ganadorConjunto = ganadores[0];
          break;
        case 'conjunto2':
          ganadorConjunto = ganadores[1];
          break;
        case 'conjunto3':
          ganadorConjunto = ganadores[2];
          break;
        case 'conjunto4':
          ganadorConjunto = ganadores[3];
          break;
        case 'conjunto5':
          ganadorConjunto = ganadores[4];
          break;
        case 'conjunto6':
          ganadorConjunto = ganadores[5];
          break;
        case 'conjunto7':
          ganadorConjunto = ganadores[6];
          break;
        case 'conjunto8':
          ganadorConjunto = ganadores[7];
          break;
        case 'conjunto9':
          ganadorConjunto = ganadores[8];
          break;
        case 'conjunto10':
          ganadorConjunto = ganadores[9];
          break;
        case 'conjunto11':
          ganadorConjunto = ganadores[10];
          break;
        case 'conjunto14':
          ganadorConjunto = ganadores[13];
          break;
        case 'conjunto15':
          ganadorConjunto = ganadores[13];
          break;
          // Agrega más casos según sea necesario
        default:
          console.error(`Conjunto no reconocido: ${conjunto}`);
          break;
        }

        // Encuentra el objeto ganador en el array correspondiente
        const conjuntoGanador = conjuntosDeImagenes[conjunto].find(
          objeto => objeto.titulo === ganadorConjunto
          );

        if (conjuntoGanador) {
          // Obtén la URL de la imagen y el título del objeto ganador
          const urlImagenGanadora = conjuntoGanador.url;
          const tituloGanador = conjuntoGanador.titulo;
          const textoTema = obtenerTextoTema(conjunto);

          document.querySelector('.title.title-1').textContent = `El ganador a ${textoTema.nombre} es...`;

          // Actualiza la imagen y el texto en la página
          document.querySelector('.img.img-2').style.backgroundImage = `url('${urlImagenGanadora}')`;
          document.querySelector('.title.title-2').textContent = tituloGanador;
        } else {
          console.error(`No se encontró el ganador ${ganadorConjunto} en el conjunto ${conjunto}`);
        }

        // Muestra una alerta con el ganador del conjunto

        // Muestra la segunda parte de la galería

        $('.main-container').show();
            setTimeout(function() {
                    $('#ganada').css({
        display:"none"
      });

    }, 15000);  
      } else {
        console.error('No se encontraron datos en la hoja de cálculo de ganadores.');
      }
    })
    .catch(error => {
      console.error('Error al obtener datos de la hoja de cálculo de ganadores:', error);
    });
  }
// ... (código posterior sin cambios)



  actualizarTextoConjuntoActual();

  cargarImagenes();

  // Delegación de eventos para el botón dinámico
  $('.galeria').on('click', '#ganador', function () {
  // Obtener el conjunto del atributo de datos (data-conjunto)
    const conjuntoActual = $(this).data('conjunto');

  // Llamar a la función para mostrar el ganador del conjunto actual
    mostrarGanadorDelConjunto(conjuntoActual);
  });

  // Llama a la función para obtener y mostrar los ganadores al final del proceso
});

    let particles = [];
    let frequency = 20;
// Popolate particles
    setInterval(
      function () {
        popolate();
      }.bind(this),
      frequency);


let canvasWidth = 500;  // Modifica según tus necesidades
let canvasHeight = 300; // Modifica según tus necesidades

let c1 = createCanvas({ width: canvasWidth, height: canvasHeight });
let c2 = createCanvas({ width: canvasWidth, height: canvasHeight });
let c3 = createCanvas({ width: canvasWidth, height: canvasHeight });

let tela = c1.canvas;
let canvas = c1.context;

// $("body").append(tela);
$("#canvas-container").append(c3.canvas);
writeText(c2.canvas, c2.context, "HH\nAwards");


class Particle {
  constructor(canvas, options) {
    let random = Math.random();
    this.canvas = canvas;
    this.x = options.x;
    this.y = options.y;
    this.s = 3 + Math.random();
    this.a = 0;
    this.w = $(window).width();
    this.h = $(window).height();
    this.radius = 0.5 + Math.random() * 20;
    this.color = this.radius > 5 ? "#007BFF" : "#228711"; //this.randomColor()
  }

  randomColor() {
    let colors = ["#007BFF", "#228711"];
    return colors[this.randomIntFromInterval(0, colors.length - 1)];
  }

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  render() {
    this.canvas.beginPath();
    this.canvas.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.canvas.lineWidth = 2;
    this.canvas.fillStyle = this.color;
    this.canvas.fill();
    this.canvas.closePath();
  }

  move() {
    //this.swapColor()
    this.x += Math.cos(this.a) * this.s;
    this.y += Math.sin(this.a) * this.s;
    this.a += Math.random() * 0.8 - 0.4;

    if (this.x < 0 || this.x > this.w - this.radius) {
      return false;
    }

    if (this.y < 0 || this.y > this.h - this.radius) {
      return false;
    }
    this.render();
    return true;
  }}


  function createCanvas(properties) {
    let canvas = document.createElement('canvas');
    canvas.width = properties.width;
    canvas.height = properties.height;
    let context = canvas.getContext('2d');
    return {
      canvas: canvas,
      context: context };

    }

    function writeText(canvas, context, text) {
      let size = 150;
      context.font = size + "px Montserrat";
      context.fillStyle = "#111111";
      context.textAlign = "center";
      let lineheight = 70;
      let lines = text.split('\n');
      for (let i = 0; i < lines.length; i++) {
        context.fillText(lines[i], canvas.width / 2, canvas.height / 2 + lineheight * i - lineheight * (lines.length - 1) / 3);
      }
    }

    function maskCanvas() {
      c3.context.drawImage(c2.canvas, 0, 0, c2.canvas.width, c2.canvas.height);
      c3.context.globalCompositeOperation = 'source-atop';
      c3.context.drawImage(c1.canvas, 0, 0);
      blur(c1.context, c1.canvas, 2);
    }

    function blur(ctx, canvas, amt) {
      ctx.filter = `blur(${amt}px)`;
      ctx.drawImage(canvas, 0, 0);
      ctx.filter = 'none';
    }


/*
 * Function to clear layer canvas
 * @num:number number of particles
 */
    function popolate() {
      particles.push(
        new Particle(canvas, {
          x: canvasWidth / 2,
          y: canvasHeight / 2,
        })
        );

      return particles.length;
    }

    function clear() {
      canvas.globalAlpha = 0.03;
      canvas.fillStyle = '#111111';
      canvas.fillRect(0, 0, tela.width, tela.height);
      canvas.globalAlpha = 1;
    }

    function update() {
      clear();
      particles = particles.filter(function (p) {
        return p.move();
      });
      maskCanvas();
      requestAnimationFrame(update.bind(this));
    }

    update();