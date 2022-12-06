const productsBody = document.querySelector('.products-body');
const jsonUrl = 'js/products.json';
window.addEventListener('DOMContentLoaded', () => {
   loadData();
})
const loadData = () => {
   fetch(jsonUrl)
      .then(response => response.json()) 
      .then(data => {
         getData(data);
      });
}
const array = []
const getData = (arr) => {
   arr.forEach(element => {
      array.push(element);
      const productButton = document.createElement('button');
      productsBody.append(productButton);
      productButton.classList.add('product-button');
      productButton.setAttribute("onmousedown",`showModal(${element.productId})`);
      productButton.setAttribute("data-bs-toggle","modal");
      productButton.setAttribute("data-bs-target","#exampleModal");

      const productContainer = document.createElement('div');
      productButton.append(productContainer);
      productContainer.classList.add("product-container");

      const productImage = document.createElement('img');
      const productName = document.createElement('p');
      const productPrice = document.createElement('p');
      productContainer.append(productImage);
      productContainer.append(productName);
      productContainer.append(productPrice);
      productImage.setAttribute("src",element.productImg);
      productImage.setAttribute("height","360");
      productName.classList.add("product-name");
      productPrice.classList.add("product-price");
      productName.textContent = element.productName;
      productPrice.textContent = element.productPrice;
   });
}
const showModal = (dataIndex) => {
   const modalImg = document.getElementById('modal-img');
   const modalName = document.getElementById('modal-name');
   const modalPrice = document.getElementById('modal-price');
   const modalDesc = document.getElementById('modal-desc');
   modalImg.setAttribute("src",array[dataIndex].productImg);
   modalImg.setAttribute("height","360");
   modalName.textContent = array[dataIndex].productName;
   modalPrice.textContent = array[dataIndex].productPrice;
   modalDesc.textContent = array[dataIndex].productDesc;
}