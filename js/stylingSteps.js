/*jslint white: true */

(function () {
  'use strict';
  var waitingTime = 1000;

  function ready(fn) {
    if (document.readyState !== 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  function getReady() {
    setTimeout(startStyling, waitingTime)
  }

  function startStyling() {
    setTimeout(setMiddle, waitingTime);
    setTimeout(biggerTitle, waitingTime * 2);
    setTimeout(fontFamilies, waitingTime * 3);
    setTimeout(colors, waitingTime * 4);
    setTimeout(boringInfo, waitingTime * 5);
    setTimeout(coolLinks, waitingTime * 6);
    setTimeout(coolBottomLinks, waitingTime * 6);
  }

  function setMiddle() {
    getIdSetClass('container');
  }

  function biggerTitle() {
    var h1Element = document.getElementsByTagName('h1')[0];
    h1Element.style.fontSize = '150px';
    var h2Elements = document.getElementsByTagName('h2');
    h2Elements[0].style.fontSize = '50px';
    h2Elements[1].style.fontSize = '50px';
    getIdSetClass('title');
    getIdSetClass('title-hi');
    getIdSetClass('title-name');
  }

  function fontFamilies() {
    document.body.style.fontFamily = "'Roboto', sans-serif";
    getTagNameSetClass('h1', 'header-text');
    getTagNameSetClass('h2', 'header-text');
  }

  function colors() {
    document.body.style.color = '#fff';
    document.body.style.backgroundColor = '#222';
  }

  function boringInfo() {
    getIdSetClass('boring-info');
  }

  function coolLinks() {
    getTagNameSetClass('a', 'link');
  }

  function coolBottomLinks() {
    getIdSetClass('icons-list');
    getTagNameSetClass('li', 'icon-item');
  }

  function getIdSetClass(id) {
    document.getElementById(id).className += id;
  }

  function getTagNameSetClass(tagName, className) {
    var elements = document.getElementsByTagName(tagName);
    for (var i = 0; i < elements.length; i++) {
      elements[i].className += className;
    }
  }

  ready(getReady);
})();
