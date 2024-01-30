<template>
	<HeaderCom />
	<main class="board_list_con">
		<section class="board_search_box">
			<div class="board_search_input">
				<InputText :text_tag="'검색어'" v-model="search.text" />
				<PrimaryButton :button_tag="'검색'" :child-width="'200px'" />
			</div>
		</section>
		<section class="board_list_box">
			<article class="board_content">
				<div>번호</div>
				<div>제목</div>
				<div>작성자</div>
				<div>작성일</div>
				<div>수정일</div>
			</article>
			<article
				v-for="item in dataList"
				:key="item.boardSid"
				class="board_content"
			>
				<div>{{ item.boardSid }}</div>
				<div>
					<RouterLink to="/member/join">{{ item.title }}</RouterLink>
				</div>
				<div>{{ item.memberName }}</div>
				<div>{{ formatDateTimeArray(item.createDate) }}</div>
				<div>{{ formatDateTimeArray(item.updateDate) }}</div>
			</article>
		</section>
	</main>
	<FooterCom />
</template>

<script setup>
import HeaderCom from '@/components/MainHeader.vue';
import FooterCom from '@/components/MainFooter.vue';
import InputText from '@/components/InputText.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import { onMounted, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const props = defineProps({ category: String });
const category = ref('');
const dataList = ref([]);
const route = useRoute();
const search = ref({
	text: '',
});

const fetchData = async category => {
	try {
		const response = await axios.get(`/api/board/${category}`);
		dataList.value = response.data.boardList;
	} catch (error) {
		console.error('데이터를 가져오는 중 오류 발생:', error);
	}
};

onMounted(() => {
	fetchData(route.params.category); // 초기 데이터 로딩
});

// watch를 사용하여 route.params.category가 변경될 때 fetchData 호출
watch(
	() => route.params.category,
	newCategory => {
		fetchData(newCategory);
	},
);

const formatDateTimeArray = dateTimeArray => {
	// 배열이 유효한지 확인
	if (Array.isArray(dateTimeArray) && dateTimeArray.length === 7) {
		const [year, month, day, hours, minutes, seconds, milliseconds] =
			dateTimeArray;

		const dateObject = new Date(
			Date.UTC(
				year,
				month - 1,
				day,
				hours,
				minutes,
				seconds,
				milliseconds / 1e6,
			),
		);

		const formattedDate = dateObject
			.toISOString()
			.slice(0, 19)
			.replace('T', ' '); // ISO 8601 형식으로 변환 후 자르기

		return formattedDate;
	} else {
		console.error('유효하지 않은 날짜 및 시간 형식:', dateTimeArray);
		return 'Invalid Date';
	}
};
</script>

<style scoped>
.board_list_con,
.board_search_box,
.board_content,
.board_search_input {
	display: flex;
	align-items: center;
	justify-content: center;
}

/** Contain */
.board_list_con {
	padding: 50px 0;
	flex-direction: column;
	width: 100%;
}
/** Box */
.board_search_box {
	width: 100%;
}
.board_list_box {
	flex-direction: column;
	width: 1000px;
	border: 1px solid #e2e2e2;
	border-radius: 10px;
}

/** 기타 */
.board_search_input {
	width: 50%;
}
.board_content {
	width: 100%;
}
.board_content > div {
	text-align: center;
	font-weight: bold;
	padding: 5px 0;
}
.board_content:nth-child(1) {
	border-bottom: 1px solid #e2e2e2;
	padding: 15px 0;
}
.board_content > div:nth-child(1) {
	width: 10%;
}
.board_content > div:nth-child(2) {
	width: 30%;
}

.board_content > div:nth-child(3) {
	width: 10%;
}
.board_content > div:nth-child(4) {
	width: 25%;
}
.board_content > div:nth-child(5) {
	width: 25%;
}
</style>
