/* js/store.js - LocalStorage State Management & Seed Data (Sportelia High-Fidelity Update) */

const STORE_KEY = 'padelify_data_v1';

// Seed de categorías para el selector premium
const availableCategories = [
    "Femenina - Primera",
    "Femenina - Segunda",
    "Femenina - Segunda A",
    "Femenina - Segunda B",
    "Femenina - Tercera",
    "Mixto - Mixtos C",
    "Masculino - Primera",
    "Masculino - Segunda",
    "Masculino - Segunda A",
    "Masculino - Segunda B",
    "Masculino - Tercera"
];

// Seed de torneos con partidos pre-cargados con hora, pista y división
const defaultTournaments = [
    {
        id: '1',
        title: 'Torneo Express Pádel Portitxol',
        date: '31 Jun 2026',
        category: 'Mixto - Mixtos C',
        price: 30,
        maxCouples: 8,
        image: 'padel_oro.png',
        status: 'En Curso',
        description: 'Torneo Express del Club Pádel Portitxol. Ven a jugar partidos continuos, comida y música en vivo al terminar. Premios increíbles.',
        couples: [
            { id: 'c1', player1: 'Michael Mcl', player2: 'Kieran M', phone1: '600111222', phone2: '600333444', paid: true, date: '2026-05-10', username1: 'galan' },
            { id: 'c2', player1: 'Gigante', player2: 'Lusillo', phone1: '611111222', phone2: '611333444', paid: true, date: '2026-05-12' },
            { id: 'c3', player1: 'Juan Montero', player2: 'Olé Olé Mi Monterito', phone1: '622111222', phone2: '622333444', paid: true, date: '2026-05-14' },
            { id: 'c4', player1: 'Xesc Mulet', player2: 'Ramon Pons', phone1: '633111222', phone2: '633333444', paid: true, date: '2026-05-15' },
            { id: 'c5', player1: 'Andreu Tauler', player2: 'Enzo De Paola', phone1: '644111222', phone2: '644333444', paid: true, date: '2026-05-16' },
            { id: 'c6', player1: 'Kiki Maya Aguardiente', player2: 'Juan De Los Peluos', phone1: '655111222', phone2: '655333444', paid: true, date: '2026-05-18' },
            { id: 'c7', player1: 'Adrián Pericás', player2: 'Xavi Garrido', phone1: '666111222', phone2: '666333444', paid: true, date: '2026-05-19' },
            { id: 'c8', player1: 'Lucas Henrique Araujo', player2: 'David Alzamora', phone1: '677111222', phone2: '677333444', paid: true, date: '2026-05-20', username1: 'lebron' }
        ],
        matches: [
            {
                id: 'm1_0_0',
                round: 0,
                matchIndex: 0,
                team1Id: 'c1',
                team2Id: 'c2',
                score1: [5],
                score2: [9],
                winnerId: 'c2',
                completed: true,
                divisionCode: 'M3',
                stage: 'Grupo 1 (3)',
                date: 'DOM. 31',
                time: '09:00',
                court: 'PISTA 5'
            },
            {
                id: 'm1_0_1',
                round: 0,
                matchIndex: 1,
                team1Id: 'c3',
                team2Id: 'c4',
                score1: [5],
                score2: [9],
                winnerId: 'c4',
                completed: true,
                divisionCode: 'M3',
                stage: 'Grupo 2 (1)',
                date: 'DOM. 31',
                time: '09:00',
                court: 'PISTA 6'
            },
            {
                id: 'm1_0_2',
                round: 0,
                matchIndex: 2,
                team1Id: 'c5',
                team2Id: 'c6',
                score1: [3],
                score2: [9],
                winnerId: 'c6',
                completed: true,
                divisionCode: 'M5',
                stage: 'Grupo 1 (3)',
                date: 'DOM. 31',
                time: '09:00',
                court: 'PISTA 7'
            },
            {
                id: 'm1_0_3',
                round: 0,
                matchIndex: 3,
                team1Id: 'c7',
                team2Id: 'c8',
                score1: null,
                score2: null,
                winnerId: 'c8',
                completed: true,
                isWO: true,
                divisionCode: 'M5',
                stage: 'Grupo 2 (1)',
                date: 'DOM. 31',
                time: '09:00',
                court: 'PISTA 8'
            },
            {
                id: 'm1_1_0',
                round: 1,
                matchIndex: 0,
                team1Id: 'c2',
                team2Id: 'c4',
                score1: [9],
                score2: [6],
                winnerId: 'c2',
                completed: true,
                divisionCode: 'M3',
                stage: 'Grupo 1 (1)',
                date: 'DOM. 31',
                time: '10:00',
                court: 'PISTA 8'
            },
            {
                id: 'm1_1_1',
                round: 1,
                matchIndex: 1,
                team1Id: 'c6',
                team2Id: 'c8',
                score1: [9],
                score2: [2],
                winnerId: 'c6',
                completed: true,
                divisionCode: 'M3',
                stage: 'Grupo 2 (2)',
                date: 'DOM. 31',
                time: '10:00',
                court: 'PISTA 10'
            },
            {
                id: 'm1_2_0',
                round: 2,
                matchIndex: 0,
                team1Id: 'c2',
                team2Id: 'c6',
                score1: null,
                score2: null,
                winnerId: null,
                completed: false,
                divisionCode: 'XC',
                stage: 'Gran Final',
                date: 'DOM. 31',
                time: '12:00',
                court: 'PISTA CENTRAL'
            }
        ]
    },
    {
        id: '2',
        title: 'Open de Primavera - Padel Arena',
        date: '25-28 Jun 2026',
        category: 'Plata',
        price: 45,
        maxCouples: 8,
        image: 'padel_plata.png',
        status: 'Abierto',
        description: 'Torneo de nivel medio-alto en segunda categoría. Disfruta de la mejor infraestructura y organización.',
        couples: [
            { id: 'c2_1', player1: 'Carlos Martínez', player2: 'David López', phone1: '688111222', phone2: '688333444', paid: true, date: '2026-05-22' },
            { id: 'c2_2', player1: 'Sergio Ramos', player2: 'Luka Modric', phone1: '699111222', phone2: '699333444', paid: true, date: '2026-05-24' }
        ],
        matches: []
    }
];

