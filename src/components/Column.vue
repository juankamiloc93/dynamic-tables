<template>
    <div class="btn-group">
        <span v-if="!filters" class="text-light">{{name}}</span>
        <button v-if="filters" class="btn btn-outline-light dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span>{{name}} </span>
        </button>
         <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">                                                              
            <li v-for="(filterItem, indexFilter) of filters" :key="indexFilter" class="dropdown-item ">                
                <input type="checkbox" v-model="filters[indexFilter].status">
                <span>{{filterItem['name']}}</span>
                <button class="btn text-danger" @click="deleteFilter(indexFilter)">X</button>               
                <div class="progress" role="progressbar" aria-valuenow="100" aria-voluemin="0" aria-valuemax="100"
                    :style="{'width': summary[indexFilter].amount/total*100 + '%' }">
                    {{summary[indexFilter].amount}}                                      
                </div>
                <div class="dropdown-divider"></div>                                 
            </li>                          
            <li class="dropdown-item">
                <div class="btn-group">
                    <input type="text" v-model="newFilter">
                    <button class="btn btn-success" @click="addFilter()">+</button>
                </div>                                    
            </li>               
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Column',
    props: {
        name: '',
        filters: {},
        summary: {},
        total: 0                    
    },
    data(){
        return {
            newFilter: '',           
        }
    },
    methods: {
        addFilter(){          
            if(this.newFilter != ''){                
                this.filters.push({name: this.newFilter, status: true})                
                this.newFilter = ''
            }
        },
        deleteFilter(filtersIndex){
            this.filters.splice(filtersIndex, 1)
        }        
    }
}
</script>
<style>
    .progress{
        width: 200px;
    }
</style>


