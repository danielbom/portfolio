<script lang="ts">
	// import { resolve } from '$app/paths';

	import I18nDropdown from './I18nDropdown.svelte';
	import IconMenu from './IconMenu.svelte';

	const { header_about, header_skills, header_projects, header_contacts } = $props();

	let s = $state({ isOpen: false });

	function toggle() {
		s.isOpen = !s.isOpen;
	}

	function close() {
		s.isOpen = false;
	}
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
	<div class="relative md:hidden" tabIndex={-1}>
		<button class="cursor-pointer" aria-label="Menu Toolbar" onclick={toggle}>
			<IconMenu size={40} />
		</button>
		{#if s.isOpen}
			<ul
				class="border-grey-100 absolute right-0 flex w-[calc(100vw-50px)] flex-col gap-3 rounded-md bg-white px-5 py-2 text-center text-lg text-black shadow-md"
			>
				<li class="cursor-pointer transition hover:text-blue-400">
					<a class="block" href="#about" onclick={close}>
						{header_about}
					</a>
				</li>
				<li class="cursor-pointer transition hover:text-blue-400">
					<a class="block" href="#skills" onclick={close}>
						{header_skills}
					</a>
				</li>
				<li class="cursor-pointer transition hover:text-blue-400">
					<a class="block" href="#projects" onclick={close}>
						{header_projects}
					</a>
				</li>
				<li class="cursor-pointer transition hover:text-blue-400">
					<a class="block" href="#contact" onclick={close}>
						{header_contacts}
					</a>
				</li>
				<!-- <li
					class="border border-blue-400 px-3 text-blue-400 transition hover:bg-blue-400 hover:text-white"
				>
					<a href={resolve('/blog')}>Blog</a>
				</li> -->
				<li class="flex items-center justify-center">
					<I18nDropdown />
				</li>
			</ul>
		{/if}
	</div>
</header>
