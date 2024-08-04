
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Fully Loaded');
    // Function to get query parameters from URL
    function getQueryParams() {
        const params = {};
        const queryString = window.location.search.substring(1);
        const pairs = queryString.split('&');
        for (const pair of pairs) {
            const [key, value] = pair.split('=');
            params[decodeURIComponent(key)] = decodeURIComponent(value);
        }
        return params;
    }

    // Get the category from the query parameters
    const queryParams = getQueryParams();
    const category = queryParams.category;

    // Filter products based on the category
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        if (product.dataset.category === category) {
            product.classList.add('visible');
        }
    });
});