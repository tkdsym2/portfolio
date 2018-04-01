<style src="~/style/pages/exIndex.scss" lang="scss" scoped></style>

<template lang="pug">
  div.exhibition-page
    h3.title Exhibition
    div.contents
        ExCard(v-for="ex in exhibitions" v-bind:exhibition="ex" v-bind:key="ex.id")
    p
        nuxt-link(to="/") Top Page
</template>

<script>
import ExCard from '~/components/ExCard.vue';
import { sourceFileArray } from '~/contents/summary.json';
import Debug from 'debug';

const debug = Debug('exhibition:index');

export default {
    components: {
        ExCard
    },
    head() {
        return {
            title: 'Exhibitions',
            meta: [
                {
                    property: 'og:title',
                    content: 'Kazuma Takada\'s Portfolio | Exhibition'
                },
                {
                    property: 'og:type',
                    content: 'article'
                },
                {
                    property: 'og:url',
                    content: 'http://tkd.work/Exhibition'
                },
                {
                    property: 'og:site_name',
                    content: 'Kazuma Takada\'s Portfolio | Exhibition'
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
                    content: 'tkd.work/Exhibition'
                },
                {
                    name: 'twitter:title',
                    content: 'Kazuma Takada Portfolio | Exhibition'
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
        const _exhibitions = sourceFileArray.filter(element => {
            return element.match(/exhibitions/);
        });
        const _contents = _exhibitions.map(element => {
            const refactorEl = element.split('.')[0];
            return refactorEl.split('/')[2];
        });
        const contents = _contents
            .map(element => {
                const params = {};
                return Object.assign(
                    {},
                    require(`~/contents/dist/exhibitions/${element}.json`),
                    params
                );
            })
            .reverse();
        return {
            exhibitions: contents
        };
    }
};
</script>