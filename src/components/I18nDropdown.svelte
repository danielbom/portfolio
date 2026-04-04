<script lang="ts">
	import { goto } from '$app/navigation';

	let s = $state({ isOpen: false });

	function toggle() {
		s.isOpen = !s.isOpen;
	}

	function changeLanguage(lang: string) {
		goto('/x/' + lang);
	}
</script>

<div class="relative" tabindex="-1">
	<button class="cursor-pointer" type="button" aria-label="Change Language" onclick={toggle}>
		<!-- <Globe /> -->
		<!-- https://lucide.dev/icons/globe -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-globe-icon lucide-globe"
		>
			<circle cx="12" cy="12" r="10" />
			<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
			<path d="M2 12h20" />
		</svg>
	</button>

	{#if s.isOpen}
		<ul
			class="absolute right-0 flex flex-col gap-3 rounded-md border border-gray-100 bg-white p-2 text-center text-lg text-black shadow-md"
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
