<template>
    <div class="filter">
        <div class="item" @click="filter('')">Todo</div>
        <div class="item" @click="filter('Alive')">Vivo</div>
        <div class="item" @click="filter('Dead')">Muerto</div>
        <div class="item" @click="filter('unknown')">Desconocido</div>
    </div>
</template>

<script>
    import { useStore } from "vuex";
    export default{
        setup(){
            const store = useStore()
            const filter = ((status) =>{
                store.dispatch('filterByStatus', status)
            })
        return {
            filter
        }
        }
    }
</script>

<style lang="scss">
  .filter {
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-radius: 10px;
  overflow: hidden;
  .item {
    padding: 1rem 0.5rem;
    background-color: var(--background-card);
    text-align: center;
    cursor: pointer;
    &:hover {
      color: var(--text-orange);
    }
  }
}
</style>