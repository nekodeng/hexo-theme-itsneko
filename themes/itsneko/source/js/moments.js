requests_url = 'https://hexo-circle-of-friends-api-ashen.vercel.app/api';
const friend_link_circle = new Vue({
    el: '#friend_link_circle',
    data: {
        datalist: [],
        datalist_slice:[],
        maxnumber:20,
        addnumber:10,
        display:true,
        loadmore_display:false,
        listlenth:0,
        today_post:0,
        last_update_time:'',
        user_lenth:'',
        error:0,
        unique_live_link:0,
        opentype:'_blank'  //'_blank'打开新标签,'_self'本窗口打开

    },
    methods:{
        unique (arr) {
            return Array.from(new Set(arr))
        },
        formatDate(strDate) {
            try{
                let date = new Date(Date.parse(strDate.replace(/-/g, "/")));
                let gettimeoffset = 0
                if (new Date().getTimezoneOffset()){
                    gettimeoffset = new Date().getTimezoneOffset();
                }
                else{
                    gettimeoffset = 8;
                }
                let timeoffset = gettimeoffset * 60 * 1000;
                let len = date.getTime();
                let date2 = new Date(len - timeoffset);
                let sec = date2.getSeconds().toString();
                let min =  date2.getMinutes().toString();
                if (sec.length === 1) {
                    sec = "0" + sec;
                }
                if (min.length === 1) {
                    min = "0" + min;
                }
                return date2.getFullYear().toString() + "/" + (date2.getMonth() + 1).toString() + "/" + date2.getDate().toString() + " " + date2.getHours().toString() + ":" + min + ":" + sec
            }catch(e){return ""}
        },
        timezoon(){
            let time = this.datalist_slice[0][1][0][5];
            return this.formatDate(time)
        },
        todaypost(){
            let date= new Date();
            let year = date.getFullYear();
            let month =(date.getMonth() + 1).toString();
            let day = (date.getDate()).toString();
            if (month.length === 1) {
                month = "0" + month;
            }
            if (day.length === 1) {
                day = "0" + day;
            }
            return  year + "-" + month + "-" + day
        },
        addmaxnumber(){
            this.maxnumber = this.maxnumber + this.addnumber;
            if (this.maxnumber >= this.listlenth){
                this.loadmore_display=false;
            }
        },
        slice(data){
            let monthlist=[];
            let datalist=[];
            let data_slice = data;
            for (let item in data_slice) {
                data_slice[item].push(item);
                if (data_slice[item][1].lenth !== 10) {
                    let list = data_slice[item][1].split('-')
                        if (list[1].length < 2){
                            list[1]="0" + list[1]
                        }
                        if (list[2].length < 2){
                            list[2]="0" + list[2]
                        }
                    data_slice[item][1] = list.join('-')
                    }
                let month=data_slice[item][1].slice(0,7);
                if(monthlist.indexOf(month) !== -1){
                    console.log(month);
                    datalist[monthlist.length-1][1].push(data_slice[item]);
                }
                else{
                    monthlist.push(month);
                    datalist.push([month,[data_slice[item]]]);
                }
            }

            for (let mounthgroup  of datalist){
                mounthgroup.push(mounthgroup[1][0][6]);
            }
            console.log(datalist);
            return datalist
        }
    },
    mounted: function () {

        fetch(requests_url).then(
            data => data.json()
    ).then(
            data => {
                let today = this.todaypost();
                let Datetody = new Date(today);
                for (let item = 0; item <data[1].length ;item++){
                    let Datedate = new Date(data[1][item][1])
                    if (Datedate>Datetody){
                        data[1].splice(item --, 1);
                        console.log('穿越了');
                    }
                }
                this.datalist = data[1];
                this.listlenth = data[1].length;
                this.user_lenth = data[0].length;
                this.datalist_slice = this.slice(data[1]);
                this.last_update_time =this.timezoon();
                this.loadmore_display = true;
                let link_list=[];
                for (let item of data[1]){
                    if (item[1] === today ){
                        this.today_post +=1;
                    }
                    link_list.push(item[3]);
                }
                let arr = this.unique(link_list);
                this.unique_live_link = arr.length;
                for (let item of data[0]){
                    if (item[3] === 'true' ){
                        this.error +=1;
                    }
                }
            }
        )

    }
})