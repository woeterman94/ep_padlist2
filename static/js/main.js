/* global $ */

$(() => {
  const searchBox = $('input');
  const filter = () => {
    const query = searchBox.val();
    const list = $('ul');
    if (!query.length) {
      list.removeClass('filtering');
    } else {
      list.addClass('filtering');
      const words = query.split(/\s+/);
      const regex = new RegExp('(?=.*' + words.join(')(?=.*') + ')', 'i');
      list.find('li').each(function() {
        const item = $(this);
        const padId = item.find('a').text();
        item.toggleClass('visible', regex.test(padId));
      });
    }
  };
  filter();
  searchBox.on('input', filter);
});
