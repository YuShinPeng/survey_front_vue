<script>

</script>

<template>
    <div class="survey">
        <div class="title">
            <h1>問卷標題</h1>
            <div class="date">
                <h3>開始日期</h3>
                <h3>~</h3>
                <h3>結束日期</h3>
            </div>
        </div>
        <div class="personInfo">
            <div class="name">
                <p></p>
                <label for="">姓名</label>
                <p></p>
                <input type="text" disabled>
            </div>
            <div class="phone">
                <p></p>
                <label for="">手機</label>
                <p></p>
                <input type="text" disabled>
            </div>
            <div class="email">
                <p></p>
                <label for="">Email</label>
                <p></p>
                <input type="text" disabled>
            </div>
            <div class="age">
                <p></p>
                <label for="">年齡</label>
                <p></p>
                <input type="text" disabled>
            </div>
            <div class="gender">
                <p></p>
                <label for="">性別</label>
                <p></p>
                <input type="text" disabled>
            </div>
        </div>
        <div class="question">
            <p>第一題(多選)</p>
            <input type="checkbox">
            <label for="">選項一</label>
            <input type="checkbox">
            <label for="">選項二</label>
            <input type="checkbox">
            <label for="">選項三</label>
            <p></p>
            <p>第二題(單選)</p>
            <input type="radio">
            <label for="">選項一</label>
            <input type="radio">
            <label for="">選項二</label>
            <input type="radio">
            <label for="">選項三</label>
        </div>
        <div class="btn">
            <RouterLink to="/survey"><button>取消</button></RouterLink>
            <RouterLink to="/"><button>送出</button></RouterLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .survey{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .title{
            color: rgb(30, 171, 219);
            h1{
                margin: 20px;
            }
            .date{
                display: flex;
            }
        }

        .personInfo{
            color: rgb(30, 171, 219);

            input{
                border-color: #878787;
                border-style: solid;
                border-top-width: 0px;
                border-right-width: 0px;
                border-left-width: 0px;
                border-bottom-width: 1px;
            }
        }


        .question{
            margin-top: 20px;
            p{
                color: rgb(30, 171, 219);
                text-align: center;
            }
            label{
                margin:10px
            }
        }

        .btn{
            border: none;
            button{
                color: white;
                background-color: rgb(30, 171, 219);
                border: 1px solid rgb(30, 171, 219);;
                border-radius: 6px;
                padding: 5px 10px;
                font-size: 16px;
                margin: 10px;
            }
        }
    }
</style>