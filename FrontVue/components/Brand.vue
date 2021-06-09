<template>
  <div>
    <h2 class="text-center">Marcas más buscadas</h2>
    <button @click.prevent="getBrand(item)" class="brand" 
    v-for="item in brands" 
    :key="item.id">

    <img v-bind:src="item.image" class="imageBox" alt="brand">
    
    {{item.brand}}</button>

  </div>
</template>

<script>
export default {
  data(){
    return{
      brands:[
        {id:1, brand:"APRILIA", image: require('../assets/img/6e9493f0eb2db65cf6f26b3e00fbd0e3.jpg')},
        {id:2, brand:"BENELLI", image: require('../assets/img/6e9493f0eb2db65cf6f26b3e00fbd0e3.jpg')},
        {id:3, brand:"BETA", image: require('../assets/img/6e9493f0eb2db65cf6f26b3e00fbd0e3.jpg')},
        {id:4, brand:"BMW", image: require('../assets/img/6e9493f0eb2db65cf6f26b3e00fbd0e3.jpg')},
        {id:5, brand:"DAELIM", image: require('../assets/img/6e9493f0eb2db65cf6f26b3e00fbd0e3.jpg')},
        {id:6, brand:"DERBI", image: require('../assets/img/6e9493f0eb2db65cf6f26b3e00fbd0e3.jpg')},
        {id:7, brand:"DUCATI", image: require('../assets/img/6e9493f0eb2db65cf6f26b3e00fbd0e3.jpg')},
        {id:8, brand:"GAS GAS", image: require('../assets/img/6e9493f0eb2db65cf6f26b3e00fbd0e3.jpg')},
        {id:9, brand:"HARLEY DAVINSON", image: require('../assets/img/6e9493f0eb2db65cf6f26b3e00fbd0e3.jpg')},
        {id:10, brand:"HONDA", image: require('../assets/img/6e9493f0eb2db65cf6f26b3e00fbd0e3.jpg')},
        {id:11, brand:"HYOSUNG", image: require('../assets/img/6e9493f0eb2db65cf6f26b3e00fbd0e3.jpg')},
        {id:12, brand:"KAWASAKI", image: require('../assets/img/6e9493f0eb2db65cf6f26b3e00fbd0e3.jpg')},
        {id:13, brand:"KEEWAY", image: require('../assets/img/6e9493f0eb2db65cf6f26b3e00fbd0e3.jpg')},
        {id:14, brand:"KTM", image: require('../assets/img/6e9493f0eb2db65cf6f26b3e00fbd0e3.jpg')},
        {id:15, brand:"KYMCO", image: require('../assets/img/6e9493f0eb2db65cf6f26b3e00fbd0e3.jpg')},
        {id:16, brand:"MOTO GUZZI", image: require('../assets/img/6e9493f0eb2db65cf6f26b3e00fbd0e3.jpg')},
        {id:17, brand:"PEUGEOT", image: require('../assets/img/6e9493f0eb2db65cf6f26b3e00fbd0e3.jpg')},
        {id:18, brand:"PIAGIO", image: require('../assets/img/6e9493f0eb2db65cf6f26b3e00fbd0e3.jpg')},
        {id:19, brand:"RIEJU", image: require('../assets/img/6e9493f0eb2db65cf6f26b3e00fbd0e3.jpg')},
        {id:20, brand:"SUZUKI", image: require('../assets/img/6e9493f0eb2db65cf6f26b3e00fbd0e3.jpg')},
        {id:21, brand:"SYM", image: require('../assets/img/6e9493f0eb2db65cf6f26b3e00fbd0e3.jpg')},
        {id:22, brand:"TRIUMPH", image: require('../assets/img/6e9493f0eb2db65cf6f26b3e00fbd0e3.jpg')},
        {id:23, brand:"VESPA", image: require('../assets/img/6e9493f0eb2db65cf6f26b3e00fbd0e3.jpg')},
        {id:24, brand:"YAMAHA", image: require('../assets/img/6e9493f0eb2db65cf6f26b3e00fbd0e3.jpg')},
      ],
      brand:""
    }
  },
  methods:{
    getBrand(item){
      this.brand = item.brand
      this.$router.push(`/brand/${this.brand}`)
    }
  }
}
</script>

<style>

</style>
