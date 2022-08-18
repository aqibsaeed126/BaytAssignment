
function addItems(i) {
  showItems(itemIndex += i);
}

function moveToItem(i) {
  showItems(itemIndex = i);
}

function hideAllItems(items) {
  for (i = 0; i < items.length; i++) {
    items[i].style.display = "none";  
  }
}

function deActiveNavDots(navs) {
  for (i = 0; i < navs.length; i++) {
    navs[i].className = navs[i].className.replace(" active", "");
  }
}

function getItemsAndNavs() {
  let items = document.getElementsByClassName("item-content");
  let navs = document.getElementsByClassName("nav");

  return [items, navs];
}

function showItems(n) {
  let [items, navs] = getItemsAndNavs();
  
  if (n > items.length) itemIndex = 1    
  if (n < 1) itemIndex = items.length

  hideAllItems(items);
  deActiveNavDots(navs);

  
  items[itemIndex-1].style.display = "flex"; 
  items[itemIndex-1].style['justify-content'] = "center"; 
  navs[itemIndex-1].className += " active";
}

let itemIndex = 1;
showItems(itemIndex);
