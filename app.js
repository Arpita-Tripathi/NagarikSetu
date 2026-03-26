const STORAGE_KEY = "nagariksetu-data-v3";
const SESSION_KEY = "nagariksetu-session-v3";
const MAPS_API_KEY_STORAGE = "nagariksetu-google-maps-api-key-v1";
const MAPS_DEFAULT_CENTER = { lat: 18.5204, lng: 73.8567 };
const LEAFLET_JS_URL = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
const LEAFLET_CSS_URL = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
const NOMINATIM_SEARCH_URL = "https://nominatim.openstreetmap.org/search";

const ROLE_LABELS = {
  citizen: "Citizen",
  politician: "Politician",
};

const ISSUE_STATUS_LABELS = {
  open: "Open",
  in_progress: "In Progress",
  resolved: "Resolved",
};

const PETITION_STATUS_LABELS = {
  open: "Open",
  accepted: "Accepted",
  rejected: "Rejected",
};

const MEETING_STATUS_LABELS = {
  pending: "Pending",
  approved: "Approved",
  declined: "Declined",
  completed: "Completed",
};

const PROJECT_STATUS_LABELS = {
  planned: "Planned",
  active: "Active",
  completed: "Completed",
};

const WORK_MAP_SCOPE_LABELS = {
  live_projects: "live project",
  all_work: "ongoing work item",
  repairs: "repair work item",
};

const ANNOUNCEMENT_PRIORITY_LABELS = {
  normal: "Normal",
  important: "Important",
  urgent: "Urgent",
};

const CATEGORY_ASSIGNMENT = {
  Roads: {
    department: "Public Works Department",
    desk: "Road Repair Cell",
  },
  Water: {
    department: "Water Supply & Sewage Board",
    desk: "Pipeline Response Unit",
  },
  Sanitation: {
    department: "Sanitation & Solid Waste Department",
    desk: "Rapid Cleanup Team",
  },
  Safety: {
    department: "Public Safety & Street Lighting Cell",
    desk: "Safety Patrol Desk",
  },
  Healthcare: {
    department: "Public Health Department",
    desk: "Urban Health Response Team",
  },
  Transport: {
    department: "Urban Mobility Department",
    desk: "Traffic & Transit Control",
  },
  Education: {
    department: "Education & Social Welfare Department",
    desk: "School Infrastructure Desk",
  },
  Other: {
    department: "General Civic Operations Cell",
    desk: "General Resolution Desk",
  },
};

const ASSIGNMENT_RULES = [
  {
    keywords: ["streetlight", "street light", "dark", "lamp"],
    department: "Public Safety & Street Lighting Cell",
    desk: "Electrical Maintenance Crew",
  },
  {
    keywords: ["garbage", "waste", "drain", "sewer", "trash"],
    department: "Sanitation & Solid Waste Department",
    desk: "Zone Sanitation Operations",
  },
  {
    keywords: ["pothole", "road", "footpath", "pavement"],
    department: "Public Works Department",
    desk: "Road and Footpath Maintenance",
  },
  {
    keywords: ["water", "pipeline", "tap", "leak"],
    department: "Water Supply & Sewage Board",
    desk: "Leakage and Distribution Control",
  },
  {
    keywords: ["bus", "traffic", "signal", "transport"],
    department: "Urban Mobility Department",
    desk: "Traffic & Transit Control",
  },
];

const IDS = [
  "liveClock",
  "liveWeather",
  "liveIssueTicker",
  "sessionBox",
  "sessionUser",
  "notificationBtn",
  "notificationCount",
  "exportCsvBtn",
  "logoutBtn",
  "notificationPanel",
  "markNotificationsReadBtn",
  "notificationList",
  "authSection",
  "loginTabBtn",
  "registerTabBtn",
  "loginForm",
  "loginEmail",
  "loginPassword",
  "registerForm",
  "registerName",
  "registerEmail",
  "registerPassword",
  "registerRole",
  "registerCity",
  "registerConstituency",
  "appSection",
  "citizenView",
  "cStatOpen",
  "cStatPetitions",
  "cStatVotes",
  "cStatMeetings",
  "citizenAnnouncementsList",
  "citizenPromisesList",
  "citizenProjectBudgetLine",
  "citizenProjectsList",
  "citizenSlaSummary",
  "issueForm",
  "issueTitle",
  "issueCategory",
  "issuePriority",
  "issueWard",
  "issueLocation",
  "issueContact",
  "issueDescription",
  "citizenIssueFilter",
  "citizenIssueSearch",
  "citizenIssuesList",
  "petitionForm",
  "petitionTitle",
  "petitionCategory",
  "petitionDetails",
  "citizenPetitionsList",
  "citizenPollsList",
  "meetingForm",
  "meetingTopic",
  "meetingDate",
  "meetingTime",
  "meetingMode",
  "meetingDetails",
  "citizenMeetingsList",
  "citizenProjectsExtendedList",
  "citizenWorkMapForm",
  "citizenWorkMapLocation",
  "citizenWorkMapScope",
  "citizenWorkMapRadius",
  "citizenWorkMapApiKey",
  "citizenSaveMapKeyBtn",
  "citizenWorkMapStatus",
  "citizenWorkMapCanvas",
  "citizenWorkMapResults",
  "citizenRealtimeLine",
  "citizenChatWindow",
  "citizenChatForm",
  "citizenChatInput",
  "politicianView",
  "pStatOpen",
  "pStatPetitions",
  "pStatMeetings",
  "pStatBudget",
  "politicianOverviewIssues",
  "politicianOverviewBacklog",
  "politicianAnnouncementsListOverview",
  "politicianIssueStatusFilter",
  "politicianIssuePriorityFilter",
  "politicianIssueSearch",
  "politicianIssuesList",
  "politicianPetitionsList",
  "pollForm",
  "pollQuestion",
  "pollOptions",
  "pollEndDate",
  "politicianPollsList",
  "politicianMeetingsList",
  "projectForm",
  "projectTitle",
  "projectWard",
  "projectBudget",
  "projectTargetDate",
  "projectDescription",
  "politicianProjectsList",
  "politicianWorkMapForm",
  "politicianWorkMapLocation",
  "politicianWorkMapScope",
  "politicianWorkMapRadius",
  "politicianWorkMapApiKey",
  "politicianSaveMapKeyBtn",
  "politicianWorkMapStatus",
  "politicianWorkMapCanvas",
  "politicianWorkMapResults",
  "announcementForm",
  "announcementMessage",
  "announcementPriority",
  "politicianAnnouncementsList",
  "promiseForm",
  "promiseTitle",
  "promiseDate",
  "promiseDetails",
  "politicianPromisesList",
  "politicianRealtimeLine",
  "politicianChatWindow",
  "politicianChatForm",
  "politicianChatInput",
  "toastHost",
];

const dom = IDS.reduce((acc, id) => {
  acc[id] = document.getElementById(id);
  return acc;
}, {});

const state = {
  data: loadData(),
  session: loadSession(),
  currentUser: null,
  chat: {
    citizen: [],
    politician: [],
  },
  weatherText: "",
  maps: {
    loader: null,
    leafletLoader: null,
    geocodeCache: {},
    views: {
      citizen: null,
      politician: null,
    },
  },
};

init();

function init() {
  bindEvents();
  bindRoleTabs();
  startLiveHeader();
  syncCurrentUser();
  renderApp();
  window.addEventListener("storage", onStorageSync);
}

function bindEvents() {
  on(dom.loginTabBtn, "click", () => switchAuthTab("login"));
  on(dom.registerTabBtn, "click", () => switchAuthTab("register"));
  on(dom.loginForm, "submit", onLoginSubmit);
  on(dom.registerForm, "submit", onRegisterSubmit);
  on(dom.logoutBtn, "click", onLogout);
  on(dom.notificationBtn, "click", toggleNotificationPanel);
  on(dom.markNotificationsReadBtn, "click", markNotificationsRead);
  on(dom.exportCsvBtn, "click", exportIssuesCsv);

  on(dom.issueForm, "submit", onIssueSubmit);
  on(dom.petitionForm, "submit", onPetitionSubmit);
  on(dom.meetingForm, "submit", onMeetingSubmit);
  on(dom.citizenIssueFilter, "change", renderCitizenIssues);
  on(dom.citizenIssueSearch, "input", renderCitizenIssues);
  on(dom.citizenWorkMapForm, "submit", (event) => onWorkMapSearch(event, "citizen"));
  on(dom.citizenSaveMapKeyBtn, "click", onSaveMapsApiKey);

  on(dom.pollForm, "submit", onPollSubmit);
  on(dom.projectForm, "submit", onProjectSubmit);
  on(dom.announcementForm, "submit", onAnnouncementSubmit);
  on(dom.promiseForm, "submit", onPromiseSubmit);
  on(dom.politicianWorkMapForm, "submit", (event) => onWorkMapSearch(event, "politician"));
  on(dom.politicianSaveMapKeyBtn, "click", onSaveMapsApiKey);
  on(dom.politicianIssueStatusFilter, "change", renderPoliticianIssues);
  on(dom.politicianIssuePriorityFilter, "change", renderPoliticianIssues);
  on(dom.politicianIssueSearch, "input", renderPoliticianIssues);

  on(dom.citizenChatForm, "submit", onCitizenChatSubmit);
  on(dom.politicianChatForm, "submit", onPoliticianChatSubmit);
  on(document, "click", onActionClick);
}

function bindRoleTabs() {
  document.querySelectorAll(".role-tabs").forEach((group) => {
    group.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-tab-target]");
      if (!button) {
        return;
      }
      activateTab(button);
    });
  });
}

function activateTab(button) {
  const group = button.closest(".role-tabs");
  const roleView = group ? group.closest(".role-view") : null;
  if (!group || !roleView) {
    return;
  }
  group.querySelectorAll(".btn-pill").forEach((btn) => btn.classList.remove("active"));
  roleView.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("active"));
  button.classList.add("active");
  const target = document.getElementById(button.dataset.tabTarget);
  if (target) {
    target.classList.add("active");
  }
}

function resetTabs() {
  [dom.citizenView, dom.politicianView].filter(Boolean).forEach((view) => {
    view.querySelectorAll(".role-tabs .btn-pill").forEach((btn) => btn.classList.remove("active"));
    view.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("active"));
    const firstButton = view.querySelector(".role-tabs .btn-pill[data-tab-target]");
    if (!firstButton) {
      return;
    }
    firstButton.classList.add("active");
    const target = document.getElementById(firstButton.dataset.tabTarget);
    if (target) {
      target.classList.add("active");
    }
  });
}

function onStorageSync(event) {
  if (event.key === STORAGE_KEY) {
    state.data = loadData();
  }
  if (event.key === SESSION_KEY) {
    state.session = loadSession();
  }
  syncCurrentUser();
  renderApp();
}

function persistData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
  } catch (error) {
    showToast("Could not save data in browser storage.", "error");
  }
}

function saveSession() {
  try {
    if (state.session) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(state.session));
    } else {
      localStorage.removeItem(SESSION_KEY);
    }
  } catch (error) {
    showToast("Could not save session.", "error");
  }
}

function loadSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    return null;
  }
}

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const seed = createSeedData();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(seed));
      return seed;
    }
    return normalizeData(JSON.parse(raw));
  } catch (error) {
    return createSeedData();
  }
}

function normalizeData(value) {
  const data = value && typeof value === "object" ? value : {};
  const normalized = {
    users: Array.isArray(data.users) ? data.users : [],
    issues: Array.isArray(data.issues) ? data.issues : [],
    petitions: Array.isArray(data.petitions) ? data.petitions : [],
    polls: Array.isArray(data.polls) ? data.polls : [],
    meetings: Array.isArray(data.meetings) ? data.meetings : [],
    projects: Array.isArray(data.projects) ? data.projects : [],
    announcements: Array.isArray(data.announcements) ? data.announcements : [],
    promises: Array.isArray(data.promises) ? data.promises : [],
    notifications: Array.isArray(data.notifications) ? data.notifications : [],
    counters: data.counters && typeof data.counters === "object" ? data.counters : { ticket: 2400 },
  };
  if (!normalized.users.length) {
    return createSeedData();
  }
  if (typeof normalized.counters.ticket !== "number") {
    normalized.counters.ticket = 2400;
  }
  return normalized;
}

function switchAuthTab(name) {
  const login = name === "login";
  dom.loginTabBtn.classList.toggle("active", login);
  dom.registerTabBtn.classList.toggle("active", !login);
  dom.loginForm.classList.toggle("hidden", !login);
  dom.registerForm.classList.toggle("hidden", login);
}

function onLoginSubmit(event) {
  event.preventDefault();
  const email = (dom.loginEmail.value || "").trim().toLowerCase();
  const password = dom.loginPassword.value || "";

  const user = state.data.users.find((entry) => entry.email === email && entry.password === password);
  if (!user) {
    showToast("Invalid email or password.", "error");
    return;
  }

  state.session = {
    userId: user.id,
    at: isoNow(),
  };
  saveSession();
  syncCurrentUser();
  dom.loginForm.reset();
  renderApp();
  showToast(`Welcome ${user.name}.`);
}

function onRegisterSubmit(event) {
  event.preventDefault();
  const name = (dom.registerName.value || "").trim();
  const email = (dom.registerEmail.value || "").trim().toLowerCase();
  const password = dom.registerPassword.value || "";
  const role = dom.registerRole.value === "politician" ? "politician" : "citizen";
  const city = (dom.registerCity.value || "").trim();
  const constituency = (dom.registerConstituency.value || "").trim() || city;

  if (!name || !email || !password || !city) {
    showToast("Please fill all required fields.", "warning");
    return;
  }
  if (state.data.users.some((entry) => entry.email === email)) {
    showToast("This email already has an account.", "error");
    return;
  }

  const newUser = {
    id: uid("usr"),
    name,
    email,
    password,
    role,
    city,
    constituency,
    createdAt: isoNow(),
  };

  state.data.users.push(newUser);
  addNotification(newUser.id, `Your ${ROLE_LABELS[role]} account is active.`);
  persistData();
  dom.registerForm.reset();
  dom.loginEmail.value = email;
  switchAuthTab("login");
  showToast("Account created. Please sign in.");
}

