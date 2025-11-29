# Arabic & Dubia Perfume Collection Website

A fully functional e-commerce website for the Arabic & Dubia perfume collection with advanced features including AI chatbot, shopping cart, and responsive design.

## Features

- ✨ **22 Premium Perfumes** - Complete product catalog with detailed descriptions
- 🛒 **Shopping Cart** - Add/remove items, adjust quantities, persistent storage
- 🤖 **AI Assistant** - Interactive chatbot for product recommendations
- 🔍 **Search & Filter** - Find perfumes by name, description, or category
- 📱 **Responsive Design** - Works perfectly on all devices
- 💾 **Local Storage** - Cart persists between sessions
- 🎨 **Modern UI/UX** - Elegant design with smooth animations

## How to Add Your Product Images

### Step 1: Create the images folder
The website expects images in the `images/` folder. Create it if it doesn't exist:

```bash
mkdir images
```

### Step 2: Add your images
Place your product images in the `images/` folder with these exact names:

- `hero-banner.jpg` - Main banner image
- `placeholder.jpg` - Fallback image for missing products
- `intense-noir.jpg`
- `zara-men.jpg`
- `barakkat-amber-eve.jpg`
- `barakkat-satin-oud.jpg`
- `barakkat-white.jpg`
- `mocha-wood.jpg`
- `ammerat-al-arab.jpg`
- `hayaati.jpg`
- `des-tentations.jpg`
- `white-oud.jpg`
- `sutoor.jpg`
- `honor-glory.jpg`
- `sublime.jpg`
- `rave-now.jpg`
- `for-glory.jpg`
- `yara.jpg`
- `brown-orchid-purple.jpg`
- `brown-orchid-ruby.jpg`
- `yara-white.jpg`
- `brown-orchid-rose.jpg`
- `paradox-rossa.jpg`
- `amethyst.jpg`

### Step 3: Image Requirements
- **Format**: JPG, PNG, or WebP
- **Recommended size**: 500x500px to 800x800px
- **Aspect ratio**: Square (1:1) works best
- **File size**: Keep under 500KB for fast loading

### Step 4: Using placeholder images (temporary)
If you don't have all images yet, the website will automatically use `placeholder.jpg` for missing images. You can:
1. Create a simple placeholder image
2. Or download free perfume images from Unsplash/Pexels temporarily

## How to Push to GitHub

### Step 1: Initialize Git (if not already done)
```bash
cd arabic-dubia-collection
git init
```

### Step 2: Add the remote repository
```bash
git remote add origin https://github.com/Petermolepomatale/Exclusive-Fragrance-Arabic-and-Dubia-collection-.git
```

### Step 3: Add all files
```bash
git add .
```

### Step 4: Commit your changes
```bash
git commit -m "Initial commit: Arabic & Dubia perfume collection website"
```

### Step 5: Push to GitHub
```bash
git push -u origin main
```

If the branch is named `master` instead of `main`, use:
```bash
git push -u origin master
```

### If you get authentication errors:
1. Make sure you're logged into GitHub
2. Use a Personal Access Token instead of password
3. Or use GitHub Desktop for easier management

## Running the Website Locally

Simply open `index.html` in your web browser. No server required!

For a better development experience with live reload:
```bash
# If you have Python installed
python -m http.server 8000

# If you have Node.js installed
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## File Structure

```
arabic-dubia-collection/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── app.js             # Main JavaScript functionality
├── products-data.js   # Product catalog data
├── README.md          # This file
└── images/            # Product images folder
    ├── hero-banner.jpg
    ├── placeholder.jpg
    └── [product images...]
```

## Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary: #8B4513;    /* Main brown color */
    --secondary: #D2691E;  /* Secondary brown */
    --accent: #CD853F;     /* Accent color */
}
```

### Adding More Products
Edit `products-data.js` and add new product objects:
```javascript
{
    id: 23,
    name: "New Perfume",
    description: "Description here...",
    price: 99.99,
    category: "oud", // oud, floral, gourmand, or fresh
    image: "images/new-perfume.jpg"
}
```

### Modifying AI Responses
Edit the `generateBotResponse()` function in `app.js` to customize chatbot responses.

## Security Features

- ✅ Input validation
- ✅ XSS protection through proper escaping
- ✅ No sensitive data in localStorage
- ✅ Secure image loading with fallbacks
- ✅ HTTPS ready (configure on server)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

All rights reserved © 2023 Arabic & Dubia Perfume Collection

## Support

For questions or issues, contact: info@arabicdubia.com
```

This README provides complete instructions for adding images and pushing to GitHub!
