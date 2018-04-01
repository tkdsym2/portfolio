<style src="~/style/components/exCard.scss" lang="scss" scoped></style>

<template lang="pug">
    section.card-container
        nuxt-link.ex-card(:to="{ path: '/Exhibition/' + exhibition.path}")
            div.ex-header
                h2.ex-name {{ exhibition.title }}
                h3.ex-subname {{ exhibition.subTitle }}
                hr.card-hr
            img.ex-image(:src="exhibition.thumbnail")
            article.ex-contents
                div.up
                    h3.ex-title {{ exhibition.exName }}
                    h3.ex-subtitle {{ exhibition.exSubName }}
                div.down
                    h5.ex-grounds 場所：{{ exhibition.grounds }}
                    p.date {{ refactorDate(exhibition.dateStart) }} 〜 {{ refactorDate(exhibition.dateFinish) }}
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
    },
    methods: {
        refactorDate: date => {
            const _date = new Date(date);
            const _month = _date.getMonth() + 1;
            return `${_date.getFullYear()}. ${_month}. ${_date.getDate()}.`;
        }
    }
};
</script>
