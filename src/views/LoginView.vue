<template>
	<HeaderCom />
	<div class="login_con">
		<div class="login_box">
			<LogoCom />
			<div class="input_tag">
				<label for="email_input"> 아이디 </label>
				<input
					type="email"
					id="email_input"
					name="email"
					v-model="member.email"
				/>
			</div>

			<div class="input_tag">
				<label for="password_input"> 비밀번호 </label>
				<input
					type="password"
					id="password_input"
					name="password"
					v-model="member.password"
				/>
			</div>

			<button type="button" @click="login">로그인</button>
			<RouterLink to="/member/join">회원가입</RouterLink>
		</div>
	</div>
	<FooterCom />
</template>

<script setup>
import { reactive } from 'vue';
import HeaderCom from '@/components/MainHeader.vue';
import FooterCom from '@/components/MainFooter.vue';
import LogoCom from '@/components/LogoLayout.vue';
import { RouterLink } from 'vue-router';

const reg_chk = /^\s+|\s+$/g;
const member = reactive({
	email: '',
	password: '',
});
function login() {
	if (member.email.replace(reg_chk, '') == '') {
		alert('이메일을 입력해주세요');
		return;
	}

	if (member.password.replace(reg_chk, '') == '') {
		alert('비밀번호를 입력해주세요');
		return;
	}
}
</script>
<style>
.login_con {
	width: 100%;
	padding: 150px 0;
	display: flex;
	align-items: center;
	justify-content: center;
}
.login_box {
	width: 450px;
	border: 1px solid #e2e2e2;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 40px 0;
}
.input_tag {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 50px;
}
.input_tag label {
	display: flex;
	align-items: center;
	justify-content: flex-end;
	width: 20%;
	padding-right: 15px;
	font-weight: bold;
}
.input_tag input {
	width: 60%;
	border: 1px solid #e2e2e2;
	border-radius: 10px;
	height: 40px;
	padding-left: 10px;
	font-size: 16px;
	font-weight: bold;
}
.login_box button {
	margin: 30px 0;
	border: 1px solid #e2e2e2;
	background-color: #0000ff;
}
.login_box button,
.login_box a {
	width: 350px;
	height: 40px;
	border-radius: 10px;
	color: white;
	font-size: 18px;
	font-weight: bold;
}
.login_box a {
	text-align: center;
	border: 1px solid #e2e2e2;
	background-color: #000000;
}
</style>
