---
title: "Example: Adding Images to Blog Posts"
date: "2024-03-20"
excerpt: "A guide on how to add images to your blog posts in Markdown."
category: "Guide"
tags: ["Markdown", "Images", "Blogging"]
---

# Example: Adding Images to Blog Posts

You can add images to your blog posts in several ways:

## Method 1: Standard Markdown Image Syntax

Use standard Markdown image syntax. Place images in the `public/images/writing/` folder:

```markdown
![Image description](/images/writing/your-image.jpg)
```

Example:
![Example Image](https://via.placeholder.com/800x400?text=Example+Blog+Image)

## Method 2: HTML Image Tag

For more control, use HTML:

```html
<img src="/images/writing/your-image.jpg" alt="Description" />
```

## Method 3: External Images

You can also use images from external URLs:

```markdown
![External Image](https://example.com/image.jpg)
```

## Image Best Practices

1. **Optimize images** before uploading (use tools like TinyPNG or ImageOptim)
2. **Use descriptive alt text** for accessibility
3. **Keep file sizes reasonable** (aim for under 500KB per image)
4. **Use appropriate formats**: JPG for photos, PNG for graphics with transparency, WebP for modern browsers

## Image Organization

Organize your images in the `public/images/writing/` directory:

```
public/
  images/
    writing/
      post-1-image.jpg
      post-2-diagram.png
      ...
```

Then reference them in your markdown files using relative paths from the public folder.

