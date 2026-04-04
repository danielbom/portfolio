<script lang="ts">
	let { id, children } = $props();
</script>

<h1 {id} class="pb-5 text-2xl font-bold md:pb-10 md:text-3xl">
	<a href="#{id}">
		{@render children()}
	</a>
</h1>
