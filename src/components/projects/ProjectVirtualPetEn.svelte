<script>
	import Project from '../Project.svelte';

	import virtualPetImage from '$lib/images/projects/virtual-pet.png';
</script>

<Project
	name="Virtual Pet"
	image={virtualPetImage}
	link="https://github.com/github.com/danielbom/virtual-pet"
>
	Developed for the Programming Languages course at UTFPR, this project used LUA and the LOVE
	framework to create a Tamagotchi-style game. It was a challenge, especially for many students who
	were having their first experience with game development. Despite some bugs and curious logic, we
	achieved our goal: a game with functionalities like eating, drinking, studying, healing, sleeping,
	and even petting our pet, Togepi from Pokémon, which displays an adorable animation. The game also
	includes an integrated tic-tac-toe minigame.
</Project>
