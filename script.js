<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-M9QXHW4CFX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-M9QXHW4CFX');
</script>

/* =========================
   SIDEBAR
========================= */

const menuBtn =
    document.getElementById("menuBtn");

const sidebar =
    document.getElementById("sidebar");

const overlay =
    document.getElementById("overlay");


menuBtn.addEventListener("click", function(){

    sidebar.classList.toggle("active");

    overlay.classList.toggle("active");

});


overlay.addEventListener("click", function(){

    sidebar.classList.remove("active");

    overlay.classList.remove("active");

});
