<script lang="ts">
	let { children } = $props();
</script>

<div class="flex flex-1 flex-col gap-6">
	{@render children()}
</div>
