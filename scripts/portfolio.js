function openModal(element) {
  if (!element) return;

  const img = element.getAttribute("data-img");
  const title = element.getAttribute("data-title");
  const desc = element.getAttribute("data-desc");
  const link = element.getAttribute("data-link");

  Swal.fire({
    title: title,
    text: desc,
    imageUrl: img,
    imageAlt: title + " Badge",
    showCloseButton: true,
    confirmButtonText: "Verify Certification",
    confirmButtonColor: "#0006b5",
    customClass: {
      popup: "!w-[90%] !max-w-[600px]",
      image: "!max-w-[85%] !h-auto !object-contain !mx-auto !my-4",
    },
  }).then((result) => {
    if (result.isConfirmed && link) {
      window.open(link, "_blank");
    }
  });
}
