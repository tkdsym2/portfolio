<template lang="pug">
div
    p Hi from {{ name }}
    nuxt-link(to="/") Home Page Yeah
</template>

<script>
export default {
    asyncData() {
        return {
            name: process.static ?
                'static' :
                process.server ? 'server' : 'client'
        };
    },
    head: {
        title: 'About Page'
    }
};
</script>