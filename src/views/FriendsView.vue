<template>
    <div>
        <div id="card">
            <article v-for ="friend in friendsData()" :key="friend">
                <section :style="{border: `3px solid ${friend.gender == 'Zebra'? 'gold' :'green'}`}">
                    <h1>Profile Name: {{friend.profile}}</h1>
                    <p>Name: {{friend.firstName}}</p>
                    <p>Surname: {{friend.lastName}}</p>
                    <p>Gender: {{friend.gender}}</p>
                    <p>Tele. Number: {{friend.contactDetails}}</p>
                </section>
            </article>   
        </div>
    </div>
</template>
<script>
export default {
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
        /* margin: 2vh; */
        border-radius: 10px;
    }
</style>