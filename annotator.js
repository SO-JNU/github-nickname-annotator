let nick = "nick";

let vcard = document.getElementsByClassName("vcard-details")[0];

let nickElement = document.createElement("li");
vcard.appendChild(nickElement);
nickElement.className = "vcard-detail pt-1 css-truncate css-truncate-target";
nickElement.setAttribute("itemProp", "nickName");
nickElement.setAttribute("show_title", "false");
nickElement.setAttribute("aria-label", nick);

let icon = document.createElement("svg");
nickElement.appendChild(icon);
icon.setAttribute("viewBox", "0 0 16 16");
icon.setAttribute("version", "1.1");
icon.setAttribute("width", "16");
icon.setAttribute("height", "16");
icon.setAttribute("aria-hidden", "true");

let svg = document.createElement("path");
icon.appendChild(svg);
svg.setAttribute("fill-rule", "evenodd");
svg.setAttribute("d", "");

let nickname = document.createElement("span");
nickElement.appendChild(nickname);
nickname.className = "p-label";
nickname.innerText = nick;
