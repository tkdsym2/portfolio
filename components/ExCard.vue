<style src="~/style/components/exCard.scss" lang="scss" scoped></style>

<template lang="pug">
    section.card-container
        nuxt-link(:to="{ path: '/Exhibition/' + exhibition.path}") hoge
        //- nuxt-link.card(:to="{ path: '/Exhibition/' + ex.path}")
        //-     div.thumbnail
        //-         img(:src="project.thumbnail")
        //-         article
        //-             h1 {{ project.title }}
        //-             p {{ project.summary }}
        //-             span 2015
</template>

<script>
import Debug from 'debug';

const debug = Debug('components:card');

export default {
    props: {
        exhibition: {
            type: Object,
            required: true
        }
    },
    asyncData(context) {
        debug('context', context);
        // debug('thumbnail: ', context.props.project.thumbnail);
        return {};
    },
    data() {
        debug('hoge');
        return {};
    }
};
</script>
