<script>
	import heroImage from '$lib/images/professional-programmer-working-late-dark-office.jpg';
	const { hero_hello, hero_description, hero_hire_me } = $props();
</script>

<section class="flex flex-1 flex-col-reverse gap-5 pb-20 md:flex-row">
	<div class="flex flex-1 items-center">
		<div>
			<h2 class="mb-4 text-2xl font-extrabold">{hero_hello}</h2>
			<p class="mb-12">{hero_description}</p>
			<a
				href="#contact"
				class="cursor-pointer rounded-sm bg-blue-400 px-4 py-2 text-xl text-white transition-colors hover:bg-blue-500"
			>
				{hero_hire_me}
			</a>
		</div>
	</div>
	<div class="flex flex-1 items-center justify-center">
		<img
			src={heroImage}
			alt="Professional Programmer Working Late"
			class="h-auto max-w-full rounded-2xl shadow-lg"
		/>
	</div>
</section>
