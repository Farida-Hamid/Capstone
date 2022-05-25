const actors = [
  {
    image: './images/actor1.png',
    name: 'Mahmoud Al-Ghandour',
    bio: 'Participated in the play entitled (My Love, Who Are You), produced in 2021, where he presented the role of the artist (Abdul Halim Hafez)',
    role: 'Abdul Halim Hafez'
  },
  {
    image: './images/actor2.png',
    name: 'Marwa Eid',
    bio: 'An Egyptian actress, a graduate of the Higher Institute of Dramatic Arts, Department of Acting and Directing, she married scriptwriter Mohamed Ezz El Din',
    role: 'Kariman'
  },
  {
    image: './images/actor3.png',
    name: 'Alhan Al Mahdi',
    bio: 'An Egyptian singer and actress, born in Cairo, entered the National Youth Academy and participated in many works, including "Taht al-Saytara" and "The King"',
    role: 'So\'ad Hosny'
  },
  {
    image: './images/actor4.png',
    name: 'Hala Marzouk',
    bio: 'Egyptian actress, born in 1990 in Cairo, studied at the Higher Institute of Dramatic Arts, highlighted a number of plays, men and women, from the heart to the heart',
    role: 'Marwa'
  },
  {
    image: './images/actor5.png',
    name: 'Abdel Rahman Al-Qalyubi',
    bio: 'Abdel Rahman Al-Qalyubi is an Egyptian actor, who participated in the Rahim series in 2018, the selection series in 2020, and the movie Musa in 2021',
    role: 'Mohamed El Mougy'
  },
  {
    image: './images/actor6.png',
    name: 'Ahmed Wahba',
    bio: 'An Egyptian actor, a graduate of the Higher Institute of Theater Arts, participated in more than one dramatic work, including “The Hearts of the series “Al-Zaybak”',
    role: 'Baligh Hamdi'
  },
];

function participants(index) {
  const {
    image,
    name,
    bio,
    role
  } = actors[index];

  const main = document.querySelector('.container');
  const star = document.createElement('div');
  star.className = 'actor';
  star.innerHTML = `
    <img class="headshot" src=${image} alt="actor headshot">
    <div class="content">
      <h3>${name}</h3>
      <h4>${role}</h4>
      <hr>
      <p>${bio}</p>
    </div>`;

  main.appendChild(star);
}

for (let i = 0; i < 6; i += 1) {
  participants(i);
}
