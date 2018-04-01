<template lang="pug">
  div.content
    h1.title Top Page. Background is movie
    p
        nuxt-link(to="/Main") hoge
</template>

<script>
import Header from '~/components/Header.vue';

export default {
    components: {
        Header
    },
    head() {
        return {
            title: 'Kazuma Takada\'s Portfolio',
            meta: [
                {
                    property: 'og:title',
                    content: 'Kazuma Takada\'s Portfolio'
                },
                {
                    property: 'og:type',
                    content: 'article'
                },
                {
                    property: 'og:url',
                    content: 'http://tkd.work'
                },
                {
                    property: 'og:site_name',
                    content: 'Kazuma Takada\'s Portfolio'
                },
                {
                    property: 'og:description',
                    content: 'Please visit my portfolio !'
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
                    content: 'tkd.work'
                },
                {
                    name: 'twitter:title',
                    content: 'Kazuma Takada Portfolio'
                },
                {
                    name: 'twitter:description',
                    content: 'Please visit my portfolio !'
                },
                {
                    name: 'twitter:image',
                    content:
                        'https://i.gyazo.com/123efba36bfa12ae7f415b59c2dae32a.png'
                }
            ]
        };
    },
    data: () => {
        return {
            hoge: 'hoge'
        };
    }
};
</script>
