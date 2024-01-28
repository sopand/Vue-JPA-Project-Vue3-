<template>
	<div>
		<label>{{ props.label }}</label>
		<QuillEditor
			:modules="modules"
			toolbar="full"
			@update:content="updateContent"
		/>
	</div>
</template>
<script setup>
import { reactive } from 'vue';
import BlotFormatter from 'quill-blot-formatter';
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';
import axios from 'axios';
const props = defineProps(['label']);
const emit = defineEmits(['update:value']);
const editContent = reactive({
	text: '',
});

const updateContent = content => {
	const converter = new QuillDeltaToHtmlConverter(content.ops, {});
	const html = converter.convert();
	editContent.text = html;
	emit('update:value', editContent.text);
};
const modules = {
	name: 'blotFormatter',
	module: BlotFormatter,
	contentType: 'html',
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
