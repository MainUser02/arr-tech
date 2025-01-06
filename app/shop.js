const accessToken = 'Xpms9MhbofnPVAVN-yAfW6oudtk41bRy'; // Replace with your actual access token

// Fetch categories and products from APIs
Promise.all([
    fetch(`https://api.al-style.kz/api/categories?access-token=${accessToken}`).then(res => res.json()),
    fetch(`https://api.al-style.kz/api/elements?access-token=${accessToken}&limit=100`).then(res => res.json())
])
.then(([categories, products]) => {
    const categoryList = document.getElementById('category-list');

    categories.forEach(category => {
        // Filter products by category
        const categoryProducts = products.filter(product => product.category_id === category.id);

        // If no products in category, skip
        if (categoryProducts.length === 0) return;

        // Create category section
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';
        categoryDiv.innerHTML = `<h2>${category.name}</h2>`;

        // Add products to category section
        categoryProducts.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <h3>${product.name}</h3>
                <p><strong>Артикул:</strong> ${product.article}</p>
                <p><strong>Цена (розничная):</strong> ${product.price2 || 'По запросу'}</p>
                <p><strong>Остаток:</strong> ${product.quantity}</p>
            `;
            categoryDiv.appendChild(productDiv);
        });

        categoryList.appendChild(categoryDiv);
    });
})
.catch(error => {
    console.error('Error fetching data:', error);
    const categoryList = document.getElementById('category-list');
    categoryList.innerHTML = '<p>Ошибка загрузки данных. Попробуйте позже.</p>';
});