const accessToken = 'Xpms9MhbofnPVAVN-yAfW6oudtk41bRy'; // Replace with your actual access token

// Fetch categories from the API
fetch(`https://api.al-style.kz/api/categories?access-token=${accessToken}`)
    .then(response => response.json())
    .then(categories => {
        const categoryList = document.getElementById('category-list');

        categories.forEach(category => {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'category';
            categoryDiv.innerHTML = `
                <h2><a href="products.html?category_id=${category.id}">${category.name}</a></h2>
                
            `;
            categoryList.appendChild(categoryDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching categories:', error);
        const categoryList = document.getElementById('category-list');
        categoryList.innerHTML = '<p>Ошибка загрузки данных. Попробуйте позже.</p>';
    });

{/* <p><strong>Уровень вложенности:</strong> ${category.level}</p> */}