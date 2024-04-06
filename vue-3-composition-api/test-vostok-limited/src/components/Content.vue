<template>
  <div>
     <form @submit.prevent="submitForm">
      <label for="city">Город:</label>
       <select id="city" v-model="selectedCity" @change="updateWorkshops">
         <option v-for="city in cities" :key="city.value" :value="city.value">{{ city.text }}</option>
       </select><br>
       
       <label for="workshop">Цех:</label>
       <select id="workshop" v-model="selectedWorkshop" @change="updateEmployees">
         <option v-for="workshop in workshops" :key="workshop.value" :value="workshop.value">{{ workshop.text }}</option>
       </select><br>
       
       <label for="employee">Сотрудник:</label>
       <select id="employee" v-model="selectedEmployee">
         <option v-for="employee in employees" :key="employee.value" :value="employee.value">{{ employee.text }}</option>
       </select><br>
       
       <label for="shift">Смена:</label>
       <select id="shift" v-model="selectedShift">
         <option v-for="shift in shifts" :key="shift.value" :value="shift.value">{{ shift.text }}</option>
       </select><br>
       
       <label for="team">Бригада:</label>
       <select id="team" v-model="selectedTeam">
         <option v-for="team in teams" :key="team.value" :value="team.value">{{ team.text }}</option>
       </select><br>
       
       <input type="submit" value="Отправить">
     </form>
  </div>
 </template>
 
 <script>
 import { ref, computed } from 'vue';
 
 export default {
  setup() {
     const selectedCity = ref('city1');
     const selectedWorkshop = ref('');
     const selectedEmployee = ref('');
     const selectedShift = ref('shift1');
     const selectedTeam = ref('team1');
     const workshops = ref([]);
     const employees = ref([]);

     const shifts = ref([
      { text: 'Смена 1', value: 'shift1' },
      { text: 'Смена 2', value: 'shift2' },
      { text: 'Смена 3', value: 'shift3' }
      ]);

      const teams = ref([
      { text: 'Бригада 1', value: 'team1' },
      { text: 'Бригада 2', value: 'team2' },
      { text: 'Бригада 3', value: 'team3' }
      ]);

      const cities = ref([
      { text: 'Москва', value: 'city1' },
      { text: 'Санкт-Петербург', value: 'city2' },
      { text: 'Екатеринбург', value: 'city3' }
      ]);

 
     const updateWorkshops = () => {
       workshops.value = [];
       if (selectedCity.value === 'city1') {
         workshops.value = [{ text: 'Цех 1', value: 'цех1' }, { text: 'Цех 2', value: 'цех2' }];
       } else if (selectedCity.value === 'city2') {
         workshops.value = [{ text: 'Цех 3', value: 'цех3' }, { text: 'Цех 4', value: 'цех4' }];
       } else if (selectedCity.value === 'city3') {
         workshops.value = [{ text: 'Цех 5', value: 'цех5' }, { text: 'Цех 6', value: 'цех6' }];
       }
     };
 
     const updateEmployees = () => {
       employees.value = [];
       if (selectedWorkshop.value === 'цех1') {
         employees.value = [{ text: 'Сотрудник 1', value: 'сотрудник1' }, { text: 'Сотрудник 2', value: 'сотрудник2' }];
       } else if (selectedWorkshop.value === 'цех2') {
         employees.value = [{ text: 'Сотрудник 3', value: 'сотрудник3' }, { text: 'Сотрудник 4', value: 'сотрудник4' }];
       } else if (selectedWorkshop.value === 'цех3') {
         employees.value = [{ text: 'Сотрудник 5', value: 'сотрудник5' }, { text: 'Сотрудник 6', value: 'сотрудник6' }];
       } else if (selectedWorkshop.value === 'цех4') {
         employees.value = [{ text: 'Сотрудник 7', value: 'сотрудник7' }, { text: 'Сотрудник 8', value: 'сотрудник8' }];
       } else if (selectedWorkshop.value === 'цех5') {
         employees.value = [{ text: 'Сотрудник 9', value: 'сотрудник9' }, { text: 'Сотрудник 10', value: 'сотрудник10' }];
       } else if (selectedWorkshop.value === 'цех6') {
         employees.value = [{ text: 'Сотрудник 11', value: 'сотрудник11' }, { text: 'Сотрудник 12', value: 'сотрудник12' }];
       }
     };
 
     const submitForm = () => {
       const formData = {
         city: selectedCity.value,
         workshop: selectedWorkshop.value,
         employee: selectedEmployee.value,
         team: selectedTeam.value,
        shift: selectedShift.value
       };
       document.cookie = "formData=" + JSON.stringify(formData);
       alert("Данные сохранены в Cookie!");
     };
 
     return {
       selectedCity,
       selectedWorkshop,
       selectedEmployee,
       selectedShift,
       selectedTeam,
       workshops,
       employees,
       shifts,
       teams,
       cities,
       updateWorkshops,
       updateEmployees,
       submitForm
     };
  }
 };
 </script>
 
 
<style scoped>
  form {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  label {
    font-weight: bold;
    margin-bottom: 5px;
    z-index: 5;
  }
  
  select {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  input[type="submit"] {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  input[type="submit"]:hover {
    background-color: #45a049;
  }
</style>