<template>
    <div>
        <!--Search-->
        <div class="btn-group">
            <!--Serach box-->
            <input type="text" class="form-control" v-model="search">
            <!--Chooser filter-->           
            <div class="dropdown">                
                <button class="btn btn-outline-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{filterSelect}}
                </button>                
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" @click="restoreFilterSelect">
                        <span>All</span>
                    </a>
                    <a v-for="(item, index) of head" :key="index" class="dropdown-item" @click="changeFilterSelect(index)">
                        <input type="checkbox" value="true" class="form-check-input" v-model="item['visible']">
                        <span>{{item['name']}}</span>
                    </a>                    
                </div>
            </div>        
        </div>
        <hr>
        <!--Table-->
        <table class="table table-hover table-bordered">
            <!--Columns-->
            <thead>
                <tr>
                    <th v-for="(item, index) of getHead" :key="index">                        
                         <div class="dropdown">
                            <button class="btn btn-outline-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span>{{item['name']}} </span>
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">                                                              
                                <a v-if="item['low-attribute']" class="dropdown-item" @click="filterColumn(item['name'], item['low-attribute'])">
                                    <span>{{item['low-attribute']}}</span>                                  
                                </a>
                                <a v-if="item['medium-attribute']" class="dropdown-item" @click="filterColumn(item['name'], item['medium-attribute'])">
                                    <span>{{item['medium-attribute']}}</span>
                                </a>
                                <a v-if="item['hight-attribute']" class="dropdown-item" @click="filterColumn(item['name'], item['hight-attribute'])">
                                    <span>{{item['hight-attribute']}}</span>
                                </a>
                                <a v-for="(filtersItem, filtersIndex) of filters[index]" :key="filtersIndex" class="dropdown-item" @click="filterColumn(item['name'], filtersItem)">
                                    <span>{{filtersItem}}</span><button class="btn" @click="dropFilter(index, filtersIndex)">X</button>
                                </a>
                                <a class="dropdown-item">
                                    <div class="btn-group">
                                        <input type="text" v-model="newFilter">
                                        <button class="btn btn-success" @click="addFilter(index)">+</button>
                                    </div>                                    
                                </a>               
                            </div>
                        </div>                         
                    </th>                   
                </tr>                
            </thead>
            <!--body-->
            <tbody>
                <tr v-for="(bodyItem, bodyIndex) of filterSearchBody" :key="bodyIndex">                    
                    <td v-for="(headItem, headIndex)  of getHead" :key="headIndex">
                        <span v-if="headItem['id']">
                            <input type="checkbox" @click="addIdFilter(headIndex, headItem['name'], bodyItem)">
                        </span>
                        <span>{{bodyItem[headItem['name']]}}</span>
                    </td>                                     
                </tr>               
            </tbody>
        </table>                               
    </div>
</template>

<script>
export default {    
    name: 'Table',
    props: {        
        head: {},
        body: {}
    }, 
    data() {
        return {
            search: '',
            filterSelect: 'Chose filter',
            newFilter: '',
            filters: [],            
        }        
    },
    methods: {
        changeFilterSelect(index){
            this.filterSelect = this.head[index].name
                    
        },
        restoreFilterSelect(){
            this.filterSelect = 'Chose filter'
        },
        filterColumn(column, serch){
            this.filterSelect = column
            this.search = serch
        },
        addFilter(columnIndex){
            if(this.newFilter != ''){
                if(!this.filters[columnIndex]){
                    this.filters[columnIndex] = new Array
                }
                this.filters[columnIndex].push(this.newFilter)
                this.newFilter = ''
            }
        },
        addIdFilter(columnIndex, headName, bodyItem){
            if(bodyItem){
                this.newFilter = bodyItem[headName]
                this.addFilter(columnIndex);
            }
        },
        dropFilter(columnIndex, filtersIndex){
            this.filters[columnIndex].splice(filtersIndex, 1)
        }
    },
    computed: {
        filterSearchBody: function(){
            if(this.filterSelect=='Chose filter'){                               
                return this.body.filter((bodyItem) => {
                    var isMatch = false                                                                         
                    for(var index=0; !isMatch && index<this.getHead.length; index++) {                                                                                
                        if(bodyItem[this.getHead[index].name].toString().toLowerCase().match(this.search.toLowerCase())){                                                      
                           isMatch = true
                        }
                    }                 
                    return isMatch
                })
            }else{
                return this.body.filter((bodyItem) => {
                    return bodyItem[this.filterSelect].toString().toLowerCase().match(this.search.toLowerCase())
                })
            }          
        },
        getHead: function(){
            var body = new Array;           
            this.head.forEach(item => {
                if(item['visible']){
                   body.push(item);
               }
            })           
           return body
        },
        getHeadOriginal: function(){
            return this.head
        }              
    }     
}
</script>

