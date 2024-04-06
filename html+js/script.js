function updateWorkshops() {
    let workshopDropdown = document.getElementById("workshop");
    workshopDropdown.innerHTML = "";
    
    let city = document.getElementById("city").value;
    let workshops = [];
    if (city === "city1") {
      workshops = ["Цех 1", "Цех 2"];
    } else if (city === "city2") {
      workshops = ["Цех 3", "Цех 4"];
    } else if (city === "city3") {
      workshops = ["Цех 5", "Цех 6"];
    }
    
    workshops.forEach(function(workshop) {
      let option = document.createElement("option");
      option.text = workshop;
      option.value = workshop.toLowerCase().replace(/\s+/g, '');
      workshopDropdown.add(option);
    });
    
    updateEmployees();
  }
  
  function updateEmployees() {
    let employeeDropdown = document.getElementById("employee");
    employeeDropdown.innerHTML = "";
     
    let workshop = document.getElementById("workshop").value;
    let employees = [];
    if (workshop === "цех1") { // Для Москвы и Цех 1
       employees = ["Сотрудник 1", "Сотрудник 2"];
    } else if (workshop === "цех2") { // Для Санкт-Петербурга и Цех 2
       employees = ["Сотрудник 3", "Сотрудник 4"];
    } else if (workshop === "цех3") { // Для Екатеринбурга и Цех 3
       employees = ["Сотрудник 5", "Сотрудник 6"];
    } else if (workshop === "цех4") { // Для Санкт-Петербурга и Цех 4
        employees = ["Сотрудник 7", "Сотрудник 8"];
    } else if (workshop === "цех5") { // Для Екатеринбурга и Цех 3
        employees = ["Сотрудник 9", "Сотрудник 10"];
    } else if (workshop === "цех6") { // Для Екатеринбурга и Цех 3
        employees = ["Сотрудник 11", "Сотрудник 12"];
    }
     
    employees.forEach(function(employee) {
       let option = document.createElement("option");
       option.text = employee;
       option.value = employee.toLowerCase().replace(/\s+/g, '');
       employeeDropdown.add(option);
    });
   }
   
   
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let formData = {
      city: document.getElementById("city").value,
      workshop: document.getElementById("workshop").value,
      employee: document.getElementById("employee").value,
      team: document.getElementById("team").value,
      shift: document.getElementById("shift").value
    };
    document.cookie = "formData=" + JSON.stringify(formData);
    alert("Данные сохранены в Cookie!");
  });