// Seed de Solicitudes de Inscripción
const defaultRegistrations = [
    {
        id: 'reg_1',
        tournamentId: '1',
        tournamentTitle: 'Torneo Express Pádel Portitxol',
        player1: 'Nicolás Saavedra',
        player2: 'Daniela',
        phone1: '600123456',
        phone2: '600654321',
        category: 'Mixto - Mixtos C',
        status: 'PENDIENTE',
        date: '2026-06-02',
        creator: 'Administrador',
        availability: 'Tardes y Sábados',
        avatar1: 'C',
        avatar2: 'C'
    },
    {
        id: 'reg_2',
        tournamentId: '1',
        tournamentTitle: 'Torneo Express Pádel Portitxol',
        player1: 'Clara Pardo',
        player2: 'Vladimiro Pardo',
        phone1: '611123456',
        phone2: '611654321',
        category: 'Mixto - Mixtos C',
        status: 'PENDIENTE',
        date: '2026-06-02',
        creator: 'Administrador',
        availability: 'Flexible todo el día',
        avatar1: 'D',
        avatar2: 'D'
    },
    {
        id: 'reg_3',
        tournamentId: '1',
        tournamentTitle: 'Torneo Express Pádel Portitxol',
        player1: 'Rafaelito',
        player2: 'Ana Franco',
        phone1: '622123456',
        phone2: '622654321',
        category: 'Mixto - Mixtos C',
        status: 'ACEPTADA',
        date: '2026-06-01',
        creator: 'Administrador',
        availability: 'Sábados completo',
        avatar1: 'C',
        avatar2: 'C'
    },
    {
        id: 'reg_4',
        tournamentId: '1',
        tournamentTitle: 'Torneo Express Pádel Portitxol',
        player1: 'Aina Ferrer',
        player2: 'Luis Valverde',
        phone1: '633123456',
        phone2: '633654321',
        category: 'Mixto - Mixtos C',
        status: 'PENDIENTE',
        date: '2026-06-02',
        creator: 'Administrador',
        availability: 'Sólo Domingos',
        avatar1: 'D',
        avatar2: 'D'
    }
];

