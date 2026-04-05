<script lang="ts">
	let { src, alt } = $props();
</script>

<li class="group relative transition-transform hover:scale-[1.5]">
	<img {src} {alt} class="h-12 w-12 md:h-16 md:w-16" />
	<span
		class="absolute bottom-[-20px] left-1/2 -translate-x-1/2 transform rounded bg-gray-800 px-2 py-1 text-sm text-nowrap text-white opacity-0 transition-opacity select-none group-hover:opacity-100"
	>
		{alt}
	</span>
</li>
