<script lang="ts">
	import Field from '../Field.svelte';
	import Button from '../Button.svelte';
    import Form from '../Form.svelte';
	import SelectCreate from '$components/SelectCreate.svelte';

	export let onSubmit = async () => {};
</script>

<template>
	<Form>
		<Field label="Name" type="text" placeholder="ex: Assignment 1 Peer Review" value={''} />
		<SelectCreate label='Students'/>
		<Button onClick={onSubmit} action="Create Class" animation={false} />
	</Form>
</template>