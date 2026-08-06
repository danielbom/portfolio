<script lang="ts">
	import Project from '$lib/components/Project.svelte';

	import clinicAppointmentsImage from '$lib/images/projects/clinic-appointments.png';
</script>

<Project name="Agendamento Clínico" image={clinicAppointmentsImage} link="https://github.com/danielbom/clinic-appointments">
    Um sistema de agendamentos clínicos implementado em diferentes tecnologias de backend: Go, .NET, Node.js com TypeScript e Bun.
    O projeto explora como manter as mesmas regras de negócio, validações e comportamentos de API consistentes entre diferentes 
    ecossistemas. Testes ponta a ponta funcionam como um contrato comum entre as implementações, ajudando a encontrar bugs, 
    validar decisões arquiteturais e tornar o código mais resiliente.
    Mais do que comparar tecnologias, o objetivo foi entender diferentes formas de resolver os mesmos problemas de engenharia 
    de software.
</Project>
