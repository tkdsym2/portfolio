<template lang="pug">
  div
    Header(:hoge="hoge")
    h1 welcome!
    nuxt-link(to="/about") About Page
</template>

<script>
import Header from '~/components/Header.vue';

export default {
    components: {
        Header
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