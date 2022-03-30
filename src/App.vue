<template>
	<!-- <h1>{{ count }}</h1> -->
	<h1>{{ msg }}</h1>
	<Hello />
</template>

<script>
import Hello from '~/components/Hello'

export default {
	components: {
		Hello
	},
	data() {
		return {
			// count: 0
			msg: 'hihi'
		}
	}
}
</script>
