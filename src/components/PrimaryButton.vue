<template>
	<button type="button">{{ button_tag }}</button>
</template>

<script setup>
defineProps({ button_tag: String });
</script>

<style scoped>
button:hover {
	cursor: pointer;
}
button {
	width: 350px;
	height: 40px;
	border-radius: 10px;
	color: white;
	font-size: 18px;
	font-weight: bold;
	margin: 30px 0;
	border: 1px solid #e2e2e2;
	background-color: #86a7fc;
}
</style>
