function handleRangeChange(value) {
    const valueElement = document.querySelector('#value');
    valueElement.innerHTML = (value + 'px');
    const olList = document.getElementsByTagName('ol');
    for (const ol of olList) {
        ol.style.paddingLeft = (value + 'px');
    }
}