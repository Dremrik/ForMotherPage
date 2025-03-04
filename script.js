document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector(".buttonn");
    var flowersContainer = document.getElementById("flowers");

    var wishes = [
        "✨ Бажаю щастя! ✨",
        "✨ Нехай всі мрії здійсняться! ✨",
        "✨ Любові та тепла! ✨",
        "✨ Гарного настрою! ✨",
        "✨ Успіхів у всьому! ✨",
        "✨ Нехай доля дарує тільки хороше! ✨",
        "✨ Радості кожен день! ✨",
        "✨ Посмішок та гармонії! ✨",
        "✨ Легкості в житті! ✨",
        "✨ Мирного неба! ✨",
        "✨ Нехай всі труднощі зникають! ✨",
        "✨ Добра та затишку! ✨",
        "✨ Тепла у серці! ✨",
        "✨ Вірних друзів поруч! ✨",
        "✨ Нехай везіння супроводжує завжди! ✨",
        "✨ Душевного спокою! ✨",
        "✨ Любові до себе! ✨",
        "✨ Величезного натхнення! ✨",
        "✨ Щасливих моментів! ✨",
        "✨ Здійснення мрій! ✨",
        "✨ Нехай життя буде яскравим! ✨",
        "✨ Справжнього кохання! ✨",
        "✨ Віри у себе! ✨",
        "✨ Нехай все буде так, як ти хочеш! ✨",
        "✨ Нових звершень! ✨",
        "✨ Гармонії та спокою! ✨",
        "✨ Достатку у всьому! ✨",
        "✨ Успіхів у справах! ✨",
        "✨ Добрих змін! ✨",
        "✨ Найкращого життя! ✨",
        "✨ Натхнення та мотивації! ✨",
        "✨ Сонячного настрою! ✨",
        "✨ Щасливих подій! ✨",
        "✨ Багато радості! ✨",
        "✨ Незабутніх вражень! ✨",
        "✨ Сили і витримки! ✨",
        "✨ Спокою та умиротворення! ✨",
        "✨ Теплих обіймів! ✨",
        "✨ Яскравих емоцій! ✨",
        "✨ Благополуччя! ✨",
        "✨ Щастя в кожній миті! ✨",
        "✨ Нехай всі негаразди зникнуть! ✨",
        "✨ Чудового настрою! ✨",
        "✨ Більше веселощів! ✨",
        "✨ Яскравих вражень! ✨",
        "✨ Тільки приємних новин! ✨",
        "✨ Достатку в домі! ✨",
        "✨ Радості у кожному дні! ✨",
        "✨ Нехай кожен день буде особливим! ✨",
        "✨ Справжніх друзів поруч! ✨",
        "✨ Легкості та гармонії! ✨",
        "✨ Посмішок без приводу! ✨",
        "✨ Чудових людей поруч! ✨",
        "✨ Великих досягнень! ✨",
        "✨ Світла у серці! ✨",
        "✨ Кохання та щирості! ✨",
        "✨ Справжнього жіночого щастя! ✨",
        "✨ Казкових моментів! ✨",
        "✨ Незабутніх подорожей! ✨",
        "✨ Величезного щастя! ✨",
        "✨ Нехай життя буде яскравим і насиченим! ✨"
    ];

    button.addEventListener("click", function() {
        flowersContainer.innerHTML = "";
        flowersContainer.style.display = "flex";

        for (let i = 0; i < 101; i++) {
            let rose = document.createElement("span");
            rose.classList.add("rose");
            rose.textContent = "🌹";

            let wish = document.createElement("p");
            wish.classList.add("wish");
            wish.textContent = wishes[i % wishes.length];

            // Для ПК (мышь)
            rose.addEventListener("mousedown", function() {
                wish.style.display = "block";
            });

            rose.addEventListener("mouseup", function() {
                wish.style.display = "none";
            });

            rose.addEventListener("mouseleave", function() {
                wish.style.display = "none";
            });

            // Для телефона (касание)
            rose.addEventListener("touchstart", function() {
                wish.style.display = "block";
            });

            rose.addEventListener("touchend", function() {
                wish.style.display = "none";
            });

            let roseContainer = document.createElement("div");
            roseContainer.appendChild(rose);
            roseContainer.appendChild(wish);

            flowersContainer.appendChild(roseContainer);
        }
    });
});