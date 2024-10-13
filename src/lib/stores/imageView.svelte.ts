import type { Image } from '$lib/projects';

class ImageViewSvelte {
  image: Image | null = $state(null);
  index = $state(0);
  allImages: Image[] = $state([]);
}

export default new ImageViewSvelte();
