<template lang="pug">
  div.footer
    hr
    p kazuma.takada222 [at] gmail.com
    ul.footer-list
        li.list-item
            a(href="https://www.facebook.com/kazuma.takada.90" target="_blank")
                img(src="~/static/icon/facebook.png" style={{borderTopLeftRadius: '2px', borderTopRightRadius: '2px', borderBottomLeftRadius: '2px', borderBottomRightRadius: '2px'}})
        li.list-item
            a(href="https://github.com/fmsuvM" target="_blank")
                img(src="~/static/icon/github.png")
        li.list-item
            a(href="https://twitter.com/fmsuvM" target="_blank")
                img(src="~/static/icon/twitter.png" style={{width: '30px', height: '30px', marginLeft: '-5px', marginRight: '-5px', marginTop: '-5px'}})
    p.copyright
        span.copyright-mark &copy;
        span.author 2018 Kazuma Takada
</template>

<script>
</script>

<style lang="sass" scoped>
.footer
    margin-top: 30px;
    color: #373c38;
    p
        text-align: center;
        font-size: 12px;

.footer-list
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0px;
    margin: 0px;
    margin-bottom: 15px;
    img
        width: 20px;
        height: 20px;
    & > .list-item
        padding-left: 10px;
        padding-right: 10px;

.copyright
    padding: 0px;
    margin: 0px;
    margin-top: -20px;
    text-align: center;

span.copyright-mark
    padding: 0px;
    margin: 0px;
    font-size: 16px;
    vertical-align: middle;


span.author
    padding: 0px;
    margin: 0px;
    vertical-align: middle;
    font-size: 10px;
    padding-top: 5px;
</style>