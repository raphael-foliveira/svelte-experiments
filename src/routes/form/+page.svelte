<script lang="ts">
	let userName = '';
	let password = '';
	export let data: { someData: string };

	const handleSubmit = async (event: Event) => {
		event.preventDefault();
		const response = await fetch('/form', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ userName, password })
		});
		const responseData = await response.json();
		console.log(responseData);
	};
</script>

<h1>Some data is {data.someData}</h1>
<form action="" method="POST" on:submit={handleSubmit}>
	<label for="userName">User name</label>
	<input
		on:change={(event) => {
			userName = event.currentTarget.value;
		}}
		type="text"
		id="userName"
		name="userName"
		value={userName}
	/>

	<label for="password">Password</label>
	<input
		on:change={(event) => {
			password = event.currentTarget.value;
		}}
		type="password"
		id="password"
		name="password"
		value={password}
	/>
	<button type="submit">Submit</button>
</form>
