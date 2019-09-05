document.addEventListener('DOMContentLoaded', (event) => {
    const divTable = document.querySelector('.divTable')
    const colorPalette = document.querySelector('.colorPalette')
    const colorIndicator = document.querySelector('.colorIndicator')


    colorPalette.addEventListener('click', (event) => {
        let paintbrush = event.target.style.backgroundColor;
        console.log('colorIndicator: ', colorIndicator);
        console.log('Paintbrush: ', paintbrush);
        colorIndicator.style.backgroundColor = paintbrush;
    })

    divTable.addEventListener('click', (onClick) => {
        onClick.target.style.backgroundColor = colorIndicator.style.backgroundColor;
    })

});

