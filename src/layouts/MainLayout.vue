

<template>

  <q-layout view="lHh Lpr lFf">
    <q-header elevated >
          <img
            alt="Planos MyStore"
            src="~assets/logostore.png"
            style="padding: 5px"
          >

        <q-btn
          flat
          dense
          
          size="25px"
          icon="home"
          aria-label="Home"
          title="PRODUTOS"
          to="/index"
          style="position: left; padding: 5px"
        />
        
          <q-btn
          flat
          dense
          size="25px"
          icon="shopping_cart"
          aria-label="Menu"
          title="CARRINHO"
          to="/carrinho"
          style="padding: 5px"
          />

    </q-header>
    
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import{index} from 'pages/Index.vue'
export default defineComponent({
  name: 'MainLayout',

  components: {
  
  },

})




</script>
