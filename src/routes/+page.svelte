<script>
	import Subscribe from '$lib/components/Subscribe.svelte';
</script>

<main class="element grid h-screen place-content-center">
	<Subscribe />
</main>

<style>
	.element::after {
		transition: transform 0.2s ease-in;
		content: '';
		position: fixed;
		overflow: hidden;
		inset: 0;
		width: 55%;
		height: 100%;
		background-image: url('/techsup.jpg');
		background-repeat: repeat;
		background-position: center;
		background-size: 8vw;
		transform: translateX(0%) rotate(5deg) scale(1.2);
		opacity: 0.05;
		z-index: -1;
		/* @media (min-width: 768px) {
			width: 768px;
		} */
	}
</style>
