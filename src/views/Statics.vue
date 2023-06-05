<script>


</script>

<template>
    <div>
       <div class="title">
           <h1>問卷題目</h1>
           <div class="btn">
               <button>切換趨勢圖</button>
               <RouterLink to="/"><button>返回首頁</button></RouterLink>
           </div>
       </div>
       <div class="answer">

       </div>

    </div>
</template>

<style lang="scss" scoped>

    .title{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 20px;
        color: rgb(30, 171, 219);
        .btn{
            border: none;
            button{
                color: white;
                background-color: rgb(30, 171, 219);
                border: 1px solid rgb(30, 171, 219);
                border-radius: 6px;
                padding: 5px 10px;
                font-size: 16px;
                margin: 10px;
            }
        }
    }

</style>