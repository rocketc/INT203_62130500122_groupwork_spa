<template>
  <div >
    <body class="h-full m-0">
      <MenuBar></MenuBar> 
      <img src="../assets/mountain.png" class="w-screen ml-auto mr-auto">
      <Form @close="changeAddFavoriteClick" @submitted-favoriteList="addNewFavoriteList"></Form>
      <Gallery></Gallery> 
    </body>
  </div>
  
  
</template>

<script>
//import MenuBar from '../components/MenuBar.vue'
import Form from '@/components/Form.vue'
import MenuBar from '@/components/MenuBar.vue'
// import Gallery from '@/components/Gallery.vue'

export default {
  name: 'Home',
  components:{
   MenuBar,Form
  },
  data() {
    return {
      image: {backgroundImage: "url(../assets/mountain.png)"},
      url: "http://localhost:3000/favoriteList",
			favoriteList: [],
			editClick: false,
    };
  },
  methods: {
    changeAddFavoriteClick(obj){
      this.$emit("close-form",obj);
    },
    async fetchFavorite(){
      const res = await fetch (this.url);
      const data = await res.json();
      return data;
    },
    async addNewFavoriteList(addNewFavoriteList){
      const res = await fetch(this.url,{
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          country: addNewFavoriteList.country,
          place: addNewFavoriteList.place
        })
      });
      const data = await res.json();
      this.favoriteList = [...this.favoriteList, data];
    }
  },
  async created() {
    this.favoriteList = await this.fetchFavorite();
  },
};
</script>