function onLogout() {
  state.session = null;
  saveSession();
  syncCurrentUser();
  renderApp();
  showToast("Signed out.");
}

function syncCurrentUser() {
  const userId = state.session?.userId;
  state.currentUser = userId ? state.data.users.find((entry) => entry.id === userId) || null : null;
  if (!state.currentUser) {
    state.session = null;
    saveSession();
  }
  resetTabs();
}

function startLiveHeader() {
  updateClock();
  updateWeather();
  updateIssueTicker();
  setInterval(updateClock, 1000);
  setInterval(updateWeather, 90000);
  setInterval(updateIssueTicker, 12000);
}

function updateClock() {
  const now = new Date();
  dom.liveClock.textContent = `Now: ${new Intl.DateTimeFormat("en-IN", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(now)}`;
}

function updateWeather() {
  const now = new Date();
  const pool = ["Clear", "Partly cloudy", "Humid", "Light breeze"];
  const mood = pool[(now.getDate() + now.getHours()) % pool.length];
  const base = 26 + (now.getMonth() % 6);
  const swing = Math.round(Math.sin((now.getHours() / 24) * Math.PI * 2) * 4);
  state.weatherText = `Weather: ${base + swing}\u00b0C, ${mood} (local estimate)`;
  dom.liveWeather.textContent = state.weatherText;
}

function updateIssueTicker() {
  const open = state.data.issues.filter((issue) => issue.status === "open").length;
  const inProgress = state.data.issues.filter((issue) => issue.status === "in_progress").length;
  const resolved = state.data.issues.filter((issue) => issue.status === "resolved").length;
  const departmentLoad = countBy(state.data.issues, (issue) => issue.department || "General");
  const top = Object.entries(departmentLoad).sort((a, b) => b[1] - a[1])[0];
  const tail = top ? `${top[0]} queue: ${top[1]}` : "No queue";
  dom.liveIssueTicker.textContent = `Civic pulse: ${open} open | ${inProgress} in progress | ${resolved} resolved | ${tail}`;
}

function renderApp() {
  updateIssueTicker();
  renderSessionBox();
  renderAuthVisibility();
  renderNotificationList();

  if (!state.currentUser) {
    return;
  }
  if (state.currentUser.role === "citizen") {
    renderCitizen();
  } else {
    renderPolitician();
  }
}

function renderSessionBox() {
  if (!state.currentUser) {
    dom.sessionBox.classList.add("hidden");
    dom.exportCsvBtn.classList.add("hidden");
    dom.notificationPanel.classList.add("hidden");
    dom.notificationBtn.setAttribute("aria-expanded", "false");
    return;
  }
  dom.sessionBox.classList.remove("hidden");
  dom.sessionUser.textContent = `${state.currentUser.name} (${ROLE_LABELS[state.currentUser.role]}) | ${state.currentUser.city}`;
  dom.exportCsvBtn.classList.toggle("hidden", state.currentUser.role !== "politician");
}

function renderAuthVisibility() {
  const loggedIn = Boolean(state.currentUser);
  dom.authSection.classList.toggle("hidden", loggedIn);
  dom.appSection.classList.toggle("hidden", !loggedIn);
  if (!loggedIn) {
    dom.citizenView.classList.add("hidden");
    dom.politicianView.classList.add("hidden");
    return;
  }
  const citizen = state.currentUser.role === "citizen";
  dom.citizenView.classList.toggle("hidden", !citizen);
  dom.politicianView.classList.toggle("hidden", citizen);
}

function toggleNotificationPanel() {
  if (!state.currentUser) {
    return;
  }
  const hidden = dom.notificationPanel.classList.contains("hidden");
  dom.notificationPanel.classList.toggle("hidden", !hidden);
  dom.notificationBtn.setAttribute("aria-expanded", String(hidden));
}

function markNotificationsRead() {
  if (!state.currentUser) {
    return;
  }
  let changed = false;
  state.data.notifications.forEach((entry) => {
    if (entry.userId === state.currentUser.id && !entry.read) {
      entry.read = true;
      changed = true;
    }
  });
  if (changed) {
    persistData();
    renderNotificationList();
    showToast("Notifications marked as read.");
  }
}

