
  const admin = [
  {
    id: 1,
    name: "Admin 1",
    email: "admin1@example.com",
    password: "123",
  },
  {
    id: 7,
    name: "Admin 2",
    email: "admin2@example.com",
    password: "123",
  }
    
  ]

  const employees = [
    {
      id: 2,
      name: "Ali Khan",
      email: "employee1@example.com",
      password: "123",
      taskStats: {
        newTask: 1,
        completed: 1,
        failed: 0,
        accepted: 2
      },
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Design homepage",
          taskDescription: "Create the layout for the new homepage",
          taskDate: "2024-10-10",
          category: "Design"
        },
        {
          active: true,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Fix navigation bugs",
          taskDescription: "Resolve issues in the navigation menu",
          taskDate: "2024-10-12",
          category: "Development"
        },
        
      ]
    },
    { 
      id: 3,
      name: "Ayesha Siddiqui",
      email: "employee2@example.com",
      password: "123",
      taskStats: {
        newTask: 1,
        completed: 0,
        failed: 0,
        accepted: 2
      },
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Write documentation",
          taskDescription: "Document the login flow",
          taskDate: "2024-10-09",
          category: "Documentation"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Code review",
          taskDescription: "Review pull requests from team",
          taskDate: "2024-10-11",
          category: "Review"
        }
      ]
    },
    {
      id: 4,
      name: "Hamza Iqbal",
      email: "employee3@example.com",
      password: "123",
      taskStats: {
        newTask: 1,
        completed: 2,
        failed: 1,
        accepted: 1
      },
      tasks: [
        {
          active: true,
          newTask: true,
          completed: true,
          failed: false,
          taskTitle: "Update database schema",
          taskDescription: "Add new fields for reporting",
          taskDate: "2024-10-08",
          category: "Database"
        },
        {
          active: false,
          newTask: false, 
          completed: true,
          failed: true,
          taskTitle: "Optimize queries",
          taskDescription: "Improve performance of slow queries",
          taskDate: "2024-10-13",
          category: "Performance"
        }
      ]
    },
    {
      id: 5,
      name: "Fatima Noor",
      email: "employee4@example.com",
      password: "123",
      taskStats: {
        newTask: 1,
        completed: 1,
        failed: 0,
        accepted: 0
      },
      tasks: [
        {
          active: false,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Write documentation",
          taskDescription: "Update the project documentation",
          taskDate: "2024-10-13",
          category: "Documentation"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: true,
          taskTitle: "Set up CI/CD",
          taskDescription: "Implement continuous integration pipeline",
          taskDate: "2024-10-11",
          category: "DevOps"
        }
      ]
    },
    {
      id: 6,
      name: "Bilal Ahmed",
      email: "employee5@example.com",
      password: "123",
      taskStats: {
        newTask: 2,
        completed: 1,
        failed: 0,
        accepted: 2
      },
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Plan sprint",
          taskDescription: "Coordinate with team for next sprint planning",
          taskDate: "2024-10-07",
          category: "Planning"
        },
        {
          active: true,
          newTask: true,
          completed: true,
          failed: false,
          taskTitle: "Backend testing",
          taskDescription: "Run unit tests for the backend API",
          taskDate: "2024-10-12",
          category: "Testing"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Development",
          taskDescription: "Run unit tests for the development",
          taskDate: "2024-6-12",
          category: "Testing"
        }
      ]
    }
  ];

      export const setLocalStorage = ()=>{
          localStorage.setItem('Employees', JSON.stringify(employees))
          localStorage.setItem('Admin', JSON.stringify(admin))
      }

      export const getLocalStorage = () =>{
          const employees = JSON.parse(localStorage.getItem('Employees'))
          const admin = JSON.parse(localStorage.getItem('Admin'))
          

          return {employees,admin}
          
      }
  
    