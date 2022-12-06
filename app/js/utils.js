export const media = condition => (window.matchMedia(condition).matches);
export const position = (item) => {
    const box = item.getBoundingClientRect();
    return Math.round(box.top + pageYOffset);
};