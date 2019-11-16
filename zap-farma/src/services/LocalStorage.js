//   export const storageSettings = () => {
//     var storageName = "cart";
//     var cartArray = JSON.parse(localStorage.getItem(this.storageName)) ?  JSON.parse(localStorage.getItem(this.storageName)) : [] ;
//     var initArr = [];
// }

// export const initStorage = () => {
//   // if (!localStorage.getItem(this.storageName)) {
//   //   localStorage.setItem(this.storageName, JSON.stringify(this.initArr));
//   //   console.log(this.initArr)
//   // }
//   !localStorage.getItem(storageSettings.storageName) ? localStorage.setItem(storageSettings.storageName, JSON.stringify(storageSettings.initArr)) : console.error("LS already exists")
// }

// export const deleteProduct = (_index) => {
//   storageSettings.cartArray.splice(_index, 1);
//   updateStorage(storageSettings.cartArray);
// }

// export const updateStorage = (update) => {
//   var updateString = JSON.stringify(update);
//   localStorage.setItem(storageSettings.storageName, updateString);
// }

// export const addToCart = (produto) => {
//   //get array of API
//   initStorage()
//   console.log(storageSettings.cartArray);
//   storageSettings.cartArray.push(produto);
//   storageSettings.updateStorage(storageSettings.cartArray);
// }

// export default storageSettings;