<template>
    <div>
        <Table :head="headData" :body="clientsData"></Table>
    </div>
</template>

<script>
import Table from '../components/Table.vue'

export default {
    name: 'Clients',
    components: {
        Table
    },
    data(){
        return {
            headData: [
	            {
		            "name": "Name",
					"visible": true,
					"id": false,
					"filters": [

					]
	            },
	            {
		            "name": "Gender",
					"visible": true,
					"filters": [
						{"name": "Female", "status": true},
						{"name": "Male", "status": true}
					]		            
	            },
	            {
		            "name": "Age",
		            "visible": true
	            },	
	            {
		            "name": "Country",
					"visible": true,
					"filters": [
						{"name": "Colombia", "status": true, "style": "alert alert-warning"},
						{"name": "USA", "status": true},
						{"name": "EU", "status": true}
					]		            
	            },
	            {
		            "name": "Degree",
					"visible": true,
					"filters": [
						{"name": "Tecnic", "status": true, "style": "alert alert-primary"},
						{"name": "Professional", "status": true, "style": "alert alert-success"},
						{"name": "Doctor", "status": true, "style": "alert alert-dark"}
					]		           
	            },
	            {
		            "name": "Email",
		            "visible": true
	            },
	            {
		            "name": "Rate",
		            "visible": true
	            }
            ],
            clientsData: [
	            {
		            "Name": "Carlos",
		            "Gender": "Male",
		            "Age": 30,
		            "Country": "Colombia",
		            "Degree": "Doctor",
		            "Email": "carlos@email.com",
		            "Rate": 100
	            },
	            {
		            "Name": "Laura",
		            "Gender": "Female",
		            "Age": 34,
		            "Country": "USA",
		            "Degree": "Professional",
		            "Email": "laura@email.com",
		            "Rate": 120
	            },
	            {
		            "Name": "Juan",
		            "Gender": "Male",
		            "Age": 40,
		            "Country": "Colombia",
		            "Degree": "Doctor",
		            "Email": "juan@email.com",
		            "Rate": 90
	            },
	            {
		            "Name": "Daniel",
		            "Gender": "Male",
		            "Age": 24,
		            "Country": "Colombia",
		            "Degree": "Professional",
		            "Email": "daniel@email.com",
		            "Rate": 50
	            },
	            {
		            "Name": "Diana",
		            "Gender": "Female",
		            "Age": 31,
		            "Country": "Colombia",
		            "Degree": "Tecnic",
		            "Email": "diana@email.com",
		            "Rate": 140
	            },
	            {
		            "Name": "Luisa",
		            "Gender": "Female",
		            "Age": 29,
		            "Country": "EU",
		            "Degree": "Doctor",
		            "Email": "luisa@email.com",
		            "Rate": 110
	            },
	            {
		            "Name": "Marcela",
		            "Gender": "Female",
		            "Age": 27,
		            "Country": "Colombia",
		            "Degree": "Professional",
		            "Email": "marcela@email.com",
		            "Rate": 85
	            },
	            {
		            "Name": "Camilo",
		            "Gender": "Male",
		            "Age": 25,
		            "Country": "Colombia",
		            "Degree": "Tecnic",
		            "Email": "camilo@email.com",
		            "Rate": 134
	            },
	            {
		            "Name": "Jorge",
		            "Gender": "Male",
		            "Age": 31,
		            "Country": "Colombia",
		            "Degree": "Professional",
		            "Email": "jorge@email.com",
	            	"Rate": 145
	            },
	            {
		            "Name": "Samuel",
		            "Gender": "Male",
		            "Age": 24,
		            "Country": "Colombia",
		            "Degree": "Tecnic",
		            "Email": "samuel@email.com",
		            "Rate": 190
	            },
	            {
		            "Name": "Luis",
		            "Gender": "Male",
		            "Age": 21,
		            "Country": "Colombia",
		            "Degree": "Tecnic",
		            "Email": "luis@email.com",
		            "Rate": 170
	            },
	            {
		            "Name": "Mateo",
		            "Gender": "Male",
		            "Age": 19,
		            "Country": "USA",
		            "Degree": "Tecnic",
		            "Email": "mateo@email.com",
		            "Rate": 101
	            },
	            {
		            "Name": "Felipe",
		            "Gender": "Male",
		            "Age": 30,
		            "Country": "Colombia",
		            "Degree": "Professional",
		            "Email": "felipe@email.com",
		            "Rate": 98
	            },
	            {
		            "Name": "Diego",
		            "Gender": "Male",
		            "Age": 39,
		            "Country": "EU",
		            "Degree": "Doctor",
		            "Email": "diego@email.com",
		            "Rate": 25
	            },
	            {
		            "Name": "Cindy",
		            "Gender": "Female",
		            "Age": 22,
		            "Country": "Colombia",
		            "Degree": "Professional",
		            "Email": "cindy@email.com",
		            "Rate": 45
	            },
	            {
		            "Name": "Miguel",
		            "Gender": "Female",
		            "Age": 29,
		            "Country": "Colombia",
		            "Degree": "Doctor",
		            "Email": "miguel@email.com",
		            "Rate": 79
	            },
	            {
		            "Name": "Sofia",
		            "Gender": "Female",
		            "Age": 41,
		            "Country": "Colombia",
		            "Degree": "Professional",
		            "Email": "sofia@email.com",
		            "Rate": 89
	            },
	            {
		            "Name": "Tatiana",
		            "Gender": "Female",
		            "Age": 18,
		            "Country": "USA",
		            "Degree": "Tecnic",
		            "Email": "tatiana@email.com",
		            "Rate": 145
	            },
	            {
		            "Name": "Lucas",
		            "Gender": "Male",
		            "Age": 24,
		            "Country": "Colombia",
		            "Degree": "Professional",
		            "Email": "lucas@email.com",
		            "Rate": 201
	            },
	            {
		            "Name": "Jaime",
		            "Gender": "Male",
		            "Age": 19,
		            "Country": "Colombia",
		            "Degree": "Tecnic",
		            "Email": "jaime@email.com",
		            "Rate": 129
	            },
	            {
		            "Name": "Javier",
		            "Gender": "Male",
		            "Age": 57,
		            "Country": "EU",
		            "Degree": "Doctor",
		            "Email": "javier@email.com",
		            "Rate": 178
	            }
            ]
        }
    }
}
</script>



