<script lang="ts">
	let file: File;

	const handleSubmit = async (event: SubmitEvent) => {
		event.preventDefault();

		const formData = new FormData();
		formData.append('fileData', file);

		const response = await fetch('/image-form', {
			method: 'POST',
			body: formData
		});
		console.log(response.status);
	};
</script>

<h1>A form that receives an image</h1>

<form action="" method="POST" on:submit={handleSubmit}>
	<label for="imageInput">Send an image</label>
	<input
		type="file"
		id="imageInput"
		name="imageInput"
		alt="some image here"
		accept="*.jpg/*.jpeg/*.png"
		on:change={(event) => {
			if (!event.currentTarget.files) {
				return;
			}
			if (event.currentTarget.files.length === 0) {
				return;
			}
			file = event.currentTarget.files[0];
		}}
	/>
	<button type="submit">Submit</button>
</form>
