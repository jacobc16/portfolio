import type { Image } from '$lib/projects';

class ImageViewSvelte {
  image: Image | null = $state(null);
  allImages: Image[] = $state([]);
}

export default new ImageViewSvelte();
