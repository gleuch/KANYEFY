function KANYEFY() {
  jQuery.fn.KANYEFY = function(c) {

    function eval_sentence(val) {
      if (val && val != '') {
        return val.replace(/(?!\<)(\!)/ig, '$1!!!!!').replace(/\./ig, '.....').replace(/\?/ig, '?????');
      }
    }

    return this.filter(function() {if (this.nodeType == 1) {var g = this.tagName.toLowerCase(); return !(this.className == 'unKANYEIFY' || g == 'style' || g == 'object' || g == 'embed' || g == 'head' || g == 'img' || g == 'script');} else {return true;}}).each(function() {
      if (this.nodeType == 3) {
        if (this.nodeValue.replace(/\s/ig, '') != '') {
          jQuery(this).after( eval_sentence(this.nodeValue) );
          this.nodeValue = '';
        }
      } else if (this.nodeType == 1) {
        if (jQuery(this).children().length > 0) {
          jQuery(this).contents().KANYEFY();
        } else if (jQuery(this).children().length == 0) {
          jQuery(this).html( eval_sentence(jQuery(this).text()) );
        } else {
          // what do you want me to do?
        }
      }
    });
  };

  jQuery('html').KANYEFY();
  document.body.style.textTransform = 'uppercase !important'; 
  document.body.innerHTML += '<style id="KANYEFY" type="text/css">html, body {text-transform: uppercase !important;}</style>';
}


// Load jQuery only if not present on site.
if (typeof(jQuery) == 'undefined') {
  var GM_JQ = document.createElement('script');
  GM_JQ.src = 'http://jquery.com/src/jquery-latest.js';
  GM_JQ.type = 'text/javascript';
  document.getElementsByTagName('head')[0].appendChild(GM_JQ);
  function load_jQuery() {if (typeof(jQuery) == 'undefined') {window.setTimeout(load_jQuery,100);} else {KANYEFY();}}
  load_jQuery();
} else {
  KANYEFY();
}