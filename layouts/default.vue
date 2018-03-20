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
        title: 'Home Page'
    },
    data: () => {
        return {
            hoge: 'hoge'
        };
    }
};
</script>