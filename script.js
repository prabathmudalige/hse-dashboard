// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Initial Dashboard Data
    const initialDashboardData = {
        headlineIndicators: {
            injuries: 61,
            incidents: 376,
            significantIncidents: 5,
            hours: 2158000, // 2,158K
            rifrGoal: 2.5,
            aifrGoal: 2.5,
            sifrGoal: 2.5
        },
        quarterlyIncidents: [
            { quarter: 'Jan-Mar', incidents: 50, injuries: 15 },
            { quarter: 'Apr-Jun', incidents: 60, injuries: 20 },
            { quarter: 'Jul-Sep', incidents: 45, injuries: 10 },
            { quarter: 'Oct-Dec', incidents: 70, injuries: 25 }
        ],
        observations: {
            flos: 2304,
            flosGoal: 906,
            ccos: 1262,
            ccosGoal: 906
        },
        injuryLocations: {
            "Hands and fingers": 21,
            "Eye": 1,
            "Back": 13,
            "Shoulders and arms": 18,
            "Knees": 10,
            "Ankles": 4,
            "Head": 21,
            "Face": 2,
            "Hips and legs": 15,
            "Neck": 3,
            "Feet and toes": 13,
            "General and unspecified": 12
        },
        drugAlcohol: {
            positiveTests: 7,
            peopleTested: 209,
            monthlyData: [
                { month: 'Jan', positive: 1, total: 15 },
                { month: 'Feb', positive: 0, total: 18 },
                { month: 'Mar', positive: 1, total: 20 },
                { month: 'Apr', positive: 2, total: 25 },
                { month: 'May', positive: 0, total: 17 },
                { month: 'Jun', positive: 1, total: 22 },
                { month: 'Jul', positive: 0, total: 19 },
                { month: 'Aug', positive: 0, total: 21 },
                { month: 'Sep', positive: 1, total: 23 },
                { month: 'Oct', positive: 0, total: 16 },
                { month: 'Nov', positive: 1, total: 20 },
                { month: 'Dec', positive: 0, total: 23 }
            ]
        },
        actionsOpen: {
            overdue: 82,
            open: 163,
            monthlyData: [
                { month: 'Jan', open: 15 }, { month: 'Feb', open: 20 }, { month: 'Mar', open: 18 },
                { month: 'Apr', open: 25 }, { month: 'May', open: 22 }, { month: 'Jun', open: 30 },
                { month: 'Jul', open: 28 }, { month: 'Aug', open: 35 }, { month: 'Sep', open: 40 },
                { month: 'Oct', open: 45 }, { month: 'Nov', open: 50 }, { month: 'Dec', open: 55 }
            ]
        },
        hazards: {
            opened: 61,
            closed: 1159,
            controlledPercentage: 72,
            avgDaysOpen: 4
        },
        audits: {
            layeredAudit: 45,
            crsa: 30,
            governance: 25
        },
        incidentTrends: {
            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            incidents: [30, 32, 28, 35, 33, 40, 38, 42, 45, 48, 50, 52]
        },
        metricDetails: {
            "RIFR": {
                title: "Recordable Incident Frequency Rate (RIFR)",
                description: "RIFR measures the number of recordable injuries per 200,000 hours worked. It's a key indicator of safety performance, allowing comparison across different companies or time periods. A lower RIFR indicates better safety performance.",
                calculation: "($\\text{Number of Recordable Injuries} / \\text{Total Hours Worked}$) $\\times 200,000$",
                relatedStandards: ["ISO 45001", "ILO Conventions"]
            },
            "Injuries": {
                title: "Total Injuries",
                description: "The total count of all injuries recorded within the reporting period. This includes any work-related injury that results in medical treatment beyond first aid, lost time, restricted work, or transfer to another job.",
                calculation: "Direct count of reported injuries.",
                relatedStandards: ["OSHA Regulations", "EU OSH Framework Directive"]
            },
            "AIFR": {
                title: "All Incident Frequency Rate (AIFR)",
                description: "AIFR measures the frequency of all types of incidents (injuries, near misses, significant incidents) per 200,000 hours worked. It provides a broader view of safety performance beyond just injuries.",
                calculation: "($\\text{Total Incidents} / \\text{Total Hours Worked}$) $\\times 200,000$",
                relatedStandards: ["ISO 45001"]
            },
            "Incidents": {
                title: "Total Incidents",
                description: "The total number of safety-related incidents, including injuries, near misses, and significant incidents. Tracking all incidents helps identify potential hazards before they lead to injuries.",
                calculation: "Direct count of reported incidents.",
                relatedStandards: []
            },
            "SIFR": {
                title: "Significant Incident Frequency Rate (SIFR)",
                description: "SIFR specifically tracks the frequency of high-potential or significant incidents per 200,000 hours worked. These are incidents that, while not always resulting in severe injury, had the potential to do so.",
                calculation: "($\\text{Number of Significant Incidents} / \\text{Total Hours Worked}$) $\\times 200,000$",
                relatedStandards: ["ISO 45001"]
            },
            "Hours": {
                title: "Total Hours Worked",
                description: "The total number of hours worked by all employees within the reporting period. This is a crucial denominator for calculating frequency rates, normalizing data across different workforce sizes.",
                calculation: "Sum of all employee work hours.",
                relatedStandards: []
            },
            "Jan-Mar Incidents": {
                title: "Incidents and Injuries: January - March Quarter",
                description: "Summary of incidents and injuries reported during the first quarter of the year. This helps in identifying seasonal trends or specific challenges during this period.",
                calculation: "Direct count of incidents and injuries for Jan-Mar.",
                relatedStandards: []
            },
            "Apr-Jun Incidents": {
                title: "Incidents and Injuries: April - June Quarter",
                description: "Summary of incidents and injuries reported during the second quarter of the year.",
                calculation: "Direct count of incidents and injuries for Apr-Jun.",
                relatedStandards: []
            },
            "Jul-Sep Incidents": {
                title: "Incidents and Injuries: July - September Quarter",
                description: "Summary of incidents and injuries reported during the third quarter of the year.",
                calculation: "Direct count of incidents and injuries for Jul-Sep.",
                relatedStandards: []
            },
            "Oct-Dec Incidents": {
                title: "Incidents and Injuries: October - December Quarter",
                description: "Summary of incidents and injuries reported during the fourth quarter of the year.",
                calculation: "Direct count of incidents and injuries for Oct-Dec.",
                relatedStandards: []
            },
            "FLOs": {
                title: "Field Level Observations (FLOs)",
                description: "FLOs are proactive safety observations made by frontline personnel. They help identify unsafe acts or conditions and promote a positive safety culture. Higher numbers indicate active engagement in safety.",
                calculation: "Direct count of reported FLOs.",
                relatedStandards: ["ISO 45001"]
            },
            "FLOs Compliance": {
                title: "FLOs Compliance Percentage",
                description: "Measures how well the organization is meeting its target for completing Field Level Observations. High compliance indicates adherence to safety processes.",
                calculation: "($\\text{Actual FLOs} / \\text{FLOs Goal}$) $\\times 100$",
                relatedStandards: []
            },
            "CCOs": {
                title: "Critical Control Observations (CCOs)",
                description: "CCOs are observations focused on critical controls designed to prevent high-potential incidents. They ensure that the most important safety barriers are in place and effective.",
                calculation: "Direct count of reported CCOs.",
                relatedStandards: ["ISO 45001"]
            },
            "CCOs Compliance": {
                title: "CCOs Compliance Percentage",
                description: "Measures the percentage of Critical Control Observations that are completed against a set goal. Essential for verifying the effectiveness of critical safety measures.",
                calculation: "($\\text{Actual CCOs} / \\text{CCOs Goal}$) $\\times 100$",
                relatedStandards: []
            },
            "Audits": {
                title: "Audits Overview",
                description: "Audits are systematic evaluations of an organization's safety management system. They assess compliance with regulations, internal policies, and international standards. The breakdown indicates different types of audits conducted.",
                calculation: "Aggregated results from various audit types.",
                relatedStandards: ["ISO 45001", "ILO Conventions"]
            },
            "Drug and Alcohol": {
                title: "Drug and Alcohol Testing Program",
                description: "Overview of the company's drug and alcohol testing program, including the number of positive tests and total people tested. This helps ensure a safe, substance-free workplace.",
                calculation: "Direct counts from testing data.",
                relatedStandards: ["Local Regulations"]
            },
            "Actions Open": {
                title: "Open Safety Actions",
                description: "Represents safety-related actions that are currently open, either overdue or still within their completion timeframe. These actions arise from incidents, audits, or observations and require resolution.",
                calculation: "Direct count of open and overdue actions.",
                relatedStandards: ["ISO 45001"]
            },
            "Hazards": {
                title: "Hazard Management Overview",
                description: "Summary of identified hazards, including those opened, closed, and the average time they remain open. The controlled percentage indicates how many hazards are managed within a specific timeframe.",
                calculation: "Counts and averages from hazard register.",
                relatedStandards: ["ISO 45001", "OSHA Regulations"]
            },
            "Overall Incident Trend": {
                title: "Overall Incident Trend",
                description: "This chart displays the monthly trend of all recorded incidents over the last 12 months. It helps in identifying patterns, seasonality, and the overall effectiveness of safety interventions over time.",
                calculation: "Monthly count of incidents.",
                relatedStandards: ["ISO 45001"]
            },
            "Injury Risk Assessment": {
                title: "Injury Risk Assessment",
                description: "This section allows you to assess the potential risk of an injury for a specific task or activity by evaluating its likelihood and severity based on a standardized risk matrix. The output provides a risk score and a corresponding risk level.",
                calculation: "Risk Score = Likelihood Score $\\times$ Severity Score. Risk Level is determined by the score range (Low, Medium, High, Extreme).",
                relatedStandards: ["ISO 31000 (Risk Management)", "ISO 45001 (OH&S Risk Assessment)"]
            }
        },
        standardDetails: {
            "ISO 45001": {
                title: "ISO 45001: Occupational Health and Safety Management Systems",
                description: "ISO 45001 is an international standard for occupational health and safety (OH&S) management systems. It provides a framework for organizations to improve OH&S performance, fulfill legal and other requirements, and achieve OH&S objectives. It aims to help organizations provide a safe and healthy workplace for their workers and visitors.",
                link: "https://www.iso.org/iso-45001-occupational-health-and-safety.html"
            },
            "ILO Conventions": {
                title: "ILO Conventions & Recommendations on OHS",
                description: "The International Labour Organization (ILO) develops international labour standards, including those related to occupational safety and health (OSH), in the form of Conventions and Recommendations. These instruments provide guidance for governments, employers, and workers on establishing and improving OSH systems and practices.",
                link: "https://www.ilo.org/global/standards/subjects-covered-by-international-labour-standards/occupational-safety-and-health/lang--en/index.htm"
            },
            "OSHA Regulations": {
                title: "OSHA Regulations (USA)",
                description: "The Occupational Safety and Health Administration (OSHA) is a federal agency of the United States Department of Labor. OSHA's mission is to ensure safe and healthy working conditions for workers by setting and enforcing standards and by providing training, outreach, education, and assistance. Its regulations are legally binding in the USA.",
                link: "https://www.osha.gov/laws-regs"
            },
            "EU OSH Framework Directive": {
                title: "EU OSH Framework Directive (89/391/EEC)",
                description: "A foundational piece of European Union legislation on occupational safety and health, establishing general principles for risk prevention and protection of workers.",
                link: "https://osha.europa.eu/en/legislation/directives/89391eec"
            },
            "Local Regulations": {
                title: "Local OHS Regulations",
                description: "These refer to specific occupational health and safety laws and regulations applicable at the national, state, or provincial level. Compliance with local regulations is mandatory for all organizations operating within that jurisdiction.",
                link: "https://www.google.com/search?q=local+occupational+health+and+safety+regulations" // Generic search link
            },
            "ISO 31000 (Risk Management)": {
                title: "ISO 31000: Risk Management – Guidelines",
                description: "ISO 31000 provides guidelines for managing risk faced by organizations. The application of these guidelines can be customized to any organization and its context. It provides a common approach to managing any type of risk and is not specific to OH&S, but its principles are widely applicable.",
                link: "https://www.iso.org/iso-31000-risk-management.html"
            }
        }
    };

    let dashboardData = JSON.parse(JSON.stringify(initialDashboardData)); // Deep copy for reset functionality

    // Chart Instances
    let quarterlyIncidentsChartInstance;
    let auditsChartInstance;
    let drugAlcoholChartInstance;
    let actionsOpenChartInstance;
    let hazardsDonutChartInstance;
    let incidentTrendChartInstance;
    let topInjuryTypesChartInstance; // New chart instance

    // Helper function to show messages
    const showMessage = (message, type = 'success') => {
        const messageBox = document.getElementById('messageBox');
        messageBox.textContent = message;
        messageBox.className = 'message-box show'; // Reset classes
        if (type === 'success') {
            messageBox.style.backgroundColor = '#48bb78';
        } else if (type === 'error') {
            messageBox.style.backgroundColor = '#ef4444';
        } else if (type === 'info') {
            messageBox.style.backgroundColor = '#63b3ed'; // Blue for info
        }
        setTimeout(() => {
            messageBox.classList.remove('show');
        }, 3500);
    };

    // Modal elements
    const infoModal = document.getElementById('infoModal');
    const closeModalBtn = document.getElementById('closeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');

    const openModal = (title, contentHTML) => {
        modalTitle.innerHTML = title;
        modalContent.innerHTML = contentHTML;
        infoModal.classList.add('show');
    };

    const closeModal = () => {
        infoModal.classList.remove('show');
    };

    closeModalBtn.addEventListener('click', closeModal);
    infoModal.addEventListener('click', (e) => {
        if (e.target === infoModal) { // Close if clicked outside content
            closeModal();
        }
    });

    // Calculation Functions
    const calculateRIFR = (injuries, hours) => (hours > 0 ? (injuries / hours) * 200000 : 0).toFixed(2);
    const calculateAIFR = (incidents, hours) => (hours > 0 ? (incidents / hours) * 200000 : 0).toFixed(2);
    const calculateSIFR = (significantIncidents, hours) => (hours > 0 ? (significantIncidents / hours) * 200000 : 0).toFixed(2);
    const calculateCompliance = (actual, goal) => (goal > 0 ? (actual / goal) * 100 : 0).toFixed(2);

    // Risk Calculation Function
    const calculateInjuryRisk = (likelihoodScore, severityScore) => {
        const riskScore = likelihoodScore * severityScore;
        let riskLevel = '';
        let riskColorClass = '';

        if (riskScore >= 1 && riskScore <= 4) {
            riskLevel = 'Low';
            riskColorClass = 'risk-low';
        } else if (riskScore >= 5 && riskScore <= 9) {
            riskLevel = 'Medium';
            riskColorClass = 'risk-medium';
        } else if (riskScore >= 10 && riskScore <= 15) {
            riskLevel = 'High';
            riskColorClass = 'risk-high';
        } else if (riskScore >= 16 && riskScore <= 25) {
            riskLevel = 'Extreme';
            riskColorClass = 'risk-extreme';
        } else {
            riskLevel = 'N/A';
            riskColorClass = '';
        }
        return { score: riskScore, level: riskLevel, colorClass: riskColorClass };
    };

    // Function to render the Risk Matrix table
    const renderRiskMatrix = () => {
        const riskMatrixBody = document.getElementById('riskMatrixBody');
        riskMatrixBody.innerHTML = ''; // Clear existing rows

        const severityLabels = [
            'Insignificant (1)', 'Minor (2)', 'Moderate (3)', 'Major (4)', 'Catastrophic (5)'
        ];

        for (let s = 1; s <= 5; s++) { // Severity rows (1-indexed for calculation, 0-indexed for array)
            const row = document.createElement('tr');
            const severityCell = document.createElement('td');
            severityCell.className = 'severity-label px-4 py-2';
            severityCell.textContent = severityLabels[s - 1];
            row.appendChild(severityCell);

            for (let l = 1; l <= 5; l++) { // Likelihood columns (1-indexed for calculation, 1-indexed for cell access)
                const cell = document.createElement('td');
                const { score, level, colorClass } = calculateInjuryRisk(l, s); // Likelihood first, then Severity
                cell.className = `px-4 py-2 ${colorClass}`;
                cell.textContent = score;
                cell.title = `Likelihood: ${l}, Severity: ${s}, Risk Level: ${level}`;
                // Store likelihood and severity as data attributes for easy retrieval
                cell.dataset.likelihood = l;
                cell.dataset.severity = s;
                row.appendChild(cell);
            }
            riskMatrixBody.appendChild(row);
        }
    };


    // Chart Rendering Functions
    const renderQuarterlyIncidentsChart = () => {
        const ctx = document.getElementById('quarterlyIncidentsChart').getContext('2d');
        const labels = dashboardData.quarterlyIncidents.map(q => q.quarter);
        const incidentsData = dashboardData.quarterlyIncidents.map(q => q.incidents);
        const injuriesData = dashboardData.quarterlyIncidents.map(q => q.injuries);

        if (quarterlyIncidentsChartInstance) {
            quarterlyIncidentsChartInstance.destroy();
        }
        quarterlyIncidentsChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Incidents',
                        data: incidentsData,
                        backgroundColor: '#63b3ed', // Blue
                    },
                    {
                        label: 'Injuries',
                        data: injuriesData,
                        backgroundColor: '#4299e1', // Darker Blue
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        stacked: true,
                        grid: { color: '#334155' }, // Updated grid color
                        ticks: { color: '#e2e8f0' } // Updated tick color
                    },
                    y: {
                        stacked: true,
                        beginAtZero: true,
                        grid: { color: '#334155' }, // Updated grid color
                        ticks: { color: '#e2e8f0' } // Updated tick color
                    }
                },
                plugins: {
                    legend: {
                        display: false // Legend is displayed outside the chart
                    },
                    tooltip: {
                        callbacks: {
                            title: function(context) {
                                return context[0].label;
                            },
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                label += context.parsed.y;
                                return label;
                            }
                        }
                    }
                },
                onClick: (e, elements) => {
                    if (elements.length > 0) {
                        const index = elements[0].index;
                        const quarter = labels[index];
                        const incidents = incidentsData[index];
                        const injuries = injuriesData[index];
                        openModal(`Quarterly Data: ${quarter}`, `<p><strong>Incidents:</strong> ${incidents}</p><p><strong>Injuries:</strong> ${injuries}</p>`);
                    }
                }
            }
        });
    };

    const renderAuditsChart = () => {
        const ctx = document.getElementById('auditsChart').getContext('2d');
        const data = [
            dashboardData.audits.layeredAudit,
            dashboardData.audits.crsa,
            dashboardData.audits.governance
        ];
        const labels = ['Layered Audit', 'CRSA', 'Governance'];
        const colors = ['#63b3ed', '#4299e1', '#3182ce']; // Updated blue shades

        if (auditsChartInstance) {
            auditsChartInstance.destroy();
        }
        auditsChartInstance = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: colors,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false // Legend is displayed outside the chart
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed) {
                                    label += context.parsed;
                                }
                                return label;
                            }
                        }
                    }
                },
                onClick: (e, elements) => {
                    if (elements.length > 0) {
                        const index = elements[0].index;
                        const auditType = labels[index];
                        const count = data[index];
                        openModal(`Audit Details: ${auditType}`, `<p><strong>Count:</strong> ${count}</p>`);
                    }
                }
            }
        });
    };

    const renderDrugAlcoholChart = () => {
        const ctx = document.getElementById('drugAlcoholChart').getContext('2d');
        const labels = dashboardData.drugAlcohol.monthlyData.map(d => d.month);
        const positiveData = dashboardData.drugAlcohol.monthlyData.map(d => d.positive);
        const totalTestedData = dashboardData.drugAlcohol.monthlyData.map(d => d.total);

        if (drugAlcoholChartInstance) {
            drugAlcoholChartInstance.destroy();
        }
        drugAlcoholChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Positive Tests',
                        data: positiveData,
                        backgroundColor: '#ef4444', // Red for positive
                        order: 2 // Render bars on top
                    },
                    {
                        label: 'People Tested',
                        data: totalTestedData,
                        type: 'line',
                        borderColor: '#48bb78', // Green for total tested line
                        borderWidth: 2,
                        fill: false,
                        tension: 0.3,
                        order: 1 // Render line behind bars
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        grid: { color: '#334155' }, // Updated grid color
                        ticks: { color: '#e2e8f0' } // Updated tick color
                    },
                    y: {
                        beginAtZero: true,
                        grid: { color: '#334155' }, // Updated grid color
                        ticks: { color: '#e2e8f0' } // Updated tick color
                    }
                },
                plugins: {
                    legend: {
                        display: false // Custom legend is outside
                    },
                    tooltip: {
                        callbacks: {
                            title: function(context) {
                                return context[0].label;
                            },
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                label += context.parsed.y;
                                return label;
                            }
                        }
                    }
                },
                onClick: (e, elements) => {
                    if (elements.length > 0) {
                        const index = elements[0].index;
                        const month = labels[index];
                        const positive = positiveData[index];
                        const total = totalTestedData[index];
                        openModal(`Drug & Alcohol Data: ${month}`, `<p><strong>Positive Tests:</strong> ${positive}</p><p><strong>People Tested:</strong> ${total}</p>`);
                    }
                }
            }
        });
    };

    const renderActionsOpenChart = () => {
        const ctx = document.getElementById('actionsOpenChart').getContext('2d');
        const labels = dashboardData.actionsOpen.monthlyData.map(d => d.month);
        const openActionsData = dashboardData.actionsOpen.monthlyData.map(d => d.open);

        if (actionsOpenChartInstance) {
            actionsOpenChartInstance.destroy();
        }
        actionsOpenChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Open Actions',
                    data: openActionsData,
                    backgroundColor: '#63b3ed', // Updated blue
                    hoverBackgroundColor: '#4299e1' // Updated blue
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        grid: { color: '#334155' }, // Updated grid color
                        ticks: { color: '#e2e8f0' } // Updated tick color
                    },
                    y: {
                        beginAtZero: true,
                        grid: { color: '#334155' }, // Updated grid color
                        ticks: { color: '#e2e8f0' } // Updated tick color
                    }
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            title: function(context) {
                                return context[0].label;
                            },
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                label += context.parsed.y;
                                return label;
                            }
                        }
                    }
                },
                onClick: (e, elements) => {
                    if (elements.length > 0) {
                        const index = elements[0].index;
                        const month = labels[index];
                        const open = openActionsData[index];
                        openModal(`Open Actions Data: ${month}`, `<p><strong>Open Actions:</strong> ${open}</p>`);
                    }
                }
            }
        });
    };

    const renderHazardsDonutChart = () => {
        const ctx = document.getElementById('hazardsDonutChart').getContext('2d');
        const controlled = dashboardData.hazards.controlledPercentage;
        const notControlled = 100 - controlled;
        const data = [controlled, notControlled];
        const labels = ['Controlled within 30 Days', 'Not Controlled'];
        const colors = ['#48bb78', '#64748b']; // Green for controlled, slate grey for rest

        if (hazardsDonutChartInstance) {
            hazardsDonutChartInstance.destroy();
        }
        hazardsDonutChartInstance = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: colors,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '60%', // Makes it a donut chart
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed) {
                                    label += context.parsed + '%';
                                }
                                return label;
                            }
                        }
                    }
                },
                onClick: (e, elements) => {
                    if (elements.length > 0) {
                        const index = elements[0].index;
                        const status = labels[index];
                        const percentage = data[index];
                        openModal(`Hazards Status: ${status}`, `<p><strong>Percentage:</strong> ${percentage}%</p>`);
                    }
                }
            }
        });
    };

    const renderIncidentTrendChart = () => {
        const ctx = document.getElementById('incidentTrendChart').getContext('2d');
        const labels = dashboardData.incidentTrends.months;
        const incidentsData = dashboardData.incidentTrends.incidents;

        if (incidentTrendChartInstance) {
            incidentTrendChartInstance.destroy();
        }
        incidentTrendChartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Total Incidents',
                    data: incidentsData,
                    borderColor: '#63b3ed', // Blue line
                    backgroundColor: 'rgba(99, 179, 237, 0.2)', // Light blue fill
                    fill: true,
                    tension: 0.4, // Smooth curve
                    pointBackgroundColor: '#63b3ed',
                    pointBorderColor: '#f8fafc', // Updated point border color
                    pointHoverBackgroundColor: '#f8fafc', // Updated point hover background
                    pointHoverBorderColor: '#63b3ed' // Updated point hover border
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        grid: { color: '#334155' }, // Updated grid color
                        ticks: { color: '#e2e8f0' } // Updated tick color
                    },
                    y: {
                        beginAtZero: true,
                        grid: { color: '#334155' }, // Updated grid color
                        ticks: { color: '#e2e8f0' } // Updated tick color
                    }
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            title: function(context) {
                                return context[0].label;
                            },
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                label += context.parsed.y;
                                return label;
                            }
                        }
                    }
                },
                onClick: (e, elements) => {
                    if (elements.length > 0) {
                        const index = elements[0].index;
                        const month = labels[index];
                        const incidents = incidentsData[index];
                        openModal(`Incident Trend: ${month}`, `<p><strong>Total Incidents:</strong> ${incidents}</p>`);
                    }
                }
            }
        });
    };

    // New: Render Top Injury Types Chart
    const renderTopInjuryTypesChart = () => {
        const ctx = document.getElementById('topInjuryTypesChart').getContext('2d');
        const sortedInjuryLocations = Object.entries(dashboardData.injuryLocations)
            .sort(([, a], [, b]) => b - a); // Sort by count descending

        const labels = sortedInjuryLocations.map(([part]) => part);
        const data = sortedInjuryLocations.map(([, count]) => count);

        // Generate distinct colors for each bar
        const backgroundColors = [
            '#63b3ed', '#4299e1', '#3182ce', '#2b6cb0', '#2c5282',
            '#48bb78', '#38a169', '#2f855a', '#276749', '#22543d',
            '#f6ad55', '#ed8936', '#dd6b20', '#c05621', '#9c4221',
            '#ef4444', '#dc2626', '#b91c1c', '#991b1b', '#7f1d1d'
        ];
        const chartColors = data.map((_, index) => backgroundColors[index % backgroundColors.length]);

        if (topInjuryTypesChartInstance) {
            topInjuryTypesChartInstance.destroy();
        }
        topInjuryTypesChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Number of Injuries',
                    data: data,
                    backgroundColor: chartColors,
                    borderColor: chartColors.map(color => color.replace(')', ', 0.8)')), // Slightly darker border
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y', // Horizontal bar chart
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        beginAtZero: true,
                        grid: { color: '#334155' }, // Updated grid color
                        ticks: { color: '#e2e8f0' } // Updated tick color
                    },
                    y: {
                        grid: { color: '#334155' }, // Updated grid color
                        ticks: { color: '#e2e8f0' } // Updated tick color
                    }
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                label += context.parsed.x;
                                return label;
                            }
                        }
                    }
                },
                onClick: (e, elements) => {
                    if (elements.length > 0) {
                        const index = elements[0].index;
                        const injuryType = labels[index];
                        const count = data[index];
                        openModal(`Injury Type Details: ${injuryType}`, `<p><strong>${injuryType}:</strong> ${count} injuries reported.</p>`);
                    }
                }
            }
        });
    };

    // Function to render/update the dashboard UI
    const renderDashboard = () => {
        // Update Last Refreshed Time
        document.getElementById('lastRefreshed').textContent = new Date().toLocaleString();

        // Headline Indicators
        document.getElementById('injuries').textContent = dashboardData.headlineIndicators.injuries;
        document.getElementById('incidents').textContent = dashboardData.headlineIndicators.incidents;
        document.getElementById('significantIncidents').textContent = dashboardData.headlineIndicators.significantIncidents;
        document.getElementById('hours').textContent = (dashboardData.headlineIndicators.hours / 1000).toFixed(0) + 'K';

        document.getElementById('rifr').textContent = calculateRIFR(dashboardData.headlineIndicators.injuries, dashboardData.headlineIndicators.hours);
        document.getElementById('aifr').textContent = calculateAIFR(dashboardData.headlineIndicators.incidents, dashboardData.headlineIndicators.hours);
        document.getElementById('sifr').textContent = calculateSIFR(dashboardData.headlineIndicators.significantIncidents, dashboardData.headlineIndicators.hours);

        // Render Charts
        renderQuarterlyIncidentsChart();
        renderAuditsChart();
        renderDrugAlcoholChart();
        renderActionsOpenChart();
        renderHazardsDonutChart();
        renderIncidentTrendChart();
        renderRiskMatrix(); // Render the risk matrix
        renderTopInjuryTypesChart(); // Render the new chart

        // Observations
        document.getElementById('flos').textContent = dashboardData.observations.flos;
        document.getElementById('ccos').textContent = dashboardData.observations.ccos;
        document.getElementById('flosCompliance').textContent = calculateCompliance(dashboardData.observations.flos, dashboardData.observations.flosGoal) + '%';
        document.getElementById('ccosCompliance').textContent = calculateCompliance(dashboardData.observations.ccos, dashboardData.observations.ccosGoal) + '%';

        // Injury Locations
        const injuryLocationList = document.getElementById('injuryLocationList').querySelector('ul');
        injuryLocationList.innerHTML = ''; // Clear existing list
        // Sort injury locations by count for the list as well
        const sortedInjuryLocationsForList = Object.entries(dashboardData.injuryLocations)
            .sort(([, a], [, b]) => b - a);

        sortedInjuryLocationsForList.forEach(([part, count]) => {
            const li = document.createElement('li');
            li.className = 'flex justify-between items-center text-gray-300 clickable-data';
            li.setAttribute('data-metric', `Injury Location: ${part}`); // Make list items clickable
            li.innerHTML = `<span>${part}</span> <span class="font-semibold text-blue-400">${count}</span>`;
            injuryLocationList.appendChild(li);

            // Update body map indicators
            const indicatorId = part.replace(/ /g, '').replace(/and/g, '').toLowerCase() + 'Count';
            const indicatorElement = document.getElementById(indicatorId);
            if (indicatorElement) {
                indicatorElement.textContent = count;
            }
        });


        // Drug and Alcohol
        document.getElementById('positiveTests').textContent = dashboardData.drugAlcohol.positiveTests;
        document.getElementById('peopleTested').textContent = dashboardData.drugAlcohol.peopleTested;

        // Actions Open
        document.getElementById('overdueActions').textContent = dashboardData.actionsOpen.overdue;
        document.getElementById('openActions').textContent = dashboardData.actionsOpen.open;

        // Hazards
        document.getElementById('openedHazards').textContent = dashboardData.hazards.opened;
        document.getElementById('closedHazards').textContent = dashboardData.hazards.closed;
        document.getElementById('avgDaysOpen').textContent = dashboardData.hazards.avgDaysOpen;
        document.getElementById('hazardsPercentage').textContent = dashboardData.hazards.controlledPercentage + '%';
    };

    // Handle Risk Assessment Form Submission
    const riskAssessmentForm = document.getElementById('riskAssessmentForm');
    const riskResultDiv = document.getElementById('riskResult');
    const riskLevelSpan = document.getElementById('riskLevel');
    const riskScoreSpan = document.getElementById('riskScore');

    riskAssessmentForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const taskDescription = document.getElementById('taskDescription').value;
        const likelihood = parseInt(document.getElementById('likelihood').value);
        const severity = parseInt(document.getElementById('severity').value);
        const existingControls = document.getElementById('existingControls').value;

        if (!taskDescription || !likelihood || !severity) {
            showMessage('Please fill in Task Description, Likelihood, and Severity.', 'error');
            return;
        }

        const { score, level, colorClass } = calculateInjuryRisk(likelihood, severity);

        riskResultDiv.classList.remove('hidden', 'risk-low', 'risk-medium', 'risk-high', 'risk-extreme');
        riskResultDiv.classList.add(colorClass);
        riskLevelSpan.textContent = level;
        riskScoreSpan.textContent = score;

        showMessage(`Risk calculated: ${level} (Score: ${score})`, 'info');

        console.log('Risk Assessment Submitted:', {
            taskDescription,
            likelihood,
            severity,
            existingControls,
            calculatedScore: score,
            calculatedLevel: level
        });

        // --- Highlight the corresponding cell in the risk matrix ---
        // 1. Remove any existing highlights
        document.querySelectorAll('.highlighted-risk').forEach(cell => {
            cell.classList.remove('highlighted-risk');
        });

        // 2. Find and highlight the new cell
        const riskMatrixBody = document.getElementById('riskMatrixBody');
        // Rows are 0-indexed, but severity is 1-indexed. `cells[0]` is the severity label.
        // So, for severity 's', it's row `s-1`. For likelihood 'l', it's cell `l`.
        if (riskMatrixBody && riskMatrixBody.rows[severity - 1]) {
            const targetRow = riskMatrixBody.rows[severity - 1];
            // Ensure targetCell exists before adding class
            if (targetRow.cells[likelihood]) {
                const targetCell = targetRow.cells[likelihood];
                targetCell.classList.add('highlighted-risk');
            }
        }
    });

    // Handle General Data Input Form Submission
    const generalDataForm = document.getElementById('generalDataForm');
    generalDataForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const inputInjuries = parseInt(document.getElementById('inputInjuries').value) || 0;
        const inputIncidents = parseInt(document.getElementById('inputIncidents').value) || 0;
        const inputSignificantIncidents = parseInt(document.getElementById('inputSignificantIncidents').value) || 0;
        const inputFLOs = parseInt(document.getElementById('inputFLOs').value) || 0;
        const inputCCOs = parseInt(document.getElementById('inputCCOs').value) || 0;
        const inputPositiveTests = parseInt(document.getElementById('inputPositiveTests').value) || 0;
        const inputPeopleTested = parseInt(document.getElementById('inputPeopleTested').value) || 0;
        const inputOpenActions = parseInt(document.getElementById('inputOpenActions').value) || 0;
        const inputOverdueActions = parseInt(document.getElementById('inputOverdueActions').value) || 0;
        const inputOpenedHazards = parseInt(document.getElementById('inputOpenedHazards').value) || 0;
        const inputClosedHazards = parseInt(document.getElementById('inputClosedHazards').value) || 0;

        // Update Headline Indicators
        dashboardData.headlineIndicators.injuries += inputInjuries;
        dashboardData.headlineIndicators.incidents += inputIncidents;
        dashboardData.headlineIndicators.significantIncidents += inputSignificantIncidents;

        // Update Observations
        dashboardData.observations.flos += inputFLOs;
        dashboardData.observations.ccos += inputCCOs;

        // Update Drug and Alcohol
        dashboardData.drugAlcohol.positiveTests += inputPositiveTests;
        dashboardData.drugAlcohol.peopleTested += inputPeopleTested;
        // Update monthly data for current month (or add new month if needed)
        const currentMonth = new Date().toLocaleString('en-US', { month: 'short' });
        let monthIndex = dashboardData.drugAlcohol.monthlyData.findIndex(d => d.month === currentMonth);
        if (monthIndex === -1) {
            dashboardData.drugAlcohol.monthlyData.push({ month: currentMonth, positive: inputPositiveTests, total: inputPeopleTested });
        } else {
            dashboardData.drugAlcohol.monthlyData[monthIndex].positive += inputPositiveTests;
            dashboardData.drugAlcohol.monthlyData[monthIndex].total += inputPeopleTested;
        }

        // Update Actions Open
        dashboardData.actionsOpen.open += inputOpenActions;
        dashboardData.actionsOpen.overdue += inputOverdueActions;
        // Update monthly data for current month (or add new month if needed)
        monthIndex = dashboardData.actionsOpen.monthlyData.findIndex(d => d.month === currentMonth);
        if (monthIndex === -1) {
            dashboardData.actionsOpen.monthlyData.push({ month: currentMonth, open: inputOpenActions });
        } else {
            dashboardData.actionsOpen.monthlyData[monthIndex].open += inputOpenActions;
        }

        // Update Hazards
        dashboardData.hazards.opened += inputOpenedHazards;
        dashboardData.hazards.closed += inputClosedHazards;
        // Recalculate controlled percentage (simple example: 72% is static, but could be dynamic based on opened/closed)
        // For now, let's keep it static or add a simple logic
        // dashboardData.hazards.controlledPercentage = (dashboardData.hazards.closed / dashboardData.hazards.opened) * 100; // if you want dynamic

        // Update Incident Trend Chart (add to current month's incidents)
        monthIndex = dashboardData.incidentTrends.months.findIndex(m => m === currentMonth);
        if (monthIndex === -1) {
            dashboardData.incidentTrends.months.push(currentMonth);
            dashboardData.incidentTrends.incidents.push(inputIncidents + inputInjuries + inputSignificantIncidents);
        } else {
            dashboardData.incidentTrends.incidents[monthIndex] += (inputIncidents + inputInjuries + inputSignificantIncidents);
        }


        renderDashboard();
        showMessage('Dashboard data updated successfully!', 'success');
        generalDataForm.reset(); // Clear form after submission
    });


    // Handle Body Map Indicator Clicks (for incrementing count)
    const bodyPartIndicators = document.querySelectorAll('.body-part-indicator');
    bodyPartIndicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            const partName = indicator.dataset.part;
            // Increment the count for the clicked body part
            if (dashboardData.injuryLocations[partName] !== undefined) {
                dashboardData.injuryLocations[partName]++;
                dashboardData.headlineIndicators.injuries++; // Increment total injuries too
                renderDashboard(); // Re-render to show updated count
                showMessage(`${partName} injury count increased!`, 'info');
            }
        });
    });

    // Handle Clicks on all .clickable-data elements
    document.querySelectorAll('.clickable-data').forEach(element => {
        element.addEventListener('click', (event) => {
            // Prevent propagation if a child element also has a click handler (like body map indicators)
            event.stopPropagation();

            if (element.dataset.metric) {
                const metricKey = element.dataset.metric;
                const details = dashboardData.metricDetails[metricKey];
                if (details) {
                    let contentHTML = `<p>${details.description}</p>`;
                    if (details.calculation) {
                        contentHTML += `<p class="mt-2 text-sm text-gray-500"><strong>Calculation:</strong> ${details.calculation}</p>`;
                    }
                    if (details.relatedStandards && details.relatedStandards.length > 0) {
                        contentHTML += `<p class="mt-2 text-sm text-gray-500"><strong>Related Standards:</strong></p><ul class="list-disc list-inside ml-4">`;
                        details.relatedStandards.forEach(std => {
                            const standardInfo = dashboardData.standardDetails[std];
                            if (standardInfo) {
                                contentHTML += `<li><a href="${standardInfo.link}" target="_blank" class="text-blue-400 hover:underline">${standardInfo.title}</a></li>`;
                            } else {
                                contentHTML += `<li>${std}</li>`;
                            }
                        });
                        contentHTML += `</ul>`;
                    }
                    openModal(details.title, contentHTML);
                } else if (metricKey.startsWith("Injury Location:")) {
                    const partName = metricKey.replace("Injury Location: ", "");
                    const count = dashboardData.injuryLocations[partName];
                    openModal(`Injury Details: ${partName}`, `<p>There are currently <strong>${count}</strong> reported injuries for the ${partName} body part.</p><p class="mt-2 text-sm text-gray-500">Clicking the indicator on the body map will increment this count.</p>`);
                }
            } else if (element.dataset.standard) {
                const standardKey = element.dataset.standard;
                const details = dashboardData.standardDetails[standardKey];
                if (details) {
                    let contentHTML = `<p>${details.description}</p>`;
                    if (details.link) {
                        contentHTML += `<p class="mt-4"><a href="${details.link}" target="_blank" class="text-blue-400 hover:underline">Learn more about ${details.title}</a></p>`;
                    }
                    openModal(details.title, contentHTML);
                }
            }
        });
    });

    // Handle Reset Data Button
    document.getElementById('resetData').addEventListener('click', () => {
        dashboardData = JSON.parse(JSON.stringify(initialDashboardData)); // Reset to initial state
        renderDashboard();
        riskAssessmentForm.reset();
        generalDataForm.reset(); // Reset new form too
        riskResultDiv.classList.add('hidden'); // Hide risk result on reset
        // --- Remove highlight on reset ---
        document.querySelectorAll('.highlighted-risk').forEach(cell => {
            cell.classList.remove('highlighted-risk');
        });
        showMessage('Dashboard data reset to initial state!');
    });

    // SOP Generation Logic
    const sopGeneratorForm = document.getElementById('sopGeneratorForm');
    const sopOutputDiv = document.getElementById('sopOutput');
    const generateSOPButton = document.getElementById('generateSOPButton');
    const sopLoadingSpinner = document.getElementById('sopLoadingSpinner');

    sopGeneratorForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const sopTitle = document.getElementById('sopTitle').value.trim();
        const sopActivity = document.getElementById('sopActivity').value.trim();
        const sopHazards = document.getElementById('sopHazards').value.trim();
        const sopControls = document.getElementById('sopControls').value.trim();
        const sopSteps = document.getElementById('sopSteps').value.trim();

        if (!sopTitle || !sopActivity || !sopSteps) {
            showMessage('Please fill in SOP Title, Activity Description, and Key Steps to generate an SOP.', 'error');
            return;
        }

        // Show loading spinner and disable button
        generateSOPButton.disabled = true;
        sopLoadingSpinner.classList.remove('hidden');
        sopOutputDiv.classList.add('hidden'); // Hide previous output

        const prompt = `Generate a Standard Operating Procedure (SOP) based on the following details. Format it clearly with sections for Purpose, Scope, Hazards, Controls, and Procedure. Use markdown for headings and bullet points.

SOP Title: ${sopTitle}
Activity Description: ${sopActivity}
Potential Hazards: ${sopHazards ? sopHazards : 'None specified'}
Existing Controls: ${sopControls ? sopControls : 'None specified'}
Key Steps:
${sopSteps}

Ensure the SOP is concise, clear, and actionable.`;

        try {
            let chatHistory = [];
            chatHistory.push({ role: "user", parts: [{ text: prompt }] });
            const payload = { contents: chatHistory };
            const apiKey = "AIzaSyBisW_nQRw-oUUCTW_ZNgbnYG10xhKJdlU"; // Your provided API key
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`API error: ${response.status} ${response.statusText} - ${errorData.error.message}`);
            }

            const result = await response.json();

            if (result.candidates && result.candidates.length > 0 &&
                result.candidates[0].content && result.candidates[0].content.parts &&
                result.candidates[0].content.parts.length > 0) {
                const sopText = result.candidates[0].content.parts[0].text;
                sopOutputDiv.innerHTML = sopText; // Display raw markdown
                sopOutputDiv.classList.remove('hidden');
                showMessage('SOP generated successfully!', 'success');
            } else {
                sopOutputDiv.textContent = 'Failed to generate SOP. No content found in response.';
                sopOutputDiv.classList.remove('hidden');
                showMessage('SOP generation failed.', 'error');
            }
        } catch (error) {
            console.error('Error generating SOP:', error);
            sopOutputDiv.textContent = `Error generating SOP: ${error.message}. Please try again.`;
            sopOutputDiv.classList.remove('hidden');
            showMessage('SOP generation failed.', 'error');
        } finally {
            // Hide loading spinner and enable button
            generateSOPButton.disabled = false;
            sopLoadingSpinner.classList.add('hidden');
        }
    });

    // Audit Sheet Generation Logic
    const auditGeneratorForm = document.getElementById('auditGeneratorForm');
    const auditOutputDiv = document.getElementById('auditOutput');
    const generateAuditButton = document.getElementById('generateAuditButton');
    const auditLoadingSpinner = document.getElementById('auditLoadingSpinner');

    auditGeneratorForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const auditType = document.getElementById('auditType').value.trim();
        const auditArea = document.getElementById('auditArea').value.trim();
        const auditCriteria = document.getElementById('auditCriteria').value.trim();
        const auditFindings = document.getElementById('auditFindings').value.trim();
        const auditRecommendations = document.getElementById('auditRecommendations').value.trim();

        if (!auditType || !auditArea || !auditFindings) {
            showMessage('Please fill in Audit Type, Audited Area, and Key Findings to generate an Audit Sheet.', 'error');
            return;
        }

        generateAuditButton.disabled = true;
        auditLoadingSpinner.classList.remove('hidden');
        auditOutputDiv.classList.add('hidden');

        const prompt = `Generate an Audit Sheet based on the following details. Format it clearly with sections for Audit Details, Findings, and Recommendations. Use markdown for headings and bullet points.

Audit Type: ${auditType}
Audited Area/Department: ${auditArea}
Audit Criteria: ${auditCriteria ? auditCriteria : 'Not specified'}
Key Findings:
${auditFindings}
Recommendations:
${auditRecommendations ? auditRecommendations : 'None specified'}

Ensure the audit sheet is professional and actionable.`;

        try {
            let chatHistory = [];
            chatHistory.push({ role: "user", parts: [{ text: prompt }] });
            const payload = { contents: chatHistory };
            const apiKey = "AIzaSyBisW_nQRw-oUUCTW_ZNgbnYG10xhKJdlU"; // Your provided API key
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`API error: ${response.status} ${response.statusText} - ${errorData.error.message}`);
            }

            const result = await response.json();

            if (result.candidates && result.candidates.length > 0 &&
                result.candidates[0].content && result.candidates[0].content.parts &&
                result.candidates[0].content.parts.length > 0) {
                const auditText = result.candidates[0].content.parts[0].text;
                auditOutputDiv.innerHTML = auditText;
                auditOutputDiv.classList.remove('hidden');
                showMessage('Audit Sheet generated successfully!', 'success');
            } else {
                auditOutputDiv.textContent = 'Failed to generate Audit Sheet. No content found in response.';
                auditOutputDiv.classList.remove('hidden');
                showMessage('Audit Sheet generation failed.', 'error');
            }
        } catch (error) {
            console.error('Error generating Audit Sheet:', error);
            auditOutputDiv.textContent = `Error generating Audit Sheet: ${error.message}. Please try again.`;
            auditOutputDiv.classList.remove('hidden');
            showMessage('Audit Sheet generation failed.', 'error');
        } finally {
            generateAuditButton.disabled = false;
            auditLoadingSpinner.classList.add('hidden');
        }
    });

    // Scenario Prevention / Accident Near Miss Investigation Logic
    const investigationForm = document.getElementById('investigationForm');
    const investigationOutputDiv = document.getElementById('investigationOutput');
    const investigateButton = document.getElementById('investigateButton');
    const investigationLoadingSpinner = document.getElementById('investigationLoadingSpinner');

    investigationForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const eventType = document.getElementById('eventType').value;
        const eventDescription = document.getElementById('eventDescription').value.trim();
        const contributingFactors = document.getElementById('contributingFactors').value.trim();

        if (!eventDescription) {
            showMessage('Please provide an Event Description.', 'error');
            return;
        }

        investigateButton.disabled = true;
        investigationLoadingSpinner.classList.remove('hidden');
        investigationOutputDiv.classList.add('hidden');

        let prompt = '';
        if (eventType === 'accident') {
            prompt = `Based on the following accident details, suggest key investigation steps and potential prevention strategies. Format it clearly with sections for Investigation Steps, Root Cause Analysis (potential areas), and Prevention Strategies. Use markdown for headings and bullet points.

Accident Description: ${eventDescription}
Contributing Factors: ${contributingFactors ? contributingFactors : 'None specified'}

Focus on actionable steps and comprehensive prevention.`;
        } else { // near miss
            prompt = `Based on the following near miss incident details, suggest immediate actions, investigation steps, and prevention strategies to avoid future occurrences. Format it clearly with sections for Immediate Actions, Investigation Steps, and Prevention Strategies. Use markdown for headings and bullet points.

Near Miss Description: ${eventDescription}
Contributing Factors: ${contributingFactors ? contributingFactors : 'None specified'}

Focus on learning from the near miss and proactive measures.`;
        }

        try {
            let chatHistory = [];
            chatHistory.push({ role: "user", parts: [{ text: prompt }] });
            const payload = { contents: chatHistory };
            const apiKey = "AIzaSyBisW_nQRw-oUUCTW_ZNgbnYG10xhKJdlU"; // Your provided API key
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`API error: ${response.status} ${response.statusText} - ${errorData.error.message}`);
            }

            const result = await response.json();

            if (result.candidates && result.candidates.length > 0 &&
                result.candidates[0].content && result.candidates[0].content.parts &&
                result.candidates[0].content.parts.length > 0) {
                const investigationText = result.candidates[0].content.parts[0].text;
                investigationOutputDiv.innerHTML = investigationText;
                investigationOutputDiv.classList.remove('hidden');
                showMessage('Suggestions generated successfully!', 'success');
            } else {
                investigationOutputDiv.textContent = 'Failed to generate suggestions. No content found in response.';
                investigationOutputDiv.classList.remove('hidden');
                showMessage('Suggestion generation failed.', 'error');
            }
        } catch (error) {
            console.error('Error generating suggestions:', error);
            investigationOutputDiv.textContent = `Error generating suggestions: ${error.message}. Please try again.`;
            investigationOutputDiv.classList.remove('hidden');
            showMessage('Suggestion generation failed.', 'error');
        } finally {
            investigateButton.disabled = false;
            investigationLoadingSpinner.classList.add('hidden');
        }
    });


    // Initial render of the dashboard when the page loads
    renderDashboard();
});
