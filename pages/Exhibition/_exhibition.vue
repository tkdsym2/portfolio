<template lang="pug">
    div.exhibition-page(v-html="summaryData.data.bodyHtml" v-bind:style="style")
</template>

<script>
import Debug from 'debug';
import { sourceFileArray } from '~/contents/summary.json';
import _style from '~/style/pages/_exhibition.scss';

const debug = Debug('exhibitions:ex');

export default {
    validate({ params }) {
        return sourceFileArray.includes(
            `contents/exhibitions/${params.exhibition}.md`
        );
    },
    data() {
        const params = {};
        const _data = Object.assign(
            {},
            require(`~/contents/dist/exhibitions/${
                this.$route.params.exhibition
            }.json`),
            {
                params
            }
        );
        const summaryData = {
            data: _data
        };
        return {
            summaryData
        };
    },
    computed: {
        style() {
            return _style;
        }
    },
    head() {
        return {
            title: `Exhibition | ${this.summaryData.data.title}`,
            meta: [
                {
                    property: 'og:title',
                    content: `Exhibition | ${this.summaryData.data.title}`
                },
                {
                    property: 'og:type',
                    content: 'article'
                },
                {
                    property: 'og:url',
                    content: `http://tkd.work/Exhibition/${
                        this.summaryData.data.path
                    }`
                },
                {
                    property: 'og:site_name',
                    content: 'Kazuma Takada\'s Portfolio | Exhibition'
                },
                {
                    property: 'og:description',
                    content: `${this.summaryData.data.abstract}`
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
                    content: `http://tkd.work/Exhibition/${
                        this.summaryData.data.path
                    }`
                },
                {
                    name: 'twitter:title',
                    content: `Exhibition | ${this.summaryData.data.title}`
                },
                {
                    name: 'twitter:description',
                    content: `${this.summaryData.data.abstract}`
                },
                {
                    name: 'twitter:image',
                    content: `${this.summaryData.data.thumbnail}`
                }
            ]
        };
    }
};
</script>
