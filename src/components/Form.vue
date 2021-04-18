<template>
    <div  class=" mr-auto ml-auto p-3 bg-gray-200  rounded-lg grid grid-rows-2 gap-4">
        <!-- <div style="background-image: url('../assets/mountain.png');" class="w-screen ml-auto mr-auto"> -->
        <!-- <img src="../assets/mountain.png" class="w-screen ml-auto mr-auto"> -->
           <form @submit.prevent="checkForm">
                <div id="Contry">
                    <label class="text-sm leading-7 text-gray-600">Country</label>
                    <input type="text" class="bg-gray-100 rounded px-4 py-2 mb-4">
                </div>
                <div id="Place" class="">
                    <label class="text-sm leading-7 text-gray-600">Place</label>
                    <input type="text" class="bg-gray-100 rounded px-4 py-2 mb-4">
                </div>
                <div >
                    <input type="submit" class="px-8 py-2 text-gray-500 bg-yellow-100 rounded-lg hover:bg-yellow-300 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                </div>
            </form> 
        <!-- </div> -->
        
    </div>
</template>

<script>
    const constraints = {
	inputContry: {
		presence: true,
	},
	inputPlace: {
		presence: true,
	},
};
    export default {
        name: "Form",
        props: ["country", "place"],
        emits: ["submitted-favoriteList"],
        data() {
		    return {
			    inputCountry: this.country,
			    inputPlace: this.place,
			    errors: null,
		    };
	    },
        methods: {
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
    }
    
</script>
    