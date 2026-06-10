/* js/views/rankingsView.js - Individual Player Rankings & Category Standings */

import { store } from '../store.js';
import { initLucide } from '../utils.js';

export const rankingsView = {
    activeGroup: 'masculino', // Tab activa por defecto: 'masculino', 'femenino', 'mixto'

    render() {
        const appContent = document.getElementById('app-content');
        if (!appContent) return;

        // 1. Obtener torneos
        const tournaments = store.getTournaments();

        // 2. Procesar estadísticas individuales reales
        const realPlayers = {};

        tournaments.forEach(t => {
            let cat = t.category;
            // Mapear categorías abreviadas o descriptivas de torneos a las oficiales
            if (cat === 'Plata') {
                cat = 'Masculino - Segunda';
            } else if (cat === 'Oro') {
                cat = 'Masculino - Primera';
            } else if (cat === 'Bronce') {
                cat = 'Masculino - Tercera';
            }

            t.couples.forEach(c => {
                const players = [c.player1, c.player2];
                players.forEach(pName => {
                    if (pName && pName.trim() !== '') {
                        if (!realPlayers[pName]) {
                            realPlayers[pName] = {
                                name: pName,
                                category: cat,
                                mp: 0,
                                w: 0,
                                l: 0,
                                winRate: 0,
                                points: 0
                            };
                        }
                    }
                });

                // Calcular partidos del torneo t en los que participó esta pareja
                const playedMatches = t.matches ? t.matches.filter(m => m.completed && (m.team1Id === c.id || m.team2Id === c.id)) : [];
                const mp = playedMatches.length;

                if (mp > 0) {
                    const w = playedMatches.filter(m => m.winnerId === c.id).length;
                    const l = mp - w;
                    const winRate = Math.round((w / mp) * 100);
                    const points = w * 3 + l * 1; // 3 pts por victoria, 1 pt por derrota

                    players.forEach(pName => {
                        if (realPlayers[pName]) {
                            realPlayers[pName].mp += mp;
                            realPlayers[pName].w += w;
                            realPlayers[pName].l += l;
                            realPlayers[pName].points += points;
                        }
                    });
                }
            });
        });

        // Actualizar winRate de los jugadores reales
        Object.keys(realPlayers).forEach(name => {
            const p = realPlayers[name];
            if (p.mp > 0) {
                p.winRate = Math.round((p.w / p.mp) * 100);
            }
        });

        // 3. Semilla de datos ficticios profesionales para poblar otras categorías vacías (Vibrancia visual)
        const mockPlayers = {
            "Femenina - Primera": [
                { name: "Ariana Sánchez", mp: 10, w: 9, l: 1, winRate: 90, points: 28 },
                { name: "Paula Josemaría", mp: 10, w: 8, l: 2, winRate: 80, points: 26 },
                { name: "Gemma Triay", mp: 10, w: 7, l: 3, winRate: 70, points: 24 },
                { name: "Claudia Fernández", mp: 10, w: 5, l: 5, winRate: 50, points: 20 }
            ],
            "Femenina - Segunda": [
                { name: "Marta Ortega", mp: 8, w: 7, l: 1, winRate: 88, points: 22 },
                { name: "Sofia Araújo", mp: 8, w: 6, l: 2, winRate: 75, points: 20 },
                { name: "Virginia Riera", mp: 8, w: 4, l: 4, winRate: 50, points: 16 }
            ],
            "Femenina - Tercera": [
                { name: "Delfina Brea", mp: 6, w: 5, l: 1, winRate: 83, points: 16 },
                { name: "Beatriz González", mp: 6, w: 4, l: 2, winRate: 67, points: 14 },
                { name: "Jessica Castelló", mp: 6, w: 3, l: 3, winRate: 50, points: 12 }
            ],
            "Masculino - Primera": [
                { name: "Arturo Coello", mp: 12, w: 11, l: 1, winRate: 92, points: 34 },
                { name: "Agustín Tapia", mp: 12, w: 10, l: 2, winRate: 83, points: 32 },
                { name: "Federico Chingotto", mp: 12, w: 8, l: 4, winRate: 67, points: 28 },
                { name: "Martín Di Nenno", mp: 12, w: 6, l: 6, winRate: 50, points: 24 }
            ],
            "Masculino - Segunda": [
                // Además de Carlos Martínez, Sergio Ramos, etc.
                { name: "Carlos Martínez", mp: 6, w: 4, l: 2, winRate: 67, points: 14 },
                { name: "David López", mp: 6, w: 4, l: 2, winRate: 67, points: 14 },
                { name: "Sergio Ramos", mp: 6, w: 2, l: 4, winRate: 33, points: 10 },
                { name: "Luka Modric", mp: 6, w: 2, l: 4, winRate: 33, points: 10 }
            ],
            "Masculino - Tercera": [
                { name: "Paquito Navarro", mp: 8, w: 6, l: 2, winRate: 75, points: 20 },
                { name: "Sanyo Gutiérrez", mp: 8, w: 5, l: 3, winRate: 63, points: 18 },
                { name: "Momo González", mp: 8, w: 4, l: 4, winRate: 50, points: 16 }
            ]
        };

        // 4. Agrupar las categorías disponibles por bloque (Masculino, Femenino, Mixto)
        const categories = {
            masculino: [
                "Masculino - Primera",
                "Masculino - Segunda",
                "Masculino - Segunda A",
                "Masculino - Segunda B",
                "Masculino - Tercera"
            ],
            femenino: [
                "Femenina - Primera",
                "Femenina - Segunda",
                "Femenina - Segunda A",
                "Femenina - Segunda B",
                "Femenina - Tercera"
            ],
            mixto: [
                "Mixto - Mixtos C"
            ]
        };

        // 5. Compilar la estructura general
        let html = `
            <!-- Cabecera de la Vista -->
            <div style="margin-bottom: 2.5rem; text-align: center;">
                <span class="hero-tag" style="margin-bottom: 1rem;">
                    <i data-lucide="award"></i>
                    Rankings Oficiales
                </span>
                <h1 class="hero-title" style="font-size: 3rem; margin-bottom: 0.5rem;">
                    Rankings <span>Padelify</span>
                </h1>
                <p class="hero-subtitle" style="max-width: 600px; margin: 0 auto;">
                    Clasificación de jugadores individuales del club. ¡Disputa partidos oficiales para ascender posiciones!
                </p>
            </div>

            <!-- Selector de Grupo de Categorías (Tabs en Fila Premium) -->
            <div style="display: flex; justify-content: center; gap: 1rem; margin-bottom: 3rem; flex-wrap: wrap;">
                <button id="btn-group-masculino" class="btn btn-sm" style="${this.activeGroup === 'masculino' ? 'background: var(--color-primary) !important; color: #000000 !important; border-color: var(--color-primary) !important; font-weight: bold;' : 'background: rgba(255,255,255,0.02); color: var(--text-muted); border-color: var(--border-color);'}">
                    <i data-lucide="user"></i> Categorías Masculinas
                </button>
                <button id="btn-group-femenino" class="btn btn-sm" style="${this.activeGroup === 'femenino' ? 'background: var(--color-primary) !important; color: #000000 !important; border-color: var(--color-primary) !important; font-weight: bold;' : 'background: rgba(255,255,255,0.02); color: var(--text-muted); border-color: var(--border-color);'}">
                    <i data-lucide="user-plus"></i> Categorías Femeninas
                </button>
                <button id="btn-group-mixto" class="btn btn-sm" style="${this.activeGroup === 'mixto' ? 'background: var(--color-primary) !important; color: #000000 !important; border-color: var(--color-primary) !important; font-weight: bold;' : 'background: rgba(255,255,255,0.02); color: var(--text-muted); border-color: var(--border-color);'}">
                    <i data-lucide="users"></i> Categorías Mixtas
                </button>
            </div>

            <!-- Listado de Categorías del Grupo Activo -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 2rem; margin-bottom: 4rem;">
        `;

        const activeCats = categories[this.activeGroup] || [];

        activeCats.forEach(catName => {
            // Recopilar jugadores para esta categoría
            let list = [];

            // A) Agregar jugadores reales calculados
            Object.keys(realPlayers).forEach(pName => {
                const p = realPlayers[pName];
                if (p.category === catName) {
                    list.push({
                        name: p.name,
                        mp: p.mp,
                        w: p.w,
                        l: p.l,
                        winRate: p.winRate,
                        points: p.points
                    });
                }
            });

            // B) Si la categoría admite mock y tiene pocos jugadores, inyectar el mock (excluyendo duplicados por nombre)
            if (mockPlayers[catName]) {
                mockPlayers[catName].forEach(mockP => {
                    const exists = list.some(lp => lp.name.toLowerCase() === mockP.name.toLowerCase());
                    if (!exists) {
                        list.push(mockP);
                    }
                });
            }

            // C) Ordenar jugadores por puntos (desc) y winRate (desc)
            list.sort((a, b) => b.points - a.points || b.winRate - a.winRate);

            const hasPlayers = list.length > 0;
            const topPlayer = hasPlayers ? list[0] : null;

            html += `
                <div class="glass-card glow-hover" style="display: flex; flex-direction: column; gap: 1.5rem; padding: 1.75rem;">
                    <!-- Cabecera de Categoría -->
                    <div style="display: flex; align-items: center; gap: 0.75rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem; margin-bottom: 0.25rem;">
                        <div style="background: rgba(59, 130, 246, 0.1); color: var(--color-primary); padding: 0.5rem; border-radius: 8px;">
                            <i data-lucide="award" style="width: 22px; height: 22px;"></i>
                        </div>
                        <h3 style="font-family: var(--font-headings); font-size: 1.25rem; font-weight: 700; color: #ffffff;">
                            ${catName}
                        </h3>
                    </div>
            `;

            if (hasPlayers && topPlayer) {
                const topAvatar = topPlayer.name.charAt(0).toUpperCase();
                html += `
                    <!-- Módulo Destacado: MEJOR JUGADOR -->
                    <div style="background: linear-gradient(135deg, rgba(59,130,246,0.06) 0%, rgba(59,130,246,0.02) 100%); border: 1px solid rgba(59,130,246,0.15); border-radius: 12px; padding: 1rem; display: flex; align-items: center; justify-content: space-between; position: relative; overflow: hidden;">
                        <div style="position: absolute; right: -10px; top: -10px; opacity: 0.08; color: var(--color-primary);">
                            <i data-lucide="crown" style="width: 80px; height: 80px;"></i>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.75rem; z-index: 1;">
                            <div style="background: var(--color-primary); color: #000000; font-weight: 800; font-size: 1rem; width: 42px; height: 42px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(59,130,246,0.25);">
                                ${topAvatar}
                            </div>
                            <div style="display: flex; flex-direction: column;">
                                <span style="font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: var(--color-primary); display: flex; align-items: center; gap: 0.25rem;">
                                    <i data-lucide="crown" style="width: 11px; height: 11px;"></i> Mejor Jugador
                                </span>
                                <strong style="font-size: 1rem; color: #ffffff; margin-top: 0.1rem;">${topPlayer.name}</strong>
                            </div>
                        </div>
                        <div style="text-align: right; z-index: 1;">
                            <span style="font-size: 1.15rem; font-weight: 800; color: var(--color-primary); font-family: monospace; display: block;">${topPlayer.points} pts</span>
                            <span style="font-size: 0.7rem; color: var(--text-muted);">${topPlayer.w}V - ${topPlayer.mp - topPlayer.w}D</span>
                        </div>
                    </div>

                    <!-- Tabla de Ranking General -->
                    <div style="overflow-x: auto;">
                        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.8rem;">
                            <thead>
                                <tr style="border-bottom: 1px solid var(--border-color); color: var(--text-muted);">
                                    <th style="padding: 0.4rem 0.25rem; font-weight: bold; width: 25px;">#</th>
                                    <th style="padding: 0.4rem 0.5rem; font-weight: bold;">Jugador</th>
                                    <th style="padding: 0.4rem 0.5rem; font-weight: bold; text-align: center; width: 35px;">PJ</th>
                                    <th style="padding: 0.4rem 0.5rem; font-weight: bold; text-align: center; width: 35px;">PG</th>
                                    <th style="padding: 0.4rem 0.5rem; font-weight: bold; text-align: center; width: 45px;">%</th>
                                    <th style="padding: 0.4rem 0.25rem; font-weight: bold; text-align: right; width: 50px;">Pts</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${list.map((p, idx) => {
                                    let rankColor = 'var(--text-muted)';
                                    if (idx === 0) rankColor = 'var(--color-primary)';
                                    
                                    return `
                                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.02);">
                                            <td style="padding: 0.5rem 0.25rem; font-weight: bold; color: ${rankColor};">${idx + 1}</td>
                                            <td style="padding: 0.5rem 0.5rem; font-weight: 600; color: #ffffff;">${p.name}</td>
                                            <td style="padding: 0.5rem 0.5rem; text-align: center; color: var(--text-muted); font-family: monospace;">${p.mp}</td>
                                            <td style="padding: 0.5rem 0.5rem; text-align: center; color: var(--color-success); font-family: monospace;">${p.w}</td>
                                            <td style="padding: 0.5rem 0.5rem; text-align: center; color: #a39eff; font-family: monospace;">${p.winRate}%</td>
                                            <td style="padding: 0.5rem 0.25rem; text-align: right; font-weight: bold; color: var(--color-primary); font-family: monospace;">${p.points}</td>
                                        </tr>
                                    `;
                                }).join('')}
                            </tbody>
                        </table>
                    </div>
                `;
            } else {
                html += `
                    <div style="text-align: center; padding: 2rem 0; color: var(--text-muted); font-size: 0.85rem;">
                        <i data-lucide="calendar" style="width: 24px; height: 24px; margin-bottom: 0.5rem; opacity: 0.5;"></i>
                        <p>No hay partidos registrados en esta categoría aún.</p>
                    </div>
                `;
            }

            html += `</div>`; // Cerrar card de categoría
        });

        html += `</div>`; // Cerrar grid
        appContent.innerHTML = html;
        initLucide();
        this.bindEvents();
    },

    bindEvents() {
        const bindTab = (id, group) => {
            const btn = document.getElementById(id);
            if (btn) {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.activeGroup = group;
                    this.render();
                });
            }
        };

        bindTab('btn-group-masculino', 'masculino');
        bindTab('btn-group-femenino', 'femenino');
        bindTab('btn-group-mixto', 'mixto');
    }
};
