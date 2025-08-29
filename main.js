const icons = document.getElementsByClassName("heart-icons");

for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", function(event) {
    let heartElement = document.getElementById("heart-count");
    let currentCount = parseInt(heartElement.innerText);
    let newCount = currentCount + 1;
    heartElement.innerText = newCount;
  });
}

const btnCall = document.getElementsByClassName("btn-call");

for (let i = 0; i < btnCall.length; i++) {
    btnCall[i].addEventListener("click", function (event) {
        const card = event.target.parentElement;
        const actualParent = card.parentElement;
        const phoneNum = actualParent.querySelector(".phoneNum").innerText;
        const title = actualParent.querySelector(".title").innerText;

        const time = new Date().toLocaleTimeString();

        const innerCoin = document.getElementById("coin-count").innerText;
        let innerCoinInt = parseInt(innerCoin);

        if (innerCoinInt >= 20) {
            alert(`📞 Calling ${title} ${phoneNum}`);
            let debitCoin = innerCoinInt - 20;
            document.getElementById("coin-count").innerText = debitCoin;

            const historyContainer = document.getElementById("history-container");
            let div = document.createElement("div");
            div.innerHTML = `
                <div class="bg-blue-50 p-3 md:p-5 rounded-xl flex justify-between items-center">
                    <div>
                        <h3 class="font-bold text-sm md:text-base">${title}</h3>
                        <p class="text-gray-700 text-sm md:text-base">${phoneNum}</p>
                    </div>
                    <p class="text-xs md:text-sm text-gray-700">${time}</p>
                </div>`;
            historyContainer.append(div);
        } else {
            alert("Insufficient Balance");
        }
    });
}

// clear btn

const clearBtn = document.getElementById("clear-btn").
addEventListener("click",function(){
    document.getElementById("history-container").innerText = ""
})

document.addEventListener("DOMContentLoaded", function () {
  const copyCounter = document.getElementById("copy"); 
  let count = 0;

  const copyButtons = document.querySelectorAll("#copy-btn, .copy-btn");

  copyButtons.forEach(btn => {
    btn.addEventListener("click", function () {
      count++;
      copyCounter.querySelector("span").textContent = count + " copy";
      alert("Copy count is now: " + count);
    });
  });
});
