import MobileDetect from 'mobile-detect';
import Desktop from '../components/deviceDetect/Desktop.vue';
import Mobile from '../components/deviceDetect/Mobile.vue';

function checkDevice() {
  const MD = new MobileDetect(window.navigator.userAgent);
  MD.mobile();

  const deviceFromBody = window.getComputedStyle(document.querySelector('body'), ':before').content;
  console.log(deviceFromBody);

  if (deviceFromBody === 'desktop') {
    return Desktop;
  }

  return Mobile;
}
export default checkDevice();
