# Assets Images Directory

This directory is for storing image assets used in the ALX Project.

## Usage

Place your image files here and reference them in your components using Next.js Image component:

```tsx
import Image from 'next/image';

<Image 
  src="/assets/images/your-image.jpg" 
  alt="Description" 
  width={500} 
  height={300} 
/>
```

## Supported Formats

- JPEG (.jpg, .jpeg)
- PNG (.png)
- WebP (.webp)
- SVG (.svg)
- GIF (.gif)

## Best Practices

- Optimize images before uploading
- Use descriptive file names
- Include proper alt text for accessibility
- Consider using next/image for automatic optimization
