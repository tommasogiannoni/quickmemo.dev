/**
 * Used to automaticcalli change height of the textarea when inserting new text
 * @param {element} 
 */
export const updateTextareaHeight = (element) => {
    element.style.height = 'auto'; // Resetting the height to auto to calculate the scrollHeight
    element.style.height = `${element.scrollHeight}px`; // Setting the height to the scrollHeight
};
