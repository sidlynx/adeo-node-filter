export const getFilterCountriesByAnimals = (countries, filter) => countries
    .map(country => ({
        ...country,
        people:country.people.map(person=>({
            ...person,
            animals : person.animals.filter(animal => animal.name.toLowerCase().includes(filter.toLowerCase()))
        })).filter(person => person.animals.length > 0)
    })).filter(country => country.people.length > 0);