// Lorsqu'une méthode retourne une liste définie d'éléments on l'appel un service "stub" (factice)
// Ne pas confondre avec un service "mock" qui est utilisé pour les tests unitaires et qui va simuler des comportements plus complexes
export function getPannelItems() {
    return [
        {
            id: 1,
            title: 'Vue 3',
            description: 'Vue 3 is the latest version of the Vue.js framework.',
            image: '',
            isActive: true,
        },
        {
            id: 2,
            title: 'Vue Router',
            description: 'Vue Router is the official router for Vue.js.',
            image: '',
            isActive: false,
        }
    ];
}

// Exemple d'un service qui récupère des données depuis une API externe
// Ce service est asynchrone et utilise fetch pour obtenir les données depuis une URL
export async function fetchPannelItems() {
    const response = await fetch('https://api.example.com/pannel-items');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }   
    const data = await response.json();
    return data;
}