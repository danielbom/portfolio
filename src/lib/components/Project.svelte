<script lang="ts">
	interface ProjectProps {
		name: string;
		image: string;
		children: any;
		link?: string;
	}
	let { image, name, children, link = undefined }: ProjectProps = $props();

	const imageClass = 'h-[200px] w-full rounded-md object-contain md:h-[170px]';
</script>

<div
	class="group duration-1s w-full max-w-[500px] rounded-lg bg-gray-200 p-4 shadow-md transition hover:bg-gray-300 md:w-[320px] xl:w-[400px]"
>
	<div class="px-4 pt-4">
		{#if link}
			<a href={link} target="_blank" rel="noopener noreferrer">
				<img src={image} alt={name} class={imageClass} />
			</a>
		{:else}
			<img src={image} alt={name} class={imageClass} />
		{/if}
		<h3 class="mt-4 text-lg font-bold">{name}</h3>
	</div>
	<div class="relative p-4">
		<p
			class="invisible absolute top-0 right-0 w-full rounded-lg bg-gray-300 p-4 opacity-0 transition-opacity duration-300 group-hover:visible group-hover:block group-hover:opacity-100"
		>
			{@render children()}
		</p>
		<p class="line-clamp-none overflow-hidden lg:line-clamp-2">
			{@render children()}
		</p>
	</div>
</div>