function renderNotificationList() {
  if (!state.currentUser) {
    dom.notificationCount.textContent = "0";
    dom.notificationList.innerHTML = emptyState("Sign in to view notifications.");
    return;
  }
  const mine = getNotificationsForUser(state.currentUser.id);
  const unread = mine.filter((entry) => !entry.read).length;
  dom.notificationCount.textContent = String(unread);
  if (!mine.length) {
    dom.notificationList.innerHTML = emptyState("No notifications yet.");
    return;
  }
  dom.notificationList.innerHTML = mine
    .slice(0, 25)
    .map(
      (entry) => `
        <article class="list-item"${entry.read ? "" : ' style="border-left: 3px solid #1f5797;"'}>
          <div class="item-head">
            <h4>${escapeHtml(entry.message)}</h4>
            <span class="meta">${formatDateTime(entry.createdAt)}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderCitizen() {
  renderCitizenStats();
  renderAnnouncements(dom.citizenAnnouncementsList, 8);
  renderCitizenPromises();
  renderCitizenProjects();
  renderCitizenIssues();
  renderCitizenPetitions();
  renderCitizenPolls();
  renderCitizenMeetings();
  renderWorkMapPanel("citizen");
  renderCitizenChat();
}

function renderCitizenStats() {
  const userId = state.currentUser.id;
  const myIssues = state.data.issues.filter((issue) => issue.createdBy?.id === userId);
  const myPetitions = state.data.petitions.filter((petition) => petition.createdBy?.id === userId);
  const votes = state.data.polls.filter((poll) => hasVoted(poll, userId)).length;
  const pendingMeetings = state.data.meetings.filter(
    (meeting) => meeting.createdBy?.id === userId && meeting.status === "pending"
  ).length;

  dom.cStatOpen.textContent = String(myIssues.filter((issue) => issue.status !== "resolved").length);
  dom.cStatPetitions.textContent = String(myPetitions.length);
  dom.cStatVotes.textContent = String(votes);
  dom.cStatMeetings.textContent = String(pendingMeetings);
}

function renderAnnouncements(target, limit) {
  const items = [...state.data.announcements]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, limit);
  if (!items.length) {
    target.innerHTML = emptyState("No announcements published yet.");
    return;
  }
  target.innerHTML = items
    .map(
      (entry) => `
        <article class="list-item">
          <div class="item-head">
            <h4>${escapeHtml(entry.message)}</h4>
            <span class="badge announcement-${entry.priority}">${ANNOUNCEMENT_PRIORITY_LABELS[entry.priority]}</span>
          </div>
          <p class="meta">By ${escapeHtml(entry.createdByName)} | ${formatDateTime(entry.createdAt)}</p>
        </article>
      `
    )
    .join("");
}

function renderCitizenPromises() {
  const promises = [...state.data.promises].sort((a, b) => new Date(a.targetDate) - new Date(b.targetDate));
  if (!promises.length) {
    dom.citizenPromisesList.innerHTML = emptyState("No public promises added yet.");
    return;
  }
  dom.citizenPromisesList.innerHTML = promises
    .map((entry) => {
      const progress = clamp(Number(entry.progress || 0), 0, 100);
      return `
        <article class="list-item">
          <div class="item-head">
            <h4>${escapeHtml(entry.title)}</h4>
            <span class="badge ${progress >= 100 ? "status-resolved" : "status-in_progress"}">${progress >= 100 ? "Completed" : `${progress}%`}</span>
          </div>
          <p>${escapeHtml(entry.details)}</p>
          <p class="meta">Target: ${formatDate(entry.targetDate)} | Owner: ${escapeHtml(entry.createdByName)}</p>
        </article>
      `;
    })
    .join("");
}

function renderCitizenProjects() {
  const projects = [...state.data.projects].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  if (!projects.length) {
    const empty = emptyState("No projects on the notice board yet.");
    dom.citizenProjectsList.innerHTML = empty;
    dom.citizenProjectsExtendedList.innerHTML = empty;
    dom.citizenProjectBudgetLine.textContent = "Budget snapshot: no projects yet.";
    dom.citizenSlaSummary.textContent = "SLA overview: no complaints yet.";
    return;
  }

  const totalBudget = projects.reduce((sum, project) => sum + Number(project.budget || 0), 0);
  const utilized = projects.reduce(
    (sum, project) => sum + (Number(project.budget || 0) * clamp(project.progress || 0, 0, 100)) / 100,
    0
  );
  dom.citizenProjectBudgetLine.textContent =
    `Budget snapshot: ${formatCurrency(utilized)} used out of ${formatCurrency(totalBudget)}.`;

  const totalIssues = state.data.issues.length;
  const resolved = state.data.issues.filter((issue) => issue.status === "resolved").length;
  const highOpen = state.data.issues.filter((issue) => issue.priority === "high" && issue.status !== "resolved").length;
  const rate = totalIssues ? Math.round((resolved / totalIssues) * 100) : 0;
  dom.citizenSlaSummary.textContent = `SLA overview: ${rate}% resolved. High-priority open complaints: ${highOpen}.`;

  dom.citizenProjectsList.innerHTML = projects.slice(0, 5).map(renderCitizenProjectCard).join("");
  dom.citizenProjectsExtendedList.innerHTML = projects.map(renderCitizenProjectCard).join("");
}

function renderCitizenProjectCard(project) {
  const progress = clamp(Number(project.progress || 0), 0, 100);
  return `
    <article class="list-item">
      <div class="item-head">
        <h4>${escapeHtml(project.title)}</h4>
        <span class="badge project-${project.status}">${PROJECT_STATUS_LABELS[project.status]}</span>
      </div>
      <p>${escapeHtml(project.description)}</p>
      <p class="meta">Ward: ${escapeHtml(project.ward)} | Budget: ${formatCurrency(project.budget)} | Target: ${formatDate(project.targetDate)}</p>
      <div class="progress-row"><p class="meta">Progress</p><strong>${progress}%</strong></div>
    </article>
  `;
}

function onIssueSubmit(event) {
  event.preventDefault();
  if (!isRole("citizen")) {
    return;
  }
  const title = (dom.issueTitle.value || "").trim();
  const category = dom.issueCategory.value || "Other";
  const priority = dom.issuePriority.value || "medium";
  const ward = (dom.issueWard.value || "").trim() || "Ward not specified";
  const location = (dom.issueLocation.value || "").trim();
  const contact = (dom.issueContact.value || "").trim();
  const description = (dom.issueDescription.value || "").trim();
  if (!title || !location || !description) {
    showToast("Please provide title, location, and description.", "warning");
    return;
  }

  const assignment = autoAssign({ category, title, description, location });
  const ticket = nextTicket();
  const issue = {
    id: uid("issue"),
    ticket,
    title,
    category,
    priority,
    ward,
    location,
    contact,
    description,
    department: assignment.department,
    assignedDesk: assignment.desk,
    status: "open",
    createdAt: isoNow(),
    updatedAt: isoNow(),
    createdBy: {
      id: state.currentUser.id,
      name: state.currentUser.name,
      email: state.currentUser.email,
    },
    timeline: [
      { at: isoNow(), actor: state.currentUser.name, note: "Complaint filed by citizen." },
      {
        at: isoNow(),
        actor: "System",
        note: `Auto-assigned to ${assignment.department} (${assignment.desk}).`,
      },
    ],
  };

  state.data.issues.unshift(issue);
  addNotification(state.currentUser.id, `${ticket} submitted. Assigned to ${assignment.department}.`);
  notifyRole("politician", `New complaint ${ticket}: ${title} assigned to ${assignment.department}.`);
  persistData();
  dom.issueForm.reset();
  dom.issueCategory.value = "Roads";
  dom.issuePriority.value = "medium";
  renderApp();
  showToast(`Complaint registered as ${ticket}.`);
}

function renderCitizenIssues() {
  if (!state.currentUser) {
    return;
  }
  const filter = dom.citizenIssueFilter.value || "all";
  const search = (dom.citizenIssueSearch.value || "").trim().toLowerCase();

  let issues = state.data.issues.filter((issue) => issue.createdBy?.id === state.currentUser.id);
  if (filter !== "all") {
    issues = issues.filter((issue) => issue.status === filter);
  }
  if (search) {
    issues = issues.filter((issue) =>
      [issue.ticket, issue.title, issue.category, issue.location, issue.department]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(search)
    );
  }
  issues.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  if (!issues.length) {
    dom.citizenIssuesList.innerHTML = emptyState("No complaints found for selected filter.");
    return;
  }
  dom.citizenIssuesList.innerHTML = issues.map((issue) => renderIssueCard(issue, false)).join("");
}

function renderIssueCard(issue, editable) {
  const timeline = (issue.timeline || [])
    .slice(-3)
    .reverse()
    .map(
      (entry) =>
        `<p><strong>${escapeHtml(entry.actor)}:</strong> ${escapeHtml(entry.note)} <span class="meta">(${formatDateTime(entry.at)})</span></p>`
    )
    .join("");
  const actions = editable
    ? `
      <div class="item-actions four">
        <select data-field="issue-status" data-id="${issue.id}">
          ${options(ISSUE_STATUS_LABELS, issue.status)}
        </select>
        <input type="text" data-field="issue-note" data-id="${issue.id}" placeholder="Public update note">
        <button class="btn btn-outline btn-sm" type="button" data-action="save-issue" data-id="${issue.id}">Update</button>
        <button class="btn btn-outline btn-sm" type="button" data-action="resolve-issue" data-id="${issue.id}">Quick Resolve</button>
      </div>
    `
    : "";
  return `
    <article class="list-item">
      <div class="item-head">
        <h4>${escapeHtml(issue.title)}</h4>
        <span class="badge status-${issue.status}">${ISSUE_STATUS_LABELS[issue.status]}</span>
      </div>
      <p class="meta">${escapeHtml(issue.ticket)} | ${formatDateTime(issue.createdAt)} | ${escapeHtml(issue.ward)}</p>
      <p>${escapeHtml(issue.description)}</p>
      <div class="badge-row">
        <span class="badge priority-${issue.priority}">${capitalize(issue.priority)}</span>
        <span class="badge">${escapeHtml(issue.category)}</span>
      </div>
      <p class="meta">Assigned to: ${escapeHtml(issue.department)} | Desk: ${escapeHtml(issue.assignedDesk)}</p>
      <div class="timeline">${timeline || "<p>No updates yet.</p>"}</div>
      ${actions}
    </article>
  `;
}

function onPetitionSubmit(event) {
  event.preventDefault();
  if (!isRole("citizen")) {
    return;
  }
  const title = (dom.petitionTitle.value || "").trim();
  const category = dom.petitionCategory.value || "Other";
  const details = (dom.petitionDetails.value || "").trim();
  if (!title || !details) {
    showToast("Please enter petition title and details.", "warning");
    return;
  }
  state.data.petitions.unshift({
    id: uid("petition"),
    title,
    category,
    details,
    status: "open",
    supporters: [state.currentUser.id],
    createdAt: isoNow(),
    reviewedBy: null,
    reviewedAt: null,
    createdBy: {
      id: state.currentUser.id,
      name: state.currentUser.name,
    },
  });
  notifyRole("politician", `New petition awaiting review: ${title}`);
  persistData();
  dom.petitionForm.reset();
  renderApp();
  showToast("Petition published.");
}

function renderCitizenPetitions() {
  const petitions = [...state.data.petitions].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  if (!petitions.length) {
    dom.citizenPetitionsList.innerHTML = emptyState("No petitions available.");
    return;
  }
  dom.citizenPetitionsList.innerHTML = petitions
    .map((petition) => {
      const supported = petition.supporters.includes(state.currentUser.id);
      const canSupport = petition.status === "open" && !supported;
      return `
        <article class="list-item">
          <div class="item-head">
            <h4>${escapeHtml(petition.title)}</h4>
            <span class="badge petition-${petition.status}">${PETITION_STATUS_LABELS[petition.status]}</span>
          </div>
          <p>${escapeHtml(petition.details)}</p>
          <p class="meta">Category: ${escapeHtml(petition.category)} | Supporters: ${petition.supporters.length}</p>
          <p class="meta">Published: ${formatDateTime(petition.createdAt)}${petition.reviewedBy ? ` | Reviewed by ${escapeHtml(petition.reviewedBy)}` : ""}</p>
          ${canSupport ? `<button class="btn btn-outline btn-sm" data-action="support-petition" data-id="${petition.id}" type="button">Support Petition</button>` : ""}
        </article>
      `;
    })
    .join("");
}

function onMeetingSubmit(event) {
  event.preventDefault();
  if (!isRole("citizen")) {
    return;
  }
  const topic = (dom.meetingTopic.value || "").trim();
  const date = dom.meetingDate.value;
  const time = dom.meetingTime.value;
  const mode = dom.meetingMode.value || "In Person";
  const details = (dom.meetingDetails.value || "").trim();
  if (!topic || !date || !time || !details) {
    showToast("Please complete all meeting fields.", "warning");
    return;
  }
  state.data.meetings.unshift({
    id: uid("meeting"),
    topic,
    date,
    time,
    mode,
    details,
    status: "pending",
    note: "",
    createdAt: isoNow(),
    updatedAt: isoNow(),
    createdBy: {
      id: state.currentUser.id,
      name: state.currentUser.name,
    },
  });
  notifyRole("politician", `Meeting request pending: ${topic}`);
  persistData();
  dom.meetingForm.reset();
  renderApp();
  showToast("Meeting request submitted.");
}

function renderCitizenMeetings() {
  const meetings = state.data.meetings
    .filter((meeting) => meeting.createdBy?.id === state.currentUser.id)
    .sort((a, b) => new Date(`${b.date}T${b.time}`) - new Date(`${a.date}T${a.time}`));
  if (!meetings.length) {
    dom.citizenMeetingsList.innerHTML = emptyState("No meeting requests yet.");
    return;
  }
  dom.citizenMeetingsList.innerHTML = meetings
    .map(
      (meeting) => `
        <article class="list-item">
          <div class="item-head">
            <h4>${escapeHtml(meeting.topic)}</h4>
            <span class="badge meeting-${meeting.status}">${MEETING_STATUS_LABELS[meeting.status]}</span>
          </div>
          <p>${escapeHtml(meeting.details)}</p>
          <p class="meta">${formatDate(meeting.date)} at ${escapeHtml(meeting.time)} | ${escapeHtml(meeting.mode)}</p>
          ${meeting.note ? `<p class="meta">Response: ${escapeHtml(meeting.note)}</p>` : ""}
        </article>
      `
    )
    .join("");
}

function renderCitizenPolls() {
  const polls = [...state.data.polls].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  if (!polls.length) {
    dom.citizenPollsList.innerHTML = emptyState("No community polls available.");
    return;
  }
  dom.citizenPollsList.innerHTML = polls
    .map((poll) => {
      const closed = pollClosed(poll);
      const votedOption = userVote(poll, state.currentUser.id);
      const total = pollTotalVotes(poll);
      const rows = poll.options
        .map((option) => {
          const votes = option.votes.length;
          const pct = total ? Math.round((votes / total) * 100) : 0;
          const voteButton =
            !closed && !votedOption
              ? `<button class="btn btn-outline btn-sm" data-action="poll-vote" data-poll-id="${poll.id}" data-option-id="${option.id}" type="button">Vote</button>`
              : `<span class="meta">${votedOption === option.id ? "Your choice" : ""}</span>`;
          return `
            <div class="option-row">
              <span>${escapeHtml(option.text)}</span>
              <div class="progress-row"><span class="meta">${votes} votes</span><strong>${pct}%</strong></div>
              ${voteButton}
            </div>
          `;
        })
        .join("");
      return `
        <article class="list-item">
          <div class="item-head">
            <h4>${escapeHtml(poll.question)}</h4>
            <span class="badge ${closed ? "poll-closed" : "poll-open"}">${closed ? "Closed" : "Open"}</span>
          </div>
          <p class="meta">Ends: ${formatDate(poll.endDate)} | Total votes: ${total}</p>
          ${rows}
        </article>
      `;
    })
    .join("");
}

function renderCitizenChat() {
  dom.citizenRealtimeLine.textContent = [
    `Last sync: ${new Intl.DateTimeFormat("en-IN", { hour: "2-digit", minute: "2-digit" }).format(new Date())}`,
    `Open issues: ${
      state.data.issues.filter((issue) => issue.createdBy?.id === state.currentUser.id && issue.status !== "resolved").length
    }`,
    `Notice updates: ${state.data.projects.length + state.data.announcements.length}`,
  ].join(" | ");

  if (!state.chat.citizen.length) {
    state.chat.citizen.push({
      from: "assistant",
      text: "Ask me about complaints, petitions, meetings, polls, projects, or weather. Type \"help\" for query examples.",
    });
  }
  renderChat("citizen");
}

function onCitizenChatSubmit(event) {
  event.preventDefault();
  if (!isRole("citizen")) {
    return;
  }
  const message = (dom.citizenChatInput.value || "").trim();
  if (!message) {
    return;
  }
  state.chat.citizen.push({ from: "user", text: message });
  state.chat.citizen.push({ from: "assistant", text: assistantReply("citizen", message) });
  dom.citizenChatInput.value = "";
  renderChat("citizen");
}

function renderPolitician() {
  renderPoliticianStats();
  renderPoliticianOverview();
  renderPoliticianIssues();
  renderPoliticianPetitions();
  renderPoliticianPolls();
  renderPoliticianMeetings();
  renderPoliticianProjects();
  renderAnnouncements(dom.politicianAnnouncementsListOverview, 6);
  renderAnnouncements(dom.politicianAnnouncementsList, 12);
  renderPoliticianPromises();
  renderWorkMapPanel("politician");
  renderPoliticianChat();
}

function renderPoliticianStats() {
  const openIssues = state.data.issues.filter((issue) => issue.status !== "resolved").length;
  const openPetitions = state.data.petitions.filter((petition) => petition.status === "open").length;
  const pendingMeetings = state.data.meetings.filter((meeting) => meeting.status === "pending").length;
  const totalBudget = state.data.projects.reduce((sum, project) => sum + Number(project.budget || 0), 0);
  const spentBudget = state.data.projects.reduce(
    (sum, project) => sum + (Number(project.budget || 0) * clamp(project.progress || 0, 0, 100)) / 100,
    0
  );
  const utilization = totalBudget ? Math.round((spentBudget / totalBudget) * 100) : 0;

  dom.pStatOpen.textContent = String(openIssues);
  dom.pStatPetitions.textContent = String(openPetitions);
  dom.pStatMeetings.textContent = String(pendingMeetings);
  dom.pStatBudget.textContent = `${utilization}%`;
}

function renderPoliticianOverview() {
  const criticalIssues = state.data.issues
    .filter((issue) => issue.priority === "high" && issue.status !== "resolved")
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  if (!criticalIssues.length) {
    dom.politicianOverviewIssues.innerHTML = emptyState("No high-priority unresolved complaints.");
  } else {
    dom.politicianOverviewIssues.innerHTML = criticalIssues.slice(0, 8).map((issue) => renderIssueCard(issue, false)).join("");
  }

  const backlog = [
    ...state.data.petitions
      .filter((petition) => petition.status === "open")
      .slice(0, 5)
      .map((petition) => ({
        title: `Petition: ${petition.title}`,
        meta: `Supporters: ${petition.supporters.length}`,
      })),
    ...state.data.meetings
      .filter((meeting) => meeting.status === "pending")
      .slice(0, 5)
      .map((meeting) => ({
        title: `Meeting: ${meeting.topic}`,
        meta: `${formatDate(meeting.date)} ${meeting.time}`,
      })),
  ];
  if (!backlog.length) {
    dom.politicianOverviewBacklog.innerHTML = emptyState("No pending decisions.");
    return;
  }
  dom.politicianOverviewBacklog.innerHTML = backlog
    .map(
      (entry) => `
        <article class="list-item">
          <h4>${escapeHtml(entry.title)}</h4>
          <p class="meta">${escapeHtml(entry.meta)}</p>
        </article>
      `
    )
    .join("");
}

function renderPoliticianIssues() {
  const status = dom.politicianIssueStatusFilter.value || "all";
  const priority = dom.politicianIssuePriorityFilter.value || "all";
  const query = (dom.politicianIssueSearch.value || "").trim().toLowerCase();

  let issues = [...state.data.issues];
  if (status !== "all") {
    issues = issues.filter((issue) => issue.status === status);
  }
  if (priority !== "all") {
    issues = issues.filter((issue) => issue.priority === priority);
  }
  if (query) {
    issues = issues.filter((issue) =>
      [issue.ticket, issue.title, issue.category, issue.location, issue.department, issue.createdBy?.name]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }

  issues.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  if (!issues.length) {
    dom.politicianIssuesList.innerHTML = emptyState("No complaints match selected filters.");
    return;
  }
  dom.politicianIssuesList.innerHTML = issues.map((issue) => renderIssueCard(issue, true)).join("");
}

function renderPoliticianPetitions() {
  const petitions = [...state.data.petitions].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  if (!petitions.length) {
    dom.politicianPetitionsList.innerHTML = emptyState("No petitions submitted.");
    return;
  }
  dom.politicianPetitionsList.innerHTML = petitions
    .map((petition) => {
      const actions =
        petition.status === "open"
          ? `
            <div class="item-actions">
              <button class="btn btn-outline btn-sm" data-action="review-petition" data-id="${petition.id}" data-value="accepted" type="button">Accept</button>
              <button class="btn btn-outline btn-sm" data-action="review-petition" data-id="${petition.id}" data-value="rejected" type="button">Reject</button>
              <span class="meta">${petition.supporters.length} supporters</span>
            </div>
          `
          : `<p class="meta">Reviewed by ${escapeHtml(petition.reviewedBy || "N/A")} on ${petition.reviewedAt ? formatDateTime(petition.reviewedAt) : "-"}</p>`;
      return `
        <article class="list-item">
          <div class="item-head">
            <h4>${escapeHtml(petition.title)}</h4>
            <span class="badge petition-${petition.status}">${PETITION_STATUS_LABELS[petition.status]}</span>
          </div>
          <p>${escapeHtml(petition.details)}</p>
          <p class="meta">Category: ${escapeHtml(petition.category)} | By ${escapeHtml(petition.createdBy.name)}</p>
          ${actions}
        </article>
      `;
    })
    .join("");
}

function onPollSubmit(event) {
  event.preventDefault();
  if (!isRole("politician")) {
    return;
  }
  const question = (dom.pollQuestion.value || "").trim();
  const endDate = dom.pollEndDate.value;
  const optionsRaw = (dom.pollOptions.value || "").trim();
  const optionsText = Array.from(
    new Set(
      optionsRaw
        .split(",")
        .map((value) => value.trim())
        .filter(Boolean)
    )
  );
  if (!question || !endDate || optionsText.length < 2) {
    showToast("Provide poll question, options, and end date.", "warning");
    return;
  }
  state.data.polls.unshift({
    id: uid("poll"),
    question,
    endDate,
    options: optionsText.map((text) => ({ id: uid("opt"), text, votes: [] })),
    createdAt: isoNow(),
    createdById: state.currentUser.id,
  });
  notifyRole("citizen", `New community poll posted: ${question}`);
  persistData();
  dom.pollForm.reset();
  renderApp();
  showToast("Poll created.");
}

function renderPoliticianPolls() {
  const polls = [...state.data.polls].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  if (!polls.length) {
    dom.politicianPollsList.innerHTML = emptyState("No polls created.");
    return;
  }
  dom.politicianPollsList.innerHTML = polls
    .map((poll) => {
      const total = pollTotalVotes(poll);
      const closed = pollClosed(poll);
      const rows = poll.options
        .map((option) => {
          const votes = option.votes.length;
          const pct = total ? Math.round((votes / total) * 100) : 0;
          return `
            <div class="option-row">
              <span>${escapeHtml(option.text)}</span>
              <div class="progress-row"><span class="meta">${votes} votes</span><strong>${pct}%</strong></div>
              <span class="meta">${pct}%</span>
            </div>
          `;
        })
        .join("");
      return `
        <article class="list-item">
          <div class="item-head">
            <h4>${escapeHtml(poll.question)}</h4>
            <span class="badge ${closed ? "poll-closed" : "poll-open"}">${closed ? "Closed" : "Open"}</span>
          </div>
          <p class="meta">Ends: ${formatDate(poll.endDate)} | Total votes: ${total}</p>
          ${rows}
        </article>
      `;
    })
    .join("");
}

function renderPoliticianMeetings() {
  const meetings = [...state.data.meetings].sort(
    (a, b) => new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`)
  );
  if (!meetings.length) {
    dom.politicianMeetingsList.innerHTML = emptyState("No meeting requests available.");
    return;
  }
  dom.politicianMeetingsList.innerHTML = meetings
    .map(
      (meeting) => `
        <article class="list-item">
          <div class="item-head">
            <h4>${escapeHtml(meeting.topic)}</h4>
            <span class="badge meeting-${meeting.status}">${MEETING_STATUS_LABELS[meeting.status]}</span>
          </div>
          <p>${escapeHtml(meeting.details)}</p>
          <p class="meta">${formatDate(meeting.date)} ${escapeHtml(meeting.time)} | ${escapeHtml(meeting.mode)} | Requested by ${escapeHtml(meeting.createdBy.name)}</p>
          <div class="item-actions three">
            <select data-field="meeting-status" data-id="${meeting.id}">
              ${options(MEETING_STATUS_LABELS, meeting.status)}
            </select>
            <input type="text" data-field="meeting-note" data-id="${meeting.id}" placeholder="Response note" value="${escapeAttribute(meeting.note || "")}">
            <button class="btn btn-outline btn-sm" type="button" data-action="save-meeting" data-id="${meeting.id}">Update</button>
          </div>
        </article>
      `
    )
    .join("");
}

