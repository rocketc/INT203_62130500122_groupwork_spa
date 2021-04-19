<template>
    <div class="center">
        <MenuBar></MenuBar>
        <p class="text-black text-center">Your Favorite Place</p>
        <div v-for="f in favoriteList" :key="f.id">
            <FavoriteList :inputCountry="f.country" :inputPlace="f.place" @click="selectFavoriteList(f)" @edit-click="openForm" @delete-click="deleteFavoriteList(f.id)"></FavoriteList>
        </div>
        <div>
            <Form v-if="addClick" @close="changeaddNewFavoriteListClick"  @submitted-favoriteList="addNewFavoriteList"></Form>
            <Form v-if="editClick" @close="changeEditFavoriteClick" :country="currentFavoriteList.country" :place="currentFavoriteList.place" @submitted-favoriteList="editFavoriteList"></Form>

        </div>
    </div>
</template>
<script>
import FavoriteList from '@/components/FavoriteList.vue'
import MenuBar from '@/components/MenuBar.vue'
import Form from '@/components/Form.vue'

export default {
    emit:["close-form"],
	props: ["addClick"],
	components: {
		FavoriteList,
		MenuBar,
        Form
	},
    data(){
        return {
            url: "http://localhost:3000/favoriteList",
            favoriteList: [],
            currentFavoriteList: [],
            editClick: false,
            
        }
    },
    methods: {
        changeaddNewFavoriteListClick(obj){
            this.$emit("close-form",obj);
        },
        changeEditFavoriteClick(obj){
            this.editClick = !obj;
        },
        async fetchFavorite() {
            const res = await fetch(this.url);
            const data = await res.json();
            return data;
        },
        selectFavoriteList(favoriteList){
            this.currentFavoriteList = favoriteList;
        },
        async addNewFavoriteList(addNewFavoriteList) {
            const res = await fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    country: addNewFavoriteList.country,
                    place: addNewFavoriteList.place,
                }),
            });
            const data = await res.json();
            this.favoriteList = [...this.favoriteList, data];
            this.currentFavoriteList = this.favoriteList[this.favoriteList.length - 1];
        },
        async deleteFavoriteList(id){
            const res = await fetch(`${this.url}/${id}`,{
                method: "DELETE",
            });
            res.status === 200 ? (this.favoriteList = this.favoriteList.filter((i) => i.id !== id)) : alert("Unable to change ");
        },
        openForm(obj){
            this.editClick = obj;
        },
        async editFavoriteList(editFavoriteList){
            const res = await fetch(`${this.url}/${this.currentFavoriteList.id}`,{
                method: "PUT",
                headers:{
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    country: editFavoriteList.country,
                    place: editFavoriteList.place,
                }),
            });
            const data = await res.json();
            this.favoriteList = this.favoriteList.map((i) => (i.id === data.id ? { ...i, country: data.country, place: data.place} : i ));
        },
      
    } , async created() {
            this.favoriteList = await this.fetchFavorite();
            this.currentFavoriteList = await this.favoriteList[0];
        },
}
</script>
