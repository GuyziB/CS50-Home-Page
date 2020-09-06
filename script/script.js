function popup(mylink, windowname) {
  if (! window.focus)return true;
  var href;
  if (typeof(mylink) == 'string') href=mylink;
  else href=mylink.href;
  window.open(href, windowname, 'height=200, width=400, scrollbars=yes');
  return false;
}

$(document).ready(function() {
  $('#header_video_link').magnificPopup({
    type:'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });
});
