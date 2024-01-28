<template>
	<div>
		<label>{{ props.label }}</label>
		<QuillEditor
			:modules="modules"
			toolbar="full"
			:content="editContent.text"
			@update:content="updateContent"
		/>
	</div>
</template>
<script setup>
import { reactive } from 'vue';
import BlotFormatter from 'quill-blot-formatter';
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';

const props = defineProps(['label']);

const editContent = reactive({
	text: '',
});

const updateContent = content => {
	let converter = new QuillDeltaToHtmlConverter(content.ops, {});
	let html = converter.convert();
	console.log(html);
};
const modules = {
	name: 'blotFormatter',
	module: BlotFormatter,
	contentType: 'html',
	options: {
		/* options */
	},
};
</script>

<style></style>
