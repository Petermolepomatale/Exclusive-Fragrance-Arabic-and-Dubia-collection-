// Shopping Cart
let cart = [];
const cartIcon = document.getElementById('cart-icon');
const cartOverlay = document.getElementById('cart-overlay');
const cartClose = document.getElementById('cart-close');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.querySelector('.cart-count');

// AI Assistant
const aiToggle = document.getElementById('ai-toggle');
const aiChatbox = document.getElementById('ai-chatbox');
const aiClose = document.getElementById('ai-close');
const aiMessages = document.getElementById('ai-messages');
const aiInput = document.getElementById('ai-input');
const aiSend = document.getElementById('ai-send');

// Mobile Menu
const mobileMenu = document.getElementById('mobile-menu');
const mainNav = document.getElementById('main-nav');

// Search
const searchInput = document.getElementById('search-input');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(products);
    setupEventListeners();
    updateCartCount();
    loadCartFromStorage();
});

// Display products in the grid
function displayProducts(productsToShow) {
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-category', product.category);
        
        productCard.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='images/oud.jpg'">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                    <button class="wishlist"><i class="far fa-heart"></i></button>
                </div>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
    
    // Add event listeners to Add to Cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            if (filter === 'all') {
                displayProducts(products);
            } else {
                const filteredProducts = products.filter(product => product.category === filter);
                displayProducts(filteredProducts);
            }
        });
    });
    
    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) || 
            product.description.toLowerCase().includes(searchTerm)
        );
        displayProducts(filteredProducts);
    });
    
    // Cart functionality
    cartIcon.addEventListener('click', function() {
        cartOverlay.classList.add('active');
        updateCartDisplay();
    });
    
    cartClose.addEventListener('click', function() {
        cartOverlay.classList.remove('active');
    });
    
    cartOverlay.addEventListener('click', function(e) {
        if (e.target === cartOverlay) {
            cartOverlay.classList.remove('active');
        }
    });
    
    // AI Assistant functionality
    aiToggle.addEventListener('click', function() {
        aiChatbox.classList.toggle('active');
    });
    
    aiClose.addEventListener('click', function() {
        aiChatbox.classList.remove('active');
    });
    
    aiSend.addEventListener('click', sendMessage);
    
    aiInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Mobile menu
    mobileMenu.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    updateCartCount();
    saveCartToStorage();
    showNotification(`${product.name} added to cart!`);
}

// Update cart count in header
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Update cart display in sidebar
function updateCartDisplay() {
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">Your cart is empty</p>';
        cartTotal.textContent = '$0.00';
        return;
    }
    
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-img">
                <img src="${item.image}" alt="${item.name}" onerror="this.src='images/oud.jpg'">
            </div>
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-actions">
                    <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn increase" data-id="${item.id}">+</button>
                    <button class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = `$${total.toFixed(2)}`;
    
    // Add event listeners to cart item buttons
    document.querySelectorAll('.decrease').forEach(button => {
        button.addEventListener('click', function() {
            const itemId = parseInt(this.getAttribute('data-id'));
            decreaseQuantity(itemId);
        });
    });
    
    document.querySelectorAll('.increase').forEach(button => {
        button.addEventListener('click', function() {
            const itemId = parseInt(this.getAttribute('data-id'));
            increaseQuantity(itemId);
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const itemId = parseInt(this.getAttribute('data-id'));
            removeFromCart(itemId);
        });
    });
}

// Decrease item quantity in cart
function decreaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    
    if (item.quantity > 1) {
        item.quantity -= 1;
    } else {
        removeFromCart(productId);
        return;
    }
    
    updateCartCount();
    updateCartDisplay();
    saveCartToStorage();
}

// Increase item quantity in cart
function increaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    item.quantity += 1;
    
    updateCartCount();
    updateCartDisplay();
    saveCartToStorage();
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    
    updateCartCount();
    updateCartDisplay();
    saveCartToStorage();
}

// Save cart to localStorage
function saveCartToStorage() {
    localStorage.setItem('perfumeCart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('perfumeCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background-color: var(--primary);
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        box-shadow: var(--shadow);
        z-index: 3000;
        transition: var(--transition);
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// AI Assistant - Send message
function sendMessage() {
    const message = aiInput.value.trim();
    
    if (message === '') return;
    
    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.textContent = message;
    aiMessages.appendChild(userMessage);
    
    // Clear input
    aiInput.value = '';
    
    // Scroll to bottom
    aiMessages.scrollTop = aiMessages.scrollHeight;
    
    // Generate bot response (simulated)
    setTimeout(() => {
        const botResponse = generateBotResponse(message);
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        botMessage.textContent = botResponse;
        aiMessages.appendChild(botMessage);
        
        // Scroll to bottom
        aiMessages.scrollTop = aiMessages.scrollHeight;
    }, 1000);
}

// AI Assistant - Generate bot response
function generateBotResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
        return "Hello! I'm your perfume assistant. How can I help you find the perfect fragrance today?";
    } else if (lowerMessage.includes('recommend') || lowerMessage.includes('suggest')) {
        if (lowerMessage.includes('oud') || lowerMessage.includes('wood')) {
            return "I recommend our Barakkat Satin Oud or Lattafa Badee Al Oud Honor & Glory for a rich, authentic oud experience. Both are long-lasting and perfect for special occasions.";
        } else if (lowerMessage.includes('floral') || lowerMessage.includes('flower')) {
            return "For floral scents, try our Brown Orchid Rose Edition or Paradox Rossa. Both feature beautiful rose notes blended with other florals for a romantic and elegant fragrance.";
        } else if (lowerMessage.includes('fresh') || lowerMessage.includes('light')) {
            return "For fresh, light fragrances, I suggest Zara Men or Sutoor Eau de Parfum. Both are versatile and perfect for daily wear.";
        } else if (lowerMessage.includes('sweet') || lowerMessage.includes('gourmand')) {
            return "If you enjoy sweet, edible-like scents, try Mocha Wood or Brown Orchid Purple. Both have delicious gourmand notes that are warm and comforting.";
        } else {
            return "Based on your interest, I'd recommend trying our best-selling Intense Noir. It's a sophisticated scent with notes of bergamot, cardamom, and vanilla that works for various occasions.";
        }
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
        return "Our perfumes range from $49.99 to $149.99, depending on the fragrance and size. You can view all prices on our product pages. We also offer special discounts on select items.";
    } else if (lowerMessage.includes('shipping') || lowerMessage.includes('delivery')) {
        return "We offer worldwide shipping. Standard delivery takes 5-7 business days, and express shipping is available for an additional fee. All orders over $100 qualify for free standard shipping.";
    } else if (lowerMessage.includes('return') || lowerMessage.includes('exchange')) {
        return "We have a 30-day return policy for unopened items. If you're not satisfied with your purchase, you can return it for a full refund or exchange. Please see our Returns Policy page for details.";
    } else if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
        return "You're welcome! Is there anything else I can help you with today?";
    } else if (lowerMessage.includes('best') || lowerMessage.includes('popular')) {
        return "Our most popular fragrances are Barakkat Satin Oud, Intense Noir, and Lattafa Badee Al Oud Amethyst. They're loved for their long-lasting scents and luxurious notes.";
    } else {
        return "I'm here to help you find the perfect perfume! You can ask me about recommendations, pricing, shipping, or anything else about our fragrance collection.";
    }
}
