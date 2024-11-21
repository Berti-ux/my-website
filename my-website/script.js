// Данные сайта
const data = {
  services: [
    { name: "Индивидуальная гравировка", description: "Создайте свою карту с уникальным дизайном.", image: "images/custom_design.jpg" },
    { name: "Гравировка натальных карт", description: "Личный гороскоп на вашей карте.", image: "images/natal_chart.jpg" },
    { name: "Гравировка рун и символов", description: "Магический штрих для вашего стиля.", image: "images/runes.jpg" }
  ],
  gallery: [
    { image: "images/project1.jpg", alt: "Пример 1" },
    { image: "images/project2.jpg", alt: "Пример 2" },
    { image: "images/project3.jpg", alt: "Пример 3" }
  ],
  orderSteps: [
    "Выберите услугу.",
    "Загрузите дизайн или данные.",
    "Подтвердите заказ и оплатите.",
    "Получите готовую карту!"
  ]
};

// Отображение услуг
const servicesList = document.getElementById('services-list');
data.services.forEach(service => {
  const div = document.createElement('div');
  div.className = 'service-item';
  div.innerHTML = `
    <h3>${service.name}</h3>
    <p>${service.description}</p>
    <img src="${service.image}" alt="${service.name}">
  `;
  servicesList.appendChild(div);
});

// Отображение галереи
const galleryImages = document.getElementById('gallery-images');
data.gallery.forEach(image => {
  const img = document.createElement('img');
  img.src = image.image;
  img.alt = image.alt;
  galleryImages.appendChild(img);
});

// Пошаговая инструкция
const orderSteps = document.getElementById('order-steps');
data.orderSteps.forEach(step => {
  const li = document.createElement('li');
  li.textContent = step;
  orderSteps.appendChild(li);
});
