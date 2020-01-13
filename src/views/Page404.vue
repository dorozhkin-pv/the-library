<template>
	<b-container>
		<img src="@/images/404.png" class="img404" alt="error">
		<p class="text404">
			Кажется вы заблудились?
			<router-link :to="{name: 'home'}">
				<span class="to-home">На главную</span>
			</router-link>
		</p>
	</b-container>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
	.img404 {
		margin: 0 auto;
		max-width: 70%;
	}
	.text404 {
		font-size: 24px;
		text-align: center;
		margin-bottom: 0;
		margin-top: -50px;
	}
	.to-home {
		color: #fff;
	}
</style>
