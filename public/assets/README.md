# Assets

Drop your content (images, videos, logos) in here. Anything under `public/` is
served by Next.js from the site root, so a file at:

```
public/assets/images/team-photo.jpg
```

is reachable in the browser at:

```
/assets/images/team-photo.jpg
```

## Folders

- `images/`: photos, illustrations, og-images, etc.
- `videos/`: `.mp4` / `.webm` clips.
- `logos/`: partner & university logos.

## How to use them in the site

### Plain `<img>` / background

```tsx
<img src="/assets/images/team-photo.jpg" alt="AI Hub team" />
```

### Optimized images (recommended)

Use Next.js `<Image>` for automatic resizing, lazy-loading and modern formats:

```tsx
import Image from 'next/image';

<Image
  src="/assets/images/team-photo.jpg"
  alt="AI Hub team"
  width={1200}
  height={800}
/>
```

### Replacing the design placeholders

The site currently uses `ImageSlot` placeholders (the dashed mono-labelled boxes)
and the `wall-tile` partner placeholders. To swap a placeholder for a real photo,
replace the `ImageSlot` with an image and add the `graded` class for the unified
photo treatment, e.g.:

```tsx
<div className="frame graded ratio-tall">
  <Image src="/assets/images/community.jpg" alt="AI Hub community" fill />
</div>
```

### Video

```tsx
<video
  className="frame"
  src="/assets/videos/intro.mp4"
  autoPlay
  muted
  loop
  playsInline
/>
```

> Note: the `.gitkeep` files just keep these otherwise-empty folders in git;
> you can delete them once you add real content.
