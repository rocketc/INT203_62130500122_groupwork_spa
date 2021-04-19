<template>
	<!-- <div class="h-screen w-2/3 ml-auto mr-auto">
		<form @submit.prevent="checkForm">
			<div class="ml-auto mr-auto w-2/3 grid grid-cols-2 mt-6 gap-2">
				<p v-if="errors" class="text-red-600 text-left ml-2">*This fill can't be blank!</p>
				<p v-if="errors" class="text-red-600 text-left ml-2">*This fill can't be blank!</p>
				<input
					class="input"
					type="text"
					id="inputCountry"
					placeholder="Enter Country "
					v-model="inputCountry"
				/>
				<input
					class="input"
					type="text"
					id="inputPlace"
					placeholder="EnterPlace"
					v-model="inputPlace"
				/>
				<button
				type="submit"
					class="h-8 w-24 justify-self-end bg-bluelogo text-white border-4 border-bluelogo hover:bg-classicblue hover:border-bluelogo"
				>Submit</button>
				<button @click="closeContent" type="reset"
					class="h-8 w-24 bg-classicblue text-white border-4 border-classicblue hover:bg-bluelogo hover:border hover:border-classicblue"
				>Cancel</button>
				
			</div>
		</form>
	</div> -->
	<div class="mr-auto ml-auto p-3 w-60 h-60 bg-gray-200 rounded-lg object-center">
		<form @submit.prevent="checkForm">
			<div class="grid grid-rows-5">
				<div>
					<label class="text-sm leading-7 text-gray-500">Country</label>
					<input
						type="text"
						id="inputCountry"
						class="bg-gray-100 rounded px-4 py-2 mb-4"
						v-model="inputCountry"
					/>
				</div>
				<div>
					<label class="text-sm leading-7 text-gray-500">Place</label>
					<input
						type="text"
						id="inputPlace"
						class="bg-gray-100 rounded px-4 py-2 mb-4"
						v-model="inputPlace"
					/>
				</div>
				<div>
					<button
						type="submit"
						class="px-8 py-2 h-6 w-20 text-gray-500 bg-yellow-100 rounded-lg hover:bg-yellow-300 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 text-center btn"
					>submit</button>
					<button
					type="reset"
						@click="closeForm"
						class="px-8 py-2 h-6 w-20 text-white bg-gray-100 rounded-lg hover:bg-gray-300 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
					>close</button>
				</div>
			</div>
		</form>
		<div>
			<p
				v-if="errors"
				class="text-red-600 text-left ml-2"
			>*This fill can't be blank! {{ errors.inputCountry }}</p>
			<p
				v-if="errors"
				class="text-red-600 text-left ml-2"
			>*This fill can't be blank! {{ errors.inputPlace }}</p>
		</div>
	</div>
</template>

<script>
const constraints = {
	inputCountry: {
		presence: true,
	},
	inputPlace: {
		presence: true,
	},
};

export default {
	name: "Form",
	props: ["country", "place"],
	emits: ["submitted-favoriteList", "close"],
	data() {
		return {
			inputPlace: this.place,
			inputCountry: this.country,
			errors: null,
		};
	},
	methods: {
		closeForm() {
			this.$emit("close", true);
		},
		checkForm() {
			var validate = require("validate.js");
			this.errors = validate(
				{
					inputCountry: this.inputCountry,
					inputPlace: this.inputPlace,
				},
				constraints
			);
			if (this.errors) {
				console.log(this.errors);
			} else {
				this.submitForm();
				alert("Your favorite place has submitted .");
			}
		},
		submitForm() {
			let favoriteList = {
				country: this.inputCountry,
				place: this.inputPlace,
			};
			this.$emit("submitted-favoriteList", favoriteList);
		},
	},
};

</script>
    