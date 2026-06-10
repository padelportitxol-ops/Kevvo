/* js/utils.js - Shared UI Utilities & Helpers */

/**
 * Muestra una notificación toast premium en la parte inferior derecha de la pantalla.
 * @param {string} message - El mensaje a mostrar.
 * @param {'success'|'error'|'warning'|'info'} type - El tipo de notificación.
 * @param {number} duration - Duración en milisegundos.
 */
export function showToast(message, type = 'success', duration = 4000) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    // Determinar icono Lucide
    let iconName = 'check-circle';
    if (type === 'error') iconName = 'alert-triangle';
    if (type === 'warning') iconName = 'alert-circle';
    if (type === 'info') iconName = 'info';

    toast.innerHTML = `
        <i data-lucide="${iconName}"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);
    
    // Inicializar Lucide para el nuevo icono
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Programar eliminación
    setTimeout(() => {
        toast.classList.add('removing');
        toast.addEventListener('animationend', () => {
            toast.remove();
        });
    }, duration);
}

/**
 * Retorna la insignia HTML correspondiente a la categoría del torneo.
 */
export function renderCategoryBadge(category) {
    let cssClass = 'badge-gold';
    if (category === 'Plata') cssClass = 'badge-silver';
    if (category === 'Bronce') cssClass = 'badge-bronze';
    
    return `<span class="badge ${cssClass}"><i data-lucide="tag"></i>${category}</span>`;
}

/**
 * Retorna la insignia HTML correspondiente al estado de inscripción o juego.
 */
export function renderStatusBadge(status) {
    let cssClass = 'badge-open';
    let label = status;
    let icon = 'users';

    if (status === 'En Curso') {
        cssClass = 'badge-gold';
        label = 'En Curso';
        icon = 'play';
    } else if (status === 'Finalizado') {
        cssClass = 'badge-silver';
        label = 'Finalizado';
        icon = 'award';
    } else if (status === 'Completo') {
        cssClass = 'badge-full';
        label = 'Completo';
        icon = 'lock';
    }

    return `<span class="badge ${cssClass}"><i data-lucide="${icon}"></i>${label}</span>`;
}

/**
 * Formatea un valor numérico a divisa Euro (€).
 */
export function formatCurrency(amount) {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(amount);
}

/**
 * Ejecuta de forma segura la inicialización de Lucide Icons en los elementos cargados dinámicamente.
 */
export function initLucide() {
    if (window.lucide) {
        window.lucide.createIcons();
    }
}
