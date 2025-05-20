export const getCountriesWithItemsCount = (countries) => countries
    .map(country => ({
        ...country,
        name : `${country.name} [${country.people.length}]`,
        people: country.people.map(person => ({
            ...person,
            name : `${person.name} [${person.animals.length}]`,
        }))
    }));