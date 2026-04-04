<script>
	import Project from '../Project.svelte';

	import virtualPetImage from '$lib/images/projects/virtual-pet.png';
</script>

<Project
	name="Virtual Pet"
	image={virtualPetImage}
	link="https://github.com/github.com/danielbom/virtual-pet"
>
	Desenvolvido para a disciplina de Linguagens de Programação na UTFPR, este projeto utilizou LUA e
	o framework LOVE para criar um jogo estilo Tamagotchi. Foi um desafio, especialmente para muitos
	alunos que estavam tendo sua primeira experiência com desenvolvimento de jogos. Apesar de alguns
	bugs e lógicas curiosas, alcançamos nosso objetivo: um jogo com funcionalidades como comer, beber,
	estudar, curar, dormir e até acariciar nosso pet, o Togepi do Pokémon, que exibe uma animação
	adorável. O jogo também inclui um minigame de jogo da velha integrado.
</Project>
