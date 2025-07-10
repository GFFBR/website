document.addEventListener('DOMContentLoaded', function () {
    
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const themeToggleButton = document.getElementById('theme-toggle');
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const lightIcon = document.getElementById('theme-toggle-light-icon');
    if (themeToggleButton) {
        const applyTheme = (theme) => {
            document.documentElement.setAttribute('data-theme', theme);
            if (darkIcon && lightIcon) {
                darkIcon.classList.toggle('hidden', theme !== 'dark');
                lightIcon.classList.toggle('hidden', theme === 'dark');
            }
        };

        const currentTheme = localStorage.getItem('theme') || 'dark';
        applyTheme(currentTheme);

        themeToggleButton.addEventListener('click', () => {
            const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme);
        });
    }

    const postsContainer = document.getElementById('posts-container');
    const categoryFilters = document.getElementById('category-filters');
    const paginationContainer = document.getElementById('pagination-container');

    if (postsContainer && categoryFilters && paginationContainer) {
        const allPosts = Array.from(postsContainer.children);
        const postsPerPage = 10;
        let currentPage = 1;
        let currentCategory = 'all';

        function updateView() {
            
            const filteredPosts = allPosts.filter(post => 
                currentCategory === 'all' || post.dataset.category === currentCategory
            );

            const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
            if (currentPage > totalPages) {
                currentPage = totalPages || 1;
            }

            allPosts.forEach(post => post.style.display = 'none');

            const startIndex = (currentPage - 1) * postsPerPage;
            const endIndex = startIndex + postsPerPage;
            filteredPosts.slice(startIndex, endIndex).forEach(post => {
                post.style.display = 'block';
            });

            renderPagination(totalPages);
        }

        function renderPagination(totalPages) {
            paginationContainer.innerHTML = '';
            if (totalPages <= 1) return;

            paginationContainer.appendChild(createNavButton('&laquo; Anterior', currentPage > 1, () => {
                currentPage--;
                updateView();
            }));

            for (let i = 1; i <= totalPages; i++) {
                if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
                    paginationContainer.appendChild(createPageButton(i));
                } else if (i === currentPage - 2 || i === currentPage + 2) {
                    const ellipsis = document.createElement('span');
                    ellipsis.className = 'px-2 py-2 text-gray-500';
                    ellipsis.textContent = '...';
                    paginationContainer.appendChild(ellipsis);
                }
            }

            paginationContainer.appendChild(createNavButton('Próximo &raquo;', currentPage < totalPages, () => {
                currentPage++;
                updateView();
            }));
        }

        function createPageButton(page) {
            const button = document.createElement('button');
            button.textContent = page;
            button.className = 'px-4 py-2 rounded-md transition-colors duration-300 ';
            if (page === currentPage) {
                button.classList.add('bg-fuchsia-500', 'text-white', 'font-bold');
            } else {
                button.classList.add('bg-gray-800', 'text-gray-300', 'hover:bg-fuchsia-400');
            }
            button.addEventListener('click', () => {
                currentPage = page;
                updateView();
            });
            return button;
        }

        function createNavButton(text, enabled, action) {
            const button = document.createElement('button');
            button.innerHTML = text;
            button.className = 'px-4 py-2 rounded-md transition-colors duration-300 bg-gray-800 text-gray-300 hover:bg-fuchsia-400';
            if (!enabled) {
                button.disabled = true;
                button.classList.add('opacity-50', 'cursor-not-allowed');
            }
            button.addEventListener('click', action);
            return button;
        }
        
        categoryFilters.querySelectorAll('.category-btn').forEach(button => {
            button.addEventListener('click', () => {
                categoryFilters.querySelector('.category-btn.active').classList.remove('active');
                button.classList.add('active');
                
                currentCategory = button.dataset.category;
                currentPage = 1;
                updateView();
            });
        });
        updateView();
    }
});
