<template>
  <div id="app">
    <div class="container">
      <div class="main-container"> 
      <HeaderComp v-if = "siteNotEntered"/>
        <div class="left">
        <div class="calendar">
          <div class="month">
            <i class="fas fa-angle-left prev"></i>
            <div class="date">december 2015</div>
            <i class="fas fa-angle-right next"></i>
          </div>
          <div class="weekdays">
            <div>Mo</div>
            <div>Di</div>
            <div>Mi</div>
            <div>Do</div>
            <div>Fr</div>
            <div>Sa</div>
            <div>So</div>
          </div>
          <div class="days"></div>
          <div class="goto-today">
            <div class="goto">
              <input type="text" placeholder="dd/mm/yyyy" class="date-input" />
              <button class="goto-btn">Go</button>
            </div>
            <button class="today-btn">Today</button>
          </div>

        </div>
      </div>
      <div class="right">
        <div class="today-date">
          <div class="event-day"></div>
          <div class="event-date"></div>
          <div v-if = "siteNotEntered">
          <font-awesome-icon :icon="['fas', 'circle-check']" @click = "$router.push('/MainScreen'); toggleFirstTimeEnter();"/>
          </div>
        </div>
        <div class="events"></div>
        <button class="add-event">
            <i class="fas fa-plus"></i>
            </button>

           <div class="add-event-wrapper">
            <div class="add-event-header">
              <div class="title">Meilenstein hinzufügen</div>
              <i class="fas fa-times close"></i>
            </div>


             
      
            <div class="add-event-body">
            <div class="add-event-input">
            <input type="text" placeholder="Meilenstein Name" class="event-name" v-model="meilensteinInput"/>
           </div>

             <div class="add-event-input">
             <input type="text" placeholder="Startzeit" class="event-time-from" />
              </div>

               <div class="add-event-input">
              <input type="text" placeholder="Abschlusszeit" class="event-time-to" />
              </div>

              
                 <div class="add-event-input">
                 <input type="text" placeholder="Ziel zum erreichen des Meilensteins" class="another-input" v-model="zielInput" />
                    </div>
                      </div>
                     <div class="add-event-footer">
                      <button @click="updateStoreValues" class="add-event-btn">Add Event</button>
                     </div>
                      </div>
      </div>
      </div>
      


    </div>
    <section></section>
  </div>
</template>


