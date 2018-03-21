<style src="~/style/components/card.scss" lang="scss" scoped></style>

<template lang="pug">
    div.card-component
        h3 {{ project.title }}
        p {{ project.summary }}
        nuxt-link(:to="{ path: '/Works/' + project.path}") read more
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
    }
};
</script>
