<script>
  // Toggle mobile nav
  const menuBtn = document.getElementById("MenuBtn");
  const header = document.querySelector("header");

  menuBtn.addEventListener("click", () => {
    header.classList.toggle("active");
  });

  // Smooth scroll active state
  const links = document.querySelectorAll("nav ul li a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      links.forEach(item => item.classList.remove("active"));
      link.classList.add("active");
      header.classList.remove("active"); // Close menu on mobile
    });
  });
</script>
