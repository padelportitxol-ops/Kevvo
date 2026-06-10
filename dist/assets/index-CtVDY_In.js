(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=e(o);fetch(o.href,r)}})();const Q="padelify_data_v1",te=["Femenina - Primera","Femenina - Segunda","Femenina - Segunda A","Femenina - Segunda B","Femenina - Tercera","Mixto - Mixtos C","Masculino - Primera","Masculino - Segunda","Masculino - Segunda A","Masculino - Segunda B","Masculino - Tercera"],Y=[{id:"1",title:"Torneo Express Pádel Portitxol",date:"31 Jun 2026",category:"Mixto - Mixtos C",price:30,maxCouples:8,image:"padel_oro.png",status:"En Curso",description:"Torneo Express del Club Pádel Portitxol. Ven a jugar partidos continuos, comida y música en vivo al terminar. Premios increíbles.",couples:[{id:"c1",player1:"Michael Mcl",player2:"Kieran M",phone1:"600111222",phone2:"600333444",paid:!0,date:"2026-05-10",username1:"galan"},{id:"c2",player1:"Gigante",player2:"Lusillo",phone1:"611111222",phone2:"611333444",paid:!0,date:"2026-05-12"},{id:"c3",player1:"Juan Montero",player2:"Olé Olé Mi Monterito",phone1:"622111222",phone2:"622333444",paid:!0,date:"2026-05-14"},{id:"c4",player1:"Xesc Mulet",player2:"Ramon Pons",phone1:"633111222",phone2:"633333444",paid:!0,date:"2026-05-15"},{id:"c5",player1:"Andreu Tauler",player2:"Enzo De Paola",phone1:"644111222",phone2:"644333444",paid:!0,date:"2026-05-16"},{id:"c6",player1:"Kiki Maya Aguardiente",player2:"Juan De Los Peluos",phone1:"655111222",phone2:"655333444",paid:!0,date:"2026-05-18"},{id:"c7",player1:"Adrián Pericás",player2:"Xavi Garrido",phone1:"666111222",phone2:"666333444",paid:!0,date:"2026-05-19"},{id:"c8",player1:"Lucas Henrique Araujo",player2:"David Alzamora",phone1:"677111222",phone2:"677333444",paid:!0,date:"2026-05-20",username1:"lebron"}],matches:[{id:"m1_0_0",round:0,matchIndex:0,team1Id:"c1",team2Id:"c2",score1:[5],score2:[9],winnerId:"c2",completed:!0,divisionCode:"M3",stage:"Grupo 1 (3)",date:"DOM. 31",time:"09:00",court:"PISTA 5"},{id:"m1_0_1",round:0,matchIndex:1,team1Id:"c3",team2Id:"c4",score1:[5],score2:[9],winnerId:"c4",completed:!0,divisionCode:"M3",stage:"Grupo 2 (1)",date:"DOM. 31",time:"09:00",court:"PISTA 6"},{id:"m1_0_2",round:0,matchIndex:2,team1Id:"c5",team2Id:"c6",score1:[3],score2:[9],winnerId:"c6",completed:!0,divisionCode:"M5",stage:"Grupo 1 (3)",date:"DOM. 31",time:"09:00",court:"PISTA 7"},{id:"m1_0_3",round:0,matchIndex:3,team1Id:"c7",team2Id:"c8",score1:null,score2:null,winnerId:"c8",completed:!0,isWO:!0,divisionCode:"M5",stage:"Grupo 2 (1)",date:"DOM. 31",time:"09:00",court:"PISTA 8"},{id:"m1_1_0",round:1,matchIndex:0,team1Id:"c2",team2Id:"c4",score1:[9],score2:[6],winnerId:"c2",completed:!0,divisionCode:"M3",stage:"Grupo 1 (1)",date:"DOM. 31",time:"10:00",court:"PISTA 8"},{id:"m1_1_1",round:1,matchIndex:1,team1Id:"c6",team2Id:"c8",score1:[9],score2:[2],winnerId:"c6",completed:!0,divisionCode:"M3",stage:"Grupo 2 (2)",date:"DOM. 31",time:"10:00",court:"PISTA 10"},{id:"m1_2_0",round:2,matchIndex:0,team1Id:"c2",team2Id:"c6",score1:null,score2:null,winnerId:null,completed:!1,divisionCode:"XC",stage:"Gran Final",date:"DOM. 31",time:"12:00",court:"PISTA CENTRAL"}]},{id:"2",title:"Open de Primavera - Padel Arena",date:"25-28 Jun 2026",category:"Plata",price:45,maxCouples:8,image:"padel_plata.png",status:"Abierto",description:"Torneo de nivel medio-alto en segunda categoría. Disfruta de la mejor infraestructura y organización.",couples:[{id:"c2_1",player1:"Carlos Martínez",player2:"David López",phone1:"688111222",phone2:"688333444",paid:!0,date:"2026-05-22"},{id:"c2_2",player1:"Sergio Ramos",player2:"Luka Modric",phone1:"699111222",phone2:"699333444",paid:!0,date:"2026-05-24"}],matches:[]}],ae=[{id:"reg_1",tournamentId:"1",tournamentTitle:"Torneo Express Pádel Portitxol",player1:"Nicolás Saavedra",player2:"Daniela",phone1:"600123456",phone2:"600654321",category:"Mixto - Mixtos C",status:"PENDIENTE",date:"2026-06-02",creator:"Administrador",availability:"Tardes y Sábados",avatar1:"C",avatar2:"C"},{id:"reg_2",tournamentId:"1",tournamentTitle:"Torneo Express Pádel Portitxol",player1:"Clara Pardo",player2:"Vladimiro Pardo",phone1:"611123456",phone2:"611654321",category:"Mixto - Mixtos C",status:"PENDIENTE",date:"2026-06-02",creator:"Administrador",availability:"Flexible todo el día",avatar1:"D",avatar2:"D"},{id:"reg_3",tournamentId:"1",tournamentTitle:"Torneo Express Pádel Portitxol",player1:"Rafaelito",player2:"Ana Franco",phone1:"622123456",phone2:"622654321",category:"Mixto - Mixtos C",status:"ACEPTADA",date:"2026-06-01",creator:"Administrador",availability:"Sábados completo",avatar1:"C",avatar2:"C"},{id:"reg_4",tournamentId:"1",tournamentTitle:"Torneo Express Pádel Portitxol",player1:"Aina Ferrer",player2:"Luis Valverde",phone1:"633123456",phone2:"633654321",category:"Mixto - Mixtos C",status:"PENDIENTE",date:"2026-06-02",creator:"Administrador",availability:"Sólo Domingos",avatar1:"D",avatar2:"D"}],X=[{username:"admin",password:"admin123",fullName:"Super Administrador (Club)",role:"ADMIN",isSuper:!0},{username:"club_manager",password:"manager123",fullName:"Carlos (Director Deportivo)",role:"ADMIN",isSuper:!1},{username:"lebron",password:"123",fullName:"Juan Lebrón",role:"PLAYER"},{username:"galan",password:"123",fullName:"Alejandro Galán",role:"PLAYER"},{username:"director_sandro",password:"123",fullName:"Sandro Pericás (Director Prueba)",role:"PLAYER"},{username:"director_marta",password:"123",fullName:"Marta Alcover (Coordinadora)",role:"PLAYER"},{username:"director_toni",password:"123",fullName:"Toni Rigo (Organizador)",role:"PLAYER"}];class re{constructor(){this.state={tournaments:[],transactions:[],users:[],registrations:[],currentUser:null},this.init()}init(){const t=localStorage.getItem(Q);if(t)try{this.state=JSON.parse(t),this.state.blockedSlots||(this.state.blockedSlots=[]),X.forEach(e=>{this.state.users.some(o=>o.username===e.username)||this.state.users.push(e)}),this.save()}catch(e){console.error("Error al cargar la base de datos localStorage, reseteando...",e),this.reset()}else this.reset()}save(){localStorage.setItem(Q,JSON.stringify(this.state))}reset(){this.state={tournaments:[...Y],users:[...X],registrations:[...ae],currentUser:null,blockedSlots:[],transactions:Y.reduce((t,e)=>(e.couples.forEach(a=>{a.paid&&t.push({id:`tx_${Math.random().toString(36).substr(2,9)}`,tournamentId:e.id,tournamentTitle:e.title,coupleId:a.id,players:`${a.player1} / ${a.player2}`,amount:e.price,date:a.date})}),t),[])},this.save()}login(t,e){let a=t.toLowerCase().trim();const o=e.toLowerCase().trim().replace(/\s+/g,"");a==="lebron123"||a==="lebron 1 2 3"||a==="lebron123"?a="lebron":(a==="admin123"||a==="admin 1 2 3")&&(a="admin");const r=this.state.users.find(d=>d.username.toLowerCase()===a);if(!r)return{error:"Nombre de usuario no encontrado."};let n=r.password===e;return n||(a==="admin"&&(o==="123"||o==="admin123"||o==="admin")||a==="lebron"&&(o==="123"||o==="lebron123"||o==="lebron"))&&(n=!0),n?(this.state.currentUser=r,this.save(),{success:!0,user:r}):{error:"Contraseña incorrecta."}}logout(){this.state.currentUser=null,this.save()}register(t,e,a){if(this.state.users.some(n=>n.username.toLowerCase()===t.toLowerCase().trim()))return{error:"El nombre de usuario ya está registrado."};const r={username:t.toLowerCase().trim(),password:e,fullName:a.trim(),role:"PLAYER",isSuper:!1};return this.state.users.push(r),this.save(),{success:!0,user:r}}updateUserProfile(t,e){const a=this.state.users.find(o=>o.username.toLowerCase()===t.toLowerCase().trim());return a?(e.fullName&&(a.fullName=e.fullName.trim()),e.password&&(a.password=e.password),e.preferences&&(a.preferences=e.preferences),this.state.currentUser&&this.state.currentUser.username.toLowerCase()===t.toLowerCase().trim()&&(this.state.currentUser.fullName=a.fullName,this.state.currentUser.password=a.password,this.state.currentUser.preferences=a.preferences),this.save(),{success:!0,user:a}):{error:"Usuario no encontrado"}}getCurrentUser(){return this.state.currentUser}getUsers(){return this.state.users}setAdminRole(t,e){const a=this.state.users.find(o=>o.username===t);return a?a.isSuper&&!e?{error:"No puedes degradar al Administrador Principal del Club."}:(a.role=e?"ADMIN":"PLAYER",this.state.currentUser&&this.state.currentUser.username===t&&(this.state.currentUser.role=a.role),this.save(),{success:!0,user:a}):{error:"Usuario no encontrado"}}getRegistrations(t=null){return t?this.state.registrations.filter(e=>e.tournamentId===t):this.state.registrations}updateRegistrationStatus(t,e){const a=this.state.registrations.find(o=>o.id===t);if(!a)return{error:"Solicitud no encontrada"};if(a.status=e,e==="ACEPTADA"){const o=this.getTournament(a.tournamentId);if(o&&!o.couples.some(n=>n.player1===a.player1&&n.player2===a.player2)&&o.couples.length<o.maxCouples){const n={id:`c_${Math.random().toString(36).substr(2,9)}`,player1:a.player1,player2:a.player2,phone1:a.phone1,phone2:a.phone2,paid:!0,date:new Date().toISOString().split("T")[0]};o.couples.push(n),o.couples.length===o.maxCouples&&(o.status="En Curso",this.generateBrackets(o))}}return this.save(),{success:!0,registration:a}}addRegistration(t){const e={id:`reg_${Math.random().toString(36).substr(2,9)}`,tournamentId:t.tournamentId,tournamentTitle:t.tournamentTitle,player1:t.player1,player2:t.player2,phone1:t.phone1,phone2:t.phone2,category:t.category,status:"PENDIENTE",date:new Date().toISOString().split("T")[0],creator:t.creator||"Usuario",availability:t.availability||"Flexible",avatar1:t.player1.charAt(0).toUpperCase(),avatar2:t.player2.charAt(0).toUpperCase()};return this.state.registrations.push(e),this.save(),e}getCategories(){return te}getTournaments(){return this.state.tournaments}getTournament(t){return this.state.tournaments.find(e=>e.id===t)}createTournament(t){const e={id:`t_${Math.random().toString(36).substr(2,9)}`,title:t.title,date:t.date,category:t.category,price:Number(t.price),maxCouples:Number(t.maxCouples),image:t.image||"padel_plata.png",status:"Abierto",description:t.description||"Sin descripción adicional.",individual:t.individual||!1,forceOpen:t.forceOpen||!1,availabilityOptions:t.availabilityOptions||!1,couples:[],matches:[]};return this.state.tournaments.push(e),this.save(),e}cancelTournament(t){const e=this.getTournament(t);return e?(e.status="Cancelado",this.save(),{success:!0,tournament:e}):{error:"Torneo no encontrado"}}deleteTournament(t){const e=this.state.tournaments.findIndex(a=>a.id===t);return e===-1?{error:"Torneo no encontrado"}:(this.state.tournaments.splice(e,1),this.save(),{success:!0})}generateBrackets(t){var n,d,l,s;const e=[...t.couples].sort(()=>Math.random()-.5),a=[],o=t.maxCouples,r=["M3","M5","XC"];if(o===8){for(let c=0;c<4;c++)a.push({id:`m${t.id}_0_${c}`,round:0,matchIndex:c,team1Id:((n=e[c*2])==null?void 0:n.id)||null,team2Id:((d=e[c*2+1])==null?void 0:d.id)||null,score1:null,score2:null,winnerId:null,completed:!1,divisionCode:r[c%r.length],stage:`Grupo ${c+1} (${Math.floor(Math.random()*3)+1})`,date:"DOM. 31",time:`${9+c}:00`,court:`PISTA ${c+5}`});for(let c=0;c<2;c++)a.push({id:`m${t.id}_1_${c}`,round:1,matchIndex:c,team1Id:null,team2Id:null,score1:null,score2:null,winnerId:null,completed:!1,divisionCode:"M3",stage:`Grupo ${c+1} (F)`,date:"DOM. 31",time:"11:00",court:`PISTA ${c+9}`});a.push({id:`m${t.id}_2_0`,round:2,matchIndex:0,team1Id:null,team2Id:null,score1:null,score2:null,winnerId:null,completed:!1,divisionCode:"XC",stage:"Gran Final",date:"DOM. 31",time:"12:30",court:"PISTA CENTRAL"})}else if(o===4){for(let c=0;c<2;c++)a.push({id:`m${t.id}_0_${c}`,round:0,matchIndex:c,team1Id:((l=e[c*2])==null?void 0:l.id)||null,team2Id:((s=e[c*2+1])==null?void 0:s.id)||null,score1:null,score2:null,winnerId:null,completed:!1,divisionCode:"M3",stage:`Grupo ${c+1}`,date:"SAB. 30",time:"18:00",court:`PISTA ${c+1}`});a.push({id:`m${t.id}_1_0`,round:1,matchIndex:0,team1Id:null,team2Id:null,score1:null,score2:null,winnerId:null,completed:!1,divisionCode:"XC",stage:"Gran Final",date:"SAB. 30",time:"19:30",court:"PISTA CENTRAL"})}t.matches=a}updateMatchSchedule(t,e,a){const o=this.getTournament(t);if(!o)return{error:"Torneo no encontrado"};const r=o.matches.find(n=>n.id===e);return r?(r.date=a.date,r.time=a.time,r.court=a.court,a.divisionCode&&(r.divisionCode=a.divisionCode),a.stage&&(r.stage=a.stage),this.save(),{success:!0,match:r}):{error:"Partido no encontrado"}}updateCouple(t,e,a){const o=this.getTournament(t);if(!o)return{error:"Torneo no encontrado"};const r=o.couples.find(n=>n.id===e);return r?(Object.assign(r,a),this.save(),{success:!0,couple:r}):{error:"Pareja no encontrada"}}toggleBlockSlot(t,e,a){this.state.blockedSlots||(this.state.blockedSlots=[]);const o=this.state.blockedSlots.findIndex(r=>r.court.toUpperCase().trim()===t.toUpperCase().trim()&&r.time===e&&r.date===a);return o===-1?(this.state.blockedSlots.push({court:t,time:e,date:a}),this.save(),{success:!0,blocked:!0}):(this.state.blockedSlots.splice(o,1),this.save(),{success:!0,blocked:!1})}isSlotBlocked(t,e,a){return this.state.blockedSlots?this.state.blockedSlots.some(o=>o.court.toUpperCase().trim()===t.toUpperCase().trim()&&o.time===e&&o.date===a):!1}clearMatchSchedule(t,e){const a=this.getTournament(t);if(!a)return{error:"Torneo no encontrado"};const o=a.matches.find(r=>r.id===e);return o?(o.date="",o.time="",o.court="",this.save(),{success:!0,match:o}):{error:"Partido no encontrado"}}updateMatchScore(t,e,a,o,r,n=!1){const d=this.getTournament(t);if(!d)return{error:"Torneo no encontrado"};const l=d.matches.find(g=>g.id===e);if(!l)return{error:"Partido no encontrado"};l.score1=a,l.score2=o,l.winnerId=r,l.completed=!0,l.isWO=n,this.propagateWinner(d,l);const s=d.maxCouples===8?3:2,c=d.matches.find(g=>g.round===s-1);return c&&c.completed&&(d.status="Finalizado"),this.save(),{success:!0,tournament:d}}propagateWinner(t,e){const a=e.round,o=e.matchIndex,r=a+1,n=Math.floor(o/2),d=o%2===0?"team1Id":"team2Id",l=t.matches.find(s=>s.round===r&&s.matchIndex===n);l&&(l[d]=e.winnerId)}getTransactions(){return this.state.transactions}getRevenue(){return this.state.transactions.reduce((t,e)=>t+e.amount,0)}}const y=new re;function x(i,t="success",e=4e3){const a=document.getElementById("toast-container");if(!a)return;const o=document.createElement("div");o.className=`toast toast-${t}`;let r="check-circle";t==="error"&&(r="alert-triangle"),t==="warning"&&(r="alert-circle"),t==="info"&&(r="info"),o.innerHTML=`
        <i data-lucide="${r}"></i>
        <span>${i}</span>
    `,a.appendChild(o),window.lucide&&window.lucide.createIcons(),setTimeout(()=>{o.classList.add("removing"),o.addEventListener("animationend",()=>{o.remove()})},e)}function K(i){let t="badge-gold";return i==="Plata"&&(t="badge-silver"),i==="Bronce"&&(t="badge-bronze"),`<span class="badge ${t}"><i data-lucide="tag"></i>${i}</span>`}function V(i){let t="badge-open",e=i,a="users";return i==="En Curso"?(t="badge-gold",e="En Curso",a="play"):i==="Finalizado"?(t="badge-silver",e="Finalizado",a="award"):i==="Completo"&&(t="badge-full",e="Completo",a="lock"),`<span class="badge ${t}"><i data-lucide="${a}"></i>${e}</span>`}function O(i){return new Intl.NumberFormat("es-ES",{style:"currency",currency:"EUR"}).format(i)}function $(){window.lucide&&window.lucide.createIcons()}const oe={render(){const i=document.getElementById("app-content");if(!i)return;const t=y.getTournaments(),e=t.length,a=t.reduce((l,s)=>l+s.couples.length*2,0),o=t.filter(l=>l.status==="En Curso").length;i.innerHTML=`
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
                        <span class="stat-val">${e}</span>
                        <span class="stat-label">Torneos</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-val">${a}</span>
                        <span class="stat-label">Jugadores</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-val">${o}</span>
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
        `,this.renderTournamentsList(t),$();const r=document.getElementById("search-input"),n=document.getElementById("category-filter"),d=()=>{const l=r.value.toLowerCase().trim(),s=n.value,c=t.filter(g=>{const m=g.title.toLowerCase().includes(l)||g.description.toLowerCase().includes(l),u=s?g.category.includes(s):!0;return m&&u});this.renderTournamentsList(c),$()};r&&r.addEventListener("input",d),n&&n.addEventListener("change",d)},renderTournamentsList(i){const t=document.getElementById("tournaments-grid");if(t){if(i.length===0){t.innerHTML=`
                <div class="glass-card" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                    <i data-lucide="info" style="width: 48px; height: 48px; color: var(--text-muted); margin-bottom: 1rem;"></i>
                    <p style="color: var(--text-muted); font-size: 1.1rem;">No se encontraron torneos con los criterios seleccionados.</p>
                </div>
            `;return}t.innerHTML=i.map(e=>{const a=e.couples.length/e.maxCouples*100,o=e.couples.length>=e.maxCouples,r=e.status;return`
                <div class="glass-card tournament-card glow-hover">
                    <!-- Banner Visual con Imagen Dinámica Limpia (Sin solapamientos de insignias) -->
                    <div class="t-card-banner" style="background-image: url('img/${e.image}')">
                    </div>

                    <!-- Contenido Informativo -->
                    <div class="t-card-body">
                        <!-- Insignias Neatly Placed inside the body to prevent overlapping (Estilo Botón Premium) -->
                        <div style="display: flex; gap: 0.5rem; margin-bottom: 0.85rem; flex-wrap: wrap;">
                            ${K(e.category.split(" - ")[0])}
                            ${V(r)}
                        </div>

                        <h3 class="t-card-title">${e.title}</h3>
                        <p style="font-size: 0.85rem; color: var(--text-main); margin-bottom: 1rem; line-clamp: 2; -webkit-line-clamp: 2; display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden; min-height: 40px;">
                            ${e.description}
                        </p>

                        <div class="t-card-meta-list">
                            <div class="t-card-meta-item">
                                <i data-lucide="calendar"></i>
                                <span>${e.date}</span>
                            </div>
                            <div class="t-card-meta-item">
                                <i data-lucide="users"></i>
                                <span>Parejas: ${e.couples.length} / ${e.maxCouples}</span>
                            </div>
                            <div class="t-card-meta-item">
                                <i data-lucide="credit-card"></i>
                                <span>Inscripción: ${O(e.price)}</span>
                            </div>
                        </div>

                        <!-- Barra de Plazas e Inscripción -->
                        <div class="t-card-slots" style="margin-top: auto; padding-top: 1rem;">
                            <div class="t-card-slots-info">
                                <span class="t-card-slots-label">Inscripciones</span>
                                <div class="t-card-slots-bar">
                                    <div class="t-card-slots-fill" style="width: ${a}%"></div>
                                </div>
                            </div>
                            
                            <a href="#/torneo/${e.id}" class="btn ${o||e.status!=="Abierto"?"btn-secondary":"btn-primary"} btn-sm">
                                <span>${o||e.status!=="Abierto"?"Ver Torneo":"Inscribirse"}</span>
                                <i data-lucide="arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            `}).join("")}}},ie={open(i,t){const e=y.getTournament(i);if(!e){x("Torneo no encontrado","error");return}let a=document.getElementById("checkout-overlay");a||(a=document.createElement("div"),a.id="checkout-overlay",a.className="checkout-overlay",document.body.appendChild(a)),a.innerHTML=`
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
                            ${e.title}
                        </h4>
                        <div style="display: flex; justify-content: space-between; font-size: 0.85rem; color: var(--text-muted);">
                            <span>Categoría: ${e.category}</span>
                            <span>Precio: <strong style="color: #ffffff">${O(e.price)}</strong></span>
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
                            <span>Pagar y Inscribirse • ${O(e.price)}</span>
                        </button>
                    </form>
                </div>
            </div>
        `,setTimeout(()=>{a.classList.add("active")},50),$(),this.bindEvents(i,t)},close(){const i=document.getElementById("checkout-overlay");i&&(i.classList.remove("active"),setTimeout(()=>{i.remove()},300))},bindEvents(i,t){const e=document.getElementById("checkout-overlay");document.getElementById("checkout-drawer");const a=document.getElementById("checkout-close"),o=document.getElementById("checkout-form"),r=document.getElementById("credit-card-3d"),n=document.getElementById("card-holder"),d=document.getElementById("card-number"),l=document.getElementById("card-expiry"),s=document.getElementById("card-cvc"),c=document.getElementById("card-holder-disp"),g=document.getElementById("card-num-disp"),m=document.getElementById("card-expiry-disp"),u=document.getElementById("card-cvc-disp"),f=document.getElementById("card-brand-logo");a.addEventListener("click",()=>this.close()),e.addEventListener("click",h=>{h.target===e&&this.close()}),s.addEventListener("focus",()=>r.classList.add("flipped")),s.addEventListener("blur",()=>r.classList.remove("flipped")),r.addEventListener("click",()=>r.classList.toggle("flipped")),n.addEventListener("input",h=>{const v=h.target.value.toUpperCase();c.textContent=v||"NOMBRE TITULAR"}),d.addEventListener("input",h=>{var L;let v=h.target.value.replace(/\D/g,"");v.startsWith("4")?(f.textContent="VISA",f.style.color="#3b82f6"):v.startsWith("5")?(f.textContent="MasterCard",f.style.color="#fb923c"):v.startsWith("3")?(f.textContent="AMEX",f.style.color="#38bdf8"):(f.textContent="CARD",f.style.color="#ffffff");let P=((L=v.match(/.{1,4}/g))==null?void 0:L.join(" "))||"";h.target.value=P,g.textContent=P||"•••• •••• •••• ••••"}),l.addEventListener("input",h=>{let v=h.target.value.replace(/\D/g,"");v.length>2&&(v=v.slice(0,2)+"/"+v.slice(2,4)),h.target.value=v,m.textContent=v||"MM/AA"}),s.addEventListener("input",h=>{let v=h.target.value.replace(/\D/g,"");h.target.value=v,u.textContent=v||"•••"}),o.addEventListener("submit",h=>{h.preventDefault();const v=document.getElementById("player1").value.trim(),P=document.getElementById("phone1").value.trim(),L=document.getElementById("player2").value.trim(),C=document.getElementById("phone2").value.trim(),A=document.getElementById("checkout-body");A.innerHTML=`
                <div class="checkout-success-view" style="min-height: 350px;">
                    <div class="spinner" style="width: 60px; height: 60px; border-top-color: #635bff; box-shadow: 0 0 20px rgba(99, 91, 255, 0.2); margin-bottom: 2rem;"></div>
                    <h3 style="font-family: var(--font-headings); font-size: 1.4rem; color: #ffffff; margin-bottom: 0.5rem;">Procesando Pago Seguro</h3>
                    <p style="color: var(--text-muted); font-size: 0.95rem;">Conectando con los servidores seguros de Stripe...</p>
                </div>
            `,setTimeout(()=>{const k=y.registerCouple(i,{player1:v,phone1:P,player2:L,phone2:C});if(k.error){x(k.error,"error"),this.close();return}x("¡Pago procesado con éxito!","success");const j=`ch_${Math.random().toString(36).substr(2,9).toUpperCase()}`;A.innerHTML=`
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
                                <span style="color: var(--text-main); font-weight: 500;">${j}</span>
                            </div>
                            <div class="receipt-row">
                                <span>Torneo:</span>
                                <span style="color: var(--text-main); font-weight: 500; text-align: right; max-width: 180px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                    ${k.tournament.title}
                                </span>
                            </div>
                            <div class="receipt-row">
                                <span>Categoría:</span>
                                <span style="color: var(--text-main); font-weight: 500;">${k.tournament.category}</span>
                            </div>
                            <div class="receipt-row">
                                <span>Pareja:</span>
                                <span style="color: var(--text-main); font-weight: 500; text-align: right; max-width: 180px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                    ${v} / ${L}
                                </span>
                            </div>
                            <div class="receipt-row total">
                                <span>Importe Total:</span>
                                <span>${O(k.tournament.price)}</span>
                            </div>
                        </div>

                        <button id="checkout-finish-btn" class="btn btn-primary" style="width: 100%; gap: 0.5rem; background: var(--color-success); box-shadow: 0 4px 15px rgba(16, 185, 129, 0.25);">
                            <span>Listo, volver al Torneo</span>
                            <i data-lucide="arrow-right"></i>
                        </button>
                    </div>
                `,$(),document.getElementById("checkout-finish-btn").addEventListener("click",()=>{this.close(),t&&t(k.tournament)})},2500)})}},se={render(i){const t=document.getElementById("app-content");if(!t)return;const e=y.getTournament(i);if(!e){t.innerHTML=`
                <div class="glass-card" style="text-align: center; padding: 4rem 2rem;">
                    <i data-lucide="alert-triangle" style="width: 60px; height: 60px; color: var(--color-error); margin-bottom: 1.5rem;"></i>
                    <h2 style="font-family: var(--font-headings); font-size: 2rem; margin-bottom: 0.5rem;">Torneo no encontrado</h2>
                    <p style="color: var(--text-muted); margin-bottom: 2rem;">El torneo que estás buscando no existe o ha sido retirado.</p>
                    <a href="#/" class="btn btn-primary">Volver al inicio</a>
                </div>
            `,$();return}const a=e.couples.length>=e.maxCouples,o=a&&e.status==="Abierto"?"Completo":e.status;t.innerHTML=`
            <!-- Migaja de Pan / Volver -->
            <div style="margin-bottom: 1.5rem;">
                <a href="#/" class="nav-item" style="display: inline-flex; width: auto; padding: 0.5rem 1rem; border-radius: 30px; font-size: 0.85rem;">
                    <i data-lucide="arrow-left"></i>
                    <span>Volver a torneos</span>
                </a>
            </div>

            <!-- Título Principal -->
            <h1 class="hero-title" style="font-size: 2.5rem; text-align: left; margin-bottom: 2rem;">
                ${e.title}
            </h1>

            <div class="t-detail-layout">
                <!-- Barra Lateral de Datos Clave (Sidebar) -->
                <aside class="t-detail-sidebar">
                    <div class="t-detail-image-box" style="background-image: url('img/${e.image}')"></div>
                    
                    <div class="glass-card">
                        <h3 style="font-family: var(--font-headings); font-size: 1.25rem; font-weight: 700; margin-bottom: 1.25rem; color: #ffffff; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">
                            Detalles del Evento
                        </h3>

                        <div class="t-info-list">
                            <div class="t-info-row">
                                <div class="t-info-icon-wrapper"><i data-lucide="tag"></i></div>
                                <div class="t-info-texts">
                                    <span class="t-info-label">Categoría</span>
                                    <span class="t-info-value">${K(e.category)}</span>
                                </div>
                            </div>
                            <div class="t-info-row">
                                <div class="t-info-icon-wrapper"><i data-lucide="calendar"></i></div>
                                <div class="t-info-texts">
                                    <span class="t-info-label">Fecha del Torneo</span>
                                    <span class="t-info-value">${e.date}</span>
                                </div>
                            </div>
                            <div class="t-info-row">
                                <div class="t-info-icon-wrapper"><i data-lucide="users"></i></div>
                                <div class="t-info-texts">
                                    <span class="t-info-label">Parejas Inscritas</span>
                                    <span class="t-info-value">${e.couples.length} de ${e.maxCouples}</span>
                                </div>
                            </div>
                            <div class="t-info-row">
                                <div class="t-info-icon-wrapper"><i data-lucide="credit-card"></i></div>
                                <div class="t-info-texts">
                                    <span class="t-info-label">Cuota de Inscripción</span>
                                    <span class="t-info-value" style="font-weight: 700; color: var(--color-primary);">${O(e.price)}</span>
                                </div>
                            </div>
                            <div class="t-info-row">
                                <div class="t-info-icon-wrapper"><i data-lucide="award"></i></div>
                                <div class="t-info-texts">
                                    <span class="t-info-label">Estado</span>
                                    <span class="t-info-value">${V(o)}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Botón de Registro con Stripe -->
                        ${e.status==="Abierto"&&!a?`
                            <button id="register-btn" class="btn btn-primary" style="width: 100%; margin-top: 1.5rem; box-shadow: 0 4px 20px rgba(204,255,0,0.3);">
                                <i data-lucide="credit-card"></i>
                                <span>Inscribirse Pareja</span>
                            </button>
                        `:`
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
                            ${e.description}
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
                        
                        ${e.couples.length===0?`
                            <p style="color: var(--text-muted); font-size: 0.95rem; text-align: center; padding: 2rem 0;">
                                Aún no hay parejas inscritas en este torneo. ¡Sé el primero en apuntarte!
                            </p>
                        `:`
                            <div class="players-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem;">
                                ${e.couples.map((r,n)=>`
                                    <div class="glass-card player-couple-card" style="background: rgba(255,255,255,0.01); padding: 1.25rem; border-radius: var(--radius-sm); position: relative; display: flex; align-items: center; gap: 1rem;">
                                        <div class="couple-number" style="font-family: var(--font-headings); font-weight: 800; font-size: 1.25rem; color: var(--color-primary);">${n+1}</div>
                                        <div class="couple-names" style="display: flex; flex-direction: column; gap: 0.25rem;">
                                            <div class="couple-player" style="font-size: 0.9rem; color: #ffffff;"><span style="color: var(--color-primary); font-size: 0.75rem; font-weight: bold; margin-right: 0.4rem; background: rgba(204,255,0,0.08); padding: 0.15rem 0.4rem; border-radius: 4px;">P1</span>${r.player1}</div>
                                            <div class="couple-player" style="font-size: 0.9rem; color: #ffffff; margin-top: 0.25rem;"><span style="color: var(--color-primary); font-size: 0.75rem; font-weight: bold; margin-right: 0.4rem; background: rgba(204,255,0,0.08); padding: 0.15rem 0.4rem; border-radius: 4px;">P2</span>${r.player2}</div>
                                        </div>
                                    </div>
                                `).join("")}
                            </div>
                        `}
                    </div>
                </section>
            </div>
        `,$(),this.bindEvents(e)},bindEvents(i){const t=document.getElementById("register-btn");t&&t.addEventListener("click",()=>{ie.open(i.id,e=>{this.render(e.id)})})}},ne={render(){const i=document.getElementById("app-content");if(!i)return;const t=y.getCurrentUser();if(t){t.role==="ADMIN"?window.location.hash="#/admin/dashboard":window.location.hash="#/player/dashboard";return}i.innerHTML=`
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
        `,$(),this.bindAuthEvents()},bindAuthEvents(){const i=document.getElementById("btn-admin-bypass");i&&i.addEventListener("click",()=>{const e=y.login("admin","admin123");localStorage.setItem("showLoginToast",`Acceso rápido como ${e.user.fullName}`),window.location.hash="#/admin/dashboard",window.location.reload()});const t=document.getElementById("btn-admin-submit");t&&t.addEventListener("click",e=>{e.preventDefault();const a=document.getElementById("login-username").value.trim();let o=document.getElementById("login-password").value;if(!a){x("Por favor, introduce tu nombre de usuario.","warning");return}const r=a.toLowerCase().replace(/\s+/g,"");if((r==="admin123"||r==="admin")&&!o&&(o="admin123"),!o){x("Por favor, introduce tu contraseña.","warning");return}const n=y.login(a,o);n.error?x(n.error,"error"):(localStorage.setItem("showLoginToast",`Sesión iniciada como ${n.user.fullName}`),n.user.role==="ADMIN"?window.location.hash="#/admin/dashboard":window.location.hash="#/player/dashboard",window.location.reload())}),document.getElementById("login-form").addEventListener("submit",e=>{e.preventDefault(),t&&t.click()})}},le={activeAdminTab:"metrics",activeApprovalTab:"pendientes",directoryQuery:"",selectedQuickTournamentId:null,selectedScheduleTournamentId:null,render(){const i=document.getElementById("app-content");if(!i)return;const t=y.getCurrentUser();if(!t||t.role!=="ADMIN"){window.location.hash="#/admin";return}const e=window.location.hash||"#/admin/dashboard";if(e.includes("/metrics"))this.activeAdminTab="metrics";else if(e.includes("/tournaments"))this.activeAdminTab="tournaments_mgmt";else if(e.includes("/categories"))this.activeAdminTab="categories";else if(e.includes("/approvals"))this.activeAdminTab="approvals";else if(e.includes("/directory"))this.activeAdminTab="directory";else if(e.includes("/schedule"))this.activeAdminTab="schedule";else if(e.includes("/roles"))this.activeAdminTab="roles";else if(e.includes("/profile"))this.activeAdminTab="profile";else{if(e==="#/admin/dashboard"||e==="#/desktop"){window.location.hash="#/admin/dashboard/metrics";return}this.activeAdminTab="metrics"}const a=y.getTournaments(),o=y.getTransactions(),r=y.getRevenue(),n=a.filter(s=>s.status==="En Curso").length,d=a.reduce((s,c)=>s+c.couples.length,0);i.innerHTML=`
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
                                    <span class="user-card-name" style="margin: 0; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: block;">${t.fullName}</span>
                                    <span class="user-card-role" style="color: var(--color-stripe); font-size: 0.75rem; text-transform: uppercase; font-weight: bold; display: block;">Director Deportivo</span>
                                </div>
                                <i data-lucide="edit-3" style="width: 14px; height: 14px; color: var(--text-muted); opacity: 0.7; flex-shrink: 0; margin-left: 0.5rem;"></i>
                            </div>
                        </div>

                        <!-- Menú de Pestañas Vertical (Estilo Sportelia / Captura 2) -->
                        <div class="sidebar-menu">
                            <a href="#/admin/dashboard/metrics" class="sidebar-menu-item ${this.activeAdminTab==="metrics"?"active":""}">
                                <i data-lucide="trending-up"></i>
                                <span>Finanzas & Métricas</span>
                            </a>
                            <a href="#/admin/dashboard/tournaments" class="sidebar-menu-item ${this.activeAdminTab==="tournaments_mgmt"?"active":""}">
                                <i data-lucide="award"></i>
                                <span>Gestionar Torneos</span>
                            </a>
                            <a href="#/admin/dashboard/categories" class="sidebar-menu-item ${this.activeAdminTab==="categories"?"active":""}">
                                <i data-lucide="sliders"></i>
                                <span>Configurar Categorías</span>
                            </a>
                            <a href="#/admin/dashboard/approvals" class="sidebar-menu-item ${this.activeAdminTab==="approvals"?"active":""}">
                                <i data-lucide="check-square"></i>
                                <span>Solicitudes Aprobación</span>
                            </a>
                            <a href="#/admin/dashboard/directory" class="sidebar-menu-item ${this.activeAdminTab==="directory"?"active":""}">
                                <i data-lucide="users"></i>
                                <span>Directorio Roster</span>
                            </a>
                            <a href="#/admin/dashboard/schedule" class="sidebar-menu-item ${this.activeAdminTab==="schedule"?"active":""}">
                                <i data-lucide="calendar"></i>
                                <span>Programar Pistas</span>
                            </a>
                            <a href="#/admin/dashboard/roles" class="sidebar-menu-item ${this.activeAdminTab==="roles"?"active":""}">
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
                            Consola de Club <span style="color: var(--text-muted); font-size: 0.9rem; font-weight: normal; margin-left: 0.5rem;">/ ${this.activeAdminTab==="metrics"?"Finanzas & Métricas":this.activeAdminTab==="tournaments_mgmt"?"Gestionar Torneos":this.activeAdminTab==="categories"?"Configurar Categorías":this.activeAdminTab==="approvals"?"Solicitudes Aprobación":this.activeAdminTab==="directory"?"Directorio Roster":this.activeAdminTab==="schedule"?"Programar Pistas":this.activeAdminTab==="roles"?"Asignar Directores":this.activeAdminTab==="profile"?"Mi Perfil":"Consola"}</span>
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
                            <div class="t-tab-content ${this.activeAdminTab==="metrics"?"active":""}">
                                <div class="admin-metrics-grid" style="margin-bottom: 2rem;">
                                    <div class="glass-card metric-card" style="border-color: rgba(99, 91, 255, 0.25);">
                                        <div class="metric-icon-box"><i data-lucide="credit-card"></i></div>
                                        <div class="metric-data"><span class="metric-num">${O(r)}</span><span class="metric-lbl">Ventas Stripe</span></div>
                                    </div>
                                    <div class="glass-card metric-card" style="border-color: rgba(16, 185, 129, 0.25);">
                                        <div class="metric-icon-box emerald"><i data-lucide="users"></i></div>
                                        <div class="metric-data"><span class="metric-num">${d}</span><span class="metric-lbl">Inscritos Totales</span></div>
                                    </div>
                                    <div class="glass-card metric-card" style="border-color: rgba(204, 255, 0, 0.25);">
                                        <div class="metric-icon-box green"><i data-lucide="trophy"></i></div>
                                        <div class="metric-data"><span class="metric-num">${n}</span><span class="metric-lbl">Torneos Activos</span></div>
                                    </div>
                                    <div class="glass-card metric-card" style="border-color: rgba(59, 130, 246, 0.25);">
                                        <div class="metric-icon-box blue"><i data-lucide="receipt"></i></div>
                                        <div class="metric-data"><span class="metric-num">${o.length}</span><span class="metric-lbl">Cobros Stripe</span></div>
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
                                                ${o.length===0?`
                                                    <tr>
                                                        <td colspan="6" style="text-align: center; color: var(--text-muted); padding: 2rem 0;">No se han registrado cobros en el sistema todavía.</td>
                                                    </tr>
                                                `:o.map(s=>`
                                                    <tr style="transition: background var(--transition-fast);" onmouseover="this.style.background='rgba(255,255,255,0.01)'" onmouseout="this.style.background='transparent'">
                                                        <td style="font-family: monospace; color: var(--color-primary); text-align: left; font-size: 0.85rem;"><code>${s.id}</code></td>
                                                        <td style="font-weight: 600; color: #ffffff; text-align: left;">${s.players}</td>
                                                        <td style="color: var(--text-muted); text-align: left; font-size: 0.85rem;">${s.tournamentTitle}</td>
                                                        <td style="color: var(--text-muted); font-size: 0.85rem;">${s.date}</td>
                                                        <td style="font-weight: bold; color: #ffffff;">${O(s.amount)}</td>
                                                        <td style="text-align: right;">
                                                            <span class="badge badge-open" style="font-size: 0.65rem; background: rgba(99, 91, 255, 0.15); color: #a5b4fc; border-color: rgba(99, 91, 255, 0.3); display: inline-flex; align-items: center; gap: 0.25rem;">
                                                                <i data-lucide="shield-check" style="width: 12px; height: 12px;"></i> Stripe
                                                            </span>
                                                        </td>
                                                    </tr>
                                                `).join("")}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <!-- SUB-PESTAÑA 2: GESTIÓN DE TORNEOS -->
                            <div class="t-tab-content ${this.activeAdminTab==="tournaments_mgmt"?"active":""}">
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
                                                ${a.map(s=>{const c=s.status==="Cancelado";return`
                                                        <tr style="transition: background var(--transition-fast);" onmouseover="this.style.background='rgba(255,255,255,0.01)'" onmouseout="this.style.background='transparent'">
                                                            <td style="font-weight: 600; color: #ffffff; text-align: left;">${s.title}</td>
                                                            <td><span style="font-size: 0.8rem; color: var(--color-primary); font-weight: bold;">${s.category}</span></td>
                                                            <td style="color: var(--text-muted); font-size: 0.85rem;">${s.date}</td>
                                                            <td style="font-weight: bold;">${O(s.price)}</td>
                                                            <td><span style="font-size: 0.85rem; font-weight: 600;">${s.couples.length} / ${s.maxCouples}</span></td>
                                                            <td>
                                                                <span class="badge ${c?"badge-full":s.status==="En Curso"?"badge-gold":"badge-open"}" style="font-size: 0.65rem;">
                                                                    ${s.status}
                                                                </span>
                                                            </td>
                                                            <td style="text-align: right; display: flex; gap: 0.5rem; justify-content: flex-end;">
                                                                ${!c&&s.status!=="Finalizado"?`
                                                                    <button class="btn btn-secondary btn-sm cancel-t-btn" data-t-id="${s.id}" style="padding: 0.35rem 0.75rem; border-color: rgba(239, 68, 68, 0.4); color: #f87171; font-size: 0.8rem;">
                                                                        Cancelar
                                                                    </button>
                                                                `:""}
                                                                <button class="btn btn-secondary btn-sm delete-t-btn" data-t-id="${s.id}" style="padding: 0.35rem 0.5rem; color: var(--text-muted); font-size: 0.8rem; background: rgba(255,255,255,0.01);">
                                                                    <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    `}).join("")}
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
                                                        ${y.getCategories().map(s=>`<option value="${s}">${s}</option>`).join("")}
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
                                                ${a.filter(s=>s.status==="En Curso"||s.status==="Finalizado").map(s=>`<option value="${s.id}">${s.title}</option>`).join("")}
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
                <div class="t-tab-content ${this.activeAdminTab==="categories"?"active":""}">
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
                                    ${y.getCategories().map((s,c)=>`
                                        <label style="display: flex; align-items: center; gap: 0.75rem; cursor: pointer; font-size: 0.9rem; margin-bottom: 0.6rem; padding: 0.25rem 0.5rem; transition: background var(--transition-fast); border-radius: 4px;" onmouseover="this.style.background='rgba(255,255,255,0.02)'" onmouseout="this.style.background='transparent'">
                                            <input type="checkbox" ${c<6?"checked":""} style="width: 18px; height: 18px; accent-color: var(--color-primary); cursor: pointer;">
                                            <span style="color: var(--text-main); font-weight: 500;">${s}</span>
                                        </label>
                                    `).join("")}
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
                <div class="t-tab-content ${this.activeAdminTab==="approvals"?"active":""}">
                    <div class="glass-card">
                        <h3><i data-lucide="inbox"></i> Mesa de Aprobación de Solicitudes</h3>
                        <div class="t-tab-header" style="margin-bottom: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.05);">
                            <button class="t-tab-btn ${this.activeApprovalTab==="todos"?"active":""}" data-approval-tab="todos">Todos</button>
                            <button class="t-tab-btn ${this.activeApprovalTab==="pendientes"?"active":""}" data-approval-tab="pendientes">Pendientes</button>
                            <button class="t-tab-btn ${this.activeApprovalTab==="aceptadas"?"active":""}" data-approval-tab="aceptadas">Aceptadas</button>
                            <button class="t-tab-btn ${this.activeApprovalTab==="rechazadas"?"active":""}" data-approval-tab="rechazadas">Rechazadas</button>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 1rem;" id="approvals-list-container"></div>
                    </div>
                </div>

                <!-- PANEL 5: ROSTER -->
                <div class="t-tab-content ${this.activeAdminTab==="directory"?"active":""}">
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
                <div class="t-tab-content ${this.activeAdminTab==="schedule"?"active":""}">
                    <div class="glass-card">
                        <h3><i data-lucide="calendar"></i> Programador de Horarios & Pistas</h3>
                        <div class="form-group" style="margin-bottom: 2rem;">
                            <label>Seleccionar Torneo</label>
                            <select id="select-tournament-schedule" class="form-select">
                                <option value="">-- Elige un torneo --</option>
                                ${a.filter(s=>s.status==="En Curso"||s.status==="Finalizado").map(s=>`<option value="${s.id}">${s.title}</option>`).join("")}
                            </select>
                        </div>
                        <div id="schedule-matches-container"></div>
                    </div>
                </div>

                <!-- PANEL 7: GESTIÓN DE ROLES -->
                <div class="t-tab-content ${this.activeAdminTab==="roles"?"active":""}">
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
                                    ${y.getUsers().map(s=>{const c=s.username===t.username,g=s.username==="admin"||s.isSuper,m=s.role==="ADMIN";return`
                                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.02);">
                                                <td style="padding: 1rem; font-weight: 500; color: #ffffff;">${s.fullName}</td>
                                                <td style="padding: 1rem; color: var(--text-muted);"><code>@${s.username}</code></td>
                                                <td style="padding: 1rem;">
                                                    <span class="badge ${m?"badge-gold":"badge-silver"}">${s.role}</span>
                                                </td>
                                                <td style="padding: 1rem; text-align: right;">
                                                    ${g?`
                                                        <span style="font-size: 0.75rem; color: var(--text-muted);">Admin Raíz</span>
                                                    `:c?`
                                                        <span style="font-size: 0.75rem; color: var(--color-primary);">Sesión Activa</span>
                                                    `:`
                                                        <button class="btn ${m?"btn-secondary":"btn-primary"} btn-sm role-toggle-btn" data-username="${s.username}" data-to-admin="${!m}" style="padding: 0.35rem 0.85rem; font-size: 0.8rem;">
                                                            <span>${m?"Quitar Admin":"Hacer Admin"}</span>
                                                        </button>
                                                    `}
                                                </td>
                                            </tr>
                                        `}).join("")}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- PANEL 8: MI PERFIL -->
                <div class="t-tab-content ${this.activeAdminTab==="profile"?"active":""}">
                    ${this.renderProfileTab(t)}
                </div>
            </div>
            </div><!-- /dashboard-view-content -->
            </main><!-- /dashboard-workspace -->
            </div><!-- /dashboard-layout-container -->
        `,this.renderApprovalsList(),this.renderDirectoryList();const l=a.filter(s=>s.status==="En Curso"||s.status==="Finalizado");if(l.length>0){const s=l[0].id;this.selectedQuickTournamentId||(this.selectedQuickTournamentId=s);const c=document.getElementById("select-tournament-quick");c&&(c.value=this.selectedQuickTournamentId,this.renderQuickMatchesList(this.selectedQuickTournamentId)),this.selectedScheduleTournamentId||(this.selectedScheduleTournamentId=s);const g=document.getElementById("select-tournament-schedule");g&&(g.value=this.selectedScheduleTournamentId,this.renderScheduleMatchesList(this.selectedScheduleTournamentId))}$(),this.bindAdminEvents()},bindAdminEvents(){const i=y.getCurrentUser(),t=document.getElementById("select-tournament-quick"),e=document.getElementById("select-tournament-schedule"),a=document.getElementById("create-tournament-form");document.getElementById("admin-logout-btn");const o=document.getElementById("admin-sidebar-logout-btn");o&&o.addEventListener("click",m=>{m.preventDefault(),y.logout(),localStorage.setItem("showLogoutToast","true"),window.location.hash="#/",window.location.reload()});const r=document.getElementById("btn-admin-profile");r&&r.addEventListener("click",()=>{window.location.hash="#/admin/dashboard/profile"});const n=document.getElementById("profile-edit-form");n&&n.addEventListener("submit",m=>{m.preventDefault();const u=document.getElementById("profile-fullname-val").value.trim(),f=document.getElementById("profile-password-val").value.trim();if(!u){x("El nombre completo no puede estar vacío.","warning");return}if(!f){x("La contraseña no puede estar vacía.","warning");return}const h=y.updateUserProfile(i.username,{fullName:u,password:f});h.error?x(h.error,"error"):(x("Perfil actualizado correctamente","success"),this.render())}),a&&a.addEventListener("submit",m=>{m.preventDefault();const u=document.getElementById("t-title").value.trim(),f=document.getElementById("t-date").value.trim(),h=document.getElementById("t-category").value,v=document.getElementById("t-price").value,P=document.getElementById("t-max").value;y.createTournament({title:u,date:f,category:h,price:v,maxCouples:P,status:"Abierto"}),x("¡Torneo Express creado exitosamente!","success"),this.render()}),t&&t.addEventListener("change",m=>{this.selectedQuickTournamentId=m.target.value,this.renderQuickMatchesList(m.target.value),this.resetScoreFormContainer()}),e&&e.addEventListener("change",m=>{this.selectedScheduleTournamentId=m.target.value,this.renderScheduleMatchesList(m.target.value)}),document.querySelectorAll("[data-approval-tab]").forEach(m=>{m.addEventListener("click",u=>{this.activeApprovalTab=u.currentTarget.dataset.approvalTab,document.querySelectorAll("[data-approval-tab]").forEach(f=>f.classList.remove("active")),u.currentTarget.classList.add("active"),this.renderApprovalsList()})});const l=document.getElementById("directory-search");l&&l.addEventListener("input",m=>{this.directoryQuery=m.target.value,this.renderDirectoryList()}),document.querySelectorAll(".role-toggle-btn").forEach(m=>{m.addEventListener("click",u=>{const f=u.currentTarget.dataset.username,h=u.currentTarget.dataset.toAdmin==="true",v=y.setAdminRole(f,h);v.error?x(v.error,"error"):(x(`Rol de @${f} actualizado correctamente`,"success"),this.render())})}),document.querySelectorAll(".cancel-t-btn").forEach(m=>{m.addEventListener("click",u=>{const f=u.currentTarget.dataset.tId;confirm("¿Estás seguro de que deseas cancelar este torneo? Los cuadros y horarios quedarán bloqueados.")&&(y.cancelTournament(f),x("Torneo cancelado correctamente","warning"),this.render())})}),document.querySelectorAll(".delete-t-btn").forEach(m=>{m.addEventListener("click",u=>{const f=u.currentTarget.dataset.tId;confirm("¿Estás seguro de que deseas eliminar este torneo del sistema de forma permanente? Esta acción no se puede deshacer.")&&(y.deleteTournament(f),x("Torneo eliminado del sistema","error"),this.render())})})},renderApprovalsList(){const i=document.getElementById("approvals-list-container");if(!i)return;const e=y.getRegistrations().filter(r=>this.activeApprovalTab==="todos"?!0:r.status.toLowerCase()===this.activeApprovalTab.toLowerCase());if(e.length===0){i.innerHTML=`
                <div style="text-align: center; padding: 2.5rem; color: var(--text-muted); font-size: 0.95rem;">
                    No hay solicitudes en la bandeja "${this.activeApprovalTab.toUpperCase()}".
                </div>
            `;return}i.innerHTML=e.map((r,n)=>{const d=r.status==="PENDIENTE",l=y.getUsers().find(f=>f.fullName&&f.fullName.toLowerCase()===r.player1.toLowerCase()||f.username&&f.username.toLowerCase()===r.player1.toLowerCase()),s=y.getUsers().find(f=>f.fullName&&f.fullName.toLowerCase()===r.player2.toLowerCase()||f.username&&f.username.toLowerCase()===r.player2.toLowerCase()),c=l?l.preferences:null,g=s?s.preferences:null,m=(f,h)=>h?`
                    <div style="margin-top: 0.35rem; display: flex; flex-wrap: wrap; gap: 0.35rem; font-size: 0.7rem; align-items: center; background: rgba(255,255,255,0.02); padding: 0.25rem 0.5rem; border-radius: 4px; border: 1px solid rgba(255,255,255,0.03);">
                        <span style="color: #ffffff; font-weight: 600; font-size: 0.75rem;">Pref. ${f}:</span>
                        <span style="color: var(--color-primary);">Lado: ${h.preferredSide}</span> | 
                        <span style="color: #a39eff;">Nivel: ${h.level}</span> | 
                        <span style="color: #60a5fa;">Horario: ${h.availability}</span>
                        ${h.preferredPartner?` | <span style="color: #fbbf24;">Compañero Pref: ${h.preferredPartner}</span>`:""}
                    </div>
                `:"",u=`
                ${m(r.player1,c)}
                ${m(r.player2,g)}
            `;return`
                <div class="glass-card" style="display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.5rem; border-left: 4px solid ${r.status==="ACEPTADA"?"var(--color-success)":r.status==="RECHAZADA"?"var(--color-error)":"var(--color-primary)"}; background: rgba(255,255,255,0.01);">
                    <div style="display: flex; flex-direction: column; gap: 0.25rem; width: 100%;">
                        <span style="font-weight: 700; color: #ffffff; font-size: 0.95rem;">
                            #${n+1} ${r.player1} - ${r.player2}
                        </span>
                        <div style="display: flex; flex-wrap: wrap; gap: 1rem; font-size: 0.8rem; color: var(--text-muted);">
                            <span>Categoría: <strong style="color: var(--color-primary);">${r.category}</strong></span>
                            <span>Creada por: <code>${r.creator}</code></span>
                            <span>Disponibilidad: <strong style="color: #ffffff;">${r.availability}</strong></span>
                        </div>
                        ${u}
                    </div>

                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                        ${d?`
                            <button class="btn btn-primary approve-reg-btn" data-reg-id="${r.id}" style="background: var(--color-success); border-color: var(--color-success); color: #ffffff; padding: 0.4rem; border-radius: 50%; box-shadow: 0 4px 10px rgba(16,185,129,0.25);">
                                <i data-lucide="check-circle" style="width: 18px; height: 18px;"></i>
                            </button>
                            <button class="btn btn-secondary reject-reg-btn" data-reg-id="${r.id}" style="padding: 0.4rem; border-radius: 50%; border-color: rgba(239, 68, 68, 0.4); color: #f87171;">
                                <i data-lucide="x" style="width: 18px; height: 18px;"></i>
                            </button>
                        `:`
                            <span class="badge ${r.status==="ACEPTADA"?"badge-open":"badge-full"}" style="font-size: 0.7rem;">
                                ${r.status}
                            </span>
                        `}
                    </div>
                </div>
            `}).join(""),$(),i.querySelectorAll(".approve-reg-btn").forEach(r=>{r.addEventListener("click",n=>{const d=n.currentTarget.dataset.regId,l=y.updateRegistrationStatus(d,"ACEPTADA");l.error?x(l.error,"error"):(x(`Solicitud de ${l.registration.player1} aceptada`,"success"),this.renderApprovalsList(),this.renderDirectoryList())})}),i.querySelectorAll(".reject-reg-btn").forEach(r=>{r.addEventListener("click",n=>{const d=n.currentTarget.dataset.regId,l=y.updateRegistrationStatus(d,"RECHAZADA");l.error?x(l.error,"error"):(x("Solicitud rechazada","info"),this.renderApprovalsList())})})},renderDirectoryList(){const i=document.getElementById("directory-list-container");if(!i)return;const t=[];y.getTournaments().forEach(o=>{o.couples.forEach(r=>{t.push({name:r.player1,partner:r.player2,phone:r.phone1,category:o.category,avatar:o.category.includes("Oro")||o.category.includes("Primera")?"A":o.category.includes("Plata")||o.category.includes("Segunda")?"B":"C"}),t.push({name:r.player2,partner:r.player1,phone:r.phone2,category:o.category,avatar:o.category.includes("Oro")||o.category.includes("Primera")?"A":o.category.includes("Plata")||o.category.includes("Segunda")?"B":"C"})})}),y.getRegistrations().forEach(o=>{o.status==="PENDIENTE"&&(t.push({name:o.player1,partner:o.player2,phone:o.phone1,category:o.category,avatar:o.avatar1||"C"}),t.push({name:o.player2,partner:o.player1,phone:o.phone2,category:o.category,avatar:o.avatar2||"C"}))});const e=this.directoryQuery.toLowerCase().trim(),a=t.filter(o=>o.name.toLowerCase().includes(e)||o.partner.toLowerCase().includes(e));if(a.length===0){i.innerHTML=`
                <div style="text-align: center; padding: 2.5rem; color: var(--text-muted); font-size: 0.95rem;">
                    No se encontraron jugadores que coincidan con la búsqueda.
                </div>
            `;return}i.innerHTML=a.map(o=>{const r=y.getUsers().find(l=>l.fullName&&l.fullName.toLowerCase()===o.name.toLowerCase()||l.username&&l.username.toLowerCase()===o.name.toLowerCase()),n=r?r.preferences:null,d=n?`
                <div style="margin-top: 0.35rem; display: flex; flex-wrap: wrap; gap: 0.35rem; font-size: 0.7rem;">
                    <span class="badge" style="background: rgba(204,255,0,0.06); color: var(--color-primary); border: 1px solid rgba(204,255,0,0.15); text-transform: none; padding: 0.15rem 0.4rem; border-radius: 4px; font-weight: normal; letter-spacing: 0;">Lado: ${n.preferredSide}</span>
                    <span class="badge" style="background: rgba(99,91,255,0.06); color: #a39eff; border: 1px solid rgba(99,91,255,0.15); text-transform: none; padding: 0.15rem 0.4rem; border-radius: 4px; font-weight: normal; letter-spacing: 0;">Nivel: ${n.level}</span>
                    <span class="badge" style="background: rgba(59,130,246,0.06); color: #60a5fa; border: 1px solid rgba(59,130,246,0.15); text-transform: none; padding: 0.15rem 0.4rem; border-radius: 4px; font-weight: normal; letter-spacing: 0;">Horario: ${n.availability}</span>
                    ${n.preferredPartner?`<span class="badge" style="background: rgba(245,158,11,0.06); color: #fbbf24; border: 1px solid rgba(245,158,11,0.15); text-transform: none; padding: 0.15rem 0.4rem; border-radius: 4px; font-weight: normal; letter-spacing: 0;">Pref: ${n.preferredPartner}</span>`:""}
                </div>
            `:"";return`
                <div class="glass-card" style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 1.5rem; border: none; border-bottom: 1px solid rgba(255,255,255,0.03); background: transparent;">
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <div style="background: var(--color-primary); color: var(--text-dark); width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 0.95rem;">
                            ${o.avatar}
                        </div>
                        <div style="display: flex; flex-direction: column;">
                            <span style="font-weight: 600; color: #ffffff; font-size: 0.95rem;">${o.name}</span>
                            <span style="font-size: 0.75rem; color: var(--text-muted);">Compañero/a: <strong>${o.partner}</strong></span>
                            ${d}
                        </div>
                    </div>

                    <div style="display: flex; align-items: center; gap: 1rem; color: #3b82f6;">
                        <a href="tel:${o.phone}" title="Llamar" style="color: #60a5fa; display: flex;"><i data-lucide="phone" style="width: 16px; height: 16px;"></i></a>
                        <a href="javascript:void(0)" title="Ver Perfil" style="color: #60a5fa; display: flex;"><i data-lucide="user" style="width: 16px; height: 16px;"></i></a>
                        <a href="javascript:void(0)" title="Logros" style="color: #fbbf24; display: flex;"><i data-lucide="award" style="width: 16px; height: 16px;"></i></a>
                        <span style="color: var(--color-success); display: flex;" title="Inscripción Verificada"><i data-lucide="check-circle" style="width: 16px; height: 16px;"></i></span>
                    </div>
                </div>
            `}).join(""),$()},renderScheduleMatchesList(i){const t=document.getElementById("schedule-matches-container");if(!t)return;if(!i){t.innerHTML=`
                <p style="text-align: center; color: var(--text-muted); padding: 3rem 0;">Selecciona un torneo para programar las pistas y las horas de juego.</p>
            `,$();return}const e=y.getTournament(i);if(!e||e.matches.length===0){t.innerHTML=`
                <p style="text-align: center; color: var(--text-muted); padding: 3rem 0;">No se han generado cruces ni partidos para este torneo todavía.</p>
            `,$();return}const a=p=>{const b=e.couples.find(w=>w.id===p);return b?`${b.player1} / ${b.player2}`:"Por definir"},o=e.maxCouples===8?["Cuartos de final","Semifinales","Gran Final"]:["Semifinales","Gran Final"],r=["PISTA 1","PISTA 2","PISTA 3","PISTA 4","PISTA 5","PISTA 6","PISTA 7","PISTA 8","PISTA CENTRAL"],n={};e.matches.forEach(p=>{if(p.court){const b=p.court.toUpperCase().trim();n[b]=p}});const d=["1","2","3","4","5","6","7","8","9","10","P1","P2","P3"],l=["09","10","11","12","13","14","15","16","17","18","19"],s=p=>p==="10"?"PISTA CENTRAL":["P1","P2","P3"].includes(p)?p:"PISTA "+p,c=p=>{if(!p)return null;const b=p.toUpperCase().trim();if(b.includes("PISTA 1")&&!b.includes("10"))return"1";if(b.includes("PISTA 2"))return"2";if(b.includes("PISTA 3"))return"3";if(b.includes("PISTA 4"))return"4";if(b.includes("PISTA 5"))return"5";if(b.includes("PISTA 6"))return"6";if(b.includes("PISTA 7"))return"7";if(b.includes("PISTA 8"))return"8";if(b.includes("PISTA 9"))return"9";if(b.includes("PISTA 10")||b.includes("PISTA CENTRAL"))return"10";if(b.includes("P1"))return"P1";if(b.includes("P2"))return"P2";if(b.includes("P3"))return"P3";const w=b.match(/\d+/);return w?w[0]:null},g=p=>p?p.trim().split(":")[0]:null,m=e.matches&&e.matches.length>0&&e.matches[0].date?e.matches[0].date:"DOM. 31",u=this.selectedGridCell?this.selectedGridCell.hour+":00":"09:00";t.innerHTML=`
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
                                ${d.map(p=>`<th style="padding: 0.6rem; border-right: 1px solid var(--border-color);">${p}</th>`).join("")}
                            </tr>
                        </thead>
                        <tbody>
                            ${l.map(p=>`
                                    <tr style="border-bottom: 1px solid var(--border-color);">
                                        <td style="padding: 0.6rem; font-weight: bold; background: rgba(255,255,255,0.01); border-right: 1px solid var(--border-color); color: var(--text-main);">${p}:00</td>
                                        ${d.map(b=>{const w=e.matches.find(q=>{const M=c(q.court),F=g(q.time);return M===b&&F===p}),E=!!w,T=s(b),B=y.isSlotBlocked(T,p+":00",m);let D="rgba(16, 185, 129, 0.85)",R="check",N="0.6",U="Disponible";return B?(D="rgba(245, 158, 11, 0.6)",R="ban",N="1",U="BLOQUEADA (Mantenimiento)"):E&&(D="rgba(239, 68, 68, 0.85)",R="lock",N="1",U=`${a(w.team1Id)} vs ${a(w.team2Id)} (${w.stage||"Partido"})`),`
                                                <td class="${`clickable-grid-cell ${this.selectedGridCell&&this.selectedGridCell.col===b&&this.selectedGridCell.hour===p?"active-grid-cell":""}`}" 
                                                    data-court="${T}" 
                                                    data-time="${p}:00" 
                                                    data-date="${m}" 
                                                    data-occupied="${E}" 
                                                    data-match-id="${E?w.id:""}"
                                                    data-match-details="${E?`${a(w.team1Id)} vs ${a(w.team2Id)}`:""}"
                                                    data-blocked="${B}"
                                                    data-col="${b}"
                                                    data-hour="${p}"
                                                    style="padding: 0.6rem; background: ${D}; border-right: 1px solid var(--border-color); color: #ffffff;" 
                                                    title="${U}">
                                                    <div style="display: flex; align-items: center; justify-content: center; opacity: ${N};">
                                                        <i data-lucide="${R}" style="width: 10px; height: 10px;"></i>
                                                    </div>
                                                </td>
                                            `}).join("")}
                                    </tr>
                                `).join("")}
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- PANEL DE CONTROL EDITABLE DEL CUADRANTE (NUEVO) -->
            <div id="quadrant-editor-panel" class="glass-card" style="margin-bottom: 2rem; border-color: rgba(204, 255, 0, 0.15); display: ${this.selectedGridCell?"block":"none"}; animation: fadeInEffect var(--transition-fast) forwards;">
                <h3 style="font-family: var(--font-headings); font-size: 1.25rem; color: #ffffff; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">
                    <i data-lucide="edit-3" style="color: var(--color-primary);"></i>
                    Control Rápido de Pista: <span id="editor-selected-court" style="color: var(--color-primary);">${this.selectedGridCell?this.selectedGridCell.court:""}</span> - <span id="editor-selected-time" style="color: #60a5fa;">${this.selectedGridCell?this.selectedGridCell.time:""}</span>
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
                                ${e.matches.filter(p=>!p.court||p.court==="").map(p=>`
                                    <option value="${p.id}">${o[p.round]} #${p.matchIndex+1} (${a(p.team1Id)} vs ${a(p.team2Id)})</option>
                                `).join("")}
                            </select>
                            <button id="btn-editor-assign" class="btn btn-primary btn-sm" style="height: 36px; padding: 0 1rem; font-size: 0.85rem;" data-court="${this.selectedGridCell?this.selectedGridCell.court:""}" data-time="${this.selectedGridCell?this.selectedGridCell.time:""}" data-date="${this.selectedGridCell?this.selectedGridCell.date:""}">Programar</button>
                        </div>
                        
                        <!-- Acción B: Liberar Partido -->
                        <button id="btn-editor-free" class="btn btn-secondary btn-sm" style="border-color: rgba(239, 68, 68, 0.4); color: #f87171; height: 36px; display: none;">
                            <i data-lucide="x-circle" style="width: 16px; height: 16px;"></i> Liberar Pista
                        </button>
                        
                        <!-- Acción C: Bloquear/Desbloquear Celda -->
                        <button id="btn-editor-toggle-block" class="btn btn-secondary btn-sm" style="height: 36px; border-color: rgba(245, 158, 11, 0.4); color: #fbbf24;" data-court="${this.selectedGridCell?this.selectedGridCell.court:""}" data-time="${this.selectedGridCell?this.selectedGridCell.time:""}" data-date="${this.selectedGridCell?this.selectedGridCell.date:""}">
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
                        Ocupación de Pistas (${u})
                    </span>
                    <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: normal;">
                        Hora de referencia activa en el cuadrante: <strong style="color: var(--color-primary);">${u}</strong>
                    </span>
                </h3>
                <div class="courts-grid-map">
                    ${r.map(p=>{const b=n[p],w=!!b;if(y.isSlotBlocked(p,u,m))return`
                                <div class="court-map-card occupied" style="background: rgba(245, 158, 11, 0.05); border-color: rgba(245, 158, 11, 0.35);">
                                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                        <strong style="color: #ffffff; font-size: 1.05rem;">${p}</strong>
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
                            `;if(w){const T=a(b.team1Id),B=a(b.team2Id);return`
                                <div class="court-map-card occupied">
                                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                        <strong style="color: #ffffff; font-size: 1.05rem;">${p}</strong>
                                        <span class="court-badge-status occupied">
                                            <i data-lucide="lock" style="width: 10px; height: 10px;"></i> Ocupada
                                        </span>
                                    </div>
                                    <div style="font-size: 0.85rem; color: var(--text-muted);">
                                        <div>Hora: <strong style="color: #ffffff;">${b.time||"—"}</strong></div>
                                        <div>Fase: <strong>${b.stage||"—"}</strong></div>
                                    </div>
                                    <div class="court-net-line"></div>
                                    <div style="font-size: 0.8rem; font-weight: 600; color: var(--color-primary); display: flex; flex-direction: column; gap: 0.25rem;">
                                        <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${T}">${T}</span>
                                        <span style="color: var(--text-muted); font-size: 0.7rem; text-align: center;">vs</span>
                                        <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${B}">${B}</span>
                                    </div>
                                </div>
                            `}else return`
                                <div class="court-map-card available">
                                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                        <strong style="color: #ffffff; font-size: 1.05rem;">${p}</strong>
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
                            `}).join("")}
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
                ${e.matches.map(p=>{const b=a(p.team1Id),w=a(p.team2Id);return`
                        <div class="glass-card" style="padding: 1.25rem; display: flex; flex-direction: column; gap: 1rem;">
                            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.5rem; font-size: 0.8rem; color: var(--text-muted);">
                                <strong>${o[p.round]} - PARTIDO #${p.matchIndex+1}</strong>
                                <span>Cruces: ${b} VS ${w}</span>
                            </div>

                            <div class="form-row" style="grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 0.75rem;">
                                <div class="form-group" style="margin: 0;">
                                    <label style="font-size: 0.7rem;">Código División</label>
                                    <input type="text" id="sched-code-${p.id}" class="form-input" style="padding: 0.5rem;" value="${p.divisionCode||"M3"}">
                                </div>
                                <div class="form-group" style="margin: 0;">
                                    <label style="font-size: 0.7rem;">Ronda / Grupo</label>
                                    <input type="text" id="sched-stage-${p.id}" class="form-input" style="padding: 0.5rem;" value="${p.stage||"Grupo 1"}">
                                </div>
                                <div class="form-group" style="margin: 0;">
                                    <label style="font-size: 0.7rem;">Fecha (Día)</label>
                                    <input type="text" id="sched-date-${p.id}" class="form-input" style="padding: 0.5rem;" value="${p.date||"DOM. 31"}">
                                </div>
                                <div class="form-group" style="margin: 0;">
                                    <label style="font-size: 0.7rem;">Hora Partido</label>
                                    <input type="text" id="sched-time-${p.id}" class="form-input" style="padding: 0.5rem;" value="${p.time||"09:00"}">
                                </div>
                                <div class="form-group" style="margin: 0;">
                                    <label style="font-size: 0.7rem;">Pista Asignada</label>
                                    <input type="text" id="sched-court-${p.id}" class="form-input" style="padding: 0.5rem;" value="${p.court||"PISTA 5"}">
                                </div>
                                
                                <div style="display: flex; align-items: flex-end;">
                                    <button class="btn btn-primary save-schedule-btn" data-match-id="${p.id}" style="width: 100%; padding: 0.6rem; font-size: 0.85rem; background: #635bff; border-color: #635bff;">
                                        <i data-lucide="calendar-plus"></i> Programar
                                    </button>
                                </div>
                            </div>
                        </div>
                    `}).join("")}
            </div>
        `,$(),t.querySelectorAll(".save-schedule-btn").forEach(p=>{p.addEventListener("click",b=>{const w=b.currentTarget.dataset.matchId,E=document.getElementById(`sched-code-${w}`).value.trim(),T=document.getElementById(`sched-stage-${w}`).value.trim(),B=document.getElementById(`sched-date-${w}`).value.trim(),D=document.getElementById(`sched-time-${w}`).value.trim(),R=document.getElementById(`sched-court-${w}`).value.trim(),N=y.updateMatchSchedule(i,w,{date:B,time:D,court:R,divisionCode:E,stage:T});N.error?x(N.error,"error"):(x("¡Horario, División y Pista actualizados!","success"),this.renderScheduleMatchesList(i))})});const h=t.querySelectorAll(".clickable-grid-cell"),v=document.getElementById("quadrant-editor-panel"),P=document.getElementById("editor-selected-court"),L=document.getElementById("editor-selected-time"),C=document.getElementById("editor-cell-status"),A=document.getElementById("editor-cell-details"),k=document.getElementById("editor-action-assign-container"),j=document.getElementById("editor-select-match"),z=document.getElementById("btn-editor-assign"),S=document.getElementById("btn-editor-free"),I=document.getElementById("btn-editor-toggle-block");if(this.selectedGridCell&&v){const p=this.selectedGridCell.court,b=this.selectedGridCell.time,w=this.selectedGridCell.date,E=Array.from(h).find(T=>T.dataset.court===p&&T.dataset.time===b);if(E){const T=E.dataset.occupied==="true",B=E.dataset.blocked==="true",D=E.dataset.matchId,R=E.dataset.matchDetails;z&&(z.dataset.court=p,z.dataset.time=b,z.dataset.date=w),S&&(S.dataset.matchId=D),I&&(I.dataset.court=p,I.dataset.time=b,I.dataset.date=w),B?(C&&(C.textContent="Bloqueada (Mantenimiento)",C.style.color="#fbbf24"),A&&(A.textContent="Esta pista está marcada como no operativa en esta hora."),k&&(k.style.display="none"),S&&(S.style.display="none"),I&&(I.innerHTML='<i data-lucide="unlock" style="width: 16px; height: 16px;"></i> Desbloquear Pista')):T?(C&&(C.textContent="Ocupada",C.style.color="var(--color-error)"),A&&(A.textContent=`Partido: ${R}`),k&&(k.style.display="none"),S&&(S.style.display="inline-flex"),I&&(I.innerHTML='<i data-lucide="lock" style="width: 16px; height: 16px;"></i> Bloquear Pista')):(C&&(C.textContent="Disponible",C.style.color="var(--color-success)"),A&&(A.textContent="Pista libre para programar encuentros."),k&&(k.style.display="flex"),S&&(S.style.display="none"),I&&(I.innerHTML='<i data-lucide="lock" style="width: 16px; height: 16px;"></i> Bloquear Pista'))}$()}h.forEach(p=>{p.addEventListener("click",b=>{const w=b.currentTarget;h.forEach(q=>q.classList.remove("active-grid-cell")),w.classList.add("active-grid-cell");const E=w.dataset.court,T=w.dataset.time,B=w.dataset.date,D=w.dataset.occupied==="true",R=w.dataset.blocked==="true",N=w.dataset.matchId,U=w.dataset.matchDetails;this.selectedGridCell={court:E,time:T,date:B,col:w.dataset.col,hour:w.dataset.hour},v&&(v.style.display="block"),P&&(P.textContent=E),L&&(L.textContent=T),z&&(z.dataset.court=E,z.dataset.time=T,z.dataset.date=B),S&&(S.dataset.matchId=N),I&&(I.dataset.court=E,I.dataset.time=T,I.dataset.date=B),R?(C&&(C.textContent="Bloqueada (Mantenimiento)",C.style.color="#fbbf24"),A&&(A.textContent="Esta pista está marcada como no operativa en esta hora."),k&&(k.style.display="none"),S&&(S.style.display="none"),I&&(I.innerHTML='<i data-lucide="unlock" style="width: 16px; height: 16px;"></i> Desbloquear Pista')):D?(C&&(C.textContent="Ocupada",C.style.color="var(--color-error)"),A&&(A.textContent=`Partido: ${U}`),k&&(k.style.display="none"),S&&(S.style.display="inline-flex"),I&&(I.innerHTML='<i data-lucide="lock" style="width: 16px; height: 16px;"></i> Bloquear Pista')):(C&&(C.textContent="Disponible",C.style.color="var(--color-success)"),A&&(A.textContent="Pista libre para programar encuentros."),k&&(k.style.display="flex"),S&&(S.style.display="none"),I&&(I.innerHTML='<i data-lucide="lock" style="width: 16px; height: 16px;"></i> Bloquear Pista'));const H=t.querySelector(".courts-grid-map").previousElementSibling;H&&(H.outerHTML=`
                        <h3 style="font-family: var(--font-headings); font-size: 1.35rem; color: #ffffff; margin-bottom: 0.5rem; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem; flex-wrap: wrap; gap: 1rem;">
                            <span style="display: flex; align-items: center; gap: 0.5rem;">
                                <i data-lucide="map" style="color: var(--color-primary);"></i>
                                Ocupación de Pistas (${T})
                            </span>
                            <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: normal;">
                                Hora de referencia activa en el cuadrante: <strong style="color: var(--color-primary);">${T}</strong>
                            </span>
                        </h3>
                    `);const _=t.querySelector(".courts-grid-map");if(_){const q={};e.matches.forEach(M=>{M.court&&M.time===T&&(q[M.court.toUpperCase().trim()]=M)}),_.innerHTML=r.map(M=>{const F=q[M],ee=!!F;if(y.isSlotBlocked(M,T,B))return`
                                <div class="court-map-card occupied" style="background: rgba(245, 158, 11, 0.05); border-color: rgba(245, 158, 11, 0.35);">
                                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                        <strong style="color: #ffffff; font-size: 1.05rem;">${M}</strong>
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
                            `;if(ee){const W=a(F.team1Id),J=a(F.team2Id);return`
                                <div class="court-map-card occupied">
                                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                        <strong style="color: #ffffff; font-size: 1.05rem;">${M}</strong>
                                        <span class="court-badge-status occupied">
                                            <i data-lucide="lock" style="width: 10px; height: 10px;"></i> Ocupada
                                        </span>
                                    </div>
                                    <div style="font-size: 0.85rem; color: var(--text-muted);">
                                        <div>Hora: <strong style="color: #ffffff;">${F.time||"—"}</strong></div>
                                        <div>Fase: <strong>${F.stage||"—"}</strong></div>
                                    </div>
                                    <div class="court-net-line"></div>
                                    <div style="font-size: 0.8rem; font-weight: 600; color: var(--color-primary); display: flex; flex-direction: column; gap: 0.25rem;">
                                        <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${W}">${W}</span>
                                        <span style="color: var(--text-muted); font-size: 0.7rem; text-align: center;">vs</span>
                                        <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${J}">${J}</span>
                                    </div>
                                </div>
                            `}else return`
                                <div class="court-map-card available">
                                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                        <strong style="color: #ffffff; font-size: 1.05rem;">${M}</strong>
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
                            `}).join("")}$()})}),z&&j&&z.addEventListener("click",()=>{const p=j.value,b=z.dataset.court,w=z.dataset.time,E=z.dataset.date;if(!p){x("Por favor, selecciona un partido para asignar.","warning");return}const T=y.updateMatchSchedule(i,p,{court:b,time:w,date:E});T.error?x(T.error,"error"):(x("Partido asignado correctamente","success"),this.renderScheduleMatchesList(i))}),S&&S.addEventListener("click",()=>{const p=S.dataset.matchId;if(p&&confirm("¿Estás seguro de que deseas liberar esta pista? El partido quedará pendiente de programar.")){const b=y.clearMatchSchedule(i,p);b.error?x(b.error,"error"):(x("Pista liberada correctamente","info"),this.renderScheduleMatchesList(i))}}),I&&I.addEventListener("click",()=>{const p=I.dataset.court,b=I.dataset.time,w=I.dataset.date,E=y.toggleBlockSlot(p,b,w);E.error?x(E.error,"error"):(E.blocked?x(`Pista bloqueada a las ${b}`,"warning"):x("Pista desbloqueada correctamente","success"),this.renderScheduleMatchesList(i))})},renderQuickMatchesList(i){const t=document.getElementById("admin-quick-matches-container");if(!t)return;if(!i){t.innerHTML=`
                <p style="text-align: center; color: var(--text-muted); padding: 2rem 0;">Selecciona un torneo en curso para ingresar marcadores.</p>
            `,$();return}const e=y.getTournament(i);if(!e||e.matches.length===0){t.innerHTML=`
                <p style="text-align: center; color: var(--text-muted); padding: 2rem 0;">No se han generado cruces todavía.</p>
            `,$();return}const a=r=>{const n=e.couples.find(d=>d.id===r);return n?`${n.player1} / ${n.player2}`:"Por definir"};t.innerHTML=`
            <div class="admin-matches-list">
                ${e.matches.map(r=>{const n=a(r.team1Id),d=a(r.team2Id),l=r.team1Id!==null&&r.team2Id!==null,s=r.completed?r.isWO?"Victoria por W.O.":`${Array.isArray(r.score1)?r.score1.join("/"):"—"} vs ${Array.isArray(r.score2)?r.score2.join("/"):"—"}`:"Pendiente";return`
                        <div class="admin-match-row">
                            <div class="admin-match-teams">
                                <span style="font-size: 0.7rem; color: var(--text-muted); font-weight: 600;">
                                    ${r.divisionCode||"XC"} - PARTIDO #${r.matchIndex+1}
                                </span>
                                <div class="admin-match-team-row ${r.completed&&r.winnerId===r.team1Id?"winner":""}">
                                    <span>${n}</span>
                                </div>
                                <div class="admin-match-team-row ${r.completed&&r.winnerId===r.team2Id?"winner":""}">
                                    <span>${d}</span>
                                </div>
                            </div>
                            
                            <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 0.5rem; flex-shrink: 0;">
                                <span class="admin-match-score">${s}</span>
                                ${l?`
                                    <button class="btn btn-secondary btn-sm edit-score-btn" data-match-id="${r.id}" style="padding: 0.35rem 0.75rem; font-size: 0.8rem;">
                                        <span>Marcador</span>
                                    </button>
                                `:`
                                    <span style="font-size: 0.75rem; color: var(--text-muted); font-style: italic;">Esperando cruce</span>
                                `}
                            </div>
                        </div>
                    `}).join("")}
            </div>
        `,$(),t.querySelectorAll(".edit-score-btn").forEach(r=>{r.addEventListener("click",n=>{const d=n.currentTarget.dataset.matchId;this.renderQuickScoreForm(e,d)})})},resetScoreFormContainer(){const i=document.getElementById("admin-score-form-container");i&&(i.innerHTML=`
                <p style="text-align: center; color: var(--text-muted); padding: 2rem 0;">
                    Selecciona un partido de la lista para introducir sus resultados.
                </p>
            `)},renderQuickScoreForm(i,t){var l,s,c,g,m,u;const e=document.getElementById("admin-score-form-container");if(!e)return;const a=i.matches.find(f=>f.id===t);if(!a)return;const o=f=>{const h=i.couples.find(v=>v.id===f);return h?`${h.player1} / ${h.player2}`:"Por definir"},r=o(a.team1Id),n=o(a.team2Id);e.innerHTML=`
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
                        <span style="font-size: 0.8rem; font-weight: 600; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${r}">${r}</span>
                        <input type="number" id="q-t1-s1" class="form-input" style="padding: 0.35rem; text-align: center;" min="0" max="7" required placeholder="0" value="${((l=a.score1)==null?void 0:l[0])!==void 0?a.score1[0]:""}">
                        <input type="number" id="q-t1-s2" class="form-input" style="padding: 0.35rem; text-align: center;" min="0" max="7" required placeholder="0" value="${((s=a.score1)==null?void 0:s[1])!==void 0?a.score1[1]:""}">
                        <input type="number" id="q-t1-s3" class="form-input" style="padding: 0.35rem; text-align: center;" min="0" max="7" placeholder="0" value="${((c=a.score1)==null?void 0:c[2])!==void 0?a.score1[2]:""}">
                    </div>

                    <div style="display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; align-items: center; gap: 0.5rem; margin-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.03); padding-bottom: 0.75rem;">
                        <span style="font-size: 0.8rem; font-weight: 600; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${n}">${n}</span>
                        <input type="number" id="q-t2-s1" class="form-input" style="padding: 0.35rem; text-align: center;" min="0" max="7" required placeholder="0" value="${((g=a.score2)==null?void 0:g[0])!==void 0?a.score2[0]:""}">
                        <input type="number" id="q-t2-s2" class="form-input" style="padding: 0.35rem; text-align: center;" min="0" max="7" required placeholder="0" value="${((m=a.score2)==null?void 0:m[1])!==void 0?a.score2[1]:""}">
                        <input type="number" id="q-t2-s3" class="form-input" style="padding: 0.35rem; text-align: center;" min="0" max="7" placeholder="0" value="${((u=a.score2)==null?void 0:u[2])!==void 0?a.score2[2]:""}">
                    </div>

                    <div class="form-group" style="margin-bottom: 1rem;">
                        <label style="display: flex; align-items: center; gap: 0.25rem; font-size: 0.8rem; cursor: pointer;">
                            <input type="checkbox" id="q-match-wo" style="accent-color: var(--color-primary); width: 14px; height: 14px;" ${a.isWO?"checked":""}>
                            Declarar victoria por W.O. (Walk Over)
                        </label>
                    </div>

                    <div class="form-group" style="margin-bottom: 1.25rem;">
                        <label for="q-select-winner" style="font-size: 0.8rem;">Pareja Ganadora</label>
                        <select id="q-select-winner" class="form-select" style="padding: 0.5rem;" required>
                            <option value="">-- Elige un ganador --</option>
                            <option value="team1" ${a.completed&&a.winnerId===a.team1Id?"selected":""}>${r}</option>
                            <option value="team2" ${a.completed&&a.winnerId===a.team2Id?"selected":""}>${n}</option>
                        </select>
                    </div>

                    <button type="submit" class="btn btn-primary" style="width: 100%; padding: 0.6rem; font-size: 0.85rem;">
                        <i data-lucide="save" style="width: 14px; height: 14px;"></i> Guardar Marcador
                    </button>
                </form>
            </div>
        `,$();const d=document.getElementById("btn-cancel-score");d&&d.addEventListener("click",()=>{this.resetScoreFormContainer()}),document.getElementById("quick-score-submit-form").addEventListener("submit",f=>{f.preventDefault();const h=parseInt(document.getElementById("q-t1-s1").value)||0,v=parseInt(document.getElementById("q-t1-s2").value)||0,P=document.getElementById("q-t1-s3").value,L=P!==""?parseInt(P):null,C=parseInt(document.getElementById("q-t2-s1").value)||0,A=parseInt(document.getElementById("q-t2-s2").value)||0,k=document.getElementById("q-t2-s3").value,j=k!==""?parseInt(k):null,z=document.getElementById("q-match-wo").checked,S=document.getElementById("q-select-winner").value,I=[h];(v!==0||L!==null)&&I.push(v),L!==null&&I.push(L);const p=[C];(A!==0||j!==null)&&p.push(A),j!==null&&p.push(j);const b=S==="team1"?a.team1Id:a.team2Id,w=y.updateMatchScore(i.id,t,I,p,b,z);w.error?x(w.error,"error"):(x("¡Marcador guardado y clasificación avanzada!","success"),this.renderQuickMatchesList(i.id),this.render())})},renderProfileTab(i){return`
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
                        <input type="text" id="profile-username-val" class="form-input" value="${i.username}" disabled style="background: rgba(255,255,255,0.02); color: var(--text-muted); cursor: not-allowed; border-color: var(--border-color);">
                        <span style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.15rem;">El nombre de usuario no es modificable.</span>
                    </div>
                    
                    <div class="form-group" style="margin-top: 1.25rem;">
                        <label for="profile-fullname-val">Nombre Completo</label>
                        <input type="text" id="profile-fullname-val" class="form-input" value="${i.fullName}">
                    </div>

                    <div class="form-group" style="margin-top: 1.25rem; margin-bottom: 2rem;">
                        <label for="profile-password-val">Nueva Contraseña</label>
                        <input type="password" id="profile-password-val" class="form-input" value="${i.password}" placeholder="Introduce tu nueva contraseña">
                    </div>

                    <button type="submit" id="btn-save-profile" class="btn btn-primary" style="width: 100%; justify-content: center; gap: 0.5rem;">
                        <i data-lucide="save"></i>
                        <span>Guardar Cambios</span>
                    </button>
                </form>
            </div>
        `}},de={activePortalTab:"schedule",render(){const i=document.getElementById("app-content");if(!i)return;const t=y.getCurrentUser();if(t&&t.role==="ADMIN"){window.location.hash="#/admin/dashboard";return}if(!t){this.renderAuthScreen(i);return}this.renderPortalDashboard(i,t)},renderAuthScreen(i){i.innerHTML=`
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
        `,$();const t=document.getElementById("btn-player-bypass");t&&t.addEventListener("click",()=>{const a=y.login("lebron","123");localStorage.setItem("showLoginToast",`Acceso rápido como ${a.user.fullName}`),window.location.hash="#/player/dashboard",window.location.reload()});const e=document.getElementById("btn-player-submit");e&&e.addEventListener("click",a=>{a.preventDefault();const o=document.getElementById("portal-username").value.trim();let r=document.getElementById("portal-password").value;if(!o){x("Por favor, introduce tu nombre de usuario.","warning");return}const n=o.toLowerCase().replace(/\s+/g,"");if((n==="lebron123"||n==="lebron")&&!r&&(r="123"),!r){x("Por favor, introduce tu contraseña.","warning");return}const d=y.login(o,r);d.error?x(d.error,"error"):(localStorage.setItem("showLoginToast",`¡Hola, ${d.user.fullName}! Accediendo al portal...`),window.location.hash="#/player/dashboard",window.location.reload())}),document.getElementById("portal-login-form").addEventListener("submit",a=>{a.preventDefault(),e&&e.click()})},renderPortalDashboard(i,t){const e=y.getTournaments(),a=(t.fullName||"").toLowerCase(),o=(t.username||"").toLowerCase(),r=[];e.forEach(d=>{d.couples.forEach(l=>{const s=(l.player1||"").toLowerCase(),c=(l.player2||"").toLowerCase();if(l.username1===t.username||a&&s.includes(a)||a&&c.includes(a)||s.includes(o)||c.includes(o)){const m=a&&s.includes(a)||s.includes(o);r.push({tournament:d,couple:l,roleInCouple:m?"P1":"P2",partnerName:m?l.player2:l.player1,partnerPhone:m?l.phone2:l.phone1})}})});const n=[];r.forEach(d=>{d.tournament.matches&&d.tournament.matches.length>0&&d.tournament.matches.forEach(l=>{(l.team1Id===d.couple.id||l.team2Id===d.couple.id)&&n.push({tournament:d.tournament,match:l,myCouple:d.couple,myRole:d.roleInCouple,partnerName:d.partnerName,partnerPhone:d.partnerPhone,opponentId:l.team1Id===d.couple.id?l.team2Id:l.team1Id})})}),i.innerHTML=`
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
                                    <span class="user-card-name" style="margin: 0; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: block;">${t.fullName}</span>
                                    <span class="user-card-role" style="color: var(--color-stripe); font-size: 0.75rem; text-transform: uppercase; font-weight: bold; display: block;">Jugador de Pádel</span>
                                </div>
                                <i data-lucide="edit-3" style="width: 14px; height: 14px; color: var(--text-muted); opacity: 0.7; flex-shrink: 0; margin-left: 0.5rem;"></i>
                            </div>
                        </div>

                        <!-- Menú de Pestañas -->
                        <div class="sidebar-menu">
                            <button class="sidebar-menu-item ${this.activePortalTab==="schedule"?"active":""}" data-portal-link="schedule">
                                <i data-lucide="calendar"></i>
                                <span>Mi Agenda de Juego</span>
                            </button>
                            <button class="sidebar-menu-item ${this.activePortalTab==="tournaments"?"active":""}" data-portal-link="tournaments">
                                <i data-lucide="award"></i>
                                <span>Mis Torneos</span>
                            </button>
                            <button class="sidebar-menu-item ${this.activePortalTab==="history"?"active":""}" data-portal-link="history">
                                <i data-lucide="history"></i>
                                <span>Historial de Partidas</span>
                            </button>
                            <button class="sidebar-menu-item ${this.activePortalTab==="preferences"?"active":""}" data-portal-link="preferences">
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
                            Mi Competición <span style="color: var(--text-muted); font-size: 0.9rem; font-weight: normal; margin-left: 0.5rem;">/ ${this.activePortalTab==="schedule"?"Mi Agenda y Cruces":this.activePortalTab==="tournaments"?"Mis Torneos":this.activePortalTab==="history"?"Historial de Partidas":this.activePortalTab==="preferences"?"Mis Preferencias":"Mi Perfil"}</span>
                        </div>
                        <div class="topbar-actions" style="display: flex; align-items: center; gap: 1rem;">
                            <span class="badge badge-gold" style="font-size: 0.75rem;">
                                <i data-lucide="smile"></i> Ficha Activa
                            </span>
                        </div>
                    </header>

                    <div class="dashboard-view-content">
                        <!-- ESTADO DE INSCRIPCIÓN DEPORTIVA PREMIUM -->
                        ${this.activePortalTab!=="profile"?`
                        <div class="glass-card" style="border-color: ${r.length>0?"rgba(16, 185, 129, 0.25)":"rgba(239, 68, 68, 0.25)"}; margin-bottom: 2rem; display: flex; align-items: center; gap: 1.25rem; background: ${r.length>0?"rgba(16, 185, 129, 0.02)":"rgba(239, 68, 68, 0.02)"}">
                            <div style="background: ${r.length>0?"rgba(16, 185, 129, 0.1)":"rgba(239, 68, 68, 0.1)"}; color: ${r.length>0?"var(--color-success)":"var(--color-error)"}; padding: 0.6rem; border-radius: 50%; display: flex;">
                                <i data-lucide="${r.length>0?"check-circle":"alert-circle"}" style="width: 24px; height: 24px;"></i>
                            </div>
                            <div>
                                <h4 style="font-family: var(--font-headings); font-size: 1.05rem; color: #ffffff; margin-bottom: 0.2rem;">Estado de Inscripción Oficial</h4>
                                <p style="color: var(--text-muted); font-size: 0.85rem;">
                                    ${r.length>0?`¡Confirmado! Estás inscrito oficialmente en el torneo: <strong style="color: var(--color-success);">${r.map(d=>d.tournament.title).join(", ")}</strong>.`:"No figuras inscrito en ningún torneo de pádel activo en este momento."}
                                </p>
                            </div>
                        </div>
                        `:""}

                        <!-- PESTAÑA A: AGENDA DE JUEGO (CRUCES & HORARIOS ESTILO CAPTURA 3) -->
                        <div class="t-tab-content ${this.activePortalTab==="schedule"?"active":""}">
                            <!-- Resumen Compañero -->
                            <div class="glass-card" style="margin-bottom: 2rem; border-color: rgba(204,255,0,0.15); display: flex; flex-direction: column; gap: 1rem;">
                                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; width: 100%;">
                                    <div style="display: flex; align-items: center; gap: 1.5rem; flex-grow: 1;">
                                        <div style="background: rgba(204,255,0,0.08); color: var(--color-primary); padding: 0.75rem; border-radius: 50%;">
                                            <i data-lucide="users" style="width: 28px; height: 28px;"></i>
                                        </div>
                                        <div>
                                            <h4 style="font-family: var(--font-headings); font-size: 1.1rem; color: #ffffff; margin-bottom: 0.25rem;">Tu Pareja de Juego</h4>
                                            ${r.length>0?`
                                                <p style="color: var(--text-muted); font-size: 0.9rem;">
                                                    Estás registrado junto a <strong style="color: #ffffff">${r[0].partnerName||"Buscando compañero/a..."}</strong>. 
                                                    ${r[0].partnerPhone?`Contacto de juego: <code style="color: var(--color-primary);">${r[0].partnerPhone}</code>`:""}
                                                </p>
                                            `:`
                                                <p style="color: var(--text-muted); font-size: 0.9rem;">
                                                    No figuras inscrito en ninguna pareja actualmente. ¡Explora los torneos e inscríbete para figurar en el roster del club!
                                                </p>
                                            `}
                                        </div>
                                    </div>
                                    ${r.length>0?`
                                        <div style="display: flex; gap: 0.5rem; align-items: center;">
                                            <button id="btn-quick-change-partner" class="btn btn-secondary btn-sm" style="padding: 0.4rem 0.8rem; font-size: 0.8rem; border-color: rgba(204, 255, 0, 0.25); min-width: 90px; height: 32px;">
                                                <i data-lucide="user-plus" style="width: 14px; height: 14px;"></i>
                                                <span>Cambiar</span>
                                            </button>
                                            ${r[0].partnerName&&r[0].partnerName!=="Buscando compañero/a..."?`
                                                <button id="btn-quick-dissolve-partner" class="btn btn-secondary btn-sm" style="padding: 0.4rem 0.8rem; font-size: 0.8rem; border-color: rgba(239, 68, 68, 0.3); color: #f87171; min-width: 90px; height: 32px;">
                                                    <i data-lucide="user-minus" style="width: 14px; height: 14px;"></i>
                                                    <span>Ir Solo</span>
                                                </button>
                                            `:""}
                                        </div>
                                    `:""}
                                </div>

                                <!-- Formulario de Cambio Rápido (Oculto por defecto) -->
                                ${r.length>0?`
                                    <div id="quick-change-partner-container" style="display: none; padding-top: 1rem; border-top: 1px dashed var(--border-color); animation: fadeInEffect var(--transition-fast) forwards;">
                                        <div class="form-row" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1rem;">
                                            <div class="form-group" style="margin: 0;">
                                                <label for="new-partner-name" style="font-size: 0.75rem;">Nombre del Compañero/a</label>
                                                <input type="text" id="new-partner-name" class="form-input" style="padding: 0.5rem;" value="${r[0].partnerName==="Buscando compañero/a..."?"":r[0].partnerName}" placeholder="Nombre completo">
                                            </div>
                                            <div class="form-group" style="margin: 0;">
                                                <label for="new-partner-phone" style="font-size: 0.75rem;">Teléfono de Contacto</label>
                                                <input type="text" id="new-partner-phone" class="form-input" style="padding: 0.5rem;" value="${r[0].partnerPhone||""}" placeholder="Ej. 600123456">
                                            </div>
                                        </div>
                                        <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
                                            <button id="btn-cancel-partner-change" class="btn btn-secondary btn-sm" style="padding: 0.4rem 0.8rem; font-size: 0.8rem; height: 32px;">Cancelar</button>
                                            <button id="btn-save-partner-change" class="btn btn-primary btn-sm" style="padding: 0.4rem 1rem; font-size: 0.8rem; height: 32px;" data-t-id="${r[0].tournament.id}" data-couple-id="${r[0].couple.id}" data-role="${r[0].roleInCouple}">Guardar</button>
                                        </div>
                                    </div>
                                `:""}
                            </div>

                            <h3 style="font-family: var(--font-headings); font-size: 1.35rem; color: #ffffff; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
                                <i data-lucide="swords" style="color: var(--color-primary);"></i>
                                Próximos Encuentros (Horas y Oponentes)
                            </h3>

                            ${n.length===0?`
                                <div class="glass-card" style="text-align: center; padding: 4rem 2rem; color: var(--text-muted);">
                                    <i data-lucide="calendar-days" style="width: 48px; height: 48px; opacity: 0.5; margin-bottom: 1rem;"></i>
                                    <p>Tu agenda está libre. Los directores deportivos programarán tus pistas en cuanto comience la eliminatoria.</p>
                                </div>
                            `:`
                                <div class="tournaments-grid" style="grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 1.5rem;">
                                    ${n.map(d=>{const l=d.tournament,s=d.match,c=l.couples.find(A=>A.id===d.opponentId),g=c?`${c.player1} / ${c.player2}`:"TBD (Por Definir)",m=`${d.myCouple.player1} / ${d.myCouple.player2}`,u=s.completed,f=u&&s.winnerId===d.myCouple.id,h=u&&s.winnerId===d.opponentId,v=u?s.team1Id===d.myCouple.id?s.score1:s.score2:null,P=u?s.team1Id===d.opponentId?s.score1:s.score2:null,L=Array.isArray(v)?v.join(" "):s.isWO&&s.winnerId===d.myCouple.id?"W.O.":"—",C=Array.isArray(P)?P.join(" "):s.isWO&&s.winnerId===d.opponentId?"W.O.":"—";return`
                                            <div class="glass-card" style="padding: 0; overflow: hidden; border-color: ${u?"var(--border-color)":"rgba(204,255,0,0.2)"};">
                                                <!-- Cabecera de División tipo Sportelia -->
                                                <div style="background: rgba(255,255,255,0.02); padding: 0.75rem 1.25rem; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color);">
                                                    <span style="font-size: 0.75rem; font-weight: 700; color: var(--color-primary);">
                                                        ${s.divisionCode||"XC"} - ${s.stage||"Grupo"}
                                                    </span>
                                                    <span style="font-size: 0.7rem; color: var(--text-muted);">
                                                        ${u?"Finalizado":"Pendiente"}
                                                    </span>
                                                </div>

                                                <!-- Cuerpo del partido -->
                                                <div style="padding: 1.25rem;">
                                                    <!-- Fila de tu pareja -->
                                                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; padding: 0.4rem 0.6rem; border-radius: 6px; background: rgba(204,255,0,0.04);">
                                                        <span style="font-size: 0.9rem; font-weight: 600; color: #ffffff; max-width: 220px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                                            ${m} <span style="font-size: 0.75rem; color: var(--color-primary); font-weight: normal;">(Tú)</span>
                                                        </span>
                                                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                            ${f?'<i data-lucide="award" style="width: 14px; height: 14px; color: var(--color-primary);"></i>':""}
                                                            <span style="font-family: monospace; font-size: 0.95rem; font-weight: bold; color: ${f?"var(--color-primary)":"var(--text-muted)"};">${L}</span>
                                                        </div>
                                                    </div>

                                                    <!-- Fila oponente -->
                                                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.4rem 0.6rem; border-radius: 6px;">
                                                        <span style="font-size: 0.9rem; color: var(--text-muted); max-width: 220px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${g}">
                                                            ${g}
                                                        </span>
                                                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                            ${h?'<i data-lucide="award" style="width: 14px; height: 14px; color: var(--color-primary);"></i>':""}
                                                            <span style="font-family: monospace; font-size: 0.95rem; font-weight: bold; color: ${h?"var(--color-primary)":"var(--text-muted)"};">${C}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <!-- Horario, Pista e Información Inferior (Captura 3) -->
                                                <div style="background: rgba(255,255,255,0.01); border-top: 1px solid var(--border-color); padding: 0.6rem 1.25rem; display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--text-muted);">
                                                    <span style="display: flex; align-items: center; gap: 0.25rem;">
                                                        <i data-lucide="calendar" style="width: 13px; height: 13px; color: var(--color-primary);"></i>
                                                        ${s.date||"DOM. 31"}
                                                    </span>
                                                    <span style="display: flex; align-items: center; gap: 0.25rem;">
                                                        <i data-lucide="clock" style="width: 13px; height: 13px; color: var(--color-primary);"></i>
                                                        ${s.time||"09:00"}
                                                    </span>
                                                    <span style="display: flex; align-items: center; gap: 0.25rem;">
                                                        <i data-lucide="map-pin" style="width: 13px; height: 13px; color: var(--color-primary);"></i>
                                                        ${s.court||"PISTA 5"}
                                                    </span>
                                                </div>
                                            </div>
                                        `}).join("")}
                                </div>
                            `}
                        </div>

                        <!-- PESTAÑA B: MIS TORNEOS INSCRITO -->
                        <div class="t-tab-content ${this.activePortalTab==="tournaments"?"active":""}">
                            <div class="glass-card">
                                <h3 style="font-family: var(--font-headings); font-size: 1.35rem; color: #ffffff; margin-bottom: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">
                                    Mis Inscripciones Oficiales
                                </h3>

                                ${r.length===0?`
                                    <p style="color: var(--text-muted); text-align: center; padding: 2rem 0;">Aún no tienes torneos guardados en esta cuenta.</p>
                                `:`
                                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                                        ${r.map(d=>`
                                            <div class="glass-card" style="display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.01);">
                                                <div>
                                                    <h4 style="font-family: var(--font-headings); color: #ffffff; font-size: 1.1rem; margin-bottom: 0.25rem;">
                                                        ${d.tournament.title}
                                                    </h4>
                                                    <p style="font-size: 0.85rem; color: var(--text-muted);">
                                                        Categoría: <strong>${d.tournament.category}</strong> | Fecha: <strong>${d.tournament.date}</strong>
                                                    </p>
                                                </div>
                                                <a href="#/torneo/${d.tournament.id}" class="btn btn-secondary btn-sm" style="padding: 0.4rem 1rem; font-size: 0.8rem;">
                                                    Ver Torneo
                                                </a>
                                            </div>
                                        `).join("")}
                                    </div>
                                `}
                            </div>
                        </div>

                        <!-- PESTAÑA C: MI PERFIL -->
                        <div class="t-tab-content ${this.activePortalTab==="profile"?"active":""}">
                            ${this.renderProfileTab(t)}
                        </div>

                        <!-- PESTAÑA D: HISTORIAL DE PARTIDAS -->
                        <div class="t-tab-content ${this.activePortalTab==="history"?"active":""}">
                            ${this.renderHistoryTab(t,n)}
                        </div>

                        <!-- PESTAÑA E: PREFERENCIAS DE JUEGO -->
                        <div class="t-tab-content ${this.activePortalTab==="preferences"?"active":""}">
                            ${this.renderPreferencesTab(t)}
                        </div>
                    </div>
                </main>
            </div>
        `,$(),this.bindPortalEvents(t)},renderProfileTab(i){return`
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
                        <input type="text" id="profile-username-val" class="form-input" value="${i.username}" disabled style="background: rgba(255,255,255,0.02); color: var(--text-muted); cursor: not-allowed; border-color: var(--border-color);">
                        <span style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.15rem;">El nombre de usuario no es modificable.</span>
                    </div>
                    
                    <div class="form-group" style="margin-top: 1.25rem;">
                        <label for="profile-fullname-val">Nombre Completo</label>
                        <input type="text" id="profile-fullname-val" class="form-input" value="${i.fullName}">
                    </div>

                    <div class="form-group" style="margin-top: 1.25rem; margin-bottom: 2rem;">
                        <label for="profile-password-val">Nueva Contraseña</label>
                        <input type="password" id="profile-password-val" class="form-input" value="${i.password}" placeholder="Introduce tu nueva contraseña">
                    </div>

                    <button type="submit" id="btn-save-profile" class="btn btn-primary" style="width: 100%; justify-content: center; gap: 0.5rem;">
                        <i data-lucide="save"></i>
                        <span>Guardar Cambios</span>
                    </button>
                </form>
            </div>
        `},renderHistoryTab(i,t){const e=t.filter(n=>n.match.completed);let a=0,o=0;e.forEach(n=>{n.match.winnerId===n.myCouple.id?a++:n.match.winnerId&&o++});const r=e.length>0?Math.round(a/e.length*100):0;return`
            <div class="stats-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
                <!-- Partidos Jugados -->
                <div class="glass-card" style="padding: 1.25rem; display: flex; align-items: center; gap: 1rem; border-color: rgba(255,255,255,0.08);">
                    <div style="background: rgba(255,255,255,0.05); color: #ffffff; padding: 0.5rem; border-radius: 8px;">
                        <i data-lucide="swords" style="width: 20px; height: 20px;"></i>
                    </div>
                    <div>
                        <div style="font-size: 0.75rem; color: var(--text-muted);">Jugados</div>
                        <div style="font-size: 1.5rem; font-weight: 700; color: #ffffff;">${e.length}</div>
                    </div>
                </div>
                <!-- Victorias -->
                <div class="glass-card" style="padding: 1.25rem; display: flex; align-items: center; gap: 1rem; border-color: rgba(16, 185, 129, 0.2);">
                    <div style="background: rgba(16, 185, 129, 0.1); color: var(--color-success); padding: 0.5rem; border-radius: 8px;">
                        <i data-lucide="trending-up" style="width: 20px; height: 20px;"></i>
                    </div>
                    <div>
                        <div style="font-size: 0.75rem; color: var(--text-muted);">Victorias</div>
                        <div style="font-size: 1.5rem; font-weight: 700; color: var(--color-success);">${a}</div>
                    </div>
                </div>
                <!-- Derrotas -->
                <div class="glass-card" style="padding: 1.25rem; display: flex; align-items: center; gap: 1rem; border-color: rgba(239, 68, 68, 0.2);">
                    <div style="background: rgba(239, 68, 68, 0.1); color: var(--color-error); padding: 0.5rem; border-radius: 8px;">
                        <i data-lucide="trending-down" style="width: 20px; height: 20px;"></i>
                    </div>
                    <div>
                        <div style="font-size: 0.75rem; color: var(--text-muted);">Derrotas</div>
                        <div style="font-size: 1.5rem; font-weight: 700; color: var(--color-error);">${o}</div>
                    </div>
                </div>
                <!-- Rendimiento -->
                <div class="glass-card" style="padding: 1.25rem; display: flex; align-items: center; gap: 1rem; border-color: rgba(204, 255, 0, 0.2);">
                    <div style="background: rgba(204, 255, 0, 0.1); color: var(--color-primary); padding: 0.5rem; border-radius: 8px;">
                        <i data-lucide="percent" style="width: 20px; height: 20px;"></i>
                    </div>
                    <div>
                        <div style="font-size: 0.75rem; color: var(--text-muted);">Rendimiento</div>
                        <div style="font-size: 1.5rem; font-weight: 700; color: var(--color-primary);">${r}%</div>
                    </div>
                </div>
            </div>

            <div class="glass-card" style="border-color: rgba(255, 255, 255, 0.08); padding: 2rem;">
                <h3 style="font-family: var(--font-headings); font-size: 1.35rem; color: #ffffff; margin-bottom: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i data-lucide="history" style="color: var(--color-primary);"></i>
                    Historial Completo
                </h3>

                ${e.length===0?`
                    <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
                        <i data-lucide="folder-open" style="width: 48px; height: 48px; opacity: 0.5; margin-bottom: 1rem; display: block; margin-left: auto; margin-right: auto;"></i>
                        <p>No tienes partidos finalizados en tu historial todavía.</p>
                    </div>
                `:`
                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                        ${e.map(n=>{const d=n.tournament,l=n.match,s=d.couples.find(A=>A.id===n.opponentId),c=s?`${s.player1} / ${s.player2}`:"TBD (Por Definir)",g=`${n.myCouple.player1} / ${n.myCouple.player2}`,m=l.winnerId===n.myCouple.id,u=m?"Victoria":"Derrota",f=m?"rgba(16, 185, 129, 0.05)":"rgba(239, 68, 68, 0.05)",h=m?"rgba(16, 185, 129, 0.15)":"rgba(239, 68, 68, 0.15)",v=l.team1Id===n.myCouple.id?l.score1:l.score2,P=l.team1Id===n.opponentId?l.score1:l.score2,L=Array.isArray(v)?v.join(" "):l.isWO&&l.winnerId===n.myCouple.id?"W.O.":"—",C=Array.isArray(P)?P.join(" "):l.isWO&&l.winnerId===n.opponentId?"W.O.":"—";return`
                                <div class="glass-card animate-slide-in" style="background: ${f}; border-color: ${h}; padding: 1.25rem; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1rem; transition: all var(--transition-fast);">
                                    <!-- Info Torneo & Fecha -->
                                    <div style="min-width: 200px;">
                                        <span class="badge ${m?"badge-open":"badge-full"}" style="font-size: 0.75rem; font-weight: 700; margin-bottom: 0.5rem; display: inline-flex; align-items: center; gap: 0.25rem; background: ${m?"rgba(16, 185, 129, 0.15)":"rgba(239, 68, 68, 0.15)"}; color: ${m?"#34d399":"#f87171"}; border: 1px solid ${m?"rgba(16, 185, 129, 0.3)":"rgba(239, 68, 68, 0.3)"};">
                                            <i data-lucide="${m?"check-circle":"x-circle"}" style="width: 12px; height: 12px;"></i>
                                            ${u}
                                        </span>
                                        <h4 style="font-family: var(--font-headings); font-size: 1.05rem; color: #ffffff; margin: 0 0 0.2rem 0;">
                                            ${d.title}
                                        </h4>
                                        <p style="color: var(--text-muted); font-size: 0.8rem; margin: 0; display: flex; align-items: center; gap: 0.5rem;">
                                            <span>${l.stage||"Grupo"}</span>
                                            <span>•</span>
                                            <span>${l.date||"DOM. 31"} ${l.time||""}</span>
                                            <span>•</span>
                                            <span>${l.court||"PISTA"}</span>
                                        </p>
                                    </div>

                                    <!-- Enfrentamiento & Marcador -->
                                    <div style="display: flex; align-items: center; gap: 2rem; flex-grow: 1; justify-content: flex-end; min-width: 280px;">
                                        <div style="text-align: right;">
                                            <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.2rem;">Pareja Oponente</div>
                                            <div style="font-size: 0.95rem; font-weight: 600; color: #ffffff;">
                                                ${c}
                                            </div>
                                            <div style="font-size: 0.75rem; color: var(--text-muted);">
                                                Tu Pareja: ${g}
                                            </div>
                                        </div>

                                        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); padding: 0.5rem 1rem; border-radius: 8px; text-align: center; min-width: 80px;">
                                            <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.15rem;">Resultado</div>
                                            <div style="font-family: monospace; font-size: 1.1rem; font-weight: 700; color: ${m?"var(--color-primary)":"#ffffff"};">
                                                ${L} - ${C}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `}).join("")}
                    </div>
                `}
            </div>
        `},renderPreferencesTab(i){const t=i.preferences||{preferredSide:"Indiferente",level:"Intermedio",availability:"Flexible",preferredPartner:"",notes:""};return`
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
                                <option value="Derecha (Drive)" ${t.preferredSide==="Derecha (Drive)"?"selected":""}>Derecha (Drive)</option>
                                <option value="Izquierda (Revés)" ${t.preferredSide==="Izquierda (Revés)"?"selected":""}>Izquierda (Revés)</option>
                                <option value="Indiferente" ${t.preferredSide==="Indiferente"?"selected":""}>Indiferente / Ambos lados</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="pref-level">Nivel de Juego</label>
                            <select id="pref-level" class="form-select">
                                <option value="Iniciación" ${t.level==="Iniciación"?"selected":""}>Iniciación</option>
                                <option value="Intermedio" ${t.level==="Intermedio"?"selected":""}>Intermedio</option>
                                <option value="Avanzado" ${t.level==="Avanzado"?"selected":""}>Avanzado</option>
                                <option value="Competición" ${t.level==="Competición"?"selected":""}>Competición</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-row" style="margin-top: 1.25rem;">
                        <div class="form-group">
                            <label for="pref-availability">Disponibilidad de Horario</label>
                            <select id="pref-availability" class="form-select">
                                <option value="Flexible" ${t.availability==="Flexible"?"selected":""}>Flexible (Cualquier horario)</option>
                                <option value="Mañanas" ${t.availability==="Mañanas"?"selected":""}>Mañanas</option>
                                <option value="Tardes" ${t.availability==="Tardes"?"selected":""}>Tardes</option>
                                <option value="Fines de semana" ${t.availability==="Fines de semana"?"selected":""}>Sólo Fines de Semana</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="pref-partner">Compañero Preferido</label>
                            <input type="text" id="pref-partner" class="form-input" value="${t.preferredPartner||""}" placeholder="Ej. Juan Montero o Teléfono">
                        </div>
                    </div>

                    <div class="form-group" style="margin-top: 1.25rem; margin-bottom: 2rem;">
                        <label for="pref-notes">Notas sobre tu estilo de juego o emparejamiento</label>
                        <textarea id="pref-notes" class="form-textarea" rows="3" placeholder="Ej. Busco compañero agresivo en la red, o prefiero jugar en categorías mixtas..." style="resize: vertical;">${t.notes||""}</textarea>
                    </div>

                    <button type="submit" id="btn-save-preferences" class="btn btn-primary" style="width: 100%; justify-content: center; gap: 0.5rem;">
                        <i data-lucide="save"></i>
                        <span>Guardar Preferencias</span>
                    </button>
                </form>
            </div>
        `},bindPortalEvents(i){const t=document.getElementById("sidebar-logout-btn"),e=document.getElementById("btn-player-profile");document.querySelectorAll("[data-portal-link]").forEach(g=>{g.addEventListener("click",m=>{this.activePortalTab=m.currentTarget.dataset.portalLink,this.render()})}),e&&e.addEventListener("click",()=>{this.activePortalTab="profile",this.render()});const o=document.getElementById("profile-edit-form");o&&o.addEventListener("submit",g=>{g.preventDefault();const m=document.getElementById("profile-fullname-val").value.trim(),u=document.getElementById("profile-password-val").value.trim();if(!m){x("El nombre completo no puede estar vacío.","warning");return}if(!u){x("La contraseña no puede estar vacía.","warning");return}const f=y.updateUserProfile(i.username,{fullName:m,password:u});f.error?x(f.error,"error"):(x("Perfil actualizado correctamente","success"),this.render())});const r=document.getElementById("preferences-edit-form");r&&r.addEventListener("submit",g=>{g.preventDefault();const m=document.getElementById("pref-side").value,u=document.getElementById("pref-level").value,f=document.getElementById("pref-availability").value,h=document.getElementById("pref-partner").value.trim(),v=document.getElementById("pref-notes").value.trim(),P={preferredSide:m,level:u,availability:f,preferredPartner:h,notes:v},L=y.updateUserProfile(i.username,{preferences:P});L.error?x(L.error,"error"):(x("Preferencias actualizadas correctamente","success"),this.render())});const n=document.getElementById("btn-quick-change-partner"),d=document.getElementById("btn-cancel-partner-change"),l=document.getElementById("btn-save-partner-change"),s=document.getElementById("btn-quick-dissolve-partner"),c=document.getElementById("quick-change-partner-container");n&&c&&n.addEventListener("click",()=>{const g=c.style.display==="none";c.style.display=g?"block":"none"}),d&&c&&d.addEventListener("click",()=>{c.style.display="none"}),l&&l.addEventListener("click",()=>{const g=l.dataset.tId,m=l.dataset.coupleId,u=l.dataset.role,f=document.getElementById("new-partner-name").value.trim(),h=document.getElementById("new-partner-phone").value.trim();if(!f){x('Por favor, indica el nombre de la pareja o indica "Buscando compañero/a...".',"warning");return}const v={};u==="P1"?(v.player2=f,v.phone2=h):(v.player1=f,v.phone1=h);const P=y.updateCouple(g,m,v);P.error?x(P.error,"error"):(x("Pareja modificada correctamente","success"),this.render())}),s&&s.addEventListener("click",()=>{const g=document.getElementById("btn-save-partner-change");if(!g)return;const m=g.dataset.tId,u=g.dataset.coupleId,f=g.dataset.role;if(confirm('¿Estás seguro de que deseas disolver la pareja? Pasarás a figurar como "Buscando compañero/a".')){const h={};f==="P1"?(h.player2="Buscando compañero/a...",h.phone2=""):(h.player1="Buscando compañero/a...",h.phone1="");const v=y.updateCouple(m,u,h);v.error?x(v.error,"error"):(x("Pareja disuelta. Ahora buscas compañero/a.","info"),this.render())}}),t&&t.addEventListener("click",()=>{y.logout(),localStorage.setItem("showLogoutToast","true"),window.location.hash="#/",window.location.reload()})}},ce={activeGroup:"masculino",render(){const i=document.getElementById("app-content");if(!i)return;const t=y.getTournaments(),e={};t.forEach(d=>{let l=d.category;l==="Plata"?l="Masculino - Segunda":l==="Oro"?l="Masculino - Primera":l==="Bronce"&&(l="Masculino - Tercera"),d.couples.forEach(s=>{const c=[s.player1,s.player2];c.forEach(u=>{u&&u.trim()!==""&&(e[u]||(e[u]={name:u,category:l,mp:0,w:0,l:0,winRate:0,points:0}))});const g=d.matches?d.matches.filter(u=>u.completed&&(u.team1Id===s.id||u.team2Id===s.id)):[],m=g.length;if(m>0){const u=g.filter(v=>v.winnerId===s.id).length,f=m-u,h=u*3+f*1;c.forEach(v=>{e[v]&&(e[v].mp+=m,e[v].w+=u,e[v].l+=f,e[v].points+=h)})}})}),Object.keys(e).forEach(d=>{const l=e[d];l.mp>0&&(l.winRate=Math.round(l.w/l.mp*100))});const a={"Femenina - Primera":[{name:"Ariana Sánchez",mp:10,w:9,l:1,winRate:90,points:28},{name:"Paula Josemaría",mp:10,w:8,l:2,winRate:80,points:26},{name:"Gemma Triay",mp:10,w:7,l:3,winRate:70,points:24},{name:"Claudia Fernández",mp:10,w:5,l:5,winRate:50,points:20}],"Femenina - Segunda":[{name:"Marta Ortega",mp:8,w:7,l:1,winRate:88,points:22},{name:"Sofia Araújo",mp:8,w:6,l:2,winRate:75,points:20},{name:"Virginia Riera",mp:8,w:4,l:4,winRate:50,points:16}],"Femenina - Tercera":[{name:"Delfina Brea",mp:6,w:5,l:1,winRate:83,points:16},{name:"Beatriz González",mp:6,w:4,l:2,winRate:67,points:14},{name:"Jessica Castelló",mp:6,w:3,l:3,winRate:50,points:12}],"Masculino - Primera":[{name:"Arturo Coello",mp:12,w:11,l:1,winRate:92,points:34},{name:"Agustín Tapia",mp:12,w:10,l:2,winRate:83,points:32},{name:"Federico Chingotto",mp:12,w:8,l:4,winRate:67,points:28},{name:"Martín Di Nenno",mp:12,w:6,l:6,winRate:50,points:24}],"Masculino - Segunda":[{name:"Carlos Martínez",mp:6,w:4,l:2,winRate:67,points:14},{name:"David López",mp:6,w:4,l:2,winRate:67,points:14},{name:"Sergio Ramos",mp:6,w:2,l:4,winRate:33,points:10},{name:"Luka Modric",mp:6,w:2,l:4,winRate:33,points:10}],"Masculino - Tercera":[{name:"Paquito Navarro",mp:8,w:6,l:2,winRate:75,points:20},{name:"Sanyo Gutiérrez",mp:8,w:5,l:3,winRate:63,points:18},{name:"Momo González",mp:8,w:4,l:4,winRate:50,points:16}]},o={masculino:["Masculino - Primera","Masculino - Segunda","Masculino - Segunda A","Masculino - Segunda B","Masculino - Tercera"],femenino:["Femenina - Primera","Femenina - Segunda","Femenina - Segunda A","Femenina - Segunda B","Femenina - Tercera"],mixto:["Mixto - Mixtos C"]};let r=`
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
                <button id="btn-group-masculino" class="btn btn-sm" style="${this.activeGroup==="masculino"?"background: var(--color-primary) !important; color: #000000 !important; border-color: var(--color-primary) !important; font-weight: bold;":"background: rgba(255,255,255,0.02); color: var(--text-muted); border-color: var(--border-color);"}">
                    <i data-lucide="user"></i> Categorías Masculinas
                </button>
                <button id="btn-group-femenino" class="btn btn-sm" style="${this.activeGroup==="femenino"?"background: var(--color-primary) !important; color: #000000 !important; border-color: var(--color-primary) !important; font-weight: bold;":"background: rgba(255,255,255,0.02); color: var(--text-muted); border-color: var(--border-color);"}">
                    <i data-lucide="user-plus"></i> Categorías Femeninas
                </button>
                <button id="btn-group-mixto" class="btn btn-sm" style="${this.activeGroup==="mixto"?"background: var(--color-primary) !important; color: #000000 !important; border-color: var(--color-primary) !important; font-weight: bold;":"background: rgba(255,255,255,0.02); color: var(--text-muted); border-color: var(--border-color);"}">
                    <i data-lucide="users"></i> Categorías Mixtas
                </button>
            </div>

            <!-- Listado de Categorías del Grupo Activo -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 2rem; margin-bottom: 4rem;">
        `;(o[this.activeGroup]||[]).forEach(d=>{let l=[];Object.keys(e).forEach(g=>{const m=e[g];m.category===d&&l.push({name:m.name,mp:m.mp,w:m.w,l:m.l,winRate:m.winRate,points:m.points})}),a[d]&&a[d].forEach(g=>{l.some(u=>u.name.toLowerCase()===g.name.toLowerCase())||l.push(g)}),l.sort((g,m)=>m.points-g.points||m.winRate-g.winRate);const s=l.length>0,c=s?l[0]:null;if(r+=`
                <div class="glass-card glow-hover" style="display: flex; flex-direction: column; gap: 1.5rem; padding: 1.75rem;">
                    <!-- Cabecera de Categoría -->
                    <div style="display: flex; align-items: center; gap: 0.75rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem; margin-bottom: 0.25rem;">
                        <div style="background: rgba(59, 130, 246, 0.1); color: var(--color-primary); padding: 0.5rem; border-radius: 8px;">
                            <i data-lucide="award" style="width: 22px; height: 22px;"></i>
                        </div>
                        <h3 style="font-family: var(--font-headings); font-size: 1.25rem; font-weight: 700; color: #ffffff;">
                            ${d}
                        </h3>
                    </div>
            `,s&&c){const g=c.name.charAt(0).toUpperCase();r+=`
                    <!-- Módulo Destacado: MEJOR JUGADOR -->
                    <div style="background: linear-gradient(135deg, rgba(59,130,246,0.06) 0%, rgba(59,130,246,0.02) 100%); border: 1px solid rgba(59,130,246,0.15); border-radius: 12px; padding: 1rem; display: flex; align-items: center; justify-content: space-between; position: relative; overflow: hidden;">
                        <div style="position: absolute; right: -10px; top: -10px; opacity: 0.08; color: var(--color-primary);">
                            <i data-lucide="crown" style="width: 80px; height: 80px;"></i>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.75rem; z-index: 1;">
                            <div style="background: var(--color-primary); color: #000000; font-weight: 800; font-size: 1rem; width: 42px; height: 42px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(59,130,246,0.25);">
                                ${g}
                            </div>
                            <div style="display: flex; flex-direction: column;">
                                <span style="font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: var(--color-primary); display: flex; align-items: center; gap: 0.25rem;">
                                    <i data-lucide="crown" style="width: 11px; height: 11px;"></i> Mejor Jugador
                                </span>
                                <strong style="font-size: 1rem; color: #ffffff; margin-top: 0.1rem;">${c.name}</strong>
                            </div>
                        </div>
                        <div style="text-align: right; z-index: 1;">
                            <span style="font-size: 1.15rem; font-weight: 800; color: var(--color-primary); font-family: monospace; display: block;">${c.points} pts</span>
                            <span style="font-size: 0.7rem; color: var(--text-muted);">${c.w}V - ${c.mp-c.w}D</span>
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
                                ${l.map((m,u)=>{let f="var(--text-muted)";return u===0&&(f="var(--color-primary)"),`
                                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.02);">
                                            <td style="padding: 0.5rem 0.25rem; font-weight: bold; color: ${f};">${u+1}</td>
                                            <td style="padding: 0.5rem 0.5rem; font-weight: 600; color: #ffffff;">${m.name}</td>
                                            <td style="padding: 0.5rem 0.5rem; text-align: center; color: var(--text-muted); font-family: monospace;">${m.mp}</td>
                                            <td style="padding: 0.5rem 0.5rem; text-align: center; color: var(--color-success); font-family: monospace;">${m.w}</td>
                                            <td style="padding: 0.5rem 0.5rem; text-align: center; color: #a39eff; font-family: monospace;">${m.winRate}%</td>
                                            <td style="padding: 0.5rem 0.25rem; text-align: right; font-weight: bold; color: var(--color-primary); font-family: monospace;">${m.points}</td>
                                        </tr>
                                    `}).join("")}
                            </tbody>
                        </table>
                    </div>
                `}else r+=`
                    <div style="text-align: center; padding: 2rem 0; color: var(--text-muted); font-size: 0.85rem;">
                        <i data-lucide="calendar" style="width: 24px; height: 24px; margin-bottom: 0.5rem; opacity: 0.5;"></i>
                        <p>No hay partidos registrados en esta categoría aún.</p>
                    </div>
                `;r+="</div>"}),r+="</div>",i.innerHTML=r,$(),this.bindEvents()},bindEvents(){const i=(t,e)=>{const a=document.getElementById(t);a&&a.addEventListener("click",o=>{o.preventDefault(),this.activeGroup=e,this.render()})};i("btn-group-masculino","masculino"),i("btn-group-femenino","femenino"),i("btn-group-mixto","mixto")}},me={activeTab:"points",selectedTournamentId:null,render(){const i=document.getElementById("app-content");if(!i)return;const t=y.getTournaments();let e=`
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
                <button id="btn-tab-points" class="btn btn-sm" style="${this.activeTab==="points"?"background: var(--color-primary) !important; color: #000000 !important; border-color: var(--color-primary) !important; font-weight: bold;":"background: rgba(255,255,255,0.02); color: var(--text-muted); border-color: var(--border-color);"}">
                    <i data-lucide="award"></i> Clasificación Oficial (Parejas)
                </button>
                <button id="btn-tab-brackets" class="btn btn-sm" style="${this.activeTab==="brackets"?"background: var(--color-primary) !important; color: #000000 !important; border-color: var(--color-primary) !important; font-weight: bold;":"background: rgba(255,255,255,0.02); color: var(--text-muted); border-color: var(--border-color);"}">
                    <i data-lucide="git-branch"></i> Cuadros y Marcadores (Cruces)
                </button>
            </div>
        `;this.activeTab==="points"?e+=this.renderPointsTab(t):e+=this.renderBracketsTab(t),i.innerHTML=e,$(),this.bindEvents()},bindEvents(){const i=document.getElementById("btn-tab-points"),t=document.getElementById("btn-tab-brackets");i&&i.addEventListener("click",a=>{a.preventDefault(),this.activeTab="points",this.render()}),t&&t.addEventListener("click",a=>{a.preventDefault(),this.activeTab="brackets",this.render()});const e=document.getElementById("select-classification-tournament");e&&e.addEventListener("change",a=>{this.selectedTournamentId=a.target.value,this.render()})},renderPointsTab(i){const t={oro:[],plata:[],bronce:[]},e=[];i.forEach(o=>{let r="bronce";const n=o.category.toLowerCase();n.includes("primera")||n.includes("oro")?r="oro":n.includes("segunda")||n.includes("plata")?r="plata":(n.includes("tercera")||n.includes("bronce")||n.includes("mixto"))&&(r="bronce"),o.couples.forEach(d=>{const l=o.matches?o.matches.filter(c=>c.completed&&(c.team1Id===d.id||c.team2Id===d.id)):[],s=l.length;if(s===0)e.push({player1:d.player1,player2:d.player2,tournamentTitle:o.title,category:o.category,registerDate:d.date||o.date||"Reciente"});else{const c=l.filter(f=>f.winnerId===d.id).length,g=s-c,m=Math.round(c/s*100),u=c*3+g*1;t[r].push({player1:d.player1,player2:d.player2,mp:s,w:c,l:g,winRate:m,points:u,tournamentTitle:o.title})}})});const a=o=>o.sort((r,n)=>n.points-r.points||n.winRate-r.winRate);return a(t.oro),a(t.plata),a(t.bronce),`
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
                    ${this.renderLeaderboardTable(t.oro)}
                </div>

                <!-- CATEGORÍA PLATA -->
                <div class="glass-card glow-hover" style="border-color: rgba(156, 163, 175, 0.2); padding: 1.75rem;">
                    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border-color);">
                        <div style="background: rgba(156, 163, 175, 0.1); color: #9ca3af; border: 1px solid rgba(156, 163, 175, 0.2); padding: 0.5rem; border-radius: 8px;">
                            <i data-lucide="award" style="width: 24px; height: 24px;"></i>
                        </div>
                        <h3 style="font-family: var(--font-headings); font-size: 1.25rem; font-weight: 700; color: #ffffff;">Categoría Plata</h3>
                    </div>
                    ${this.renderLeaderboardTable(t.plata)}
                </div>

                <!-- CATEGORÍA BRONCE -->
                <div class="glass-card glow-hover" style="border-color: rgba(180, 83, 9, 0.2); padding: 1.75rem;">
                    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border-color);">
                        <div style="background: rgba(180, 83, 9, 0.1); color: #fb923c; border: 1px solid rgba(180, 83, 9, 0.2); padding: 0.5rem; border-radius: 8px;">
                            <i data-lucide="award" style="width: 24px; height: 24px;"></i>
                        </div>
                        <h3 style="font-family: var(--font-headings); font-size: 1.25rem; font-weight: 700; color: #ffffff;">Categoría Bronce</h3>
                    </div>
                    ${this.renderLeaderboardTable(t.bronce)}
                </div>
            </div>

            <!-- Parejas Inscritas Sin Actividad -->
            <div class="glass-card" style="margin-bottom: 4rem;">
                <h3 style="font-family: var(--font-headings); font-size: 1.35rem; color: #ffffff; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i data-lucide="clock" style="color: var(--color-primary);"></i>
                    Parejas Registradas Sin Actividad
                </h3>
                <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.5rem;">Parejas y jugadores oficialmente inscritos esperando disputar sus primeros partidos</p>
                ${this.renderNotCompetedList(e)}
            </div>
        `},renderLeaderboardTable(i){return i.length===0?`
                <div style="text-align: center; padding: 2rem 0; color: var(--text-muted); font-size: 0.9rem;">
                    <i data-lucide="info" style="width: 20px; height: 20px; margin-bottom: 0.5rem; color: var(--text-muted);"></i>
                    <p>No hay partidos registrados en esta división aún.</p>
                </div>
            `:`
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
                        ${i.map((t,e)=>{let a="";return e===0?a="🥇":e===1?a="🥈":e===2&&(a="🥉"),`
                                <tr style="border-bottom: 1px solid rgba(255,255,255,0.02);">
                                    <td style="padding: 0.75rem 0.25rem; font-weight: bold; color: ${e<3?"var(--color-primary)":"var(--text-muted)"};">${a||e+1}</td>
                                    <td style="padding: 0.75rem 0.5rem;">
                                        <div style="display: flex; flex-direction: column; gap: 0.15rem;">
                                            <span style="color: #ffffff; font-weight: 600;">${t.player1}</span>
                                            <span style="color: var(--text-muted); font-size: 0.75rem;">${t.player2}</span>
                                        </div>
                                    </td>
                                    <td style="padding: 0.75rem 0.5rem; text-align: center; color: #ffffff; font-family: monospace;">${t.mp}</td>
                                    <td style="padding: 0.75rem 0.5rem; text-align: center; color: var(--color-success); font-family: monospace;">${t.w}</td>
                                    <td style="padding: 0.75rem 0.5rem; text-align: center; color: #a39eff; font-family: monospace;">${t.winRate}%</td>
                                    <td style="padding: 0.75rem 0.5rem; text-align: right; font-weight: bold; color: var(--color-primary); font-family: monospace;">${t.points}</td>
                                </tr>
                            `}).join("")}
                    </tbody>
                </table>
            </div>
        `},renderNotCompetedList(i){return i.length===0?`
                <div style="text-align: center; padding: 3rem 0; color: var(--text-muted); font-size: 0.95rem;">
                    <i data-lucide="check-circle" style="width: 32px; height: 32px; color: var(--color-success); margin-bottom: 0.75rem;"></i>
                    <p>Todos los jugadores inscritos ya han disputado partidos en el club.</p>
                </div>
            `:`
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
                        ${i.map(t=>`
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.02);">
                                <td style="padding: 0.75rem 0.5rem;">
                                    <div style="display: flex; flex-direction: column; gap: 0.15rem;">
                                        <span style="color: #ffffff; font-weight: 600;">${t.player1}</span>
                                        <span style="color: var(--text-muted); font-size: 0.75rem;">${t.player2}</span>
                                    </div>
                                </td>
                                <td style="padding: 0.75rem 0.5rem; color: #ffffff; font-weight: 500;">${t.tournamentTitle}</td>
                                <td style="padding: 0.75rem 0.5rem;"><span style="color: var(--color-primary); font-weight: bold; font-size: 0.8rem;">${t.category}</span></td>
                                <td style="padding: 0.75rem 0.5rem; text-align: right; color: var(--text-muted); font-size: 0.8rem;">${t.registerDate}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        `},renderBracketsTab(i){!this.selectedTournamentId&&i.length>0&&(this.selectedTournamentId=i[0].id);const t=y.getTournament(this.selectedTournamentId);if(i.length===0)return`
                <div class="glass-card" style="text-align: center; padding: 4rem 2rem;">
                    <i data-lucide="info" style="width: 48px; height: 48px; color: var(--text-muted); margin-bottom: 1rem;"></i>
                    <p style="color: var(--text-muted); font-size: 1.1rem;">No hay torneos registrados en el sistema actualmente.</p>
                </div>
            `;let e=`
            <div class="glass-card" style="margin-bottom: 2rem; padding: 1.25rem;">
                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
                    <div style="display: flex; flex-direction: column; gap: 0.25rem;">
                        <label style="font-size: 0.75rem; font-weight: bold; text-transform: uppercase; color: var(--text-muted);">Selecciona un Torneo</label>
                        <select id="select-classification-tournament" class="form-select" style="min-width: 280px; font-weight: 600;">
                            ${i.map(a=>`<option value="${a.id}" ${a.id===this.selectedTournamentId?"selected":""}>${a.title} (${a.category})</option>`).join("")}
                        </select>
                    </div>
                    <div style="display: flex; gap: 1rem; align-items: center;">
                        <span style="font-size: 0.85rem; color: var(--text-muted);">Estado:</span>
                        ${t?V(t.status):""}
                    </div>
                </div>
            </div>
        `;return t&&(e+=`
                <div class="t-detail-layout" style="grid-template-columns: 1fr; gap: 2rem; margin-top: 0;">
                    <!-- CUADRO ELIMINATORIO / BRACKETS -->
                    <div class="glass-card" style="overflow: hidden;">
                        <h3 style="font-family: var(--font-headings); font-size: 1.35rem; color: #ffffff; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem; flex-wrap: wrap; gap: 1rem;">
                            <span style="display: flex; align-items: center; gap: 0.5rem;">
                                <i data-lucide="git-branch" style="color: var(--color-primary);"></i>
                                Cuadro de Eliminatorias
                            </span>
                        </h3>
                        
                        ${this.renderBracketsSection(t)}
                    </div>

                    <!-- LISTA DE PARTIDOS Y Marcadores -->
                    <div class="glass-card">
                        <h3 style="font-family: var(--font-headings); font-size: 1.35rem; color: #ffffff; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
                            <i data-lucide="swords" style="color: var(--color-primary);"></i>
                            Partidos y Marcadores
                        </h3>
                        
                        ${this.renderMatchesListSection(t)}
                    </div>
                </div>
            `),e},renderBracketsSection(i){if(!i.matches||i.matches.length===0)return`
                <div style="text-align: center; padding: 4rem 2rem; color: var(--text-muted);">
                    <i data-lucide="calendar" style="width: 40px; height: 40px; margin-bottom: 1rem; color: var(--text-muted); opacity: 0.6;"></i>
                    <h4 style="font-size: 1.1rem; color: var(--text-main); margin-bottom: 0.5rem;">Fase de inscripciones abierta</h4>
                    <p style="font-size: 0.85rem; max-width: 480px; margin: 0 auto;">El cuadro de eliminatorias se generará dinámicamente una vez completadas las plazas (${i.couples.length} / ${i.maxCouples} parejas inscritas).</p>
                </div>
            `;const t=n=>{const d=i.couples.find(l=>l.id===n);return d?`${d.player1} / ${d.player2}`:"Por definir"},e=n=>{const d=i.couples.find(s=>s.id===n);if(!d)return"Por definir";const l=s=>{const c=s.trim().split(/\s+/);return c.length<2?s:`${c[0].charAt(0)}. ${c[c.length-1]}`};return`${l(d.player1)} / ${l(d.player2)}`},a={0:[],1:[],2:[]};i.matches.forEach(n=>{n.round in a&&a[n.round].push(n)}),Object.keys(a).forEach(n=>{a[n].sort((d,l)=>d.matchIndex-l.matchIndex)});const o=i.maxCouples===8?["Cuartos de Final","Semifinal","Gran Final"]:["Semifinal","Gran Final"],r=i.maxCouples===8?[0,1,2]:[0,1];return`
            <div class="bracket-wrapper">
                <div class="bracket-container" style="justify-content: ${i.maxCouples===8?"space-between":"center"}; gap: 3.5rem;">
                    ${r.map(n=>{const d=a[n]||[],l=o[n];return`
                            <div class="bracket-round" style="height: auto; justify-content: center; gap: ${n===0?"1.5rem":n===1?"4rem":"8rem"};">
                                <div style="text-align: center; font-size: 0.75rem; font-weight: bold; text-transform: uppercase; color: var(--color-primary); margin-bottom: 0.5rem; letter-spacing: 0.5px;">
                                    ${l}
                                </div>
                                ${d.map(s=>{const c=e(s.team1Id),g=e(s.team2Id),m=s.score1?s.score1.join("/"):"",u=s.score2?s.score2.join("/"):"",f=s.isWO;return`
                                        <div class="bracket-match" style="width: 200px;">
                                            <div class="bracket-match-header" style="display: flex; justify-content: space-between;">
                                                <span>Pista: ${s.court||"Por asignar"}</span>
                                                <span>${s.time||"--:--"}</span>
                                            </div>
                                            <div class="bracket-team-row ${s.winnerId&&s.winnerId===s.team1Id?"winner":""}">
                                                <span class="bracket-team-name" title="${t(s.team1Id)}">${c}</span>
                                                <span class="score">${f&&s.winnerId===s.team1Id?"W.O.":m}</span>
                                            </div>
                                            <div class="bracket-team-row ${s.winnerId&&s.winnerId===s.team2Id?"winner":""}">
                                                <span class="bracket-team-name" title="${t(s.team2Id)}">${g}</span>
                                                <span class="score">${f&&s.winnerId===s.team2Id?"W.O.":u}</span>
                                            </div>
                                        </div>
                                    `}).join("")}
                            </div>
                        `}).join("")}
                </div>
            </div>
        `},renderMatchesListSection(i){if(!i.matches||i.matches.length===0)return`
                <div style="text-align: center; padding: 2rem 0; color: var(--text-muted); font-size: 0.95rem;">
                    No hay partidos programados para este torneo todavía.
                </div>
            `;const t=a=>{const o=i.couples.find(r=>r.id===a);return o?`${o.player1} / ${o.player2}`:"Por definir"},e=i.maxCouples===8?["Cuartos de Final","Semifinal","Gran Final"]:["Semifinal","Gran Final"];return`
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
                        ${i.matches.map(a=>{const o=t(a.team1Id),r=t(a.team2Id);let n="—";return a.completed&&(a.isWO?n="W.O.":a.score1&&a.score2&&(n=`${a.score1.join("/")} - ${a.score2.join("/")}`)),`
                                <tr style="border-bottom: 1px solid var(--border-color);">
                                    <td style="padding: 1rem 0.75rem; font-weight: 600;">
                                        ${e[a.round]} ${a.stage?`<span style="font-size: 0.75rem; color: var(--text-muted); font-weight: normal; display: block;">${a.stage}</span>`:""}
                                    </td>
                                    <td style="padding: 1rem 0.75rem;">
                                        <div style="display: flex; flex-direction: column; gap: 0.15rem;">
                                            <span style="font-weight: 500; color: ${a.completed&&a.winnerId===a.team1Id?"var(--color-success)":"inherit"};">${o}</span>
                                            <span style="font-size: 0.7rem; color: var(--text-muted); padding-left: 0.5rem;">vs</span>
                                            <span style="font-weight: 500; color: ${a.completed&&a.winnerId===a.team2Id?"var(--color-success)":"inherit"};">${r}</span>
                                        </div>
                                    </td>
                                    <td style="padding: 1rem 0.75rem; text-align: center; font-weight: 600;">
                                        <span class="badge" style="background: rgba(59, 130, 246, 0.1); color: #3b82f6; border: 1px solid rgba(59, 130, 246, 0.25); text-transform: none; font-size: 0.7rem; padding: 0.25rem 0.5rem;">
                                            ${a.court||"Por asignar"}
                                        </span>
                                    </td>
                                    <td style="padding: 1rem 0.75rem; text-align: center; font-family: monospace; font-weight: bold;">
                                        ${a.time||"—"}
                                    </td>
                                    <td style="padding: 1rem 0.75rem; text-align: center; font-weight: bold; font-family: monospace; color: ${a.completed?"var(--color-primary)":"inherit"};">
                                        ${n}
                                    </td>
                                    <td style="padding: 1rem 0.75rem; text-align: center;">
                                        ${a.completed?'<span class="badge badge-silver" style="font-size: 0.65rem;">Finalizado</span>':'<span class="badge badge-open" style="font-size: 0.65rem;">Programado</span>'}
                                    </td>
                                </tr>
                            `}).join("")}
                    </tbody>
                </table>
            </div>
        `}};function pe(){(localStorage.getItem("theme")||"dark")==="light"?document.documentElement.classList.add("light-theme"):document.documentElement.classList.remove("light-theme")}function ue(){const i=document.documentElement.classList.toggle("light-theme");localStorage.setItem("theme",i?"light":"dark"),$()}pe();if(window.location.pathname.endsWith("/index.html")){const i=window.location.pathname.replace("/index.html","/");window.history.replaceState(null,"",i+window.location.hash)}const G={home:{render:()=>oe.render()},tournament:{render:i=>se.render(i)},admin:{render:()=>ne.render()},adminDashboard:{render:()=>le.render()},playerDashboard:{render:()=>de.render()},rankings:{render:()=>ce.render()},classification:{render:()=>me.render()}};function fe(){const i=document.getElementById("header-actions-container");if(!i)return;const t=y.getCurrentUser();t?t.role==="ADMIN"?i.innerHTML=`
            <a href="#/admin/dashboard" class="btn btn-primary btn-sm">
                <i data-lucide="layout-dashboard"></i>
                <span>Consola Club</span>
            </a>
            <button class="btn btn-secondary btn-sm" id="btn-header-logout" style="margin-left: 0.5rem; border-color: rgba(239, 68, 68, 0.3); color: #f87171;">
                <i data-lucide="log-out"></i>
                <span>Cerrar Sesión</span>
            </button>
        `:i.innerHTML=`
            <a href="#/player/dashboard" class="btn btn-primary btn-sm">
                <i data-lucide="award"></i>
                <span>Mis Torneos</span>
            </a>
            <button class="btn btn-secondary btn-sm" id="btn-header-logout" style="margin-left: 0.5rem; border-color: rgba(239, 68, 68, 0.3); color: #f87171;">
                <i data-lucide="log-out"></i>
                <span>Cerrar Sesión</span>
            </button>
        `:i.innerHTML=`
            <a href="#/player/dashboard" class="btn btn-secondary btn-sm" id="btn-header-player-portal">
                <i data-lucide="user"></i>
                <span>Panel del Deportista</span>
            </a>
            <a href="#/admin/dashboard" class="btn btn-primary btn-sm" id="btn-header-login" style="margin-left: 0.5rem;">
                <i data-lucide="shield"></i>
                <span>Panel de Club</span>
            </a>
        `;const e=document.getElementById("btn-header-logout");e&&e.addEventListener("click",()=>{y.logout(),localStorage.setItem("showLogoutToast","true"),window.location.hash="#/",window.location.reload()}),$()}function Z(){const i=window.location.hash||"#/",t=document.getElementById("app-content");if(!t)return;fe();let e="home",a=null;i==="#/"||i===""?e="home":i.startsWith("#/admin/dashboard")||i.startsWith("#/desktop")?e="adminDashboard":i.startsWith("#/admin")?e="admin":i.startsWith("#/player/dashboard")||i.startsWith("#/portal")||i.startsWith("#/player/desktop")?e="playerDashboard":i.startsWith("#/rankings")?e="rankings":i.startsWith("#/clasificacion")||i.startsWith("#/classification")?e="classification":i.startsWith("#/torneo/")?(e="tournament",a=i.replace("#/torneo/","")):e="home",e==="adminDashboard"||e==="playerDashboard"||e==="admin"?(document.body.classList.add("dashboard-mode"),document.documentElement.classList.add("dashboard-mode")):(document.body.classList.remove("dashboard-mode"),document.documentElement.classList.remove("dashboard-mode")),t.classList.remove("fade-in"),t.offsetWidth,t.classList.add("fade-in"),ge(e);try{e==="tournament"&&a?G.tournament.render(a):e==="admin"?G.admin.render():e==="adminDashboard"?G.adminDashboard.render():e==="playerDashboard"?G.playerDashboard.render():e==="rankings"?G.rankings.render():e==="classification"?G.classification.render():G.home.render()}catch(o){console.error("Error al cargar la sección:",o),t.innerHTML=`
            <div class="glass-card" style="text-align: center; padding: 4rem 2rem;">
                <i data-lucide="alert-circle" style="width: 48px; height: 48px; color: var(--color-error); margin-bottom: 1rem;"></i>
                <h3 style="font-family: var(--font-headings); font-size: 1.5rem; color: #ffffff; margin-bottom: 0.5rem;">Error de carga</h3>
                <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">Hubo un problema al dibujar esta sección en pantalla.</p>
                <a href="#/" class="btn btn-primary btn-sm">Volver a Torneos</a>
            </div>
        `,$()}}function ge(i){const t=document.getElementById("nav-home"),e=document.getElementById("nav-rankings"),a=document.getElementById("nav-classification");t&&t.classList.remove("active"),e&&e.classList.remove("active"),a&&a.classList.remove("active"),i==="rankings"?e&&e.classList.add("active"):i==="classification"?a&&a.classList.add("active"):i==="home"&&t&&t.classList.add("active")}window.addEventListener("hashchange",Z);window.addEventListener("load",()=>{$(),Z(),localStorage.getItem("showLogoutToast")&&(localStorage.removeItem("showLogoutToast"),x("Sesión cerrada correctamente","info"));const t=localStorage.getItem("showLoginToast");t&&(localStorage.removeItem("showLoginToast"),x(t,"success")),document.addEventListener("click",e=>{e.target.closest(".theme-toggle-btn")&&(e.preventDefault(),ue())})});
