<script>
	import { fade } from 'svelte/transition';
	import { subscribe } from '$lib/remote/register.remote';
	import Icon from './Icon.svelte';

	let pending = $state(false);
	let message = $state('');
</script>

<article class="relative grid place-content-center">
	<div class="form-container subscribe-card rounded-2xl border-2 bg-neutral-100 p-6 md:p-12">
		<h2 class="mb-8 text-3xl md:text-6xl">Connect to hotline</h2>
		<form
			id="subscribe"
			{...subscribe.enhance(async ({ form, data, submit }) => {
				if (!data.email || !data.username) return;
				pending = true;
				try {
					await submit();
					message = `Thanks, ${data.username}! You have signed up.`;
					pending = false;
					form.reset();
					setTimeout(() => (message = ''), 5000);
				} catch (error) {
					pending = false;
					message = `Eeeek - something went wrong, please try again later (i've let chat know about this.)`;
				}
			})}
		>
			<div class="flex flex-col gap-8">
				<div class="flex flex-col gap-0">
					<div class="flex items-center overflow-hidden rounded-md border-2 bg-neutral-200">
						<input
							id="username"
							type="text"
							name="username"
							placeholder="Nickname"
							class="min-w-0 grow px-4 py-1.5 text-black placeholder:text-gray-400 focus:outline-none sm:text-sm/6 md:text-2xl"
						/>
					</div>
				</div>
				<div class="flex flex-col gap-0">
					<div class="flex items-center overflow-hidden rounded-md border-2 bg-neutral-200">
						<input
							id="email"
							type="email"
							name="email"
							placeholder="your@email.please"
							class="min-w-0 grow px-4 py-1.5 text-black placeholder:text-gray-400 focus:outline-none sm:text-sm/6 md:text-2xl"
						/>
					</div>
				</div>
				{#if pending}
					<div transition:fade class="flex justify-center text-4xl text-shadow-2xs">
						<div class="vibrating">
							<Icon ctx="phone" />
						</div>
					</div>
				{/if}
				{#if !message}
					<div transition:fade class="hover-patch relative">
						<button class="relative z-10 rounded-lg border-2 bg-wash-100 px-8 py-4"
							>Sign me up!</button
						>
						<div
							class="skeleton absolute inset-0 h-full w-full rounded-lg border-2 border-t-0 bg-wash-200"
						></div>
					</div>
				{:else}
					<span transition:fade class="text-accent rounded-lg bg-emerald-300 p-4 text-center"
						>{message}</span
					>
				{/if}
				<!-- <button class="rounded-md bg-wash-200 p-2" type="submit"> Sign me up </button> -->
			</div>
		</form>
	</div>
	<div class="phone absolute -z-10">
		<div class="rotate-120">
			<Icon ctx="phone" size="15" />
		</div>
	</div>
</article>

<style>
	button {
		transition: all 0.3s;
		width: 100%;
	}
	.hover-patch:hover {
		button {
			cursor: pointer;
			background-color: var(--hue-5);
			color: var(--light);
			border-color: var(--hue-5);
			transform: translateY(-15%);
		}
	}
	.phone {
		transform: translate(-20%, -60%);
	}
	.form-container {
		box-shadow: 0 1em 0 var(--hue-5);
	}

	@keyframes vibrate {
		/* burst 1: 0–33% (0s–1s) */
		0% {
			transform: translate(0, 0);
		}
		2% {
			transform: translate(-2px, 1px);
		}
		4% {
			transform: translate(2px, -1px);
		}
		6% {
			transform: translate(-1px, 2px);
		}
		8% {
			transform: translate(2px, 1px);
		}
		10% {
			transform: translate(-2px, -1px);
		}
		12% {
			transform: translate(1px, 2px);
		}
		14% {
			transform: translate(-2px, 1px);
		}
		16% {
			transform: translate(2px, -1px);
		}
		18% {
			transform: translate(-1px, 2px);
		}
		20% {
			transform: translate(2px, 1px);
		}
		22% {
			transform: translate(-2px, -1px);
		}
		24% {
			transform: translate(1px, 2px);
		}
		26% {
			transform: translate(-2px, 1px);
		}
		28% {
			transform: translate(2px, -1px);
		}
		30% {
			transform: translate(-1px, 2px);
		}
		32% {
			transform: translate(2px, 1px);
		}

		/* pause: 33%–66% */
		33% {
			transform: translate(0, 0);
		}
		66% {
			transform: translate(0, 0);
		}

		/* burst 2: 66–100% */
		68% {
			transform: translate(-2px, 1px);
		}
		70% {
			transform: translate(2px, -1px);
		}
		72% {
			transform: translate(-1px, 2px);
		}
		74% {
			transform: translate(2px, 1px);
		}
		76% {
			transform: translate(-2px, -1px);
		}
		78% {
			transform: translate(1px, 2px);
		}
		80% {
			transform: translate(-2px, 1px);
		}
		82% {
			transform: translate(2px, -1px);
		}
		84% {
			transform: translate(-1px, 2px);
		}
		86% {
			transform: translate(2px, 1px);
		}
		88% {
			transform: translate(-2px, -1px);
		}
		90% {
			transform: translate(1px, 2px);
		}
		92% {
			transform: translate(-2px, 1px);
		}
		94% {
			transform: translate(2px, -1px);
		}
		96% {
			transform: translate(-1px, 2px);
		}
		98% {
			transform: translate(2px, 1px);
		}
		100% {
			transform: translate(0, 0);
		}
	}

	.vibrating {
		animation: vibrate 3s linear infinite;
	}
</style>
