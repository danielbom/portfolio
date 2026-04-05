<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		console.log({ base, url: `${base}/x/en` });
		goto(`${base}/x/en`);
	});
</script>
