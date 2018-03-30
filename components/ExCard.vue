<style src="~/style/components/exCard.scss" lang="scss" scoped></style>

<template lang="pug">
    section.card-container
        nuxt-link.ex-card(:to="{ path: '/Exhibition/' + exhibition.path}")
            div.ex-header
                h2.ex-name {{ exhibition.exName }}
                h3.ex-subname {{ exhibition.exSubName }}
                hr.card-hr
            img.ex-image(:src="exhibition.thumbnail")
            article.ex-contents
                h3.ex-title {{ exhibition.title }}
                h3.ex-subtitle {{ exhibition.subTitle }}
                p.abstract {{ exhibition.abstract }}
                h5.ex-grounds 場所：{{ exhibition.grounds }}
                span.date {{ exhibition.dateStart }} 〜 {{ exhibition.dateFinish }}
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
        return {};
    }
};
</script>
