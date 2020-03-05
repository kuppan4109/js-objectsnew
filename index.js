const obj = {
id:1,
Fname:'Vijay',
Lname:'Sekar',
role:'UI DEVELOPER',
salary:1000,
experience:3,

getId:function()
  {
    return this.id;
  },
setId: function(id)
  {
this.id=id;
  },
  getFname:function()
  {
    return this.Fname;
  },
setFname: function(Fname)
  {
this.Fname=Fname;
  },
  getLname:function()
  {
    return this.Lname;
  },
setLname: function(Lname)
  {
this.Lname=Lname;
  },
  getRole:function()
  {
    return this.role;
  },
setRole: function(role)
  {
this.role=role;
  },
   getSalary:function()
  {
    return this.salary;
  },
setSalary: function(salary)
  {
this.salary=salary;
  },
   getExperience:function()
  {
    return this.experience;
  },
setExperience: function(experience)
  {
this.experience=experience;
  },
  
};
 let id=obj.getId();
 console.log('ID:',id);
 obj.setId(5);
 id=obj.getId();
 console.log('ID:',id);
let Fname=obj.getFname();
 console.log('Fname:',Fname);
 obj.setFname('Pavan');
 Fname=obj.getFname();
 console.log('Fname:',Fname);
let Lname=obj.getLname();
 console.log('Lname:',Lname);
 obj.setLname('Kumar');
 Lname=obj.getLname();
 console.log('Lname:',Lname);
 let role=obj.getRole();
 console.log('Role:',role);
 obj.setRole('SQL DEVELOPER');
role=obj.getRole();
 console.log('Role:',role);
let salary=obj.getSalary();
 console.log('Salary:',salary);
 obj.setSalary(1500);
salary=obj.getSalary();
 console.log('Salary:',salary);
 let experience=obj.getExperience();
 console.log('Experience:',experience);
 obj.setExperience(4);
experience=obj.getExperience();
 console.log('Experience',experience);
