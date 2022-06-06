let chart = document.querySelector('.chart');
const myRequest = new Request('data.json');

fetch(myRequest)
            .then(response => response.json())
            .then(data => {
                for(const day of data) {
                    let dayBar = document.createElement('div');
                    chart.appendChild(dayBar);
                    dayBar.classList.add('day');
                    dayBar.innerHTML = 
                    `<div class="amount">$${day.amount}</div>
                    <div style="height:calc(2 * ${day.amount}px);" role="progressbar" class="bar"></div>
                    <small>${day.day}</small>
                  `
                }
            });
 

 

