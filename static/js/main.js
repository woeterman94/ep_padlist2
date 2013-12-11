// filter pads
function filter(e) {
  var $el = $(this);
  var value = $el.val();
  var list = $('ul');
  if (!value.length) {
    list.removeClass('filtering');
  } else {
    list.addClass('filtering');

    var items = list.find('li');
    var arr = $el.val().split(/\s+/);
    var values = '(?=.*' + arr.join(')(?=.*') + ')';
    var regex = new RegExp(values, 'i');

    items.each(function(){
      var item = $(this);
      var text = item.find('a').text();
      console.log(text);

      if (regex.exec(text)) {
        item.addClass('visible');
      } else {
        item.removeClass('visible');
      }
    });
  }
}

// document ready
$(function (){
  $('input').on('keyup', filter);
});