window.onload = function() {
    createStars();
    btnFunctions();
}


function createStars() {
    const numStars = 200;
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = Math.random() * 100 + '%';
      star.style.left = Math.random() * 100 + '%';
      star.style.animationDuration = (Math.random() * 3 + 2) + 's';
      document.body.appendChild(star);
    }
}

function btnFunctions() {
  $(".btn-next").click(function() {
    let page = parseInt($(this).attr("data-page"));
    $("#page" + page).animate({opacity: 'toggle'}, function() {
      let newPage = page + 1;
      $("#page" + newPage).animate({opacity: 'toggle'});
      checkParabens(newPage)
    });
  })

  $(".btn-back").click(function() {
    let page = parseInt($(this).attr("data-page"));
    $("#page" + page).animate({opacity: 'toggle'}, function() {
      let newPage = page - 1;
      $("#page" + newPage).animate({opacity: 'toggle'});
      checkParabens(newPage)
    });
  })
}

function checkParabens(actualPage) {
  if (actualPage === 5) {
    $("#audio-parabens")[0].play();
  } else {
    $("#audio-parabens")[0].pause();
  }
}