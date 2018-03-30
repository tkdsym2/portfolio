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
import { sourceFileArray } from '~/contents/summary.json';
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
        const _projects = sourceFileArray.filter(element => {
            return element.match(/projects/);
        });
        const _contents = _projects.map(element => {
            const refactorEl = element.split('.')[0];
            return refactorEl.split('/')[2];
        });
        const contents = _contents
            .map(element => {
                const params = {};
                return Object.assign(
                    {},
                    require(`~/contents/dist/projects/${element}.json`),
                    params
                );
            })
            .reverse();
        return {
            projects: contents
        };
    }
};
</script>
