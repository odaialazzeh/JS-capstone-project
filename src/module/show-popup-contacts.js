const showPopupContacts = () => {
  const mainSection = document.querySelector('header');
  const cont = document.createElement('div');
  cont.className = 'cont-popup';

  const closeIcon = document.createElement('a');
  closeIcon.className = 'cont-popup-close-icon fa fa-times';
  cont.appendChild(closeIcon);

  closeIcon.addEventListener('click', () => {
    cont.remove();
  });

  const div = document.createElement('div');
  div.className = 'cont-popup-div';
  cont.appendChild(div);

  const p1 = document.createElement('h2');
  p1.textContent = 'Contacts:';
  div.appendChild(p1);

  const p2 = document.createElement('p');
  p2.className = 'cont-popup-p';
  p2.innerHTML = ` 
  👤 Odai Alazzeh <br>
      GitHub: @odaialazzeh <br>
      Twitter: @odaialazzeh4 <br>
      <a href="https://www.linkedin.com/in/odai-alazzeh-01546024a/">LinkedIn</a> <br>
      <br>
  👤 Sergiy Shkolnik <br>
    GitHub: @SergSkol <br>
    Twitter: @sps676 <br>
    <a href="https://www.linkedin.com/in/sergiy-shkolnik-7801a53/">LinkedIn</a> <br>
    `;
  div.appendChild(p2);

  mainSection.appendChild(cont);
};

export default showPopupContacts;
