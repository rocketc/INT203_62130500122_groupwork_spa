<template>
    <div id="menubar" class="border-opacity-0 h-20 bg-gray-200 object-center  pt-2 flex justify-center items-center space-x-36">
      <img src="../assets/travellogo.png" class="h-5/6 ">
      <router-link to='/' > 
        <button>
          <p class="uppercase font-sans text-black text-xs font-medium tracking-wide hover:text-yellow-500">Home</p>
        </button>
      </router-link>
      <router-link  to='/photo'>
        <button>
          <p class="uppercase font-sans text-black text-xs font-medium tracking-wide hover:text-yellow-500">Photo</p>
        </button>
      </router-link>
      <router-link to='/favorite'>
        <button>
          <p class="uppercase font-sans text-black text-xs font-medium tracking-wide hover:text-yellow-500">Favorite</p>
        </button>
      </router-link>
    </div>
</template>

<script>

export default {
    name: "MenuBar"
}
</script>
