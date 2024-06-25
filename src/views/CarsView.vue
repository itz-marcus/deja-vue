<template lang="">
    <div>
        <div id="card">
         <div v-for ="car in carsData()" :key="car">
            <h1>Make: {{car.make}}</h1>
            <p>Model: {{car.model}}</p>
            <p>Year: {{car.year}}</p>
            <p>Color: {{car.color}}</p>
            <p>Price: R{{car.price}}</p>
            <hr>
        </div>   
        </div>
        
        
    </div>
</template>
<script>
export default {
    methods:{
        carsData(){
            return this.$store.state.cars
        }
    },
    computed:{
        getData(){
            return this.$store.dispatch ("getData")
        }
    },
    mounted(){
        this.getData
    }
}
</script>
<style >
    #card{
        background-color: rgb(157, 112, 200);
        margin: 2vh;
        border-radius: 10px;
    }
</style>