const studentObject = [

    { name: 'lavanya', age: 16, gender: 'female', fathername: 'raja', dob:1991, address: 'thanjavur', phonenumber: 7876675555, standard: 12 },

    { name: 'kumar', age: 12, gender: 'male', fathername: 'loganathan', dob:1992, address: 'chennai', phonenumber: 8037936733, standard: 10 },

    { name: 'ramya', age: 14, gender: 'female', fathername: 'ganesh', dob:1993, address: 'trichy', phonenumber: 4568235860, standard: 8 },

    { name: 'loki', age: 16, gender: 'male', fathername: 'moorthi', dob:1998, address: 'ond', phonenumber: 7628752968, standard: 9 },

    { name: 'priya', age: 13, gender: 'female', fathername: 'karthi', dob:2000, address: 'hosur', phonenumber: 8787787878, standard: 11 },

    { name: 'mohan', age: 17, gender: 'male', fathername: 'raja', dob:2001, address: 'bangalure', phonenumber: 7648735684, standard: 12 },

    { name: 'gayathri', age: 18, gender: 'female', fathername: 'raja', dob:2002, address: 'namakkal', phonenumber: 8947967232, standard: 9 },

    { name: 'mathi', age: 12, gender: 'male', fathername: 'raja', dob:2000, address: 'madurai', phonenumber: 3465768798, standard: 12 },

    { name: 'revathi', age: 15, gender: 'female', fathername: 'raja', dob:1999, address: 'tirunelveli', phonenumber: 9857353219, standard: 10 },

    { name: 'bharath', age: 14, gender: 'male', fathername: 'raja', dob:1997, address: 'tuticorin', phonenumber: 6723437286, standard: 11 },
  
]

let studentCopy = Object.assign(studentObject)


console.log(studentObject)


function CheckYearStudent(studentObj,year){
    
    var ans=[];

    studentObj.forEach(stuData =>{

     if(stuData.dob < year){
        ans.push(stuData);
     }

    });

    return ans;
  }


console.log(CheckYearStudent(studentCopy,1999))
