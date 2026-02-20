<script>
	import { dev } from '$app/environment';
	import meta from '../../meta.json';
	const { title, description, url } = meta;
</script>

{#if !dev}
	<title>{title}</title>
	<meta name="description" content={description} />
	<!-- Open Graph for social media -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="{url}/techsup.jpg" />
	<meta property="og:url" content={url} />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="{url}/techsup.jpg" />

	<!-- Canonical URL -->
	<link rel="canonical" href={url} />
{/if}
