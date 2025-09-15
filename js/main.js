$(function () {
  const $headerTop = $("#header_top");
  let threshold = $(window).height(); // висота першого екрану

  function checkScroll() {
    const scrollPos = $(window).scrollTop();
    if (scrollPos >= threshold) {
      $headerTop.addClass("fixed");
    } else {
      $headerTop.removeClass("fixed");
    }
  }

  $(window).on("scroll resize", function () {
    threshold = $(window).height(); // оновлюємо при зміні розміру
    checkScroll();
  });

  checkScroll(); // запуск перевірки при завантаженні

  // Плавний скрол до секцій з урахуванням висоти меню
  $(".nav a, .cta-button").on("click", function (e) {
    const href = $(this).attr("href");
    if (!href || href.indexOf("#") !== 0) return;
    e.preventDefault();
    const $target = $(href);
    if (!$target.length) return;

    const headerHeight = $headerTop.outerHeight();
    const offset = $target.offset().top - headerHeight;

    $("html, body").animate({ scrollTop: offset }, 600);
  });
});

const testimonials = [
  {
    text: "Це завдяки відмінному сервісу, конкурентоспроможним цінам і підтримці клієнтів. Відчути такий особистий контакт — це справді освіжає.",
    author: "Золтан Немет"
  },
  {
    text: "Сервіс на найвищому рівні! Дуже швидко реагують і враховують усі побажання.",
    author: "Анна Левченко"
  },
  {
    text: "Найкращий досвід взаємодії з сервісом! Рекомендую всім.",
    author: "Максим Іванчук"
  }
];

let currentIndex = 0;

function showTestimonial(index, direction = 'right') {
  const textEl = document.getElementById('testimonial-text');
  const authorEl = document.getElementById('testimonial-author');

  const outClass = direction === 'right' ? 'fade-slide-out-left' : 'fade-slide-out-right';
  const inClass = direction === 'right' ? 'fade-slide-in-right' : 'fade-slide-in-left';

  // Додаємо клас виїзду, щоб текст поїхав убік
  textEl.classList.add(outClass);
  authorEl.classList.add(outClass);

  setTimeout(() => {
    // Змінюємо текст
    textEl.textContent = testimonials[index].text;
    authorEl.textContent = testimonials[index].author;

    // Видаляємо клас виїзду
    textEl.classList.remove(outClass);
    authorEl.classList.remove(outClass);

    // Додаємо клас в’їзду для анімації появи з протилежного боку
    textEl.classList.add(inClass);
    authorEl.classList.add(inClass);

    // Прибираємо клас в’їзду через 500мс, коли анімація закінчиться
    setTimeout(() => {
      textEl.classList.remove(inClass);
      authorEl.classList.remove(inClass);
    }, 500);
  }, 500);
}



function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex, 'right');  // виїжджаємо справа вліво
}

function prevTestimonial() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex, 'left');  // виїжджаємо зліва вправо
}

const modal = document.getElementById('contactModal');
const headerButton = document.querySelector('.header_button');

headerButton.addEventListener('click', () => {
  modal.style.display = 'flex';

  document.querySelector('.nav').classList.remove('open');
});

function closeModal() {
  modal.style.display = 'none';
}

window.onclick = function (event) {
  if (event.target === modal) {
    closeModal();
  }
}

function toggleMenu() {
  document.querySelector('.nav').classList.toggle('open');
}

document.querySelectorAll('.nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    document.querySelector('.nav').classList.remove('open'); 
  });
});
showTestimonial(currentIndex);
