<template lang="pug">
  div.content
    h1.title Works Page
    p
        nuxt-link(to="/") Top Page
    div
        Card(v-for="proj in projects" v-bind:project="proj" v-bind:key="proj.id")
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
