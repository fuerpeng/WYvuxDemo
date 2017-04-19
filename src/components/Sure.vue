<template>
    <div>
        <h1>确定页面</h1>
        <ul>
            <li v-for="article in articles">
                {{article.title}}
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
      data () {
        return {
          articles: []
        }
      },
      mounted () {
        this.$vux.loading.show({
          text: 'Loading'
        })
        this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
          headers: {},
          emulateJSON: true
        }).then(function (response) {
          this.articles = response.data.subjects
          this.$vux.loading.hide()
        }, function (response) {
          console.log(response)
        })
      }
    }
</script>
<style>
    
</style>
