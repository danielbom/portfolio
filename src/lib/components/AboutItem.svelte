<script lang="ts">
	let { children } = $props();
</script>

<div class="group flex flex-col gap-10 pb-10 lg:flex-row odd:lg:flex-row-reverse">
	{@render children()}
</div>
