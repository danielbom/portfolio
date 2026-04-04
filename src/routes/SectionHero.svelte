<script>
	import { m } from "$lib/paraglide/messages";
    import heroImage from '$lib/images/professional-programmer-working-late-dark-office.jpg';
</script>

<section class="flex gap-5 flex-1 pb-20 flex-col-reverse md:flex-row">
    <div class="flex-1 flex items-center">
        <div>
            <h2 class="font-extrabold text-2xl mb-4">{m.hero_hello()}</h2>
            <p class="mb-12">{m.hero_description()}</p>
            <a
                href="#contact"
                class="rounded-sm bg-blue-400 text-white px-4 py-2 text-xl cursor-pointer hover:bg-blue-500 transition-colors"
            >
                {m.hero_hire_me('hero.hire-me')}
            </a>
        </div>
    </div>
    <div class="flex-1 flex items-center justify-center">
        <img
            src={heroImage}
            alt="Professional Programmer Working Late"
            class="max-w-full h-auto rounded-2xl shadow-lg"
        />
    </div>
</section>