<script>
import HeaderComp from '@/components/HeaderComp'
export default {
  name: 'KalenderComp',
  props: {
    msg: String
  },
  computed: {
     getAspirationFromStore() {
       return this.$store.getters.getAspiration;
     },
     getIstZustandFromStore() {
       return this.$store.getters.getIstZustand;
     },
     getEventsArr() {
      return this.$store.getters.getEventsArr;
    },
   },
  data() {
    return {
      calendar: null,
      date: null,
      daysContainer: null,
      prev: null,
      next: null,
      todayBtn: null,
      gotoBtn: null,
      dateInput: null,
      eventDay: null,
      eventDate: null,
      eventsContainer: null,
      addEventBtn: null,
      addEventWrapper: null,
      addEventCloseBtn: null,
      addEventTitle: null,
      addEventAnotherInput: null,
      addEventFrom: null,
      addEventTo: null,
      addEventSubmit: null,
      showDropdown: false,
      aspirationOptions: ["Option 1", "Option 2", "Option 3"], 
      zielInput: '',
      meilensteinInput: '',
      siteNotEntered: this.$store.getters.getFirstTimeCalendar,

      today: new Date(),
      activeDay: null,
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      months: [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ],
      eventsArr: []
    };
  },
  components:{
    HeaderComp
  },
  methods: {
    initCalendar() {
      const firstDay = new Date(this.year, this.month, 1);
    const lastDay = new Date(this.year, this.month + 1, 0);
    const prevLastDay = new Date(this.year, this.month, 0);
    const prevDays = prevLastDay.getDate();
    const lastDate = lastDay.getDate();
    const day = (firstDay.getDay() === 0) ? 6 : (firstDay.getDay() - 1); 
    const nextDays = 7 - lastDay.getDay() - 1;

      this.date.innerHTML = this.months[this.month] + " " + this.year;

      let days = "";

      for (let x = day; x > 0; x--) {
        days += `<div class="day prev-date">${prevDays - x + 1}</div>`;
      }

      for (let i = 1; i <= lastDate; i++) {
        let event = false;
        this.getEventsArr.forEach((eventObj) => {
          if (
            eventObj.day === i &&
            eventObj.month === this.month + 1 &&
            eventObj.year === this.year
          ) {
            event = true;
          }
        });
        if (
          i === new Date().getDate() &&
          this.year === new Date().getFullYear() &&
          this.month === new Date().getMonth()
        ) {
          this.activeDay = i;
          this.getActiveDay(i);
          this.updateEvents(i);
          if (event) {
            days += `<div class="day today active event">${i}</div>`;
          } else {
            days += `<div class="day today active">${i}</div>`;
          }
        } else {
          if (event) {
            days += `<div class="day event">${i}</div>`;
          } else {
            days += `<div class="day ">${i}</div>`;
          }
        }
      }

      for (let j = 1; j <= nextDays; j++) {
        days += `<div class="day next-date">${j}</div>`;
      }
      this.daysContainer.innerHTML = days;
      this.addListner();
    },

    prevMonth() {
      this.month--;
      if (this.month < 0) {
        this.month = 11;
        this.year--;
      }
      this.initCalendar();
    },

    nextMonth() {
      this.month++;
      if (this.month > 11) {
        this.month = 0;
        this.year++;
      }
      this.initCalendar();
    },

    addListner() {
      const days = document.querySelectorAll(".day");
      days.forEach((day) => {
        day.addEventListener("click", (e) => {
          this.getActiveDay(e.target.innerHTML);
          this.updateEvents(Number(e.target.innerHTML));
          this.activeDay = Number(e.target.innerHTML);
          days.forEach((day) => {
            day.classList.remove("active");
          });
          if (e.target.classList.contains("prev-date")) {
            this.prevMonth();
            setTimeout(() => {
              const days = document.querySelectorAll(".day");
              days.forEach((day) => {
                if (
                  !day.classList.contains("prev-date") &&
                  day.innerHTML === e.target.innerHTML
                ) {
                  day.classList.add("active");
                }
              });
            }, 100);
          } else if (e.target.classList.contains("next-date")) {
            this.nextMonth();
            setTimeout(() => {
              const days = document.querySelectorAll(".day");
              days.forEach((day) => {
                if (
                  !day.classList.contains("next-date") &&
                  day.innerHTML === e.target.innerHTML
                ) {
                  day.classList.add("active");
                }
              });
            }, 100);
          } else {
            e.target.classList.add("active");
          }
        });
      });
    },

    todayBtnClick() {
      this.today = new Date();
      
      this.month = this.today.getMonth();
      this.year = this.today.getFullYear();
      this.initCalendar();
    },

    dateInputChange(e) {
  this.dateInput.value = this.dateInput.value.replace(/[^0-9/]/g, "");
  if (this.dateInput.value.length === 2 || this.dateInput.value.length === 5) {
    this.dateInput.value += "/";
  }
  if (this.dateInput.value.length > 10) {
    this.dateInput.value = this.dateInput.value.slice(0, 10);
  }
  if (e.inputType === "deleteContentBackward") {
    if (this.dateInput.value.length === 6 || this.dateInput.value.length === 3) {
      this.dateInput.value = this.dateInput.value.slice(0, 2);
    }
  }
},

documentClick(e) {
  if (e.target !== this.addEventBtn && !this.addEventWrapper.contains(e.target)) {
    this.addEventWrapper.classList.remove("active");
  }
},



gotoDate() {
  const dateArr = this.dateInput.value.split("/");

  if (dateArr.length === 3) {
    const month = parseInt(dateArr[0], 10);
    const day = parseInt(dateArr[1], 10);
    const year = parseInt(dateArr[2], 10);

    if (!isNaN(month) && !isNaN(day) && !isNaN(year) &&
        month > 0 && month <= 12 && day > 0 && day <= 31) {
      this.month = month - 1;
      this.year = year;
      this.initCalendar();
      return;
    }
  }

  alert("Invalid Date");
},

documentClickHandler(e) {
      if (e.target !== this.addEventBtn && !this.addEventWrapper.contains(e.target)) {
        this.addEventWrapper.classList.remove("active");
      }
    },

    addEventSubmitHandler() {
  const title = this.addEventTitle.value.trim();
  const from = this.addEventFrom.value.trim();
  const to = this.addEventTo.value.trim();
  const anotherInput = this.addEventAnotherInput.value.trim();

 

  const eventObj = {
    day: this.activeDay,
    month: this.month + 1,
    year: this.year,
    events: [
      {
        title: title,
        time: `${from} - ${to}`,
        anotherInput: anotherInput,
      },
    ],
  };

  this.eventsArr.push(eventObj);
  this.$store.commit('setEventsArr', this.eventsArr);
  
  this.updateEvents(this.activeDay); 

  this.addEventWrapper.classList.remove("active");
  this.addEventTitle.value = "";
  this.addEventFrom.value = "";
  this.addEventTo.value = "";
},

    

updateEvents(date) {
  let events = "";
  this.eventsArr.forEach((event) => {
    if (
      date === event.day &&
      this.month + 1 === event.month &&
      this.year === event.year
    ) {
      event.events.forEach((event) => {
        events += `<div class="event">
            <div class="title">
              <i class="fas fa-circle"></i>
              <h3 class="event-title">${event.title}</h3>
            </div>
            <div class="event-time">
              <span class="event-time">${event.time}</span>
            </div>
            <div class="event-time">
              <span class="another-input">${event.anotherInput}</span>
            </div>
        </div>`;
      });
     
      const dayElement = document.querySelector(`.day[data-day="${date}"]`);
      if (dayElement) {
        dayElement.classList.add('event-day');
      }
    }
  });

  if (events === "") {
    events = `<div class="no-event">
            <h3>No Events</h3>
        </div>`;
  }

  this.eventsContainer.innerHTML = events;
},

    addEventBtnClick() {
      this.addEventWrapper.classList.toggle("active");
    },

    addEventCloseBtnClick() {
      this.addEventWrapper.classList.remove("active");
    },

    handleDocumentClick(e) {
      if (e.target !== this.addEventBtn && !this.addEventWrapper.contains(e.target)) {
        this.addEventWrapper.classList.remove("active");
      }
    },

    addEventTitleInput() {
      this.addEventTitle.value = this.addEventTitle.value.slice(0, 60);
    },

    addEventFromInput() {
      this.addEventFrom.value = this.addEventFrom.value.replace(/[^0-9:]/g, "");
      if (this.addEventFrom.value.length === 2) {
        this.addEventFrom.value += ":";
      }
      if (this.addEventFrom.value.length > 5) {
        this.addEventFrom.value = this.addEventFrom.value.slice(0, 5);
      }
    },

    addEventToInput() {
      this.addEventTo.value = this.addEventTo.value.replace(/[^0-9:]/g, "");
      if (this.addEventTo.value.length === 2) {
        this.addEventTo.value += ":";
      }
      if (this.addEventTo.value.length > 5) {
        this.addEventTo.value = this.addEventTo.value.slice(0, 5);
      }
    },


    getDayName(dayIndex) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  console.log("Day Index:", dayIndex);

  if (dayIndex >= 0 && dayIndex < daysOfWeek.length) {
    return daysOfWeek[dayIndex];
  } else {
    return "Invalid Day";
  }
},

getActiveDay(date) {
  const day = new Date(this.year, this.month, date);
  let dayIndex = day.getDay(); 
  
  dayIndex = (dayIndex === 0) ? 6 : (dayIndex - 1);

  const dayName = this.getDayName(dayIndex);

  console.log("Year:", this.year);
  console.log("Month:", this.month);
  console.log("Date:", date);
  console.log("Day Name:", dayName);

 
  if (this.eventDay) {
    this.eventDay.innerText = `Meilenstein`; 
  }

  this.eventDate.innerHTML = `${date} ${this.months[this.month]} ${this.year}`;
},



    saveEvents() {
      const title = this.addEventTitle.value.trim();
      const from = this.addEventFrom.value.trim();
      const to = this.addEventTo.value.trim();

      if (title === "" || from === "" || to === "") {
        alert("Please fill in all fields");
        return;
      }

      const eventObj = {
        day: this.activeDay,
        month: this.month + 1,
        year: this.year,
        events: [
          {
            title: title,
            time: `${from} - ${to}`
          }
        ]
      };

      this.eventsArr.push(eventObj);
      this.initCalendar();
      this.addEventWrapper.classList.remove("active");
      this.addEventTitle.value = "";
      this.addEventFrom.value = "";
      this.addEventTo.value = "";
    },

    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },

    updateStoreValues() {
   
      this.$store.commit('setMeilensteinInput', this.meilensteinInput);
      this.$store.commit('setZielInput', this.zielInput);
  
      this.$store.commit('setEventsArr', this.eventsArr);
    },

    selectAspiration(aspiration) {

      this.$store.commit('setAspiration', aspiration);
      this.showDropdown = false; 
    }, 
    toggleFirstTimeEnter(){
      this.$store.commit('toggleFirstEnterCalendar');
    }
    
  },
  mounted() {
  this.calendar = document.querySelector(".calendar");
  this.date = document.querySelector(".date");
  this.daysContainer = document.querySelector(".days");
  this.prev = document.querySelector(".prev");
  this.next = document.querySelector(".next");
  this.todayBtn = document.querySelector(".today-btn");
  this.gotoBtn = document.querySelector(".goto-btn");
  this.dateInput = document.querySelector(".date-input");
  this.eventDay = document.querySelector(".event-day");
  this.eventDate = document.querySelector(".event-date");
  this.eventsContainer = document.querySelector(".events");
  this.addEventBtn = document.querySelector(".add-event");
  this.addEventWrapper = document.querySelector(".add-event-wrapper ");
  this.addEventCloseBtn = document.querySelector(".close ");
  this.addEventTitle = document.querySelector(".event-name ");
  this.addEventFrom = document.querySelector(".event-time-from ");
  this.addEventTo = document.querySelector(".event-time-to ");
  this.addEventSubmit = document.querySelector(".add-event-btn ");
  this.addEventAnotherInput = document.querySelector(".another-input");
  this.eventsArr = this.$store.getters.getEventsArr;
  
  this.prev.addEventListener("click", this.prevMonth);
  this.next.addEventListener("click", this.nextMonth);
  this.addListner();
  this.todayBtn.addEventListener("click", this.todayBtnClick);
  this.dateInput.addEventListener("input", this.dateInputChange);
  this.gotoBtn.addEventListener("click", this.gotoDate);
  this.addEventBtn.addEventListener("click", this.addEventBtnClick);
  this.addEventCloseBtn.addEventListener("click", this.addEventCloseBtnClick);
  document.addEventListener("click", this.handleDocumentClick);
  this.addEventTitle.addEventListener("input", this.addEventTitleInput);
  this.addEventFrom.addEventListener("input", this.addEventFromInput);
  this.addEventTo.addEventListener("input", this.addEventToInput);
  this.addEventSubmit.addEventListener("click", this.addEventSubmitHandler);

  this.getActiveDay(this.today);
  this.updateEvents(this.today);
  this.initCalendar(); 
}
};
</script>

