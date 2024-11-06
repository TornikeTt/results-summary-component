let skills = document.querySelector(".skill-container");

async function fetchData() {
    const response = await fetch("./data.json");
    const data = await response.json();

    data.forEach((each) => {
        skills.innerHTML += ` 
                        <div class="skill-item ${each.category.toLowerCase()}">
                            <div class="leftline"></div>
                            <div class="rightline"></div>

                            <div class="skill-info">
                                <img
                                    src="${each.icon}"
                                    alt="reaction icon"
                                />
                                <p class="skill-name">${each.category}</p>
                            </div>

                            <div class="skill-points">
                                <span class="current-points">${
                                    each.score
                                } / </span>
                                <span class="max-points">100</span>
                            </div>
                        </div>
        `;
    });
}

fetchData();
