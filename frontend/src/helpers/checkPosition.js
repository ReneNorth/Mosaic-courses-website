export function checkPosition(startFunction) {
  // Высота документа и экрана
  const height = document.body.offsetHeight;
  const screenHeight = window.innerHeight;

  // Сколько пикселей уже проскроллили
  const scrolled = window.scrollY;

  // Порог
  const threshold = height - screenHeight / 4;

  // Низ экрана относительно страницы
  const position = scrolled + screenHeight;

  if (position >= threshold) {
    // Вызываем действие
    startFunction();
  }
}