// Seed de Cuentas de Usuario
const defaultUsers = [
    { username: 'admin', password: 'admin123', fullName: 'Super Administrador (Club)', role: 'ADMIN', isSuper: true },
    { username: 'club_manager', password: 'manager123', fullName: 'Carlos (Director Deportivo)', role: 'ADMIN', isSuper: false },
    { username: 'lebron', password: '123', fullName: 'Juan Lebrón', role: 'PLAYER' },
    { username: 'galan', password: '123', fullName: 'Alejandro Galán', role: 'PLAYER' },
    { username: 'director_sandro', password: '123', fullName: 'Sandro Pericás (Director Prueba)', role: 'PLAYER' },
    { username: 'director_marta', password: '123', fullName: 'Marta Alcover (Coordinadora)', role: 'PLAYER' },
    { username: 'director_toni', password: '123', fullName: 'Toni Rigo (Organizador)', role: 'PLAYER' }
];

class PadelifyStore {
    constructor() {
        this.state = {
            tournaments: [],
            transactions: [],
            users: [],
            registrations: [],
            currentUser: null
        };
        this.init();
    }

    init() {
        const stored = localStorage.getItem(STORE_KEY);
        if (stored) {
            try {
                this.state = JSON.parse(stored);
                if (!this.state.blockedSlots) {
                    this.state.blockedSlots = [];
                }
                // Asegurar que todos los directores de prueba existan en la lista de usuarios cargada
                defaultUsers.forEach(u => {
                    const exists = this.state.users.some(existing => existing.username === u.username);
                    if (!exists) {
                        this.state.users.push(u);
                    }
                });
                this.save();
            } catch (e) {
                console.error("Error al cargar la base de datos localStorage, reseteando...", e);
                this.reset();
            }
        } else {
            this.reset();
        }
    }

    save() {
        localStorage.setItem(STORE_KEY, JSON.stringify(this.state));
    }

    reset() {
        this.state = {
            tournaments: [...defaultTournaments],
            users: [...defaultUsers],
            registrations: [...defaultRegistrations],
            currentUser: null,
            blockedSlots: [],
            transactions: defaultTournaments.reduce((acc, t) => {
                t.couples.forEach(c => {
                    if (c.paid) {
                        acc.push({
                            id: `tx_${Math.random().toString(36).substr(2, 9)}`,
                            tournamentId: t.id,
                            tournamentTitle: t.title,
                            coupleId: c.id,
                            players: `${c.player1} / ${c.player2}`,
                            amount: t.price,
                            date: c.date
                        });
                    }
                });
                return acc;
            }, [])
        };
        this.save();
    }

    // --- AUTENTICACIÓN ---
    login(username, password) {
        let cleanedUser = username.toLowerCase().trim();
        const cleanedPass = password.toLowerCase().trim().replace(/\s+/g, ''); // Quitar espacios

        // Mapeo dinámico si el usuario ingresa la clave en el campo de usuario por error
        if (cleanedUser === 'lebron123' || cleanedUser === 'lebron 1 2 3' || cleanedUser === 'lebron123') {
            cleanedUser = 'lebron';
        } else if (cleanedUser === 'admin123' || cleanedUser === 'admin 1 2 3') {
            cleanedUser = 'admin';
        }

        const u = this.state.users.find(user => user.username.toLowerCase() === cleanedUser);
        if (!u) return { error: 'Nombre de usuario no encontrado.' };

        // Comprobación flexible para contraseñas demo
        let isPassValid = u.password === password;
        if (!isPassValid) {
            if (cleanedUser === 'admin' && (cleanedPass === '123' || cleanedPass === 'admin123' || cleanedPass === 'admin')) {
                isPassValid = true;
            } else if (cleanedUser === 'lebron' && (cleanedPass === '123' || cleanedPass === 'lebron123' || cleanedPass === 'lebron')) {
                isPassValid = true;
            }
        }

        if (!isPassValid) return { error: 'Contraseña incorrecta.' };
        this.state.currentUser = u;
        this.save();
        return { success: true, user: u };
    }

