//girdiler
var gırılen;
let secılen;
//cıktılar
var eklenen;
var btntamamla
var btnsıl;

function listeyekle()
{
 gırılen = document.getElementById("YAPILACAK").value;

  if(gırılen != "")
    {
      eklenen = document.createElement("li");// li tıpınde nesne olusturuldu.
      document.getElementById("listyapılacak").appendChild(eklenen);// ul altında li' ye cocuk eleman olarak ekle.
      eklenen.innerHTML= gırılen;

      btntamamla = document.createElement("img");// img tıpınde nesne olusturduk.
      eklenen.appendChild(btntamamla);
      btntamamla.setAttribute("src","resimler/onay.png");// bu metot ile nesneye ozellık eklıyoruz.
      btntamamla. setAttribute("id","resimtamamla");
      btntamamla. setAttribute("width","30px");
      btntamamla. setAttribute("height","30px");
      btntamamla. addEventListener('click',onayla);/* olay dınleyıcı,tıklama olayını dınle, bulundugu zaman 
      TAMAMLA'yı calıstır.
      --- btnsil nesnesine gecmeden once btntamamla'nın TAMAMLA olayını eklemek lazım yoksa fonksıyonu
        bulamadıgı ıcın btnsil nesnesını calıstırmıyor.
      */

      btnsıl = document.createElement("img");// img tıpınde nesne olusturduk.
      eklenen.appendChild(btnsıl);
      btnsıl.setAttribute("src","resimler/iptal.png");// bu metot ile nesneye ozellık eklıyoruz.
      btnsıl. setAttribute("id","resimsil");
      btnsıl. setAttribute("width","30px");
      btnsıl. setAttribute("height","30px");
      btnsıl. addEventListener('click',xdelete);//olay dınleyıcı,tıklama olayını dınle, bulundugu zaman TAMAMLA'yı calıstır.

    }
    else
    {
        alert("aktivite ekleyin");
    }
}

    function onayla(event)
    {
      /*js kodlar yukarıdan aşagıya dogru okunur onun ıcın onayla functıonunun 6. satırının yerini değiştirirsek
          programın calısma seklı değisir, **** onemlı bak **** onayla & xdelete yapımına ****
      */
      eklenen= document.createElement("li");
      document.getElementById("listetamamlanan").appendChild(eklenen);
      secılen = event.currentTarget.parentNode;
      secılen.childNodes[1].style.display="none";//onay butonu tamamlananda gorunmesın
      secılen.childNodes[2].setAttribute("onclick","xdelete(event)");// [2] yanı ıptal butonu tamanlananda da calıssın.
      eklenen.innerHTML = secılen.innerHTML;

      xdelete(event);// tamamlanan listesine tasırken dığer listede de bırakmasın
    }

    function xdelete(event)
    {
      secılen = event.currentTarget.parentNode; //*** cuurenttarget"o anda secili olan hedefi" parentNode"ebebeyını'li'sini "
      secılen.remove();
    }
