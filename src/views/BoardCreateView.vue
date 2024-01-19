<template>
	<HeaderCom />
	<div class="board_con">
		<div class="board_box">
			<InputText v-model="board.title" :text_tag="'제목'" />
			<SelectBox v-model="board.type" :list="selectList"></SelectBox>
			<TextEditor />
		</div>
	</div>

	<FooterCom />
</template>

<script setup>
import HeaderCom from '@/components/MainHeader.vue';
import FooterCom from '@/components/MainFooter.vue';
import TextEditor from '@/components/TextEditor.vue';
import InputText from '@/components/InputText.vue';
import SelectBox from '@/components/SelectBox.vue';
import { reactive } from 'vue';
const selectList = [
	{
		name: '공지사항',
		value: 1,
	},
	{
		name: '커뮤니티',
		value: 2,
	},
];
const board = reactive({
	title: '',
	content: '',
	type: '',
});
</script>

<style scoped>
.board_con {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 100px 0;
}
.board_box {
	width: 800px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
</style>