    logout() {
        this.state.currentUser = null;
        this.save();
    }

    register(username, password, fullName) {
        const exists = this.state.users.some(user => user.username.toLowerCase() === username.toLowerCase().trim());
        if (exists) return { error: 'El nombre de usuario ya está registrado.' };

        const newUser = {
            username: username.toLowerCase().trim(),
            password: password,
            fullName: fullName.trim(),
            role: 'PLAYER',
            isSuper: false
        };

        this.state.users.push(newUser);
        this.save();
        return { success: true, user: newUser };
    }

    updateUserProfile(username, data) {
        const user = this.state.users.find(u => u.username.toLowerCase() === username.toLowerCase().trim());
        if (!user) return { error: 'Usuario no encontrado' };

        if (data.fullName) user.fullName = data.fullName.trim();
        if (data.password) user.password = data.password;
        if (data.preferences) user.preferences = data.preferences;

        if (this.state.currentUser && this.state.currentUser.username.toLowerCase() === username.toLowerCase().trim()) {
            this.state.currentUser.fullName = user.fullName;
            this.state.currentUser.password = user.password;
            this.state.currentUser.preferences = user.preferences;
        }

        this.save();
        return { success: true, user };
    }

    getCurrentUser() {
        return this.state.currentUser;
    }

    getUsers() {
        return this.state.users;
    }

    setAdminRole(username, isAdmin) {
        const user = this.state.users.find(u => u.username === username);
        if (!user) return { error: 'Usuario no encontrado' };
        
        if (user.isSuper && !isAdmin) {
            return { error: 'No puedes degradar al Administrador Principal del Club.' };
        }

        user.role = isAdmin ? 'ADMIN' : 'PLAYER';
        
        if (this.state.currentUser && this.state.currentUser.username === username) {
            this.state.currentUser.role = user.role;
        }

        this.save();
        return { success: true, user };
    }

    // --- MESA DE CONTROL / REGISTROS ---
    getRegistrations(tournamentId = null) {
        if (tournamentId) {
            return this.state.registrations.filter(r => r.tournamentId === tournamentId);
        }
        return this.state.registrations;
    }

    updateRegistrationStatus(regId, status) {
        const reg = this.state.registrations.find(r => r.id === regId);
        if (!reg) return { error: 'Solicitud no encontrada' };

        reg.status = status;

        if (status === 'ACEPTADA') {
            const t = this.getTournament(reg.tournamentId);
            if (t) {
                const coupleExists = t.couples.some(c => c.player1 === reg.player1 && c.player2 === reg.player2);
                if (!coupleExists && t.couples.length < t.maxCouples) {
                    const newCouple = {
                        id: `c_${Math.random().toString(36).substr(2, 9)}`,
                        player1: reg.player1,
                        player2: reg.player2,
                        phone1: reg.phone1,
                        phone2: reg.phone2,
                        paid: true,
                        date: new Date().toISOString().split('T')[0]
                    };
                    t.couples.push(newCouple);

                    if (t.couples.length === t.maxCouples) {
                        t.status = 'En Curso';
                        this.generateBrackets(t);
                    }
                }
            }
        }

        this.save();
        return { success: true, registration: reg };
    }

    addRegistration(regData) {
        const newReg = {
            id: `reg_${Math.random().toString(36).substr(2, 9)}`,
            tournamentId: regData.tournamentId,
            tournamentTitle: regData.tournamentTitle,
            player1: regData.player1,
            player2: regData.player2,
            phone1: regData.phone1,
            phone2: regData.phone2,
            category: regData.category,
            status: 'PENDIENTE',
            date: new Date().toISOString().split('T')[0],
            creator: regData.creator || 'Usuario',
            availability: regData.availability || 'Flexible',
            avatar1: regData.player1.charAt(0).toUpperCase(),
            avatar2: regData.player2.charAt(0).toUpperCase()
        };

        this.state.registrations.push(newReg);
        this.save();
        return newReg;
    }

