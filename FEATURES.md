# Arabic & Dubia Perfume Collection - Enhanced Features

## New Features Added

### 1. Multi-Page Navigation
- **Home Page**: Product catalog with filtering and search
- **About Page**: Company information and story
- **Contact Page**: Contact form and business information
- **Checkout Page**: Complete order processing

### 2. Currency Conversion
- All prices displayed in South African Rand (ZAR)
- Automatic conversion from USD using exchange rate (1 USD = 18.5 ZAR)
- Currency symbol: R
- Configurable exchange rate in `config.js`

### 3. Language Support
- English and Arabic language options
- Language selector in header
- RTL (Right-to-Left) support for Arabic
- Automatic text direction switching

### 4. User Profile System
- **Login**: User authentication interface
- **Register**: New user registration with password confirmation
- **My Account**: Profile management with editable fields
  - Full Name
  - Email
  - Phone Number
  - Address

### 5. Complete Checkout Process
- **Shipping Information**:
  - Full Name
  - Email Address
  - Phone Number
  - Street Address
  - City
  - Postal Code
  - Country Selection

- **Payment Information**:
  - Cardholder Name
  - Card Number (auto-formatted: 1234 5678 9012 3456)
  - Expiry Date (auto-formatted: MM/YY)
  - CVV (3-digit security code)

### 6. Contact Information
- Phone: +27 11 123 4567
- Email: info@arabicdubia.com
- Address: 123 Perfume Street, Johannesburg, South Africa
- Working Hours: Monday - Saturday: 9:00 AM - 9:00 PM

### 7. Social Media Integration
- Facebook
- Instagram
- Twitter
- WhatsApp
- All links configurable in `config.js`

### 8. Enhanced Shopping Cart
- Prices displayed in ZAR
- Add/Remove items
- Quantity adjustment
- Real-time total calculation
- Persistent cart (localStorage)
- "Proceed to Checkout" button

### 9. AI Assistant
- Intelligent product recommendations
- Answers questions about:
  - Product features
  - Pricing (in ZAR)
  - Shipping policies
  - Return policies
  - Popular products

### 10. Contact Form
- Full Name
- Email Address
- Subject
- Message
- Form validation
- Success notification

## Configuration

All settings can be customized in `config.js`:

```javascript
const CONFIG = {
    currency: {
        symbol: 'R',
        name: 'ZAR',
        exchangeRate: 18.5
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

## Files Structure

- `index.html` - Main HTML file with all pages
- `styles.css` - Complete styling including new pages
- `app-enhanced.js` - Enhanced JavaScript with all features
- `products-data.js` - Product catalog (22 perfumes)
- `config.js` - Configuration settings
- `images/` - Product images

## How to Use

1. Open `index.html` in a web browser
2. Browse products on the home page
3. Use filters to find specific categories (Oud, Floral, Gourmand, Fresh)
4. Search for products by name or description
5. Add products to cart
6. Click cart icon to view cart
7. Proceed to checkout to complete order
8. Navigate to About and Contact pages using header menu
9. Switch language using language selector
10. Click user icon to login/register

## Features Not Duplicated

The following features were already present and were not duplicated:
- Product catalog display
- Category filtering
- Search functionality
- Shopping cart basic functionality
- AI chatbot interface
- Mobile responsive design
- Footer with social icons

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Notes

- Cart data persists in browser localStorage
- All prices automatically convert to ZAR
- Form validation included for all forms
- Card number and expiry date auto-format as you type
- Responsive design works on all screen sizes
