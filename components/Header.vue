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

<style lang="sass" scoped>
.area
    display: flex;
    flex-flow: row wrap;
    align-items: stretch;
    margin-left: auto;
    margin-right: auto;
    width: 90%;

.navigation-component
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12);

.navigation-bar
    & > .myname
        display: block;
        font-size: 22px;
        margin: 22px;
        margin-left: 0px;
        color: #373c38;
        text-decoration: none;

    & > .navigation-list
        display: none;
        flex-flow: row nowrap;
        align-items: center;
        white-space: nowrap;
        display: flex;

    & > .navigation-list > .item
        display: block;
        flex-shrink: 0;
        height: 64px;
        line-height: 64px;
        padding: 20px;
        padding-top: 0px;
        padding-bottom: 0px;
        font-size: 15px;
        text-decoration: none;
        padding-right: 0px;
        color: #373c38;
        transition: all 0.4s 0s ease;

    & > .navigation-list > .item:hover
        font-size: 18px;
        color: #3a8fb7;
</style>