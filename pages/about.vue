<style src="~/style/pages/about.scss" lang="scss" scoped></style>

<template lang="pug">
.profile-page
    h3 Profile
    .profile-about
        p.profile-img
            img(src="https://lh3.googleusercontent.com/97VqscGVOZKo7vyduP11ewKgOPBK4IxuHsUk2-JAd9AMu7UaG7M36pXRVrP3xMMjw7fptCyCSWklcYH1MFppeQar2bku4PVimdnhOM_eLnJi82NGSTdaRUT0iwGUctMJ3TVp_xz_OOT6nMFIGmJozHeAYj9bwk2IWLLZZ_Ije9fXNKxO1duuVmEle9YEFdYgd3s4y8uAssteZhoecNPOHRe7o0txDQL--IoXcX5bxXH6qhvbMvRxIUjMe2ptj-L2vue6Lgk97lFxrjBU_6fnCLadmhKJvhhJ9PpRdpY2dJBrp6ER8N1katOeh1yiAxbXDXQo8jm2iDIoHsXNGOXENNIDEzaXoDP-Z-e1Uy363ARdjt_rS-UOwUZtB1P21U6qmwGRTuNbuaLeuClZQDs2VyHDaPVWvCpa-WDgvMagqqH5e-67ngFwiTAs1lg90L7OYars_7KdiQsi_F2yKF8nEt1-mYJt2iUdqq-bu_Dwj9MCrJyqK5bt5fzjU69NarkG4unrtxrWqLQ1zowzcZReQcjDg979aT8oKTXReYfoB9JiGiKk9ABAtfv-FB-Tbi9rDBO-kEzbGilGxFz6IchmO9vYGoFFfKoiu4zSzaRl=s704-rw")
        .status
            ul
                li.name 髙田 一真
                    small Kazuma Takada
                li.info
                    p
                        img(src="~/static/icon/school.png")
                        span.infotext
                            a.jump-link(href="http://www.meiji.ac.jp/ims/subject/fms/" target="_blank") 明治大学 総合数理学部 先端メディアサイエンス学科
                            a.jump-link(href="http://keita-lab.jp/" target="_blank") 渡邊研究室 所属 学部3年
                li.info
                    p
                        img(src="~/static/icon/mail.png")
                        span.infotext k222.tkd.fms [at] gmail.com
                li.info
                    p
                        img(src="~/static/icon/facebook.png", style="border-radius: 5px;")
                        span.infotext
                            a.jump-link(href="https://www.facebook.com/kazuma.takada.90", target="_blank") 高田 一真
                li.info
                    p
                        img(src="~/static/icon/github.png")
                        span.infotext
                            a(href="https://github.com/fmsuvM", target="_blank") @fmsuvM
                li.info
                    p
                        img(src="~/static/icon/twitter.png", style="width: 30px; height: 30px; margin-left: -5px; margin-right: -5px;")
                        span.infotext
                            a.jump-link(href="https://twitter.com/fmsuvM", target="_blank") @fmsuvM
                li.info
                    p
                        img(src="~/static/icon/instagram.png")
                        span.infotext
                            a.jump-link(href="https://www.instagram.com/kazuma__tkd/", target="_blank") @kazuma__tkd
                li.info
                    p
                        img(src="~/static/icon/medium.png", style="border-radius: 5px;")
                        span.infotext
                            a.jump-link(href="https://medium.com/@fmsuvM", target="_blank") @fmsuvM
    .bio
        .interests
            h5 Interests
            ul
                li
                    p Interaction Design
                li
                    p Digital Fabrication
        .background
            h5 Background
            .background-contents
                .background-year
                    ul
                        li 1997年 2月
                        li 2009年 4月
                        li 2015年 3月
                        li 2015年 4月
                        li 2019年 3月
                .background-year-info
                    ul
                        li 神奈川県 鎌倉市 生まれ
                        li 私立湘南学園中学高等学校&emsp;入学
                        li 私立湘南学園中学高等学校&emsp;卒業
                        li 明治大学 総合数理学部 先端メディアサイエンス学科&emsp;入学
                        li 明治大学 総合数理学部 先端メディアサイエンス学科&emsp;卒業予定
    //- p
    //-     nuxt-link(to="/") Top Page
</template>

<script>
export default {
    head: {
        title: 'Home Page'
    }
};
</script>