function onProjectSubmit(event) {
  event.preventDefault();
  if (!isRole("politician")) {
    return;
  }
  const title = (dom.projectTitle.value || "").trim();
  const ward = (dom.projectWard.value || "").trim();
  const budget = Number(dom.projectBudget.value || 0);
  const targetDate = dom.projectTargetDate.value;
  const description = (dom.projectDescription.value || "").trim();
  if (!title || !ward || !budget || !targetDate || !description) {
    showToast("Please complete all project fields.", "warning");
    return;
  }
  state.data.projects.unshift({
    id: uid("project"),
    title,
    ward,
    budget,
    targetDate,
    description,
    status: "planned",
    progress: 0,
    createdAt: isoNow(),
    updatedAt: isoNow(),
    createdByName: state.currentUser.name,
  });
  notifyRole("citizen", `Notice board update: new project "${title}" announced.`);
  persistData();
  dom.projectForm.reset();
  renderApp();
  showToast("Project added to notice board.");
}

function renderPoliticianProjects() {
  const projects = [...state.data.projects].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  if (!projects.length) {
    dom.politicianProjectsList.innerHTML = emptyState("No projects created yet.");
    return;
  }
  dom.politicianProjectsList.innerHTML = projects
    .map(
      (project) => `
        <article class="list-item">
          <div class="item-head">
            <h4>${escapeHtml(project.title)}</h4>
            <span class="badge project-${project.status}">${PROJECT_STATUS_LABELS[project.status]}</span>
          </div>
          <p>${escapeHtml(project.description)}</p>
          <p class="meta">Ward: ${escapeHtml(project.ward)} | Budget: ${formatCurrency(project.budget)} | Target: ${formatDate(project.targetDate)}</p>
          <div class="item-actions four">
            <select data-field="project-status" data-id="${project.id}">
              ${options(PROJECT_STATUS_LABELS, project.status)}
            </select>
            <input type="number" min="0" max="100" data-field="project-progress" data-id="${project.id}" value="${clamp(project.progress || 0, 0, 100)}">
            <input type="text" data-field="project-note" data-id="${project.id}" placeholder="Public update note">
            <button class="btn btn-outline btn-sm" type="button" data-action="save-project" data-id="${project.id}">Update</button>
          </div>
        </article>
      `
    )
    .join("");
}

function getWorkMapRefs(role) {
  if (role === "citizen") {
    return {
      form: dom.citizenWorkMapForm,
      locationInput: dom.citizenWorkMapLocation,
      scopeInput: dom.citizenWorkMapScope,
      radiusInput: dom.citizenWorkMapRadius,
      apiKeyInput: dom.citizenWorkMapApiKey,
      status: dom.citizenWorkMapStatus,
      canvas: dom.citizenWorkMapCanvas,
      results: dom.citizenWorkMapResults,
    };
  }
  return {
    form: dom.politicianWorkMapForm,
    locationInput: dom.politicianWorkMapLocation,
    scopeInput: dom.politicianWorkMapScope,
    radiusInput: dom.politicianWorkMapRadius,
    apiKeyInput: dom.politicianWorkMapApiKey,
    status: dom.politicianWorkMapStatus,
    canvas: dom.politicianWorkMapCanvas,
    results: dom.politicianWorkMapResults,
  };
}

function renderWorkMapPanel(role) {
  const refs = getWorkMapRefs(role);
  if (!refs.form) {
    return;
  }
  const key = getMapsApiKey();
  if (key && refs.apiKeyInput && document.activeElement !== refs.apiKeyInput && refs.apiKeyInput.value !== key) {
    refs.apiKeyInput.value = key;
  }
  if (refs.status && !/map-status-(info|success|warning|error)/.test(refs.status.className)) {
    refs.status.classList.add("map-status-info");
  }
}

function onSaveMapsApiKey(event) {
  const role = event?.currentTarget?.id?.includes("politician") ? "politician" : "citizen";
  const refs = getWorkMapRefs(role);
  const inputKey = (refs.apiKeyInput?.value || "").trim();
  if (!inputKey) {
    showToast("Enter a Google Maps API key first.", "warning");
    return;
  }
  setMapsApiKey(inputKey);
  syncMapsApiKeyInputs(inputKey);
  setWorkMapStatus("citizen", "API key saved. Future searches will use Google Maps.", "success");
  setWorkMapStatus("politician", "API key saved. Future searches will use Google Maps.", "success");
  showToast("Google Maps API key saved in browser storage.");
}

function getMapsApiKey() {
  try {
    const saved = localStorage.getItem(MAPS_API_KEY_STORAGE);
    if (saved) {
      return saved;
    }
  } catch (error) {}
  if (typeof window.NS_GOOGLE_MAPS_API_KEY === "string") {
    return window.NS_GOOGLE_MAPS_API_KEY.trim();
  }
  return "";
}

function setMapsApiKey(key) {
  try {
    localStorage.setItem(MAPS_API_KEY_STORAGE, key);
  } catch (error) {
    showToast("Could not save Google Maps key to browser storage.", "error");
  }
}

function syncMapsApiKeyInputs(key) {
  [dom.citizenWorkMapApiKey, dom.politicianWorkMapApiKey].forEach((input) => {
    if (input && document.activeElement !== input) {
      input.value = key;
    }
  });
}

function setWorkMapStatus(role, message, tone = "info") {
  const refs = getWorkMapRefs(role);
  if (!refs.status) {
    return;
  }
  refs.status.textContent = message;
  refs.status.classList.remove("map-status-info", "map-status-success", "map-status-warning", "map-status-error");
  const safeTone = ["info", "success", "warning", "error"].includes(tone) ? tone : "info";
  refs.status.classList.add(`map-status-${safeTone}`);
}

function normalizeWorkMapScope(value) {
  return WORK_MAP_SCOPE_LABELS[value] ? value : "live_projects";
}

function describeWorkMapScope(scope, count = 2) {
  const mode = normalizeWorkMapScope(scope);
  const noun = WORK_MAP_SCOPE_LABELS[mode];
  return count === 1 ? noun : `${noun}s`;
}

async function onWorkMapSearch(event, role) {
  event.preventDefault();
  if (!isRole(role)) {
    return;
  }
  const refs = getWorkMapRefs(role);
  if (!refs.form || !refs.locationInput) {
    return;
  }

  const location = (refs.locationInput.value || "").trim();
  const scope = normalizeWorkMapScope(refs.scopeInput?.value);
  const radiusKm = Math.max(Number(refs.radiusInput?.value || 5), 1);
  if (!location) {
    showToast("Enter a location to search on the map.", "warning");
    return;
  }

  const typedKey = (refs.apiKeyInput?.value || "").trim();
  if (typedKey) {
    setMapsApiKey(typedKey);
    syncMapsApiKeyInputs(typedKey);
  }
  const apiKey = typedKey || getMapsApiKey();
  const provider = apiKey ? "google" : "osm";

  setWorkMapStatus(
    role,
    provider === "google"
      ? `Loading Google map for ${location}...`
      : `Loading OpenStreetMap for ${location} (no API key mode)...`,
    "info"
  );

  try {
    const view = await ensureWorkMapView(role, provider, apiKey);
    if (!view) {
      throw new Error("Map canvas is not available.");
    }

    const center =
      view.engine === "google"
        ? await geocodeAreaGoogle(view.geocoder, location)
        : await geocodeAreaNominatim(location);
    const geocodeItem =
      view.engine === "google"
        ? (address, seed) => geocodeAddressCachedGoogle(view.geocoder, address, seed, center, radiusKm * 1000)
        : (address, seed) => geocodeAddressCachedNominatim(address, seed, center, radiusKm * 1000);

    setWorkMapStatus(role, `Scanning ${describeWorkMapScope(scope)} near ${location}...`, "info");
    const matches = await locateWorkItemsForArea(center, radiusKm * 1000, location, scope, geocodeItem);
    renderWorkMapOnMap(role, location, center, radiusKm, matches, scope);
    renderWorkMapResults(role, location, radiusKm, matches, scope);
  } catch (error) {
    if (provider === "google") {
      try {
        setWorkMapStatus(role, "Google Maps unavailable. Switching to OpenStreetMap mode...", "warning");
        const fallbackView = await ensureWorkMapView(role, "osm", "");
        if (!fallbackView) {
          throw new Error("Map canvas is not available.");
        }
        const center = await geocodeAreaNominatim(location);
        const geocodeItem = (address, seed) =>
          geocodeAddressCachedNominatim(address, seed, center, radiusKm * 1000);
        setWorkMapStatus(role, `Scanning ${describeWorkMapScope(scope)} near ${location}...`, "info");
        const matches = await locateWorkItemsForArea(center, radiusKm * 1000, location, scope, geocodeItem);
        renderWorkMapOnMap(role, location, center, radiusKm, matches, scope);
        renderWorkMapResults(role, location, radiusKm, matches, scope);
        showToast("Google Maps unavailable. Showing OpenStreetMap (no key) mode.", "warning");
        return;
      } catch (fallbackError) {
        const message = fallbackError?.message || error?.message || "Unable to load map results.";
        setWorkMapStatus(role, message, "error");
        showToast("Could not fetch location-based work map data.", "error");
        return;
      }
    }

    const message = error?.message || "Unable to load map results.";
    setWorkMapStatus(role, message, "error");
    showToast("Could not fetch location-based work map data.", "error");
  }
}

