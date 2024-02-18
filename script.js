:root {
    --background-colour: #1f2940;
    --main-background-colour: #141b2d;
    --main-text: #ffffff;
    --hover-background: #28314b;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
body {
    min-height: 100vh;
    /*background-color: var(--main-background-colour);*/
}
a {
    text-decoration: none;
}
li {
    list-style: none;
}
h1,
h2 {
    color: var(--main-text);
    font-size: 30px;
}
h3 {
    color: var(--main-text);
}
.main-title {
    font-size: calc(14px + 1.9vw);
    margin-left: 0%;
}
.title {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 15px 10px;
    border-bottom: 2px solid #ffffff;
    margin-bottom: 20px;
}
.info-icon {
    width: calc(10px + 0.8vw);
    height: calc(10px + 0.8vw);
    margin-left: 20px;
    transition: all .2s;
    filter: grayscale(75%);
}
.info-icon:hover { 
    filter: brightness(125%);
    transform: scale(1.075);
    filter: grayscale(40%);
    cursor: pointer;
}
.home-icon {
    width: calc(15px + 2vw);
    height: calc(15px + 2vw);
    transition: all .2s;
    filter: invert(95%);
    margin-right: 20px;
}
.home-icon:hover { 
    filter: invert(75%);
    transform: scale(1.05);
    cursor: pointer;
}
.info-popup {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #141b2d;
    box-shadow: #141b2d 0 15px 30px -5px;
    padding: 20px;
    border: 1px solid #4d5281;
    border-radius: 15px;
    z-index: 9999;
    color: var(--main-text);
}
.btn {
    align-items: center;
    background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
    border: 0;
    border-radius: 8px;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    box-sizing: border-box;
    color: #FFFFFF;
    display: flex;
    font-family: Phantomsans, sans-serif;
    font-size: 18px;
    justify-content: center;
    line-height: 1em;
    max-width: 100%;
    min-width: 140px;
    padding: 3px;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    cursor: pointer;
    transition: all .3s;
}
.btn:active,
.btn:hover {
 outline: 0;
 transform: scale(1.05);
}

.btn span {
 background-color: rgb(5, 6, 45);
 padding: 16px 24px;
 border-radius: 6px;
 width: 100%;
 height: 100%;
 transition: 300ms;
}

.btn:hover span {
 background: none;
}

.btn:active {
 transform: scale(0.9);
}
#submit-button {
    background-image: linear-gradient(144deg,#40ffa6, #59d390 50%,#00DDEB);
    min-width: 140px;
    line-height: 0.5em;
    margin: 0 0 20px 12px;
}
#goals-button {
    background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
    line-height: calc(11px + 0.4vw);
    max-width: calc(12px + 6.5vw);
    min-width: calc(12px + 6.5vw);
    font-size: calc(8px + 0.7vw);
}
#reset-button {
    background-image: linear-gradient(144deg,#ffa640, #d37159 50%,rgb(235, 47, 0));
    line-height: calc(11px + 0.4vw);
    max-width: calc(12px + 6vw);
    min-width: calc(12px + 6vw);
    font-size: calc(8px + 0.7vw);
}
#reset-button2 {
    background-image: linear-gradient(144deg,#ff4640, #d37159 50%,rgb(235, 0, 90));
    line-height: 0.6em;
}
#reset-button3 {
    background-image: linear-gradient(144deg,#ff4069, #d39059 50%,rgb(235, 0, 90));
    line-height: 0.3em;
}
#reset-button4 {
    background-image: linear-gradient(144deg,#40ff40, #59d3aa 50%,rgb(0, 149, 235));
    line-height: 0.3em;
}
#apply-button {
    background-image: linear-gradient(144deg,#40ff40, #59d3aa 50%,rgb(0, 149, 235));
    line-height: 0.3em;
    margin: 0 0 15px 15px;
}
#close-button {
    margin: 15px 0 0 0;
    line-height: 0.4em;
}
#search-btn {
    background-image: linear-gradient(144deg,#ffffff, rgb(243, 66, 205) 100%,#00DDEB);
    line-height: 0.4em;
    margin: 15px 15px 15px 0px;
}
table {
    padding: 10px;
    color: var(--main-text);
}
th,
td {
    text-align: left;
    padding: 8px;
}
.side-menu {
    position: fixed;
    background: #f05462;
    width: 20vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
.side-menu .brand-name {
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.side-menu li {
    font-size: 24px;
    padding: 10px 40px;
    color: white;
    display: flex;
    align-items: center;
}
.side-menu li:hover {
    background: white;
    color: #f05462;
}
.container {
    position: absolute;
    right: 0;
    left:0;
}
.container .header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 10vh;
    background: var(--background-colour);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
}
.container .header .nav {
    width: 90%;
    display: flex;
    align-items: center;
}
.container .header .nav .search {
    flex: 4;
    display: flex;
}
.container .header .nav .search button {
    width: 40px;
    height: 40px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
}
.container .header .nav .user {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.container .header .nav .user img {
    width: 40px;
    height: 40px;
}
.container .header .nav .user .img-case {
    position: relative;
    width: 50px;
    height: 50px;
}
.container .header .nav .user .img-case img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.container .content {
    position: relative;
    margin-top: 10vh;
    min-height: 90vh;
    background: var(--main-background-colour);
}
.container .content .cards {
    padding: 8px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 25px;
}


/*
@media screen and (max-width: 770px) { 
    .cards {
        margin: 0 0px 0 -40px !important;
    }
    .card {
        margin-left: 50px !important;

    }
}
*/
@media screen and (max-width: 540px) { 
    .card {
        
    }
}




.container .content .card {
    width: 270px;
    height: 170px;
    background: var(--background-colour);
    margin: 20px 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 8px;
    transition: transform 0.3s;
    transition: background-color 0.6s ease-in-out;
}
.container .content .cards .card:hover {
    transform: scale(1.05);
    background-color: #384461;
    transition: background-color 0.1s ease-out  !important;
}

/* Cards */

.card {
    cursor: move;
    user-select: none;
    margin: 5px;
    padding: 10px;
    transition: transform 0.4s ease; 
    position: relative; /* Needed for absolute positioning of the line */
}
.drag-clone {
    position: fixed;
    z-index: 1000;
    pointer-events: none;
    opacity: 0.8;
    /* Match the styling of the original card */
    width: 270px; /* Match width of the card */
    height: 170px; /* Match height of the card */
    background-color: #384461;
    margin: 20px 10px; /* Match margin */
    padding: 10px; /* Match padding */
    display: flex; /* Make it a flex container */
    align-items: center; /* Align items vertically */
    justify-content: space-around; /* Space items evenly */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); /* Match box shadow */
    border-radius: 8px; /* Match border radius */
}
.card-line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
}
.card-titles {
    font-size: calc(12px + 0.5vw);
    margin-right: 55px;
    margin-bottom: 20px;
    font-weight: bold;
}
#calories-value, #protein-value, #fats-value, #carbs-value, #sugar-value, #fiber-value {
    font-size: calc(12px + 0.5vw);
}
.card-max-values {
    color: #bac5df;
    font-size: calc(12px + 0.5vw);
}
.icon {
    width: calc(20px + 1.5vw);
    height: calc(20px + 1.5vw);
}
.icon img {
    max-width: 100%;
    max-height: 100%;
}

