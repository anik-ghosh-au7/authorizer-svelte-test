import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { resolve } from 'path';

const config: UserConfig = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$src: resolve('./src/'),
			$lib: resolve('./src/lib/'),
			$components: resolve('./src/lib/components/'),
			$store: resolve('./src/lib/store/'),
			$templates: resolve('./src/lib/templates/'),
			$utils: resolve('./src/lib/utils/'),
			$types: resolve('./src/types/'),
			$styles: resolve('./src/styles')
		}
	}
};

export default config;
