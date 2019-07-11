<template>
    <apexchart type=line height=350 :options="chartOptions" :series="series"/>
</template>
<script>
import Api from "@/services/GitlabService";
import VueApexCharts from 'vue-apexcharts'
export default{
    data(){
        return{
            commits: [],
            series:[{
                name: "commits",
                data: []
            }],
            chartOptions:{
                chart:{
                    height: 350,
                    zoom:{
                        enabled: false
                    }
                },
                dataLabels:{
                    enabled: true
                },
                stroke:{
                    curve: 'straight'
                },
                title:{
                    text: 'Number of committed per month',
                    align: 'left'
                },
                grid:{
                    row:{
                        colors: ['#f3f3f3','transparent'],
                        opacity: 0.5
                    }
                },
                xaxis:{
                    categories:[]
                }
            }
        }
    },
    components:{
        'apexchart': VueApexCharts
    },
    mounted(){
        this.setCommits()
    },
    methods:{
        async setCommits(){
            const response = await Api.getCommits(6148)
            if(response.status !== 200){
                return
            }
            this.commits = response.data

            const commits = this.commits;
            const counts = {};
            const date = new Date();
            date.setMonth(date.getMonth()-1);
            var ddate = date.toISOString().substring(0,10);
            var num = commits.length -1
            var current = commits[num].committed_date.substring(0,10)
            var now = new Date();
            var diff = Math.abs(now.getTime() - date.getTime())
            diff = Math.ceil(diff/(1000*3600*24))
            for(var i = 0;i <= diff;i++){
                counts[ddate] = 0;
                while(ddate == current){
                    counts[ddate]++;
                    num--;
                    if(num < 0)
                        break;
                    current = commits[num].committed_date.substring(0,10);
                }
                date.setDate(date.getDate()+1);
                ddate = date.toISOString().substring(0,10);
            }
            var value = []
            value = Object.values(counts)
            this.chartOptions = {
                xaxis:{
                    categories: Object.keys(counts)
                }
            }
            this.series=[{
                data: value
            }]
        }
    }
}
</script>