<script>
	import { fade } from 'svelte/transition';
	import { base } from '$app/paths';
</script>

<div class="flex flex-col items-center justify-center h-screen text-white font-montserrat">
	<a href="{base}/contact">
		<img
			src="{base}/logo.png"
			class="transition-all duration-1000 hover:grayscale-0 grayscale filter cursor-pointer rounded-lg"
			alt="Logo"
			in:fade={{ delay: 300, duration: 300 }}
		/>
	</a>
</div>

<style>
</style>
