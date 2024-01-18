<template>
	<div class="header_box">
		<div class="logo_box">
			<img src="./icons/Get Team-logo.png" />
		</div>
		<ul class="menu_list">
			<li><a href="#"> Notice</a></li>
			<li><a href="#"> Comunity</a></li>
			<li><a href="#"> Q&A</a></li>
			<li><a href="#"> Project</a></li>
			<li><a href="#"> Study</a></li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'header-com',
};
</script>

<style scoped>
.header_box {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border: 1px solid red;
	padding: 20px 0 20px 0;
}
.logo_box {
	width: 100%;
	text-align: center;
}
.logo_box img {
	width: 200px;
	height: 150px;
}
.menu_list {
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 100%;
}
.menu_list li {
	list-style-type: none;
	font-size: 20px;
	text-align: center;
	width: 200px;
}
.menu_list li a {
	font-weight: bold;
	color: black;
}
</style>
