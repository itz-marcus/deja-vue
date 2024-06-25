<template>
    <div>
        <div id="card">
            <card-comp v-for ="friend in friendsData()" :key="friend">
                <template #console>
                    <h1>Name: {{friend.profile}}</h1>
                    <p>Manufacturer: {{friend.firstName}}</p>
                    <p>Release Year: {{friend.lastName}}</p>
                    <p>Best selling game: {{friend.gender}}</p>
                    <p>Price: R{{friend.contactDetails}}</p>
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
        friendsData(){
            return this.$store.state.friends
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