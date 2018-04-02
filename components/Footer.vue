<style src="~/style/components/footer.scss" lang="scss" scoped></style>

<template lang="pug">
  div.footer
    hr
    p kazuma.takada222 [at] gmail.com
    ul.footer-list
        li.list-item
            a(href="https://www.facebook.com/kazuma.takada.90" target="_blank")
                img(src="~/static/icon/facebook.png" style="border-top-left-radius: 2px; border-top-right-radius: 2px; border-bottom-left-radius: 2px; border-bottom-right-radius: 2px;")
        li.list-item
            a(href="https://github.com/fmsuvM" target="_blank")
                img(src="~/static/icon/github.png")
        li.list-item
            a(href="https://twitter.com/fmsuvM" target="_blank")
                img(src="~/static/icon/twitter.png" style="width: 30px; height: 30px; margin-left: -5px; margin-right: -5px; margin-top: -5px;")
    p.copyright
        span.copyright-mark &copy;
        span.author 2017 Kazuma Takada
</template>

<script>
</script>
