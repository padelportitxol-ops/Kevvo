/* js/views/classificationView.js - Couples Standings & Live Brackets */

import { store } from '../store.js';
import { renderStatusBadge, formatCurrency, initLucide } from '../utils.js';

export const classificationView = {
    activeTab: 'points', // Tab activa: 'points' o 'brackets'
    selectedTournamentId: null,

    render() {
        const appContent = document.getElementById('app-content');
        if (!appContent) return;

        const tournaments = store.getTournaments();

        let html = `
            <!-- Cabecera de la Vista -->
            <div style="margin-bottom: 2.5rem; text-align: center;">
                <span class="hero-tag" style="margin-bottom: 1rem;">
                    <i data-lucide="bar-chart-2"></i>
                    Clasificación Oficial
                </span>
                <h1 class="hero-title" style="font-size: 3rem; margin-bottom: 0.5rem;">
                    Clasificación de <span>Torneos</span>
                </h1>
                <p class="hero-subtitle" style="max-width: 600px; margin: 0 auto;">
                    Sigue los resultados en directo. Consulta la clasificación general por parejas o visualiza los cuadros de juego.
                </p>
            </div>

            <!-- Selector de Pestañas Principal (Fila Premium) -->
            <div style="display: flex; justify-content: center; gap: 1rem; margin-bottom: 2.5rem; flex-wrap: wrap;">
                <button id="btn-tab-points" class="btn btn-sm" style="${this.activeTab === 'points' ? 'background: var(--color-primary) !important; color: #000000 !important; border-color: var(--color-primary) !important; font-weight: bold;' : 'background: rgba(255,255,255,0.02); color: var(--text-muted); border-color: var(--border-color);'}">
                    <i data-lucide="award"></i> Clasificación Oficial (Parejas)
                </button>
                <button id="btn-tab-brackets" class="btn btn-sm" style="${this.activeTab === 'brackets' ? 'background: var(--color-primary) !important; color: #000000 !important; border-color: var(--color-primary) !important; font-weight: bold;' : 'background: rgba(255,255,255,0.02); color: var(--text-muted); border-color: var(--border-color);'}">
                    <i data-lucide="git-branch"></i> Cuadros y Marcadores (Cruces)
                </button>
            </div>
        `;

        if (this.activeTab === 'points') {
            html += this.renderPointsTab(tournaments);
        } else {
            html += this.renderBracketsTab(tournaments);
        }

        appContent.innerHTML = html;
        initLucide();
        this.bindEvents();
    },

    bindEvents() {
        // Enlace de pestañas
        const btnPoints = document.getElementById('btn-tab-points');
        const btnBrackets = document.getElementById('btn-tab-brackets');

        if (btnPoints) {
            btnPoints.addEventListener('click', (e) => {
                e.preventDefault();
                this.activeTab = 'points';
                this.render();
            });
        }
        if (btnBrackets) {
            btnBrackets.addEventListener('click', (e) => {
                e.preventDefault();
                this.activeTab = 'brackets';
                this.render();
            });
        }

        // Filtro de torneo en pestaña de brackets
        const select = document.getElementById('select-classification-tournament');
        if (select) {
            select.addEventListener('change', (e) => {
                this.selectedTournamentId = e.target.value;
                this.render();
            });
        }
    },

    renderPointsTab(tournaments) {
        const leaderboards = {
            oro: [],
            plata: [],
            bronce: []
        };
        const notCompeted = [];

        // Procesar parejas de todos los torneos para calcular estadísticas
        tournaments.forEach(t => {
            let rankingCat = 'bronce';
            const catLower = t.category.toLowerCase();
            if (catLower.includes('primera') || catLower.includes('oro')) {
                rankingCat = 'oro';
            } else if (catLower.includes('segunda') || catLower.includes('plata')) {
                rankingCat = 'plata';
            } else if (catLower.includes('tercera') || catLower.includes('bronce') || catLower.includes('mixto')) {
                rankingCat = 'bronce';
            }

            t.couples.forEach(c => {
                const playedMatches = t.matches ? t.matches.filter(m => m.completed && (m.team1Id === c.id || m.team2Id === c.id)) : [];
                const mp = playedMatches.length;

                if (mp === 0) {
                    notCompeted.push({
                        player1: c.player1,
                        player2: c.player2,
                        tournamentTitle: t.title,
                        category: t.category,
                        registerDate: c.date || t.date || 'Reciente'
                    });
                } else {
                    const w = playedMatches.filter(m => m.winnerId === c.id).length;
                    const l = mp - w;
                    const winRate = Math.round((w / mp) * 100);
                    const points = w * 3 + l * 1; // 3 pts por victoria, 1 pt por derrota

                    leaderboards[rankingCat].push({
                        player1: c.player1,
                        player2: c.player2,
                        mp,
                        w,
                        l,
                        winRate,
                        points,
                        tournamentTitle: t.title
                    });
                }
            });
        });

        const sortRankings = (arr) => arr.sort((a, b) => b.points - a.points || b.winRate - a.winRate);
        sortRankings(leaderboards.oro);
        sortRankings(leaderboards.plata);
        sortRankings(leaderboards.bronce);

        return `
            <!-- Tablas de Rankings por Parejas en Grid -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 2rem; margin-bottom: 4rem;">
                
                <!-- CATEGORÍA ORO -->
                <div class="glass-card glow-hover" style="border-color: rgba(245, 158, 11, 0.2); padding: 1.75rem;">
                    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border-color);">
                        <div style="background: rgba(245, 158, 11, 0.1); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.2); padding: 0.5rem; border-radius: 8px;">
                            <i data-lucide="crown" style="width: 24px; height: 24px;"></i>
                        </div>
                        <h3 style="font-family: var(--font-headings); font-size: 1.25rem; font-weight: 700; color: #ffffff;">Categoría Oro</h3>
                    </div>
                    ${this.renderLeaderboardTable(leaderboards.oro)}
                </div>

                <!-- CATEGORÍA PLATA -->
                <div class="glass-card glow-hover" style="border-color: rgba(156, 163, 175, 0.2); padding: 1.75rem;">
                    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border-color);">
                        <div style="background: rgba(156, 163, 175, 0.1); color: #9ca3af; border: 1px solid rgba(156, 163, 175, 0.2); padding: 0.5rem; border-radius: 8px;">
                            <i data-lucide="award" style="width: 24px; height: 24px;"></i>
                        </div>
                        <h3 style="font-family: var(--font-headings); font-size: 1.25rem; font-weight: 700; color: #ffffff;">Categoría Plata</h3>
                    </div>
                    ${this.renderLeaderboardTable(leaderboards.plata)}
                </div>

                <!-- CATEGORÍA BRONCE -->
                <div class="glass-card glow-hover" style="border-color: rgba(180, 83, 9, 0.2); padding: 1.75rem;">
                    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border-color);">
                        <div style="background: rgba(180, 83, 9, 0.1); color: #fb923c; border: 1px solid rgba(180, 83, 9, 0.2); padding: 0.5rem; border-radius: 8px;">
                            <i data-lucide="award" style="width: 24px; height: 24px;"></i>
                        </div>
                        <h3 style="font-family: var(--font-headings); font-size: 1.25rem; font-weight: 700; color: #ffffff;">Categoría Bronce</h3>
                    </div>
                    ${this.renderLeaderboardTable(leaderboards.bronce)}
                </div>
            </div>

            <!-- Parejas Inscritas Sin Actividad -->
            <div class="glass-card" style="margin-bottom: 4rem;">
                <h3 style="font-family: var(--font-headings); font-size: 1.35rem; color: #ffffff; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i data-lucide="clock" style="color: var(--color-primary);"></i>
                    Parejas Registradas Sin Actividad
                </h3>
                <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.5rem;">Parejas y jugadores oficialmente inscritos esperando disputar sus primeros partidos</p>
                ${this.renderNotCompetedList(notCompeted)}
            </div>
        `;
    },

    renderLeaderboardTable(data) {
        if (data.length === 0) {
            return `
                <div style="text-align: center; padding: 2rem 0; color: var(--text-muted); font-size: 0.9rem;">
                    <i data-lucide="info" style="width: 20px; height: 20px; margin-bottom: 0.5rem; color: var(--text-muted);"></i>
                    <p>No hay partidos registrados en esta división aún.</p>
                </div>
            `;
        }

        return `
            <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.85rem;">
                    <thead>
                        <tr style="border-bottom: 1px solid var(--border-color); color: var(--text-muted);">
                            <th style="padding: 0.5rem 0.25rem; font-weight: bold; width: 30px;">#</th>
                            <th style="padding: 0.5rem; font-weight: bold;">Pareja</th>
                            <th style="padding: 0.5rem; font-weight: bold; text-align: center; width: 40px;" title="Partidos Jugados">PJ</th>
                            <th style="padding: 0.5rem; font-weight: bold; text-align: center; width: 40px;" title="Victorias">PG</th>
                            <th style="padding: 0.5rem; font-weight: bold; text-align: center; width: 40px;" title="Win Rate %">%</th>
                            <th style="padding: 0.5rem; font-weight: bold; text-align: right; width: 60px;">Puntos</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.map((row, idx) => {
                            let medal = '';
                            if (idx === 0) medal = '🥇';
                            else if (idx === 1) medal = '🥈';
                            else if (idx === 2) medal = '🥉';

                            return `
                                <tr style="border-bottom: 1px solid rgba(255,255,255,0.02);">
                                    <td style="padding: 0.75rem 0.25rem; font-weight: bold; color: ${idx < 3 ? 'var(--color-primary)' : 'var(--text-muted)'};">${medal || (idx + 1)}</td>
                                    <td style="padding: 0.75rem 0.5rem;">
                                        <div style="display: flex; flex-direction: column; gap: 0.15rem;">
                                            <span style="color: #ffffff; font-weight: 600;">${row.player1}</span>
                                            <span style="color: var(--text-muted); font-size: 0.75rem;">${row.player2}</span>
                                        </div>
                                    </td>
                                    <td style="padding: 0.75rem 0.5rem; text-align: center; color: #ffffff; font-family: monospace;">${row.mp}</td>
                                    <td style="padding: 0.75rem 0.5rem; text-align: center; color: var(--color-success); font-family: monospace;">${row.w}</td>
                                    <td style="padding: 0.75rem 0.5rem; text-align: center; color: #a39eff; font-family: monospace;">${row.winRate}%</td>
                                    <td style="padding: 0.75rem 0.5rem; text-align: right; font-weight: bold; color: var(--color-primary); font-family: monospace;">${row.points}</td>
                                </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
            </div>
        `;
    },

    renderNotCompetedList(data) {
        if (data.length === 0) {
            return `
                <div style="text-align: center; padding: 3rem 0; color: var(--text-muted); font-size: 0.95rem;">
                    <i data-lucide="check-circle" style="width: 32px; height: 32px; color: var(--color-success); margin-bottom: 0.75rem;"></i>
                    <p>Todos los jugadores inscritos ya han disputado partidos en el club.</p>
                </div>
            `;
        }

        return `
            <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.85rem;">
                    <thead>
                        <tr style="border-bottom: 1px solid var(--border-color); color: var(--text-muted);">
                            <th style="padding: 0.5rem; font-weight: bold;">Pareja</th>
                            <th style="padding: 0.5rem; font-weight: bold;">Torneo Original</th>
                            <th style="padding: 0.5rem; font-weight: bold;">Categoría</th>
                            <th style="padding: 0.5rem; font-weight: bold; text-align: right;">Fecha Registro</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.map(row => `
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.02);">
                                <td style="padding: 0.75rem 0.5rem;">
                                    <div style="display: flex; flex-direction: column; gap: 0.15rem;">
                                        <span style="color: #ffffff; font-weight: 600;">${row.player1}</span>
                                        <span style="color: var(--text-muted); font-size: 0.75rem;">${row.player2}</span>
                                    </div>
                                </td>
                                <td style="padding: 0.75rem 0.5rem; color: #ffffff; font-weight: 500;">${row.tournamentTitle}</td>
                                <td style="padding: 0.75rem 0.5rem;"><span style="color: var(--color-primary); font-weight: bold; font-size: 0.8rem;">${row.category}</span></td>
                                <td style="padding: 0.75rem 0.5rem; text-align: right; color: var(--text-muted); font-size: 0.8rem;">${row.registerDate}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    },

    renderBracketsTab(tournaments) {
        // Seleccionar el primer torneo por defecto si no hay ninguno seleccionado
        if (!this.selectedTournamentId && tournaments.length > 0) {
            this.selectedTournamentId = tournaments[0].id;
        }

        const selectedTournament = store.getTournament(this.selectedTournamentId);

        if (tournaments.length === 0) {
            return `
                <div class="glass-card" style="text-align: center; padding: 4rem 2rem;">
                    <i data-lucide="info" style="width: 48px; height: 48px; color: var(--text-muted); margin-bottom: 1rem;"></i>
                    <p style="color: var(--text-muted); font-size: 1.1rem;">No hay torneos registrados en el sistema actualmente.</p>
                </div>
            `;
        }

        let html = `
            <div class="glass-card" style="margin-bottom: 2rem; padding: 1.25rem;">
                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
                    <div style="display: flex; flex-direction: column; gap: 0.25rem;">
                        <label style="font-size: 0.75rem; font-weight: bold; text-transform: uppercase; color: var(--text-muted);">Selecciona un Torneo</label>
                        <select id="select-classification-tournament" class="form-select" style="min-width: 280px; font-weight: 600;">
                            ${tournaments.map(t => `<option value="${t.id}" ${t.id === this.selectedTournamentId ? 'selected' : ''}>${t.title} (${t.category})</option>`).join('')}
                        </select>
                    </div>
                    <div style="display: flex; gap: 1rem; align-items: center;">
                        <span style="font-size: 0.85rem; color: var(--text-muted);">Estado:</span>
                        ${selectedTournament ? renderStatusBadge(selectedTournament.status) : ''}
                    </div>
                </div>
            </div>
        `;

        if (selectedTournament) {
            html += `
                <div class="t-detail-layout" style="grid-template-columns: 1fr; gap: 2rem; margin-top: 0;">
                    <!-- CUADRO ELIMINATORIO / BRACKETS -->
                    <div class="glass-card" style="overflow: hidden;">
                        <h3 style="font-family: var(--font-headings); font-size: 1.35rem; color: #ffffff; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem; flex-wrap: wrap; gap: 1rem;">
                            <span style="display: flex; align-items: center; gap: 0.5rem;">
                                <i data-lucide="git-branch" style="color: var(--color-primary);"></i>
                                Cuadro de Eliminatorias
                            </span>
                        </h3>
                        
                        ${this.renderBracketsSection(selectedTournament)}
                    </div>

                    <!-- LISTA DE PARTIDOS Y Marcadores -->
                    <div class="glass-card">
                        <h3 style="font-family: var(--font-headings); font-size: 1.35rem; color: #ffffff; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
                            <i data-lucide="swords" style="color: var(--color-primary);"></i>
                            Partidos y Marcadores
                        </h3>
                        
                        ${this.renderMatchesListSection(selectedTournament)}
                    </div>
                </div>
            `;
        }

        return html;
    },

    renderBracketsSection(t) {
        if (!t.matches || t.matches.length === 0) {
            return `
                <div style="text-align: center; padding: 4rem 2rem; color: var(--text-muted);">
                    <i data-lucide="calendar" style="width: 40px; height: 40px; margin-bottom: 1rem; color: var(--text-muted); opacity: 0.6;"></i>
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-bottom: 0.5rem;">Fase de inscripciones abierta</h4>
                    <p style="font-size: 0.85rem; max-width: 480px; margin: 0 auto;">El cuadro de eliminatorias se generará dinámicamente una vez completadas las plazas (${t.couples.length} / ${t.maxCouples} parejas inscritas).</p>
                </div>
            `;
        }

        const getCoupleNames = (coupleId) => {
            const c = t.couples.find(cp => cp.id === coupleId);
            return c ? `${c.player1} / ${c.player2}` : 'Por definir';
        };

        const getCoupleNamesShort = (coupleId) => {
            const c = t.couples.find(cp => cp.id === coupleId);
            if (!c) return 'Por definir';
            const getShortName = (fullName) => {
                const parts = fullName.trim().split(/\s+/);
                if (parts.length < 2) return fullName;
                return `${parts[0].charAt(0)}. ${parts[parts.length - 1]}`;
            };
            return `${getShortName(c.player1)} / ${getShortName(c.player2)}`;
        };

        const roundMatches = { 0: [], 1: [], 2: [] };
        t.matches.forEach(m => {
            if (m.round in roundMatches) {
                roundMatches[m.round].push(m);
            }
        });

        Object.keys(roundMatches).forEach(r => {
            roundMatches[r].sort((a, b) => a.matchIndex - b.matchIndex);
        });

        const roundNames = t.maxCouples === 8 
            ? ['Cuartos de Final', 'Semifinal', 'Gran Final']
            : ['Semifinal', 'Gran Final'];

        const activeRounds = t.maxCouples === 8 ? [0, 1, 2] : [0, 1];

        return `
            <div class="bracket-wrapper">
                <div class="bracket-container" style="justify-content: ${t.maxCouples === 8 ? 'space-between' : 'center'}; gap: 3.5rem;">
                    ${activeRounds.map(rIdx => {
                        const mList = roundMatches[rIdx] || [];
                        const roundName = roundNames[rIdx];
                        return `
                            <div class="bracket-round" style="height: auto; justify-content: center; gap: ${rIdx === 0 ? '1.5rem' : rIdx === 1 ? '4rem' : '8rem'};">
                                <div style="text-align: center; font-size: 0.75rem; font-weight: bold; text-transform: uppercase; color: var(--color-primary); margin-bottom: 0.5rem; letter-spacing: 0.5px;">
                                    ${roundName}
                                </div>
                                ${mList.map(m => {
                                    const t1Name = getCoupleNamesShort(m.team1Id);
                                    const t2Name = getCoupleNamesShort(m.team2Id);
                                    const score1Str = m.score1 ? m.score1.join('/') : '';
                                    const score2Str = m.score2 ? m.score2.join('/') : '';
                                    const isWO = m.isWO;

                                    return `
                                        <div class="bracket-match" style="width: 200px;">
                                            <div class="bracket-match-header" style="display: flex; justify-content: space-between;">
                                                <span>Pista: ${m.court || 'Por asignar'}</span>
                                                <span>${m.time || '--:--'}</span>
                                            </div>
                                            <div class="bracket-team-row ${m.winnerId && m.winnerId === m.team1Id ? 'winner' : ''}">
                                                <span class="bracket-team-name" title="${getCoupleNames(m.team1Id)}">${t1Name}</span>
                                                <span class="score">${isWO && m.winnerId === m.team1Id ? 'W.O.' : score1Str}</span>
                                            </div>
                                            <div class="bracket-team-row ${m.winnerId && m.winnerId === m.team2Id ? 'winner' : ''}">
                                                <span class="bracket-team-name" title="${getCoupleNames(m.team2Id)}">${t2Name}</span>
                                                <span class="score">${isWO && m.winnerId === m.team2Id ? 'W.O.' : score2Str}</span>
                                            </div>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    },

    renderMatchesListSection(t) {
        if (!t.matches || t.matches.length === 0) {
            return `
                <div style="text-align: center; padding: 2rem 0; color: var(--text-muted); font-size: 0.95rem;">
                    No hay partidos programados para este torneo todavía.
                </div>
            `;
        }

        const getCoupleNames = (coupleId) => {
            const c = t.couples.find(cp => cp.id === coupleId);
            return c ? `${c.player1} / ${c.player2}` : 'Por definir';
        };

        const roundNames = t.maxCouples === 8 
            ? ['Cuartos de Final', 'Semifinal', 'Gran Final']
            : ['Semifinal', 'Gran Final'];

        return `
            <div style="overflow-x: auto;">
                <table class="tournament-management-table" style="font-size: 0.85rem;">
                    <thead>
                        <tr style="border-bottom: 1px solid var(--border-color);">
                            <th style="text-align: left; padding: 0.75rem;">Fase / Ronda</th>
                            <th style="text-align: left; padding: 0.75rem;">Encuentro</th>
                            <th style="text-align: center; padding: 0.75rem; width: 100px;">Pista</th>
                            <th style="text-align: center; padding: 0.75rem; width: 80px;">Hora</th>
                            <th style="text-align: center; padding: 0.75rem; width: 100px;">Resultado</th>
                            <th style="text-align: center; padding: 0.75rem; width: 100px;">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${t.matches.map(m => {
                            const t1 = getCoupleNames(m.team1Id);
                            const t2 = getCoupleNames(m.team2Id);
                            
                            let resultStr = '—';
                            if (m.completed) {
                                if (m.isWO) {
                                    resultStr = 'W.O.';
                                } else if (m.score1 && m.score2) {
                                    resultStr = `${m.score1.join('/')} - ${m.score2.join('/')}`;
                                }
                            }

                            return `
                                <tr style="border-bottom: 1px solid var(--border-color);">
                                    <td style="padding: 1rem 0.75rem; font-weight: 600;">
                                        ${roundNames[m.round]} ${m.stage ? `<span style="font-size: 0.75rem; color: var(--text-muted); font-weight: normal; display: block;">${m.stage}</span>` : ''}
                                    </td>
                                    <td style="padding: 1rem 0.75rem;">
                                        <div style="display: flex; flex-direction: column; gap: 0.15rem;">
                                            <span style="font-weight: 500; color: ${m.completed && m.winnerId === m.team1Id ? 'var(--color-success)' : 'inherit'};">${t1}</span>
                                            <span style="font-size: 0.7rem; color: var(--text-muted); padding-left: 0.5rem;">vs</span>
                                            <span style="font-weight: 500; color: ${m.completed && m.winnerId === m.team2Id ? 'var(--color-success)' : 'inherit'};">${t2}</span>
                                        </div>
                                    </td>
                                    <td style="padding: 1rem 0.75rem; text-align: center; font-weight: 600;">
                                        <span class="badge" style="background: rgba(59, 130, 246, 0.1); color: #3b82f6; border: 1px solid rgba(59, 130, 246, 0.25); text-transform: none; font-size: 0.7rem; padding: 0.25rem 0.5rem;">
                                            ${m.court || 'Por asignar'}
                                        </span>
                                    </td>
                                    <td style="padding: 1rem 0.75rem; text-align: center; font-family: monospace; font-weight: bold;">
                                        ${m.time || '—'}
                                    </td>
                                    <td style="padding: 1rem 0.75rem; text-align: center; font-weight: bold; font-family: monospace; color: ${m.completed ? 'var(--color-primary)' : 'inherit'};">
                                        ${resultStr}
                                    </td>
                                    <td style="padding: 1rem 0.75rem; text-align: center;">
                                        ${m.completed 
                                            ? `<span class="badge badge-silver" style="font-size: 0.65rem;">Finalizado</span>`
                                            : `<span class="badge badge-open" style="font-size: 0.65rem;">Programado</span>`
                                        }
                                    </td>
                                </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }
};
