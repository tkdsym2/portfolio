<template lang="pug">
    div.project-page(v-html="summaryData.data.bodyHtml" v-bind:style="style")
</template>

<script>
import Debug from 'debug';
import { sourceFileArray } from '~/contents/summary.json';
import _style from '~/style/pages/_project.scss';

const debug = Debug('works:project');

export default {
    validate({ params }) {
        return sourceFileArray.includes(
            `contents/projects/${params.project}.md`
        );
    },
    data() {
        const params = {};
        const _data = Object.assign(
            {},
            require(`~/contents/dist/projects/${
                this.$route.params.project
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
            title: `Works | ${this.summaryData.data.title}`,
            meta: [
                {
                    property: 'og:title',
                    content: `Works | ${this.summaryData.data.title}`
                },
                {
                    property: 'og:type',
                    content: 'article'
                },
                {
                    property: 'og:url',
                    content: `http://tkd.work/Works/${
                        this.summaryData.data.path
                    }`
                },
                {
                    property: 'og:site_name',
                    content: `${this.summaryData.data.title}`
                },
                {
                    property: 'og:description',
                    content: `${this.summaryData.data.subtitle}`
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
                    content: `http://tkd.work/Works/${
                        this.summaryData.data.path
                    }`
                },
                {
                    name: 'twitter:title',
                    content: `Project | ${this.summaryData.data.title}`
                },
                {
                    name: 'twitter:description',
                    content: `${this.summaryData.data.subtitle}`
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
