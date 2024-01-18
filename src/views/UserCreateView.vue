<template>
	<HeaderCom />
	<div class="join_con">
		<div class="join_box">
			<div class="input_tag">
				<label for="email_input"> 아이디 </label>
				<input
					type="email"
					id="email_input"
					name="email"
					v-model="member.email"
				/>
			</div>
		</div>
	</div>
	<FooterCom />
</template>

<script setup>
import HeaderCom from '@/components/MainHeader.vue';
import FooterCom from '@/components/MainFooter.vue';
</script>

<style scoped></style>
