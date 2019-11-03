
function filterByProp(prop,value,element){
    return element[prop] === value;
}
function splitParam(criteria) {
    return criteria.split('-')
}
function formatEmployee(el,i) {
    return `${i}. ${el.first_name} ${el.last_name} - ${el.mail}`;
}
function solve(data,criteria) {
    return criteria === 'all'
    ? JSON.parse(data)
    .map(formatEmployee)
    .join('\n')
    : JSON.parse(data)
    .filter(filterByProp.bind(undefined,...splitParam(criteria)))
    .map(formatEmployee)
    .join('\n')
}
