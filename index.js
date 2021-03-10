document.addEventListener('DOMContentLoaded', function () {
  console.log('Strona zaladowana');

  const rootElement = document.querySelector('#root');
  const sections = document.querySelectorAll('section');
  let currentSectionIndex = 0;



  document.addEventListener('mousewheel', function (e) {
    const direction = e.wheelDelta < 0 ? 1 : -1;
    if (direction === 1) {
      const isLastSection = currentSectionIndex === sections.length - 1;
      if (isLastSection) return;
    } else if (direction === -1) {
      const firstSection = currentSectionIndex === 0;
      if (firstSection) return;
    }
    currentSectionIndex = currentSectionIndex + direction;
    console.log(currentSectionIndex);
  })
})