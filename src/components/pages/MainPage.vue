<template>
  <div class="container">

    <h1>Please fill out this poll with your inputs</h1>
    <questions-list />
    <h3> Thanks for your time <i class="em em-smiley"></i></h3>

  </div>
</template>

<script>
import QuestionsList  from '@/components/QuestionsList '

export default {
  components: { QuestionsList }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

h1,h3 {
  color: #154360;
  font-family: serif;
  font-weight: bold;
  margin-bottom:20px;
}
</style>
