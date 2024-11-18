// 1. Функция для получения информации о пользователе
function getUser(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Получен пользователь");
        resolve({ id: userId, name: "Alice" }); // возвращаем объект пользователя
      }, 1000);
    });
  }
  
  // 2. Функция для получения заказов пользователя
  function getOrders(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Получены заказы пользователя");
        resolve([
          { id: 1, item: "Laptop", price: 1000 },
          { id: 2, item: "Phone", price: 500 }
        ]); // возвращаем массив заказов
      }, 1000);
    });
  }
  
  // 3. Функция для расчета общей суммы заказов
  function calculateTotal(orders) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const total = orders.reduce((sum, order) => sum + order.price, 0);
        console.log("Рассчитана общая сумма заказов");
        resolve(total); // возвращаем общую сумму
      }, 1000);
    });
  }
  
  // Создаем цепочку промисов
  getUser(1) // 1. Получаем пользователя
    .then(user => {
      console.log("Пользователь:", user);
      return getOrders(user); // передаем пользователя в следующую функцию и возвращаем промис с заказами
    })
    .then(orders => {
      console.log("Заказы:", orders);
      return calculateTotal(orders); // передаем заказы в следующую функцию и возвращаем промис с общей суммой
    })
    .then(total => {
      console.log("Общая сумма заказов:", total); // выводим итоговую сумму
    })
    .catch(error => {
      console.error("Произошла ошибка:", error); // обработка ошибок
    });
  