function loadGoogleMapsApi(apiKey) {
  if (window.google?.maps?.Map && window.google?.maps?.Geocoder) {
    return Promise.resolve(window.google.maps);
  }
  if (state.maps.loader) {
    return state.maps.loader;
  }

  state.maps.loader = new Promise((resolve, reject) => {
    const onLoad = () => {
      if (window.google?.maps?.Map && window.google?.maps?.Geocoder) {
        resolve(window.google.maps);
      } else {
        reject(new Error("Google Maps did not initialize. Verify key, billing, and enabled APIs."));
      }
    };

    const existing = document.querySelector("script[data-google-maps-loader='true']");
    if (existing) {
      if (existing.dataset.loaded === "true") {
        onLoad();
        return;
      }
      if (existing.dataset.failed === "true") {
        reject(new Error("Google Maps script failed to load earlier. Check API key and billing."));
        return;
      }
      existing.addEventListener("load", onLoad, { once: true });
      existing.addEventListener("error", () => reject(new Error("Could not load Google Maps script.")), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.dataset.googleMapsLoader = "true";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&v=weekly`;
    script.addEventListener(
      "load",
      () => {
        script.dataset.loaded = "true";
        onLoad();
      },
      { once: true }
    );
    script.addEventListener(
      "error",
      () => {
        script.dataset.failed = "true";
        reject(new Error("Could not load Google Maps script."));
      },
      { once: true }
    );
    document.head.appendChild(script);
  }).catch((error) => {
    state.maps.loader = null;
    const script = document.querySelector("script[data-google-maps-loader='true']");
    if (script && !window.google?.maps?.Map) {
      script.remove();
    }
    throw error;
  });

  return state.maps.loader;
}

function loadLeafletApi() {
  if (window.L?.map) {
    return Promise.resolve(window.L);
  }
  if (state.maps.leafletLoader) {
    return state.maps.leafletLoader;
  }

  state.maps.leafletLoader = new Promise((resolve, reject) => {
    const ensureCss = () => {
      const existingCss = document.querySelector("link[data-leaflet-loader='true']");
      if (existingCss) {
        return;
      }
      const css = document.createElement("link");
      css.rel = "stylesheet";
      css.href = LEAFLET_CSS_URL;
      css.dataset.leafletLoader = "true";
      document.head.appendChild(css);
    };

    const onReady = () => {
      if (window.L?.map) {
        resolve(window.L);
      } else {
        reject(new Error("Leaflet did not initialize."));
      }
    };

    ensureCss();
    const existingScript = document.querySelector("script[data-leaflet-loader='true']");
    if (existingScript) {
      if (existingScript.dataset.loaded === "true") {
        onReady();
        return;
      }
      existingScript.addEventListener("load", onReady, { once: true });
      existingScript.addEventListener("error", () => reject(new Error("Could not load Leaflet script.")), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.dataset.leafletLoader = "true";
    script.src = LEAFLET_JS_URL;
    script.addEventListener(
      "load",
      () => {
        script.dataset.loaded = "true";
        onReady();
      },
      { once: true }
    );
    script.addEventListener(
      "error",
      () => {
        script.dataset.failed = "true";
        reject(new Error("Could not load Leaflet script."));
      },
      { once: true }
    );
    document.head.appendChild(script);
  }).catch((error) => {
    state.maps.leafletLoader = null;
    throw error;
  });

  return state.maps.leafletLoader;
}

async function ensureWorkMapView(role, provider, apiKey) {
  if (provider === "google") {
    await loadGoogleMapsApi(apiKey);
    return ensureGoogleWorkMapView(role);
  }
  await loadLeafletApi();
  return ensureLeafletWorkMapView(role);
}

function ensureGoogleWorkMapView(role) {
  const refs = getWorkMapRefs(role);
  if (!refs.canvas || !window.google?.maps) {
    return null;
  }

  const existing = state.maps.views[role];
  if (existing?.engine && existing.engine !== "google") {
    destroyWorkMapView(existing);
    state.maps.views[role] = null;
  }

  if (!state.maps.views[role]) {
    refs.canvas.innerHTML = "";
    state.maps.views[role] = {
      engine: "google",
      map: new window.google.maps.Map(refs.canvas, {
        center: MAPS_DEFAULT_CENTER,
        zoom: 12,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      }),
      geocoder: new window.google.maps.Geocoder(),
      infoWindow: new window.google.maps.InfoWindow(),
      markers: [],
      centerMarker: null,
      searchCircle: null,
    };
  }
  return state.maps.views[role];
}

function ensureLeafletWorkMapView(role) {
  const refs = getWorkMapRefs(role);
  if (!refs.canvas || !window.L?.map) {
    return null;
  }

  const existing = state.maps.views[role];
  if (existing?.engine && existing.engine !== "leaflet") {
    destroyWorkMapView(existing);
    state.maps.views[role] = null;
  }

  if (!state.maps.views[role]) {
    refs.canvas.innerHTML = "";
    const map = window.L.map(refs.canvas, {
      zoomControl: true,
    }).setView([MAPS_DEFAULT_CENTER.lat, MAPS_DEFAULT_CENTER.lng], 12);

    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    state.maps.views[role] = {
      engine: "leaflet",
      map,
      markers: [],
      centerMarker: null,
      searchCircle: null,
    };
  }
  return state.maps.views[role];
}

function destroyWorkMapView(view) {
  if (!view) {
    return;
  }
  if (view.engine === "leaflet" && view.map?.remove) {
    view.map.remove();
  }
  if (view.engine === "google") {
    clearWorkMapMarkers(view);
  }
}

function geocodeAreaGoogle(geocoder, address) {
  return new Promise((resolve, reject) => {
    geocoder.geocode({ address }, (results, status) => {
      if (status === "OK" && results && results[0]?.geometry?.location) {
        const point = results[0].geometry.location;
        resolve({ lat: point.lat(), lng: point.lng() });
        return;
      }
      reject(new Error(`Location lookup failed (${status}). Try a broader location.`));
    });
  });
}

async function geocodeAreaNominatim(address) {
  const point = await geocodeWithNominatimCached(`center:${address}`, address);
  if (!point) {
    throw new Error("Could not resolve location on OpenStreetMap. Try a broader area.");
  }
  return point;
}

function geocodeAddressCachedGoogle(geocoder, address, seed, center, radiusMeters) {
  const cacheKey = `google:${normalizePrompt(address)}`;
  if (!address) {
    return Promise.resolve(deterministicPointNearCenter(center, seed, radiusMeters));
  }
  if (state.maps.geocodeCache[cacheKey]) {
    return Promise.resolve(state.maps.geocodeCache[cacheKey]);
  }

  return new Promise((resolve) => {
    geocoder.geocode({ address }, (results, status) => {
      if (status === "OK" && results && results[0]?.geometry?.location) {
        const point = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng(),
        };
        state.maps.geocodeCache[cacheKey] = point;
        resolve(point);
        return;
      }
      resolve(deterministicPointNearCenter(center, seed, radiusMeters));
    });
  });
}

async function geocodeAddressCachedNominatim(address, seed, center, radiusMeters) {
  const normalizedAddress = normalizePrompt(address);
  if (!normalizedAddress) {
    return deterministicPointNearCenter(center, seed, radiusMeters);
  }

  const point = await geocodeWithNominatimCached(`osm:${normalizedAddress}`, address);
  return point || deterministicPointNearCenter(center, seed, radiusMeters);
}

async function geocodeWithNominatimCached(cacheKey, query) {
  if (!cacheKey || !query) {
    return null;
  }
  if (state.maps.geocodeCache[cacheKey]) {
    return state.maps.geocodeCache[cacheKey];
  }

  try {
    const url = `${NOMINATIM_SEARCH_URL}?format=json&limit=1&q=${encodeURIComponent(query)}`;
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
    });
    if (!response.ok) {
      return null;
    }
    const data = await response.json();
    const first = Array.isArray(data) ? data[0] : null;
    const lat = Number(first?.lat);
    const lng = Number(first?.lon);
    if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
      return null;
    }
    const point = { lat, lng };
    state.maps.geocodeCache[cacheKey] = point;
    return point;
  } catch (error) {
    return null;
  }
}

function deterministicPointNearCenter(center, seed, radiusMeters) {
  const safeCenter = center || MAPS_DEFAULT_CENTER;
  const base = `${seed || ""}`;
  let hash = 0;
  for (let index = 0; index < base.length; index += 1) {
    hash = (hash << 5) - hash + base.charCodeAt(index);
    hash |= 0;
  }

  const maxRadius = Math.max(Number(radiusMeters || 0) * 0.72, 250);
  const distance = (Math.abs(hash) % 1000) / 1000;
  const angle = ((Math.abs(hash * 2654435761) % 3600) / 10) * (Math.PI / 180);
  const meters = distance * maxRadius;
  const latOffset = (meters * Math.cos(angle)) / 111320;
  const lngDivisor = 111320 * Math.cos((safeCenter.lat * Math.PI) / 180);
  const lngOffset = (meters * Math.sin(angle)) / Math.max(Math.abs(lngDivisor), 1);
  return {
    lat: safeCenter.lat + latOffset,
    lng: safeCenter.lng + lngOffset,
  };
}

function collectActiveWorkItems(locationHint, scope = "live_projects") {
  const mode = normalizeWorkMapScope(scope);
  const fallbackArea = state.currentUser?.city || "Pune";
  const areaHint = (locationHint || "").trim() || fallbackArea;
  const repairCategories = new Set(["Roads", "Water", "Sanitation", "Safety", "Transport"]);

  const projectItems =
    mode === "repairs"
      ? []
      : state.data.projects
          .filter((project) => {
            if (mode === "live_projects") {
              return project.status === "active";
            }
            return project.status !== "completed";
          })
          .map((project) => ({
            id: `project-${project.id}`,
            type: "Project",
            badgeClass: project.status === "active" ? "map-kind-active" : "map-kind-planned",
            title: project.title,
            area: project.ward || areaHint,
            address: [project.ward, areaHint].filter(Boolean).join(", "),
            details: `${PROJECT_STATUS_LABELS[project.status]} | Budget ${formatCurrency(project.budget)} | Target ${formatDate(project.targetDate)}`,
          }));

  const repairItems =
    mode === "live_projects"
      ? []
      : state.data.issues
          .filter((issue) => issue.status !== "resolved" && repairCategories.has(issue.category))
          .map((issue) => ({
            id: `issue-${issue.id}`,
            type: "Repair",
            badgeClass: "map-kind-repair",
            title: issue.title,
            area: issue.location || issue.ward || areaHint,
            address: [issue.location || issue.ward, areaHint].filter(Boolean).join(", "),
            details: `${issue.ticket} | ${ISSUE_STATUS_LABELS[issue.status]} | ${capitalize(issue.priority)} priority | ${issue.department}`,
          }));

  return [...projectItems, ...repairItems];
}

async function locateWorkItemsForArea(center, radiusMeters, locationHint, scope, geocodePoint) {
  const items = collectActiveWorkItems(locationHint, scope).slice(0, 80);
  const matches = [];
  for (const item of items) {
    const point = await geocodePoint(item.address, `${item.id}|${item.title}|${item.area}`);
    if (!point) {
      continue;
    }
    const distanceMeters = distanceBetweenMeters(center, point);
    if (distanceMeters <= radiusMeters) {
      matches.push({
        ...item,
        lat: point.lat,
        lng: point.lng,
        distanceMeters,
      });
    }
  }
  return matches.sort((a, b) => a.distanceMeters - b.distanceMeters);
}

function renderWorkMapOnMap(role, location, center, radiusKm, matches, scope) {
  const view = state.maps.views[role];
  if (!view) {
    return;
  }

  clearWorkMapMarkers(view);

  if (view.engine === "google" && window.google?.maps) {
    renderGoogleWorkMap(view, location, center, radiusKm, matches);
  } else if (view.engine === "leaflet" && window.L?.map) {
    renderLeafletWorkMap(view, location, center, radiusKm, matches);
  } else {
    return;
  }

  if (matches.length) {
    setWorkMapStatus(
      role,
      `Found ${matches.length} ${describeWorkMapScope(scope, matches.length)} within ${radiusKm} km of ${location}.`,
      "success"
    );
  } else {
    setWorkMapStatus(role, `No ${describeWorkMapScope(scope)} found within ${radiusKm} km of ${location}.`, "warning");
  }
}

function renderGoogleWorkMap(view, location, center, radiusKm, matches) {
  view.map.setCenter(center);
  view.map.setZoom(radiusKm <= 2 ? 14 : radiusKm <= 5 ? 13 : 11);

  view.centerMarker = new window.google.maps.Marker({
    map: view.map,
    position: center,
    title: `Search center: ${location}`,
    label: "C",
  });

  view.searchCircle = new window.google.maps.Circle({
    map: view.map,
    center,
    radius: radiusKm * 1000,
    strokeColor: "#1f5797",
    strokeOpacity: 0.7,
    strokeWeight: 1,
    fillColor: "#1f5797",
    fillOpacity: 0.08,
  });

  const bounds = new window.google.maps.LatLngBounds();
  bounds.extend(center);

  matches.forEach((entry) => {
    const marker = new window.google.maps.Marker({
      map: view.map,
      position: { lat: entry.lat, lng: entry.lng },
      title: `${entry.type}: ${entry.title}`,
      label: entry.type === "Project" ? "P" : "R",
    });
    marker.addListener("click", () => {
      view.infoWindow.setContent(`
        <div class="map-info-window">
          <h4>${escapeHtml(entry.title)}</h4>
          <p>${escapeHtml(entry.details)}</p>
          <p>${escapeHtml(entry.area)} | ${(entry.distanceMeters / 1000).toFixed(1)} km away</p>
        </div>
      `);
      view.infoWindow.open(view.map, marker);
    });
    view.markers.push(marker);
    bounds.extend({ lat: entry.lat, lng: entry.lng });
  });

  if (matches.length) {
    view.map.fitBounds(bounds, 60);
  }
}

function renderLeafletWorkMap(view, location, center, radiusKm, matches) {
  view.map.setView([center.lat, center.lng], radiusKm <= 2 ? 14 : radiusKm <= 5 ? 13 : 11);

  view.centerMarker = window.L.marker([center.lat, center.lng], {
    title: `Search center: ${location}`,
  }).addTo(view.map);

  view.searchCircle = window.L.circle([center.lat, center.lng], {
    radius: radiusKm * 1000,
    color: "#1f5797",
    weight: 1,
    fillColor: "#1f5797",
    fillOpacity: 0.08,
  }).addTo(view.map);

  const bounds = window.L.latLngBounds([center.lat, center.lng], [center.lat, center.lng]);

  matches.forEach((entry) => {
    const marker = window.L.marker([entry.lat, entry.lng], {
      title: `${entry.type}: ${entry.title}`,
    }).addTo(view.map);
    marker.bindPopup(`
      <div class="map-info-window">
        <h4>${escapeHtml(entry.title)}</h4>
        <p>${escapeHtml(entry.details)}</p>
        <p>${escapeHtml(entry.area)} | ${(entry.distanceMeters / 1000).toFixed(1)} km away</p>
      </div>
    `);
    view.markers.push(marker);
    bounds.extend([entry.lat, entry.lng]);
  });

  setTimeout(() => {
    if (view.map?.invalidateSize) {
      view.map.invalidateSize();
    }
  }, 60);

  if (matches.length) {
    view.map.fitBounds(bounds.pad(0.12));
  }
}

function clearWorkMapMarkers(view) {
  if (!view) {
    return;
  }
  if (view.engine === "leaflet") {
    (view.markers || []).forEach((marker) => {
      if (view.map?.removeLayer) {
        view.map.removeLayer(marker);
      }
    });
    if (view.centerMarker && view.map?.removeLayer) {
      view.map.removeLayer(view.centerMarker);
    }
    if (view.searchCircle && view.map?.removeLayer) {
      view.map.removeLayer(view.searchCircle);
    }
  } else {
    (view.markers || []).forEach((marker) => marker.setMap(null));
    if (view.centerMarker) {
      view.centerMarker.setMap(null);
    }
    if (view.searchCircle) {
      view.searchCircle.setMap(null);
    }
  }
  view.markers = [];
  view.centerMarker = null;
  view.searchCircle = null;
}

function renderWorkMapResults(role, location, radiusKm, matches, scope) {
  const refs = getWorkMapRefs(role);
  if (!refs.results) {
    return;
  }
  if (!matches.length) {
    refs.results.innerHTML = emptyState(`No ${describeWorkMapScope(scope)} found for ${location} within ${radiusKm} km.`);
    return;
  }
  refs.results.innerHTML = matches
    .slice(0, 20)
    .map(
      (entry) => `
        <article class="list-item">
          <div class="item-head">
            <h4>${escapeHtml(entry.title)}</h4>
            <span class="badge ${entry.badgeClass}">${entry.type}</span>
          </div>
          <p>${escapeHtml(entry.details)}</p>
          <p class="meta">${escapeHtml(entry.area)} | ${(entry.distanceMeters / 1000).toFixed(1)} km from search center</p>
        </article>
      `
    )
    .join("");
}

function distanceBetweenMeters(a, b) {
  const earthRadius = 6371000;
  const toRadians = (value) => (value * Math.PI) / 180;
  const dLat = toRadians(Number(b.lat) - Number(a.lat));
  const dLng = toRadians(Number(b.lng) - Number(a.lng));
  const latA = toRadians(Number(a.lat));
  const latB = toRadians(Number(b.lat));

  const sinLat = Math.sin(dLat / 2);
  const sinLng = Math.sin(dLng / 2);
  const root = sinLat * sinLat + Math.cos(latA) * Math.cos(latB) * sinLng * sinLng;
  return 2 * earthRadius * Math.asin(Math.sqrt(root));
}

function onAnnouncementSubmit(event) {
  event.preventDefault();
  if (!isRole("politician")) {
    return;
  }
  const message = (dom.announcementMessage.value || "").trim();
  const priority = dom.announcementPriority.value || "normal";
  if (!message) {
    showToast("Please write an announcement message.", "warning");
    return;
  }
  state.data.announcements.unshift({
    id: uid("announce"),
    message,
    priority: ANNOUNCEMENT_PRIORITY_LABELS[priority] ? priority : "normal",
    createdAt: isoNow(),
    createdById: state.currentUser.id,
    createdByName: state.currentUser.name,
  });
  state.data.announcements = state.data.announcements.slice(0, 60);
  notifyRole("citizen", `Public update: ${message}`);
  persistData();
  dom.announcementForm.reset();
  renderApp();
  showToast("Announcement published.");
}

function onPromiseSubmit(event) {
  event.preventDefault();
  if (!isRole("politician")) {
    return;
  }
  const title = (dom.promiseTitle.value || "").trim();
  const targetDate = dom.promiseDate.value;
  const details = (dom.promiseDetails.value || "").trim();
  if (!title || !targetDate || !details) {
    showToast("Please complete promise details.", "warning");
    return;
  }
  state.data.promises.unshift({
    id: uid("promise"),
    title,
    targetDate,
    details,
    progress: 0,
    createdAt: isoNow(),
    createdById: state.currentUser.id,
    createdByName: state.currentUser.name,
  });
  notifyRole("citizen", `New commitment added: ${title}`);
  persistData();
  dom.promiseForm.reset();
  renderApp();
  showToast("Promise added.");
}

function renderPoliticianPromises() {
  const promises = [...state.data.promises].sort((a, b) => new Date(a.targetDate) - new Date(b.targetDate));
  if (!promises.length) {
    dom.politicianPromisesList.innerHTML = emptyState("No promises tracked yet.");
    return;
  }
  dom.politicianPromisesList.innerHTML = promises
    .map(
      (promise) => `
        <article class="list-item">
          <div class="item-head">
            <h4>${escapeHtml(promise.title)}</h4>
            <span class="badge ${promise.progress >= 100 ? "status-resolved" : "status-in_progress"}">${clamp(promise.progress || 0, 0, 100)}%</span>
          </div>
          <p>${escapeHtml(promise.details)}</p>
          <p class="meta">Target: ${formatDate(promise.targetDate)}</p>
          <div class="item-actions three">
            <input type="number" min="0" max="100" data-field="promise-progress" data-id="${promise.id}" value="${clamp(promise.progress || 0, 0, 100)}">
            <button class="btn btn-outline btn-sm" type="button" data-action="save-promise" data-id="${promise.id}">Update Progress</button>
            <button class="btn btn-outline btn-sm" type="button" data-action="complete-promise" data-id="${promise.id}">Mark Complete</button>
          </div>
        </article>
      `
    )
    .join("");
}

function renderPoliticianChat() {
  dom.politicianRealtimeLine.textContent = [
    `Last sync: ${new Intl.DateTimeFormat("en-IN", { hour: "2-digit", minute: "2-digit" }).format(new Date())}`,
    `Open complaints: ${state.data.issues.filter((issue) => issue.status !== "resolved").length}`,
    `Pending petitions: ${state.data.petitions.filter((petition) => petition.status === "open").length}`,
  ].join(" | ");

  if (!state.chat.politician.length) {
    state.chat.politician.push({
      from: "assistant",
      text: "Ask for queue summaries, department routing, petition backlog, projects, meetings, or weather. Type \"help\" for query examples.",
    });
  }
  renderChat("politician");
}

function onPoliticianChatSubmit(event) {
  event.preventDefault();
  if (!isRole("politician")) {
    return;
  }
  const message = (dom.politicianChatInput.value || "").trim();
  if (!message) {
    return;
  }
  state.chat.politician.push({ from: "user", text: message });
  state.chat.politician.push({ from: "assistant", text: assistantReply("politician", message) });
  dom.politicianChatInput.value = "";
  renderChat("politician");
}

function onActionClick(event) {
  const target = event.target.closest("[data-action]");
  if (!target) {
    return;
  }
  const action = target.dataset.action;
  if (action === "support-petition") {
    supportPetition(target.dataset.id);
  } else if (action === "review-petition") {
    reviewPetition(target.dataset.id, target.dataset.value);
  } else if (action === "poll-vote") {
    votePoll(target.dataset.pollId, target.dataset.optionId);
  } else if (action === "save-issue") {
    saveIssue(target.dataset.id);
  } else if (action === "resolve-issue") {
    resolveIssue(target.dataset.id);
  } else if (action === "save-meeting") {
    saveMeeting(target.dataset.id);
  } else if (action === "save-project") {
    saveProject(target.dataset.id);
  } else if (action === "save-promise") {
    savePromise(target.dataset.id, false);
  } else if (action === "complete-promise") {
    savePromise(target.dataset.id, true);
  }
}

function supportPetition(petitionId) {
  if (!isRole("citizen")) {
    return;
  }
  const petition = state.data.petitions.find((entry) => entry.id === petitionId);
  if (!petition || petition.status !== "open") {
    showToast("This petition is no longer open.", "warning");
    return;
  }
  if (petition.supporters.includes(state.currentUser.id)) {
    return;
  }
  petition.supporters.push(state.currentUser.id);
  addNotification(petition.createdBy.id, `${state.currentUser.name} supported your petition "${petition.title}".`);
  persistData();
  renderApp();
  showToast("Petition supported.");
}

function reviewPetition(petitionId, decision) {
  if (!isRole("politician")) {
    return;
  }
  if (!["accepted", "rejected"].includes(decision)) {
    return;
  }
  const petition = state.data.petitions.find((entry) => entry.id === petitionId);
  if (!petition || petition.status !== "open") {
    showToast("Petition was already reviewed.", "warning");
    return;
  }
  petition.status = decision;
  petition.reviewedBy = state.currentUser.name;
  petition.reviewedAt = isoNow();
  addNotification(
    petition.createdBy.id,
    `Your petition "${petition.title}" was ${decision === "accepted" ? "accepted" : "rejected"} by ${state.currentUser.name}.`
  );
  if (decision === "accepted") {
    state.data.announcements.unshift({
      id: uid("announce"),
      message: `Petition approved: ${petition.title}`,
      priority: "important",
      createdAt: isoNow(),
      createdById: state.currentUser.id,
      createdByName: state.currentUser.name,
    });
  }
  persistData();
  renderApp();
  showToast(`Petition ${decision}.`);
}

function votePoll(pollId, optionId) {
  if (!isRole("citizen")) {
    return;
  }
  const poll = state.data.polls.find((entry) => entry.id === pollId);
  if (!poll || pollClosed(poll)) {
    showToast("This poll is closed.", "warning");
    return;
  }
  if (hasVoted(poll, state.currentUser.id)) {
    showToast("You already voted in this poll.", "warning");
    return;
  }
  const option = poll.options.find((entry) => entry.id === optionId);
  if (!option) {
    return;
  }
  option.votes.push(state.currentUser.id);
  persistData();
  renderApp();
  showToast("Vote submitted.");
}

function saveIssue(issueId) {
  if (!isRole("politician")) {
    return;
  }
  const issue = state.data.issues.find((entry) => entry.id === issueId);
  if (!issue) {
    return;
  }
  const statusInput = document.querySelector(`select[data-field="issue-status"][data-id="${escapeCss(issueId)}"]`);
  const noteInput = document.querySelector(`input[data-field="issue-note"][data-id="${escapeCss(issueId)}"]`);
  const nextStatus = statusInput ? statusInput.value : issue.status;
  const note = noteInput ? noteInput.value.trim() : "";
  if (nextStatus === issue.status && !note) {
    showToast("No changes to update.", "warning");
    return;
  }
  if (nextStatus !== issue.status) {
    issue.status = nextStatus;
    issue.timeline.push({
      at: isoNow(),
      actor: state.currentUser.name,
      note: `Status changed to ${ISSUE_STATUS_LABELS[nextStatus]}.`,
    });
  }
  if (note) {
    issue.timeline.push({
      at: isoNow(),
      actor: state.currentUser.name,
      note,
    });
  }
  issue.updatedAt = isoNow();
  addNotification(issue.createdBy.id, `Update on ${issue.ticket}: ${ISSUE_STATUS_LABELS[issue.status]}.`);
  persistData();
  renderApp();
  showToast("Complaint updated.");
}

function resolveIssue(issueId) {
  if (!isRole("politician")) {
    return;
  }
  const issue = state.data.issues.find((entry) => entry.id === issueId);
  if (!issue) {
    return;
  }
  issue.status = "resolved";
  issue.updatedAt = isoNow();
  issue.timeline.push({
    at: isoNow(),
    actor: state.currentUser.name,
    note: "Marked resolved after department confirmation.",
  });
  addNotification(issue.createdBy.id, `${issue.ticket} marked resolved.`);
  persistData();
  renderApp();
  showToast("Complaint resolved.");
}

function saveMeeting(meetingId) {
  if (!isRole("politician")) {
    return;
  }
  const meeting = state.data.meetings.find((entry) => entry.id === meetingId);
  if (!meeting) {
    return;
  }
  const statusInput = document.querySelector(`select[data-field="meeting-status"][data-id="${escapeCss(meetingId)}"]`);
  const noteInput = document.querySelector(`input[data-field="meeting-note"][data-id="${escapeCss(meetingId)}"]`);
  meeting.status = statusInput ? statusInput.value : meeting.status;
  meeting.note = noteInput ? noteInput.value.trim() : meeting.note;
  meeting.updatedAt = isoNow();
  addNotification(meeting.createdBy.id, `Meeting "${meeting.topic}" updated to ${MEETING_STATUS_LABELS[meeting.status]}.`);
  persistData();
  renderApp();
  showToast("Meeting request updated.");
}

function saveProject(projectId) {
  if (!isRole("politician")) {
    return;
  }
  const project = state.data.projects.find((entry) => entry.id === projectId);
  if (!project) {
    return;
  }
  const statusInput = document.querySelector(`select[data-field="project-status"][data-id="${escapeCss(projectId)}"]`);
  const progressInput = document.querySelector(`input[data-field="project-progress"][data-id="${escapeCss(projectId)}"]`);
  const noteInput = document.querySelector(`input[data-field="project-note"][data-id="${escapeCss(projectId)}"]`);
  project.status = statusInput ? statusInput.value : project.status;
  project.progress = clamp(Number(progressInput ? progressInput.value : project.progress), 0, 100);
  if (project.progress >= 100) {
    project.status = "completed";
  }
  project.updatedAt = isoNow();
  const note = noteInput ? noteInput.value.trim() : "";
  if (note) {
    state.data.announcements.unshift({
      id: uid("announce"),
      message: `Project update (${project.title}): ${note}`,
      priority: "normal",
      createdAt: isoNow(),
      createdById: state.currentUser.id,
      createdByName: state.currentUser.name,
    });
    notifyRole("citizen", `Project update: ${project.title} - ${note}`);
  }
  persistData();
  renderApp();
  showToast("Project updated.");
}

function savePromise(promiseId, complete) {
  if (!isRole("politician")) {
    return;
  }
  const promise = state.data.promises.find((entry) => entry.id === promiseId);
  if (!promise) {
    return;
  }
  if (complete) {
    promise.progress = 100;
  } else {
    const input = document.querySelector(`input[data-field="promise-progress"][data-id="${escapeCss(promiseId)}"]`);
    promise.progress = clamp(Number(input ? input.value : promise.progress), 0, 100);
  }
  if (promise.progress >= 100) {
    notifyRole("citizen", `Promise completed: ${promise.title}`);
  }
  persistData();
  renderApp();
  showToast("Promise updated.");
}

function exportIssuesCsv() {
  if (!isRole("politician")) {
    return;
  }
  const headers = [
    "Ticket",
    "Title",
    "Category",
    "Priority",
    "Department",
    "Assigned Desk",
    "Status",
    "Citizen",
    "Ward",
    "Created At",
    "Updated At",
  ];
  const rows = state.data.issues.map((issue) => [
    issue.ticket,
    issue.title,
    issue.category,
    issue.priority,
    issue.department,
    issue.assignedDesk,
    issue.status,
    issue.createdBy?.name || "",
    issue.ward || "",
    issue.createdAt,
    issue.updatedAt,
  ]);
  const csv = [headers, ...rows].map((row) => row.map(csvCell).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `nagariksetu-complaints-${dateStamp(new Date())}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast("Complaint report exported.");
}

function renderChat(role) {
  const host = role === "citizen" ? dom.citizenChatWindow : dom.politicianChatWindow;
  const messages = state.chat[role];
  if (!messages.length) {
    host.innerHTML = emptyState("Ask a question to start.");
    return;
  }
  host.innerHTML = messages
    .slice(-24)
    .map((entry) => `<div class="chat-bubble ${entry.from === "user" ? "chat-user" : "chat-assistant"}">${escapeHtml(entry.text)}</div>`)
    .join("");
  host.scrollTop = host.scrollHeight;
}

function assistantReply(role, prompt) {
  const text = normalizePrompt(prompt);
  if (!text) {
    return 'Please type a question. Example: "status of my complaint" or "priority plan for this week".';
  }

  const context = buildAssistantContext(role, text);
  if (includesAny(text, ["help", "what can you do", "options", "commands", "how do i use"])) {
    return renderHelp(role);
  }

  const intents = detectIntents(text);
  const answers = [];

  if (context.ticketQuery) {
    answers.push(renderTicketResponse(role, context.ticketQuery));
  }
  if (intents.includes("issues")) {
    answers.push(renderIssueSummary(role, context));
  }
  if (intents.includes("routing")) {
    answers.push(renderRoutingSummary(role, context));
  }
  if (intents.includes("meetings")) {
    answers.push(renderMeetingSummary(role, context));
  }
  if (intents.includes("petitions")) {
    answers.push(renderPetitionSummary(role, context));
  }
  if (intents.includes("projects")) {
    answers.push(renderProjectSummary(role, context));
  }
  if (intents.includes("weather")) {
    answers.push(renderWeatherSummary(role));
  }
  if (intents.includes("recommendations")) {
    answers.push(renderRecommendationSummary(role, context));
  }

  const uniqueAnswers = [];
  answers.forEach((line) => {
    if (line && !uniqueAnswers.includes(line)) {
      uniqueAnswers.push(line);
    }
  });

  if (uniqueAnswers.length) {
    return uniqueAnswers.slice(0, 3).join("\n");
  }

  const relevantIssues = findRelevantIssues(text, context.scopeIssues).slice(0, 2);
  if (relevantIssues.length && relevantIssues[0].score >= 2) {
    const relatedLine = relevantIssues
      .map(({ issue }) => `${issue.ticket} (${ISSUE_STATUS_LABELS[issue.status]})`)
      .join(", ");
    return role === "citizen"
      ? `I found related complaints in your account: ${relatedLine}. Ask "ticket ${relevantIssues[0].issue.ticket}" for details.`
      : `I found related complaints: ${relatedLine}. Ask "department queue" or "priority plan" for action guidance.`;
  }

  return role === "citizen"
    ? 'I can help with complaints, meetings, petitions, polls, projects, weather, and next-step suggestions. Type "help" to see examples.'
    : 'I can help with queue load, department routing, petitions, meetings, projects, weather, and priority planning. Type "help" to see examples.';
}

function buildAssistantContext(role, text) {
  const currentUserId = state.currentUser?.id;
  const userIssues = currentUserId
    ? state.data.issues.filter((issue) => issue.createdBy?.id === currentUserId)
    : [];
  const userMeetings = currentUserId
    ? state.data.meetings.filter((meeting) => meeting.createdBy?.id === currentUserId)
    : [];
  const userSupportedPetitions = currentUserId
    ? state.data.petitions.filter((petition) => petition.supporters.includes(currentUserId))
    : [];

  return {
    role,
    currentUserId,
    userIssues,
    userMeetings,
    userSupportedPetitions,
    scopeIssues: role === "citizen" ? userIssues : state.data.issues,
    scopeMeetings: role === "citizen" ? userMeetings : state.data.meetings,
    ticketQuery: extractTicket(text),
    wardQuery: extractWard(text),
    categoryQuery: inferCategory(text),
  };
}

function detectIntents(text) {
  const dictionary = {
    issues: ["issue", "issues", "complaint", "complaints", "status", "ticket", "problem", "delay"],
    routing: ["department", "assign", "assigned", "routing", "desk", "workload", "queue"],
    meetings: ["meeting", "meetings", "appointment", "schedule", "slot"],
    petitions: ["petition", "petitions", "poll", "polls", "vote", "voting", "support"],
    projects: ["project", "projects", "budget", "announcement", "notice", "promise", "promises"],
    weather: ["weather", "rain", "temperature", "forecast", "heat", "humid", "climate"],
    recommendations: ["recommend", "suggest", "priority", "prioritize", "plan", "strategy", "next step", "action"],
  };

  return Object.entries(dictionary)
    .map(([intent, terms]) => ({
      intent,
      score: terms.reduce((sum, term) => sum + (text.includes(term) ? (term.includes(" ") ? 2 : 1) : 0), 0),
    }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((entry) => entry.intent);
}

function renderHelp(role) {
  const sampleTicket = state.data.issues[0]?.ticket || "NS-2401";
  if (role === "citizen") {
    return [
      "Try questions like:",
      "1) status of my complaints",
      `2) ticket ${sampleTicket}`,
      "3) any pending meetings",
      "4) what is happening in ward 8",
      "5) suggest my next civic actions",
    ].join("\n");
  }
  return [
    "Try questions like:",
    "1) complaint queue summary",
    "2) department workload",
    "3) high-priority unresolved issues",
    "4) pending petitions and polls",
    "5) suggest weekly action plan",
  ].join("\n");
}

function renderTicketResponse(role, ticket) {
  const issue = state.data.issues.find((entry) => normalizePrompt(entry.ticket) === normalizePrompt(ticket));
  if (!issue) {
    return `I could not find ticket ${ticket}.`;
  }
  if (role === "citizen" && issue.createdBy?.id !== state.currentUser?.id) {
    return `Ticket ${issue.ticket} exists, but it is not linked to your account.`;
  }
  const latestUpdate = [...(issue.timeline || [])].sort((a, b) => new Date(b.at) - new Date(a.at))[0];
  const updateLine = latestUpdate ? `${latestUpdate.actor}: ${latestUpdate.note}` : "No timeline update yet.";
  return `Ticket ${issue.ticket}: ${ISSUE_STATUS_LABELS[issue.status]} | ${capitalize(issue.priority)} priority | ${issue.department}. Latest update: ${updateLine}`;
}

function renderIssueSummary(role, context) {
  let issues = [...context.scopeIssues];
  let scopeLine = "";

  if (context.wardQuery) {
    issues = issues.filter((issue) => normalizePrompt(issue.ward).includes(context.wardQuery));
    scopeLine += ` for ${context.wardQuery}`;
  }
  if (context.categoryQuery) {
    issues = issues.filter((issue) => issue.category === context.categoryQuery);
    scopeLine += scopeLine ? ` in ${context.categoryQuery}` : ` for ${context.categoryQuery}`;
  }

  if (!issues.length) {
    return role === "citizen"
      ? `No complaints found${scopeLine || " in your account"}.`
      : `No complaints found${scopeLine || " for this filter"}.`;
  }

  const open = issues.filter((issue) => issue.status === "open").length;
  const inProgress = issues.filter((issue) => issue.status === "in_progress").length;
  const resolved = issues.filter((issue) => issue.status === "resolved").length;
  const latest = [...issues].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))[0];
  const latestLine = latest
    ? `Latest: ${latest.ticket} (${ISSUE_STATUS_LABELS[latest.status]}) in ${latest.ward}.`
    : "No latest ticket available.";

  return role === "citizen"
    ? `Your complaint summary${scopeLine}: ${open} open, ${inProgress} in progress, ${resolved} resolved. ${latestLine}`
    : `Complaint summary${scopeLine}: ${open} open, ${inProgress} in progress, ${resolved} resolved. ${latestLine}`;
}

function renderRoutingSummary(role, context) {
  const unresolved = context.scopeIssues.filter((issue) => issue.status !== "resolved");
  const byDepartment = topCounts(unresolved, (issue) => issue.department || "General", 3);
  const byDesk = topCounts(unresolved, (issue) => issue.assignedDesk || "General Desk", 2);

  if (!byDepartment.length) {
    return role === "citizen"
      ? "You currently have no unresolved complaints, so no department routing is pending."
      : "No unresolved complaints are pending in department queues.";
  }

  if (role === "citizen") {
    return `Your active routing: ${byDepartment.map(([name, count]) => `${name} (${count})`).join(", ")}.`;
  }

  const deptLine = byDepartment.map(([name, count]) => `${name} (${count})`).join(", ");
  const deskLine = byDesk.map(([name, count]) => `${name} (${count})`).join(", ");
  return `Department queue: ${deptLine}. Desk pressure: ${deskLine}.`;
}

function renderMeetingSummary(role, context) {
  if (role === "citizen") {
    const myMeetings = context.userMeetings;
    const pending = myMeetings.filter((meeting) => meeting.status === "pending").length;
    const nextMeeting = [...myMeetings]
      .filter((meeting) => new Date(`${meeting.date}T${meeting.time || "00:00"}`).getTime() >= Date.now())
      .sort((a, b) => new Date(`${a.date}T${a.time || "00:00"}`) - new Date(`${b.date}T${b.time || "00:00"}`))[0];
    const nextLine = nextMeeting
      ? `Next: ${nextMeeting.topic} on ${formatDate(nextMeeting.date)} at ${nextMeeting.time}.`
      : "No upcoming meeting scheduled yet.";
    return `Your meetings: ${pending} pending, ${myMeetings.length} total. ${nextLine}`;
  }

  const pendingMeetings = state.data.meetings.filter((meeting) => meeting.status === "pending");
  const oldestPending = [...pendingMeetings].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))[0];
  const oldestLine = oldestPending
    ? `Oldest pending: "${oldestPending.topic}" requested by ${oldestPending.createdBy?.name || "Citizen"}.`
    : "No pending meeting requests.";
  return `Meeting backlog: ${pendingMeetings.length} pending, ${state.data.meetings.length} total requests. ${oldestLine}`;
}

function renderPetitionSummary(role, context) {
  const openPetitions = state.data.petitions.filter((petition) => petition.status === "open");
  const livePolls = state.data.polls.filter((poll) => !pollClosed(poll));

  if (role === "citizen") {
    const myVotes = context.currentUserId ? state.data.polls.filter((poll) => hasVoted(poll, context.currentUserId)).length : 0;
    return `Community pulse: ${openPetitions.length} open petitions, ${livePolls.length} live polls. You supported ${context.userSupportedPetitions.length} petition(s) and voted in ${myVotes} poll(s).`;
  }

  const topPetition = [...openPetitions].sort((a, b) => b.supporters.length - a.supporters.length)[0];
  const topLine = topPetition
    ? `Most supported open petition: "${topPetition.title}" (${topPetition.supporters.length} supporters).`
    : "No open petitions pending review.";
  return `Decision queue: ${openPetitions.length} open petitions, ${livePolls.length} live polls. ${topLine}`;
}

function renderProjectSummary(role, context) {
  const planned = state.data.projects.filter((project) => project.status === "planned").length;
  const active = state.data.projects.filter((project) => project.status === "active").length;
  const completed = state.data.projects.filter((project) => project.status === "completed").length;
  const latestAnnouncement = [...state.data.announcements].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];

  if (role === "citizen") {
    const announceLine = latestAnnouncement
      ? `Latest announcement: ${latestAnnouncement.message}`
      : "No announcements published yet.";
    return `Project board: ${planned} planned, ${active} active, ${completed} completed. ${announceLine}`;
  }

  const totalBudget = state.data.projects.reduce((sum, project) => sum + Number(project.budget || 0), 0);
  const spentBudget = state.data.projects.reduce(
    (sum, project) => sum + (Number(project.budget || 0) * clamp(project.progress || 0, 0, 100)) / 100,
    0
  );
  const utilization = totalBudget ? Math.round((spentBudget / totalBudget) * 100) : 0;
  const wardLoad = topCounts(state.data.projects, (project) => project.ward || "Unknown", 2)
    .map(([ward, count]) => `${ward} (${count})`)
    .join(", ");
  return `Projects: ${planned} planned, ${active} active, ${completed} completed. Budget utilization: ${utilization}% (${formatCurrency(spentBudget)} / ${formatCurrency(totalBudget)}). Highest project concentration: ${wardLoad || "none"}.`;
}

function renderWeatherSummary(role) {
  const weatherLine = state.weatherText || "Weather: local estimate unavailable";
  return role === "citizen"
    ? `${weatherLine}. For service follow-ups, late morning usually has better field conditions.`
    : `${weatherLine}. Schedule inspections between 10 AM and 1 PM for better field efficiency.`;
}

function renderRecommendationSummary(role, context) {
  const recommendations = [];

  if (role === "citizen") {
    const unresolved = context.userIssues.filter((issue) => issue.status !== "resolved");
    const high = [...unresolved]
      .filter((issue) => issue.priority === "high")
      .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))[0];
    if (high) {
      recommendations.push(`Follow up on ${high.ticket} first because it is high priority and still unresolved.`);
    }
    const pendingMeetings = context.userMeetings.filter((meeting) => meeting.status === "pending");
    if (pendingMeetings.length) {
      recommendations.push(`Track your ${pendingMeetings.length} pending meeting request(s) and add agenda details if needed.`);
    }
    const unvotedPolls = state.data.polls.filter((poll) => !pollClosed(poll) && !hasVoted(poll, context.currentUserId)).length;
    if (unvotedPolls > 0) {
      recommendations.push(`Participate in ${unvotedPolls} live poll(s) to increase visibility on your priorities.`);
    }
  } else {
    const unresolved = state.data.issues.filter((issue) => issue.status !== "resolved");
    const highOpen = unresolved.filter((issue) => issue.priority === "high");
    if (highOpen.length) {
      const oldestHigh = [...highOpen].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))[0];
      recommendations.push(`Prioritize ${oldestHigh.ticket} (${oldestHigh.title}) to reduce high-risk backlog.`);
    }
    const topDepartment = topCounts(unresolved, (issue) => issue.department || "General", 1)[0];
    if (topDepartment) {
      recommendations.push(`Rebalance staffing for ${topDepartment[0]} because it has the highest unresolved queue (${topDepartment[1]}).`);
    }
    const openPetition = [...state.data.petitions]
      .filter((petition) => petition.status === "open")
      .sort((a, b) => b.supporters.length - a.supporters.length)[0];
    if (openPetition) {
      recommendations.push(`Review petition "${openPetition.title}" next since it has the strongest citizen support.`);
    }
  }

  if (!recommendations.length) {
    return role === "citizen"
      ? "Suggested action: keep tracking announcements and file precise issue descriptions to get faster routing."
      : "Suggested action: maintain current queue momentum and publish periodic status announcements.";
  }

  return `Suggested actions: ${recommendations.slice(0, 3).map((line, index) => `${index + 1}) ${line}`).join(" ")}`;
}

