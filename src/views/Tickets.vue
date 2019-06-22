<template>
    <div>     
        <Table :head="headData" :body="tickestData"></Table>        
    </div>
</template>

<script>
import Table from '../components/Table.vue'

export default {
    name: 'Tickets',
    components: {        
        Table       
    },
    data(){
        return {
            headData: [
                {                   
		            "name": "User Name",		            
                    "visible": true,
                    "id": true,	
                    "filters": {}
	            },
	            {                   
		            "name": "Subject",		            
                    "visible": true,
                    "filters": {}                    	
            	},
	            {                    
		            "name": "Customer Satisfaction",
                    "visible": true,
                    "filters": [
                        {"name": "50%", "status": true},
                        {"name": "80%", "status": true},
                        {"name": "90%", "status": true}
                    ]		                              
	            },
	            {                    
                    "name": "Priority",
                    "visible": true,
                    "filters": [
                        {"name": "Low", "status": true},
                        {"name": "Medium", "status": true},
                        {"name": "Hight", "status": true}
                    ]		                              
	            },
	            {                    
                    "name": "Status",
                    "visible": true,
                    "filters": [
                        {"name": "Pending", "status": true},
                        {"name": "Opened", "status": true},
                        {"name": "Solved", "status": true}
                    ]                		            	
	            }
            ],
            tickestData: [
                {
                    "User Name": "Andres Gomez", 
                    "Subject": "I can´t login to my account",
                    "Customer Satisfaction": "100%", 
                    "Priority": "Hight",
                    "Status": "Solved"
                },
                {
                    "User Name": "Ezequiel Salatino", 
                    "Subject": "I need help!, can't login my playbox account",
                    "Customer Satisfaction": "80%", 
                    "Priority": "Medium",
                    "Status": "Opened"
                },
                {
                    "User Name": "Emiliano Cosenza", 
                    "Subject": "I can´t login to my account",
                    "Customer Satisfaction": "100%", 
                    "Priority": "Low",
                    "Status": "Pending"
                },
                {
                    "User Name": "Luisa Sanches", 
                    "Subject": "I forgot my account password",
                    "Customer Satisfaction": "70%", 
                    "Priority": "Hight",
                    "Status": "Pending"
                },
                {
                    "User Name": "Alejando Marin", 
                    "Subject": "My product platform doesn't work",
                    "Customer Satisfaction": "100%", 
                    "Priority": "Hight",
                    "Status": "Pending"
                },
                {
                    "User Name": "Carlos Aristizabal", 
                    "Subject": "I wish to know other product's feactures",
                    "Customer Satisfaction": "90%", 
                    "Priority": "Low",
                    "Status": "Pending"
                },
                {
                    "User Name": "Nicolas Gonzales",
                    "Subject": "The product platform is too slow",
                    "Customer Satisfaction": "50%", 
                    "Priority": "Medium",
                    "Status": "Pending"
                }
            ]      
        }        
    }
}
</script>

