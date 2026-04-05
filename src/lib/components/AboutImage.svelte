<script lang="ts">
	let { link, src, alt } = $props();
</script>

<div class="flex justify-center">
	<div class="max-w-[300px] flex-1">
		<a href={link} target="_blank" rel="noopener noreferrer">
			<img
				{src}
				{alt}
				class="rounded-lg transition hover:scale-[1.5] lg:hover:-translate-x-[25%] lg:hover:translate-y-[25%] group-odd:lg:hover:translate-x-[25%]"
			/>
		</a>
	</div>
</div>
