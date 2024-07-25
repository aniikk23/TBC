  document.querySelector('.language-div').addEventListener('mouseover', () => {
    document.querySelector('.eng-div').style.display = 'block';
  });
  document.querySelector('.eng-div').addEventListener('mouseover', () => {
    document.querySelector('.eng-div').style.display = 'block';
  });


  document.querySelector('.language-div').addEventListener('mouseout', () => {
    document.querySelector('.eng-div').style.display = 'none';
  });
  document.querySelector('.eng-div').addEventListener('mouseout', () => {
    document.querySelector('.eng-div').style.display = 'none';
  });

const products = document.querySelector('#header-products')
const offers = document.querySelector('#header-offers')
const conceptSpace = document.querySelector('#header-concept-space')
const dropdownSection =  document.querySelector('.dropdown-section')
const digitalBank = document.querySelector('.digital-bank')
const productDropdown = document.querySelector('.product-dropdown')
const offersDropdown = document.querySelector('.offers-dropdown')
const conceptSpaceDropdown = document.querySelector('.concept-space-dropdown')
products.addEventListener('click', () =>{
    dropdownSection.style.display = 'block'
    digitalBank.style.display = 'block'
    productDropdown.style.display = 'block'
    offersDropdown.style.display = 'none'
    conceptSpaceDropdown.style.display = 'none'
})
offers.addEventListener('click', () =>{
    dropdownSection.style.display = 'block'
    digitalBank.style.display = 'block'
    offersDropdown.style.display = 'block'
    productDropdown.style.display = 'none'
    conceptSpaceDropdown.style.display = 'none'
})
conceptSpace.addEventListener('click', () =>{
    dropdownSection.style.display = 'block'
    digitalBank.style.display = 'block'
    conceptSpaceDropdown.style.display = 'block'
    productDropdown.style.display = 'none'
    offersDropdown.style.display = 'none'
})
