function openModal(element) {
    const modal = document.getElementById('certModal');
    const modalContent = document.getElementById('certModalContent');
    if (modal && modalContent) {
        if (element) {
            const img = document.getElementById('modalImage');
            const title = document.getElementById('modalTitle');
            const desc = document.getElementById('modalDescription');
            const link = document.getElementById('modalVerifyLink');
            
            if (img) img.src = element.getAttribute('data-img');
            if (title) title.innerText = element.getAttribute('data-title');
            if (desc) desc.innerText = element.getAttribute('data-desc');
            if (link) link.href = element.getAttribute('data-link');
        }

        modal.style.display = 'flex';
        // Trigger reflow for animation
        void modal.offsetWidth;
        modal.style.opacity = '1';
        modalContent.style.transform = 'translateY(0) scale(1)';
    }
}

function closeModal() {
    const modal = document.getElementById('certModal');
    const modalContent = document.getElementById('certModalContent');
    if (modal && modalContent) {
        modal.style.opacity = '0';
        modalContent.style.transform = 'translateY(30px) scale(0.95)';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

// Close when clicking outside the modal content
window.onclick = function(event) {
    const modal = document.getElementById('certModal');
    if (event.target == modal) {
        closeModal();
    }
}
