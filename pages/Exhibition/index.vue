<style src="~/style/pages/exIndex.scss" lang="scss" scoped></style>

<template lang="pug">
  div.content
    h3.title Exhibition
    div.contents
        ExCard(v-for="ex in exhibitions" v-bind:exhibition="ex" v-bind:key="ex.id")
    p
        nuxt-link(to="/") Top Page
</template>

<script>
import ExCard from '~/components/ExCard.vue';
import data from '~/contents/path.json';
import Debug from 'debug';

const debug = Debug('exhibition:index');

export default {
    components: {
        ExCard
    },
    head: {
        title: 'Home Page'
    },
    data() {
        return {
            exhibitions: data.exhibitions
        };
    }
};
</script>