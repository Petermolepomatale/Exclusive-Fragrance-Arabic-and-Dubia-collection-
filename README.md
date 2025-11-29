# Arabic & Dubia Perfume Collection

A complete e-commerce website for luxury Middle Eastern fragrances with advanced features including multi-page navigation, user profiles, checkout system, and language support.

## 🌟 Features

### Pages
- **Home** - Product catalog with 22 premium perfumes
- **About** - Company story and information
- **Contact** - Contact form with business details
- **Checkout** - Complete payment processing

### Core Functionality
- ✅ **Shopping Cart** - Add/remove items, adjust quantities
- ✅ **Product Filtering** - Filter by category (Oud, Floral, Gourmand, Fresh)
- ✅ **Search** - Search products by name or description
- ✅ **User Profiles** - Login, Register, Account Management
- ✅ **Language Support** - English/Arabic with RTL support
- ✅ **AI Assistant** - Intelligent product recommendations
- ✅ **Responsive Design** - Works on all devices

### Checkout Features
- Shipping information collection
- Payment card processing
- Card number auto-formatting (1234 5678 9012 3456)
- Expiry date auto-formatting (MM/YY)
- CVV security code
- Form validation

### Pricing
- All prices in South African Rand (ZAR)
- Currency symbol: R
- Range: R 924.82 - R 2,774.82

## 📁 Project Structure

```
arabic-dubia-collection/
├── index.html          # Main HTML file with all pages
├── styles.css          # Complete styling
├── app.js              # Enhanced JavaScript functionality
├── products-data.js    # Product catalog (prices in ZAR)
├── config.js           # Configuration settings
├── FEATURES.md         # Detailed feature documentation
├── README.md           # This file
└── images/             # Product images
```

## 🚀 Quick Start

1. Open `index.html` in a web browser
2. Browse products on the home page
3. Use filters or search to find products
4. Add items to cart
5. Proceed to checkout
6. Navigate to About and Contact pages

## ⚙️ Configuration

Edit `config.js` to customize:

```javascript
const CONFIG = {
    currency: {
        symbol: 'R',
        name: 'ZAR'
    },
    contact: {
        phone: '+27 11 123 4567',
        email: 'info@arabicdubia.com',
        address: '123 Perfume Street, Johannesburg, South Africa',
        hours: 'Monday - Saturday: 9:00 AM - 9:00 PM'
    },
    social: {
        facebook: 'https://facebook.com/arabicdubia',
        instagram: 'https://instagram.com/arabicdubia',
        twitter: 'https://twitter.com/arabicdubia',
        whatsapp: 'https://wa.me/27111234567'
    },
    shipping: {
        freeShippingThreshold: 1850,
        standardDeliveryDays: '5-7',
        expressDeliveryDays: '2-3'
    }
};
```

## 🛍️ Product Catalog

22 premium fragrances across 4 categories:
- **Oud** (10 products) - Rich, woody, traditional
- **Floral** (6 products) - Romantic, elegant
- **Gourmand** (3 products) - Sweet, warm
- **Fresh** (3 products) - Light, energizing

Price range: R 924.82 - R 2,774.82

## 💳 Payment Processing

The checkout page includes:
- Full shipping address collection
- Credit/Debit card payment form
- Auto-formatting for card details
- Secure form validation
- Order summary with itemized pricing

## 🌐 Language Support

- **English** - Default language
- **Arabic** - Full RTL (Right-to-Left) support
- Switch languages using the header dropdown

## 📱 Responsive Design

Optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🤖 AI Assistant

Interactive chatbot that helps with:
- Product recommendations
- Pricing information
- Shipping policies
- Return policies
- General inquiries

## 📞 Contact Information

- **Phone**: +27 11 123 4567
- **Email**: info@arabicdubia.com
- **Address**: 123 Perfume Street, Johannesburg, South Africa
- **Hours**: Monday - Saturday: 9:00 AM - 9:00 PM

## 🔗 Social Media

- Facebook: [/arabicdubia](https://facebook.com/arabicdubia)
- Instagram: [@arabicdubia](https://instagram.com/arabicdubia)
- Twitter: [@arabicdubia](https://twitter.com/arabicdubia)
- WhatsApp: [+27 11 123 4567](https://wa.me/27111234567)

## 🛠️ Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- LocalStorage for cart persistence

## 📝 Recent Updates

### Latest Commit
- ✅ Added About, Contact, and Checkout pages
- ✅ Implemented user profile system (Login/Register/Account)
- ✅ Added language switcher (English/Arabic)
- ✅ Converted all prices to South African Rand (ZAR)
- ✅ Added complete payment processing with card details
- ✅ Removed unused files and cleaned up project
- ✅ Enhanced AI assistant with ZAR-aware responses

## 📄 License

© 2023 Arabic & Dubia Perfume Collection. All Rights Reserved.

## 🤝 Support

For support or inquiries, please contact us through:
- Email: info@arabicdubia.com
- Contact form on the website
- Social media channels

---

**Live Demo**: Open `index.html` in your browser to see the website in action!
