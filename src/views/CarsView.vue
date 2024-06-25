<template>
    <div>
        <div id="card">
            <card-comp v-for ="car in carsData()" :key="car" >
                <template #cars>
                    <div>
                        <h1>Make: {{car.make}}</h1>
                        <p>Model: {{car.model}}</p>
                        <p>Year: {{car.year}}</p>
                        <p>Color: {{car.color}}</p>
                        <p>Price: R{{car.price}}</p>
                        <hr>
                    </div> 
                </template>
               
            </card-comp>  
        </div>    
    </div>
</template>
<script>
import CardComp from '@/components/CardComp.vue';
export default {
    components:{
        CardComp
    },
    methods:{
        carsData(){
            return this.$store.state.cars
        }
    },
    computed:{
        getData(){
            return this.$store.dispatch("getData")
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