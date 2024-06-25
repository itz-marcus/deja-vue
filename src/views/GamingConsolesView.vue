<template>
    <div>
        <div id="card">
            <card-comp v-for ="gamingConsole in consoleData()" :key="gamingConsole">
                <template #console>
                    <h1>Name: {{gamingConsole.name}}</h1>
                    <p>Manufacturer: {{gamingConsole.manufacturer}}</p>
                    <p>Release Year: {{gamingConsole.release_year}}</p>
                    <p>Best selling game: {{gamingConsole.best_selling_game}}</p>
                    <p>Price: R{{gamingConsole.price}}</p>
                    <hr>
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
        consoleData(){
            return this.$store.state.gaming_consoles
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
<style scoped>
    #card{
        background-color: rgb(157, 112, 200);
        margin: 2vh;
        border-radius: 10px;
    }
</style>