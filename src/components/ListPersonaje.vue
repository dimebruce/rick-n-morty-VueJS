<template>
    <section>
        <div class="personajes">
            <div class="personajesItem" v-for="personaje in personajes" :key = "personaje.id">
                <CardPersonaje :personaje = "personaje"/>
            </div>
        </div>
    </section>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex' 
import CardPersonaje from '@/components/CardPersonaje'
    export default{
        components: {
            CardPersonaje 
        },
        setup(){
            const store = useStore()
            const personajes = computed(()=>{
                return store.state.personajesFiltros
            })
            onMounted(()=>{
                //dispatch es para acceder al actions dentro de store
                store.dispatch('getPersonajes')
            })
            return {
                personajes
            }
        }
    }
</script>

<style lang="scss">
.personajes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  margin: 3rem 0;
}
</style>