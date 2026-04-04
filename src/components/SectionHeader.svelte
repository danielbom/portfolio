<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
</script>

<header class="flex justify-between py-10">
    <div class="text-3xl md:text-2xl">
        <span class="font-semibold italic">{'<DF/>'}</span> <span class="font-extrabold">Daniel Farina</span>
    </div>
    <ul class="hidden md:flex gap-4 text-lg items-center">
        <li class="hover:text-blue-400 transition transition-1s cursor-pointer">
            <a href="#about">
                {m.header_about()}
            </a>
        </li>
        <li class="hover:text-blue-400 transition transition-1s cursor-pointer">
            <a href="#skills">
                {m.header_skills()}
            </a>
        </li>
        <li class="hover:text-blue-400 transition transition-1s cursor-pointer">
            <a href="#projects">
                {m.header_projects()}
            </a>
        </li>
        <li class="hover:text-blue-400 transition transition-1s cursor-pointer">
            <a href="#contact">
                {m.header_contacts()}
            </a>
        </li>
        <!-- <li class="text-blue-400 px-3 border border-blue-400 hover:bg-blue-400 hover:text-white transition transition-1s">
            <a href="#">Blog</a>
        </li> -->
        <li class="flex items-center">
            <!-- <I18nDropdown /> -->
        </li>
    </ul>
    <!-- <LinksDropdown /> -->
</header>
