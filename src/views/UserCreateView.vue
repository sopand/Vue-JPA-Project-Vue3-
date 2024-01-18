<template>
	<HeaderCom />
	<div class="join_con">
		<h1>Get Team 간단 회원가입</h1>
		<div class="join_box">
			<InputText v-model="member.email" :text_tag="'아이디'" />
			<InputPass v-model="member.password" :password_tag="'비밀번호'" />
			<InputText v-model="member.name" :text_tag="'별명,성명'" />
			<PrimaryButton @click="join" :button_tag="'회원가입'" />
		</div>
		<button></button>
	</div>
	<FooterCom />
</template>

<script setup>
import HeaderCom from '@/components/MainHeader.vue';
import FooterCom from '@/components/MainFooter.vue';
import InputText from '@/components/InputText.vue';
import InputPass from '@/components/InputPassword.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import { reactive } from 'vue';
import axios from 'axios';

const member = reactive({
	email: '',
	password: '',
	name: '',
});

function join() {
	axios
		.post('/api/member/join', member)
		.then(({ data }) => {
			console.log(data);
		})
		.catch(error => {
			console.error(error);
		});
}
</script>

<style scoped>
.join_con {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 100px 0;
}
.join_box {
	text-align: center;
	width: 700px;
}
</style>
