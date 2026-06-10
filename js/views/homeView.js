/* js/views/homeView.js - Home & Tournament Explorer View (Restored Aesthetics) */

import { store } from '../store.js';
import { renderCategoryBadge, renderStatusBadge, formatCurrency, initLucide } from '../utils.js';

export const homeView = {
    render() {
        const appContent = document.getElementById('app-content');
        if (!appContent) return;

        const tournaments = store.getTournaments();
        
        // Calcular estadísticas del club
        const totalTournaments = tournaments.length;
        const totalPlayers = tournaments.reduce((acc, t) => acc + (t.couples.length * 2), 0);
        const activeTournaments = tournaments.filter(t => t.status === 'En Curso').length;

        appContent.innerHTML = `
            <!-- Hero Banner Premium -->
            <section class="hero-section">
                <div class="hero-tag">
                    <i data-lucide="sparkles"></i>
                    <span>Pasarela Stripe Integrada</span>
                </div>
                <h1 class="hero-title">Domina la Pista con <span>Padelify</span></h1>
                <p class="hero-subtitle">
                    Inscríbete en segundos de forma 100% segura, visualiza tus cuadros eliminatorios interactivos y gestiona tus resultados como un profesional.
                </p>
                
                <!-- Estadísticas -->
                <div class="hero-stats">
                    <div class="stat-item">
                        <span class="stat-val">${totalTournaments}</span>
                        <span class="stat-label">Torneos</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-val">${totalPlayers}</span>
                        <span class="stat-label">Jugadores</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-val">${activeTournaments}</span>
                        <span class="stat-label">En Curso</span>
                    </div>
                </div>
            </section>

            <!-- Explorador y Filtros -->
            <div class="explorer-header">
                <h2 class="explorer-title">Torneos Disponibles</h2>
                
                <div class="search-filter-bar">
                    <!-- Buscador -->
                    <div class="search-input-wrapper">
                        <i data-lucide="search"></i>
                        <input type="text" id="search-input" class="form-input" placeholder="Buscar torneo...">
                    </div>
                    
                    <!-- Filtro Categoría -->
                    <select id="category-filter" class="form-select" style="max-width: 160px;">
                        <option value="">Categorías</option>
                        <option value="Oro">Oro</option>
                        <option value="Plata">Plata</option>
                        <option value="Bronce">Bronce</option>
                    </select>
                </div>
            </div>

            <!-- Listado de Torneos -->
            <div class="tournaments-grid" id="tournaments-grid">
                <!-- Cargado dinámicamente -->
            </div>

            <!-- Sección de Reseñas / Opiniones (Premium) -->
            <section class="reviews-section" style="margin-top: 5rem; border-top: 1px solid var(--border-color); padding-top: 4rem;">
                <div class="explorer-header" style="margin-bottom: 3rem; justify-content: center; text-align: center; flex-direction: column; gap: 0.75rem;">
                    <div class="hero-tag" style="margin-bottom: 0.5rem; align-self: center;">
                        <i data-lucide="message-square"></i>
                        <span>Opiniones de la Comunidad</span>
                    </div>
                    <h2 class="explorer-title" style="font-size: 2.25rem; text-align: center;">Lo que dicen nuestros jugadores</h2>
                    <p style="color: var(--text-muted); max-width: 600px; margin: 0 auto; font-size: 1rem;">
                        Descubre la experiencia de otros deportistas compitiendo en Padelify y comparte tu valoración con nosotros.
                    </p>
                </div>

                <div class="reviews-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 3.5rem;">
                    <!-- Reseña 1 -->
                    <div class="glass-card glow-hover" style="display: flex; flex-direction: column; gap: 1.25rem; padding: 2rem;">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                            <div style="display: flex; align-items: center; gap: 0.75rem;">
                                <div style="width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg, var(--color-primary), #99ff00); display: flex; align-items: center; justify-content: center; font-weight: 800; color: var(--text-dark); font-family: var(--font-headings); font-size: 0.95rem;">
                                    JM
                                </div>
                                <div>
                                    <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-main); font-family: var(--font-headings);">Javier M.</h4>
                                    <span style="font-size: 0.8rem; color: var(--text-muted);">Jugador de 2ª Categoría</span>
                                </div>
                            </div>
                            <div style="display: flex; gap: 0.15rem; color: #fbbf24;">
                                <i data-lucide="star" style="width: 14px; height: 14px; fill: currentColor;"></i>
                                <i data-lucide="star" style="width: 14px; height: 14px; fill: currentColor;"></i>
                                <i data-lucide="star" style="width: 14px; height: 14px; fill: currentColor;"></i>
                                <i data-lucide="star" style="width: 14px; height: 14px; fill: currentColor;"></i>
                                <i data-lucide="star" style="width: 14px; height: 14px; fill: currentColor;"></i>
                            </div>
                        </div>
                        <p style="font-size: 0.95rem; color: var(--text-main); line-height: 1.6; font-style: italic; opacity: 0.9;">
                            "Excelente organización de los torneos. La pasarela con Stripe es súper rápida y segura. ¡Padelify ha subido el nivel de nuestras competiciones!"
                        </p>
                    </div>

                    <!-- Reseña 2 -->
                    <div class="glass-card glow-hover" style="display: flex; flex-direction: column; gap: 1.25rem; padding: 2rem;">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                            <div style="display: flex; align-items: center; gap: 0.75rem;">
                                <div style="width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg, #00f0ff, var(--color-stripe)); display: flex; align-items: center; justify-content: center; font-weight: 800; color: #ffffff; font-family: var(--font-headings); font-size: 0.95rem;">
                                    SG
                                </div>
                                <div>
                                    <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-main); font-family: var(--font-headings);">Sofía G.</h4>
                                    <span style="font-size: 0.8rem; color: var(--text-muted);">Campeona de Oro 2026</span>
                                </div>
                            </div>
                            <div style="display: flex; gap: 0.15rem; color: #fbbf24;">
                                <i data-lucide="star" style="width: 14px; height: 14px; fill: currentColor;"></i>
                                <i data-lucide="star" style="width: 14px; height: 14px; fill: currentColor;"></i>
                                <i data-lucide="star" style="width: 14px; height: 14px; fill: currentColor;"></i>
                                <i data-lucide="star" style="width: 14px; height: 14px; fill: currentColor;"></i>
                                <i data-lucide="star" style="width: 14px; height: 14px; fill: currentColor;"></i>
                            </div>
                        </div>
                        <p style="font-size: 0.95rem; color: var(--text-main); line-height: 1.6; font-style: italic; opacity: 0.9;">
                            "Los cuadros eliminatorios interactivos en tiempo real son una pasada. Puedes ver contra quién juegas y los resultados de inmediato. Increíble diseño."
                        </p>
                    </div>

                    <!-- Reseña 3 -->
                    <div class="glass-card glow-hover" style="display: flex; flex-direction: column; gap: 1.25rem; padding: 2rem;">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                            <div style="display: flex; align-items: center; gap: 0.75rem;">
                                <div style="width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg, var(--color-primary), var(--color-stripe)); display: flex; align-items: center; justify-content: center; font-weight: 800; color: #ffffff; font-family: var(--font-headings); font-size: 0.95rem;">
                                    CT
                                </div>
                                <div>
                                    <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-main); font-family: var(--font-headings);">Carlos T.</h4>
                                    <span style="font-size: 0.8rem; color: var(--text-muted);">Administrador de Club</span>
                                </div>
                            </div>
                            <div style="display: flex; gap: 0.15rem; color: #fbbf24;">
                                <i data-lucide="star" style="width: 14px; height: 14px; fill: currentColor;"></i>
                                <i data-lucide="star" style="width: 14px; height: 14px; fill: currentColor;"></i>
                                <i data-lucide="star" style="width: 14px; height: 14px; fill: currentColor;"></i>
                                <i data-lucide="star" style="width: 14px; height: 14px; fill: currentColor;"></i>
                                <i data-lucide="star" style="width: 14px; height: 14px; fill: currentColor;"></i>
                            </div>
                        </div>
                        <p style="font-size: 0.95rem; color: var(--text-main); line-height: 1.6; font-style: italic; opacity: 0.9;">
                            "Como administrador de club, esta herramienta me ha ahorrado horas de trabajo. Todo es intuitivo y la gestión de parejas y clasificaciones es perfecta."
                        </p>
                    </div>
                </div>

                <!-- Botón CTA para dejar reseña con el enlace -->
                <div style="text-align: center; margin-top: 1rem;">
                    <a href="https://g.page/r/Ccs_i0R1yH1LEBM/review" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg" style="display: inline-flex; align-items: center; gap: 0.75rem; border-radius: 50px; text-decoration: none;">
                        <i data-lucide="smile"></i>
                        <span>¡Déjanos tu reseña en Google!</span>
                        <i data-lucide="external-link"></i>
                    </a>
                </div>
            </section>
        `;

        this.renderTournamentsList(tournaments);
        initLucide();

        const searchInput = document.getElementById('search-input');
        const categoryFilter = document.getElementById('category-filter');

        const handleFilter = () => {
            const query = searchInput.value.toLowerCase().trim();
            const category = categoryFilter.value;

            const filtered = tournaments.filter(t => {
                const matchesSearch = t.title.toLowerCase().includes(query) || t.description.toLowerCase().includes(query);
                const matchesCategory = category ? t.category.includes(category) : true;
                return matchesSearch && matchesCategory;
            });

            this.renderTournamentsList(filtered);
            initLucide();
        };

        if (searchInput) searchInput.addEventListener('input', handleFilter);
        if (categoryFilter) categoryFilter.addEventListener('change', handleFilter);
    },

    renderTournamentsList(list) {
        const grid = document.getElementById('tournaments-grid');
        if (!grid) return;

        if (list.length === 0) {
            grid.innerHTML = `
                <div class="glass-card" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                    <i data-lucide="info" style="width: 48px; height: 48px; color: var(--text-muted); margin-bottom: 1rem;"></i>
                    <p style="color: var(--text-muted); font-size: 1.1rem;">No se encontraron torneos con los criterios seleccionados.</p>
                </div>
            `;
            return;
        }

        grid.innerHTML = list.map(t => {
            const fillPercent = (t.couples.length / t.maxCouples) * 100;
            const isFull = t.couples.length >= t.maxCouples;
            const statusLabel = t.status;

            return `
                <div class="glass-card tournament-card glow-hover">
                    <!-- Banner Visual con Imagen Dinámica Limpia (Sin solapamientos de insignias) -->
                    <div class="t-card-banner" style="background-image: url('img/${t.image}')">
                    </div>

                    <!-- Contenido Informativo -->
                    <div class="t-card-body">
                        <!-- Insignias Neatly Placed inside the body to prevent overlapping (Estilo Botón Premium) -->
                        <div style="display: flex; gap: 0.5rem; margin-bottom: 0.85rem; flex-wrap: wrap;">
                            ${renderCategoryBadge(t.category.split(' - ')[0])}
                            ${renderStatusBadge(statusLabel)}
                        </div>

                        <h3 class="t-card-title">${t.title}</h3>
                        <p style="font-size: 0.85rem; color: var(--text-main); margin-bottom: 1rem; line-clamp: 2; -webkit-line-clamp: 2; display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden; min-height: 40px;">
                            ${t.description}
                        </p>

                        <div class="t-card-meta-list">
                            <div class="t-card-meta-item">
                                <i data-lucide="calendar"></i>
                                <span>${t.date}</span>
                            </div>
                            <div class="t-card-meta-item">
                                <i data-lucide="users"></i>
                                <span>Parejas: ${t.couples.length} / ${t.maxCouples}</span>
                            </div>
                            <div class="t-card-meta-item">
                                <i data-lucide="credit-card"></i>
                                <span>Inscripción: ${formatCurrency(t.price)}</span>
                            </div>
                        </div>

                        <!-- Barra de Plazas e Inscripción -->
                        <div class="t-card-slots" style="margin-top: auto; padding-top: 1rem;">
                            <div class="t-card-slots-info">
                                <span class="t-card-slots-label">Inscripciones</span>
                                <div class="t-card-slots-bar">
                                    <div class="t-card-slots-fill" style="width: ${fillPercent}%"></div>
                                </div>
                            </div>
                            
                            <a href="#/torneo/${t.id}" class="btn ${isFull || t.status !== 'Abierto' ? 'btn-secondary' : 'btn-primary'} btn-sm">
                                <span>${isFull || t.status !== 'Abierto' ? 'Ver Torneo' : 'Inscribirse'}</span>
                                <i data-lucide="arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }
};
