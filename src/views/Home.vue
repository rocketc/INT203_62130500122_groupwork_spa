<template>
  <div :style="image">
    <body class="h-full m-0">
      <MenuBar></MenuBar> 
      <img src="../assets/mountain.png" class="w-screen ml-auto mr-auto">
      <Form @submitted-favoriteList="addNewFavorite"></Form>
      <Gallery></Gallery> 
    </body>
  </div>
  
  
</template>

<script>
//import MenuBar from '../components/MenuBar.vue'
import Form from '@/components/Form.vue'
import MenuBar from '@/components/MenuBar.vue'
import Gallery from '../components/Gallery.vue'

export default {
  name: 'Home',
  components:{
   MenuBar,Form,Gallery
  },
  data(){
    return {
      image:{ backgroundImage:"url(../asset.mountain.png)"}
    }
  }
}
</script>
