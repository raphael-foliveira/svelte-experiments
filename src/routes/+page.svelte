<script>
	import Foo from '../lib/Foo.svelte';

	let counter = 0;

	const increment = () => {
		counter++;
	};
</script>

<div class="container">
	<h3>{counter}</h3>
	<div class="btn-container">
		<button on:click={increment}>Increment</button>
	</div>
	<a href="/some-page">Go to some-page</a>
	<a href="/form">Go to form</a>
	<Foo thirdName={'Quux'} />
</div>

<style>
	h3 {
		color: red;
	}

	.container {
		display: flex;
		flex-wrap: wrap;
	}

	.container > * {
		width: 100%;
	}
</style>
