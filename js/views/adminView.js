/* js/views/adminView.js - Authentication & Redirection Page */

import { store } from '../store.js';
import { showToast, initLucide } from '../utils.js';

export const adminView = {
    render() {
        const appContent = document.getElementById('app-content');
        if (!appContent) return;

        const currentUser = store.getCurrentUser();

        // --- SI YA ESTÁ LOGUEADO: REDIRECCIONAR A SU PÁGINA DEDICADA ---
        if (currentUser) {
            if (currentUser.role === 'ADMIN') {
                window.location.hash = '#/admin/dashboard';
            } else {
                window.location.hash = '#/player/dashboard';
            }
            return;
        }

        // --- SI NO ESTÁ LOGUEADO: DIBUJAR PANTALLA DE ACCESO CENTRAL PREMIUM ---
        appContent.innerHTML = `
            <div class="auth-viewport-wrapper fade-in" style="min-height: 80vh;">
                <button class="theme-toggle-btn" id="auth-theme-toggle" title="Cambiar tema" style="position: absolute; top: 1.5rem; right: 1.5rem; margin: 0;">
                    <i data-lucide="sun"></i>
                    <i data-lucide="moon"></i>
                </button>
                <div style="max-width: 460px; width: 100%;">
                    <div style="text-align: center; margin-bottom: 2rem;">
                        <a href="#/" style="display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none; font-family: var(--font-headings); font-weight: 800; font-size: 2.2rem; color: #ffffff;">
                            <i data-lucide="dribbble" style="color: var(--color-primary); width: 32px; height: 32px;"></i>
                            <span>Padel<span style="color: var(--color-primary);">ify</span></span>
                        </a>
                        <p style="color: var(--text-muted); font-size: 0.95rem; margin-top: 0.5rem;">Panel de Administración del Club</p>
                    </div>

                    <!-- Formulario de Iniciar Sesión Directo -->
                    <div class="glass-card glow-hover" id="auth-login-card" style="padding: 2.5rem; border-color: rgba(204, 255, 0, 0.15); box-shadow: var(--shadow-lg);">
                        <h3 style="font-family: var(--font-headings); font-size: 1.5rem; color: #ffffff; margin-bottom: 1.5rem; text-align: center; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                            <i data-lucide="lock" style="color: var(--color-primary);"></i>
                            Iniciar Sesión
                        </h3>

                        <form id="login-form">
                            <div class="form-group">
                                <label for="login-username">Nombre de Usuario</label>
                                <input type="text" id="login-username" class="form-input" placeholder="Ej. admin">
                            </div>

                            <div class="form-group" style="margin-bottom: 1.75rem;">
                                <label for="login-password">Contraseña</label>
                                <input type="password" id="login-password" class="form-input" placeholder="••••••••">
                            </div>

                            <a href="#/admin/dashboard" id="btn-admin-submit" class="btn btn-primary" style="width: 100%; gap: 0.5rem; margin-bottom: 1rem; text-decoration: none; justify-content: center;">
                                <span>Iniciar Sesión</span>
                                <i data-lucide="arrow-right"></i>
                            </a>

                            <button type="button" id="btn-admin-bypass" class="btn btn-secondary" style="width: 100%; gap: 0.5rem; border-color: rgba(204, 255, 0, 0.3); color: var(--color-primary); background: rgba(204, 255, 0, 0.02);">
                                <i data-lucide="zap"></i>
                                <span>Entrar sin Contraseña (Demo)</span>
                            </button>
                        </form>

                        <!-- Ayuda de Credenciales Rápidas -->
                        <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px dashed var(--border-color); font-size: 0.8rem; color: var(--text-muted);">
                            <p style="font-weight: bold; color: #ffffff; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.25rem;">
                                <i data-lucide="info" style="width: 12px; height: 12px; color: var(--color-primary);"></i>
                                Cuentas de demostración pre-cargadas:
                            </p>
                            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.4rem;">
                                <li>🔑 <strong>Administrador Principal (Club):</strong> <code>admin</code> / <code>admin123</code></li>
                                <li>🔑 <strong>Gestor Secundario (Admin):</strong> <code>club_manager</code> / <code>manager123</code></li>
                            </ul>
                        </div>
                    </div>

                    <div style="text-align: center; margin-top: 2rem;">
                        <a href="#/" style="color: var(--text-muted); text-decoration: none; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 0.25rem; transition: color var(--transition-fast);" onmouseover="this.style.color='#ffffff'" onmouseout="this.style.color='var(--text-muted)'">
                            <i data-lucide="arrow-left" style="width: 14px; height: 14px;"></i> Volver a la web pública
                        </a>
                    </div>
                </div>
            </div>
        `;

        initLucide();
        this.bindAuthEvents();
    },

    bindAuthEvents() {
        const bypassBtn = document.getElementById('btn-admin-bypass');
        if (bypassBtn) {
            bypassBtn.addEventListener('click', () => {
                const res = store.login('admin', 'admin123');
                localStorage.setItem('showLoginToast', `Acceso rápido como ${res.user.fullName}`);
                window.location.hash = '#/admin/dashboard';
                window.location.reload();
            });
        }

        const submitBtn = document.getElementById('btn-admin-submit');
        if (submitBtn) {
            submitBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const u = document.getElementById('login-username').value.trim();
                let p = document.getElementById('login-password').value;

                if (!u) {
                    showToast('Por favor, introduce tu nombre de usuario.', 'warning');
                    return;
                }

                // Autocompletado inteligente para el demo por facilidad de testeo
                const cleanUser = u.toLowerCase().replace(/\s+/g, '');
                if ((cleanUser === 'admin123' || cleanUser === 'admin') && !p) {
                    p = 'admin123';
                }

                if (!p) {
                    showToast('Por favor, introduce tu contraseña.', 'warning');
                    return;
                }

                const res = store.login(u, p);
                if (res.error) {
                    showToast(res.error, 'error');
                } else {
                    localStorage.setItem('showLoginToast', `Sesión iniciada como ${res.user.fullName}`);
                    if (res.user.role === 'ADMIN') {
                        window.location.hash = '#/admin/dashboard';
                    } else {
                        window.location.hash = '#/player/dashboard';
                    }
                    window.location.reload();
                }
            });
        }

        document.getElementById('login-form').addEventListener('submit', (e) => {
            e.preventDefault();
            if (submitBtn) submitBtn.click();
        });
    }
};
