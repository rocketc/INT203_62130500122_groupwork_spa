<template>
	<div class=" h-auto w-1/2 ml-auto mr-auto">
		<div class="grid grid-cols-4 gap-2 mt-6">
			<span> {{ inputCountry }} </span> 
			<span> {{ inputPlace }} </span>
			<button class="text-white px-2  shadow rounded-md bg-white hover:bg-green-400 hover:text-white" @click="editButtonClick">Edit</button>
			<button class="text-white px-2  shadow rounded-md bg-white hover:bg-red-400 hover:text-white" @click="deleteButtonClick">Delete</button>
		</div>
	</div>
</template>
<script>
	//	<div class=" grid grid-cols-2 text-center gap-2 text-base">
	export default {
		name: "FavoriteList",
		props: ["inputCountry", "inputPlace"],
		emits: ["edit-click", "delete-click"],
		methods: {
			editButtonClick() {
				this.$emit("edit-click", true);
			},
			deleteButtonClick() {
				this.$emit("delete-click", true);
			},
		},
	};
</script>