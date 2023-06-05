<script>
export default{
    data() {
        return {
            survey_id:null,
            title:null,
            condition:null,
            start_date:null,
            end_date:null,

            searchResults:[],
            isSearching:false, //是否在搜尋中



        }
    },
    
    methods: {
        search(){
            this.isSearching = true // 正在搜尋
            this.searchResults=[] // 清空之前搜尋紀錄

            if(this.title){
                this.findByTitle()
            }

            if(this.start_date){
                this.findByStartDate()
            }

            if(this.end_date){
                this.findByEndDate()
            }


        },

        findByTitle(){
            let surveyData = {
                "title": this.title
            }
            fetch("http://localhost:8080/search_by_title",{
                method: 'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(surveyData)
            })
            .then(res => res.json())                
            .then(data => {
                this.searchResults = data
                alert(data.message)
                console.log(data)
                console.log(this.title)
            })
            
            .catch(error =>{

            })
        },
        findByStartDate(){
            let surveyData = {
                "start_date": this.start_date
            }
            fetch("http://localhost:8080/search_by_start_date",{
                method: 'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(surveyData)
            })
            .then(res => res.json())                
            .then(data => {
                this.searchResults = data
                alert(data.message)
                console.log(data)
                console.log(this.start_date)
            })
            
            .catch(error =>{

            }) 
        },
        findByEndDate(){
            let surveyData = {
                "end_date": this.end_date
            }
            fetch("http://localhost:8080/search_by_end_date",{
                method: 'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(surveyData)
            })
            .then(res => res.json())                
            .then(data => {
                this.searchResults = data
                alert(data.message)
                console.log(data)
                console.log(this.end_date)
            })
            
            .catch(error =>{

            })
        }
    },

    mounted() {
        
    },
}
</script>

<template>
    <div class="search">
        <div class="title-search">
            <p></p>
            <label for="">問卷標題</label>
            <p></p>
            <input type="text" v-model="title" placeholder="請輸入問卷標題">
        </div>
        <div class="start-search">
            <p></p>
            <label for="">開始時間</label>
            <p></p>
            <input type="date" v-model="start_date" class="form-control" id="date" name="date">
        </div>
        <div class="end-search">
            <p></p>
            <label for="">結束時間</label>
            <p></p>
            <input type="date" v-model="end_date" class="form-control" id="date" name="date">
        </div>
        <p></p>
        <button type="button" @click="search">搜尋</button>
    </div>
    <div class="main">
        <table>
            <tr class="column">
                <th>填寫</th>
                <th>問卷</th>
                <th>狀態</th>
                <th>開始時間</th>
                <th>結束時間</th>
                <th>觀看統計</th>
            </tr>
            <tr v-for="result in searchResults" :key="result.id">
                <td><RouterLink to="/survey"><button>填寫問卷</button></RouterLink></td>
                <td>{{ result.title }}</td>
                <td>{{ result.condition }}</td>
                <td>{{ result.startDate }}</td>
                <td>{{ result.endDate }}</td>
                <td><RouterLink to="/statics"><button>前往</button></RouterLink></td>
            </tr>
        </table>
    </div>
</template>

<style lang="scss" scoped>
    .search{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        label{
            color:rgb(30, 171, 219);
            font-size: 20px;
        }
        .title-search{
            display: block;
            input{
                width: 160px;
                height: 40px;
                border: 1px solid #ced4da;
                border-radius: 6px;
            }
        }
        


        .start-search{
            display: block;
        }
        
        .end-search{
            display: block;
        }

        button{
            color: white;
            background-color: rgb(30, 171, 219);
            border: 1px solid rgb(30, 171, 219);;
            border-radius: 6px;
            padding: 5px 10px;
            font-size: 16px;
        }

    }

    .main{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        th{
            padding: 10px;
            border:2px solid rgb(30, 171, 219);  
        }

        td{
            padding: 10px;
            border:2px solid rgb(30, 171, 219);  
        }

        button{
            color: white;
            background-color: rgb(30, 171, 219);
            border: 1px solid rgb(30, 171, 219);;
            border-radius: 6px;
            padding: 5px 10px;
            font-size: 16px;
        }

    }

</style>