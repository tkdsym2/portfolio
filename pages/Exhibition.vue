<template lang="pug">
  div.content
    h1.title Ex Page
    p
        nuxt-link(to="/") Top Page
</template>

<script>
export default {
    head: {
        title: 'Home Page'
    }
};
</script>