const d = document;

const $btn = d.querySelector('.hamburger-box a *');
const $nav_links = d.querySelector('.nav-links');

function checkViewportWidth() {
    const viewportWidth = window.innerWidth;
  
    if (viewportWidth > 1024) {
        $nav_links.style.display = 'flex';
        $nav_links.style.justifyContent = 'flex-end';
        $nav_links.style.alignItems = 'center';
        $nav_links.style.position = 'relative';
        $nav_links.style.top = '0';
        $nav_links.style.padding = '0';
        $nav_links.style.width = '60%';
        $nav_links.style.height = '100%';
        $nav_links.style.backgroundColor = 'transparent';
    } else {
        $nav_links.style.display = 'none';
        $nav_links.style.position = 'absolute';
        $nav_links.style.top = '8vh';
        $nav_links.style.padding = '0';
        $nav_links.style.margin = '0';
        $nav_links.style.width = '100%';
        $nav_links.style.height = 'auto';
        $nav_links.style.backgroundColor = 'var(--neutral-white-color)';
    }
}
  
window.addEventListener('resize', checkViewportWidth);
  
checkViewportWidth();

d.addEventListener('click', (e) => {
    if (e.target == $btn) {
        
        if ($nav_links.style.display == 'initial') {
            $nav_links.style.display = 'none';
        } else {
            $nav_links.style.display = 'initial';
        }
        
    }
})