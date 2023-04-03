//your code here
const priceCells = document.querySelectorAll('[data-ns-test="prices"]');
  
  // Initialize total price to 0
  let totalPrice = 0;
  
  // Iterate over price cells and sum up their values
  priceCells.forEach(cell => {
    totalPrice += parseFloat(cell.textContent);
  });
  
  // Get grand total cell using data attribute selector
  const grandTotalCell = document.querySelector('[data-ns-test="grandTotal"]');
  
  // Set grand total cell's text content to the total price
  grandTotalCell.textContent = totalPrice;