async function addMenu() {
    const menu = await fetch('/menu/menu.html');
    const menuHtml = await menu.text();
    document.body.insertAdjacentHTML("afterbegin", menuHtml);
  }
  
  addMenu()