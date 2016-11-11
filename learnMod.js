javascript:(function(){
  console.log('LearnMod has Initialized');
  var e = new Event("keydown");
  e.keyCode=27;
  e.which=e.keyCode;
  e.shiftKey=true;
  document.dispatchEvent(e);

  const aside = document.querySelector("aside");
  const toggle = document.getElementById('toggle-nav');
  toggle.parentNode.removeChild(toggle);
  aside.parentNode.removeChild(aside);
  document.querySelector('article').style.marginLeft = '260px';
  const contentBox = document.getElementById('tab-content').firstElementChild;
  const content = contentBox.children;
  const links = document.createElement('aside');
  const linkList = document.createElement('ul');
  linkList.style = 'list-style: none; padding: 150px 20px 20px 20px;';
  links.appendChild(linkList);
  links.style = "position: fixed; left: 0; top: 0; width: 250px; bottom: 0; background-color: #E9EAEC; overflow: scroll;";
  document.getElementsByClassName('container-fluid')[0].appendChild(links);
  for (let i = 0; i < content.length; i++) {
    if (content[i].tagName === 'H2' || content[i].tagName === 'H3') {
      content[i].id = content[i].tagName + i;
      const listItem = document.createElement('li');
      listItem.style = 'padding: 5px;';
      const link = document.createElement('a');
      if (content[i].tagName === 'H3') {
        listItem.style = 'padding: 5px 5px 5px 15px';
        link.style = 'color: #333; word-wrap:break-word;';
      } else {
        link.style = 'color: black; font-size: 15px';
      }
      link.setAttribute('href', '#' + content[i].tagName + i);
      link.textContent = content[i].textContent;
      listItem.appendChild(link);
      linkList.appendChild(listItem);
    }
  }
})();
