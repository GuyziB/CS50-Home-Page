function popup(mylink, windowname) {
  if (! window.focus)return true;
  var href;
  if (typeof(mylink) == 'string') href=mylink;
  else href=mylink.href;
  window.open(href, windowname, 'height=200, width=400, scrollbars=yes');
  return false;
}
