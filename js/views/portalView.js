/* js/views/portalView.js - High-Fidelity Client Portal Dashboard (Sportelia Layout) */

import { store } from '../store.js';
import { formatCurrency, showToast, initLucide } from '../utils.js';

export const portalView = {
    // Sub-tab del portal activo: 'schedule' (agenda), 'tournaments' (mis torneos)
    activePortalTab: 'schedule',

    render() {
        const appContent = document.getElementById('app-content');
        if (!appContent) return;

        const currentUser = store.getCurrentUser();

        // --- SI YA ESTÁ LOGUEADO COMO ADMIN: REDIRECCIONAR A SU PÁGINA DEDICADA ---
        if (currentUser && currentUser.role === 'ADMIN') {
            window.location.hash = '#/admin/dashboard';
            return;
        }

        // --- CASO 1: NO LOGUEADO (Pantalla de login glassmorphic centrada) ---
        if (!currentUser) {
            this.renderAuthScreen(appContent);
            return;
        }

        // --- CASO 2: LOGUEADO JUGADOR (Dibuja el Portal del Cliente Full-Screen) ---
        this.renderPortalDashboard(appContent, currentUser);
    },

    renderAuthScreen(container) {
        container.innerHTML = `
            <div class="auth-viewport-wrapper fade-in">
                <button class="theme-toggle-btn" id="auth-theme-toggle" title="Cambiar tema" style="position: absolute; top: 1.5rem; right: 1.5rem; margin: 0;">
                    <i data-lucide="sun"></i>
                    <i data-lucide="moon"></i>
                </button>
                <div style="max-width: 450px; width: 100%;">
                    <div style="text-align: center; margin-bottom: 2rem;">
                        <a href="#/" style="display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none; font-family: var(--font-headings); font-weight: 800; font-size: 2rem; color: #ffffff;">
                            <i data-lucide="dribbble" style="color: var(--color-primary); width: 28px; height: 28px;"></i>
                            <span>Padel<span style="color: var(--color-primary);">ify</span></span>
                        </a>
                        <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem;">Mi Competición y Agenda Deportiva</p>
                    </div>

                    <div class="glass-card" style="box-shadow: 0 20px 50px rgba(0,0,0,0.5); border-color: rgba(204, 255, 0, 0.15);">
                        <h3 style="font-family: var(--font-headings); font-size: 1.25rem; color: #ffffff; margin-bottom: 1rem; text-align: center; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                            <i data-lucide="calendar" style="color: var(--color-primary);"></i>
                            Portal del Jugador
                        </h3>
                        <p style="color: var(--text-muted); font-size: 0.85rem; text-align: center; margin-bottom: 1.5rem;">
                            Identifícate para ver tus cruces, oponentes y pistas asignadas.
                        </p>

                        <form id="portal-login-form">
                            <div class="form-group">
                                <label for="portal-username">Nombre de Usuario</label>
                                <input type="text" id="portal-username" class="form-input" placeholder="Ej. lebron">
                            </div>

                            <div class="form-group" style="margin-bottom: 1.5rem;">
                                <label for="portal-password">Contraseña</label>
                                <input type="password" id="portal-password" class="form-input" placeholder="••••••••">
                            </div>

                            <a href="#/player/dashboard" id="btn-player-submit" class="btn btn-primary" style="width: 100%; gap: 0.5rem; margin-bottom: 1rem; text-decoration: none; justify-content: center;">
                                <span>Entrar a Mi Agenda</span>
                                <i data-lucide="arrow-right"></i>
                            </a>

                            <button type="button" id="btn-player-bypass" class="btn btn-secondary" style="width: 100%; gap: 0.5rem; border-color: rgba(99, 91, 255, 0.3); color: #a39eff; background: rgba(99, 91, 255, 0.02);">
                                <i data-lucide="zap"></i>
                                <span>Entrar sin Contraseña (Demo)</span>
                            </button>
                        </form>

                        <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px dashed var(--border-color); font-size: 0.75rem; color: var(--text-muted); text-align: center;">
                            <p>¿No tienes cuenta? Registra una en el <a href="#/admin" style="color: var(--color-primary); text-decoration: none; font-weight: 600;">Panel Club</a>.</p>
                            <p style="margin-top: 0.4rem; font-style: italic;">Cuentas demo: <code>lebron</code> / <code>LeBron123</code> (o simplemente <code>123</code>)</p>
                        </div>
                    </div>

                    <div style="text-align: center; margin-top: 1.5rem;">
                        <a href="#/" style="color: var(--text-muted); text-decoration: none; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 0.25rem;">
                            <i data-lucide="arrow-left" style="width: 14px; height: 14px;"></i> Volver a la web pública
                        </a>
                    </div>
                </div>
            </div>
        `;

        initLucide();

        const bypassBtn = document.getElementById('btn-player-bypass');
        if (bypassBtn) {
            bypassBtn.addEventListener('click', () => {
                const res = store.login('lebron', '123');
                localStorage.setItem('showLoginToast', `Acceso rápido como ${res.user.fullName}`);
                window.location.hash = '#/player/dashboard';
                window.location.reload();
            });
        }

        const submitBtn = document.getElementById('btn-player-submit');
        if (submitBtn) {
            submitBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const username = document.getElementById('portal-username').value.trim();
                let pass = document.getElementById('portal-password').value;

                if (!username) {
                    showToast('Por favor, introduce tu nombre de usuario.', 'warning');
                    return;
                }

                // Autocompletado inteligente para el demo por facilidad de testeo
                const cleanUser = username.toLowerCase().replace(/\s+/g, '');
                if ((cleanUser === 'lebron123' || cleanUser === 'lebron') && !pass) {
                    pass = '123';
                }

                if (!pass) {
                    showToast('Por favor, introduce tu contraseña.', 'warning');
                    return;
                }

                const res = store.login(username, pass);
                if (res.error) {
                    showToast(res.error, 'error');
                } else {
                    localStorage.setItem('showLoginToast', `¡Hola, ${res.user.fullName}! Accediendo al portal...`);
                    window.location.hash = '#/player/dashboard';
                    window.location.reload();
                }
            });
        }

        document.getElementById('portal-login-form').addEventListener('submit', (e) => {
            e.preventDefault();
            if (submitBtn) submitBtn.click();
        });
    },

    renderPortalDashboard(container, user) {
        const tournaments = store.getTournaments();
        
        const userFullName = (user.fullName || '').toLowerCase();
        const userUsername = (user.username || '').toLowerCase();

        // Buscar inscripciones del jugador logueado
        const myEntries = [];
        tournaments.forEach(t => {
            t.couples.forEach(c => {
                const p1 = (c.player1 || '').toLowerCase();
                const p2 = (c.player2 || '').toLowerCase();

                const isMatch = 
                    c.username1 === user.username || 
                    (userFullName && p1.includes(userFullName)) || 
                    (userFullName && p2.includes(userFullName)) ||
                    p1.includes(userUsername) ||
                    p2.includes(userUsername);

                if (isMatch) {
                    const isP1 = (userFullName && p1.includes(userFullName)) || p1.includes(userUsername);
                    myEntries.push({
                        tournament: t,
                        couple: c,
                        roleInCouple: isP1 ? 'P1' : 'P2',
                        partnerName: isP1 ? c.player2 : c.player1,
                        partnerPhone: isP1 ? c.phone2 : c.phone1
                    });
                }
            });
        });

        // Buscar agenda de partidos del jugador
        const mySchedule = [];
        myEntries.forEach(entry => {
            if (entry.tournament.matches && entry.tournament.matches.length > 0) {
                entry.tournament.matches.forEach(m => {
                    if (m.team1Id === entry.couple.id || m.team2Id === entry.couple.id) {
                        mySchedule.push({
                            tournament: entry.tournament,
                            match: m,
                            myCouple: entry.couple,
                            myRole: entry.roleInCouple,
                            partnerName: entry.partnerName,
                            partnerPhone: entry.partnerPhone,
                            opponentId: m.team1Id === entry.couple.id ? m.team2Id : m.team1Id
                        });
                    }
                });
            }
        });

        container.innerHTML = `
            <div class="dashboard-layout-container" class="fade-in">
                <!-- BARRA LATERAL DEL JUGADOR -->
                <aside class="dashboard-sidebar" style="border-right-color: rgba(204,255,0,0.15);">
                    <div>
                        <!-- Logo -->
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem; gap: 0.5rem;">
                            <a href="#/" class="sidebar-logo" style="margin-bottom: 0;">
                                <i data-lucide="dribbble"></i>
                                <span>Padel<span>ify</span></span>
                            </a>
                            <button class="theme-toggle-btn" id="sidebar-theme-toggle" title="Cambiar tema" style="margin: 0; width: 32px; height: 32px; flex-shrink: 0;">
                                <i data-lucide="sun" style="width: 14px; height: 14px;"></i>
                                <i data-lucide="moon" style="width: 14px; height: 14px;"></i>
                            </button>
                        </div>

                        <!-- Tarjeta Jugador Clickable -->
                        <div class="sidebar-user-card glow-hover" id="btn-player-profile" style="border-color: rgba(204,255,0,0.15); cursor: pointer; transition: all var(--transition-fast); margin-bottom: 2rem;" onmouseover="this.style.background='rgba(204, 255, 0, 0.05)'" onmouseout="this.style.background='rgba(255, 255, 255, 0.02)'">
                            <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
                                <div style="display: flex; flex-direction: column; gap: 0.2rem; overflow: hidden;">
                                    <span class="user-card-name" style="margin: 0; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: block;">${user.fullName}</span>
                                    <span class="user-card-role" style="color: var(--color-stripe); font-size: 0.75rem; text-transform: uppercase; font-weight: bold; display: block;">Jugador de Pádel</span>
                                </div>
                                <i data-lucide="edit-3" style="width: 14px; height: 14px; color: var(--text-muted); opacity: 0.7; flex-shrink: 0; margin-left: 0.5rem;"></i>
                            </div>
                        </div>

                        <!-- Menú de Pestañas -->
                        <div class="sidebar-menu">
                            <button class="sidebar-menu-item ${this.activePortalTab === 'schedule' ? 'active' : ''}" data-portal-link="schedule">
                                <i data-lucide="calendar"></i>
                                <span>Mi Agenda de Juego</span>
                            </button>
                            <button class="sidebar-menu-item ${this.activePortalTab === 'tournaments' ? 'active' : ''}" data-portal-link="tournaments">
                                <i data-lucide="award"></i>
                                <span>Mis Torneos</span>
                            </button>
                            <button class="sidebar-menu-item ${this.activePortalTab === 'history' ? 'active' : ''}" data-portal-link="history">
                                <i data-lucide="history"></i>
                                <span>Historial de Partidas</span>
                            </button>
                            <button class="sidebar-menu-item ${this.activePortalTab === 'preferences' ? 'active' : ''}" data-portal-link="preferences">
                                <i data-lucide="sliders"></i>
                                <span>Preferencias de Juego</span>
                            </button>
                        </div>
                    </div>

                    <!-- Menú Inferior -->
                    <div style="display: flex; flex-direction: column; gap: 0.5rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
                        <a href="#/" class="sidebar-menu-item" style="color: var(--color-primary);">
                            <i data-lucide="globe"></i>
                            <span>Volver a la Web</span>
                        </a>
                        <button id="sidebar-logout-btn" class="sidebar-menu-item" style="color: #f87171;">
                            <i data-lucide="log-out"></i>
                            <span>Cerrar Sesión</span>
                        </button>
                    </div>
                </aside>

                <!-- ÁREA DE TRABAJO JUGADOR -->
                <main class="dashboard-workspace">
                    <header class="dashboard-topbar">
                        <div class="topbar-title">
                            Mi Competición <span style="color: var(--text-muted); font-size: 0.9rem; font-weight: normal; margin-left: 0.5rem;">/ ${this.activePortalTab === 'schedule' ? 'Mi Agenda y Cruces' : this.activePortalTab === 'tournaments' ? 'Mis Torneos' : this.activePortalTab === 'history' ? 'Historial de Partidas' : this.activePortalTab === 'preferences' ? 'Mis Preferencias' : 'Mi Perfil'}</span>
                        </div>
                        <div class="topbar-actions" style="display: flex; align-items: center; gap: 1rem;">
                            <span class="badge badge-gold" style="font-size: 0.75rem;">
                                <i data-lucide="smile"></i> Ficha Activa
                            </span>
                        </div>
                    </header>

                    <div class="dashboard-view-content">
                        <!-- ESTADO DE INSCRIPCIÓN DEPORTIVA PREMIUM -->
                        ${this.activePortalTab !== 'profile' ? `
                        <div class="glass-card" style="border-color: ${myEntries.length > 0 ? 'rgba(16, 185, 129, 0.25)' : 'rgba(239, 68, 68, 0.25)'}; margin-bottom: 2rem; display: flex; align-items: center; gap: 1.25rem; background: ${myEntries.length > 0 ? 'rgba(16, 185, 129, 0.02)' : 'rgba(239, 68, 68, 0.02)'}">
                            <div style="background: ${myEntries.length > 0 ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)'}; color: ${myEntries.length > 0 ? 'var(--color-success)' : 'var(--color-error)'}; padding: 0.6rem; border-radius: 50%; display: flex;">
                                <i data-lucide="${myEntries.length > 0 ? 'check-circle' : 'alert-circle'}" style="width: 24px; height: 24px;"></i>
                            </div>
                            <div>
                                <h4 style="font-family: var(--font-headings); font-size: 1.05rem; color: #ffffff; margin-bottom: 0.2rem;">Estado de Inscripción Oficial</h4>
                                <p style="color: var(--text-muted); font-size: 0.85rem;">
                                    ${myEntries.length > 0 
                                        ? `¡Confirmado! Estás inscrito oficialmente en el torneo: <strong style="color: var(--color-success);">${myEntries.map(e => e.tournament.title).join(', ')}</strong>.` 
                                        : 'No figuras inscrito en ningún torneo de pádel activo en este momento.'}
                                </p>
                            </div>
                        </div>
                        ` : ''}

                        <!-- PESTAÑA A: AGENDA DE JUEGO (CRUCES & HORARIOS ESTILO CAPTURA 3) -->
                        <div class="t-tab-content ${this.activePortalTab === 'schedule' ? 'active' : ''}">
                            <!-- Resumen Compañero -->
                            <div class="glass-card" style="margin-bottom: 2rem; border-color: rgba(204,255,0,0.15); display: flex; flex-direction: column; gap: 1rem;">
                                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; width: 100%;">
                                    <div style="display: flex; align-items: center; gap: 1.5rem; flex-grow: 1;">
                                        <div style="background: rgba(204,255,0,0.08); color: var(--color-primary); padding: 0.75rem; border-radius: 50%;">
                                            <i data-lucide="users" style="width: 28px; height: 28px;"></i>
                                        </div>
                                        <div>
                                            <h4 style="font-family: var(--font-headings); font-size: 1.1rem; color: #ffffff; margin-bottom: 0.25rem;">Tu Pareja de Juego</h4>
                                            ${myEntries.length > 0 ? `
                                                <p style="color: var(--text-muted); font-size: 0.9rem;">
                                                    Estás registrado junto a <strong style="color: #ffffff">${myEntries[0].partnerName || 'Buscando compañero/a...'}</strong>. 
                                                    ${myEntries[0].partnerPhone ? `Contacto de juego: <code style="color: var(--color-primary);">${myEntries[0].partnerPhone}</code>` : ''}
                                                </p>
                                            ` : `
                                                <p style="color: var(--text-muted); font-size: 0.9rem;">
                                                    No figuras inscrito en ninguna pareja actualmente. ¡Explora los torneos e inscríbete para figurar en el roster del club!
                                                </p>
                                            `}
                                        </div>
                                    </div>
                                    ${myEntries.length > 0 ? `
                                        <div style="display: flex; gap: 0.5rem; align-items: center;">
                                            <button id="btn-quick-change-partner" class="btn btn-secondary btn-sm" style="padding: 0.4rem 0.8rem; font-size: 0.8rem; border-color: rgba(204, 255, 0, 0.25); min-width: 90px; height: 32px;">
                                                <i data-lucide="user-plus" style="width: 14px; height: 14px;"></i>
                                                <span>Cambiar</span>
                                            </button>
                                            ${myEntries[0].partnerName && myEntries[0].partnerName !== 'Buscando compañero/a...' ? `
                                                <button id="btn-quick-dissolve-partner" class="btn btn-secondary btn-sm" style="padding: 0.4rem 0.8rem; font-size: 0.8rem; border-color: rgba(239, 68, 68, 0.3); color: #f87171; min-width: 90px; height: 32px;">
                                                    <i data-lucide="user-minus" style="width: 14px; height: 14px;"></i>
                                                    <span>Ir Solo</span>
                                                </button>
                                            ` : ''}
                                        </div>
                                    ` : ''}
                                </div>

                                <!-- Formulario de Cambio Rápido (Oculto por defecto) -->
                                ${myEntries.length > 0 ? `
                                    <div id="quick-change-partner-container" style="display: none; padding-top: 1rem; border-top: 1px dashed var(--border-color); animation: fadeInEffect var(--transition-fast) forwards;">
                                        <div class="form-row" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1rem;">
                                            <div class="form-group" style="margin: 0;">
                                                <label for="new-partner-name" style="font-size: 0.75rem;">Nombre del Compañero/a</label>
                                                <input type="text" id="new-partner-name" class="form-input" style="padding: 0.5rem;" value="${myEntries[0].partnerName === 'Buscando compañero/a...' ? '' : myEntries[0].partnerName}" placeholder="Nombre completo">
                                            </div>
                                            <div class="form-group" style="margin: 0;">
                                                <label for="new-partner-phone" style="font-size: 0.75rem;">Teléfono de Contacto</label>
                                                <input type="text" id="new-partner-phone" class="form-input" style="padding: 0.5rem;" value="${myEntries[0].partnerPhone || ''}" placeholder="Ej. 600123456">
                                            </div>
                                        </div>
                                        <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
                                            <button id="btn-cancel-partner-change" class="btn btn-secondary btn-sm" style="padding: 0.4rem 0.8rem; font-size: 0.8rem; height: 32px;">Cancelar</button>
                                            <button id="btn-save-partner-change" class="btn btn-primary btn-sm" style="padding: 0.4rem 1rem; font-size: 0.8rem; height: 32px;" data-t-id="${myEntries[0].tournament.id}" data-couple-id="${myEntries[0].couple.id}" data-role="${myEntries[0].roleInCouple}">Guardar</button>
                                        </div>
                                    </div>
                                ` : ''}
                            </div>

                            <h3 style="font-family: var(--font-headings); font-size: 1.35rem; color: #ffffff; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
                                <i data-lucide="swords" style="color: var(--color-primary);"></i>
                                Próximos Encuentros (Horas y Oponentes)
                            </h3>

                            ${mySchedule.length === 0 ? `
                                <div class="glass-card" style="text-align: center; padding: 4rem 2rem; color: var(--text-muted);">
                                    <i data-lucide="calendar-days" style="width: 48px; height: 48px; opacity: 0.5; margin-bottom: 1rem;"></i>
                                    <p>Tu agenda está libre. Los directores deportivos programarán tus pistas en cuanto comience la eliminatoria.</p>
                                </div>
                            ` : `
                                <div class="tournaments-grid" style="grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 1.5rem;">
                                    ${mySchedule.map(s => {
                                        const t = s.tournament;
                                        const m = s.match;
                                        const opponentCouple = t.couples.find(c => c.id === s.opponentId);
                                        const opponentNames = opponentCouple ? `${opponentCouple.player1} / ${opponentCouple.player2}` : 'TBD (Por Definir)';
                                        const myCoupleNames = `${s.myCouple.player1} / ${s.myCouple.player2}`;
                                        
                                        const isCompleted = m.completed;
                                        const isWinner = isCompleted && m.winnerId === s.myCouple.id;
                                        const isOpponentWinner = isCompleted && m.winnerId === s.opponentId;

                                        const rawMyScore = isCompleted ? (m.team1Id === s.myCouple.id ? m.score1 : m.score2) : null;
                                        const rawOppScore = isCompleted ? (m.team1Id === s.opponentId ? m.score1 : m.score2) : null;

                                        const myScore = Array.isArray(rawMyScore) ? rawMyScore.join(' ') : (m.isWO && m.winnerId === s.myCouple.id ? 'W.O.' : '—');
                                        const oppScore = Array.isArray(rawOppScore) ? rawOppScore.join(' ') : (m.isWO && m.winnerId === s.opponentId ? 'W.O.' : '—');

                                        return `
                                            <div class="glass-card" style="padding: 0; overflow: hidden; border-color: ${!isCompleted ? 'rgba(204,255,0,0.2)' : 'var(--border-color)'};">
                                                <!-- Cabecera de División tipo Sportelia -->
                                                <div style="background: rgba(255,255,255,0.02); padding: 0.75rem 1.25rem; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color);">
                                                    <span style="font-size: 0.75rem; font-weight: 700; color: var(--color-primary);">
                                                        ${m.divisionCode || 'XC'} - ${m.stage || 'Grupo'}
                                                    </span>
                                                    <span style="font-size: 0.7rem; color: var(--text-muted);">
                                                        ${isCompleted ? 'Finalizado' : 'Pendiente'}
                                                    </span>
                                                </div>

                                                <!-- Cuerpo del partido -->
                                                <div style="padding: 1.25rem;">
                                                    <!-- Fila de tu pareja -->
                                                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; padding: 0.4rem 0.6rem; border-radius: 6px; background: rgba(204,255,0,0.04);">
                                                        <span style="font-size: 0.9rem; font-weight: 600; color: #ffffff; max-width: 220px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                                            ${myCoupleNames} <span style="font-size: 0.75rem; color: var(--color-primary); font-weight: normal;">(Tú)</span>
                                                        </span>
                                                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                            ${isWinner ? '<i data-lucide="award" style="width: 14px; height: 14px; color: var(--color-primary);"></i>' : ''}
                                                            <span style="font-family: monospace; font-size: 0.95rem; font-weight: bold; color: ${isWinner ? 'var(--color-primary)' : 'var(--text-muted)'};">${myScore}</span>
                                                        </div>
                                                    </div>

                                                    <!-- Fila oponente -->
                                                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.4rem 0.6rem; border-radius: 6px;">
                                                        <span style="font-size: 0.9rem; color: var(--text-muted); max-width: 220px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${opponentNames}">
                                                            ${opponentNames}
                                                        </span>
                                                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                            ${isOpponentWinner ? '<i data-lucide="award" style="width: 14px; height: 14px; color: var(--color-primary);"></i>' : ''}
                                                            <span style="font-family: monospace; font-size: 0.95rem; font-weight: bold; color: ${isOpponentWinner ? 'var(--color-primary)' : 'var(--text-muted)'};">${oppScore}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <!-- Horario, Pista e Información Inferior (Captura 3) -->
                                                <div style="background: rgba(255,255,255,0.01); border-top: 1px solid var(--border-color); padding: 0.6rem 1.25rem; display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--text-muted);">
                                                    <span style="display: flex; align-items: center; gap: 0.25rem;">
                                                        <i data-lucide="calendar" style="width: 13px; height: 13px; color: var(--color-primary);"></i>
                                                        ${m.date || 'DOM. 31'}
                                                    </span>
                                                    <span style="display: flex; align-items: center; gap: 0.25rem;">
                                                        <i data-lucide="clock" style="width: 13px; height: 13px; color: var(--color-primary);"></i>
                                                        ${m.time || '09:00'}
                                                    </span>
                                                    <span style="display: flex; align-items: center; gap: 0.25rem;">
                                                        <i data-lucide="map-pin" style="width: 13px; height: 13px; color: var(--color-primary);"></i>
                                                        ${m.court || 'PISTA 5'}
                                                    </span>
                                                </div>
                                            </div>
                                        `;
                                    }).join('')}
                                </div>
                            `}
                        </div>

                        <!-- PESTAÑA B: MIS TORNEOS INSCRITO -->
                        <div class="t-tab-content ${this.activePortalTab === 'tournaments' ? 'active' : ''}">
                            <div class="glass-card">
                                <h3 style="font-family: var(--font-headings); font-size: 1.35rem; color: #ffffff; margin-bottom: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">
                                    Mis Inscripciones Oficiales
                                </h3>

                                ${myEntries.length === 0 ? `
                                    <p style="color: var(--text-muted); text-align: center; padding: 2rem 0;">Aún no tienes torneos guardados en esta cuenta.</p>
                                ` : `
                                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                                        ${myEntries.map(entry => `
                                            <div class="glass-card" style="display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.01);">
                                                <div>
                                                    <h4 style="font-family: var(--font-headings); color: #ffffff; font-size: 1.1rem; margin-bottom: 0.25rem;">
                                                        ${entry.tournament.title}
                                                    </h4>
                                                    <p style="font-size: 0.85rem; color: var(--text-muted);">
                                                        Categoría: <strong>${entry.tournament.category}</strong> | Fecha: <strong>${entry.tournament.date}</strong>
                                                    </p>
                                                </div>
                                                <a href="#/torneo/${entry.tournament.id}" class="btn btn-secondary btn-sm" style="padding: 0.4rem 1rem; font-size: 0.8rem;">
                                                    Ver Torneo
                                                </a>
                                            </div>
                                        `).join('')}
                                    </div>
                                `}
                            </div>
                        </div>

                        <!-- PESTAÑA C: MI PERFIL -->
                        <div class="t-tab-content ${this.activePortalTab === 'profile' ? 'active' : ''}">
                            ${this.renderProfileTab(user)}
                        </div>

                        <!-- PESTAÑA D: HISTORIAL DE PARTIDAS -->
                        <div class="t-tab-content ${this.activePortalTab === 'history' ? 'active' : ''}">
                            ${this.renderHistoryTab(user, mySchedule)}
                        </div>

                        <!-- PESTAÑA E: PREFERENCIAS DE JUEGO -->
                        <div class="t-tab-content ${this.activePortalTab === 'preferences' ? 'active' : ''}">
                            ${this.renderPreferencesTab(user)}
                        </div>
                    </div>
                </main>
            </div>
        `;

        initLucide();
        this.bindPortalEvents(user);
    },

    renderProfileTab(user) {
        return `
            <div class="glass-card" style="max-width: 600px; margin: 0 auto; padding: 2.5rem; border-color: rgba(204, 255, 0, 0.15);">
                <h3 style="font-family: var(--font-headings); font-size: 1.5rem; color: #ffffff; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
                    <i data-lucide="user" style="color: var(--color-primary);"></i>
                    Editar Mi Perfil
                </h3>
                <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 2rem;">
                    Actualiza tu nombre completo o cambia tu contraseña de acceso para mantener tu cuenta segura.
                </p>
                <form id="profile-edit-form">
                    <div class="form-group">
                        <label for="profile-username-val">Nombre de Usuario</label>
                        <input type="text" id="profile-username-val" class="form-input" value="${user.username}" disabled style="background: rgba(255,255,255,0.02); color: var(--text-muted); cursor: not-allowed; border-color: var(--border-color);">
                        <span style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.15rem;">El nombre de usuario no es modificable.</span>
                    </div>
                    
                    <div class="form-group" style="margin-top: 1.25rem;">
                        <label for="profile-fullname-val">Nombre Completo</label>
                        <input type="text" id="profile-fullname-val" class="form-input" value="${user.fullName}">
                    </div>

                    <div class="form-group" style="margin-top: 1.25rem; margin-bottom: 2rem;">
                        <label for="profile-password-val">Nueva Contraseña</label>
                        <input type="password" id="profile-password-val" class="form-input" value="${user.password}" placeholder="Introduce tu nueva contraseña">
                    </div>

                    <button type="submit" id="btn-save-profile" class="btn btn-primary" style="width: 100%; justify-content: center; gap: 0.5rem;">
                        <i data-lucide="save"></i>
                        <span>Guardar Cambios</span>
                    </button>
                </form>
            </div>
        `;
    },

    renderHistoryTab(user, mySchedule) {
        const completedMatches = mySchedule.filter(s => s.match.completed);
        let victories = 0;
        let defeats = 0;
        completedMatches.forEach(s => {
            if (s.match.winnerId === s.myCouple.id) {
                victories++;
            } else if (s.match.winnerId) {
                defeats++;
            }
        });
        const winRate = completedMatches.length > 0 ? Math.round((victories / completedMatches.length) * 100) : 0;

        return `
            <div class="stats-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
                <!-- Partidos Jugados -->
                <div class="glass-card" style="padding: 1.25rem; display: flex; align-items: center; gap: 1rem; border-color: rgba(255,255,255,0.08);">
                    <div style="background: rgba(255,255,255,0.05); color: #ffffff; padding: 0.5rem; border-radius: 8px;">
                        <i data-lucide="swords" style="width: 20px; height: 20px;"></i>
                    </div>
                    <div>
                        <div style="font-size: 0.75rem; color: var(--text-muted);">Jugados</div>
                        <div style="font-size: 1.5rem; font-weight: 700; color: #ffffff;">${completedMatches.length}</div>
                    </div>
                </div>
                <!-- Victorias -->
                <div class="glass-card" style="padding: 1.25rem; display: flex; align-items: center; gap: 1rem; border-color: rgba(16, 185, 129, 0.2);">
                    <div style="background: rgba(16, 185, 129, 0.1); color: var(--color-success); padding: 0.5rem; border-radius: 8px;">
                        <i data-lucide="trending-up" style="width: 20px; height: 20px;"></i>
                    </div>
                    <div>
                        <div style="font-size: 0.75rem; color: var(--text-muted);">Victorias</div>
                        <div style="font-size: 1.5rem; font-weight: 700; color: var(--color-success);">${victories}</div>
                    </div>
                </div>
                <!-- Derrotas -->
                <div class="glass-card" style="padding: 1.25rem; display: flex; align-items: center; gap: 1rem; border-color: rgba(239, 68, 68, 0.2);">
                    <div style="background: rgba(239, 68, 68, 0.1); color: var(--color-error); padding: 0.5rem; border-radius: 8px;">
                        <i data-lucide="trending-down" style="width: 20px; height: 20px;"></i>
                    </div>
                    <div>
                        <div style="font-size: 0.75rem; color: var(--text-muted);">Derrotas</div>
                        <div style="font-size: 1.5rem; font-weight: 700; color: var(--color-error);">${defeats}</div>
                    </div>
                </div>
                <!-- Rendimiento -->
                <div class="glass-card" style="padding: 1.25rem; display: flex; align-items: center; gap: 1rem; border-color: rgba(204, 255, 0, 0.2);">
                    <div style="background: rgba(204, 255, 0, 0.1); color: var(--color-primary); padding: 0.5rem; border-radius: 8px;">
                        <i data-lucide="percent" style="width: 20px; height: 20px;"></i>
                    </div>
                    <div>
                        <div style="font-size: 0.75rem; color: var(--text-muted);">Rendimiento</div>
                        <div style="font-size: 1.5rem; font-weight: 700; color: var(--color-primary);">${winRate}%</div>
                    </div>
                </div>
            </div>

            <div class="glass-card" style="border-color: rgba(255, 255, 255, 0.08); padding: 2rem;">
                <h3 style="font-family: var(--font-headings); font-size: 1.35rem; color: #ffffff; margin-bottom: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i data-lucide="history" style="color: var(--color-primary);"></i>
                    Historial Completo
                </h3>

                ${completedMatches.length === 0 ? `
                    <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
                        <i data-lucide="folder-open" style="width: 48px; height: 48px; opacity: 0.5; margin-bottom: 1rem; display: block; margin-left: auto; margin-right: auto;"></i>
                        <p>No tienes partidos finalizados en tu historial todavía.</p>
                    </div>
                ` : `
                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                        ${completedMatches.map(s => {
                            const t = s.tournament;
                            const m = s.match;
                            const opponentCouple = t.couples.find(c => c.id === s.opponentId);
                            const opponentNames = opponentCouple ? `${opponentCouple.player1} / ${opponentCouple.player2}` : 'TBD (Por Definir)';
                            const myCoupleNames = `${s.myCouple.player1} / ${s.myCouple.player2}`;
                            
                            const isWinner = m.winnerId === s.myCouple.id;
                            const statusText = isWinner ? 'Victoria' : 'Derrota';
                            const statusBg = isWinner ? 'rgba(16, 185, 129, 0.05)' : 'rgba(239, 68, 68, 0.05)';
                            const statusBorder = isWinner ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)';
                            
                            const rawMyScore = m.team1Id === s.myCouple.id ? m.score1 : m.score2;
                            const rawOppScore = m.team1Id === s.opponentId ? m.score1 : m.score2;

                            const myScore = Array.isArray(rawMyScore) ? rawMyScore.join(' ') : (m.isWO && m.winnerId === s.myCouple.id ? 'W.O.' : '—');
                            const oppScore = Array.isArray(rawOppScore) ? rawOppScore.join(' ') : (m.isWO && m.winnerId === s.opponentId ? 'W.O.' : '—');

                            return `
                                <div class="glass-card animate-slide-in" style="background: ${statusBg}; border-color: ${statusBorder}; padding: 1.25rem; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1rem; transition: all var(--transition-fast);">
                                    <!-- Info Torneo & Fecha -->
                                    <div style="min-width: 200px;">
                                        <span class="badge ${isWinner ? 'badge-open' : 'badge-full'}" style="font-size: 0.75rem; font-weight: 700; margin-bottom: 0.5rem; display: inline-flex; align-items: center; gap: 0.25rem; background: ${isWinner ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)'}; color: ${isWinner ? '#34d399' : '#f87171'}; border: 1px solid ${isWinner ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'};">
                                            <i data-lucide="${isWinner ? 'check-circle' : 'x-circle'}" style="width: 12px; height: 12px;"></i>
                                            ${statusText}
                                        </span>
                                        <h4 style="font-family: var(--font-headings); font-size: 1.05rem; color: #ffffff; margin: 0 0 0.2rem 0;">
                                            ${t.title}
                                        </h4>
                                        <p style="color: var(--text-muted); font-size: 0.8rem; margin: 0; display: flex; align-items: center; gap: 0.5rem;">
                                            <span>${m.stage || 'Grupo'}</span>
                                            <span>•</span>
                                            <span>${m.date || 'DOM. 31'} ${m.time || ''}</span>
                                            <span>•</span>
                                            <span>${m.court || 'PISTA'}</span>
                                        </p>
                                    </div>

                                    <!-- Enfrentamiento & Marcador -->
                                    <div style="display: flex; align-items: center; gap: 2rem; flex-grow: 1; justify-content: flex-end; min-width: 280px;">
                                        <div style="text-align: right;">
                                            <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.2rem;">Pareja Oponente</div>
                                            <div style="font-size: 0.95rem; font-weight: 600; color: #ffffff;">
                                                ${opponentNames}
                                            </div>
                                            <div style="font-size: 0.75rem; color: var(--text-muted);">
                                                Tu Pareja: ${myCoupleNames}
                                            </div>
                                        </div>

                                        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); padding: 0.5rem 1rem; border-radius: 8px; text-align: center; min-width: 80px;">
                                            <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.15rem;">Resultado</div>
                                            <div style="font-family: monospace; font-size: 1.1rem; font-weight: 700; color: ${isWinner ? 'var(--color-primary)' : '#ffffff'};">
                                                ${myScore} - ${oppScore}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                `}
            </div>
        `;
    },

    renderPreferencesTab(user) {
        const prefs = user.preferences || {
            preferredSide: 'Indiferente',
            level: 'Intermedio',
            availability: 'Flexible',
            preferredPartner: '',
            notes: ''
        };

        return `
            <div class="glass-card" style="max-width: 650px; margin: 0 auto; padding: 2.5rem; border-color: rgba(204, 255, 0, 0.15);">
                <h3 style="font-family: var(--font-headings); font-size: 1.5rem; color: #ffffff; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
                    <i data-lucide="sliders" style="color: var(--color-primary);"></i>
                    Preferencias Deportivas
                </h3>
                <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 2rem;">
                    Configura tus preferencias de juego. Esto ayudará a los organizadores a emparejarte y programar tus partidos.
                </p>
                <form id="preferences-edit-form">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="pref-side">Lado de Pista Preferido</label>
                            <select id="pref-side" class="form-select">
                                <option value="Derecha (Drive)" ${prefs.preferredSide === 'Derecha (Drive)' ? 'selected' : ''}>Derecha (Drive)</option>
                                <option value="Izquierda (Revés)" ${prefs.preferredSide === 'Izquierda (Revés)' ? 'selected' : ''}>Izquierda (Revés)</option>
                                <option value="Indiferente" ${prefs.preferredSide === 'Indiferente' ? 'selected' : ''}>Indiferente / Ambos lados</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="pref-level">Nivel de Juego</label>
                            <select id="pref-level" class="form-select">
                                <option value="Iniciación" ${prefs.level === 'Iniciación' ? 'selected' : ''}>Iniciación</option>
                                <option value="Intermedio" ${prefs.level === 'Intermedio' ? 'selected' : ''}>Intermedio</option>
                                <option value="Avanzado" ${prefs.level === 'Avanzado' ? 'selected' : ''}>Avanzado</option>
                                <option value="Competición" ${prefs.level === 'Competición' ? 'selected' : ''}>Competición</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-row" style="margin-top: 1.25rem;">
                        <div class="form-group">
                            <label for="pref-availability">Disponibilidad de Horario</label>
                            <select id="pref-availability" class="form-select">
                                <option value="Flexible" ${prefs.availability === 'Flexible' ? 'selected' : ''}>Flexible (Cualquier horario)</option>
                                <option value="Mañanas" ${prefs.availability === 'Mañanas' ? 'selected' : ''}>Mañanas</option>
                                <option value="Tardes" ${prefs.availability === 'Tardes' ? 'selected' : ''}>Tardes</option>
                                <option value="Fines de semana" ${prefs.availability === 'Fines de semana' ? 'selected' : ''}>Sólo Fines de Semana</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="pref-partner">Compañero Preferido</label>
                            <input type="text" id="pref-partner" class="form-input" value="${prefs.preferredPartner || ''}" placeholder="Ej. Juan Montero o Teléfono">
                        </div>
                    </div>

                    <div class="form-group" style="margin-top: 1.25rem; margin-bottom: 2rem;">
                        <label for="pref-notes">Notas sobre tu estilo de juego o emparejamiento</label>
                        <textarea id="pref-notes" class="form-textarea" rows="3" placeholder="Ej. Busco compañero agresivo en la red, o prefiero jugar en categorías mixtas..." style="resize: vertical;">${prefs.notes || ''}</textarea>
                    </div>

                    <button type="submit" id="btn-save-preferences" class="btn btn-primary" style="width: 100%; justify-content: center; gap: 0.5rem;">
                        <i data-lucide="save"></i>
                        <span>Guardar Preferencias</span>
                    </button>
                </form>
            </div>
        `;
    },

    bindPortalEvents(user) {
        const logoutBtn = document.getElementById('sidebar-logout-btn');
        const profileBtn = document.getElementById('btn-player-profile');

        // Bucle de sub-navegación del portal
        const subNavBtns = document.querySelectorAll('[data-portal-link]');
        subNavBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.activePortalTab = e.currentTarget.dataset.portalLink;
                this.render();
            });
        });

        if (profileBtn) {
            profileBtn.addEventListener('click', () => {
                this.activePortalTab = 'profile';
                this.render();
            });
        }

        const profileForm = document.getElementById('profile-edit-form');
        if (profileForm) {
            profileForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const fullName = document.getElementById('profile-fullname-val').value.trim();
                const password = document.getElementById('profile-password-val').value.trim();

                if (!fullName) {
                    showToast('El nombre completo no puede estar vacío.', 'warning');
                    return;
                }
                if (!password) {
                    showToast('La contraseña no puede estar vacía.', 'warning');
                    return;
                }

                const res = store.updateUserProfile(user.username, { fullName, password });
                if (res.error) {
                    showToast(res.error, 'error');
                } else {
                    showToast('Perfil actualizado correctamente', 'success');
                    this.render();
                }
            });
        }

        const prefsForm = document.getElementById('preferences-edit-form');
        if (prefsForm) {
            prefsForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const preferredSide = document.getElementById('pref-side').value;
                const level = document.getElementById('pref-level').value;
                const availability = document.getElementById('pref-availability').value;
                const preferredPartner = document.getElementById('pref-partner').value.trim();
                const notes = document.getElementById('pref-notes').value.trim();

                const preferences = { preferredSide, level, availability, preferredPartner, notes };
                const res = store.updateUserProfile(user.username, { preferences });
                if (res.error) {
                    showToast(res.error, 'error');
                } else {
                    showToast('Preferencias actualizadas correctamente', 'success');
                    this.render();
                }
            });
        }

        // --- EVENTOS DE CAMBIO RÁPIDO DE PAREJA ---
        const changePartnerBtn = document.getElementById('btn-quick-change-partner');
        const cancelPartnerChangeBtn = document.getElementById('btn-cancel-partner-change');
        const savePartnerChangeBtn = document.getElementById('btn-save-partner-change');
        const dissolvePartnerBtn = document.getElementById('btn-quick-dissolve-partner');
        const quickContainer = document.getElementById('quick-change-partner-container');

        if (changePartnerBtn && quickContainer) {
            changePartnerBtn.addEventListener('click', () => {
                const isHidden = quickContainer.style.display === 'none';
                quickContainer.style.display = isHidden ? 'block' : 'none';
            });
        }

        if (cancelPartnerChangeBtn && quickContainer) {
            cancelPartnerChangeBtn.addEventListener('click', () => {
                quickContainer.style.display = 'none';
            });
        }

        if (savePartnerChangeBtn) {
            savePartnerChangeBtn.addEventListener('click', () => {
                const tId = savePartnerChangeBtn.dataset.tId;
                const coupleId = savePartnerChangeBtn.dataset.coupleId;
                const role = savePartnerChangeBtn.dataset.role;

                const newName = document.getElementById('new-partner-name').value.trim();
                const newPhone = document.getElementById('new-partner-phone').value.trim();

                if (!newName) {
                    showToast('Por favor, indica el nombre de la pareja o indica "Buscando compañero/a...".', 'warning');
                    return;
                }

                const updatedFields = {};
                if (role === 'P1') {
                    updatedFields.player2 = newName;
                    updatedFields.phone2 = newPhone;
                } else {
                    updatedFields.player1 = newName;
                    updatedFields.phone1 = newPhone;
                }

                const res = store.updateCouple(tId, coupleId, updatedFields);
                if (res.error) {
                    showToast(res.error, 'error');
                } else {
                    showToast('Pareja modificada correctamente', 'success');
                    this.render();
                }
            });
        }

        if (dissolvePartnerBtn) {
            dissolvePartnerBtn.addEventListener('click', () => {
                const saveBtn = document.getElementById('btn-save-partner-change');
                if (!saveBtn) return;

                const tId = saveBtn.dataset.tId;
                const coupleId = saveBtn.dataset.coupleId;
                const role = saveBtn.dataset.role;

                if (confirm('¿Estás seguro de que deseas disolver la pareja? Pasarás a figurar como "Buscando compañero/a".')) {
                    const updatedFields = {};
                    if (role === 'P1') {
                        updatedFields.player2 = 'Buscando compañero/a...';
                        updatedFields.phone2 = '';
                    } else {
                        updatedFields.player1 = 'Buscando compañero/a...';
                        updatedFields.phone1 = '';
                    }

                    const res = store.updateCouple(tId, coupleId, updatedFields);
                    if (res.error) {
                        showToast(res.error, 'error');
                    } else {
                        showToast('Pareja disuelta. Ahora buscas compañero/a.', 'info');
                        this.render();
                    }
                }
            });
        }

        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                store.logout();
                localStorage.setItem('showLogoutToast', 'true');
                window.location.hash = '#/';
                window.location.reload();
            });
        }
    }
};
