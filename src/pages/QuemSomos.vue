<template>

<q-layout view="lHh Lpr lFf" >
    <q-header elevated style="padding:10px">
            <img align="left" class="img-responsive" src="~assets/logostore.png" alt="logo">
    <div align="left">
      <q-btn-group outline style="padding-right:10px">
      <q-btn outline color="whrite" icon="home" label="HOME" to="/"/>
      <q-btn outline color="whrite" icon="account_circle" label="QUEM SOMOS" to="/quemsomos"/>
      <q-btn outline color="whrite" icon="email" label="CONTATO" to="/contato"/>    
      </q-btn-group>
      <q-btn flat dense  icon="shopping_cart" title="IR PARA O CARRINHO" to="carrinho" style="position: left; padding: 5px; align: center">{{cart.length}}</q-btn>
      
    </div>
      
    </q-header>
    <hr>
    
    <h3 colspan="2" class="text-center column-mobile-view" style="padding-top: 60px;">QUEM SOMOS</h3>

    <div class="container" align="center">

    </div>
    
</q-layout>

</template>

<script >
import { defineComponent } from 'vue';



export default defineComponent({
  
  name: 'PageQuemSomos',

   mounted: function () {
  this.carrinhoLocalStorage();
},

  data () {
        return{

          cart:[ ],

          carrinhoLocalStorage() {
            if (window.localStorage.carrinho) {
                this.cart = JSON.parse(window.localStorage.carrinho);
            }
        },


        }
  }


})

</script>
