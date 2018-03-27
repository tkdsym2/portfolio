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
    head: {
        title: 'Home Page'
    }
};
</script>
