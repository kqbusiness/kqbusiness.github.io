<script>
	import { fade } from 'svelte/transition';
	import { writable } from 'svelte/store';

	// let products = Array(7).fill({
	// 	label: 'Sunset Lamp',
	// 	price: 8,
	// 	image: '/logo.png'
	// });
	import { base } from '$app/paths';
	const products = writable([]);

	$products = [
		...$products,
		{
			label: 'Sunset lamp',
			price: 8,
			image: `${base}/logo.png`
		},
				{
			label: 'Sunset lamp',
			price: 8,
			image: `${base}/logo.png`
		},
				{
			label: 'Sunset lamp',
			price: 8,
			image: `${base}/logo.png`
		},
				{
			label: 'Sunset lamp',
			price: 8,
			image: `${base}/logo.png`
		},
				{
			label: 'Sunset lamp',
			price: 8,
			image: `${base}/logo.png`
		},
				{
			label: 'Sunset lamp',
			price: 8,
			image: `${base}/logo.png`
		},
	];
</script>

<div class="flex justify-center items-center w-full h-screen">
	<a href="{base}/">
		<img
			src="{base}/logo.png"
			alt="hej"
			class="rounded-full absolute top-2 left-2 w-24 h-24 border border-orange-50 shadow-lg shadow-neutral-950"
			in:fade={{ delay: 300, duration: 300 }}
		/>
	</a>

	<div class="grid grid-cols-4 grid-rows-2 gap-4" in:fade={{ delay: 300, duration: 300 }}>
		<!-- Repeat this block for each product -->
		{#each $products as product}
			<div class="bg-neutral-950 p-4 rounded-md text-white">
				<img
					src="{base}/{product.image}"
					alt="product"
					class="w-32 border-2 border-orange-500 rounded-md"
				/>
				<h1 class="w-full text-center my-2 font-Guerilla font-semibold">{product.label}</h1>
				<a href="{base}/">
					<h2 class="bg-orange-500 w-full text-center py-1 px-2 rounded-sm font-Guerilla">
						{product.price} Euro
					</h2>
				</a>
			</div>
		{/each}
		<!-- End of product block -->
	</div>
</div>
