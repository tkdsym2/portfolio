<style src="~/style/pages/worksIndex.scss" lang="scss" scoped></style>

<template lang="pug">
  div.works-page
    h3 Works
    div.contents
        Card(v-for="proj in projects" v-bind:project="proj" v-bind:key="proj.id")
    p
        nuxt-link(to="/") Top Page
</template>

<script>
import Card from '~/components/Card.vue';
import data from '~/contents/path.json';
import Debug from 'debug';

const debug = Debug('works:index');

export default {
    components: {
        Card
    },
    head: {
        title: 'Home Page'
    },
    data() {
        return {
            projects: data.projects
        };
    }
};
</script>
