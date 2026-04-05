<script lang="ts">
	import { resolve } from '$app/paths';
	import { goto } from '$app/navigation';

	import IconGlobe from './IconGlobe.svelte';

	let s = $state({ isOpen: false });

	function toggle() {
		s.isOpen = !s.isOpen;
	}

	function changeLanguage(lang: 'en' | 'pt-br') {
		goto(resolve(`/x/${lang}`));
	}
</script>

<div class="relative w-full" tabindex="-1">
	<button
		class="align-center flex w-full cursor-pointer justify-center"
		type="button"
		aria-label="Change Language"
		onclick={toggle}
	>
		<IconGlobe />
	</button>

	{#if s.isOpen}
		<ul
			class="absolute right-[50%] flex flex-col gap-3 rounded-md border border-gray-100 bg-white p-2 text-center text-lg text-black shadow-md"
		>
			<li>
				<button
					class="w-full cursor-pointer rounded px-1 hover:underline"
					onclick={() => changeLanguage('pt-br')}
				>
					PT
				</button>
			</li>

			<li>
				<button
					class="w-full cursor-pointer rounded px-1 hover:underline"
					onclick={() => changeLanguage('en')}
				>
					EN
				</button>
			</li>
		</ul>
	{/if}
</div>
