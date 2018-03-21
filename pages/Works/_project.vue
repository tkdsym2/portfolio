<style src="~/style/components/card.scss" lang="scss" scoped></style>

<template lang="pug">
    div.card-component
        //- p {{ summaryData.data.title }}
        <div v-html="summaryData.hd"></div>
</template>

<script>
import Debug from 'debug';
import { sourceFileArray } from '~/contents/summary.json';
import h from 'hyperscript';

const debug = Debug('works:project');

export default {
    validate({ params }) {
        debug(params);
        return sourceFileArray.includes(
            `contents/projects/${params.project}.md`
        );
    },
    async asyncData({ params }) {
        const _htmlData = h(
            'div#page',
            h('div#header', h('p', `${params.project}`))
        );
        const htmlData = _htmlData.outerHTML;
        const _data = Object.assign(
            {},
            require(`~/contents/dist/${params.project}.json`),
            {
                params
            }
        );
        const summaryData = {
            data: _data,
            hd: htmlData
        };
        return {
            summaryData
        };
    }
};
</script>