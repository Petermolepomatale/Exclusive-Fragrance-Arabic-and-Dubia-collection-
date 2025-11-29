# Quick Image Setup Guide

## Option 1: Use Your Own Images (Recommended)

1. **Create the images folder:**
   - Create a folder named `images` in the `arabic-dubia-collection` directory

2. **Add your perfume photos:**
   - Take or find photos of each perfume
   - Rename them according to the list below
   - Copy them into the `images` folder

3. **Required image names:**
   ```
   hero-banner.jpg          (Main banner - 1920x600px recommended)
   placeholder.jpg          (Fallback image - 500x500px)
   intense-noir.jpg
   zara-men.jpg
   barakkat-amber-eve.jpg
   barakkat-satin-oud.jpg
   barakkat-white.jpg
   mocha-wood.jpg
   ammerat-al-arab.jpg
   hayaati.jpg
   des-tentations.jpg
   white-oud.jpg
   sutoor.jpg
   honor-glory.jpg
   sublime.jpg
   rave-now.jpg
   for-glory.jpg
   yara.jpg
   brown-orchid-purple.jpg
   brown-orchid-ruby.jpg
   yara-white.jpg
   brown-orchid-rose.jpg
   paradox-rossa.jpg
   amethyst.jpg
   ```

## Option 2: Use Temporary Placeholder Images

If you don't have images yet, you can:

1. **Download free perfume images from:**
   - Unsplash: https://unsplash.com/s/photos/perfume
   - Pexels: https://www.pexels.com/search/perfume/
   - Pixabay: https://pixabay.com/images/search/perfume/

2. **Quick setup:**
   - Download 1-2 generic perfume images
   - Rename them to match the product names
   - The website will work with just a few images

3. **Create a simple placeholder:**
   - Use any image editing tool
   - Create a 500x500px image with text "Product Image"
   - Save as `placeholder.jpg`

## Option 3: Use Online Images (Temporary)

The website currently uses Unsplash URLs as fallbacks. This works but:
- ❌ Requires internet connection
- ❌ Images may change
- ❌ Not professional for production

**For production, always use your own images!**

## Image Optimization Tips

1. **Resize images:**
   - Product images: 500x500px to 800x800px
   - Hero banner: 1920x600px
   
2. **Compress images:**
   - Use TinyPNG.com or Squoosh.app
   - Target: Under 200KB per image
   
3. **Format:**
   - JPG for photos
   - PNG for images with transparency
   - WebP for best compression (modern browsers)

## Testing Your Images

1. Open `index.html` in your browser
2. Check if all product images load
3. If an image is missing, you'll see the placeholder
4. Check browser console (F12) for any errors

## Need Help?

If images aren't showing:
1. Check file names match exactly (case-sensitive!)
2. Ensure images are in the `images/` folder
3. Check file extensions (.jpg, .png, etc.)
4. Try refreshing the browser (Ctrl+F5)
