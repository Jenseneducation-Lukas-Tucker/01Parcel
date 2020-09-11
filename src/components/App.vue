<template>
	<div class="">
		App component displays {{value}}
	</div>
</template>

<script>
export default {
	data: () => ({
		value: 'random value'
	})
}
</script>

<style scoped>
div {
	background-color: pink;
}
</style>