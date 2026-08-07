<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		const params = new URLSearchParams(window.location.search);
		const redirect = params.get('redirect');

		if (redirect) {
			goto(decodeURIComponent(redirect), { replaceState: true });
			setTimeout(() => sessionStorage.removeItem('redirecting'), 1000);
		} else {
			goto(`${base}/x/en`, { replaceState: true });
		}
	});
</script>
