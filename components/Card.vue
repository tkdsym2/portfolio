<style src="~/style/components/card.scss" lang="scss" scoped></style>

<template lang="pug">
    section.card-container
        nuxt-link.card(:to="{ path: '/Works/' + project.path}")
            div.thumbnail
                img(:src="project.thumbnail")
                article
                    h1 {{ project.title }}
                    p {{ project.summary }}
                    span 2015
</template>

<script>
import Debug from 'debug';

const debug = Debug('components:card');

export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    asyncData(context) {
        debug('context', context);
        debug('thumbnail: ', context.props.project.thumbnail);
        return {};
    },
    data() {
        debug('hoge');
        return {};
    }
};
</script>