function findRelevantIssues(text, issues) {
  const tokens = tokenizePrompt(text);
  if (!tokens.length) {
    return [];
  }
  return issues
    .map((issue) => {
      const haystack = normalizePrompt(
        [issue.ticket, issue.title, issue.description, issue.category, issue.department, issue.assignedDesk, issue.ward, issue.location]
          .filter(Boolean)
          .join(" ")
      );
      let score = 0;
      tokens.forEach((token) => {
        if (haystack.includes(token)) {
          score += token.length >= 5 ? 2 : 1;
        }
      });
      if (normalizePrompt(text).includes(normalizePrompt(issue.ticket))) {
        score += 4;
      }
      return { issue, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || new Date(b.issue.updatedAt) - new Date(a.issue.updatedAt));
}

function extractTicket(text) {
  const match = text.match(/\bns-\d+\b/i);
  return match ? match[0].toUpperCase() : "";
}

function extractWard(text) {
  const match = text.match(/\bward\s*(?:no\.?\s*)?([a-z0-9]+)\b/i);
  if (!match) {
    return "";
  }
  return normalizePrompt(`ward ${match[1]}`);
}

function inferCategory(text) {
  const hints = [
    { category: "Roads", terms: ["road", "roads", "pothole", "footpath", "pavement"] },
    { category: "Water", terms: ["water", "pipeline", "tap", "leak"] },
    { category: "Sanitation", terms: ["garbage", "waste", "drain", "sewer", "trash"] },
    { category: "Safety", terms: ["safety", "streetlight", "street light", "dark", "crime"] },
    { category: "Healthcare", terms: ["health", "clinic", "hospital", "medical"] },
    { category: "Transport", terms: ["traffic", "signal", "bus", "transport"] },
    { category: "Education", terms: ["school", "education", "classroom"] },
  ];
  const match = hints.find((entry) => includesAny(text, entry.terms));
  return match ? match.category : "";
}

function normalizePrompt(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function includesAny(text, terms) {
  return terms.some((term) => text.includes(term));
}

function topCounts(items, keyFn, limit = 3) {
  return Object.entries(countBy(items, keyFn))
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit);
}

function tokenizePrompt(text) {
  const stopWords = new Set([
    "the",
    "and",
    "for",
    "with",
    "about",
    "this",
    "that",
    "from",
    "have",
    "has",
    "what",
    "when",
    "where",
    "which",
    "how",
    "please",
    "show",
    "tell",
    "give",
    "need",
    "want",
    "can",
    "could",
    "would",
    "should",
    "there",
    "your",
    "my",
    "our",
  ]);
  return normalizePrompt(text)
    .split(/[^a-z0-9]+/)
    .filter((token) => token.length > 2 && !stopWords.has(token));
}

function isRole(role) {
  if (!state.currentUser || state.currentUser.role !== role) {
    showToast("You do not have permission for this action.", "error");
    return false;
  }
  return true;
}

function autoAssign(input) {
  const haystack = [input.category, input.title, input.description, input.location].join(" ").toLowerCase();
  const matched = ASSIGNMENT_RULES.find((rule) => rule.keywords.some((word) => haystack.includes(word)));
  if (matched) {
    return {
      department: matched.department,
      desk: matched.desk,
    };
  }
  return CATEGORY_ASSIGNMENT[input.category] || CATEGORY_ASSIGNMENT.Other;
}

function nextTicket() {
  if (!state.data.counters || typeof state.data.counters.ticket !== "number") {
    state.data.counters = { ticket: 2400 };
  }
  state.data.counters.ticket += 1;
  return `NS-${state.data.counters.ticket}`;
}

function addNotification(userId, message) {
  state.data.notifications.unshift({
    id: uid("note"),
    userId,
    message,
    read: false,
    createdAt: isoNow(),
  });
  state.data.notifications = state.data.notifications.slice(0, 250);
}

function notifyRole(role, message) {
  state.data.users
    .filter((user) => user.role === role)
    .forEach((user) => addNotification(user.id, message));
}

function getNotificationsForUser(userId) {
  return state.data.notifications
    .filter((entry) => entry.userId === userId)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

function options(map, selected) {
  return Object.entries(map)
    .map(([value, label]) => `<option value="${value}" ${value === selected ? "selected" : ""}>${label}</option>`)
    .join("");
}

function pollClosed(poll) {
  return new Date(`${poll.endDate}T23:59:59`).getTime() < Date.now();
}

function pollTotalVotes(poll) {
  return poll.options.reduce((sum, option) => sum + option.votes.length, 0);
}

function hasVoted(poll, userId) {
  return poll.options.some((option) => option.votes.includes(userId));
}

function userVote(poll, userId) {
  const option = poll.options.find((entry) => entry.votes.includes(userId));
  return option ? option.id : null;
}

function createSeedData() {
  const citizenId = "usr-citizen-demo";
  const politicianId = "usr-politician-demo";
  return {
    users: [
      {
        id: citizenId,
        name: "Aarav Mehta",
        email: "citizen@example.com",
        password: "citizen123",
        role: "citizen",
        city: "Pune",
        constituency: "Pune Central",
        createdAt: daysAgo(30),
      },
      {
        id: politicianId,
        name: "Councillor Priya Sharma",
        email: "politician@example.com",
        password: "leader123",
        role: "politician",
        city: "Pune",
        constituency: "Pune Central",
        createdAt: daysAgo(30),
      },
    ],
    issues: [
      {
        id: "issue-seed-1",
        ticket: "NS-2401",
        title: "Overflowing garbage near Central Market",
        category: "Sanitation",
        priority: "high",
        ward: "Ward 8",
        location: "Central Market East Gate",
        contact: "",
        description: "Garbage bins are overflowing and causing foul smell in the market lane.",
        department: "Sanitation & Solid Waste Department",
        assignedDesk: "Zone Sanitation Operations",
        status: "in_progress",
        createdAt: daysAgo(2),
        updatedAt: daysAgo(1),
        createdBy: {
          id: citizenId,
          name: "Aarav Mehta",
          email: "citizen@example.com",
        },
        timeline: [
          { at: daysAgo(2), actor: "Aarav Mehta", note: "Complaint filed by citizen." },
          {
            at: daysAgo(2),
            actor: "System",
            note: "Auto-assigned to Sanitation & Solid Waste Department (Zone Sanitation Operations).",
          },
          {
            at: daysAgo(1),
            actor: "Councillor Priya Sharma",
            note: "Field team dispatched and cleanup in progress.",
          },
        ],
      },
      {
        id: "issue-seed-2",
        ticket: "NS-2402",
        title: "Pothole cluster near school crossing",
        category: "Roads",
        priority: "medium",
        ward: "Ward 5",
        location: "Nal Stop crossing",
        contact: "",
        description: "Multiple potholes are causing unsafe traffic near school crossing.",
        department: "Public Works Department",
        assignedDesk: "Road and Footpath Maintenance",
        status: "open",
        createdAt: daysAgo(1),
        updatedAt: daysAgo(1),
        createdBy: {
          id: citizenId,
          name: "Aarav Mehta",
          email: "citizen@example.com",
        },
        timeline: [
          { at: daysAgo(1), actor: "Aarav Mehta", note: "Complaint filed by citizen." },
          {
            at: daysAgo(1),
            actor: "System",
            note: "Auto-assigned to Public Works Department (Road and Footpath Maintenance).",
          },
        ],
      },
    ],
    petitions: [
      {
        id: "petition-seed-1",
        title: "Install zebra crossing near City Public School",
        category: "Safety",
        details: "Children cross without safe markings. Request zebra crossing and signal timing updates.",
        status: "open",
        supporters: [citizenId],
        createdAt: daysAgo(3),
        reviewedBy: null,
        reviewedAt: null,
        createdBy: {
          id: citizenId,
          name: "Aarav Mehta",
        },
      },
    ],
    polls: [
      {
        id: "poll-seed-1",
        question: "Which service should receive additional budget this quarter?",
        endDate: daysFromNowDate(7),
        createdAt: daysAgo(1),
        createdById: politicianId,
        options: [
          { id: "opt-seed-1", text: "Road repair", votes: [citizenId] },
          { id: "opt-seed-2", text: "Street lights", votes: [] },
          { id: "opt-seed-3", text: "Garbage collection", votes: [] },
        ],
      },
    ],
    meetings: [
      {
        id: "meeting-seed-1",
        topic: "Ward 8 waste transfer timing",
        date: daysFromNowDate(3),
        time: "11:00",
        mode: "In Person",
        details: "Discuss redesign of pickup windows for market lanes.",
        status: "pending",
        note: "",
        createdAt: daysAgo(1),
        updatedAt: daysAgo(1),
        createdBy: {
          id: citizenId,
          name: "Aarav Mehta",
        },
      },
    ],
    projects: [
      {
        id: "project-seed-1",
        title: "Ward 5 Drainage Upgrade",
        ward: "Ward 5",
        budget: 2800000,
        targetDate: daysFromNowDate(60),
        description: "Modernization of storm-water drains to reduce monsoon flooding.",
        status: "active",
        progress: 35,
        createdAt: daysAgo(6),
        updatedAt: daysAgo(1),
        createdByName: "Councillor Priya Sharma",
      },
      {
        id: "project-seed-2",
        title: "LED Streetlight Expansion",
        ward: "Ward 8",
        budget: 1450000,
        targetDate: daysFromNowDate(40),
        description: "Installing efficient LED lights in poorly lit roads.",
        status: "planned",
        progress: 0,
        createdAt: daysAgo(2),
        updatedAt: daysAgo(2),
        createdByName: "Councillor Priya Sharma",
      },
    ],
    announcements: [
      {
        id: "announce-seed-1",
        message: "Night desilting drive scheduled for Ward 5 on Friday.",
        priority: "important",
        createdAt: daysAgo(1),
        createdById: politicianId,
        createdByName: "Councillor Priya Sharma",
      },
      {
        id: "announce-seed-2",
        message: "Citizen help desk at municipal hall extended to 8 PM.",
        priority: "normal",
        createdAt: daysAgo(4),
        createdById: politicianId,
        createdByName: "Councillor Priya Sharma",
      },
    ],
    promises: [
      {
        id: "promise-seed-1",
        title: "Ward-level complaint response within 48 hours",
        targetDate: daysFromNowDate(45),
        details: "All routine complaints should receive first action within two days.",
        progress: 62,
        createdAt: daysAgo(10),
        createdById: politicianId,
        createdByName: "Councillor Priya Sharma",
      },
      {
        id: "promise-seed-2",
        title: "100% LED conversion in internal roads",
        targetDate: daysFromNowDate(90),
        details: "Replace aging fixtures with LED lights across local wards.",
        progress: 28,
        createdAt: daysAgo(12),
        createdById: politicianId,
        createdByName: "Councillor Priya Sharma",
      },
    ],
    notifications: [
      {
        id: "note-seed-1",
        userId: citizenId,
        message: "Welcome to NagarikSetu. You can file complaints and track updates.",
        read: false,
        createdAt: daysAgo(2),
      },
      {
        id: "note-seed-2",
        userId: politicianId,
        message: "New petition requires review: Install zebra crossing near City Public School.",
        read: false,
        createdAt: daysAgo(1),
      },
    ],
    counters: {
      ticket: 2402,
    },
  };
}

function on(target, event, handler) {
  if (target) {
    target.addEventListener(event, handler);
  }
}

function uid(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function isoNow() {
  return new Date().toISOString();
}

function daysAgo(value) {
  const date = new Date();
  date.setDate(date.getDate() - value);
  return date.toISOString();
}

function daysFromNowDate(value) {
  const date = new Date();
  date.setDate(date.getDate() + value);
  return date.toISOString().slice(0, 10);
}

function formatDateTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "-";
  }
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value || "-";
  }
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number(amount || 0));
}

function dateStamp(date) {
  return `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(date.getDate()).padStart(2, "0")}`;
}

function clamp(value, min, max) {
  return Math.min(Math.max(Number(value || 0), min), max);
}

function capitalize(value) {
  if (!value) {
    return "";
  }
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function countBy(items, fn) {
  return items.reduce((acc, item) => {
    const key = fn(item);
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
}

function csvCell(value) {
  const text = String(value ?? "");
  if (text.includes(",") || text.includes("\n") || text.includes("\"")) {
    return `"${text.replace(/"/g, "\"\"")}"`;
  }
  return text;
}

function emptyState(text) {
  return `<div class="empty-state">${escapeHtml(text)}</div>`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, "&#96;");
}

function escapeCss(value) {
  if (window.CSS && typeof window.CSS.escape === "function") {
    return window.CSS.escape(value);
  }
  return String(value).replace(/["\\]/g, "\\$&");
}

function showToast(message, tone = "success") {
  if (!dom.toastHost) {
    return;
  }
  const toast = document.createElement("div");
  toast.className = `toast ${tone === "warning" || tone === "error" ? tone : ""}`.trim();
  toast.textContent = message;
  dom.toastHost.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3200);
}
