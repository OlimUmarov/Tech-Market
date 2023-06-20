import { useState } from "react";
const Artronaut = require("../../../assets/images/atronaut.png")


type Props = {}

export const Comments = (props: Props) => {
    const [comment,setComment] = useState<boolean>(false)


    return (
      <div className="mb-10 mt-10 flex-center" style={{ minHeight: '300px', height: '100%' }}>
      {comment ? (
         <p className="text-xs leading-6"  >
         Krossovkalar erkaklar iziki-har kuni uchun asosiy kundalik erkaklar va
         o'smirlar poyabzali uchun ajoyib variant: maktabga, ishga va sport
         zaliga. Erkaklar uchun engil va zamonaviy bo'yoqlar. 2023 yil bahor va
         yoz uchun. Bu shamollatiladigan to'qimachilik ustki qismi bilan nafas
         oladigan materialdan tayyorlangan zamonaviy, eng qulay va engil juftlik.
         Izy crassulace yozda, kuzda va bahorda shahar bo'ylab sayr qilish uchun
         juda yaxshi. Moda iziki boost Cross sport zalida yugurish yoki mashq
         qilish uchun javob beradi. Ranglar va o'lchamlarning xilma-xilligi
         sizning garderobingizning har qanday elementi bilan uyg'un
         kombinatsiyani tanlashga imkon beradi. Qulay ko'p rangli iziki
         krossovkalari turli yoshdagi odamlar orasida juda mashhur. Izzy boost
         shifokorlar va shifokorlar uchun ajoyib echimdir, chunki ular tibbiy
         shaklga (asal) mos keladi. Erkaklar Yeezy, yozgi, sport, Boost
         tagliklari uniseksga o'xshaydi, shuning uchun ular ayollar va qizlar
         uchun mos bo'lishi mumkin. Katta silikon taglikdagi latta to'rli xochlar
         (paypoqqa o'xshash) qo'pol erlarda (tuproq, asfalt, zal) foydalanish
         uchun mo'ljallangan va qayerga borsangiz ham qulay bo'ladi: shahar
         bo'ylab sayr qilish, yugurish, mashq qilish, ofisda ishlash yoki
         maktabga borish, piyoda yurish yoki sayohat qilish. Krossovkalar uzoq
         vaqt xizmat qilishi, yurish yoki yugurish uchun qulay va qulay bo'lishi
         bilan qadrlanadi. sport zalida mashq qilish, yugurish, zal, fitnes,
         raqs, yoga, turizm, Pilates, sport zalida jismoniy tarbiya (maktab
         o'quvchilari uchun smenada) va boshqa sport turlari bilan shug'ullanish
         uchun qulay, anatomik jihatdan to'g'ri bolalar va o'smirlar sport
         poyabzali. Platformaning baland qovurg'ali toymasin tagligi yuqori
         aşınma qarshilik, elastiklik va moslashuvchanlik bilan ajralib turadigan
         yuqori texnologiyali termoplastik kauchukdan (PVC) tayyorlangan. Kroslar
         tug'ilgan kuni, 23 fevral yoki 14 fevral bo'ladimi, har qanday bayram
         uchun sevikli, dada, aka-uka yoki shunchaki do'st uchun ajoyib sovg'a
         bo'lishi mumkin. Ular uzoq vaqt xizmat qilishlari, yurish yoki yugurish
         uchun qulay va qulay bo'lishlari bilan qadrlanadi. E'tibor bering!
         O'lchamga o'ting! Tanlashda biz o'lcham panjarasidan foydalanishni
         tavsiya etamiz. Katta va kichik o'lchamlar.
       </p> 
      ): (
        <div className="flex flex-col justify-center items-center gap-3">
        <img src={Artronaut} alt="*" className="w-32 h-32 object-cover" />
        <h1 className="text-xl font-medium">Sharhlar hali qoshilmadi</h1>
        <p className="text-sm">Sharhlar qoshilmaganligi sababini bilish uchun operator bilan boxlanishingiz mumkin</p>
    </div>
      )}
       
      </div>
    );
}