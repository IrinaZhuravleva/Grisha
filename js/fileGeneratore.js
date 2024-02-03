// Шаг 1: Получение данных из localStorage
const localStorageData = localStorage.getItem('data'); 

// Шаг 2: Преобразование данных в формат CSV
const dataArray = JSON.stringify(data);


if (localStorageData) {
    // Шаг 2: Преобразование данных в формат CSV
    const dataArray = JSON.parse(localStorageData);

    if (Array.isArray(dataArray)) {
        function convertToCSV(array) {
            const header = Object.keys(array[0]).join(',');
            const rows = array.map(obj => Object.values(obj).join(','));
            return `${header}\n${rows.join('\n')}`;
        }

        const csvContent = convertToCSV(dataArray);

        // Шаг 3: Создание и сохранение файла CSV
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'data.csv'; // Имя файла, которое вы хотите установить
        link.innerText = 'Скачать CSV';

        // Добавление ссылки на страницу
        document.body.appendChild(link);

        // Обработчик события для клика по ссылке
        // link.addEventListener('click', () => {
        //     // Удаление ссылки после клика (опционально)
        //     document.body.removeChild(link);
        // });

        // // Пример: сделать ссылку кликабельной при загрузке страницы
        // document.addEventListener('DOMContentLoaded', () => {
        //     link.click();
        // });
    } else {
        console.error('Данные в localStorage не являются массивом.');
    }
} else {
    console.error('Данные в localStorage отсутствуют.');
}

/// Загрузка файла

    document.getElementById('fileInput').addEventListener('change', handleFileSelect);

    function handleFileSelect(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
    const csvContent = e.target.result;
    const jsonData = convertCsvToJson(csvContent);

    // Сохранение JSON в Local Storage
    localStorage.setItem('data', JSON.stringify(jsonData));

    alert('Файл успешно загружен и сохранен в Local Storage.');
    };

    reader.readAsText(file);
  }
}

    function convertCsvToJson(csvContent) {
    const csvRows = csvContent.split('\n');
    const headers = csvRows[0].split(',');
    const jsonData = [];

    for (let i = 1; i < csvRows.length; i++) {
    const row = csvRows[i].split(',');
    const obj = { };

    for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = row[j];
    }

    jsonData.push(obj);
  }

    return jsonData;
}