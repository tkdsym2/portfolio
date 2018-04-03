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
    head() {
        return {
            title: 'Works',
            meta: [
                {
                    property: 'og:title',
                    content: 'Kazuma Takada\'s Portfolio | Works'
                },
                {
                    property: 'og:type',
                    content: 'article'
                },
                {
                    property: 'og:url',
                    content: 'http://tkd.work/Works'
                },
                {
                    property: 'og:site_name',
                    content: 'Kazuma Takada\'s Portfolio | Works'
                },
                {
                    property: 'og:description',
                    content: 'Please visit my portfolio !'
                },
                {
                    name: 'twitter:card',
                    content: 'summary_large_image'
                },
                {
                    name: 'twitter:site',
                    content: '@fmsuvM'
                },
                {
                    name: 'twitter:creator',
                    content: '@fmsuvM'
                },
                {
                    name: 'twitter:domain',
                    content: 'tkd.work/Works'
                },
                {
                    name: 'twitter:title',
                    content: 'Kazuma Takada Portfolio | Works'
                },
                {
                    name: 'twitter:description',
                    content: 'Please visit my portfolio !'
                },
                {
                    name: 'twitter:image',
                    content:
                        'https://i.gyazo.com/123efba36bfa12ae7f415b59c2dae32a.png'
                }
            ]
        };
    },
    data() {
        const _projects = sourceFileArray.filter(element => {
            return element.match(/projects/);
        });
        const _contents = _projects.map(element => {
            const refactorEl = element.split('.')[0];
            return refactorEl.split('/')[2];
        });
        const contents = _contents.map(element => {
            const params = {};
            return Object.assign(
                {},
                require(`~/contents/dist/projects/${element}.json`),
                params
            );
        });
        const sortedContents = contents.sort((a, b) => {
            return a.date < b.date ? 1 : -1;
        });
        return {
            projects: sortedContents
        };
    }
};
</script>
