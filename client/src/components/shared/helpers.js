export const Capitalize = function capitalize(string) {
    const capitalizeWords = string
        .split(' ')
        .map(word => word[0].toUpperCase() + word.substring(1))
        .join(' ');
    return capitalizeWords;
}