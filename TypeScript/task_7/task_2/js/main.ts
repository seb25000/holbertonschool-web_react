// Définir le type littéral de chaîne Subjects
type Subjects = 'Math' | 'History';

// Fonction teachClass
function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else if (todayClass === 'History') {
        return 'Teaching History';
    } else {
        throw new Error('Invalid subject');
    }
}

// Exemples d'utilisation
console.log(teachClass('Math')); // Affiche: Teaching Math
console.log(teachClass('History')); // Affiche: Teaching History

