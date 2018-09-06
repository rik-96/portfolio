setTimeout(function(){
  $('#skills').fadeIn();
}, 2000);

function res(){
  var els = document.querySelectorAll('.vh-fix')
  if (!els.length) return

  for (var i = 0; i < els.length; i++) {
    var el = els[i]
    if (el.nodeName === 'IMG') {
      el.onload = function() {
        this.style.height = this.clientHeight + 'px'
      }
    } else {
      el.style.height = el.clientHeight + 'px'
    }
  }
}

res();