const container = document.getElementById('container');
const button = document.getElementById('button');

button.addEventListener('click', () => {
    container.innerHTML = '';
    let sizeInput = prompt("Enter pixel count less than 100: ");
    for (let i = 0; i < sizeInput ** 2; i++) {
        container.innerHTML += '<div class="gridItem" style="width: 100%; height: 25px;"></div>';
    }
    container.style.display = 'grid';
    container.style.width = '100%';
    container.style.marginTop = '2em';
    container.style.gridTemplateColumns = `repeat(${sizeInput}, 1fr)`;

    const gridItem = document.querySelectorAll('.gridItem');
    gridItem.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'lightgrey';
        });
    })
});

