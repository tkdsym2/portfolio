<template lang="pug">
    div.project-page
        h3.title {{ summaryData.data.title }}
        h4.subtitle {{ summaryData.data.subtitle }}
        Slick(ref v-bind:options="slickOptions")
            a(href='#' v-for="image in summaryData.data.images")
                img.thumbnail(v-bind:src="image")
        div(v-html="summaryData.data.bodyHtml" v-bind:style="style")
</template>

<script>
import Debug from 'debug';
import Slick from 'vue-slick';
import { sourceFileArray } from '~/contents/summary.json';
import _style from '~/style/pages/_project.scss';
import '~/node_modules/slick-carousel/slick/slick.css';
import '~/node_modules/slick-carousel/slick/slick-theme.css';

const debug = Debug('works:project');

export default {
    components: {
        Slick
    },
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
        debug('summry data images: ', summaryData.data.images);
        return {
            summaryData,
            slickOptions: {
                infinite: true,
                speed: 1000,
                fade: true,
                cssEase: 'linear',
                autoplay: true,
                autoplaySpeed: 4000,
                pauseOnHover: false,
                dots: true,
                centerMode: true
            }
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
