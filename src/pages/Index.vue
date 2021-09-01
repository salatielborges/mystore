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
    
    <div align="center" class="q-pa-md row items-start q-gutter-md" style="padding-top: 100px; ">

  <q-card class="my-card " v-for="produto in products" v-bind:key="produto" style="width: 400px; height: 630px">
      <q-card-section>
        <div style="max-height: 60px;" class="text-h6">{{ produto.nome }}</div>
        <p>
          <img :src="produto.image"  style="max-width: 250px;"/> 
        </p>
         <p class="text-h5">
          {{ produto.valornatela }}
        </p>
        <p style="height: 100px">
          {{ produto.descricao }}
        </p>
        
      </q-card-section>
      <q-card-actions align="left" style="position: absolute; bottom: 8px; left: 16px;">
            <q-btn v-on:click.prevent="addcarrinho(produto)" color="primary" icon="add_shopping_cart">COMPRAR</q-btn>
      </q-card-actions>
    </q-card>

    </div>
    
</q-layout>

</template>

<script >
import { defineComponent } from 'vue';

var id=null;
var item=null;
var existe=false;

export default defineComponent({
  
  name: 'PageCarrinho',

  mounted: function () {
  this.carrinhoLocalStorage();
  
},

  data () {
        return{

          products: [
            {
              id:'1',
              estoque:'3',
              totalcarrinho:0,
              valornatela:'R$ 7.580,62',
              preco:'7580.62',
              total:'R$ 7.580,62',
              nome: 'iPhone 12 Pro Max Apple (512GB) Dourado tela 6,7" Câmera tripla 12MP iOS',
              descricao: 'iPhone 12 Pro Max Apple (512GB) Dourado tela 6,7" Câmera tripla 12MP iOS (12) iPhone 12 Pro Max. Tela Super Retina XDR maior com 6,7 polegadas. Ceramic Shield, que é quatro vezes mais resistente a quedas. Fotos surpreendentes em pouca luz com o melhor sistema de câmera Pro em um iPhone',
              image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-gold-hero?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1604021660000',
              qtd:'1',
              
            },
            {
              id:'2',
              estoque:'1',
              totalcarrinho:0,
              valornatela:'R$ 6.800,53',
              preco:'6800.53',
              total:'R$ 6.800,53',
              nome: 'iPhone 12 Pro Max Apple (512GB) Azul tela 6,7" Câmera tripla 12MP iOS',
              descricao: 'iPhone 12 Pro Max Apple (512GB) Azul tela 6,7" Câmera tripla 12MP iOS (12) iPhone 12 Pro Max. Tela Super Retina XDR maior com 6,7 polegadas. Ceramic Shield, que é quatro vezes mais resistente a quedas. Fotos surpreendentes em pouca luz com o melhor sistema de câmera Pro em um iPhone',
              image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-blue-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021658000',
              qtd:'1',
            },
            {
              id:'3',
              estoque:'4',
              totalcarrinho:0,
              valornatela:'R$ 6.800,53',
              preco:'6800.53',
              total:'R$ 6.800,53',
              nome: 'iPhone 12 Pro Max Apple (512GB) Branco tela 6,7" Câmera tripla 12MP iOS',
              descricao: 'iPhone 12 Pro Max Apple (512GB) Branco tela 6,7" Câmera tripla 12MP iOS (12) iPhone 12 Pro Max. Tela Super Retina XDR maior com 6,7 polegadas. Ceramic Shield, que é quatro vezes mais resistente a quedas. Fotos surpreendentes em pouca luz com o melhor sistema de câmera Pro em um iPhone',
              image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-silver-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021658000',
              qtd:'1',
            },
            {
              id:'4',
              estoque:'2',
              totalcarrinho:0,
              valornatela:'R$ 6.800,53',
              preco:'6800.53',
              total:'R$ 6.800,53',
              nome: 'iPhone 12 Pro Max Apple (512GB) Preto tela 6,7" Câmera tripla 12MP iOS',
              descricao: 'iPhone 12 Pro Max Apple (512GB) Preto tela 6,7" Câmera tripla 12MP iOS (12) iPhone 12 Pro Max. Tela Super Retina XDR maior com 6,7 polegadas. Ceramic Shield, que é quatro vezes mais resistente a quedas. Fotos surpreendentes em pouca luz com o melhor sistema de câmera Pro em um iPhone',
              image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-graphite-hero?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1604021658000',
              qtd:'1',
            },
            
            {
              id:'5',
              estoque:'2',
              totalcarrinho:0,
              valornatela:'R$ 5.800,00',
              preco:'5800.00',
              total:'R$ 5.800,00',
              nome: 'Galaxy Note20 Ultra Mystic Bronze 256GB',
              descricao: 'O design minimalista se destaca em um corpo de metal que foi aprimorado por detalhes sofisticados e cores extraordinárias: Mystic Bronze, Mystic Green, Mystic Gray, Mystic White e Mystic Black. Sem falar no Corning® Gorilla® Glass V',
              image: 'https://samsungbr.vtexassets.com/arquivos/ids/313121-1200-auto?width=1200&height=auto&aspect=true',
              qtd:'1',
            },
            {
              id:'6',
              estoque:'1',
              totalcarrinho:0,
              valornatela:'R$ 5.800,00',
              preco:'5800.00',
              total:'R$ 5.800,00',
              nome: 'Galaxy Note20 Ultra Mystic Black 256GB',
              descricao: 'O design minimalista se destaca em um corpo de metal que foi aprimorado por detalhes sofisticados e cores extraordinárias: Mystic Bronze, Mystic Green, Mystic Gray, Mystic White e Mystic Black. Sem falar no Corning® Gorilla® Glass V',
              image: 'https://samsungbr.vtexassets.com/arquivos/ids/313129-1200-auto?width=1200&height=auto&aspect=true',
              qtd:'1',
            },
            {
              id:'7',
              estoque:'1',
              totalcarrinho:0,
              valornatela:'R$ 5.800,00',
              preco:'5800.00',
              total:'R$ 5.800,00',
              nome: 'Galaxy Note20 Ultra Mystic White 256GB',
              descricao: 'O design minimalista se destaca em um corpo de metal que foi aprimorado por detalhes sofisticados e cores extraordinárias: Mystic Bronze, Mystic Green, Mystic Gray, Mystic White e Mystic Black. Sem falar no Corning® Gorilla® Glass V',
              image: 'https://samsungbr.vtexassets.com/arquivos/ids/313152-1200-auto?width=1200&height=auto&aspect=true',
              qtd:'1',
            },
            {
              id:'8',
              estoque:'6', 
              totalcarrinho:0,
              valornatela:'R$ 5.800,00',
              preco:'5800.00',
              total:'R$ 5.800,00',
              nome: 'Galaxy Note20 Mystic Green 256GB',
              descricao: 'O design minimalista se destaca em um corpo de metal que foi aprimorado por detalhes sofisticados e cores extraordinárias: Mystic Bronze, Mystic Green, Mystic Gray, Mystic White e Mystic Black. Sem falar no Corning® Gorilla® Glass V',
              image: 'https://samsungbr.vtexassets.com/arquivos/ids/313097-1200-auto?width=1200&height=auto&aspect=true',
              qtd:'1',
            },
            
          ],

          addcarrinho (produto) {
            if(this.cart.length<=0)
            {
              this.cart.push(produto)
              window.localStorage.carrinho = JSON.stringify(this.cart);
              alert("Produto adicionado ao carrinho")
            }
            else
            {
              if(this.cart.some(item => item.id === produto.id)){
                 console.log(this.cart.indexOf(produto))
                 alert("Este produto já está no carrinho")
              }

              else{
                 this.cart.push(produto)
                  window.localStorage.carrinho = JSON.stringify(this.cart);
                  alert("Produto adicionado ao carrinho")
              }

            }
               
          
          },

          carrinhoLocalStorage() {
            if (window.localStorage.carrinho) {
                this.cart = JSON.parse(window.localStorage.carrinho);
            }
            else{
              
            window.localStorage.carrinho = JSON.stringify(this.cart);
          
            }
        },

        removecarrinho(produto) {
          this.cart = this.cart.filter((product, index ) => produto != product)
          window.localStorage.carrinho = JSON.stringify(this.cart);
          this.checarLocalStorage();
        }, 

          cart:[ ],
          methods: {
           
        }
    },


}

      }
}



})

</script>