    // --- CATEGORÍAS ---
    getCategories() {
        return availableCategories;
    }

    // --- TORNEOS Y PARTIDOS ---
    getTournaments() {
        return this.state.tournaments;
    }

    getTournament(id) {
        return this.state.tournaments.find(t => t.id === id);
    }

    createTournament(t) {
        const newTournament = {
            id: `t_${Math.random().toString(36).substr(2, 9)}`,
            title: t.title,
            date: t.date,
            category: t.category,
            price: Number(t.price),
            maxCouples: Number(t.maxCouples),
            image: t.image || 'padel_plata.png',
            status: 'Abierto',
            description: t.description || 'Sin descripción adicional.',
            individual: t.individual || false,
            forceOpen: t.forceOpen || false,
            availabilityOptions: t.availabilityOptions || false,
            couples: [],
            matches: []
        };
        this.state.tournaments.push(newTournament);
        this.save();
        return newTournament;
    }

    cancelTournament(id) {
        const t = this.getTournament(id);
        if (!t) return { error: 'Torneo no encontrado' };
        t.status = 'Cancelado';
        this.save();
        return { success: true, tournament: t };
    }

    deleteTournament(id) {
        const idx = this.state.tournaments.findIndex(t => t.id === id);
        if (idx === -1) return { error: 'Torneo no encontrado' };
        this.state.tournaments.splice(idx, 1);
        this.save();
        return { success: true };
    }

    generateBrackets(t) {
        const shuffled = [...t.couples].sort(() => Math.random() - 0.5);
        const matches = [];
        const maxCouples = t.maxCouples;

        const codes = ['M3', 'M5', 'XC'];

        if (maxCouples === 8) {
            for (let i = 0; i < 4; i++) {
                matches.push({
                    id: `m${t.id}_0_${i}`,
                    round: 0,
                    matchIndex: i,
                    team1Id: shuffled[i * 2]?.id || null,
                    team2Id: shuffled[i * 2 + 1]?.id || null,
                    score1: null,
                    score2: null,
                    winnerId: null,
                    completed: false,
                    divisionCode: codes[i % codes.length],
                    stage: `Grupo ${i + 1} (${Math.floor(Math.random() * 3) + 1})`,
                    date: 'DOM. 31',
                    time: `${9 + i}:00`,
                    court: `PISTA ${i + 5}`
                });
            }
            for (let i = 0; i < 2; i++) {
                matches.push({
                    id: `m${t.id}_1_${i}`,
                    round: 1,
                    matchIndex: i,
                    team1Id: null,
                    team2Id: null,
                    score1: null,
                    score2: null,
                    winnerId: null,
                    completed: false,
                    divisionCode: 'M3',
                    stage: `Grupo ${i + 1} (F)`,
                    date: 'DOM. 31',
                    time: `11:00`,
                    court: `PISTA ${i + 9}`
                });
            }
            matches.push({
                id: `m${t.id}_2_0`,
                round: 2,
                matchIndex: 0,
                team1Id: null,
                team2Id: null,
                score1: null,
                score2: null,
                winnerId: null,
                completed: false,
                divisionCode: 'XC',
                stage: 'Gran Final',
                date: 'DOM. 31',
                time: '12:30',
                court: 'PISTA CENTRAL'
            });
        } else if (maxCouples === 4) {
            for (let i = 0; i < 2; i++) {
                matches.push({
                    id: `m${t.id}_0_${i}`,
                    round: 0,
                    matchIndex: i,
                    team1Id: shuffled[i * 2]?.id || null,
                    team2Id: shuffled[i * 2 + 1]?.id || null,
                    score1: null,
                    score2: null,
                    winnerId: null,
                    completed: false,
                    divisionCode: 'M3',
                    stage: `Grupo ${i + 1}`,
                    date: 'SAB. 30',
                    time: '18:00',
                    court: `PISTA ${i + 1}`
                });
            }
            matches.push({
                id: `m${t.id}_1_0`,
                round: 1,
                matchIndex: 0,
                team1Id: null,
                team2Id: null,
                score1: null,
                score2: null,
                winnerId: null,
                completed: false,
                divisionCode: 'XC',
                stage: 'Gran Final',
                date: 'SAB. 30',
                time: '19:30',
                court: 'PISTA CENTRAL'
            });
        }

        t.matches = matches;
    }