.card-line.calories {
    background-color: #ff9f40; /* Red color for calories */
}

.card-line.protein {
    background-color: #ff6384; /* Blue color for protein */
}

.card-line.fats {
    background-color: #ffcd56; /* Green color for fats */
}

.card-line.carbs {
    background-color: #1BD2F3; /* Orange color for carbs */
}

.card-line.sugar {
    background-color: #9966ff; /* Purple color for sugar */
}

.card-line.fiber {
    background-color: #38DBAA; /* Pink color for fiber */
}
.chart-container {
    width: calc(60px + 2.5vw);
    height: calc(60px + 2.5vw);
}
.chart-canvas {
    width: 100%;
    height: 100%;
    display: block;
    background-color: red;
}
.custom-chart-style .chart-legend {
    color: #b11e1e;
}
.custom-chart-style .chart-tooltip {
    background-color: rgba(216, 29, 29, 0.8);
    border: 1px solid #d61515;
    border-radius: 5px;
    padding: 5px;
}

/* Food Search */

.underline-text1 {
    text-decoration: underline;
}
a:visited {
    color: white;
}
.food-search-list {
    color: white;
    padding: 5px 0 0 0px;
    font-size: 20px;
}
.food-details-lines {
    opacity: 25%;
    margin: 15px 0 15px 0;
}
.food-details-sep {
    margin: 0 0 10px 0;
}

