function loadPhones() {
    fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
        .then((res) => res.json())
        .then((data) => getPhones(data));
}
const getPhones = (data) => {
    const phones = data.data;
    const cardContainer = document.getElementById("phones-container");
    phones.map((phone) => {
        const { image, phone_name } = phone;
        const card = document.createElement("div");
        card.classList.add("col-lg-3");
        card.innerHTML = `
                                <div class="card m-2 border-0 shadow">
                                    <div class="p-3">
                                        <img
                                            src="${image}"
                                            class="card-img-top"
                                            alt="..."
                                        />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">${phone_name}</h5>
                                        
                                        <a href="#" class="btn btn-primary"
                                            >Go somewhere</a
                                        >
                                    </div>
                                </div>
        `;
        cardContainer.appendChild(card);
    });
};
loadPhones();
