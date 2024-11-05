'use strict';

const fn = () => {
  const mariia = { name: 'Mariia Khorunzha' };
  let rachel = { name: 'Rachel Amber' };

  mariia.name = 'Oksana';
  rachel.name = 'Chloe';

  rachel = { name: 'Max Caulfield' };

};

// mariia = { name: 'Marusya Churay' } TypeError: Assignment
// to constant variable.

// Висновок: Можливо змінювати значення полів і у константі, і у змінній,
// але змінювати посилання на об'єкт в константі неможливо.


module.exports = { fn };
