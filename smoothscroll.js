document.addEventListener('DOMContentLoaded', () => {
    function initSmoothScrolling() {
        lenis = new Lenis({
            lerp: 0.2,
            smoothWheel: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }
    initSmoothScrolling();
});