# Add Your Background Image Here

To add the students/educational background image:

1. **Save your image file in this `public` folder**
2. **Name it exactly: `hero-background.jpg`**
   - Or if it's a PNG: `hero-background.png` (and update the CSS)

3. **Supported formats:** JPG, JPEG, PNG, WebP

4. **The image will automatically appear** as the background with 15% opacity

5. **If you use a different filename**, update this line in `src/components/Home/Home.module.css`:
   ```css
   background-image: url('/your-filename.jpg');
   ```

Current settings:
- Opacity: 0.15 (very subtle, 15%)
- Dark overlay for text readability
- Image covers full hero section
