<template>
	<HeaderCom />
	<div>
		<p>파라미터 category: {{ props.category }}</p>
	</div>
	<FooterCom />
</template>

<script setup>
import HeaderCom from '@/components/MainHeader.vue';
import FooterCom from '@/components/MainFooter.vue';
import { onMounted } from 'vue';
import axios from 'axios';
const props = defineProps({ category: String });

onMounted(() => {
	axios
		.get('/api/board/', props.category)
		.then(({ data }) => {
			if (data.success) {
				alert(data.message);
			}
		})
		.catch(error => {
			alert(error.response.data.message);
		});
});
</script>

<style scoped></style>
