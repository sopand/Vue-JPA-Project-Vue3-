<template>
	<select>
		<option v-for="listitem in list" v-bind:key="listitem">
			{{ listitem.name }}
		</option>
	</select>
</template>

<script>
export default {
	props: {
		list: [],
	},
};
</script>

<style scoped></style>
