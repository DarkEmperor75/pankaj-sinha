# Writing Guide - Adding Images to Blog Posts

## Quick Start

Yes, you can add pictures to your blog posts! Here's how:

## Image Setup

1. **Create the images directory** (if it doesn't exist):
   ```
   public/images/writing/
   ```

2. **Add your images** to this folder:
   ```
   public/images/writing/
     ├── my-post-image.jpg
     ├── diagram.png
     └── photo.webp
   ```

## How to Add Images in Markdown

### Method 1: Standard Markdown Syntax (Recommended)

```markdown
![Image description](/images/writing/my-image.jpg)
```

**Example:**
```markdown
![A beautiful sunset over the mountains](/images/writing/sunset.jpg)
```

### Method 2: HTML Image Tag (More Control)

```html
<img src="/images/writing/my-image.jpg" alt="Description" />
```

**With custom styling:**
```html
<img 
  src="/images/writing/my-image.jpg" 
  alt="Description" 
  style="max-width: 600px; margin: 2rem auto; display: block;"
/>
```

### Method 3: External Images

```markdown
![External Image](https://example.com/image.jpg)
```

## Image Best Practices

### File Organization
- Place all blog images in `public/images/writing/`
- Use descriptive filenames: `optimization-algorithm-diagram.png` not `img1.jpg`
- Group related images: `public/images/writing/post-slug/` for multi-image posts

### Image Optimization
- **Compress images** before uploading (aim for < 500KB)
- Use **JPG** for photos
- Use **PNG** for graphics with transparency
- Use **WebP** for modern browsers (smaller file sizes)
- Tools: TinyPNG, ImageOptim, Squoosh

### Accessibility
- Always include **alt text** describing the image
- Keep alt text concise but descriptive
- Example: `![A flowchart showing the optimization process](/images/writing/flowchart.png)`

### Sizing
- Images automatically scale to fit the content width
- Maximum width is constrained by the prose container
- For full-width images, use HTML with custom classes

## Examples

### Basic Image
```markdown
![Research findings visualization](/images/writing/research-chart.png)
```

### Image with Caption (using HTML)
```html
<figure>
  <img src="/images/writing/diagram.png" alt="System architecture diagram" />
  <figcaption>Figure 1: System architecture showing the main components</figcaption>
</figure>
```

### Multiple Images Side by Side
```html
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
  <img src="/images/writing/image1.jpg" alt="First image" />
  <img src="/images/writing/image2.jpg" alt="Second image" />
</div>
```

## Troubleshooting

### Image Not Showing?
1. Check the path starts with `/images/writing/` (leading slash is important)
2. Verify the file exists in `public/images/writing/`
3. Check file name spelling (case-sensitive)
4. Ensure the file extension matches (.jpg, .png, etc.)

### Image Too Large?
- Compress the image using TinyPNG or similar tools
- Consider using WebP format for smaller file sizes
- Resize images to max 1200px width before uploading

### Image Not Centered?
- Images are left-aligned by default
- Use HTML with custom styling for center alignment:
  ```html
  <div style="text-align: center;">
    <img src="/images/writing/image.jpg" alt="Description" />
  </div>
  ```

## File Structure Example

```
personal-website/
├── public/
│   └── images/
│       └── writing/
│           ├── post-1-image.jpg
│           ├── post-2-diagram.png
│           └── post-3-photo.webp
├── content/
│   └── writing/
│       ├── post-1.md  (references /images/writing/post-1-image.jpg)
│       ├── post-2.md  (references /images/writing/post-2-diagram.png)
│       └── post-3.md  (references /images/writing/post-3-photo.webp)
```

## Adding Videos

### Local Video Files

1. **Place videos** in `public/videos/writing/`:
   ```
   public/videos/writing/
     ├── my-video.mp4
     └── demo.webm
   ```

2. **Add to markdown** using HTML:
   ```html
   <video src="/videos/writing/my-video.mp4" controls />
   ```

3. **With options**:
   ```html
   <video 
     src="/videos/writing/my-video.mp4" 
     poster="/images/writing/video-thumbnail.jpg"
     controls 
     width="800"
     muted
   />
   ```

### YouTube Videos

**Method 1: Using YouTube component**
```jsx
<YouTube id="VIDEO_ID" title="Video Title" />
```

**Method 2: Direct iframe**
```html
<iframe 
  src="https://www.youtube.com/embed/VIDEO_ID" 
  title="Video Title"
  allowFullScreen
/>
```

To get the video ID from a YouTube URL like `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, use `dQw4w9WgXcQ` as the ID.

### Vimeo Videos

```jsx
<Vimeo id="VIDEO_ID" title="Video Title" />
```

### Video Best Practices

- **File size**: Keep videos under 50MB if hosting locally
- **Format**: Use MP4 (H.264) for best browser compatibility
- **Compression**: Compress videos before uploading (HandBrake, FFmpeg)
- **Poster images**: Add poster images for better loading experience
- **Large files**: Consider hosting on YouTube/Vimeo instead
- **Accessibility**: Include captions/subtitles when possible

### Video Formats Supported

- **Local**: MP4, WebM, OGG
- **Embedded**: YouTube, Vimeo, and any iframe-embeddable video

## Need Help?

- Check the example post: `content/writing/example-with-images.md`
- Images and videos are automatically styled with rounded corners and shadows
- All media is responsive and works on mobile devices
- Videos support controls, autoplay, loop, and muted options

