<template>
	<select v-model="this.value">
		<option
			v-for="listitem in list"
			v-bind:key="listitem"
			:value="listitem.value"
			v-on:input="updateValue($event.target.value)"
		>
			{{ listitem.name }}
		</option>
	</select>
</template>

<script setup>
defineProps({
	list: [],
});
const updateValue = value => {
	this.$emit('input', value);
};
</script>

<style scoped></style>
