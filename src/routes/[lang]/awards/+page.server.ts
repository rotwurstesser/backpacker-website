import { loadAwardsContent } from '$lib/content';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const content = await loadAwardsContent();
  return {
    content
  };
};

