//20. In the following shopping cart add, remove, edit items
// => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// - add 'Meat' in the beginning of your shopping cart if it has not been already added
// - add Sugar at the end of your shopping cart if it has not been already added
// - remove 'Honey'
// - modify Tea to 'Green Tea'


  const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

  // adding Meat at the beggining
shoppingCart.unshift('Meat');
console.log(shoppingCart);

//sugar added at the end by using push
shoppingCart.push('sugar');
console.log(shoppingCart); 

// 'Honey' Removed

shoppingCart.splice(4 ,1);
console.log(shoppingCart);

// Tea modified to greentea

shoppingCart.splice(3 ,1 , "greentea");
console.log(shoppingCart);