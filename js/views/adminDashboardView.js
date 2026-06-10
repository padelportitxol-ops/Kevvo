/* js/views/adminDashboardView.js - Dedicated Club Administration Page */

import { store } from '../store.js';
import { formatCurrency, showToast, initLucide } from '../utils.js';

export const adminDashboardView = {
    // Sub-pestaña activa del administrador
    activeAdminTab: 'metrics',
    // Tab de aprobaciones seleccionado
    activeApprovalTab: 'pendientes',
    // Búsqueda en directorio
    directoryQuery: '',
    selectedQuickTournamentId: null,
    selectedScheduleTournamentId: null,

    render() {
        const appContent = document.getElementById('app-content');
        if (!appContent) return;

        const currentUser = store.getCurrentUser();

        // --- VALIDAR ACCESO: REDIRIGIR A LOGIN SI NO ES ADMIN ---
        if (!currentUser || currentUser.role !== 'ADMIN') {
            window.location.hash = '#/admin';
            return;
        }

        // --- DETERMINAR SUB-RUTA DE LA CONSOLA DESDE EL HASH ---
        const currentHash = window.location.hash || '#/admin/dashboard';
        if (currentHash.includes('/metrics')) {
            this.activeAdminTab = 'metrics';
        } else if (currentHash.includes('/tournaments')) {
            this.activeAdminTab = 'tournaments_mgmt';
        } else if (currentHash.includes('/categories')) {
            this.activeAdminTab = 'categories';
        } else if (currentHash.includes('/approvals')) {
            this.activeAdminTab = 'approvals';
        } else if (currentHash.includes('/directory')) {
            this.activeAdminTab = 'directory';
        } else if (currentHash.includes('/schedule')) {
            this.activeAdminTab = 'schedule';
        } else if (currentHash.includes('/roles')) {
            this.activeAdminTab = 'roles';
        } else if (currentHash.includes('/profile')) {
            this.activeAdminTab = 'profile';
        } else {
            // Si viene de #/admin/dashboard o similar sin sub-ruta, redirigir estéticamente
            if (currentHash === '#/admin/dashboard' || currentHash === '#/desktop') {
                window.location.hash = '#/admin/dashboard/metrics';
                return;
            }
            this.activeAdminTab = 'metrics'; // Por defecto
        }

        const tournaments = store.getTournaments();
        const transactions = store.getTransactions();
        const totalRevenue = store.getRevenue();
        const activeCount = tournaments.filter(t => t.status === 'En Curso').length;
        const totalRegistrations = tournaments.reduce((acc, t) => acc + t.couples.length, 0);

        appContent.innerHTML = `
            <div class="dashboard-layout-container fade-in">
                <!-- BARRA LATERAL DEL ADMINISTRADOR (Estilo respond.io / Captura 2) -->
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

                        <!-- Tarjeta Director Deportivo Clickable -->
                        <div class="sidebar-user-card glow-hover" id="btn-admin-profile" style="border-color: rgba(204,255,0,0.15); cursor: pointer; transition: all var(--transition-fast); margin-bottom: 2rem;" onmouseover="this.style.background='rgba(204, 255, 0, 0.05)'" onmouseout="this.style.background='rgba(255, 255, 255, 0.02)'">
                            <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
                                <div style="display: flex; flex-direction: column; gap: 0.2rem; overflow: hidden;">
                                    <span class="user-card-name" style="margin: 0; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: block;">${currentUser.fullName}</span>
                                    <span class="user-card-role" style="color: var(--color-stripe); font-size: 0.75rem; text-transform: uppercase; font-weight: bold; display: block;">Director Deportivo</span>
                                </div>
                                <i data-lucide="edit-3" style="width: 14px; height: 14px; color: var(--text-muted); opacity: 0.7; flex-shrink: 0; margin-left: 0.5rem;"></i>
                            </div>
                        </div>

                        <!-- Menú de Pestañas Vertical (Estilo Sportelia / Captura 2) -->
                        <div class="sidebar-menu">
                            <a href="#/admin/dashboard/metrics" class="sidebar-menu-item ${this.activeAdminTab === 'metrics' ? 'active' : ''}">
                                <i data-lucide="trending-up"></i>
                                <span>Finanzas & Métricas</span>
                            </a>
                            <a href="#/admin/dashboard/tournaments" class="sidebar-menu-item ${this.activeAdminTab === 'tournaments_mgmt' ? 'active' : ''}">
                                <i data-lucide="award"></i>
                                <span>Gestionar Torneos</span>
                            </a>
                            <a href="#/admin/dashboard/categories" class="sidebar-menu-item ${this.activeAdminTab === 'categories' ? 'active' : ''}">
                                <i data-lucide="sliders"></i>
                                <span>Configurar Categorías</span>
                            </a>
                            <a href="#/admin/dashboard/approvals" class="sidebar-menu-item ${this.activeAdminTab === 'approvals' ? 'active' : ''}">
                                <i data-lucide="check-square"></i>
                                <span>Solicitudes Aprobación</span>
                            </a>
                            <a href="#/admin/dashboard/directory" class="sidebar-menu-item ${this.activeAdminTab === 'directory' ? 'active' : ''}">
                                <i data-lucide="users"></i>
                                <span>Directorio Roster</span>
                            </a>
                            <a href="#/admin/dashboard/schedule" class="sidebar-menu-item ${this.activeAdminTab === 'schedule' ? 'active' : ''}">
                                <i data-lucide="calendar"></i>
                                <span>Programar Pistas</span>
                            </a>
                            <a href="#/admin/dashboard/roles" class="sidebar-menu-item ${this.activeAdminTab === 'roles' ? 'active' : ''}">
                                <i data-lucide="shield"></i>
                                <span>Asignar Directores</span>
                            </a>
                        </div>
                    </div>

                    <!-- Menú Inferior -->
                    <div style="display: flex; flex-direction: column; gap: 0.5rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
                        <a href="#/" class="sidebar-menu-item" style="color: var(--color-primary);">
                            <i data-lucide="globe"></i>
                            <span>Volver a la Web</span>
                        </a>
                        <button id="admin-sidebar-logout-btn" class="sidebar-menu-item" style="color: #f87171;">
                            <i data-lucide="log-out"></i>
                            <span>Cerrar Sesión</span>
                        </button>
                    </div>
                </aside>

                <!-- ÁREA DE TRABAJO ADMINISTRADOR -->
                <main class="dashboard-workspace">
                    <header class="dashboard-topbar">
                        <div class="topbar-title">
                            Consola de Club <span style="color: var(--text-muted); font-size: 0.9rem; font-weight: normal; margin-left: 0.5rem;">/ ${this.activeAdminTab === 'metrics' ? 'Finanzas & Métricas' : this.activeAdminTab === 'tournaments_mgmt' ? 'Gestionar Torneos' : this.activeAdminTab === 'categories' ? 'Configurar Categorías' : this.activeAdminTab === 'approvals' ? 'Solicitudes Aprobación' : this.activeAdminTab === 'directory' ? 'Directorio Roster' : this.activeAdminTab === 'schedule' ? 'Programar Pistas' : this.activeAdminTab === 'roles' ? 'Asignar Directores' : this.activeAdminTab === 'profile' ? 'Mi Perfil' : 'Consola'}</span>
                        </div>
                        <div class="topbar-actions" style="display: flex; align-items: center; gap: 1rem;">
                            <span class="badge badge-gold" style="font-size: 0.75rem;">
                                <i data-lucide="award"></i> Administrador
                            </span>
                        </div>
                    </header>

                    <div class="dashboard-view-content">
                        <!-- CONTENEDOR DE SUB-PESTAÑAS -->
                        <div class="admin-view-workspace-panels">
                            
                            <!-- SUB-PESTAÑA 1: FINANZAS Y CREACIÓN -->
                            <div class="t-tab-content ${this.activeAdminTab === 'metrics' ? 'active' : ''}">
                                <div class="admin-metrics-grid" style="margin-bottom: 2rem;">
                                    <div class="glass-card metric-card" style="border-color: rgba(99, 91, 255, 0.25);">
                                        <div class="metric-icon-box"><i data-lucide="credit-card"></i></div>
                                        <div class="metric-data"><span class="metric-num">${formatCurrency(totalRevenue)}</span><span class="metric-lbl">Ventas Stripe</span></div>
                                    </div>
                                    <div class="glass-card metric-card" style="border-color: rgba(16, 185, 129, 0.25);">
                                        <div class="metric-icon-box emerald"><i data-lucide="users"></i></div>
                                        <div class="metric-data"><span class="metric-num">${totalRegistrations}</span><span class="metric-lbl">Inscritos Totales</span></div>
                                    </div>
                                    <div class="glass-card metric-card" style="border-color: rgba(204, 255, 0, 0.25);">
                                        <div class="metric-icon-box green"><i data-lucide="trophy"></i></div>
                                        <div class="metric-data"><span class="metric-num">${activeCount}</span><span class="metric-lbl">Torneos Activos</span></div>
                                    </div>
                                    <div class="glass-card metric-card" style="border-color: rgba(59, 130, 246, 0.25);">
                                        <div class="metric-icon-box blue"><i data-lucide="receipt"></i></div>
                                        <div class="metric-data"><span class="metric-num">${transactions.length}</span><span class="metric-lbl">Cobros Stripe</span></div>
                                    </div>
                                </div>

                                <!-- Historial de Transacciones de Cobros Stripe -->
                                <div class="glass-card">
                                    <h3 style="font-family: var(--font-headings); font-size: 1.35rem; color: #ffffff; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
                                        <i data-lucide="receipt" style="color: var(--color-primary);"></i>
                                        Historial de Cobros Recientes (Stripe)
                                    </h3>
                                    <div style="overflow-x: auto;">
                                        <table class="tournament-management-table">
                                            <thead>
                                                <tr>
                                                    <th style="text-align: left;">ID Cobro</th>
                                                    <th style="text-align: left;">Pareja / Jugadores</th>
                                                    <th style="text-align: left;">Torneo</th>
                                                    <th>Fecha Pago</th>
                                                    <th>Importe</th>
                                                    <th style="text-align: right;">Estado</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                ${transactions.length === 0 ? `
                                                    <tr>
                                                        <td colspan="6" style="text-align: center; color: var(--text-muted); padding: 2rem 0;">No se han registrado cobros en el sistema todavía.</td>
                                                    </tr>
                                                ` : transactions.map(tx => `
                                                    <tr style="transition: background var(--transition-fast);" onmouseover="this.style.background='rgba(255,255,255,0.01)'" onmouseout="this.style.background='transparent'">
                                                        <td style="font-family: monospace; color: var(--color-primary); text-align: left; font-size: 0.85rem;"><code>${tx.id}</code></td>
                                                        <td style="font-weight: 600; color: #ffffff; text-align: left;">${tx.players}</td>
                                                        <td style="color: var(--text-muted); text-align: left; font-size: 0.85rem;">${tx.tournamentTitle}</td>
                                                        <td style="color: var(--text-muted); font-size: 0.85rem;">${tx.date}</td>
                                                        <td style="font-weight: bold; color: #ffffff;">${formatCurrency(tx.amount)}</td>
                                                        <td style="text-align: right;">
                                                            <span class="badge badge-open" style="font-size: 0.65rem; background: rgba(99, 91, 255, 0.15); color: #a5b4fc; border-color: rgba(99, 91, 255, 0.3); display: inline-flex; align-items: center; gap: 0.25rem;">
                                                                <i data-lucide="shield-check" style="width: 12px; height: 12px;"></i> Stripe
                                                            </span>
                                                        </td>
                                                    </tr>
                                                `).join('')}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <!-- SUB-PESTAÑA 2: GESTIÓN DE TORNEOS -->
                            <div class="t-tab-content ${this.activeAdminTab === 'tournaments_mgmt' ? 'active' : ''}">
                                <!-- Mesa de Control y Cancelación de Torneos -->
                                <div class="glass-card" style="margin-bottom: 2rem;">
                                    <h3 style="font-family: var(--font-headings); font-size: 1.35rem; color: #ffffff; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
                                        <i data-lucide="settings" style="color: var(--color-primary);"></i>
                                        Mesa de Control y Cancelación de Torneos
                                    </h3>

                                    <div style="overflow-x: auto;">
                                        <table class="tournament-management-table">
                                            <thead>
                                                <tr>
                                                    <th style="text-align: left;">Nombre del Torneo</th>
                                                    <th>Categoría</th>
                                                    <th>Fecha</th>
                                                    <th>Inscripción</th>
                                                    <th>Inscritos</th>
                                                    <th>Estado</th>
                                                    <th style="text-align: right;">Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                ${tournaments.map(t => {
                                                    const isCancelado = t.status === 'Cancelado';

                                                    return `
                                                        <tr style="transition: background var(--transition-fast);" onmouseover="this.style.background='rgba(255,255,255,0.01)'" onmouseout="this.style.background='transparent'">
                                                            <td style="font-weight: 600; color: #ffffff; text-align: left;">${t.title}</td>
                                                            <td><span style="font-size: 0.8rem; color: var(--color-primary); font-weight: bold;">${t.category}</span></td>
                                                            <td style="color: var(--text-muted); font-size: 0.85rem;">${t.date}</td>
                                                            <td style="font-weight: bold;">${formatCurrency(t.price)}</td>
                                                            <td><span style="font-size: 0.85rem; font-weight: 600;">${t.couples.length} / ${t.maxCouples}</span></td>
                                                            <td>
                                                                <span class="badge ${isCancelado ? 'badge-full' : t.status === 'En Curso' ? 'badge-gold' : 'badge-open'}" style="font-size: 0.65rem;">
                                                                    ${t.status}
                                                                </span>
                                                            </td>
                                                            <td style="text-align: right; display: flex; gap: 0.5rem; justify-content: flex-end;">
                                                                ${!isCancelado && t.status !== 'Finalizado' ? `
                                                                    <button class="btn btn-secondary btn-sm cancel-t-btn" data-t-id="${t.id}" style="padding: 0.35rem 0.75rem; border-color: rgba(239, 68, 68, 0.4); color: #f87171; font-size: 0.8rem;">
                                                                        Cancelar
                                                                    </button>
                                                                ` : ''}
                                                                <button class="btn btn-secondary btn-sm delete-t-btn" data-t-id="${t.id}" style="padding: 0.35rem 0.5rem; color: var(--text-muted); font-size: 0.8rem; background: rgba(255,255,255,0.01);">
                                                                    <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    `;
                                                }).join('')}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <!-- Nuevo Torneo Express & Marcadores de Partidos -->
                                <div class="admin-layout">
                                    <!-- Crear Torneo -->
                                    <div class="glass-card admin-form-panel">
                                        <h3><i data-lucide="plus-circle"></i> Nuevo Torneo Express</h3>
                                        <form id="create-tournament-form">
                                            <div class="form-group">
                                                <label for="t-title">Nombre del Torneo</label>
                                                <input type="text" id="t-title" class="form-input" required placeholder="Ej. Torneo Express Portitxol">
                                            </div>
                                            <div class="form-row">
                                                <div class="form-group">
                                                    <label for="t-date">Fecha del Evento</label>
                                                    <input type="text" id="t-date" class="form-input" required placeholder="Ej. DOM. 15">
                                                </div>
                                                <div class="form-group">
                                                    <label for="t-category">Categoría Inicial</label>
                                                    <select id="t-category" class="form-select" required>
                                                        ${store.getCategories().map(cat => `<option value="${cat}">${cat}</option>`).join('')}
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-row">
                                                <div class="form-group">
                                                    <label for="t-price">Inscripción por Pareja (€)</label>
                                                    <input type="number" id="t-price" class="form-input" required placeholder="30">
                                                </div>
                                                <div class="form-group">
                                                    <label for="t-max">Parejas Límite</label>
                                                    <select id="t-max" class="form-select" required>
                                                        <option value="8">8 Parejas (3 Rondas)</option>
                                                        <option value="4">4 Parejas (2 Rondas)</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">
                                                <i data-lucide="check"></i> Crear Torneo Activo
                                            </button>
                                        </form>
                                    </div>

                                    <!-- Cargar Marcadores Rápidos -->
                                    <div class="glass-card admin-list-panel">
                                        <h3><i data-lucide="edit-3"></i> Marcadores de Partidos</h3>
                                        <div class="form-group">
                                            <label for="select-tournament-quick">Seleccionar Torneo</label>
                                            <select id="select-tournament-quick" class="form-select">
                                                <option value="">-- Selecciona --</option>
                                                ${tournaments.filter(t => t.status === 'En Curso' || t.status === 'Finalizado').map(t => `<option value="${t.id}">${t.title}</option>`).join('')}
                                            </select>
                                        </div>
                                        <div id="admin-quick-matches-container"></div>
                                    </div>

                                    <!-- Registrar Marcador (Tercer Panel) -->
                                    <div class="glass-card admin-score-panel" id="admin-score-panel">
                                        <h3><i data-lucide="edit-3"></i> Registrar Marcador</h3>
                                        <div id="admin-score-form-container">
                                            <p style="text-align: center; color: var(--text-muted); padding: 2rem 0;">
                                                Selecciona un partido de la lista para introducir sus resultados.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                <!-- SUB-PESTAÑA 3: CONFIGURAR CATEGORÍAS -->
                <div class="t-tab-content ${this.activeAdminTab === 'categories' ? 'active' : ''}">
                    <div class="glass-card" style="max-width: 800px; margin: 0 auto;">
                        <h3><i data-lucide="sliders"></i> Parámetros Deportivos de Categoría</h3>
                        <form id="sportelia-category-form">
                            <div class="form-group">
                                <label>Nombre de Categoría</label>
                                <input type="text" class="form-input" value="Mixto - Mixtos C">
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label>Tipo de Género</label>
                                    <select class="form-select">
                                        <option value="Mixto" selected>Mixto</option>
                                        <option value="Masculino">Masculino</option>
                                        <option value="Femenino">Femenino</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>Nivel de Competición</label>
                                    <select class="form-select">
                                        <option value="Mixtos C" selected>Mixtos C</option>
                                        <option value="Primera">Primera Categoría</option>
                                        <option value="Segunda">Segunda Categoría</option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group" style="margin-top: 1.5rem;">
                                <label>Divisiones Habilitadas en el Selector (Captura 5)</label>
                                <div class="glass-card" style="max-height: 150px; overflow-y: auto; padding: 1rem; background: rgba(0,0,0,0.2);">
                                    ${store.getCategories().map((cat, idx) => `
                                        <label style="display: flex; align-items: center; gap: 0.75rem; cursor: pointer; font-size: 0.9rem; margin-bottom: 0.6rem; padding: 0.25rem 0.5rem; transition: background var(--transition-fast); border-radius: 4px;" onmouseover="this.style.background='rgba(255,255,255,0.02)'" onmouseout="this.style.background='transparent'">
                                            <input type="checkbox" ${idx < 6 ? 'checked' : ''} style="width: 18px; height: 18px; accent-color: var(--color-primary); cursor: pointer;">
                                            <span style="color: var(--text-main); font-weight: 500;">${cat}</span>
                                        </label>
                                    `).join('')}
                                </div>
                            </div>

                            <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-top: 1.5rem;">
                                <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 1rem; background: rgba(255,255,255,0.01); border: 1px solid var(--border-color); border-radius: 8px;">
                                    <span>Individual</span>
                                    <input type="checkbox" checked style="width: 18px; height: 18px; accent-color: var(--color-primary);">
                                </div>
                                <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 1rem; background: rgba(255,255,255,0.01); border: 1px solid var(--border-color); border-radius: 8px;">
                                    <span>Forzar inscripciones abiertas</span>
                                    <input type="checkbox" checked style="width: 18px; height: 18px; accent-color: var(--color-primary);">
                                </div>
                                <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 1rem; background: rgba(255,255,255,0.01); border: 1px solid var(--border-color); border-radius: 8px;">
                                    <span>Activar opciones de disponibilidad</span>
                                    <input type="checkbox" checked style="width: 18px; height: 18px; accent-color: var(--color-primary);">
                                </div>
                            </div>
                            <button type="button" class="btn btn-primary" style="width: 100%; margin-top: 1.5rem;" onclick="showToast('Configuración deportiva guardada', 'success')">
                                Guardar Parámetros de Categoría
                            </button>
                        </form>
                    </div>
                </div>

                <!-- PANEL 4: SOLICITUDES APROBACIÓN -->
                <div class="t-tab-content ${this.activeAdminTab === 'approvals' ? 'active' : ''}">
                    <div class="glass-card">
                        <h3><i data-lucide="inbox"></i> Mesa de Aprobación de Solicitudes</h3>
                        <div class="t-tab-header" style="margin-bottom: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.05);">
                            <button class="t-tab-btn ${this.activeApprovalTab === 'todos' ? 'active' : ''}" data-approval-tab="todos">Todos</button>
                            <button class="t-tab-btn ${this.activeApprovalTab === 'pendientes' ? 'active' : ''}" data-approval-tab="pendientes">Pendientes</button>
                            <button class="t-tab-btn ${this.activeApprovalTab === 'aceptadas' ? 'active' : ''}" data-approval-tab="aceptadas">Aceptadas</button>
                            <button class="t-tab-btn ${this.activeApprovalTab === 'rechazadas' ? 'active' : ''}" data-approval-tab="rechazadas">Rechazadas</button>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 1rem;" id="approvals-list-container"></div>
                    </div>
                </div>

                <!-- PANEL 5: ROSTER -->
                <div class="t-tab-content ${this.activeAdminTab === 'directory' ? 'active' : ''}">
                    <div class="glass-card">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem;">
                            <h3><i data-lucide="users"></i> Directorio Visual de Participantes</h3>
                            <div class="search-input-wrapper" style="max-width: 300px; width: 100%;">
                                <i data-lucide="search"></i>
                                <input type="text" id="directory-search" class="form-input" placeholder="Buscar jugador..." value="${this.directoryQuery}">
                            </div>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 0.75rem;" id="directory-list-container"></div>
                    </div>
                </div>

                <!-- PANEL 6: PROGRAMAR PISTAS -->
                <div class="t-tab-content ${this.activeAdminTab === 'schedule' ? 'active' : ''}">
                    <div class="glass-card">
                        <h3><i data-lucide="calendar"></i> Programador de Horarios & Pistas</h3>
                        <div class="form-group" style="margin-bottom: 2rem;">
                            <label>Seleccionar Torneo</label>
                            <select id="select-tournament-schedule" class="form-select">
                                <option value="">-- Elige un torneo --</option>
                                ${tournaments.filter(t => t.status === 'En Curso' || t.status === 'Finalizado').map(t => `<option value="${t.id}">${t.title}</option>`).join('')}
                            </select>
                        </div>
                        <div id="schedule-matches-container"></div>
                    </div>
                </div>

                <!-- PANEL 7: GESTIÓN DE ROLES -->
                <div class="t-tab-content ${this.activeAdminTab === 'roles' ? 'active' : ''}">
                    <div class="glass-card">
                        <h3><i data-lucide="shield-check"></i> Gestión de Directores Deportivos</h3>
                        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 2rem;">
                            Como administrador general del club, puedes promover a otras cuentas para delegar privilegios de carga de resultados.
                        </p>
                        <div style="overflow-x: auto;">
                            <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
                                <thead>
                                    <tr style="border-bottom: 1px solid var(--border-color); color: var(--text-muted); font-size: 0.8rem; text-transform: uppercase;">
                                        <th style="padding: 1rem;">Nombre Propietario</th>
                                        <th style="padding: 1rem;">Usuario</th>
                                        <th style="padding: 1rem;">Rol</th>
                                        <th style="padding: 1rem; text-align: right;">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${store.getUsers().map(u => {
                                        const isSelf = u.username === currentUser.username;
                                        const isRoot = u.username === 'admin' || u.isSuper;
                                        const isAdmin = u.role === 'ADMIN';

                                        return `
                                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.02);">
                                                <td style="padding: 1rem; font-weight: 500; color: #ffffff;">${u.fullName}</td>
                                                <td style="padding: 1rem; color: var(--text-muted);"><code>@${u.username}</code></td>
                                                <td style="padding: 1rem;">
                                                    <span class="badge ${isAdmin ? 'badge-gold' : 'badge-silver'}">${u.role}</span>
                                                </td>
                                                <td style="padding: 1rem; text-align: right;">
                                                    ${isRoot ? `
                                                        <span style="font-size: 0.75rem; color: var(--text-muted);">Admin Raíz</span>
                                                    ` : isSelf ? `
                                                        <span style="font-size: 0.75rem; color: var(--color-primary);">Sesión Activa</span>
                                                    ` : `
                                                        <button class="btn ${isAdmin ? 'btn-secondary' : 'btn-primary'} btn-sm role-toggle-btn" data-username="${u.username}" data-to-admin="${!isAdmin}" style="padding: 0.35rem 0.85rem; font-size: 0.8rem;">
                                                            <span>${isAdmin ? 'Quitar Admin' : 'Hacer Admin'}</span>
                                                        </button>
                                                    `}
                                                </td>
                                            </tr>
                                        `;
                                    }).join('')}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- PANEL 8: MI PERFIL -->
                <div class="t-tab-content ${this.activeAdminTab === 'profile' ? 'active' : ''}">
                    ${this.renderProfileTab(currentUser)}
                </div>
            </div>
            </div><!-- /dashboard-view-content -->
            </main><!-- /dashboard-workspace -->
            </div><!-- /dashboard-layout-container -->
        `;

        this.renderApprovalsList();
        this.renderDirectoryList();

        // Autocargar primer torneo en curso/finalizado por defecto en los selectores correspondientes
        const activeTournaments = tournaments.filter(t => t.status === 'En Curso' || t.status === 'Finalizado');
        if (activeTournaments.length > 0) {
            const firstTId = activeTournaments[0].id;
            
            if (!this.selectedQuickTournamentId) {
                this.selectedQuickTournamentId = firstTId;
            }
            const selectQuick = document.getElementById('select-tournament-quick');
            if (selectQuick) {
                selectQuick.value = this.selectedQuickTournamentId;
                this.renderQuickMatchesList(this.selectedQuickTournamentId);
            }
            
            if (!this.selectedScheduleTournamentId) {
                this.selectedScheduleTournamentId = firstTId;
            }
            const selectSchedule = document.getElementById('select-tournament-schedule');
            if (selectSchedule) {
                selectSchedule.value = this.selectedScheduleTournamentId;
                this.renderScheduleMatchesList(this.selectedScheduleTournamentId);
            }
        }

        initLucide();
        this.bindAdminEvents();
    },

    bindAdminEvents() {
        const currentUser = store.getCurrentUser();
        const selectQuick = document.getElementById('select-tournament-quick');
        const selectSchedule = document.getElementById('select-tournament-schedule');
        const createForm = document.getElementById('create-tournament-form');
        const logoutBtn = document.getElementById('admin-logout-btn');

        // La navegación se realiza de forma nativa mediante rutas de hash dinámicas

        // 1. Cerrar Sesión
        const sidebarLogoutBtn = document.getElementById('admin-sidebar-logout-btn');
        if (sidebarLogoutBtn) {
            sidebarLogoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                store.logout();
                localStorage.setItem('showLogoutToast', 'true');
                window.location.hash = '#/';
                window.location.reload();
            });
        }

        const adminProfileBtn = document.getElementById('btn-admin-profile');
        if (adminProfileBtn) {
            adminProfileBtn.addEventListener('click', () => {
                window.location.hash = '#/admin/dashboard/profile';
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

                const res = store.updateUserProfile(currentUser.username, { fullName, password });
                if (res.error) {
                    showToast(res.error, 'error');
                } else {
                    showToast('Perfil actualizado correctamente', 'success');
                    this.render();
                }
            });
        }

        // 2. Crear Torneo
        if (createForm) {
            createForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const title = document.getElementById('t-title').value.trim();
                const date = document.getElementById('t-date').value.trim();
                const category = document.getElementById('t-category').value;
                const price = document.getElementById('t-price').value;
                const maxCouples = document.getElementById('t-max').value;

                store.createTournament({
                    title, date, category, price, maxCouples, status: 'Abierto'
                });

                showToast('¡Torneo Express creado exitosamente!', 'success');
                this.render();
            });
        }

        // 3. Carga rápida de marcadores
        if (selectQuick) {
            selectQuick.addEventListener('change', (e) => {
                this.selectedQuickTournamentId = e.target.value;
                this.renderQuickMatchesList(e.target.value);
                this.resetScoreFormContainer();
            });
        }

        // 4. Cargar lista de programación de pistas
        if (selectSchedule) {
            selectSchedule.addEventListener('change', (e) => {
                this.selectedScheduleTournamentId = e.target.value;
                this.renderScheduleMatchesList(e.target.value);
            });
        }

        // 5. Mesa de aprobaciones: tabs (TODOS, PENDIENTES, etc.)
        const approvalTabBtns = document.querySelectorAll('[data-approval-tab]');
        approvalTabBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.activeApprovalTab = e.currentTarget.dataset.approvalTab;
                
                document.querySelectorAll('[data-approval-tab]').forEach(b => b.classList.remove('active'));
                e.currentTarget.classList.add('active');

                this.renderApprovalsList();
            });
        });

        // 6. Buscador del Directorio
        const dirSearchInput = document.getElementById('directory-search');
        if (dirSearchInput) {
            dirSearchInput.addEventListener('input', (e) => {
                this.directoryQuery = e.target.value;
                this.renderDirectoryList();
            });
        }



        // 8. Elevación de roles de Admin
        const roleBtns = document.querySelectorAll('.role-toggle-btn');
        roleBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const u = e.currentTarget.dataset.username;
                const makeAdmin = e.currentTarget.dataset.toAdmin === 'true';

                const res = store.setAdminRole(u, makeAdmin);
                if (res.error) showToast(res.error, 'error');
                else {
                    showToast(`Rol de @${u} actualizado correctamente`, 'success');
                    this.render();
                }
            });
        });

        // 9. Cancelar e eliminar torneos
        const cancelBtns = document.querySelectorAll('.cancel-t-btn');
        cancelBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.dataset.tId;
                if (confirm('¿Estás seguro de que deseas cancelar este torneo? Los cuadros y horarios quedarán bloqueados.')) {
                    store.cancelTournament(id);
                    showToast('Torneo cancelado correctamente', 'warning');
                    this.render();
                }
            });
        });

        const deleteBtns = document.querySelectorAll('.delete-t-btn');
        deleteBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.dataset.tId;
                if (confirm('¿Estás seguro de que deseas eliminar este torneo del sistema de forma permanente? Esta acción no se puede deshacer.')) {
                    store.deleteTournament(id);
                    showToast('Torneo eliminado del sistema', 'error');
                    this.render();
                }
            });
        });
    },

    renderApprovalsList() {
        const container = document.getElementById('approvals-list-container');
        if (!container) return;

        const regs = store.getRegistrations();
        const filtered = regs.filter(r => {
            if (this.activeApprovalTab === 'todos') return true;
            return r.status.toLowerCase() === this.activeApprovalTab.toLowerCase();
        });

        if (filtered.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 2.5rem; color: var(--text-muted); font-size: 0.95rem;">
                    No hay solicitudes en la bandeja "${this.activeApprovalTab.toUpperCase()}".
                </div>
            `;
            return;
        }

        container.innerHTML = filtered.map((r, index) => {
            const isPending = r.status === 'PENDIENTE';
            
            const u1 = store.getUsers().find(u => 
                (u.fullName && u.fullName.toLowerCase() === r.player1.toLowerCase()) || 
                (u.username && u.username.toLowerCase() === r.player1.toLowerCase())
            );
            const u2 = store.getUsers().find(u => 
                (u.fullName && u.fullName.toLowerCase() === r.player2.toLowerCase()) || 
                (u.username && u.username.toLowerCase() === r.player2.toLowerCase())
            );
            
            const prefs1 = u1 ? u1.preferences : null;
            const prefs2 = u2 ? u2.preferences : null;

            const formatPrefs = (name, prefs) => {
                if (!prefs) return '';
                return `
                    <div style="margin-top: 0.35rem; display: flex; flex-wrap: wrap; gap: 0.35rem; font-size: 0.7rem; align-items: center; background: rgba(255,255,255,0.02); padding: 0.25rem 0.5rem; border-radius: 4px; border: 1px solid rgba(255,255,255,0.03);">
                        <span style="color: #ffffff; font-weight: 600; font-size: 0.75rem;">Pref. ${name}:</span>
                        <span style="color: var(--color-primary);">Lado: ${prefs.preferredSide}</span> | 
                        <span style="color: #a39eff;">Nivel: ${prefs.level}</span> | 
                        <span style="color: #60a5fa;">Horario: ${prefs.availability}</span>
                        ${prefs.preferredPartner ? ` | <span style="color: #fbbf24;">Compañero Pref: ${prefs.preferredPartner}</span>` : ''}
                    </div>
                `;
            };

            const prefsSummary = `
                ${formatPrefs(r.player1, prefs1)}
                ${formatPrefs(r.player2, prefs2)}
            `;

            return `
                <div class="glass-card" style="display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.5rem; border-left: 4px solid ${r.status === 'ACEPTADA' ? 'var(--color-success)' : r.status === 'RECHAZADA' ? 'var(--color-error)' : 'var(--color-primary)'}; background: rgba(255,255,255,0.01);">
                    <div style="display: flex; flex-direction: column; gap: 0.25rem; width: 100%;">
                        <span style="font-weight: 700; color: #ffffff; font-size: 0.95rem;">
                            #${index + 1} ${r.player1} - ${r.player2}
                        </span>
                        <div style="display: flex; flex-wrap: wrap; gap: 1rem; font-size: 0.8rem; color: var(--text-muted);">
                            <span>Categoría: <strong style="color: var(--color-primary);">${r.category}</strong></span>
                            <span>Creada por: <code>${r.creator}</code></span>
                            <span>Disponibilidad: <strong style="color: #ffffff;">${r.availability}</strong></span>
                        </div>
                        ${prefsSummary}
                    </div>

                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                        ${isPending ? `
                            <button class="btn btn-primary approve-reg-btn" data-reg-id="${r.id}" style="background: var(--color-success); border-color: var(--color-success); color: #ffffff; padding: 0.4rem; border-radius: 50%; box-shadow: 0 4px 10px rgba(16,185,129,0.25);">
                                <i data-lucide="check-circle" style="width: 18px; height: 18px;"></i>
                            </button>
                            <button class="btn btn-secondary reject-reg-btn" data-reg-id="${r.id}" style="padding: 0.4rem; border-radius: 50%; border-color: rgba(239, 68, 68, 0.4); color: #f87171;">
                                <i data-lucide="x" style="width: 18px; height: 18px;"></i>
                            </button>
                        ` : `
                            <span class="badge ${r.status === 'ACEPTADA' ? 'badge-open' : 'badge-full'}" style="font-size: 0.7rem;">
                                ${r.status}
                            </span>
                        `}
                    </div>
                </div>
            `;
        }).join('');

        initLucide();

        const approveBtns = container.querySelectorAll('.approve-reg-btn');
        approveBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const regId = e.currentTarget.dataset.regId;
                const res = store.updateRegistrationStatus(regId, 'ACEPTADA');
                if (res.error) showToast(res.error, 'error');
                else {
                    showToast(`Solicitud de ${res.registration.player1} aceptada`, 'success');
                    this.renderApprovalsList();
                    this.renderDirectoryList();
                }
            });
        });

        const rejectBtns = container.querySelectorAll('.reject-reg-btn');
        rejectBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const regId = e.currentTarget.dataset.regId;
                const res = store.updateRegistrationStatus(regId, 'RECHAZADA');
                if (res.error) showToast(res.error, 'error');
                else {
                    showToast('Solicitud rechazada', 'info');
                    this.renderApprovalsList();
                }
            });
        });
    },

    renderDirectoryList() {
        const container = document.getElementById('directory-list-container');
        if (!container) return;

        const playersMap = [];

        store.getTournaments().forEach(t => {
            t.couples.forEach(c => {
                playersMap.push({
                    name: c.player1,
                    partner: c.player2,
                    phone: c.phone1,
                    category: t.category,
                    avatar: t.category.includes('Oro') || t.category.includes('Primera') ? 'A' : t.category.includes('Plata') || t.category.includes('Segunda') ? 'B' : 'C'
                });
                playersMap.push({
                    name: c.player2,
                    partner: c.player1,
                    phone: c.phone2,
                    category: t.category,
                    avatar: t.category.includes('Oro') || t.category.includes('Primera') ? 'A' : t.category.includes('Plata') || t.category.includes('Segunda') ? 'B' : 'C'
                });
            });
        });

        store.getRegistrations().forEach(r => {
            if (r.status === 'PENDIENTE') {
                playersMap.push({
                    name: r.player1,
                    partner: r.player2,
                    phone: r.phone1,
                    category: r.category,
                    avatar: r.avatar1 || 'C'
                });
                playersMap.push({
                    name: r.player2,
                    partner: r.player1,
                    phone: r.phone2,
                    category: r.category,
                    avatar: r.avatar2 || 'C'
                });
            }
        });

        const query = this.directoryQuery.toLowerCase().trim();
        const filtered = playersMap.filter(p => p.name.toLowerCase().includes(query) || p.partner.toLowerCase().includes(query));

        if (filtered.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 2.5rem; color: var(--text-muted); font-size: 0.95rem;">
                    No se encontraron jugadores que coincidan con la búsqueda.
                </div>
            `;
            return;
        }

        container.innerHTML = filtered.map(p => {
            const userObj = store.getUsers().find(u => 
                (u.fullName && u.fullName.toLowerCase() === p.name.toLowerCase()) || 
                (u.username && u.username.toLowerCase() === p.name.toLowerCase())
            );
            const prefs = userObj ? userObj.preferences : null;
            const prefsHtml = prefs ? `
                <div style="margin-top: 0.35rem; display: flex; flex-wrap: wrap; gap: 0.35rem; font-size: 0.7rem;">
                    <span class="badge" style="background: rgba(204,255,0,0.06); color: var(--color-primary); border: 1px solid rgba(204,255,0,0.15); text-transform: none; padding: 0.15rem 0.4rem; border-radius: 4px; font-weight: normal; letter-spacing: 0;">Lado: ${prefs.preferredSide}</span>
                    <span class="badge" style="background: rgba(99,91,255,0.06); color: #a39eff; border: 1px solid rgba(99,91,255,0.15); text-transform: none; padding: 0.15rem 0.4rem; border-radius: 4px; font-weight: normal; letter-spacing: 0;">Nivel: ${prefs.level}</span>
                    <span class="badge" style="background: rgba(59,130,246,0.06); color: #60a5fa; border: 1px solid rgba(59,130,246,0.15); text-transform: none; padding: 0.15rem 0.4rem; border-radius: 4px; font-weight: normal; letter-spacing: 0;">Horario: ${prefs.availability}</span>
                    ${prefs.preferredPartner ? `<span class="badge" style="background: rgba(245,158,11,0.06); color: #fbbf24; border: 1px solid rgba(245,158,11,0.15); text-transform: none; padding: 0.15rem 0.4rem; border-radius: 4px; font-weight: normal; letter-spacing: 0;">Pref: ${prefs.preferredPartner}</span>` : ''}
                </div>
            ` : '';

            return `
                <div class="glass-card" style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 1.5rem; border: none; border-bottom: 1px solid rgba(255,255,255,0.03); background: transparent;">
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <div style="background: var(--color-primary); color: var(--text-dark); width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 0.95rem;">
                            ${p.avatar}
                        </div>
                        <div style="display: flex; flex-direction: column;">
                            <span style="font-weight: 600; color: #ffffff; font-size: 0.95rem;">${p.name}</span>
                            <span style="font-size: 0.75rem; color: var(--text-muted);">Compañero/a: <strong>${p.partner}</strong></span>
                            ${prefsHtml}
                        </div>
                    </div>

                    <div style="display: flex; align-items: center; gap: 1rem; color: #3b82f6;">
                        <a href="tel:${p.phone}" title="Llamar" style="color: #60a5fa; display: flex;"><i data-lucide="phone" style="width: 16px; height: 16px;"></i></a>
                        <a href="javascript:void(0)" title="Ver Perfil" style="color: #60a5fa; display: flex;"><i data-lucide="user" style="width: 16px; height: 16px;"></i></a>
                        <a href="javascript:void(0)" title="Logros" style="color: #fbbf24; display: flex;"><i data-lucide="award" style="width: 16px; height: 16px;"></i></a>
                        <span style="color: var(--color-success); display: flex;" title="Inscripción Verificada"><i data-lucide="check-circle" style="width: 16px; height: 16px;"></i></span>
                    </div>
                </div>
            `;
        }).join('');

        initLucide();
    },

    renderScheduleMatchesList(tournamentId) {
        const container = document.getElementById('schedule-matches-container');
        if (!container) return;

        if (!tournamentId) {
            container.innerHTML = `
                <p style="text-align: center; color: var(--text-muted); padding: 3rem 0;">Selecciona un torneo para programar las pistas y las horas de juego.</p>
            `;
            initLucide();
            return;
        }

        const t = store.getTournament(tournamentId);
        if (!t || t.matches.length === 0) {
            container.innerHTML = `
                <p style="text-align: center; color: var(--text-muted); padding: 3rem 0;">No se han generado cruces ni partidos para este torneo todavía.</p>
            `;
            initLucide();
            return;
        }

        const getCoupleNames = (coupleId) => {
            const couple = t.couples.find(c => c.id === coupleId);
            if (!couple) return 'Por definir';
            return `${couple.player1} / ${couple.player2}`;
        };

        const roundNames = t.maxCouples === 8 
            ? ['Cuartos de final', 'Semifinales', 'Gran Final']
            : ['Semifinales', 'Gran Final'];

        const courts = [
            'PISTA 1', 'PISTA 2', 'PISTA 3', 'PISTA 4', 'PISTA 5', 
            'PISTA 6', 'PISTA 7', 'PISTA 8', 'PISTA CENTRAL'
        ];

        const occupiedMap = {};
        t.matches.forEach(m => {
            if (m.court) {
                const courtUpper = m.court.toUpperCase().trim();
                occupiedMap[courtUpper] = m;
            }
        });

        const columns = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'P1', 'P2', 'P3'];
        const hours = ['09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'];

        const colToCourtName = (colVal) => {
            if (colVal === '10') return 'PISTA CENTRAL';
            if (['P1', 'P2', 'P3'].includes(colVal)) return colVal;
            return 'PISTA ' + colVal;
        };

        const mapCourtToCol = (courtStr) => {
            if (!courtStr) return null;
            const clean = courtStr.toUpperCase().trim();
            if (clean.includes('PISTA 1') && !clean.includes('10')) return '1';
            if (clean.includes('PISTA 2')) return '2';
            if (clean.includes('PISTA 3')) return '3';
            if (clean.includes('PISTA 4')) return '4';
            if (clean.includes('PISTA 5')) return '5';
            if (clean.includes('PISTA 6')) return '6';
            if (clean.includes('PISTA 7')) return '7';
            if (clean.includes('PISTA 8')) return '8';
            if (clean.includes('PISTA 9')) return '9';
            if (clean.includes('PISTA 10')) return '10';
            if (clean.includes('PISTA CENTRAL')) return '10';
            if (clean.includes('P1')) return 'P1';
            if (clean.includes('P2')) return 'P2';
            if (clean.includes('P3')) return 'P3';
            
            const matchNum = clean.match(/\d+/);
            if (matchNum) return matchNum[0];
            return null;
        };

        const mapTimeToRow = (timeStr) => {
            if (!timeStr) return null;
            return timeStr.trim().split(':')[0];
        };

        const refDate = (t.matches && t.matches.length > 0 && t.matches[0].date) ? t.matches[0].date : 'DOM. 31';
        const activeHour = this.selectedGridCell ? this.selectedGridCell.hour + ':00' : '09:00';

        container.innerHTML = `
            <style>
                .clickable-grid-cell {
                    cursor: pointer !important;
                    transition: transform 0.15s ease, background-color 0.15s ease !important;
                }
                .clickable-grid-cell:hover {
                    transform: scale(1.05);
                    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3) !important;
                    z-index: 10;
                    position: relative;
                }
                .active-grid-cell {
                    outline: 2px solid var(--color-primary) !important;
                    outline-offset: -2px;
                    box-shadow: 0 0 15px var(--border-glow) !important;
                }
            </style>

            <!-- CUADRANTE HORARIO GENERAL DE OCUPACIÓN -->
            <div class="glass-card" style="margin-bottom: 2rem; overflow: hidden;">
                <h3 style="font-family: var(--font-headings); font-size: 1.35rem; color: #ffffff; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem; flex-wrap: wrap; gap: 1rem;">
                    <span style="display: flex; align-items: center; gap: 0.5rem;">
                        <i data-lucide="grid" style="color: var(--color-primary);"></i>
                        Cuadrante de Ocupación de Pistas (Haz clic en una celda para editar o bloquear)
                    </span>
                    <span style="display: flex; gap: 1rem; font-size: 0.75rem; font-weight: normal;">
                        <span style="display: flex; align-items: center; gap: 0.25rem;"><span style="display: inline-block; width: 10px; height: 10px; background: rgba(245, 158, 11, 0.6); border-radius: 50%;"></span> Bloqueada</span>
                        <span style="display: flex; align-items: center; gap: 0.25rem;"><span style="display: inline-block; width: 10px; height: 10px; background: rgba(239, 68, 68, 0.85); border-radius: 50%;"></span> Ocupada</span>
                        <span style="display: flex; align-items: center; gap: 0.25rem;"><span style="display: inline-block; width: 10px; height: 10px; background: rgba(16, 185, 129, 0.85); border-radius: 50%;"></span> Disponible</span>
                    </span>
                </h3>
                <div style="overflow-x: auto;">
                    <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.75rem; min-width: 800px; border: 1px solid var(--border-color);">
                        <thead>
                            <tr style="background: rgba(255,255,255,0.02); color: var(--text-main); font-weight: bold; border-bottom: 1px solid var(--border-color);">
                                <th style="padding: 0.6rem; border-right: 1px solid var(--border-color); width: 60px;">Hora</th>
                                ${columns.map(col => `<th style="padding: 0.6rem; border-right: 1px solid var(--border-color);">${col}</th>`).join('')}
                            </tr>
                        </thead>
                        <tbody>
                            ${hours.map(hour => {
                                return `
                                    <tr style="border-bottom: 1px solid var(--border-color);">
                                        <td style="padding: 0.6rem; font-weight: bold; background: rgba(255,255,255,0.01); border-right: 1px solid var(--border-color); color: var(--text-main);">${hour}:00</td>
                                        ${columns.map(col => {
                                            const occupiedMatch = t.matches.find(m => {
                                                const mCol = mapCourtToCol(m.court);
                                                const mRow = mapTimeToRow(m.time);
                                                return mCol === col && mRow === hour;
                                            });

                                            const isOccupied = !!occupiedMatch;
                                            const courtName = colToCourtName(col);
                                            const isBlocked = store.isSlotBlocked(courtName, hour + ':00', refDate);
                                            
                                            let bg = 'rgba(16, 185, 129, 0.85)';
                                            let icon = 'check';
                                            let opacity = '0.6';
                                            let tooltip = 'Disponible';
                                            
                                            if (isBlocked) {
                                                bg = 'rgba(245, 158, 11, 0.6)';
                                                icon = 'ban';
                                                opacity = '1';
                                                tooltip = 'BLOQUEADA (Mantenimiento)';
                                            } else if (isOccupied) {
                                                bg = 'rgba(239, 68, 68, 0.85)';
                                                icon = 'lock';
                                                opacity = '1';
                                                tooltip = `${getCoupleNames(occupiedMatch.team1Id)} vs ${getCoupleNames(occupiedMatch.team2Id)} (${occupiedMatch.stage || 'Partido'})`;
                                            }

                                            const isActive = this.selectedGridCell && this.selectedGridCell.col === col && this.selectedGridCell.hour === hour;
                                            const cellClass = `clickable-grid-cell ${isActive ? 'active-grid-cell' : ''}`;

                                            return `
                                                <td class="${cellClass}" 
                                                    data-court="${courtName}" 
                                                    data-time="${hour}:00" 
                                                    data-date="${refDate}" 
                                                    data-occupied="${isOccupied}" 
                                                    data-match-id="${isOccupied ? occupiedMatch.id : ''}"
                                                    data-match-details="${isOccupied ? `${getCoupleNames(occupiedMatch.team1Id)} vs ${getCoupleNames(occupiedMatch.team2Id)}` : ''}"
                                                    data-blocked="${isBlocked}"
                                                    data-col="${col}"
                                                    data-hour="${hour}"
                                                    style="padding: 0.6rem; background: ${bg}; border-right: 1px solid var(--border-color); color: #ffffff;" 
                                                    title="${tooltip}">
                                                    <div style="display: flex; align-items: center; justify-content: center; opacity: ${opacity};">
                                                        <i data-lucide="${icon}" style="width: 10px; height: 10px;"></i>
                                                    </div>
                                                </td>
                                            `;
                                        }).join('')}
                                    </tr>
                                `;
                            }).join('')}
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- PANEL DE CONTROL EDITABLE DEL CUADRANTE (NUEVO) -->
            <div id="quadrant-editor-panel" class="glass-card" style="margin-bottom: 2rem; border-color: rgba(204, 255, 0, 0.15); display: ${this.selectedGridCell ? 'block' : 'none'}; animation: fadeInEffect var(--transition-fast) forwards;">
                <h3 style="font-family: var(--font-headings); font-size: 1.25rem; color: #ffffff; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">
                    <i data-lucide="edit-3" style="color: var(--color-primary);"></i>
                    Control Rápido de Pista: <span id="editor-selected-court" style="color: var(--color-primary);">${this.selectedGridCell ? this.selectedGridCell.court : ''}</span> - <span id="editor-selected-time" style="color: #60a5fa;">${this.selectedGridCell ? this.selectedGridCell.time : ''}</span>
                </h3>
                
                <div style="display: flex; flex-wrap: wrap; gap: 1.5rem; align-items: center; justify-content: space-between;">
                    <div style="display: flex; flex-direction: column; gap: 0.25rem;">
                        <div style="font-size: 0.85rem; color: var(--text-muted);">
                            Estado actual: <strong id="editor-cell-status" style="color: #ffffff;">Disponible</strong>
                        </div>
                        <div id="editor-cell-details" style="font-size: 0.8rem; color: var(--text-muted);">Pista libre para programar encuentros.</div>
                    </div>
                    
                    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
                        <!-- Acción A: Asignar Partido -->
                        <div id="editor-action-assign-container" style="display: flex; align-items: center; gap: 0.5rem;">
                            <select id="editor-select-match" class="form-select" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; width: 250px; margin: 0;">
                                <option value="">-- Asignar Partido --</option>
                                ${t.matches.filter(m => !m.court || m.court === '').map(m => `
                                    <option value="${m.id}">${roundNames[m.round]} #${m.matchIndex + 1} (${getCoupleNames(m.team1Id)} vs ${getCoupleNames(m.team2Id)})</option>
                                `).join('')}
                            </select>
                            <button id="btn-editor-assign" class="btn btn-primary btn-sm" style="height: 36px; padding: 0 1rem; font-size: 0.85rem;" data-court="${this.selectedGridCell ? this.selectedGridCell.court : ''}" data-time="${this.selectedGridCell ? this.selectedGridCell.time : ''}" data-date="${this.selectedGridCell ? this.selectedGridCell.date : ''}">Programar</button>
                        </div>
                        
                        <!-- Acción B: Liberar Partido -->
                        <button id="btn-editor-free" class="btn btn-secondary btn-sm" style="border-color: rgba(239, 68, 68, 0.4); color: #f87171; height: 36px; display: none;">
                            <i data-lucide="x-circle" style="width: 16px; height: 16px;"></i> Liberar Pista
                        </button>
                        
                        <!-- Acción C: Bloquear/Desbloquear Celda -->
                        <button id="btn-editor-toggle-block" class="btn btn-secondary btn-sm" style="height: 36px; border-color: rgba(245, 158, 11, 0.4); color: #fbbf24;" data-court="${this.selectedGridCell ? this.selectedGridCell.court : ''}" data-time="${this.selectedGridCell ? this.selectedGridCell.time : ''}" data-date="${this.selectedGridCell ? this.selectedGridCell.date : ''}">
                            <i data-lucide="ban" style="width: 16px; height: 16px;"></i> Bloquear Pista
                        </button>
                    </div>
                </div>
            </div>

            <!-- MAPA VISUAL DE PISTAS -->
            <div class="glass-card" style="margin-bottom: 2rem;">
                <h3 style="font-family: var(--font-headings); font-size: 1.35rem; color: #ffffff; margin-bottom: 0.5rem; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem; flex-wrap: wrap; gap: 1rem;">
                    <span style="display: flex; align-items: center; gap: 0.5rem;">
                        <i data-lucide="map" style="color: var(--color-primary);"></i>
                        Ocupación de Pistas (${activeHour})
                    </span>
                    <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: normal;">
                        Hora de referencia activa en el cuadrante: <strong style="color: var(--color-primary);">${activeHour}</strong>
                    </span>
                </h3>
                <div class="courts-grid-map">
                    ${courts.map(c => {
                        const match = occupiedMap[c];
                        const isOccupied = !!match;
                        const isBlocked = store.isSlotBlocked(c, activeHour, refDate);
                        
                        if (isBlocked) {
                            return `
                                <div class="court-map-card occupied" style="background: rgba(245, 158, 11, 0.05); border-color: rgba(245, 158, 11, 0.35);">
                                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                        <strong style="color: #ffffff; font-size: 1.05rem;">${c}</strong>
                                        <span class="court-badge-status" style="background: rgba(245,158,11,0.15); color: #fbbf24; border: 1px solid rgba(245,158,11,0.3); font-size: 0.65rem; padding: 0.15rem 0.5rem; border-radius: 4px; display: inline-flex; align-items: center; gap: 0.25rem;">
                                            <i data-lucide="ban" style="width: 10px; height: 10px;"></i> Bloqueada
                                        </span>
                                    </div>
                                    <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.25rem;">Pista inoperativa en horario seleccionado por mantenimiento.</p>
                                    <div class="court-net-line" style="background: rgba(245,158,11,0.25);"></div>
                                    <span style="font-size: 0.75rem; color: #fbbf24; font-weight: bold; display: flex; align-items: center; gap: 0.25rem;">
                                        <i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i> No disponible
                                    </span>
                                </div>
                            `;
                        } else if (isOccupied) {
                            const t1 = getCoupleNames(match.team1Id);
                            const t2 = getCoupleNames(match.team2Id);
                            return `
                                <div class="court-map-card occupied">
                                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                        <strong style="color: #ffffff; font-size: 1.05rem;">${c}</strong>
                                        <span class="court-badge-status occupied">
                                            <i data-lucide="lock" style="width: 10px; height: 10px;"></i> Ocupada
                                        </span>
                                    </div>
                                    <div style="font-size: 0.85rem; color: var(--text-muted);">
                                        <div>Hora: <strong style="color: #ffffff;">${match.time || '—'}</strong></div>
                                        <div>Fase: <strong>${match.stage || '—'}</strong></div>
                                    </div>
                                    <div class="court-net-line"></div>
                                    <div style="font-size: 0.8rem; font-weight: 600; color: var(--color-primary); display: flex; flex-direction: column; gap: 0.25rem;">
                                        <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${t1}">${t1}</span>
                                        <span style="color: var(--text-muted); font-size: 0.7rem; text-align: center;">vs</span>
                                        <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${t2}">${t2}</span>
                                    </div>
                                </div>
                            `;
                        } else {
                            return `
                                <div class="court-map-card available">
                                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                        <strong style="color: #ffffff; font-size: 1.05rem;">${c}</strong>
                                        <span class="court-badge-status available">
                                            <i data-lucide="check" style="width: 10px; height: 10px;"></i> Disponible
                                        </span>
                                    </div>
                                    <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.25rem;">No hay partidos programados en esta pista.</p>
                                    <div class="court-net-line"></div>
                                    <span style="font-size: 0.75rem; color: var(--color-success); font-weight: bold; display: flex; align-items: center; gap: 0.25rem;">
                                        <i data-lucide="calendar" style="width: 14px; height: 14px;"></i> Pista Libre
                                    </span>
                                </div>
                            `;
                        }
                    }).join('')}
                </div>
            </div>

            <!-- MESA DE ASIGNACIÓN -->
            <div class="glass-card" style="margin-bottom: 1.5rem;">
                <h3 style="font-family: var(--font-headings); font-size: 1.35rem; color: #ffffff; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i data-lucide="calendar-plus" style="color: var(--color-primary);"></i>
                    Asignación de Horarios, Pistas & Fases
                </h3>
                <p style="color: var(--text-muted); font-size: 0.9rem;">Configura los datos del partido y haz clic en "Programar" para actualizar el mapa superior.</p>
            </div>

            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
                ${t.matches.map(m => {
                    const t1 = getCoupleNames(m.team1Id);
                    const t2 = getCoupleNames(m.team2Id);

                    return `
                        <div class="glass-card" style="padding: 1.25rem; display: flex; flex-direction: column; gap: 1rem;">
                            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.5rem; font-size: 0.8rem; color: var(--text-muted);">
                                <strong>${roundNames[m.round]} - PARTIDO #${m.matchIndex + 1}</strong>
                                <span>Cruces: ${t1} VS ${t2}</span>
                            </div>

                            <div class="form-row" style="grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 0.75rem;">
                                <div class="form-group" style="margin: 0;">
                                    <label style="font-size: 0.7rem;">Código División</label>
                                    <input type="text" id="sched-code-${m.id}" class="form-input" style="padding: 0.5rem;" value="${m.divisionCode || 'M3'}">
                                </div>
                                <div class="form-group" style="margin: 0;">
                                    <label style="font-size: 0.7rem;">Ronda / Grupo</label>
                                    <input type="text" id="sched-stage-${m.id}" class="form-input" style="padding: 0.5rem;" value="${m.stage || 'Grupo 1'}">
                                </div>
                                <div class="form-group" style="margin: 0;">
                                    <label style="font-size: 0.7rem;">Fecha (Día)</label>
                                    <input type="text" id="sched-date-${m.id}" class="form-input" style="padding: 0.5rem;" value="${m.date || 'DOM. 31'}">
                                </div>
                                <div class="form-group" style="margin: 0;">
                                    <label style="font-size: 0.7rem;">Hora Partido</label>
                                    <input type="text" id="sched-time-${m.id}" class="form-input" style="padding: 0.5rem;" value="${m.time || '09:00'}">
                                </div>
                                <div class="form-group" style="margin: 0;">
                                    <label style="font-size: 0.7rem;">Pista Asignada</label>
                                    <input type="text" id="sched-court-${m.id}" class="form-input" style="padding: 0.5rem;" value="${m.court || 'PISTA 5'}">
                                </div>
                                
                                <div style="display: flex; align-items: flex-end;">
                                    <button class="btn btn-primary save-schedule-btn" data-match-id="${m.id}" style="width: 100%; padding: 0.6rem; font-size: 0.85rem; background: #635bff; border-color: #635bff;">
                                        <i data-lucide="calendar-plus"></i> Programar
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;

        initLucide();

        const saveBtns = container.querySelectorAll('.save-schedule-btn');
        saveBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const matchId = e.currentTarget.dataset.matchId;
                const divisionCode = document.getElementById(`sched-code-${matchId}`).value.trim();
                const stage = document.getElementById(`sched-stage-${matchId}`).value.trim();
                const date = document.getElementById(`sched-date-${matchId}`).value.trim();
                const time = document.getElementById(`sched-time-${matchId}`).value.trim();
                const court = document.getElementById(`sched-court-${matchId}`).value.trim();

                const res = store.updateMatchSchedule(tournamentId, matchId, {
                    date, time, court, divisionCode, stage
                });

                if (res.error) {
                    showToast(res.error, 'error');
                } else {
                    showToast('¡Horario, División y Pista actualizados!', 'success');
                    this.renderScheduleMatchesList(tournamentId);
                }
            });
        });

        // --- EVENTOS DEL CUADRANTE EDITABLE ---
        const cells = container.querySelectorAll('.clickable-grid-cell');
        const editorPanel = document.getElementById('quadrant-editor-panel');
        const editorSelectedCourt = document.getElementById('editor-selected-court');
        const editorSelectedTime = document.getElementById('editor-selected-time');
        const editorCellStatus = document.getElementById('editor-cell-status');
        const editorCellDetails = document.getElementById('editor-cell-details');
        
        const editorAssignContainer = document.getElementById('editor-action-assign-container');
        const editorSelectMatch = document.getElementById('editor-select-match');
        const btnEditorAssign = document.getElementById('btn-editor-assign');
        const btnEditorFree = document.getElementById('btn-editor-free');
        const btnEditorToggleBlock = document.getElementById('btn-editor-toggle-block');

        // Si hay una celda previamente seleccionada, actualizar la información en pantalla
        if (this.selectedGridCell && editorPanel) {
            const court = this.selectedGridCell.court;
            const time = this.selectedGridCell.time;
            const date = this.selectedGridCell.date;
            
            // Buscar si la celda activa en el DOM es ocupada o bloqueada
            const targetCell = Array.from(cells).find(c => c.dataset.court === court && c.dataset.time === time);
            if (targetCell) {
                const isOccupied = targetCell.dataset.occupied === 'true';
                const isBlocked = targetCell.dataset.blocked === 'true';
                const matchId = targetCell.dataset.matchId;
                const matchDetails = targetCell.dataset.matchDetails;

                // Configurar datos en los botones
                if (btnEditorAssign) {
                    btnEditorAssign.dataset.court = court;
                    btnEditorAssign.dataset.time = time;
                    btnEditorAssign.dataset.date = date;
                }
                if (btnEditorFree) {
                    btnEditorFree.dataset.matchId = matchId;
                }
                if (btnEditorToggleBlock) {
                    btnEditorToggleBlock.dataset.court = court;
                    btnEditorToggleBlock.dataset.time = time;
                    btnEditorToggleBlock.dataset.date = date;
                }

                // Ajustar UI según estado
                if (isBlocked) {
                    if (editorCellStatus) {
                        editorCellStatus.textContent = 'Bloqueada (Mantenimiento)';
                        editorCellStatus.style.color = '#fbbf24';
                    }
                    if (editorCellDetails) editorCellDetails.textContent = 'Esta pista está marcada como no operativa en esta hora.';
                    if (editorAssignContainer) editorAssignContainer.style.display = 'none';
                    if (btnEditorFree) btnEditorFree.style.display = 'none';
                    if (btnEditorToggleBlock) {
                        btnEditorToggleBlock.innerHTML = '<i data-lucide="unlock" style="width: 16px; height: 16px;"></i> Desbloquear Pista';
                    }
                } else if (isOccupied) {
                    if (editorCellStatus) {
                        editorCellStatus.textContent = 'Ocupada';
                        editorCellStatus.style.color = 'var(--color-error)';
                    }
                    if (editorCellDetails) editorCellDetails.textContent = `Partido: ${matchDetails}`;
                    if (editorAssignContainer) editorAssignContainer.style.display = 'none';
                    if (btnEditorFree) btnEditorFree.style.display = 'inline-flex';
                    if (btnEditorToggleBlock) {
                        btnEditorToggleBlock.innerHTML = '<i data-lucide="lock" style="width: 16px; height: 16px;"></i> Bloquear Pista';
                    }
                } else {
                    if (editorCellStatus) {
                        editorCellStatus.textContent = 'Disponible';
                        editorCellStatus.style.color = 'var(--color-success)';
                    }
                    if (editorCellDetails) editorCellDetails.textContent = 'Pista libre para programar encuentros.';
                    if (editorAssignContainer) editorAssignContainer.style.display = 'flex';
                    if (btnEditorFree) btnEditorFree.style.display = 'none';
                    if (btnEditorToggleBlock) {
                        btnEditorToggleBlock.innerHTML = '<i data-lucide="lock" style="width: 16px; height: 16px;"></i> Bloquear Pista';
                    }
                }
            }
            initLucide();
        }

        cells.forEach(cell => {
            cell.addEventListener('click', (e) => {
                const td = e.currentTarget;
                
                cells.forEach(c => c.classList.remove('active-grid-cell'));
                td.classList.add('active-grid-cell');
                
                const court = td.dataset.court;
                const time = td.dataset.time;
                const date = td.dataset.date;
                const isOccupied = td.dataset.occupied === 'true';
                const isBlocked = td.dataset.blocked === 'true';
                const matchId = td.dataset.matchId;
                const matchDetails = td.dataset.matchDetails;

                this.selectedGridCell = { court, time, date, col: td.dataset.col, hour: td.dataset.hour };

                if (editorPanel) {
                    editorPanel.style.display = 'block';
                }

                if (editorSelectedCourt) editorSelectedCourt.textContent = court;
                if (editorSelectedTime) editorSelectedTime.textContent = time;

                if (btnEditorAssign) {
                    btnEditorAssign.dataset.court = court;
                    btnEditorAssign.dataset.time = time;
                    btnEditorAssign.dataset.date = date;
                }
                if (btnEditorFree) {
                    btnEditorFree.dataset.matchId = matchId;
                }
                if (btnEditorToggleBlock) {
                    btnEditorToggleBlock.dataset.court = court;
                    btnEditorToggleBlock.dataset.time = time;
                    btnEditorToggleBlock.dataset.date = date;
                }

                if (isBlocked) {
                    if (editorCellStatus) {
                        editorCellStatus.textContent = 'Bloqueada (Mantenimiento)';
                        editorCellStatus.style.color = '#fbbf24';
                    }
                    if (editorCellDetails) editorCellDetails.textContent = 'Esta pista está marcada como no operativa en esta hora.';
                    if (editorAssignContainer) editorAssignContainer.style.display = 'none';
                    if (btnEditorFree) btnEditorFree.style.display = 'none';
                    if (btnEditorToggleBlock) {
                        btnEditorToggleBlock.innerHTML = '<i data-lucide="unlock" style="width: 16px; height: 16px;"></i> Desbloquear Pista';
                    }
                } else if (isOccupied) {
                    if (editorCellStatus) {
                        editorCellStatus.textContent = 'Ocupada';
                        editorCellStatus.style.color = 'var(--color-error)';
                    }
                    if (editorCellDetails) editorCellDetails.textContent = `Partido: ${matchDetails}`;
                    if (editorAssignContainer) editorAssignContainer.style.display = 'none';
                    if (btnEditorFree) btnEditorFree.style.display = 'inline-flex';
                    if (btnEditorToggleBlock) {
                        btnEditorToggleBlock.innerHTML = '<i data-lucide="lock" style="width: 16px; height: 16px;"></i> Bloquear Pista';
                    }
                } else {
                    if (editorCellStatus) {
                        editorCellStatus.textContent = 'Disponible';
                        editorCellStatus.style.color = 'var(--color-success)';
                    }
                    if (editorCellDetails) editorCellDetails.textContent = 'Pista libre para programar encuentros.';
                    if (editorAssignContainer) editorAssignContainer.style.display = 'flex';
                    if (btnEditorFree) btnEditorFree.style.display = 'none';
                    if (btnEditorToggleBlock) {
                        btnEditorToggleBlock.innerHTML = '<i data-lucide="lock" style="width: 16px; height: 16px;"></i> Bloquear Pista';
                    }
                }

                // Forzar refresco del mapa de ocupación en tiempo real para la hora seleccionada
                const topbarMapTitle = container.querySelector('.courts-grid-map').previousElementSibling;
                if (topbarMapTitle) {
                    topbarMapTitle.outerHTML = `
                        <h3 style="font-family: var(--font-headings); font-size: 1.35rem; color: #ffffff; margin-bottom: 0.5rem; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem; flex-wrap: wrap; gap: 1rem;">
                            <span style="display: flex; align-items: center; gap: 0.5rem;">
                                <i data-lucide="map" style="color: var(--color-primary);"></i>
                                Ocupación de Pistas (${time})
                            </span>
                            <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: normal;">
                                Hora de referencia activa en el cuadrante: <strong style="color: var(--color-primary);">${time}</strong>
                            </span>
                        </h3>
                    `;
                }
                
                // Re-render del mapa visual de pistas para la hora seleccionada
                const mapGridContainer = container.querySelector('.courts-grid-map');
                if (mapGridContainer) {
                    // Ocupación específica para esa hora
                    const hourlyOccupiedMap = {};
                    t.matches.forEach(m => {
                        if (m.court && m.time === time) {
                            hourlyOccupiedMap[m.court.toUpperCase().trim()] = m;
                        }
                    });

                    mapGridContainer.innerHTML = courts.map(c => {
                        const match = hourlyOccupiedMap[c];
                        const isOccupied = !!match;
                        const isBlocked = store.isSlotBlocked(c, time, date);
                        
                        if (isBlocked) {
                            return `
                                <div class="court-map-card occupied" style="background: rgba(245, 158, 11, 0.05); border-color: rgba(245, 158, 11, 0.35);">
                                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                        <strong style="color: #ffffff; font-size: 1.05rem;">${c}</strong>
                                        <span class="court-badge-status" style="background: rgba(245,158,11,0.15); color: #fbbf24; border: 1px solid rgba(245,158,11,0.3); font-size: 0.75rem; padding: 0.15rem 0.5rem; border-radius: 4px; display: inline-flex; align-items: center; gap: 0.25rem;">
                                            <i data-lucide="ban" style="width: 10px; height: 10px;"></i> Bloqueada
                                        </span>
                                    </div>
                                    <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.25rem;">Pista inoperativa en horario seleccionado por mantenimiento.</p>
                                    <div class="court-net-line" style="background: rgba(245,158,11,0.25);"></div>
                                    <span style="font-size: 0.75rem; color: #fbbf24; font-weight: bold; display: flex; align-items: center; gap: 0.25rem;">
                                        <i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i> No disponible
                                    </span>
                                </div>
                            `;
                        } else if (isOccupied) {
                            const t1 = getCoupleNames(match.team1Id);
                            const t2 = getCoupleNames(match.team2Id);
                            return `
                                <div class="court-map-card occupied">
                                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                        <strong style="color: #ffffff; font-size: 1.05rem;">${c}</strong>
                                        <span class="court-badge-status occupied">
                                            <i data-lucide="lock" style="width: 10px; height: 10px;"></i> Ocupada
                                        </span>
                                    </div>
                                    <div style="font-size: 0.85rem; color: var(--text-muted);">
                                        <div>Hora: <strong style="color: #ffffff;">${match.time || '—'}</strong></div>
                                        <div>Fase: <strong>${match.stage || '—'}</strong></div>
                                    </div>
                                    <div class="court-net-line"></div>
                                    <div style="font-size: 0.8rem; font-weight: 600; color: var(--color-primary); display: flex; flex-direction: column; gap: 0.25rem;">
                                        <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${t1}">${t1}</span>
                                        <span style="color: var(--text-muted); font-size: 0.7rem; text-align: center;">vs</span>
                                        <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${t2}">${t2}</span>
                                    </div>
                                </div>
                            `;
                        } else {
                            return `
                                <div class="court-map-card available">
                                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                        <strong style="color: #ffffff; font-size: 1.05rem;">${c}</strong>
                                        <span class="court-badge-status available">
                                            <i data-lucide="check" style="width: 10px; height: 10px;"></i> Disponible
                                        </span>
                                    </div>
                                    <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.25rem;">No hay partidos programados en esta pista.</p>
                                    <div class="court-net-line"></div>
                                    <span style="font-size: 0.75rem; color: var(--color-success); font-weight: bold; display: flex; align-items: center; gap: 0.25rem;">
                                        <i data-lucide="calendar" style="width: 14px; height: 14px;"></i> Pista Libre
                                    </span>
                                </div>
                            `;
                        }
                    }).join('');
                }

                initLucide();
            });
        });

        // Evento: Asignar Partido
        if (btnEditorAssign && editorSelectMatch) {
            btnEditorAssign.addEventListener('click', () => {
                const matchId = editorSelectMatch.value;
                const court = btnEditorAssign.dataset.court;
                const time = btnEditorAssign.dataset.time;
                const date = btnEditorAssign.dataset.date;

                if (!matchId) {
                    showToast('Por favor, selecciona un partido para asignar.', 'warning');
                    return;
                }

                const res = store.updateMatchSchedule(tournamentId, matchId, { court, time, date });
                if (res.error) {
                    showToast(res.error, 'error');
                } else {
                    showToast('Partido asignado correctamente', 'success');
                    this.renderScheduleMatchesList(tournamentId);
                }
            });
        }

        // Evento: Liberar Pista
        if (btnEditorFree) {
            btnEditorFree.addEventListener('click', () => {
                const matchId = btnEditorFree.dataset.matchId;
                if (!matchId) return;

                if (confirm('¿Estás seguro de que deseas liberar esta pista? El partido quedará pendiente de programar.')) {
                    const res = store.clearMatchSchedule(tournamentId, matchId);
                    if (res.error) {
                        showToast(res.error, 'error');
                    } else {
                        showToast('Pista liberada correctamente', 'info');
                        this.renderScheduleMatchesList(tournamentId);
                    }
                }
            });
        }

        // Evento: Bloquear/Desbloquear Celda
        if (btnEditorToggleBlock) {
            btnEditorToggleBlock.addEventListener('click', () => {
                const court = btnEditorToggleBlock.dataset.court;
                const time = btnEditorToggleBlock.dataset.time;
                const date = btnEditorToggleBlock.dataset.date;

                const res = store.toggleBlockSlot(court, time, date);
                if (res.error) {
                    showToast(res.error, 'error');
                } else {
                    if (res.blocked) {
                        showToast(`Pista bloqueada a las ${time}`, 'warning');
                    } else {
                        showToast(`Pista desbloqueada correctamente`, 'success');
                    }
                    this.renderScheduleMatchesList(tournamentId);
                }
            });
        }
    },

    renderQuickMatchesList(tournamentId) {
        const container = document.getElementById('admin-quick-matches-container');
        if (!container) return;

        if (!tournamentId) {
            container.innerHTML = `
                <p style="text-align: center; color: var(--text-muted); padding: 2rem 0;">Selecciona un torneo en curso para ingresar marcadores.</p>
            `;
            initLucide();
            return;
        }

        const t = store.getTournament(tournamentId);
        if (!t || t.matches.length === 0) {
            container.innerHTML = `
                <p style="text-align: center; color: var(--text-muted); padding: 2rem 0;">No se han generado cruces todavía.</p>
            `;
            initLucide();
            return;
        }

        const getCoupleNames = (coupleId) => {
            const couple = t.couples.find(c => c.id === coupleId);
            if (!couple) return 'Por definir';
            return `${couple.player1} / ${couple.player2}`;
        };

        container.innerHTML = `
            <div class="admin-matches-list">
                ${t.matches.map(m => {
                    const team1 = getCoupleNames(m.team1Id);
                    const team2 = getCoupleNames(m.team2Id);
                    const canPlay = m.team1Id !== null && m.team2Id !== null;

                    const scoreStr = m.completed 
                        ? (m.isWO ? `Victoria por W.O.` : `${Array.isArray(m.score1) ? m.score1.join('/') : '—'} vs ${Array.isArray(m.score2) ? m.score2.join('/') : '—'}`)
                        : 'Pendiente';

                    return `
                        <div class="admin-match-row">
                            <div class="admin-match-teams">
                                <span style="font-size: 0.7rem; color: var(--text-muted); font-weight: 600;">
                                    ${m.divisionCode || 'XC'} - PARTIDO #${m.matchIndex + 1}
                                </span>
                                <div class="admin-match-team-row ${m.completed && m.winnerId === m.team1Id ? 'winner' : ''}">
                                    <span>${team1}</span>
                                </div>
                                <div class="admin-match-team-row ${m.completed && m.winnerId === m.team2Id ? 'winner' : ''}">
                                    <span>${team2}</span>
                                </div>
                            </div>
                            
                            <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 0.5rem; flex-shrink: 0;">
                                <span class="admin-match-score">${scoreStr}</span>
                                ${canPlay ? `
                                    <button class="btn btn-secondary btn-sm edit-score-btn" data-match-id="${m.id}" style="padding: 0.35rem 0.75rem; font-size: 0.8rem;">
                                        <span>Marcador</span>
                                    </button>
                                ` : `
                                    <span style="font-size: 0.75rem; color: var(--text-muted); font-style: italic;">Esperando cruce</span>
                                `}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;

        initLucide();

        const scoreButtons = container.querySelectorAll('.edit-score-btn');
        scoreButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const matchId = e.currentTarget.dataset.matchId;
                this.renderQuickScoreForm(t, matchId);
            });
        });
    },

    resetScoreFormContainer() {
        const scoreFormContainer = document.getElementById('admin-score-form-container');
        if (scoreFormContainer) {
            scoreFormContainer.innerHTML = `
                <p style="text-align: center; color: var(--text-muted); padding: 2rem 0;">
                    Selecciona un partido de la lista para introducir sus resultados.
                </p>
            `;
        }
    },

    renderQuickScoreForm(t, matchId) {
        const container = document.getElementById('admin-score-form-container');
        if (!container) return;

        const match = t.matches.find(m => m.id === matchId);
        if (!match) return;

        const getCoupleNames = (coupleId) => {
            const couple = t.couples.find(c => c.id === coupleId);
            if (!couple) return 'Por definir';
            return `${couple.player1} / ${couple.player2}`;
        };

        const t1 = getCoupleNames(match.team1Id);
        const t2 = getCoupleNames(match.team2Id);

        container.innerHTML = `
            <div style="animation: fadeInEffect 0.2s forwards; padding-top: 1rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.5rem;">
                    <h4 style="color: #ffffff; font-size: 1rem; margin: 0; display: flex; align-items: center; gap: 0.35rem;">
                        <i data-lucide="edit-3" style="width: 16px; height: 16px; color: var(--color-primary);"></i>
                        Registrar Marcador
                    </h4>
                    <button class="btn btn-secondary btn-sm" id="btn-cancel-score" style="padding: 0.25rem 0.5rem; font-size: 0.75rem;">
                        <i data-lucide="x" style="width: 12px; height: 12px;"></i> Cancelar
                    </button>
                </div>

                <form id="quick-score-submit-form">
                    <div style="display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; font-weight: bold; font-size: 0.75rem; color: var(--text-muted); border-bottom: 1px solid var(--border-color); padding-bottom: 0.35rem; margin-bottom: 0.75rem;">
                        <span>Parejas</span>
                        <span style="text-align: center;">Set 1</span>
                        <span style="text-align: center;">Set 2</span>
                        <span style="text-align: center;">Set 3</span>
                    </div>

                    <div style="display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
                        <span style="font-size: 0.8rem; font-weight: 600; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${t1}">${t1}</span>
                        <input type="number" id="q-t1-s1" class="form-input" style="padding: 0.35rem; text-align: center;" min="0" max="7" required placeholder="0" value="${match.score1?.[0] !== undefined ? match.score1[0] : ''}">
                        <input type="number" id="q-t1-s2" class="form-input" style="padding: 0.35rem; text-align: center;" min="0" max="7" required placeholder="0" value="${match.score1?.[1] !== undefined ? match.score1[1] : ''}">
                        <input type="number" id="q-t1-s3" class="form-input" style="padding: 0.35rem; text-align: center;" min="0" max="7" placeholder="0" value="${match.score1?.[2] !== undefined ? match.score1[2] : ''}">
                    </div>

                    <div style="display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; align-items: center; gap: 0.5rem; margin-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.03); padding-bottom: 0.75rem;">
                        <span style="font-size: 0.8rem; font-weight: 600; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${t2}">${t2}</span>
                        <input type="number" id="q-t2-s1" class="form-input" style="padding: 0.35rem; text-align: center;" min="0" max="7" required placeholder="0" value="${match.score2?.[0] !== undefined ? match.score2[0] : ''}">
                        <input type="number" id="q-t2-s2" class="form-input" style="padding: 0.35rem; text-align: center;" min="0" max="7" required placeholder="0" value="${match.score2?.[1] !== undefined ? match.score2[1] : ''}">
                        <input type="number" id="q-t2-s3" class="form-input" style="padding: 0.35rem; text-align: center;" min="0" max="7" placeholder="0" value="${match.score2?.[2] !== undefined ? match.score2[2] : ''}">
                    </div>

                    <div class="form-group" style="margin-bottom: 1rem;">
                        <label style="display: flex; align-items: center; gap: 0.25rem; font-size: 0.8rem; cursor: pointer;">
                            <input type="checkbox" id="q-match-wo" style="accent-color: var(--color-primary); width: 14px; height: 14px;" ${match.isWO ? 'checked' : ''}>
                            Declarar victoria por W.O. (Walk Over)
                        </label>
                    </div>

                    <div class="form-group" style="margin-bottom: 1.25rem;">
                        <label for="q-select-winner" style="font-size: 0.8rem;">Pareja Ganadora</label>
                        <select id="q-select-winner" class="form-select" style="padding: 0.5rem;" required>
                            <option value="">-- Elige un ganador --</option>
                            <option value="team1" ${match.completed && match.winnerId === match.team1Id ? 'selected' : ''}>${t1}</option>
                            <option value="team2" ${match.completed && match.winnerId === match.team2Id ? 'selected' : ''}>${t2}</option>
                        </select>
                    </div>

                    <button type="submit" class="btn btn-primary" style="width: 100%; padding: 0.6rem; font-size: 0.85rem;">
                        <i data-lucide="save" style="width: 14px; height: 14px;"></i> Guardar Marcador
                    </button>
                </form>
            </div>
        `;

        initLucide();

        // Bind Cancelar
        const btnCancel = document.getElementById('btn-cancel-score');
        if (btnCancel) {
            btnCancel.addEventListener('click', () => {
                this.resetScoreFormContainer();
            });
        }

        // Bind Submit
        document.getElementById('quick-score-submit-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const t1s1 = parseInt(document.getElementById('q-t1-s1').value) || 0;
            const t1s2 = parseInt(document.getElementById('q-t1-s2').value) || 0;
            const t1s3Val = document.getElementById('q-t1-s3').value;
            const t1s3 = t1s3Val !== '' ? parseInt(t1s3Val) : null;

            const t2s1 = parseInt(document.getElementById('q-t2-s1').value) || 0;
            const t2s2 = parseInt(document.getElementById('q-t2-s2').value) || 0;
            const t2s3Val = document.getElementById('q-t2-s3').value;
            const t2s3 = t2s3Val !== '' ? parseInt(t2s3Val) : null;

            const isWO = document.getElementById('q-match-wo').checked;
            const winnerOption = document.getElementById('q-select-winner').value;

            const score1 = [t1s1];
            if (t1s2 !== 0 || t1s3 !== null) score1.push(t1s2);
            if (t1s3 !== null) score1.push(t1s3);

            const score2 = [t2s1];
            if (t2s2 !== 0 || t2s3 !== null) score2.push(t2s2);
            if (t2s3 !== null) score2.push(t2s3);

            const winnerId = winnerOption === 'team1' ? match.team1Id : match.team2Id;

            const res = store.updateMatchScore(t.id, matchId, score1, score2, winnerId, isWO);
            if (res.error) {
                showToast(res.error, 'error');
            } else {
                showToast('¡Marcador guardado y clasificación avanzada!', 'success');
                this.renderQuickMatchesList(t.id);
                this.render();
            }
        });
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
    }
};
export const portalView = { render() { adminDashboardView.render(); } }; // Redireccionar alias redundantes
