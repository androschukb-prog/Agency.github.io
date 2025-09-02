$(function(){
  let header=$("#header");
  let header_top=$("#header_top");
  let headerH=header.height();
  let scrollPos=$(window).scrollTop();

  $(window).on("scroll", function(){ 
    scrollPos=$(this).scrollTop();
    if (scrollPos>headerH) {
      header_top.addClass("fixed");
    }
    else{
      header_top.removeClass("fixed");
    }
  }
/*
// const testimonials = [
//   {
//     text: "Це завдяки відмінному сервісу, конкурентоспроможним цінам і підтримці клієнтів. Відчути такий особистий контакт — це справді освіжає.",
//     author: "Золтан Немет"
//   },
//   {
//     text: "Сервіс на найвищому рівні! Дуже швидко реагують і враховують усі побажання.",
//     author: "Анна Левченко"
//   },
//   {
//     text: "Найкращий досвід взаємодії з сервісом! Рекомендую всім.",
//     author: "Максим Іванчук"
//   }
// ];

// let currentIndex = 0;

// function showTestimonial(index, direction = 'right') {
//   const textEl = document.getElementById('testimonial-text');
//   const authorEl = document.getElementById('testimonial-author');

//   const outClass = direction === 'right' ? 'fade-slide-out-left' : 'fade-slide-out-right';
//   const inClass = direction === 'right' ? 'fade-slide-in-right' : 'fade-slide-in-left';

//   // Додаємо клас виїзду, щоб текст поїхав убік
//   textEl.classList.add(outClass);
//   authorEl.classList.add(outClass);

//   setTimeout(() => {
//     // Змінюємо текст
//     textEl.textContent = testimonials[index].text;
//     authorEl.textContent = testimonials[index].author;

//     // Видаляємо клас виїзду
//     textEl.classList.remove(outClass);
//     authorEl.classList.remove(outClass);

//     // Додаємо клас в’їзду для анімації появи з протилежного боку
//     textEl.classList.add(inClass);
//     authorEl.classList.add(inClass);

//     // Прибираємо клас в’їзду через 500мс, коли анімація закінчиться
//     setTimeout(() => {
//       textEl.classList.remove(inClass);
//       authorEl.classList.remove(inClass);
//     }, 500);
//   }, 500);
// }



// function nextTestimonial() {
//   currentIndex = (currentIndex + 1) % testimonials.length;
//   showTestimonial(currentIndex, 'right');  // виїжджаємо справа вліво
// }

// function prevTestimonial() {
//   currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
//   showTestimonial(currentIndex, 'left');  // виїжджаємо зліва вправо
// }

// const modal = document.getElementById('contactModal');
// const headerButton = document.querySelector('.header_button');

// headerButton.addEventListener('click', () => {
//   modal.style.display = 'flex';

//   document.querySelector('.nav').classList.remove('open');
// });

// function closeModal() {
//   modal.style.display = 'none';
// }

// window.onclick = function (event) {
//   if (event.target === modal) {
//     closeModal();
//   }
// }

// function toggleMenu() {
//   document.querySelector('.nav').classList.toggle('open');
// }

// document.querySelectorAll('.nav a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();
//     const target = document.querySelector(this.getAttribute('href'));
//     if (target) {
//       target.scrollIntoView({ behavior: 'smooth' });
//     }
//     document.querySelector('.nav').classList.remove('open'); 
//   });
// });
// showTestimonial(currentIndex)
*/