    updateMatchSchedule(tournamentId, matchId, scheduleData) {
        const t = this.getTournament(tournamentId);
        if (!t) return { error: 'Torneo no encontrado' };

        const match = t.matches.find(m => m.id === matchId);
        if (!match) return { error: 'Partido no encontrado' };

        match.date = scheduleData.date;
        match.time = scheduleData.time;
        match.court = scheduleData.court;
        if (scheduleData.divisionCode) match.divisionCode = scheduleData.divisionCode;
        if (scheduleData.stage) match.stage = scheduleData.stage;

        this.save();
        return { success: true, match };
    }

    updateCouple(tournamentId, coupleId, updatedFields) {
        const t = this.getTournament(tournamentId);
        if (!t) return { error: 'Torneo no encontrado' };

        const couple = t.couples.find(c => c.id === coupleId);
        if (!couple) return { error: 'Pareja no encontrada' };

        Object.assign(couple, updatedFields);
        this.save();
        return { success: true, couple };
    }

    toggleBlockSlot(court, time, date) {
        if (!this.state.blockedSlots) {
            this.state.blockedSlots = [];
        }
        const index = this.state.blockedSlots.findIndex(s => s.court.toUpperCase().trim() === court.toUpperCase().trim() && s.time === time && s.date === date);
        if (index === -1) {
            this.state.blockedSlots.push({ court, time, date });
            this.save();
            return { success: true, blocked: true };
        } else {
            this.state.blockedSlots.splice(index, 1);
            this.save();
            return { success: true, blocked: false };
        }
    }

    isSlotBlocked(court, time, date) {
        if (!this.state.blockedSlots) return false;
        return this.state.blockedSlots.some(s => s.court.toUpperCase().trim() === court.toUpperCase().trim() && s.time === time && s.date === date);
    }

    clearMatchSchedule(tournamentId, matchId) {
        const t = this.getTournament(tournamentId);
        if (!t) return { error: 'Torneo no encontrado' };

        const match = t.matches.find(m => m.id === matchId);
        if (!match) return { error: 'Partido no encontrado' };

        match.date = '';
        match.time = '';
        match.court = '';

        this.save();
        return { success: true, match };
    }

    updateMatchScore(tournamentId, matchId, score1, score2, winnerId, isWO = false) {
        const t = this.getTournament(tournamentId);
        if (!t) return { error: 'Torneo no encontrado' };

        const match = t.matches.find(m => m.id === matchId);
        if (!match) return { error: 'Partido no encontrado' };

        match.score1 = score1;
        match.score2 = score2;
        match.winnerId = winnerId;
        match.completed = true;
        match.isWO = isWO;

        this.propagateWinner(t, match);

        const totalRounds = t.maxCouples === 8 ? 3 : 2;
        const finalMatch = t.matches.find(m => m.round === totalRounds - 1);
        if (finalMatch && finalMatch.completed) {
            t.status = 'Finalizado';
        }

        this.save();
        return { success: true, tournament: t };
    }

    propagateWinner(t, completedMatch) {
        const currentRound = completedMatch.round;
        const currentIndex = completedMatch.matchIndex;
        const nextRound = currentRound + 1;
        const nextIndex = Math.floor(currentIndex / 2);
        const position = currentIndex % 2 === 0 ? 'team1Id' : 'team2Id';

        const nextMatch = t.matches.find(m => m.round === nextRound && m.matchIndex === nextIndex);
        if (nextMatch) {
            nextMatch[position] = completedMatch.winnerId;
        }
    }

    getTransactions() {
        return this.state.transactions;
    }

    getRevenue() {
        return this.state.transactions.reduce((sum, tx) => sum + tx.amount, 0);
    }
}

export const store = new PadelifyStore();
