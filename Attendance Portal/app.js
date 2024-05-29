var userData = [
    // {
    //   name: "Abdullah",
    //   fatherName: "Mushtaq",
    //   age: 37,
    //   rollNo: 4654,
    // },
    // {
    //   name: "Bilal",
    //   fatherName: "abc",
    //   age: 34,
    //   rollNo: 4565,
    // },
    // {
    //   name: "Junaid",
    //   fatherName: "xyz",
    //   age: 87,
    //   rollNo: 768,
    // },
    {
        name: 'John Doe',
        fatherName: 'Richard Doe',
        age: 16,
        rollNo: '101',
        class: '10th Grade',
      },
      {
        name: 'Jane Smith',
        fatherName: 'Robert Smith',
        age: 15,
        rollNo: '102',
        class: '9th Grade',
      },
      {
        name: 'Michael Johnson',
        fatherName: 'James Johnson',
        age: 17,
        rollNo: '103',
        class: '11th Grade',
      },
      {
        name: 'Emily Davis',
        fatherName: 'William Davis',
        age: 14,
        rollNo: '104',
        class: '8th Grade',
      },
      {
        name: 'Jessica Brown',
        fatherName: 'Charles Brown',
        age: 16,
        rollNo: '105',
        class: '10th Grade',
      },
      {
        name: 'Daniel Wilson',
        fatherName: 'Thomas Wilson',
        age: 15,
        rollNo: '106',
        class: '9th Grade',
      },
      {
        name: 'Sarah Taylor',
        fatherName: 'Andrew Taylor',
        age: 17,
        rollNo: '107',
        class: '11th Grade',
      },
      {
        name: 'David Lee',
        fatherName: 'George Lee',
        age: 14,
        rollNo: '108',
        class: '8th Grade',
      },
      {
        name: 'Laura Martin',
        fatherName: 'Paul Martin',
        age: 16,
        rollNo: '109',
        class: '10th Grade',
      },
      {
        name: 'Kevin White',
        fatherName: 'Mark White',
        age: 15,
        rollNo: '110',
        class: '9th Grade',
      },
      {
        name: 'Anna Harris',
        fatherName: 'Steven Harris',
        age: 17,
        rollNo: '111',
        class: '11th Grade',
      },
      {
        name: 'Brian Clark',
        fatherName: 'Edward Clark',
        age: 14,
        rollNo: '112',
        class: '8th Grade',
      },
      {
        name: 'Sophia Lewis',
        fatherName: 'Henry Lewis',
        age: 16,
        rollNo: '113',
        class: '10th Grade',
      },
      {
        name: 'Christopher Walker',
        fatherName: 'Frank Walker',
        age: 15,
        rollNo: '114',
        class: '9th Grade',
      },
      {
        name: 'Grace Hall',
        fatherName: 'Peter Hall',
        age: 17,
        rollNo: '115',
        class: '11th Grade',
      },
      {
        name: 'Justin Allen',
        fatherName: 'Patrick Allen',
        age: 14,
        rollNo: '116',
        class: '8th Grade',
      },
      {
        name: 'Olivia Young',
        fatherName: 'Bruce Young',
        age: 16,
        rollNo: '117',
        class: '10th Grade',
      },
      {
        name: 'Nathan Hernandez',
        fatherName: 'Larry Hernandez',
        age: 15,
        rollNo: '118',
        class: '9th Grade',
      },
      {
        name: 'Mia King',
        fatherName: 'Joe King',
        age: 17,
        rollNo: '119',
        class: '11th Grade',
      },
      {
        name: 'Ethan Wright',
        fatherName: 'Stanley Wright',
        age: 14,
        rollNo: '120',
        class: '8th Grade',
      },
      {
        name: 'Ava Lopez',
        fatherName: 'Timothy Lopez',
        age: 16,
        rollNo: '121',
        class: '10th Grade',
      },
      {
        name: 'Jacob Scott',
        fatherName: 'Chris Scott',
        age: 15,
        rollNo: '122',
        class: '9th Grade',
      },
      {
        name: 'Samantha Green',
        fatherName: 'Shawn Green',
        age: 17,
        rollNo: '123',
        class: '11th Grade',
      },
      {
        name: 'Andrew Adams',
        fatherName: 'Jason Adams',
        age: 14,
        rollNo: '124',
        class: '8th Grade',
      },
      {
        name: 'Ella Baker',
        fatherName: 'Ryan Baker',
        age: 16,
        rollNo: '125',
        class: '10th Grade',
      },
  ];
  
  var userTable = document.getElementById("userTable");
  var userName = document.getElementById("name");
  var fatherName = document.getElementById("fatherName");
  var rollno = document.getElementById("rollno");
  var age = document.getElementById("age");
  var total_students = document.getElementById("total_students");
  var Present_students = document.getElementById("Present_students");
  var absent_students = document.getElementById("absent_students"); 
  var allStudents = 0;
  var allPresentsplus = 0;
  var allPresentsmintues = 0;
  var allabsentsplus = 0;
  var allabsentsmintues = 0;
 var allLeavesplus = 0;
 var allLeavesmintues = 0;
 
 function addData() {
    userTable.innerHTML = "";
    for (var i = 0; i < userData.length; i++) {
      userTable.innerHTML +=`
   
      <tr> 
              <td class= "tdd">${i + 1}</td>
              <td class= "tdd">${userData[i].name}</td>
             <td class= "tdd">${userData[i].fatherName}</td> 
              <td class= "tdd">${userData[i].rollNo}</td>
              <td class= "tdd">${userData[i].age}</td>
              <td class= "tdd" id= "td1" onclick="present(this)"><i class="fa-regular fa-square-check"></i></td>
              <td class= "tdd" id= "td2" onclick="absent(this)"><i class="fa-regular fa-square-check"></i></td>
              <td class= "tdd" id= "td3" onclick="leave(this)"><i class="fa-regular fa-square-check"></i></td>
          </tr>
          `
          allStudents++;
          total_students.innerText = allStudents;
        }
        
      }
      addData();
      function addUser() {
        var obj = {
      name: userName.value,
      fatherName: fatherName.value,
      rollNo: rollno.value,
      age: age.value,
    };
    
    userData.push(obj);
    console.log(userData);
    addData();
  }  
  function disableOtherButtons(excludeButtonId) {
    const buttons = document.querySelectorAll('td');
    buttons.forEach(td => {
      if (td.id !== excludeButtonId) {
        td.disabled = true;
      }
    });
  }
  function enableAllButtons() {
    const buttons = document.querySelectorAll('td');
    buttons.forEach(td => {
      td.disabled = false;
    });
  }

  function present(element) {
    disableOtherButtons('td1');
    if (element.firstElementChild.className === "fa-regular fa-square-check") {
      element.innerHTML = '<i class="fa-solid fa-square-check"></i>';
      allPresentsplus++;
      // present_id.style.backgroundColor = "green"; 
      Present_students.innerText =  allPresentsplus;
      }

       else{        
        element.innerHTML = '<i class="fa-regular fa-square-check"></i>';
        allPresentsmintues = allPresentsplus;      
        allPresentsmintues--;
        Present_students.innerText =  allPresentsmintues; 
        // present_id.style.backgroundColor = "black";
        
        }
      
      }
      function absent(element) {
        disableOtherButtons('td2');
        if (element.firstElementChild.className === "fa-regular fa-square-check") {
            element.innerHTML = '<i class="fa-solid fa-square-check"></i>';
            allabsentsplus++;

            absent_students.innerText = allabsentsplus;
          } else {
            element.innerHTML = '<i class="fa-regular fa-square-check"></i>';
            allabsentsmintues = allabsentsplus;
            allabsentsmintues--;          
            absent_students.innerText = allabsentsmintues;
            
        } 
        }
        function leave(element) {
          disableOtherButtons('td3');   
    if (element.firstElementChild.className === "fa-regular fa-square-check") {
      element.innerHTML = '<i class="fa-solid fa-square-check"></i>';
      allLeavesplus++;
      leave_students.innerText = allLeavesplus;
    } else {
      element.innerHTML = '<i class="fa-regular fa-square-check"></i>';
      allLeavesmintues = allLeavesplus;
      allLeavesmintues--;
      leave_students.innerText = allLeavesmintues;
    }
      
  }