<footer
	class="grid w-full grid-cols-1 gap-y-16 px-8 py-16 text-2xl text-primary md:grid-cols-3 md:px-16"
>
	<aside class="flex flex-col justify-between gap-4 text-sm">
		<a class="link w-fit" href="https://unsubscribe.techsup.uk">Unsubscribe</a>
		<span class="text-wash-300">Tech Support! Interactive Ltd.</span>
	</aside>

	<div class="flex flex-col items-center justify-end text-sm text-wash-300">
		<a
			class="w-full"
			title="Tech Support!"
			aria-label="tech support homepage"
			href="https://techsup.uk"
			><div
				class="fob pink bg-primary-200 my-4 max-w-full rounded-2xl border-4 border-white bg-cover bg-center bg-blend-lighten md:my-0 md:border-transparent"
			></div></a
		>
		<span>&copy; {new Date().getFullYear()}. All rights reserved.</span>
	</div>

	<aside class="flex flex-col justify-end text-right text-sm text-wash-300">
		<span>Built by</span>
		<a href="https://threejjjs.xyz" aria-label="three jays web development">
			<h5 class="m-0 text-right font-primary text-xl text-wash-300 md:text-3xl">
				three<span class="text-neutral-100">jjj</span>s
				<br />
			</h5>
		</a>
		<span class="text-secondary-200 text-xs">Interactive Tech</span>
	</aside>
</footer>

<style>
	footer {
		color: var(--color-neutral-100);
		/* background-color: #f0c2d4; */
	}
	.fob {
		background-color: #003c2b;
		width: 100%;
		height: 12em;
		aspect-ratio: 4/3;
		background-image: url('/techsup.jpg');
		background-repeat: no-repeat;
	}
	.pink {
		background-color: var(--hue-4);
	}
</style>
