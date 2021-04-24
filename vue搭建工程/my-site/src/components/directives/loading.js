import loadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";
function getLoadingImg(el){
    return el.querySelector("img[data-role=loading]")
}
function createImg(){
    const img = document.createElement("img");
    img.src = loadingUrl;
    img.dataset.role = "loading";
    img.className = styles.loading;
    return img;
}
export default function (el,binding){
    const curImg = getLoadingImg(el);
    if(binding.value){
        if(!curImg){
            const img = createImg();
            el.appendChild(img);
        }
    }else{
        if(curImg){
            curImg.remove();
        }
    }
}