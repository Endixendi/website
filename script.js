(function(){
  function maybeRedirect(){
    if(location.hash === '#social' || location.hash === '#media' || location.pathname.endsWith('/social')){
      window.location.replace('https://linktr.ee/endixendi');
    }
  }

  maybeRedirect();
  window.addEventListener('hashchange', maybeRedirect);

  // Donate button
  document.getElementById('donate-btn').addEventListener('click', function(){
    window.open('https://streamelements.com/endixendi/tip', '_blank');
  });

  // Smooth scroll for buttons and links
  document.querySelectorAll('[data-scroll], a[href^="#"]').forEach(function(el){
    el.addEventListener('click', function(e){
      var targetId = this.getAttribute('data-scroll') || this.getAttribute('href');
      if(targetId && targetId.length > 1){
        var target = document.querySelector(targetId);
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
      }
    });
  });
})();
