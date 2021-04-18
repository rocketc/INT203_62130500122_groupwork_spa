<template>
  <div>
    <MenuBar></MenuBar>
    <Gallery></Gallery>
  </div>
</template>
<script>
  //import MenuBar from '../components/MenuBar.vue'
  import MenuBar from '@/components/MenuBar.vue'
  import Gallery from '@/components/Gallery.vue'
  
  export default {
    name: 'Photo',
    components:{
     MenuBar,Gallery
    }
  }
  </script>