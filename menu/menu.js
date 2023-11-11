async function addMenu() {
    const menu = await fetch('/programacao-web-1/menu/menu.html');
    const menuHtml = await menu.text();
    document.body.insertAdjacentHTML("afterbegin", menuHtml);
  }
  
  addMenu()