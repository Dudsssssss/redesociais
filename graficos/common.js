const getCSS = (variavel) => {
    const bodyStyles = getComputedStyle(document.body)
    return bodyStyles.getPropertyValue (variavel)
}
const tickConfig = {
    family: getcss('--font'),
    size: 16,
    color: getcss('--cor-principal')
}
export {getcss, tickConfig}