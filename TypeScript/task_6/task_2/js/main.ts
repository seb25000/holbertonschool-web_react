// Définir les interfaces pour les employés
interface Teacher {
    type: 'teacher';
    salary: number;
    workTeacherTasks(): void;
}

interface Director {
    type: 'director';
    salary: number;
    workDirectorTasks(): void;
}

// Type pour les employés
type Employee = Teacher | Director;

// Fonction pour créer un employé
function createEmployee(salary: number): Employee {
    if (salary < 500) {
        return {
            type: 'teacher',
            salary,
            workTeacherTasks() {
                console.log('Getting to work');
            }
        };
    } else {
        return {
            type: 'director',
            salary,
            workDirectorTasks() {
                console.log('Getting to director tasks');
            }
        };
    }
}

// Fonction pour vérifier si l'employé est un directeur
function isDirector(employee: Employee): employee is Director {
    return employee.type === 'director';
}

// Fonction pour exécuter le travail en fonction du type d'employé
function executeWork(employee: Employee): void {
    if (isDirector(employee)) {
        employee.workDirectorTasks();
    } else {
        employee.workTeacherTasks();
    }
}

// Exemples d'utilisation
executeWork(createEmployee(200)); // Getting to work
executeWork(createEmployee(1000)); // Getting to director tasks