.food-details-name-sep {
    margin: 10px 0 5px 0;
}
.food-details-name {
    font-size: 22.5px;
    font-weight: bold;
    margin-top: 10px;
}
.food-details-serving {
    font-size: 21px;
    color: #bac5df;
}

#food-input {
    width: 100%;
    box-sizing: border-box; 
    margin: 15px 0 0 0;
}
.search-food {
    flex: 1.4;
    background: var(--background-colour);
    min-height: 50vh;
    margin: 0 25px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 8px !important;
    padding: 0 20px 0 20px;
    transition: transform 0.3s ease;
    transition: background-color 0.5s ease-in-out;
}
.search-food:hover {
    background-color: var(--hover-background);
    transform: scale(1.005) !important;
    transition: background-color 0.1s ease-out;
}
#food-input-title {
    color: white;
    font-size: 20px;
    font-weight: bold;
}
.search-food-text {
    font-size: 15px;
    color: white;
}

/* Entries */

.recent-entries {
    transition: transform 0.1s ease;
    transition: background-color 0.5s ease-in-out;
}

.recent-entries:hover {
    background-color: var(--hover-background) !important;
    transform: scale(1.005) !important;
    transition: background-color 0.1s ease-out !important;
}



.entry1 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    border-radius: 8px;
    padding-left: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
    color: white;
    padding: 25px;
    transition: transform 0.5s ease; 
    transition: background-color 0.5s ease-in-out;
}
.entry1:hover {
    background-color: #1d253a;
    transform: scale(1.0125);
    transition: background-color 0.1s ease-out;
}
.entry h3 {
    flex: 1;
    font-size: 25px;
    margin-bottom: 5px;
    color: white;
    margin-right: 25px;
}
.entry p {
    margin-bottom: 5px;
}
.entries-line {
    opacity: 25%;
}
.entry-delete-button {
    background-image: linear-gradient(144deg,#ff4040, #d39a59 50%,rgb(235, 47, 0));
    line-height: 0.2em;
    max-width: 10%;
    font-size: 16px;
    margin-top: 10px;
    margin-left: 15px;
    margin-right: 15px;
}
#bold-entries {
    font-size: 21px;
}


























.confirmation-box {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #141b2d;
    box-shadow: #141b2d 0 15px 30px -5px;
    padding: 20px;
    border: 1px solid #4d5281;
    border-radius: 15px;
    z-index: 9999;
    color: var(--main-text);
}

