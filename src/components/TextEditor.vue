<template>
	<div>
		<label>{{ label }}</label>
		<QuillEditor :modules="modules" toolbar="full" />
	</div>
</template>
<script setup>
import { reactive } from 'vue';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import ImageUploader from 'quill-image-uploader';
import axios from 'axios';

const modules = {
	name: 'imageUploader',
	module: ImageUploader,
	options: {
		upload: file => {
			return new Promise((resolve, reject) => {
				const formData = new FormData();
				formData.append('image', file);

				axios
					.post('/upload-image', formData)
					.then(res => {
						console.log(res);
						resolve(res.data.url);
					})
					.catch(err => {
						reject('Upload failed');
						console.error('Error:', err);
					});
			});
		},
	},
};
</script>
<style></style>
