import { debounce } from "@/utils";
import eventBus from "@/eventBus";
import defaultGif from "@/assets/default.gif";
let imgs = [];
function setImage(img) {
  img.dom.src = defaultGif;
  const clientHeight = document.documentElement.clientHeight;
  const rect = img.dom.getBoundingClientRect();
  if (rect.top >= -rect.height && rect.top <= clientHeight) {
    //在视口范围内
    const tempImg = new Image();
    tempImg.onload = function() {
      img.dom.src = img.src;
    };
    tempImg.src = img.src; //缓存图片
    imgs = imgs.filter((i) => i !== img);
  }
}
function setImages() {
  //调用该函数，处理合适的图片
  for (const img of imgs) {
    setImage(img);
  }
}
eventBus.$on("mainScroll", debounce(setImages), 50);
export default {
  inserted(el, bindings) {
    const img = {
      dom: el,
      src: bindings.value,
    };
    imgs.push(img);
    setImages();
  },
  unbind(el) {
    imgs = imgs.filter((img) => img.dom !== el);
  },
};
