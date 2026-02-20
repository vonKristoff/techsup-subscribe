<script lang="ts">
	interface Props {
		ctx?: string;
		size?: string;
		weight?: string;
		colour?: string;
		src?: string;
	}
	const {
		ctx,
		weight = '2',
		size = '1',
		colour = 'currentColor',
		src = 'sprites'
	}: Props = $props();
	const href = `/${src}.svg#icon-${ctx}`;
</script>

<svg
	width={`${size}em`}
	height={`${size}em`}
	fill="none"
	stroke={colour}
	stroke-width={weight}
	stroke-linecap="round"
	stroke-linejoin="round"
>
	<use {href}></use>
</svg>

<!-- <style>
	:global(i) {
		width: fit-content;
	}
	:global(i svg) {
		width: 100%;
		height: 100%;
	}
</style> -->
