const fixCursorDisappear = () => {
  document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    if (cursor) {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    }
  });
};
fixCursorDisappear();