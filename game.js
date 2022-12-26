const gameBoard = (() => {
    const first = (a) => a;
    const second = (a) => a;
    const third = (a) => a;
    const fourth = (a) => a;
    const fifth = (a) => a;
    const sixth = (a) => a;
    const seventh = (a) => a;
    const eighth = (a) => a;
    const ninth = (a) => a;
    return { first, second, third, fourth, fifth, sixth, seventh, eighth, ninth};
})();

const Player = (marker) => {
    let marker = () => marker;
    return {marker}
};