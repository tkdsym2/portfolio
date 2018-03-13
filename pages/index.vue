<template lang="pug">
  div
    h1 welcome!
    nuxt-link(to="/about") About Page
</template>

<script>
export default {
    head: {
        title: 'Home Page'
    }
};
</script>
