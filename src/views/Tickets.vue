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
                    "visible": true		
	            },
	            {                   
		            "name": "Subject",		            
		            "visible": true				
            	},
	            {                    
		            "name": "Customer Satisfaction",		           
		            "low-attribute": "50%",
		            "medium-attribute": "80%",
                    "hight-attribute": "90",
                    "visible": true	
	            },
	            {                    
		            "name": "Priority",		            
		            "low-attribute": "Low",
		            "medium-attribute": "Medium",
                    "hight-attribute": "Hight",
                    "visible": true	
	            },
	            {                    
                    "name": "Status",                    
                    "low-attribute": "Pending",
		            "medium-attribute": "Opened",
                    "hight-attribute": "Solved",
                    "visible": true		            	
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
                    "Status": "Open"
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