.confirmation-content {
    background-color: #141b2d;
    padding: 10px;
    border-radius: 8px;
   
}
.confirmation-buttons {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
.confirmation-buttons button {
    margin: 10px;
}
.container .content .content-2 {
    min-height: 60vh;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
}
.container .content .content-2 .recent-entries {
    min-height: 50vh;
    flex: 5;
    background: var(--background-colour);
    margin: 0 25px 25px 25px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    flex-direction: column;
    border-radius: 8px !important;
}
.container .content .content-2 .add-new {
    flex: 2.5;
    background: var(--background-colour);
    min-height: 50vh;
    margin: -5px 25px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    flex-direction: column;
    border-radius: 8px !important;
    transition: transform 0.1s ease;
    transition: background-color 0.5s ease-in-out;
}
.container .content .content-2 .add-new table td:nth-child(1) img {
    height: 40px;
    width: 40px;
}
.add-new:hover {
    background-color: var(--hover-background) !important;
    transform: scale(1.005) !important;
    transition: background-color 0.1s ease-out !important;
}

/* Add Food */
.add-food-text {
    margin-left: 10px;
    font-size: 15px;
    color: white;
}
.form-group {
    display: flex;
    flex-direction: column;
    width: calc(50% - 0px);
    padding: 15px;
}
.form-group label {
    margin-bottom: 5px;
    color: var(--main-text);
    font-size: 20px;
    font-weight: bold;
}
input[type="number"], input[type="text"] {
    width: 100%;
    height: 45px;
    font-size: 18px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #a5a5a5;
    background-color: var(--main-background-colour);
    color: white;
    transition: transform 0.3s ease; 
}
input[type="number"]:hover, input[type="text"]:hover {
    background-color: #2f364d;
    transform: scale(1.03); 
}
input[type="number"]::placeholder, input[type="text"]::placeholder {
    color: rgb(139, 139, 139);
}
input[type="submit"] {
    margin-left: 15px;
}
.required-label::before {
    content: '* ';
    color: red;
}

/* Popups */

.popup {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #141b2d;
    box-shadow: #141b2d 0 15px 30px -5px;
    padding: 20px;
    border: 1px solid #4d5281;
    border-radius: 15px;
    z-index: 9999;
    color: var(--main-text);
    

}
.close {
    position: absolute;
    top: 5px;
    right: 15px;
    margin-left: 25px;
    cursor: pointer;
    color: rgb(255, 255, 255);
    font-size: 40px;
}
.new-day-popup-space {
    margin: 10px 0 10px 0;
    color: #bac5df;
    font-size: 17px;
}
.new-day-popup-text {
    font-size: 19px;
}


/* Footer */

footer {
    background-color: var(--background-colour);
    color: #fff;
    padding: 20px;
}
.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.footer-content p {
    margin: 0;
}
.footer-content ul {
    list-style: none;
    padding: 0;
}
.footer-content ul li {
    display: inline;
    margin-right: 10px;
}
.footer-content ul li:last-child {
    margin-right: 0;
}
.footer-content ul li a {
    color: #fff;
    text-decoration: none;
}
.footer-bottom {
    text-align: center;
    margin-top: 20px;
}

/* Animations */

.content-2 {
    animation: slide-in 0.4s forwards;
}
.search-food {
    animation: slide-in 0.5s forwards;
}
.add-new {
    animation: slide-in 0.6s forwards;
}
.box {
    animation: fade-in 0.6s ease-in-out;
}
.icon, .chart-container {
    animation: fade-in 0.6s ease-in-out;
}
.entry1:hover {

}

/* Fade in. animation: fade-in 0.2s ease-in-out;*/
@keyframes fade-in {
    0% {
      opacity: 0;
      transform: translateY(0px);
    } 100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Fade in. animation: fade-out 0.2s ease-in-out;*/
@keyframes fade-out {
    0% {
      opacity: 1;
      transform: translateY(0px);
    } 100% {
      opacity: 0;
      transform: translateY(0);
    }
  }


/* Slide in animation: slide-in 0.7s forwards;*/
@keyframes slide-in {
    from {
      opacity: 0;
      transform: translateY(100px);
    } to {
      opacity: 1;
      transform: translateY(0);
    }
  }

/* Adjustments for smaller screens */

.card1 {
    display: none;
}

@media screen and (max-width: 9900px) {
    #calories-icon {
        margin-right: -98px;
    }
    #protein-icon {
        margin-right: -95px;
    }
    #fats-icon {
        margin-right: -110px;
    }
    #carbs-icon {
        margin-right: -100px;
    }
    #sugar-icon {
        margin-right: -105px;
    }
    #fiber-icon {
        margin-right: -105px;
    }
}
@media screen and (max-width: 1900px) { 

    .btn span {
        padding: 7.5px 12px;

       }

       #goals-button {
        background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
        line-height: calc(11px + 0.4vw);
        max-width: calc(12px + 15vw);
        min-width: calc(12px + 15vw);
        margin-right: 15px;
        font-weight: bold;
    }
    #reset-button {
        background-image: linear-gradient(144deg,#ffa640, #d37159 50%,rgb(235, 47, 0));
        line-height: calc(11px + 0.4vw);
        max-width: calc(12px + 15vw);
        min-width: calc(12px + 15vw);
        font-weight: bold;

    }
    
}
@media screen and (max-width: 1200px) {
    .chart-container {
        width: calc(60px + 3.5vw);
        height: calc(60px + 3.5vw);
    }
}
.container {
    display: flex;
    flex-direction: column;
}

.search-food {
    order: 2;
}

.add-new {
    order: 1;
}

