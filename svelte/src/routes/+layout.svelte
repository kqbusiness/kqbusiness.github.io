<script>
	import '../app.css';
	import { page } from '$app/stores';

	export const prerender = true;

	export const trailingSlash = 'always';
</script>

<div
	class="bg-orange-200 bg-[url(https://freepngimg.com/download/wave/110523-orange-vector-wave-png-image-high-quality.png)] bg-cover"
>
	<div class="{$page.route.id !== '/' ? 'backdrop-blur-md' : ''} duration-300">
		<slot />
	</div>
</div>
