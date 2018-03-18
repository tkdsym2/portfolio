<template lang="pug">
  div
    Header(:hoge="hoge")
    main
        nuxt
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