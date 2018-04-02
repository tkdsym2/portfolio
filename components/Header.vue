<style src="~/style/components/header.scss" lang="scss" scoped></style>

<template lang="pug">
  div.navigation-component
   div.navigation-bar.area
    nuxt-link.myname(to="/") Kazuma Takada's Portfolio
    nav.navigation-list
      nuxt-link.item(to="/Works") Works
      nuxt-link.item(to="/Publication") Publication
      nuxt-link.item(to="/Exhibition") Exhibition
      nuxt-link.item(to="/About") About
</template>

<script>
export default {
    props: {
        hoge: {
            type: String,
            required: true
        }
    }
};
</script>
