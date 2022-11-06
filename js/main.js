const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarrito = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContaimer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const cardsContainer = document.querySelector (".cards-container");
menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobilepMenu);
menuCarrito.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);
function toggleDesktopMenu() {
  console.log("click");
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobilepMenu() {
  console.log("click mobile menu");
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  closeProductDetailAside();
  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  const isMobileMenuClose = mobileMenu.classList.contains("inactive");
  // console.log("click carrito shoppingCartContainer");

  if (!isMobileMenuClose) {
    mobileMenu.classList.add("inactive");
  }
  const isProductDetailClose = productDetailContaimer.classList.contains("inactive");
  if (!isProductDetailClose) {
    productDetailContaimer.classList.add("inactive");
  }
  shoppingCartContainer.classList.toggle("inactive");
}
function openProductDetailAside(){
  shoppingCartContainer.classList.add("inactive");
  productDetailContaimer.classList.remove('inactive');

}
function closeProductDetailAside(){
  productDetailContaimer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price : 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name: 'Pantalla',
    price : 2220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});
productList.push({
    name: 'Computadora',
    price : 12220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});
function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        //product = {name,price,image}
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click',openProductDetailAside,console.log);
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
         
        const productInfoDiv = document.createElement('div');
    
        const productInfoPrice = document.createElement('p');
        productInfoPrice.innerText = '$' + product.price;
        const productInfoName = document.createElement('p');
        productInfoName.innerText = product.name;
    
        productInfoDiv.appendChild(productInfoPrice);
        productInfoDiv.appendChild(productInfoName);
    
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg); 
        productCard.appendChild(productInfo); 
        
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);
