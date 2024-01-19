<template>
	<div class="editor_con">
		<span>내용</span>
		<div class="editor_box">
			<quill-editor v-model:value="state.content"></quill-editor>
		</div>
	</div>
</template>
<script>
import { reactive } from 'vue';

export default {
	name: 'App',
	setup() {
		const state = reactive({
			content: '',
			_content: '',
			editorOption: {
				placeholder: '',
				modules: {
					toolbar: [
						['bold', 'italic', 'underline', 'strike'],
						['blockquote', 'code-block'],
						[{ header: 1 }, { header: 2 }],
						[{ list: 'ordered' }, { list: 'bullet' }],
						[{ script: 'sub' }, { script: 'super' }],
						[{ indent: '-1' }, { indent: '+1' }],
						[{ direction: 'rtl' }],
						[{ size: ['small', false, 'large', 'huge'] }],
						[{ header: [1, 2, 3, 4, 5, 6, false] }],
						[{ color: [] }, { background: [] }],
						[{ font: [] }],
						[{ align: [] }],
						['clean'],
						['link', 'image', 'video'],
					],
				},
				// more options
			},
			disabled: false,
		});

		const onEditorBlur = quill => {
			console.log('editor blur!', quill);
		};
		const onEditorFocus = quill => {
			console.log('editor focus!', quill);
		};
		const onEditorReady = quill => {
			console.log('editor ready!', quill);
		};
		const onEditorChange = ({ quill, html, text }) => {
			console.log('editor change!', quill, html, text);
			state._content = html;
		};

		setTimeout(() => {
			state.disabled = true;
		}, 2000);

		return {
			state,
			onEditorBlur,
			onEditorFocus,
			onEditorReady,
			onEditorChange,
		};
	},
};
</script>
<style>
.editor_con {
	display: flex;
	align-items: center;
}
.editor_con span {
	width: 100px;
	font-weight: bold;
}
.editor_box {
	height: 450px;
	width: 700px;
}
</style>
