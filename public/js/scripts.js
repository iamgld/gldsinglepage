(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
module.exports={
  "platzy": [
    {
      "name": "Mi perfil",
      "url": "https://platzi.com/@Gregorlopezdev/"
    },
    {
      "name": "Desarrollo web",
      "url": "https://platzi.com/clases/html5-css3/"
    },
    {
      "name": "Responsive desing",
      "url": "https://platzi.com/clases/responsive-design/"
    },
    {
      "name": "Animaciones Web",
      "url": "https://platzi.com/clases/animaciones-web/"
    },
    {
      "name": "Postcss",
      "url": "https://platzi.com/clases/postcss/"
    },
    {
      "name": "Bootstrap y foundations",
      "url": "https://platzi.com/clases/fw-frontend/"
    },
    {
      "name": "Fundamentos de la ingeniería de software",
      "url": "https://platzi.com/clases/ingenieria/"
    }
  ],
  "edteam": [
    {
      "name": "Html desde cero",
      "url": "https://app.ed.team/curso/15"
    },
    {
      "name": "Css desde cero",
      "url": "https://app.ed.team/curso/8"
    },
    {
      "name": "Javascript desde cero",
      "url": "https://app.ed.team/curso/19"
    },
    {
      "name": "Sass desde cero",
      "url": "https://app.ed.team/curso/27"
    },
    {
      "name": "Git desde cero",
      "url": "https://app.ed.team/curso/12"
    }
  ]
}

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Crear elementos con atributos e hijo
var createCustomElement = exports.createCustomElement = function createCustomElement(element, attributes, children) {
  var customElement = document.createElement(element);
  if (children !== undefined) {
    children.forEach(function (el) {
      if (el.nodeType) {
        if (el.nodeType === 1 || el.nodeType === 11) customElement.appendChild(el);
      } else {
        customElement.innerHTML += el;
      }
    });
  }
  addAttributes(customElement, attributes);
  return customElement;
};
// Añadir un objeto de atributos a un elemento
var addAttributes = exports.addAttributes = function addAttributes(element, attrObj) {
  for (var attr in attrObj) {
    if (attrObj.hasOwnProperty(attr)) element.setAttribute(attr, attrObj[attr]);
  }
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Este es un ejemplo de como exportar funciones desde un archivo
// En index.js se importan estas funciones

// export const saludo = () => {
//    console.log('Hola mundo')
// };

//  export const despedida = () => {
//    console.log('Adiós mundo')
//  };

// Funcion que hace al menu sticky
var setMenuSticky = function setMenuSticky(menuIdentifier) {
  var menuOffsetTop = menuIdentifier.offsetTop;
  var links = [].concat(_toConsumableArray(menuIdentifier.querySelectorAll('a')));
  window.addEventListener('scroll', function (event) {
    event.preventDefault();window.pageYOffset > menuOffsetTop ? function () {
      menuIdentifier.classList.add('menuSticky');
      links.map(function (link) {
        return link.classList.add('menuSticky-link');
      });
    }() : function () {
      menuIdentifier.classList.remove('menuSticky');
      links.map(function (link) {
        return link.classList.remove('menuSticky-link');
      });
    }();
  });
};

var eventClickForSmoothScrolling = function eventClickForSmoothScrolling(menuIdentifier) {
  menuIdentifier.addEventListener('click', function (e) {
    function smoothScroling(hash) {
      e.preventDefault();
      var end = hash;
      initScroll(end);
    }
    var hash = e.target.localName === 'span' || e.target.hash.slice(1);document.getElementById(hash) && smoothScroling(hash);
  });
};
var initScroll = function initScroll(end) {
  var ending = document.getElementById(end).offsetTop;
  var scroll = window.scrollY;
  var speed = 40;
  var smoothScroling = function smoothScroling(change) {
    var scrollMoving = setInterval(function () {
      scroll = window.scrollY;
      change ? scroll += speed : scroll -= speed;
      window.scroll(0, scroll);
      change ? ending - 100 >= scroll || clearInterval(scrollMoving) : ending <= scroll || clearInterval(scrollMoving);
    }, 10);
  };ending >= scroll && smoothScroling(true);ending <= scroll && smoothScroling(false);
};
var scrollup = function scrollup(button) {
  var end = button.parentNode.id;
  button.addEventListener('click', function (e) {
    initScroll(end);
  });
};
var scrollupToggle = function scrollupToggle(view, button) {
  var heightView = view.clientHeight;
  var heightScroll = window.scrollY;
  function viewButton(button) {
    var scrollerDown = setInterval(function () {
      heightScroll = window.scrollY;heightView <= heightScroll && function () {
        clearInterval(scrollerDown);
        button.classList.toggle('active');
        scrollup(button);
        hideButton(button);
      }();
    }, 500);
  }
  function hideButton() {
    var scrollerUp = setInterval(function () {
      heightScroll = window.scrollY;heightView >= heightScroll && function () {
        clearInterval(scrollerUp);
        button.classList.toggle('active');
        viewButton(button);
      }();
    }, 500);
  }
  ;heightView >= heightScroll && viewButton(button);
};

exports.setMenuSticky = setMenuSticky;
exports.eventClickForSmoothScrolling = eventClickForSmoothScrolling;
exports.scrollupToggle = scrollupToggle;

},{}],4:[function(require,module,exports){
'use strict';

var _helpers = require('./helpers');

var _courses = require('./data/courses.json');

var _courses2 = _interopRequireDefault(_courses);

var _menu = require('./modules/menu');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// importacion del archivo de data
(function (c) {
  // Funcion que hace sticky al menu
  (0, _menu.setMenuSticky)(document.getElementById('menu'));
  // Funcion que toda al menu de un efeco smooth
  (0, _menu.eventClickForSmoothScrolling)(document.getElementById('menu'));
  // Funcion que hace aparece el button de ir arriba
  // Primer parametro elemento el cual sera el limite para que aparesca el button
  // Segundo parametro elemento donde esta el buttom
  (0, _menu.scrollupToggle)(document.getElementById('bannerHeader'), document.getElementById('scrollupButton'));
  // Funcion de los contenidos toggleables en la seccion aboutme
  var handlerClickOnAboutme = function handlerClickOnAboutme(button, target) {
    var aboutmeClick = function aboutmeClick(button, target) {
      var status = false;
      button.addEventListener('click', function (e) {
        // prevenimos un siguiente click que impida a la animacion terminar
        button.setAttribute('disabled', 'true');
        // Añadimos will-change a los elementos que van a ser animados
        target.style.willChange = 'max-height';
        // Animacion de entrada del contenido oculto
        target.classList.toggle('enable');
        /**
         * El operador es para agregar enable en el primer click y luego en los posteriores
         * ir haciendo toggle  entre enable y disable
         */
        status
        //  Animacion de salida del contenido oculto
        ? target.classList.toggle('disable') : status = true;
        // Removemos el will-change cuando las animaciones terminen
        target.addEventListener('animationend', function (e) {
          e.target.style.willChange = 'auto';
          button.removeAttribute('disabled');
        });
      });
    };
    button ? aboutmeClick(button, target) : target ? c.error('No se ha encontrado el button') : c.error('No se ha encontrado el target');
  };
  handlerClickOnAboutme(document.querySelector('.aboutme-button'), document.querySelector('.aboutme-text:last-of-type'));
  // Funcion de la ventana modal en la seccion studies
  // Imprimir modal
  var printModal = function printModal(content) {
    // contenedor el contenido del modal
    var modalContentEl = (0, _helpers.createCustomElement)('div', {
      class: 'modalStudies-content'
    }, [content]);
    // contenedor del modal
    var modalContainerEl = (0, _helpers.createCustomElement)('div', {
      id: 'modalStudies',
      class: 'modalStudies'
    }, [modalContentEl]);
    // imprimir el modal
    document.body.appendChild(modalContainerEl);
    // remover modal
    var removeModal = function removeModal() {
      document.body.removeChild(modalContainerEl);
    };
    modalContainerEl.addEventListener('click', function (e) {
      e.target === modalContainerEl && removeModal();
    });
  };
  // estructura del contenido del modal
  var createContentModal = function createContentModal(coursesList) {
    var content = [];
    coursesList.map(function (item) {
      content.push('\n        <section class="modalStudies-content_item">\n          <div class="modalStudies-content_boxone">\n            <p class="modalStudies-content_paragraph">' + item.name + '</p>\n          </div>\n          <div class="modalStudies-content_boxtwo">\n            <a href="' + item.url + '" class="modalStudies-content_link">Ir</a>\n          </div>\n        </section>\n      ');
    });
    return content.join(' ');
  };
  var handlerClickOnStudies = function handlerClickOnStudies(element) {
    var studiesClick = function studiesClick() {
      element.addEventListener('click', function (e) {
        e.target.innerText === 'Cursos en Platzi' ? printModal(createContentModal(_courses2.default.platzy)) : c.error('No se encontro el button platzy');e.target.innerText === 'Cursos en Edteam' ? printModal(createContentModal(_courses2.default.edteam)) : c.error('No se encontro el button edteam');
      });
    };
    element ? studiesClick() : c.error('No se encontro el elemento');
  };
  handlerClickOnStudies(document.getElementById('studies'));
})(console);
// Importacion de modulos
// importacion del archivo de helpers

},{"./data/courses.json":1,"./helpers":2,"./modules/menu":3}]},{},[4]);
