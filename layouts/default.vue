<template lang="pug">
  div
    Header(:hoge="hoge")
    main
        nuxt
    Footer
</template>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

export default {
    components: {
        Header,
        Footer
    },
    head: {
        title: 'Kazuma Takada\'s Portfolio',
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Noto+Sans'
            },
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/earlyaccess/notosansjapanese.css'
            }
        ]
    },
    data: () => {
        return {
            hoge: 'hoge'
        };
    }
};
</script>