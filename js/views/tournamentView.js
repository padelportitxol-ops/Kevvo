/* js/views/tournamentView.js - Tournament Details, Brackets & Registration */

import { store } from '../store.js';
import { checkoutView } from './checkoutView.js';
import { renderCategoryBadge, renderStatusBadge, formatCurrency, showToast, initLucide } from '../utils.js';

export const tournamentView = {
    render(tournamentId) {
        const appContent = document.getElementById('app-content');
        if (!appContent) return;

        const t = store.getTournament(tournamentId);
        if (!t) {
            appContent.innerHTML = `
                <div class="glass-card" style="text-align: center; padding: 4rem 2rem;">
                    <i data-lucide="alert-triangle" style="width: 60px; height: 60px; color: var(--color-error); margin-bottom: 1.5rem;"></i>
                    <h2 style="font-family: var(--font-headings); font-size: 2rem; margin-bottom: 0.5rem;">Torneo no encontrado</h2>
                    <p style="color: var(--text-muted); margin-bottom: 2rem;">El torneo que estás buscando no existe o ha sido retirado.</p>
                    <a href="#/" class="btn btn-primary">Volver al inicio</a>
                </div>
            `;
            initLucide();
            return;
        }

        // Determinar estado de llenado
        const isFull = t.couples.length >= t.maxCouples;
        const statusLabel = isFull && t.status === 'Abierto' ? 'Completo' : t.status;

        appContent.innerHTML = `
            <!-- Migaja de Pan / Volver -->
            <div style="margin-bottom: 1.5rem;">
                <a href="#/" class="nav-item" style="display: inline-flex; width: auto; padding: 0.5rem 1rem; border-radius: 30px; font-size: 0.85rem;">
                    <i data-lucide="arrow-left"></i>
                    <span>Volver a torneos</span>
                </a>
            </div>

            <!-- Título Principal -->
            <h1 class="hero-title" style="font-size: 2.5rem; text-align: left; margin-bottom: 2rem;">
                ${t.title}
            </h1>

            <div class="t-detail-layout">
                <!-- Barra Lateral de Datos Clave (Sidebar) -->
                <aside class="t-detail-sidebar">
                    <div class="t-detail-image-box" style="background-image: url('img/${t.image}')"></div>
                    
                    <div class="glass-card">
                        <h3 style="font-family: var(--font-headings); font-size: 1.25rem; font-weight: 700; margin-bottom: 1.25rem; color: #ffffff; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">
                            Detalles del Evento
                        </h3>

                        <div class="t-info-list">
                            <div class="t-info-row">
                                <div class="t-info-icon-wrapper"><i data-lucide="tag"></i></div>
                                <div class="t-info-texts">
                                    <span class="t-info-label">Categoría</span>
                                    <span class="t-info-value">${renderCategoryBadge(t.category)}</span>
                                </div>
                            </div>
                            <div class="t-info-row">
                                <div class="t-info-icon-wrapper"><i data-lucide="calendar"></i></div>
                                <div class="t-info-texts">
                                    <span class="t-info-label">Fecha del Torneo</span>
                                    <span class="t-info-value">${t.date}</span>
                                </div>
                            </div>
                            <div class="t-info-row">
                                <div class="t-info-icon-wrapper"><i data-lucide="users"></i></div>
                                <div class="t-info-texts">
                                    <span class="t-info-label">Parejas Inscritas</span>
                                    <span class="t-info-value">${t.couples.length} de ${t.maxCouples}</span>
                                </div>
                            </div>
                            <div class="t-info-row">
                                <div class="t-info-icon-wrapper"><i data-lucide="credit-card"></i></div>
                                <div class="t-info-texts">
                                    <span class="t-info-label">Cuota de Inscripción</span>
                                    <span class="t-info-value" style="font-weight: 700; color: var(--color-primary);">${formatCurrency(t.price)}</span>
                                </div>
                            </div>
                            <div class="t-info-row">
                                <div class="t-info-icon-wrapper"><i data-lucide="award"></i></div>
                                <div class="t-info-texts">
                                    <span class="t-info-label">Estado</span>
                                    <span class="t-info-value">${renderStatusBadge(statusLabel)}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Botón de Registro con Stripe -->
                        ${t.status === 'Abierto' && !isFull ? `
                            <button id="register-btn" class="btn btn-primary" style="width: 100%; margin-top: 1.5rem; box-shadow: 0 4px 20px rgba(204,255,0,0.3);">
                                <i data-lucide="credit-card"></i>
                                <span>Inscribirse Pareja</span>
                            </button>
                        ` : `
                            <button class="btn btn-secondary" style="width: 100%; margin-top: 1.5rem; cursor: not-allowed;" disabled>
                                <i data-lucide="lock"></i>
                                <span>Inscripciones Cerradas</span>
                            </button>
                        `}
                    </div>
                </aside>

                <!-- Panel de Contenido Principal Simplificado -->
                <section class="t-detail-main">
                    <!-- Contenido: Información del Torneo -->
                    <div class="glass-card">
                        <h3 style="font-family: var(--font-headings); font-size: 1.35rem; color: #ffffff; margin-bottom: 1rem;">Sobre el Torneo</h3>
                        <p style="color: var(--text-main); font-size: 1rem; line-height: 1.7; margin-bottom: 1.5rem;">
                            ${t.description}
                        </p>
                        
                        <h3 style="font-family: var(--font-headings); font-size: 1.35rem; color: #ffffff; margin-bottom: 1rem;">Reglamento y Detalles</h3>
                        <ul style="color: var(--text-main); padding-left: 1.25rem; font-size: 0.95rem; display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.5rem;">
                            <li><strong>Formato de Juego:</strong> Cuadro eliminatorio con consolación directa.</li>
                            <li><strong>Partidos:</strong> Al mejor de 3 sets. Con Punto de Oro en caso de empate a 40.</li>
                            <li><strong>Pelotas Oficiales:</strong> Head Padel Pro S provistas por el club.</li>
                            <li><strong>Pack de Bienvenida:</strong> Camiseta oficial de Padelify, bebida isotónica y grips.</li>
                        </ul>

                        <div style="background: rgba(99, 91, 255, 0.05); border: 1px solid rgba(99, 91, 255, 0.15); padding: 1.25rem; border-radius: 12px; display: flex; gap: 1rem; align-items: flex-start;">
                            <i data-lucide="shield-check" style="color: #635bff; flex-shrink: 0; width: 24px; height: 24px;"></i>
                            <div>
                                <h4 style="font-family: var(--font-headings); color: #ffffff; font-size: 0.95rem; font-weight: 600; margin-bottom: 0.25rem;">Pasarela de Pago Segura</h4>
                                <p style="color: var(--text-main); font-size: 0.85rem;">
                                    Las inscripciones se liquidan a través de Stripe de manera segura con encriptación SSL de grado militar. Aceptamos Visa, MasterCard y American Express.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Parejas Inscritas Oficialmente -->
                    <div class="glass-card">
                        <h3 style="font-family: var(--font-headings); font-size: 1.35rem; color: #ffffff; margin-bottom: 1.5rem;">Parejas Inscritas Oficialmente</h3>
                        
                        ${t.couples.length === 0 ? `
                            <p style="color: var(--text-muted); font-size: 0.95rem; text-align: center; padding: 2rem 0;">
                                Aún no hay parejas inscritas en este torneo. ¡Sé el primero en apuntarte!
                            </p>
                        ` : `
                            <div class="players-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem;">
                                ${t.couples.map((c, idx) => `
                                    <div class="glass-card player-couple-card" style="background: rgba(255,255,255,0.01); padding: 1.25rem; border-radius: var(--radius-sm); position: relative; display: flex; align-items: center; gap: 1rem;">
                                        <div class="couple-number" style="font-family: var(--font-headings); font-weight: 800; font-size: 1.25rem; color: var(--color-primary);">${idx + 1}</div>
                                        <div class="couple-names" style="display: flex; flex-direction: column; gap: 0.25rem;">
                                            <div class="couple-player" style="font-size: 0.9rem; color: #ffffff;"><span style="color: var(--color-primary); font-size: 0.75rem; font-weight: bold; margin-right: 0.4rem; background: rgba(204,255,0,0.08); padding: 0.15rem 0.4rem; border-radius: 4px;">P1</span>${c.player1}</div>
                                            <div class="couple-player" style="font-size: 0.9rem; color: #ffffff; margin-top: 0.25rem;"><span style="color: var(--color-primary); font-size: 0.75rem; font-weight: bold; margin-right: 0.4rem; background: rgba(204,255,0,0.08); padding: 0.15rem 0.4rem; border-radius: 4px;">P2</span>${c.player2}</div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        `}
                    </div>
                </section>
            </div>
        `;

        initLucide();
        this.bindEvents(t);
    },

    bindEvents(t) {
        // Botón de registro/pago Stripe
        const registerBtn = document.getElementById('register-btn');
        if (registerBtn) {
            registerBtn.addEventListener('click', () => {
                checkoutView.open(t.id, (updatedTournament) => {
                    // Al completarse el pago con éxito, re-renderizar la vista para reflejar el cambio
                    this.render(updatedTournament.id);
                });
            });
        }
    }
};
