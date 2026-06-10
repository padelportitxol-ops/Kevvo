/* js/app.js - SPA Router & Main Application Controller */

import { store } from './store.js';
import { homeView } from './views/homeView.js';
import { tournamentView } from './views/tournamentView.js';
import { adminView } from './views/adminView.js';
import { adminDashboardView } from './views/adminDashboardView.js';
import { portalView } from './views/portalView.js';
import { rankingsView } from './views/rankingsView.js';
import { classificationView } from './views/classificationView.js';
import { initLucide, showToast } from './utils.js';

// --- CONTROLADOR DE TEMA (DÍA / NOCHE) ---
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        document.documentElement.classList.add('light-theme');
    } else {
        document.documentElement.classList.remove('light-theme');
    }
}

function toggleTheme() {
    const isLight = document.documentElement.classList.toggle('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    initLucide(); // Actualizar iconos en toda la pantalla
}

// Ejecutar inicialización de tema inmediatamente
initTheme();

// LIMPIEZA DINÁMICA DE URL PARA ELIMINAR 'index.html' Y HACER LA REDIRECCIÓN ESTÉTICA Y LIMPIA
if (window.location.pathname.endsWith('/index.html')) {
    const cleanPath = window.location.pathname.replace('/index.html', '/');
    window.history.replaceState(null, '', cleanPath + window.location.hash);
}

// Rutas de la SPA
const routes = {
    home: { render: () => homeView.render() },
    tournament: { render: (id) => tournamentView.render(id) },
    admin: { render: () => adminView.render() },
    adminDashboard: { render: () => adminDashboardView.render() },
    playerDashboard: { render: () => portalView.render() },
    rankings: { render: () => rankingsView.render() },
    classification: { render: () => classificationView.render() }
};

/**
 * Actualiza dinámicamente los botones de login, registro o logout del header
 */
function updateHeaderActions() {
    const container = document.getElementById('header-actions-container');
    if (!container) return;

    const currentUser = store.getCurrentUser();

    if (!currentUser) {
        // No logueado: Panel del Deportista (Gris) y Panel de Club (Verde)
        container.innerHTML = `
            <a href="#/player/dashboard" class="btn btn-secondary btn-sm" id="btn-header-player-portal">
                <i data-lucide="user"></i>
                <span>Panel del Deportista</span>
            </a>
            <a href="#/admin/dashboard" class="btn btn-primary btn-sm" id="btn-header-login" style="margin-left: 0.5rem;">
                <i data-lucide="shield"></i>
                <span>Panel de Club</span>
            </a>
        `;
    } else if (currentUser.role === 'ADMIN') {
        // Logueado como ADMIN: Consola Club y Cerrar Sesión
        container.innerHTML = `
            <a href="#/admin/dashboard" class="btn btn-primary btn-sm">
                <i data-lucide="layout-dashboard"></i>
                <span>Consola Club</span>
            </a>
            <button class="btn btn-secondary btn-sm" id="btn-header-logout" style="margin-left: 0.5rem; border-color: rgba(239, 68, 68, 0.3); color: #f87171;">
                <i data-lucide="log-out"></i>
                <span>Cerrar Sesión</span>
            </button>
        `;
    } else {
        // Logueado como PLAYER: Mis Torneos y Cerrar Sesión
        container.innerHTML = `
            <a href="#/player/dashboard" class="btn btn-primary btn-sm">
                <i data-lucide="award"></i>
                <span>Mis Torneos</span>
            </a>
            <button class="btn btn-secondary btn-sm" id="btn-header-logout" style="margin-left: 0.5rem; border-color: rgba(239, 68, 68, 0.3); color: #f87171;">
                <i data-lucide="log-out"></i>
                <span>Cerrar Sesión</span>
            </button>
        `;
    }

    // Agregar manejador para cerrar sesión si existe el botón
    const logoutBtn = document.getElementById('btn-header-logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            store.logout();
            localStorage.setItem('showLogoutToast', 'true');
            window.location.hash = '#/';
            window.location.reload();
        });
    }

    initLucide();
}

/**
 * Enrutador principal de la aplicación.
 * Analiza el hash actual de la URL y renderiza la vista correspondiente.
 */
