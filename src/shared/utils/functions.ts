import moment from 'moment';

const changeAppLanguage = (lng: string) => {
  localStorage.setItem('i18nextLng', lng);
};
const smoothScroll = (e: any, path: string) => {
  const elementId = path.replace('#', '');
  let scroll = document.getElementById(elementId);
  e.preventDefault();
  scroll && scroll.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
const ageCalc = () => {
  let bday = moment('2004-02-16', 'YYYY-MM-DD');
  return moment().diff(bday, 'years');
};

const gmail = 'ericdcamargo@gmail.com';
const handleGmailIconClick: string = `mailto:${gmail}`;

export { changeAppLanguage, smoothScroll, ageCalc, handleGmailIconClick };
