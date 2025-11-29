// Configuration file for the website
const CONFIG = {
    // Currency settings
    currency: {
        symbol: 'R',
        name: 'ZAR',
        exchangeRate: 1 // Prices are already in ZAR
    },
    
    // OpenAI API configuration
    openai: {
        apiKey: '', // Add your OpenAI API key here: sk-...
        model: 'gpt-3.5-turbo',
        enabled: false // Set to true when you add your API key
    },
    
    // Contact information
    contact: {
        phone: '+27 11 123 4567',
        email: 'info@arabicdubia.com',
        address: '123 Perfume Street, Johannesburg, South Africa',
        hours: 'Monday - Saturday: 9:00 AM - 9:00 PM'
    },
    
    // Social media links
    social: {
        facebook: 'https://facebook.com/arabicdubia',
        instagram: 'https://instagram.com/arabicdubia',
        twitter: 'https://twitter.com/arabicdubia',
        pinterest: 'https://pinterest.com/arabicdubia',
        whatsapp: 'https://wa.me/27111234567'
    },
    
    // Shipping settings
    shipping: {
        freeShippingThreshold: 1850, // Free shipping over R1850
        standardDeliveryDays: '5-7',
        expressDeliveryDays: '2-3'
    }
};
