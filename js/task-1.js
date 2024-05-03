const categoriesEl = document.querySelector('#categories').children;

console.log(`Number of categories: ${categoriesEl.length}`);
for (const child of categoriesEl) {
  console.log(`Category: ${child.children[0].innerHTML}`);
  console.log(`Elements: ${Object.values(child.children[1].children).length}`);
}
