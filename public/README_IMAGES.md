# Adding Background Image

To add a background image to the hero section:

1. **Place your image file in the `public` folder**

   - Recommended name: `hero-background.jpg` or `hero-background.png`
   - Supported formats: JPG, PNG, WebP

2. **If using a different filename**, update the image source in:

   - `src/components/Home/Home.jsx`
   - Change: `src="/image1.jpeg"` to your filename

3. **Current settings:**

   - Opacity: 0.15 (15% - very subtle)
   - Dark overlay: rgba(0, 0, 0, 0.4) for better text readability
   - Image is set to cover the entire hero section

4. **To adjust opacity**, edit `src/components/Home/Home.module.css`:
   - Find `.backgroundImage` class
   - Change `opacity: 0.15;` to your desired value (0.1 to 0.3 recommended)
