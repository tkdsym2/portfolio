<template lang="pug">
    div.exhibition-page
        h3.title {{ summaryData.data.title }}
        h4.subtitle {{ summaryData.data.subtitle }}
        Slick(ref v-bind:options="slickOptions")
            a(href='#' v-for="image in summaryData.data.images")
                img.thumbnail(v-bind:src="image")
        div(v-html="summaryData.data.bodyHtml" v-bind:style="style")
        p
            nuxt-link(to="/Exhibition") 戻る
</template>

<script>
import Debug from 'debug';
import Slick from 'vue-slick';
import { sourceFileArray } from '~/contents/summary.json';
import _style from '~/style/pages/_exhibition.scss';
import '~/node_modules/slick-carousel/slick/slick.css';
import '~/node_modules/slick-carousel/slick/slick-theme.css';

const debug = Debug('exhibitions:ex');

export default {
    components: {
        Slick
    },
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