.recent-entries {
    order: 3;
}
@media screen and (max-width: 770px) { 
    .main-title {
        margin-left: -10px;
    }
    .info-icon {
        margin-left: 8px;
    }
    .container {
        flex-direction: row;
    }
    .search-food,
    .add-new {
        width: 50%;
    }
    .add-new {
        margin-top: 25px !important;
        margin-bottom: 25px !important;
    }
    .icon {
        margin-left: -35px;
    }
    .card-titles {
        margin: -10px 50px 0px 0px !important;
    }
    .chart-container {
        width: calc(60px + 4.5vw);
        height: calc(60px + 4.5vw);
        margin-left: 60px;
        margin-top: 20px;
    }
    #calories-value, #protein-value, #fats-value, #carbs-value, #sugar-value, #fiber-value {
    }
    .card-max-values {
    }

    #chart-calories {
    }
    #calories-icon {
        margin-right: -138px;
    }
    #protein-icon {
        margin-right: -138px;
    }
    #fats-icon {
        margin-right: -147px;
    }
    #carbs-icon {
        margin-right: -138px;
    }
    #sugar-icon {
        margin-right: -143px;
    }
    #fiber-icon {
        margin-right: -144px;
    }
    .card-titles {
        margin: 10px 10px 0 0;
    }
    #chart-calories, #chart-protein, #chart-fats, #chart-carbs, #chart-sugar, #chart-fiber {
        margin-left: 20px !important;
    }
    .recent-entries .entry1 {
        flex-direction: column;
        align-items: flex-start; /* Adjust alignment as needed */
        
    }
    
    .container .content .cards .card {
        width: calc(100px + 20vw);
        height: calc(50px + 13vw);
    }
    /*
    .container .content .cards .card {
        width: 180px; 
        height: 140px; 
    }*/
    .cards {
        
       /* align-items: center;*/
    }
    .container .content .cards {
        margin-bottom: -15px;
    }
    .recent-entries {
        margin-top: 25px !important;
    }
    .food-search-list {
        padding: 0px 0 5px 0px;
        font-size: 18px;
    }
.form-group label {
    font-size: calc(13px + 1vw);
}

.entry-delete-button {
    margin-left: -1px;
    }

    .new-day-popup-space {
        margin: 10px 0 10px 0;
        color: #bac5df;
        font-size: 17px;
    }
    .new-day-popup-text {
        font-size: 18px;
    }
    
    .new-day-popup-title {
        font-size: 23px;
    }

    .goals-popup-title {
        font-size: 24px;
    }

}

@media screen and (max-width: 538px) { 
    .container .content .cards .card {
        width: calc(100px + 18vw);
        height: calc(50px + 13vw);
    }
}
@media screen and (max-width: 422px) { 
    .container .content .cards .card {
        width: calc(100px + 13vw);
        height: calc(50px + 13vw);
    }
}

@media screen and (max-width: 370px) { 
    .chart-container {
        width: 70px !important;
        height: 70px !important;
        margin-right: -15px !important;
        margin-top: 20px;
    }
    .icon {
        margin-left: -90px;
    }
    .card-titles {
        margin: 10px 100px 0px 0px !important;
        
    }
    #chart-calories, #chart-protein, #chart-fats, #chart-carbs, #chart-sugar, #chart-fiber {
    }
    .card-max-values, #calories-value, #protein-value, #fats-value, #carbs-value, #sugar-value, #fiber-value {
        margin-left: 0px;
    }
    .container .content .cards .card {
        width: 125px !important; /* Adjust width as needed */
        height: 75px !important; /* Adjust height as needed */
    }
}

@media screen and (max-width: 1050px) {
    .side-menu li {
        font-size: 18px;
    }
}
@media screen and (max-width: 940px) {
    .side-menu li span {
        display: none;
    }
    .side-menu {
        align-items: center;
    }
    .side-menu li img {
        width: 40px;
        height: 40px;
    }
    .side-menu li:hover {
        background: #f05462;
        padding: 8px 38px;
        border: 2px solid white;
    }
}
@media screen and (max-width:536px) {
    .brand-name h1 {
        font-size: 16px;
    }
    .container .content .cards {
        justify-content: center;
    }
    .side-menu li img {
        width: 30px;
        height: 30px;
    }
    .container .content .content-2 .recent-entries table th:nth-child(2),
    .container .content .content-2 .recent-entries table td:nth-child(2) {
        display: none;
    }
}








