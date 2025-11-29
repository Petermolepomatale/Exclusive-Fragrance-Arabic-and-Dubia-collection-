# 🚀 Complete Setup Guide

## Quick Start (3 Steps)

### 1️⃣ Add Images
```bash
# Create images folder
mkdir images

# Add your product images to the images folder
# See IMAGE-GUIDE.md for details
```

### 2️⃣ Test Locally
```bash
# Simply open index.html in your browser
# Or double-click index.html
```

### 3️⃣ Push to GitHub
```bash
# Option A: Use the batch file (Windows)
push-to-github.bat

# Option B: Manual commands
git init
git remote add origin https://github.com/Petermolepomatale/Exclusive-Fragrance-Arabic-and-Dubia-collection-.git
git add .
git commit -m "Initial commit: Arabic & Dubia perfume website"
git push -u origin main
```

---

## Detailed Setup Instructions

### Prerequisites

✅ **Git** - Download from: https://git-scm.com/download/win
✅ **Web Browser** - Chrome, Firefox, Edge, or Safari
✅ **Text Editor** (optional) - VS Code, Notepad++, or any editor

### Step-by-Step Setup

#### 1. Prepare Your Images

**Option A: Use Your Own Photos**
1. Take photos of your perfume bottles
2. Resize to 500x500px (use any image editor)
3. Save as JPG format
4. Rename according to product names (see IMAGE-GUIDE.md)
5. Place in `images/` folder

**Option B: Create Temporary Placeholders**
1. Open `create-placeholders.html` in your browser
2. Click "Generate Product Image"
3. Right-click and save as each product name
4. Repeat for all 24 images
5. Place in `images/` folder

**Option C: Download Free Stock Images**
1. Visit Unsplash.com or Pexels.com
2. Search for "perfume"
3. Download high-quality images
4. Rename and place in `images/` folder

#### 2. Test the Website

1. **Open the website:**
   - Double-click `index.html`
   - Or right-click → Open with → Your browser

2. **Test all features:**
   - ✅ Browse products
   - ✅ Filter by category
   - ✅ Search for products
   - ✅ Add items to cart
   - ✅ Adjust quantities
   - ✅ Chat with AI assistant
   - ✅ Test on mobile (resize browser)

3. **Check for issues:**
   - Press F12 to open Developer Tools
   - Look for errors in Console tab
   - Verify all images load correctly

#### 3. Push to GitHub

**Method 1: Using the Batch File (Easiest)**
```bash
# Just double-click this file:
push-to-github.bat
```

**Method 2: Manual Git Commands**
```bash
# Navigate to the project folder
cd arabic-dubia-collection

# Initialize Git
git init

# Add remote repository
git remote add origin https://github.com/Petermolepomatale/Exclusive-Fragrance-Arabic-and-Dubia-collection-.git

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Arabic & Dubia perfume collection website"

# Push to GitHub
git push -u origin main
```

**If you get errors:**

❌ **"git is not recognized"**
- Install Git from: https://git-scm.com/download/win
- Restart your terminal/command prompt

❌ **Authentication failed**
- Use GitHub Desktop instead: https://desktop.github.com/
- Or create a Personal Access Token: https://github.com/settings/tokens

❌ **"main" branch doesn't exist**
- Try: `git push -u origin master`

#### 4. Verify on GitHub

1. Go to: https://github.com/Petermolepomatale/Exclusive-Fragrance-Arabic-and-Dubia-collection-
2. Refresh the page
3. You should see all your files!

#### 5. Enable GitHub Pages (Optional)

To host your website for free:

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** section
4. Under "Source", select **main** branch
5. Click **Save**
6. Your site will be live at:
   `https://petermolepomatale.github.io/Exclusive-Fragrance-Arabic-and-Dubia-collection-/`

---

## Customization Guide

### Change Colors

Edit `styles.css` - Line 2-8:
```css
:root {
    --primary: #8B4513;    /* Main color */
    --secondary: #D2691E;  /* Accent color */
    --light: #F5F5DC;      /* Background */
}
```

### Add More Products

Edit `products-data.js`:
```javascript
{
    id: 23,
    name: "New Perfume Name",
    description: "Your description here...",
    price: 99.99,
    category: "oud", // oud, floral, gourmand, or fresh
    image: "images/new-perfume.jpg"
}
```

### Modify Contact Information

Edit `index.html` - Search for "Contact Us" section:
```html
<li><i class="fas fa-phone"></i> Your Phone Number</li>
<li><i class="fas fa-envelope"></i> your@email.com</li>
```

### Update AI Chatbot Responses

Edit `app.js` - Find `generateBotResponse()` function and customize responses.

---

## Troubleshooting

### Images Not Showing?

1. ✅ Check file names match exactly (case-sensitive!)
2. ✅ Ensure images are in `images/` folder
3. ✅ Verify file extensions (.jpg, .png)
4. ✅ Try hard refresh: Ctrl + F5

### Cart Not Working?

1. ✅ Check browser console for errors (F12)
2. ✅ Enable localStorage in browser settings
3. ✅ Try in incognito/private mode

### AI Chatbot Not Responding?

1. ✅ Check browser console for JavaScript errors
2. ✅ Ensure `app.js` is loaded correctly
3. ✅ Try refreshing the page

### GitHub Push Failed?

1. ✅ Install Git: https://git-scm.com/download/win
2. ✅ Login to GitHub account
3. ✅ Use GitHub Desktop for easier management
4. ✅ Check repository URL is correct

---

## File Structure

```
arabic-dubia-collection/
├── index.html                 # Main website file
├── styles.css                 # All styling
├── app.js                     # Main functionality
├── products-data.js           # Product catalog
├── README.md                  # Documentation
├── SETUP-GUIDE.md            # This file
├── IMAGE-GUIDE.md            # Image instructions
├── create-placeholders.html  # Placeholder generator
├── push-to-github.bat        # Git helper script
├── .gitignore                # Git ignore rules
└── images/                   # Product images
    ├── hero-banner.jpg
    ├── placeholder.jpg
    └── [24 product images]
```

---

## Next Steps

1. ✅ Add your real product images
2. ✅ Customize colors and branding
3. ✅ Update contact information
4. ✅ Test on multiple devices
5. ✅ Push to GitHub
6. ✅ Enable GitHub Pages
7. ✅ Share your website!

---

## Support

Need help? Check:
- 📖 README.md - General information
- 🖼️ IMAGE-GUIDE.md - Image setup help
- 💬 GitHub Issues - Report problems

---

## What's Included

✅ 22 Premium perfume products
✅ Shopping cart with localStorage
✅ AI chatbot assistant
✅ Search & filter functionality
✅ Responsive mobile design
✅ Modern UI/UX
✅ Product categories
✅ Wishlist feature
✅ Quantity management
✅ Price calculations
✅ Smooth animations
✅ Social media links
✅ Footer with links
✅ 100% client-side (no server needed)

---

**Ready to launch? Follow the 3 steps at the top! 🚀**
