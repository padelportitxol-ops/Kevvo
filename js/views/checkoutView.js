/* js/views/checkoutView.js - Interactive Stripe Checkout Drawer */

import { store } from '../store.js';
import { showToast, formatCurrency, initLucide } from '../utils.js';

export const checkoutView = {
    /**
     * Abre el drawer de checkout para registrarse en un torneo específico.
     * @param {string} tournamentId - ID del torneo.
     * @param {Function} callback - Función a ejecutar tras completar con éxito el registro.
     */
    open(tournamentId, callback) {
        const tournament = store.getTournament(tournamentId);
        if (!tournament) {
            showToast('Torneo no encontrado', 'error');
            return;
        }

        // Crear el contenedor del overlay en el DOM
        let overlay = document.getElementById('checkout-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'checkout-overlay';
            overlay.className = 'checkout-overlay';
            document.body.appendChild(overlay);
        }

        // Generar la estructura del drawer de Stripe
        overlay.innerHTML = `
            <div class="checkout-drawer" id="checkout-drawer">
                <div class="checkout-header">
                    <div class="checkout-header-logo">
                        <i data-lucide="credit-card" style="color: #635bff;"></i>
                        <span>Pagar con <span>stripe</span></span>
                    </div>
                    <button class="checkout-close-btn" id="checkout-close" aria-label="Cerrar">
                        <i data-lucide="x"></i>
                    </button>
                </div>
                
                <div class="checkout-body" id="checkout-body">
                    <!-- Resumen del Torneo -->
                    <div class="glass-card" style="margin-bottom: 1.5rem; padding: 1.25rem; border-color: rgba(99, 91, 255, 0.2);">
                        <h4 style="font-family: var(--font-headings); font-size: 1.1rem; color: #ffffff; margin-bottom: 0.25rem;">
                            ${tournament.title}
                        </h4>
                        <div style="display: flex; justify-content: space-between; font-size: 0.85rem; color: var(--text-muted);">
                            <span>Categoría: ${tournament.category}</span>
                            <span>Precio: <strong style="color: #ffffff">${formatCurrency(tournament.price)}</strong></span>
                        </div>
                    </div>

                    <form id="checkout-form">
                        <!-- Paso 1: Información de Pareja -->
                        <h4 style="font-family: var(--font-headings); font-size: 1rem; color: #ffffff; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                            <span style="background: rgba(255,255,255,0.05); width: 22px; height: 22px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 0.8rem;">1</span>
                            Datos de la Pareja de Juego
                        </h4>

                        <div class="form-row">
                            <div class="form-group">
                                <label for="player1">Jugador 1 (Nombre Completo)</label>
                                <input type="text" id="player1" class="form-input" required placeholder="Ej. Juan Pérez">
                            </div>
                            <div class="form-group">
                                <label for="phone1">Teléfono Jugador 1</label>
                                <input type="tel" id="phone1" class="form-input" required placeholder="Ej. 600111222">
                            </div>
                        </div>

                        <div class="form-row" style="margin-bottom: 1.5rem;">
                            <div class="form-group">
                                <label for="player2">Jugador 2 (Nombre Completo)</label>
                                <input type="text" id="player2" class="form-input" required placeholder="Ej. Carlos Ruiz">
                            </div>
                            <div class="form-group">
                                <label for="phone2">Teléfono Jugador 2</label>
                                <input type="tel" id="phone2" class="form-input" required placeholder="Ej. 600333444">
                            </div>
                        </div>

                        <!-- Paso 2: Detalles de Pago -->
                        <h4 style="font-family: var(--font-headings); font-size: 1rem; color: #ffffff; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                            <span style="background: rgba(255,255,255,0.05); width: 22px; height: 22px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 0.8rem;">2</span>
                            Pasarela de Pago Segura Stripe
                        </h4>

                        <!-- Tarjeta de Crédito 3D Interactiva -->
                        <div class="card-container">
                            <div class="credit-card-3d" id="credit-card-3d">
                                <!-- Lado Delantero -->
                                <div class="card-front">
                                    <div class="card-brand">
                                        <div class="card-chip"></div>
                                        <div class="card-brand-logo" id="card-brand-logo">VISA</div>
                                    </div>
                                    <div class="card-number-display" id="card-num-disp">•••• •••• •••• ••••</div>
                                    <div class="card-details-row">
                                        <div class="card-holder-col">
                                            <span class="card-label">Titular</span>
                                            <span class="card-value" id="card-holder-disp">NOMBRE TITULAR</span>
                                        </div>
                                        <div class="card-expiry-col">
                                            <span class="card-label">Vence</span>
                                            <span class="card-value" id="card-expiry-disp">MM/AA</span>
                                        </div>
                                    </div>
                                </div>
                                <!-- Lado Trasero -->
                                <div class="card-back">
                                    <div class="card-magnetic-strip"></div>
                                    <div class="card-cvc-area">
                                        <span class="card-label" style="color: #ffffff;">CVC</span>
                                        <div class="card-cvc-strip" id="card-cvc-disp">•••</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Formulario Tarjeta -->
                        <div class="form-group">
                            <label for="card-holder">Nombre en la Tarjeta</label>
                            <input type="text" id="card-holder" class="form-input" required placeholder="TITULAR DE LA TARJETA">
                        </div>

                        <div class="form-group">
                            <label for="card-number">Número de Tarjeta</label>
                            <input type="text" id="card-number" class="form-input" required maxlength="19" placeholder="4242 4242 4242 4242">
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label for="card-expiry">Fecha Vencimiento</label>
                                <input type="text" id="card-expiry" class="form-input" required maxlength="5" placeholder="MM/AA">
                            </div>
                            <div class="form-group">
                                <label for="card-cvc">CVC</label>
                                <input type="text" id="card-cvc" class="form-input" required maxlength="3" placeholder="123">
                            </div>
                        </div>

                        <button type="submit" class="btn btn-stripe" style="width: 100%; margin-top: 1.5rem; gap: 0.75rem;">
                            <i data-lucide="shield-check"></i>
                            <span>Pagar y Inscribirse • ${formatCurrency(tournament.price)}</span>
                        </button>
                    </form>
                </div>
            </div>
        `;

        // Activar visibilidad mediante clases de CSS
        setTimeout(() => {
            overlay.classList.add('active');
        }, 50);

        initLucide();
        this.bindEvents(tournamentId, callback);
    },

    close() {
        const overlay = document.getElementById('checkout-overlay');
        if (overlay) {
            overlay.classList.remove('active');
            // Quitar del DOM una vez termine la transición
            setTimeout(() => {
                overlay.remove();
            }, 300);
        }
    },

    bindEvents(tournamentId, callback) {
        const overlay = document.getElementById('checkout-overlay');
        const drawer = document.getElementById('checkout-drawer');
        const closeBtn = document.getElementById('checkout-close');
        const form = document.getElementById('checkout-form');
        const card3D = document.getElementById('credit-card-3d');

        // Inputs del formulario
        const holderInput = document.getElementById('card-holder');
        const numberInput = document.getElementById('card-number');
        const expiryInput = document.getElementById('card-expiry');
        const cvcInput = document.getElementById('card-cvc');

        // Elementos visuales de la tarjeta
        const holderDisp = document.getElementById('card-holder-disp');
        const numberDisp = document.getElementById('card-num-disp');
        const expiryDisp = document.getElementById('card-expiry-disp');
        const cvcDisp = document.getElementById('card-cvc-disp');
        const brandLogo = document.getElementById('card-brand-logo');

        // Cerrar al pulsar X o fuera del panel
        closeBtn.addEventListener('click', () => this.close());
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) this.close();
        });

        // 1. Dinámica 3D de Girar Tarjeta al enfocar CVC
        cvcInput.addEventListener('focus', () => card3D.classList.add('flipped'));
        cvcInput.addEventListener('blur', () => card3D.classList.remove('flipped'));

        // Permitir girar manualmente la tarjeta haciendo click sobre ella
        card3D.addEventListener('click', () => card3D.classList.toggle('flipped'));

        // 2. Reactividad de Nombre del Titular
        holderInput.addEventListener('input', (e) => {
            const val = e.target.value.toUpperCase();
            holderDisp.textContent = val || 'NOMBRE TITULAR';
        });

        // 3. Reactividad y Enmascaramiento de Número de Tarjeta (Format 4444 4444...)
        numberInput.addEventListener('input', (e) => {
            let val = e.target.value.replace(/\D/g, ''); // Quitar no dígitos
            
            // Auto detectar marca
            if (val.startsWith('4')) {
                brandLogo.textContent = 'VISA';
                brandLogo.style.color = '#3b82f6';
            } else if (val.startsWith('5')) {
                brandLogo.textContent = 'MasterCard';
                brandLogo.style.color = '#fb923c';
            } else if (val.startsWith('3')) {
                brandLogo.textContent = 'AMEX';
                brandLogo.style.color = '#38bdf8';
            } else {
                brandLogo.textContent = 'CARD';
                brandLogo.style.color = '#ffffff';
            }

            // Aplicar formato de espacios cada 4 números
            let formatted = val.match(/.{1,4}/g)?.join(' ') || '';
            e.target.value = formatted;
            numberDisp.textContent = formatted || '•••• •••• •••• ••••';
        });

        // 4. Reactividad y Enmascaramiento de Fecha de Vencimiento (MM/AA)
        expiryInput.addEventListener('input', (e) => {
            let val = e.target.value.replace(/\D/g, '');
            if (val.length > 2) {
                val = val.slice(0, 2) + '/' + val.slice(2, 4);
            }
            e.target.value = val;
            expiryDisp.textContent = val || 'MM/AA';
        });

        // 5. Reactividad de CVC
        cvcInput.addEventListener('input', (e) => {
            let val = e.target.value.replace(/\D/g, '');
            e.target.value = val;
            cvcDisp.textContent = val || '•••';
        });

        // 6. Envío del formulario y simulación del pago
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const player1 = document.getElementById('player1').value.trim();
            const phone1 = document.getElementById('phone1').value.trim();
            const player2 = document.getElementById('player2').value.trim();
            const phone2 = document.getElementById('phone2').value.trim();

            // Desplegar estado de "Procesando pago"
            const body = document.getElementById('checkout-body');
            body.innerHTML = `
                <div class="checkout-success-view" style="min-height: 350px;">
                    <div class="spinner" style="width: 60px; height: 60px; border-top-color: #635bff; box-shadow: 0 0 20px rgba(99, 91, 255, 0.2); margin-bottom: 2rem;"></div>
                    <h3 style="font-family: var(--font-headings); font-size: 1.4rem; color: #ffffff; margin-bottom: 0.5rem;">Procesando Pago Seguro</h3>
                    <p style="color: var(--text-muted); font-size: 0.95rem;">Conectando con los servidores seguros de Stripe...</p>
                </div>
            `;

            // Simular retraso de pasarela de pago (2.5 segundos)
            setTimeout(() => {
                // Registrar pareja en el Store
                const res = store.registerCouple(tournamentId, {
                    player1, phone1, player2, phone2
                });

                if (res.error) {
                    showToast(res.error, 'error');
                    this.close();
                    return;
                }

                showToast('¡Pago procesado con éxito!', 'success');
                const txId = `ch_${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

                // Mostrar pantalla de éxito y factura final
                body.innerHTML = `
                    <div class="checkout-success-view">
                        <div class="success-icon-circle">
                            <i data-lucide="check"></i>
                        </div>
                        
                        <h3 style="font-family: var(--font-headings); font-size: 1.5rem; color: #ffffff; margin-bottom: 0.5rem;">
                            ¡Inscripción Confirmada!
                        </h3>
                        <p style="color: var(--text-muted); font-size: 0.9rem; padding: 0 1rem;">
                            Tu pago ha sido liquidado correctamente. ¡Estás dentro del torneo!
                        </p>

                        <!-- Recibo estilo Stripe -->
                        <div class="receipt-box">
                            <div style="font-weight: bold; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; margin-bottom: 0.75rem; color: #ffffff; display: flex; justify-content: space-between;">
                                <span>RECIBO DE PAGO</span>
                                <span style="color: #635bff;">stripe</span>
                            </div>
                            <div class="receipt-row">
                                <span>ID Transacción:</span>
                                <span style="color: var(--text-main); font-weight: 500;">${txId}</span>
                            </div>
                            <div class="receipt-row">
                                <span>Torneo:</span>
                                <span style="color: var(--text-main); font-weight: 500; text-align: right; max-width: 180px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                    ${res.tournament.title}
                                </span>
                            </div>
                            <div class="receipt-row">
                                <span>Categoría:</span>
                                <span style="color: var(--text-main); font-weight: 500;">${res.tournament.category}</span>
                            </div>
                            <div class="receipt-row">
                                <span>Pareja:</span>
                                <span style="color: var(--text-main); font-weight: 500; text-align: right; max-width: 180px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                    ${player1} / ${player2}
                                </span>
                            </div>
                            <div class="receipt-row total">
                                <span>Importe Total:</span>
                                <span>${formatCurrency(res.tournament.price)}</span>
                            </div>
                        </div>

                        <button id="checkout-finish-btn" class="btn btn-primary" style="width: 100%; gap: 0.5rem; background: var(--color-success); box-shadow: 0 4px 15px rgba(16, 185, 129, 0.25);">
                            <span>Listo, volver al Torneo</span>
                            <i data-lucide="arrow-right"></i>
                        </button>
                    </div>
                `;

                initLucide();

                // Escuchar click de finalizar
                document.getElementById('checkout-finish-btn').addEventListener('click', () => {
                    this.close();
                    if (callback) callback(res.tournament);
                });

            }, 2500);
        });
    }
};
