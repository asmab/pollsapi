<template>
    <div class="header-content">
        <div class="row">
            <div class="col col-1"> {{index+1}} </div>
            <div class="col col-10"> 
                {{question.question}}<hr>
                <div class="question-details">
                    <span class="date"> published at :{{dateFormatter(question.published_at)}}</span>
                    <span class="choices"> {{question.choices.length}} choices </span>
                </div>
            </div>

            <div class="col col-1">
                <button 
                class="vote-btn" 
                block href="#" 
                v-b-toggle="'num-'+index">                
                </button>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    props: {
        index: {
            require: true
        },
        question: {
            required: true
        }
    },
    data () {
        return {
        }
    },
      methods: {

      dateFormatter(published_date){
          var convertedDate = new Date(published_date)
          return convertedDate.toLocaleDateString().toString()
      },
      }
}
</script>

<style lang="scss">

$orange-color: #f39c12 ;

hr { margin: 0px; }
.date { float:left; }
.choices { float: right; }

.question-details {
    margin-top:5px;
}

.header-content {
    text-align: left;
        color: $orange-color;
        font-size: 20px;
        font-weight: bold;
            span{
        color: white;
        font-size: 10px;
        margin:0px;
        padding:0px;
        list-style-type: none;
    }
}


.vote-btn{
    width: 30px;
    height: 30px;
    border: none;
    background-color: $orange-color;
    background: transparent; 
    background-image: url("../assets/vote.png");
    background-repeat: no-repeat;
}
.btn-wrapper {
    float:right;
}

</style>