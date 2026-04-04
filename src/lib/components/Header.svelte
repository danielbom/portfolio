<script lang="ts">
	import I18nDropdown from './I18nDropdown.svelte';
	const { header_about, header_skills, header_projects, header_contacts } = $props();
</script>

<header class="flex justify-between py-10">
	<div class="text-3xl md:text-2xl">
		<span class="font-semibold italic">{'<DF/>'}</span>
		<span class="font-extrabold">Daniel Farina</span>
	</div>
	<ul class="hidden items-center gap-4 text-lg md:flex">
		<li class="transition-1s cursor-pointer transition hover:text-blue-400">
			<a href="#about">
				{header_about}
			</a>
		</li>
		<li class="transition-1s cursor-pointer transition hover:text-blue-400">
			<a href="#skills">
				{header_skills}
			</a>
		</li>
		<li class="transition-1s cursor-pointer transition hover:text-blue-400">
			<a href="#projects">
				{header_projects}
			</a>
		</li>
		<li class="transition-1s cursor-pointer transition hover:text-blue-400">
			<a href="#contact">
				{header_contacts}
			</a>
		</li>
		<!-- <li class="text-blue-400 px-3 border border-blue-400 hover:bg-blue-400 hover:text-white transition transition-1s">
            <a href="#">Blog</a>
        </li> -->
		<li class="flex items-center">
			<I18nDropdown />
		</li>
	</ul>
	<!-- <LinksDropdown /> -->
</header>
