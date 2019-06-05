'use strict';
    const largeImg = document.getElementById('largeImg');
    const thumbs = document.getElementById('thumbs');
    
    thumbs.addEventListener('click', (event) => {
      let target = event.target;    
      
      while (target !== this) {
        let a = event.target.closest('a');
        if (!a) {
          return;
        }
          if (target.nodeName === 'A') {
            showThumbnail(target.href, target.title);
            return false;
          }
          target = target.parentNode;
        }
      }
    );

    function showThumbnail(href, title) {
      largeImg.src = href;
      largeImg.alt = title;
    }
    const imgs = thumbs.getElementsByTagName('img');
    for (let i = 0; i < imgs.length; i++) {
      const url = imgs[i].parentNode.href;
      const img = document.createElement('img');
      img.src = url;
    }