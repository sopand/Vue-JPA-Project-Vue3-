<template>
	<MainHeader />
	<main class="board_detail_con">
		<section class="board_detail_box">
			<div class="board_detail_title">
				<article>제목 : {{ viewData.data.title }}</article>
				<article>
					작성일 : {{ $formatDateTimeArray(viewData.data.createDate) }} 수정일 :
					{{ $formatDateTimeArray(viewData.data.updateDate) }}
				</article>
			</div>
			<article class="board_detail_name">
				작성자 : {{ viewData.data.memberName }}
			</article>
			<article
				class="board_detail_content"
				v-html="viewData.data.content"
			></article>
		</section>
	</main>
	<MainFooter />
</template>

<script setup>
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
const route = useRoute();
const viewData = reactive({
	data: {
		boardSid: 0,
		title: '',
		content: '',
		memberName: '',
		memberSid: 0,
		createDate: [],
		updateDate: [],
	},
});
onMounted(async () => {
	const board_sid = route.params.board_sid;
	try {
		const response = await axios.get(`/api/board/detail/${board_sid}`);
		viewData.data = response.data;
		console.log(viewData);
	} catch (error) {
		console.error('데이터를 가져오는 중 오류 발생:', error);
	}
});
</script>

<style scoped>
.board_detail_con,
.board_detail_box {
	display: flex;
	align-items: center;
	justify-content: center;
}
.board_detail_title {
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	padding: 30px 0;
	border-bottom: 1px solid #e2e2e2;
}
.board_detail_con {
	width: 100%;
	padding: 100px 0;
}
.board_detail_box {
	flex-direction: column;
	width: 1000px;
	border: 1px solid #e2e2e2;
	border-radius: 15px;
}
.board_detail_name {
	padding: 20px 0 20px 120px;
	text-align: start;
	width: 100%;
}

.board_detail_content ::v-deep img {
	width: 100%;
}
</style>
