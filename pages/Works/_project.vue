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
    }
};
</script>
