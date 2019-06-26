<template>
    <div>
        <!--Search-->
        <div class="btn-group">
            <!--Serach box-->
            <input type="text" class="form-control" v-model="search">
            <!--Chooser filter-->           
            <div class="dropdown">                
                <button class="btn btn-outline-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select Columns
                </button>                
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li class="dropdown-item">
                        <span>All</span>
                    </li>
                    <li v-for="(item, index) of head" :key="index" class="dropdown-item">
                        <input type="checkbox" value="true" class="form-check-input" v-model="item['visible']">
                        <span>{{item['name']}}</span>
                    </li>                    
                </ul>
            </div>        
        </div>        
        <!--Table-->
        <div class="scrollable">
        <table class="table table-hover table-bordered">
            <!--Columns-->                     
            <thead class="head fix">                
                <tr>                    
                    <th class="bg-dark" v-for="(itemHead, indexHead) of getHead" :key="indexHead">                                                                 
                        <Column class=""                        
                            :name="itemHead['name']"
                            :filters="itemHead['filters']"
                            :summary="getSummary[indexHead]"
                            :total="getTotalSummary"
                            >
                        </Column>                                          
                    </th>                                     
                </tr>                             
            </thead>
            <!--body-->
            <tbody>
                <tr v-for="(bodyItem, bodyIndex) of getBody" :key="bodyIndex">                    
                    <td v-for="(headItem, headIndex)  of getHead" :key="headIndex" :class="getStyle(headItem['filters'], bodyItem[headItem['name']])">
                       <span>{{bodyItem[headItem['name']]}}</span>
                    </td>                                     
                </tr>               
            </tbody>
        </table>
        </div>
        <div class="bg-dark">
            <span class="text-light">
                Total items: {{getTotalSummary}}
            </span>
            <span> - </span>
            <span class="text-light">
                Filtered items: {{getFilterSummary}}
            </span>
        </div>                                      
    </div>
</template>

<script>
import Column from '../components/Column.vue'

export default {    
    name: 'Table',
    props: {        
        head: {},
        body: {}
    },
    components: {
        Column        
    },
    data() {
        return {
            search: ''                                
        }        
    },
    methods: {
        getStyle(filters, value){
            var style = ''
            var find = false
            for(var index=0; !false && filters && index<filters.length; index++){
                if(value.toString() == filters[index].name){
                    style = filters[index].style
                    find = true
                }
            }            
            return style
        }
    },
    computed: {
        getBody: function(){
            var body = new Array                                         
            body = this.body.filter((bodyItem) => {
                var isMatch = false                                                                         
                for(var index=0; !isMatch && index<this.getHead.length; index++) {                                                                                
                    if(bodyItem[this.getHead[index].name].toString().toLowerCase().match(this.search.toLowerCase())){                                                      
                        isMatch = true
                    }
                }                 
                return isMatch
            })
            body = body.filter((bodyItem) => {                                
                var isEquals = true                
                for(var columnIndex=0; isEquals && columnIndex<this.getActiveHead.length; columnIndex++){                    
                    isEquals = false                                                 
                    for(var filterIndex=0; !isEquals && filterIndex<this.getActiveHead[columnIndex].filters.length; filterIndex++){
                        if(this.getActiveHead[columnIndex].filters[filterIndex].status && bodyItem[this.getActiveHead[columnIndex].name].toString() == this.getActiveHead[columnIndex].filters[filterIndex].name.toString()){
                            isEquals= true                                                   
                        }
                    }
                }
                return isEquals 
            })
            return body                                        
        },
        getTotalSummary: function(){
            return this.body.length
        },
        getFilterSummary: function(){
            return this.getBody.length
        },
        getSummary: function(){
            var summary = new Array
            this.getHead.forEach((headItem, headIndex) => {
                if(headItem.filters){
                    summary.push(new Array)                    
                    headItem.filters.forEach(filterItem => {                        
                        summary[headIndex].push({name: filterItem.name, amount: 0})                        
                    })                   
                }else{
                    summary.push(null)
                }
            })
            this.body.forEach(bodyItem => {
                summary.forEach((summaryItem, summaryIndex) => {
                    var found = false
                    for(var filterIndex=0; summaryItem!=null && !found && filterIndex<summaryItem.length; filterIndex++){
                       
                        if(bodyItem[this.getHead[summaryIndex].name].toString() == summaryItem[filterIndex].name.toString()){                            
                            summaryItem[filterIndex].amount += 1
                            found = true
                        }
                    }
                })
            })
            return summary
        },
        getHead: function(){
            var head = new Array          
            this.head.forEach(headItem => {
                if(headItem['visible']){
                   head.push(headItem);
               }
            })           
           return head           
        },       
        getActiveHead: function(){
            var head = new Array          
            this.head.forEach(headItem => {
                if(headItem['filters'] && headItem['filters'].length>0 && headItem['visible']){
                   head.push(headItem);
               }
            })            
            return head     
        }     
    } 
}
</script>

<style>
.scrollable{
    max-height: 500px;
    min-height: 300px;
    overflow-y: auto;
}
.headfix{
    position:absolute;
    text-align: center;
    display: block;
    
}

</style>