function router() {
    const hash = window.location.hash || '#/';
    const appContent = document.getElementById('app-content');
    
    if (!appContent) return;

    // Actualizar dinámicamente los botones del header
    updateHeaderActions();

    // Analizar la ruta
    let route = 'home';
    let params = null;

    if (hash === '#/' || hash === '') {
        route = 'home';
    } else if (hash.startsWith('#/admin/dashboard') || hash.startsWith('#/desktop')) {
        route = 'adminDashboard';
    } else if (hash.startsWith('#/admin')) {
        route = 'admin';
    } else if (hash.startsWith('#/player/dashboard') || hash.startsWith('#/portal') || hash.startsWith('#/player/desktop')) {
        route = 'playerDashboard';
    } else if (hash.startsWith('#/rankings')) {
        route = 'rankings';
    } else if (hash.startsWith('#/clasificacion') || hash.startsWith('#/classification')) {
        route = 'classification';
    } else if (hash.startsWith('#/torneo/')) {
        route = 'tournament';
        params = hash.replace('#/torneo/', '');
    } else {
        // Fallback por defecto a home
        route = 'home';
    }

    // Toggle de la clase dashboard-mode en body y html centralizado
    if (route === 'adminDashboard' || route === 'playerDashboard' || route === 'admin') {
        document.body.classList.add('dashboard-mode');
        document.documentElement.classList.add('dashboard-mode');
    } else {
        document.body.classList.remove('dashboard-mode');
        document.documentElement.classList.remove('dashboard-mode');
    }

    // Efecto de desvanecimiento entre pantallas
    appContent.classList.remove('fade-in');
    void appContent.offsetWidth; // Forzar reflow
    appContent.classList.add('fade-in');

    // Actualizar estado activo de los enlaces en la barra superior
    updateActiveNav(route);

    // Despachar
    try {
        if (route === 'tournament' && params) {
            routes.tournament.render(params);
        } else if (route === 'admin') {
            routes.admin.render();
        } else if (route === 'adminDashboard') {
            routes.adminDashboard.render();
        } else if (route === 'playerDashboard') {
            routes.playerDashboard.render();
        } else if (route === 'rankings') {
            routes.rankings.render();
        } else if (route === 'classification') {
            routes.classification.render();
        } else {
            routes.home.render();
        }
    } catch (error) {
        console.error("Error al cargar la sección:", error);
        appContent.innerHTML = `
            <div class="glass-card" style="text-align: center; padding: 4rem 2rem;">
                <i data-lucide="alert-circle" style="width: 48px; height: 48px; color: var(--color-error); margin-bottom: 1rem;"></i>
                <h3 style="font-family: var(--font-headings); font-size: 1.5rem; color: #ffffff; margin-bottom: 0.5rem;">Error de carga</h3>
                <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">Hubo un problema al dibujar esta sección en pantalla.</p>
                <a href="#/" class="btn btn-primary btn-sm">Volver a Torneos</a>
            </div>
        `;
        initLucide();
    }
}

/**
 * Actualiza la clase 'active' de los botones de navegación en la cabecera.
 */
function updateActiveNav(route) {
    const navHome = document.getElementById('nav-home');
    const navRankings = document.getElementById('nav-rankings');
    const navClassification = document.getElementById('nav-classification');

    if (navHome) navHome.classList.remove('active');
    if (navRankings) navRankings.classList.remove('active');
    if (navClassification) navClassification.classList.remove('active');

    if (route === 'rankings') {
        if (navRankings) navRankings.classList.add('active');
    } else if (route === 'classification') {
        if (navClassification) navClassification.classList.add('active');
    } else if (route === 'home') {
        if (navHome) navHome.classList.add('active');
    }
}

// Escuchas
window.addEventListener('hashchange', router);
window.addEventListener('load', () => {
    initLucide();
    router();

    // Mostrar notificaciones guardadas tras recarga de página
    const showLogout = localStorage.getItem('showLogoutToast');
    if (showLogout) {
        localStorage.removeItem('showLogoutToast');
        showToast('Sesión cerrada correctamente', 'info');
    }

    const showLogin = localStorage.getItem('showLoginToast');
    if (showLogin) {
        localStorage.removeItem('showLoginToast');
        showToast(showLogin, 'success');
    }
    
    // Delegación de eventos para alternar tema (Día / Noche)
    document.addEventListener('click', (e) => {
        const toggleBtn = e.target.closest('.theme-toggle-btn');
        if (toggleBtn) {
            e.preventDefault();
            toggleTheme();
        }
    });
});
