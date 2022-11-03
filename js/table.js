const filter = document.getElementById('filter');
setTable(data);

filter.addEventListener('keyup', filterItems);

function setTable(arr) {
    document.querySelector('#requests-table tbody').innerHTML = '';
    arr.forEach(function (item) {
        document.querySelector('#requests-table tbody').insertAdjacentHTML('beforeend', `
            <tr class="stroke">
                <td>${item.question}</td>
                <td>${item.answer}</td>
            </tr>
        `);
    });
}

function filterItems(e) {
    // debugger
    var searchedText = e.target.value.toLowerCase();
    var items = [...document.querySelectorAll('tr.stroke')];
    items.forEach(function(item){
        // var itemText = item.firstChild.textContent.toLowerCase();
        var itemText = item.innerText.split('\t').join(', ');
        if (itemText.indexOf(searchedText) != -1) {
            item.style.display= 'table-row';
        } else {
            item.style.display = 'none';
        }
    }); 
};
