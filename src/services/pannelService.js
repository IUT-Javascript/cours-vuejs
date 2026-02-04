/**
 * Récupère la liste des panneaux à afficher
 * @returns {Array} - Tableau d'objets panneaux
 * Note: Pour l'instant, données statiques (stub). Peut être remplacé par un appel API.
 */
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