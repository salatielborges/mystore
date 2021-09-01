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
    </div>
      
    </q-header>
    <hr>
    
    <h4 colspan="2" class="text-center column-mobile-view" style="padding-top: 60px;">SEU CARRINHO</h4>
    <div class="container" align="center">
<div v-if="cart.length > 0"  style="padding-top: 5px; max-width: 900px; ">
  
  <q-markup-table>
      <thead>
        
        <tr>
          <th  ><td class="image-column limited-size"/></th>
          <th class="text-left"  style="font-size: 18px">Produto</th>
          <th class="text-right" style="font-size: 18px">Preço Unit.</th>
          <th class="text-right" style="font-size: 18px">Qtd.</th>
          <th class="text-right" style="font-size: 18px">Total</th>
          <th class="text-right"></th>
        </tr>
        
      </thead>
      <tbody v-for="produto in cart" v-bind:key="produto" >
        <tr>
          <th class="image-column limited-size">
            <div class="product-image">
            <img :src="produto.image"  style="width:75px; height:75px">
            </div>
            </th>
          <div class="text-left" style="font-size: 18px; max-width:350px; ">
          
            {{produto.nome}}
          
          </div>
          <th class="text-left">{{produto.valornatela}}</th>
          
          <th class="text-right">
          <q-btn  v-on:click.prevent="diminuirnocarrinho(produto)" flat dense size="14px" icon="remove" title="REMOVER" style="position: left; padding:10px; padding-right: 15px; align: center"/>
          {{produto.qtd}}
          <q-btn  v-on:click.prevent="addcarrinho(produto)" flat dense size="14px" icon="add" title="ADICIONAR" style="position: left; padding:10px; padding-right: 15px; align: center"/>
          </th>
          
          <th class="text-right">{{produto.total}}</th>
          <th>
          <q-btn  v-on:click.prevent="removecarrinho(produto)" flat dense size="14px" icon="clear" title="REMOVER DO CARRINHO" style="position: left; padding:10px; padding-right: 15px; align: center"/>
          </th>
          
        </tr>
        
      </tbody>
      
    </q-markup-table>
    <div style="padding: 10px">
        <div align="right" style="padding: 15px">
      <th >TOTAL {{totaldocarrinho()}}</th>
        </div>
        <div padding="50px"  align="right">
          <a style="padding: 10px;">
              <q-btn flat dense icon="navigate_before" title="VOLTAR" to="/" label="Continuar Comprando" style="width:215px;"/>
          </a>
          <a style="padding: 10px;">
              <q-btn v-on:click.prevent="limparcarrinho()" color="red-4" icon="remove_shopping_cart" label="Limpar Carrinho"  style="width:200px;" />
          </a>
          <a style="padding: 10px;">
              <q-btn   color="light-green-7" icon="attach_money" label="Finalizar Compra" style="width:200px;" />
          </a>
        </div>
      
    </div>
    </div>
     <div v-else class="title" align="center">

       <img class="img-responsive" src="~assets/carrinhovazio.png" alt="logo">
       <h5 >
         No momento está vazio
       </h5>
       <q-btn padding="10px" color="primary" label="Voltar as Compras" to="/"/>

     </div>
    </div>
    
</q-layout>

</template>

<script >
import { defineComponent } from 'vue';

var quantidade=null;
var totalitem=null;
var totalcarrinho=null;

var totalnatela=null;

export default defineComponent({
  
  name: 'PageCarrinho',

  mounted: function () {
  this.carrinhoLocalStorage();
  
},

  data () {
        return{

            total: [],

          diminuirnocarrinho (produto)
          {
            quantidade = parseInt(produto.qtd) - parseInt(1); 
            if(quantidade <= 0)
              {
                this.removecarrinho(produto);
              }

            this.cart.filter((item ) => {
            if(produto.id === item.id)
              { 
              item.qtd = quantidade;
              totalitem = parseFloat(item.preco) * parseFloat(item.qtd);
              totalitem=  totalitem.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
              item.total = totalitem;
              
              this.totaldocarrinho();   
              item.totaldocarrinho = totalnatela           
              
              totalitem=null;
              quantidade=null;
              
              window.localStorage.carrinho = JSON.stringify(this.cart);
              this.carrinhoLocalStorage();
                }
            });

            
              
          },

          totaldocarrinho (){
            
            for(var i = 0; i < this.cart.length; i++) {
            totalcarrinho += parseFloat(this.cart[i].preco) * parseFloat(this.cart[i].qtd);
            totalnatela = totalcarrinho.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            }
            totalcarrinho = null;
            return(totalnatela)
          },


          addcarrinho (produto) {
            this.totaldocarrinho();
            
            if(produto.qtd < produto.estoque)
            {
              //this.cart = this.cart.filter((Produto, index ) => produto != Produto)
              quantidade = parseInt(produto.qtd) + parseInt(1);
              this.cart.filter((item ) => {
                if(produto.id === item.id)
                {
                
              item.qtd = quantidade;
              totalitem = parseFloat(item.preco) * parseFloat(item.qtd);
              totalitem=  totalitem.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
              item.total = totalitem;
              
              this.totaldocarrinho();   
              item.totaldocarrinho = totalnatela           
              

              if(quantidade <= 0)
              {
                this.removecarrinho();
              }
              totalitem=null;
              quantidade=null;
              window.localStorage.carrinho = JSON.stringify(this.cart);
              this.carrinhoLocalStorage();
                }
              });
            }
            
            else
            {
              alert("Quantidade acima do estoque disponivel")
              quantidade=null;
            } 
          
            
          },
          

          carrinhoLocalStorage() {
            if (window.localStorage.carrinho) {
                this.cart = JSON.parse(window.localStorage.carrinho);
            }
        },

        removecarrinho(produto) {
          this.cart = this.cart.filter((product, index ) => produto != product)
          window.localStorage.carrinho = JSON.stringify(this.cart);
          this.carrinhoLocalStorage();
        }, 

        limparcarrinho() {
          this.cart=[];
          window.localStorage.carrinho = JSON.stringify(this.cart);
          this.carrinhoLocalStorage();
        }, 

          cart:[ ],
          methods: {
            
          }
      }
}

})

</script>
