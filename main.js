'use strict';
    const largeImg = document.getElementById('largeImg');
    const thumbs = document.getElementById('thumbs');

    
    thumbs.addEventListener('click', function m(event) {
        let target = event.target;
  
        while (target != this) {
  
          if (target.nodeName == 'A') {
            showThumbnail(target.href, target.title);
            return false;
          }
          target = target.parentNode;
        }
      }
    )

    function showThumbnail(href, title) {
      largeImg.src = href;
      largeImg.alt = title;
      event.stopPropagation()
    }
    var imgs = thumbs.getElementsByTagName('img');
    for (let i = 0; i < imgs.length; i++) {
      let url = imgs[i].parentNode.href;
      let img = document.createElement('img');
      img.src = url;
    }