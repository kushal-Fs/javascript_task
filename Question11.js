var Employee =
        {
            company: 'xyz'
        }
        var Emp1 = Object.create(Employee);
        delete Emp1.company
         Console.log(Emp1.company);   
         
   //output
   //Uncaught ReferenceError: Console is not defined at <anonymous>:7:10
