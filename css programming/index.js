function handleRangeChange(value) {
    console.log(value);
    const valueElement = document.querySelector('#value');
    valueElement.innerHTML = (value + 'px');
    const olList = document.getElementsByTagName('ol');
    console.log(olList);
    for (const ol of olList) {
        ol.style.paddingLeft = (value + 'px');
    }
       
}