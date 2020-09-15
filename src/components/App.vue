<template>
	<div class="">
		App component displays {{value}}
    <Gif/>
	</div>
</template>

<script>
import Gif from "./Gif"
export default {
  name:"App",
	data: () => ({
    value: 'random value',
  }),
  components: {
    Gif,
  }
}
</script>

<style scoped>
div {
	background-color: pink;
}
</style>