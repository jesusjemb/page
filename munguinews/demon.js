function demon(){

  (function () {
    let shouldDestroyParticles = true;
    let renderizar = false;

    'use strict';
    var app = {
      touchClick: 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch ? 'touchstart' : 'click',
      addClass: function (el, className) {
        if (Array.isArray(el)) {
          for (var i = 0; i < el.length; i++) {
            addingClass(el[i], className);
          }
        } else
        {
          addingClass(el, className);
        }
        function addingClass(el, cls) {
          if (el.classList)
            el.classList.add(cls);else
          if (!app.hasClass(el, cls))
            el.className += " " + cls;
        }
      },
      removeClass: function (el, className) {

        if (Array.isArray(el)) {
          for (var i = 0; i < el.length; i++) {
            removingClass(el[i], className);
          }
        } else {
          removingClass(el, className);
        }

        function removingClass(el, cls) {

          if (el.classList)
            el.classList.remove(cls);else
          if (app.hasClass(el, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            el.className = el.className.replace(reg, ' ');
          }
        }
      },
      hasClass: function (el, cls) {

        if (el.classList) {
          return el.classList.contains(cls);
        } else {
          return !!el.className.match(
            new RegExp("(\\s|^)" + cls + "(\\s|$)"));

        }
      },
      findAncestor: function (el, sel) {
        while ((el = el.parentElement) && !(el.matches || el.matchesSelector).call(el, sel));
        return el;
      },
      findChild(element, className) {
        var foundElement = null,found;
        function recurse(element, className, found) {
          for (var i = 0; i < element.childNodes.length && !found; i++) {
            var el = element.childNodes[i];
            var classes = el.className != undefined ? el.className.split(" ") : [];
            for (var j = 0, jl = classes.length; j < jl; j++) {
              if (classes[j] == className) {
                found = true;
                foundElement = element.childNodes[i];
                break;
              }
            }
            if (found)
              break;
            recurse(element.childNodes[i], className, found);
          }
        }
        recurse(element, className, false);
        return foundElement;
      },
      getPosition: function () {
        var doc = document.documentElement;
        var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        return [top, left];
      },
      onScreen: function (el) {
        var inScreen;
        var windowH = window.innerHeight;
        var elTop = el.getBoundingClientRect().top;
        if (parseInt(elTop) < windowH / 2) {
          inScreen = true;
        } else {
          inScreen = false;
        }
        return inScreen;
      },
      canvas: document.getElementById('demon') };


      function init() {
        initPlanes();
      }

      function initPlanes() {
        let planePos;
        let depth;
        if (window.innerWidth < 991) {
          planePos = 2000;
          depth = 2000;
        } else
        {
          planePos = 2000;
          depth = 900;
        }
        let scene = new THREE.Scene();
        app.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, depth);

        app.camera.position.set(0, 0, 0);

        let renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        app.canvas.appendChild(renderer.domElement);




        app.portrait = new Portrait();

        scene.add(app.portrait.container);

        function initListener() {

          window.addEventListener('resize', function () {

            app.camera.aspect = window.innerWidth / window.innerHeight;
            app.camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
          });
        }
        function render() {
          app.portrait.render();
          renderer.render(scene, app.camera);
          requestAnimationFrame(render);
        }
        initListener();
        render();
      }

      class Portrait {
        constructor() {
          let pos;
          if (window.innerWidth < 991) {
            pos = 750;
          } else
          {
            pos = -750;
          }

          this.container = new THREE.Object3D();
          this.container.destination = { x: 0, y: 0 };
          this.container.position.set(0, 0, pos);
          this.image;
          this.imageData = [];
          this.pointsBill = null;
          this.amount = 0;
          this.update = false;
          this.loadImg();

          this.loadImg = this.loadImg.bind(this);
          this.getImageData = this.getImageData.bind(this);
          this.createParticles = this.createParticles.bind(this);
          this.render = this.render.bind(this);
          this.onMousemove = this.onMousemove.bind(this);
          this.onMousedown = this.onMousedown.bind(this);
          this.onMouseup = this.onMouseup.bind(this);
          window.addEventListener("mousemove", this.onMousemove);
          if (app.touchClick == 'click') {
            window.addEventListener("mousedown", this.onMousedown);
            window.addEventListener("mouseup", this.onMouseup);
          } else
          {
            window.addEventListener("touchstart", this.onMousedown);
            window.addEventListener("touchend", this.onMouseup);
          }

        }
        loadImg() {
          let $this = this;
          this.image = new Image();
          this.image.crossOrigin = "anonymous";
          this.image.src = "redicodp.png";
          this.image.onload = function () {

            $this.getImageData();
            $this.createParticles();
            renderizar = true; 

          };

        }

        getImageData() {
          let canvas = document.createElement("canvas");
          let ctx = canvas.getContext("2d");
          canvas.width = this.image.width;
          canvas.height = this.image.height;
          ctx.drawImage(this.image, 0, 0);
          this.imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }


createParticles() {

  this.geometry = new THREE.Geometry();
  this.amount = 0;
  if (this.pointsBill !== null) {
    this.container.remove(this.pointsBill);
    this.pointsBill = null;
  }
  for (var y = 0; y < this.image.height; y += 2) {
    for (var x = 0; x < this.image.width; x += 2) {
      this.color = [this.imageData[(y * this.image.width + x) * 4], this.imageData[(y * this.image.width + x) * 4 + 1], this.imageData[(y * this.image.width + x) * 4 + 2], this.imageData[(y * this.image.width + x) * 4 + 3]];
      var isTransparent = this.color[3] === 0;
  
        this.destination = {
          x: x - this.image.width / 2,
          y: this.image.height / 2 - y,
          z: .4 * (0.299 * this.color[0] + 0.587 * this.color[1] + 0.114 * this.color[2]) * (50 * 0.01) };


          this.particle = new THREE.Vector3( this.destination.x, this.destination.y, 0);

             // this.particle = new THREE.Vector3(this.destination.x, this.destination.y, this.destination.z);

          this.geometry.vertices.push(this.particle);
          this.particle.destination = this.destination;

              if (!isTransparent) {
       

          this.outColor = new THREE.Color().set("rgb(" + this.color[0] + "," + this.color[1] + "," + this.color[2] + ")");

          if (y / 2 < this.image.height / 2 - 1 && x / 2 < this.image.width / 2 - 1) {
            this.faceA = new THREE.Face3(this.amount, this.amount + 1, this.amount + this.image.width / 2);
            this.geometry.faces.push(this.faceA);
            this.faceA.color.set(this.outColor);
            this.faceB = new THREE.Face3(this.amount + 1, this.amount + this.image.width / 2, this.amount + this.image.width / 2 + 1);
            this.geometry.faces.push(this.faceB);
            this.faceB.color.set(this.outColor);
          }
        }
          this.amount++;
        }

      }
      this.material = new THREE.MeshBasicMaterial({ wireframe: true, vertexColors: THREE.FaceColors, side: THREE.DoubleSide });
      this.pointsBill = new THREE.Mesh(this.geometry, this.material);
      this.container.add(this.pointsBill);
    }


    onMousemove(e) {
      var x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      var y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      this.container.destination.x = y * 1.5;
      this.container.destination.y = x * 1.5;
    }
    onMousedown(e) {
      this.update = false;
      this.mouseDown = true;

    }
    onMouseup(e) {
      this.mouseDown = false;
      this.update = true;
    }



    updateParticles() {
      for (var i = this.amount - 1; i > 0; i--) {
        var particle = this.pointsBill.geometry.vertices[i];

        particle.x += (particle.destination.x - particle.x) * 0.02;
        particle.y += (particle.destination.y - particle.y) * 0.02;
        particle.z += (particle.destination.z - particle.z) * 0.02;
      }
    }


    destroyParticles() {
      for (var i = this.amount - 1; i > 0; i--) {
        var particle = this.pointsBill.geometry.vertices[i];

    // Lógica para actualizar la posición de la partícula
        particle.x += (Math.floor(Math.random() * (particle.destination.x + 800 - (particle.destination.x - 800))) + (particle.destination.x - 800) - particle.x) * 0.09;
        particle.y += (Math.floor(Math.random() * (particle.destination.y + 800 - (particle.destination.y - 800))) + (particle.destination.y - 800) - particle.y) * 0.09;
        particle.z += (Math.floor(Math.random() * (particle.destination.z + 800 - (particle.destination.z - 800))) + (particle.destination.z - 800) - particle.z) * 0.09;

    // Actualizar la vista después de cambiar la posición
        this.pointsBill.geometry.verticesNeedUpdate = true;
      }
    }

    render() {

      this.container.rotation.x += (this.container.destination.x - this.container.rotation.x) * 0.05;
      this.container.rotation.y += (this.container.destination.y - this.container.rotation.y) * 0.05;


      if (this.mouseDown) {
        this.updateParticles();
        this.pointsBill.geometry.verticesNeedUpdate = true;
      }

      if (renderizar) {
        if (shouldDestroyParticles) {
          this.destroyParticles();

      shouldDestroyParticles = false; // Evitar futuras llamadas
      this.pointsBill.geometry.verticesNeedUpdate = true;
    }
  }
}
}



init();

})();


}