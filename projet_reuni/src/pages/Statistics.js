import React from 'react';
import { Line } from 'react-chartjs-2';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class Statistics extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            today : new Date(),
            dday : new Date().getDay(),
            wweek : new Date().getDate(),
            mmonth : new Date().getMonth(),
        }
        this.showChart = this.showChart.bind(this);
    }

    setDays = () => {
        var days;
        var day = this.state.dday;
        switch (day) {
            case 6: days = [day-1,day-2,day-3,day-4,day-5,day-6,day]; break;
            case 5: days = [day-1,day-2,day-3,day-4,day-5,day+1,day]; break;
            case 4: days = [day-1,day-2,day-3,day-4,day+2,day+1,day]; break;
            case 3: days = [day-1,day-2,day-3,day+3,day+2,day+1,day]; break;
            case 2: days = [day-1,day-2,day+4,day+3,day+2,day+1,day]; break;
            case 1: days = [day-1,day+5,day+4,day+3,day+2,day+1,day]; break;
            case 0: days = [day+6,day+5,day+4,day+3,day+2,day+1,day]; break;
            default: console.log("Il semble y avoir un problème avec la date."); break;
        }
        return days;
    }

    setDayName = (day) => {
        var name = "";
        switch (day) {
            case 0: name = "Dimanche"; break;
            case 1: name = "Lundi"; break;
            case 2: name = "Mardi"; break;
            case 3: name = "Mercredi"; break;
            case 4: name = "Jeudi"; break;
            case 5: name = "Vendredi"; break;
            case 6: name = "Samedi"; break;
            default: console.log("Ce n'est pas un jour de la semaine."); break;
        }
        return name;
    }

    setWeeks = () => {
        var weeks = [];
        var lastSun = this.state.wweek + (-7 + (7 - this.state.dday));
        var lastMon = lastSun - 6;
        var lastSunDay = new Intl.DateTimeFormat('fr', { day: '2-digit' }).format(new Date().setDate(lastSun));
        var lastSunMonth = new Intl.DateTimeFormat('fr', { month: 'short' }).format(new Date().setDate(lastSun));
        var lastMonDay = new Intl.DateTimeFormat('fr', { day: '2-digit' }).format(new Date().setDate(lastMon));
        var lastMonMonth = new Intl.DateTimeFormat('fr', { month: 'short' }).format(new Date().setDate(lastMon));
        weeks.unshift(["du " + lastMonDay + " " + lastMonMonth, "au " + lastSunDay + " " + lastSunMonth]);
        for (let t=0;t<3;t++) {
            lastSun = lastMon - 1;
            lastMon = lastSun - 6;
            lastSunDay = new Intl.DateTimeFormat('fr', { day: '2-digit' }).format(new Date().setDate(lastSun));
            lastSunMonth = new Intl.DateTimeFormat('fr', { month: 'short' }).format(new Date().setDate(lastSun));
            lastMonDay = new Intl.DateTimeFormat('fr', { day: '2-digit' }).format(new Date().setDate(lastMon));
            lastMonMonth = new Intl.DateTimeFormat('fr', { month: 'short' }).format(new Date().setDate(lastMon));
            weeks.unshift(["du " + lastMonDay + " " + lastMonMonth, "au " + lastSunDay + " " + lastSunMonth]);
        }
        return weeks;
    }

    setMonths = () => {
        var months;
        var month = this.state.mmonth;
        switch (month) {
            case 11: months = [month-1,month-2,month-3,month-4,month-5,month-6,month-7,month-8,month-9,month-10,month-11,month]; break;
            case 10: months = [month-1,month-2,month-3,month-4,month-5,month-6,month-7,month-8,month-9,month-10,month+1,month]; break;
            case 9: months = [month-1,month-2,month-3,month-4,month-5,month-6,month-7,month-8,month-9,month+2,month+1,month]; break;
            case 8: months = [month-1,month-2,month-3,month-4,month-5,month-6,month-7,month-8,month+3,month+2,month+1,month]; break;
            case 7: months = [month-1,month-2,month-3,month-4,month-5,month-6,month-7,month+4,month+3,month+2,month+1,month]; break;
            case 6: months = [month-1,month-2,month-3,month-4,month-5,month-6,month+5,month+4,month+3,month+2,month+1,month]; break;
            case 5: months = [month-1,month-2,month-3,month-4,month-5,month+6,month+5,month+4,month+3,month+2,month+1,month]; break;
            case 4: months = [month-1,month-2,month-3,month-4,month+7,month+6,month+5,month+4,month+3,month+2,month+1,month]; break;
            case 3: months = [month-1,month-2,month-3,month+8,month+7,month+6,month+5,month+4,month+3,month+2,month+1,month]; break;
            case 2: months = [month-1,month-2,month+9,month+8,month+7,month+6,month+5,month+4,month+3,month+2,month+1,month]; break;
            case 1: months = [month-1,month+10,month+9,month+8,month+7,month+6,month+5,month+4,month+3,month+2,month+1,month]; break;
            case 0: months = [month+11,month+10,month+9,month+8,month+7,month+6,month+5,month+4,month+3,month+2,month+1,month]; break;
            default: console.log("Il semble y avoir un problème avec la date."); break;
        }
        return months;
    }

    setMonthName = (month) => {
        var name = "";
        switch (month) {
            case 0: name = "Janvier"; break;
            case 1: name = "Février"; break;
            case 2: name = "Mars"; break;
            case 3: name = "Avril"; break;
            case 4: name = "Mai"; break;
            case 5: name = "Juin"; break;
            case 6: name = "Juillet"; break;
            case 7: name = "Août"; break;
            case 8: name = "Septembre"; break;
            case 9: name = "Octobre"; break;
            case 10: name = "Novembre"; break;
            case 11: name = "Décembre"; break;
            default: console.log("Ce n'est pas un mois de l'année."); break;
        }
        return name;
    }

    showChart = () => {
        switch (document.readyState) {
            case "loading": break;
            case "interactive":
            case "complete":
                var which = document.getElementById('selectTimeStats').selectedOptions[0].value;
                var week = document.getElementById('weekChart');
                var month = document.getElementById('monthChart');
                var year = document.getElementById('yearChart');
                if (which < 2) {
                    month.style.display = "none";
                    year.style.display = "none";
                    week.style.display = "inline-block";
                } else {
                    if (which < 3) {
                        week.style.display = "none";
                        year.style.display = "none";
                        month.style.display = "inline-block";
                    } else {
                        week.style.display = "none";
                        month.style.display = "none";
                        year.style.display = "inline-block";
                    }
                }
                break;
            default: console.log("Il semble y avoir un problème avec le chargement de la page."); break;
        }
    }

    render() {

        const options = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: [
                    {
                        beginAtZero: true,
                        ticks: { autoSkip: false, maxRotation: 90, minRotation: 90 }
                    }
                ],
                y: [
                    {
                        beginAtZero: true,
                        ticks: { min: 1900, max: 3000 }
                    }
                ]
            }    
        }

        const weekData = {
            labels: [this.setDayName(this.setDays()[6]),
                        this.setDayName(this.setDays()[5]),
                        this.setDayName(this.setDays()[4]),
                        this.setDayName(this.setDays()[3]),
                        this.setDayName(this.setDays()[2]),
                        this.setDayName(this.setDays()[1]),
                        this.setDayName(this.setDays()[0])],
            datasets: [
              {
                label: 'Calories consommées',
                data: [2100, 2500, 2600, 2000, 2300, 2250, 2150],
                backgroundColor: '#d87d7e',
                borderColor: '#f0cdcd',
               },
                {
                 label: 'Calories dépensées',
                 data: [2000, 2400, 2700, 2000, 2100, 2250, 2200],
                 backgroundColor: '#1d1643',
                 borderColor: '#7b7599',
            }]
          }

        const monthData = {
            labels: this.setWeeks(),
            datasets: [
                {
                    label: 'Calories consommées en moyenne',
                    data: [2190, 2532, 2678, 2123],
                    backgroundColor: '#d87d7e',
                    borderColor: '#f0cdcd',
                },
                {
                     label: 'Calories dépensées en moyenne',
                     data: [2189, 1990, 2345, 2087],
                     backgroundColor: '#1d1643',
                     borderColor: '#7b7599',
                }
            ] 
        }
        
        const yearData = {
            labels: [this.setMonthName(this.setMonths()[11]),
                            this.setMonthName(this.setMonths()[10]),
                            this.setMonthName(this.setMonths()[9]),
                            this.setMonthName(this.setMonths()[8]),
                            this.setMonthName(this.setMonths()[7]),
                            this.setMonthName(this.setMonths()[6]),
                            this.setMonthName(this.setMonths()[5]),
                            this.setMonthName(this.setMonths()[4]),
                            this.setMonthName(this.setMonths()[3]),
                            this.setMonthName(this.setMonths()[2]),
                            this.setMonthName(this.setMonths()[1]),
                            this.setMonthName(this.setMonths()[0])],
            datasets: [
              {
                label: 'Calories consommées en moyenne',
                data: [2190, 2532, 2678, 2123, 2312, 2432, 2189, 1990, 2345, 2087, 1999, 2000],
                backgroundColor: '#d87d7e',
                borderColor: '#f0cdcd',
               },
                {
                 label: 'Calories dépensées en moyenne',
                 data: [2189, 1990, 2345, 2087, 1999, 1989, 2387, 2987, 2098, 2589, 2098, 2378],
                 backgroundColor: '#1d1643',
                 borderColor: '#7b7599',
            }]
        }

        this.setWeeks();

        return (
            <div className="bg-white">

                <Header /> 
                <body className="bg-white">
    
                    <h1>Mes statistiques</h1>
    
                    <div class="bloc">
                        <div class="select">
                            <select id="selectTimeStats" onChange={() => this.showChart()}>
                                <option value="1" defaultValue>Semaine précédente</option>
                                <option value="2">Mois précédent</option>
                                <option value="3">Année précédente</option>
                            </select>
                        </div>
                    </div>
    
                    <div id="weekChart">
                        <Line data={weekData} options={options} />
    
                  </div>
    
                  <div id="monthChart" style={{display:"none"}}>
                        <Line data={monthData} options={options} />
                  </div>
    
                  <div id="yearChart" style={{display:"none"}}>
                        <Line data={yearData} options={options} />
                    </div>
    
                </body>
                <div className="bg-white">
                    <Footer /> 
                </div>
            </div>
        )
    }
}