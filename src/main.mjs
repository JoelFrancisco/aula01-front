        /*
        <div class="user1-message">
            <div>Atendente diz:</div>
            <div class="message-item">Blabla blabla blabla</div>
        </div>

        <div class="user1-message">
            <div>Atendente diz:</div>
            <div class="message-item">Blabla blabla blabla</div>
        </div>

        <div class="user2-message">
            <div class="user2-message-wrapper">
                <div>Você diz:</div>
                <div class="message-item">Blabla blabla blabla</div>
            </div>
        </div>

        <div class="user2-message">
            <div class="user2-message-wrapper">
                <div>Você diz:</div>
                <div class="message-item">Blabla blabla blabla</div>
            </div>
        </div>
        */

function createLabel(name) {
    const label = document.createElement('div');
    label.innerHTML = `${name} diz:`;
    return label;
}

function createTextMessage(text) {
    const message = document.createElement('div');
    message.classList.add("message-item");
    message.innerHTML = text;
    return message;
}

function createUserMessage(text) {
    const label = createLabel("Você");
    const textMessage = createTextMessage(text);

    const innerWrapper = document.createElement('div');
    innerWrapper.classList.add("user2-message-wrapper");

    innerWrapper.appendChild(label);
    innerWrapper.appendChild(textMessage);

    const outerWrapper = document.createElement('div');
    outerWrapper.classList.add("user2-message");

    outerWrapper.appendChild(innerWrapper);

    return outerWrapper;
}

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const { value: text } = document.querySelector(".textbox");

    const message = createUserMessage(text);

    const mainBody = document.querySelector("main");
    mainBody.appendChild(message);
});