<style scoped>
  #app {
    font-family: 'Arial', sans-serif;
    color: #a39494;
  }

  .container {
    display: flex;
    flex-direction: column;
  }

  .main-container {
    display: flex;
    flex-direction: column;
  }

  .calendar-container {
    margin-bottom: 20px;
  }

  .right {
    margin-top: 20px;
  }

  @media (max-width: 600px) {
    .main-container {
      flex-direction: column;
    }
  }
  .calendar {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
  }

  .month {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .date {
    font-size: 18px;
    font-weight: bold;
  }

  .weekdays {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .weekdays div {
    width: 14.28%;
    text-align: center;
  }

  .days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  border: 1px solid #ddd; 
  border-radius: 4px; 
  padding: 10px; 
}

::v-deep .day {
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

::v-deep .day.prev-date {
  color: #999;
}

::v-deep .day.next-date {
  color: #999;
}

::v-deep .day.today {
  background-color: #f0f8ff;
}

::v-deep .day.active {
  background-color: #87ceeb;
  color: #fff;
}

::v-deep .day:hover {
  background-color: #87ceeb;
  color: #fff;
}
  .goto-today {
    margin-top: 20px;
  }

  .goto {
    display: flex;
    margin-bottom: 10px;
  }

  .date-input {
    width: 100px;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-right: 10px;
  }

  .goto-btn {
    padding: 8px 16px;
    background-color: #87ceeb;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .today-btn {
    padding: 8px 16px;
    background-color: #87ceeb;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .today-date {
    margin-top: 20px;
  }

  .event-day {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .event-date {
    font-size: 14px;
    color: #888;
    margin-bottom: 20px;
  }

  .events {
    margin-bottom: 20px;
  }

  .event {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 10px;
  }

  .title {
    display: flex;
    align-items: center;
  }

  .title i {
    margin-right: 5px;
    color: #87ceeb;
  }

  .event-title {
    margin: 0;
  }

  .event-time {
    color: #555;
  }

  .title{
    background-color: #516795;
    color: white;
  }

  .add-event-wrapper {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #516795;
    border: 1px solid #000000;
    border-radius: 8px;
    padding: 20px;
    z-index: 1000;
  }

  .add-event-wrapper.active {
    display: block;
  }

  .add-event-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .add-event-body {
    margin-bottom: 20px;
    background-color: #516795;
  }

  .add-event-input {
    margin-bottom: 10px;
    background-color:#87ceeb;
  }

  .add-event-input input {
    width: 100%;
    padding: 2px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  .add-event-footer {
    text-align: right;
    background-color: #516795;
  }

  .add-event-btn {
    padding: 8px 16px;
    background-color: #87ceeb;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .add-event {
    position: relative;
    width: 60px;
    height: 60px;
    background-color: #87ceeb;
    color: #fff;
    border: none;
    border-radius: 8px; 
    padding: 10px;
    cursor: pointer;
    box-shadow: -10px -10px 20px rgba(255, 255, 255, 0.1),
      10px 10px 20px rgba(0, 0, 0, 0.3);
    transition: background-color 0.3s ease;
    overflow: hidden;
  }

  .add-event::before {
    content: "+"; 
    font-size: 24px; 
    display: block;
    line-height: 1;
  }

  .add-event:hover {
    background-color: #255187; 
  }

  .add-event:hover::before {
    content: "✚"; 
  }

  .middle {
  flex: 1;
  margin: 0 20px;
  border: 2px solid #ddd; 
  border-radius: 8px;
  padding: 20px;
}
.right {
  flex: 1;
  margin: 0 20px;
  border: 2px solid #ddd; 
  border-radius: 8px;
  padding: 20px;
}
.store-data {
    border: 2px solid #87ceeb; 
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 20px;
  }

  .store-data p {
    margin: 0; 
  }

  section{
    margin: 20px;
  }
  @media only screen and (max-width: 600px) {
  

    .main-container {
      flex-direction: column;
    }

    .left, .right {
      margin: 0;
    }

    .calendar {
      padding: 10px;
    }

    .date {
      font-size: 16px;
    }

    .weekdays div {
      font-size: 12px;
    }

    ::v-deep .day {
      padding: 8px;
    }

    .goto-today {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }

  .goto {
    display: flex;
    margin-bottom: 10px;
  }

  .date-input {
    width: 100px;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-right: 10px;
  }

  .goto-btn{
  padding: 12px 16px 14px 16px; 
  background-color: #87ceeb;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
  .today-btn {
  padding: 12px 16px 14px 16px; 
  background-color: #87ceeb;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 8px;
}

  .today-btn {
    margin-left: 10px; /* Adjust as needed */
  }

    .event-day {
      font-size: 18px;
    }

    .event-date {
      font-size: 12px;
    }

    .events {
      margin-bottom: 10px;
    }

    .event {
      padding: 8px;
      margin-bottom: 8px;
    }

    .title i {
      font-size: 14px;
    }

    .add-event-wrapper {
      padding: 10px;
    }

    .add-event-input input {
      padding: 2px;
    }

    .add-event-btn {
      padding: 6px 12px;
      font-size: 12px;
    }

    .add-event {
      width: 40px;
      height: 40px;
      font-size: 16px;
    }
  }
</style>
