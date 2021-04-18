const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) { //No4 means ready for response
    document.getElementById('ajax').innerHTML = xhr.responseText;
  }
};
xhr.open('GET', 'sidebar.html');
function sendAJAX() {
  xhr.send();
  document.getElementById('load').style.display = "none";
}
