<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation ,Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import {defineComponent} from "vue";
import {Mate} from "@/components/Mate";
import {onMounted, ref} from "vue";

import '../assets/css/firstpage.css';
import '../assets/css/secondpage.css';
import '../assets/css/thirdpage.css';
import '../assets/css/fourthpage.css';
import '../assets/css/sixthpage.css';


export default defineComponent({
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const mates = ref<Mate[]>([]);
    const expo = ref<string[]>([]);

    onMounted(() => {

      initMate()
      initExpo()


    })

    const initMate = () =>
    {
      let Anne = new Mate("Annie","/assets/images/mates/anne.png", "Annie est la fondatrice et la directrice de l'association. Ancienne bio-esthéticienne, elle s'est reconvertie en tant que infirmière. ", "L'humain est au cœur de nos professions,nous restons donc des soignants, non des gens spéciaux " )
      let Yaye = new Mate("Yaye","/assets/images/mates/yaye.png", "Yaye est la co-fondatrice de l'association. Certifiée en pratique snoezelen methode d'accompagnement sensoriel  et bien être et diplômée d'état d'aide médico-psychologique", "Nos actions ne sont pas des vacances encore moins du tourisme ou des parties de rigolades, même si la bonne humeur nous accompagne! C'est un engagement de l'âme, nous donnons un peu de nous même à chaque voyage." )
      let Minette = new Mate("Minette","/assets/images/mates/minette.png", "co-fondatrice et trésorière de l'association. Architecte d'intérieure et aide-soignante en soins palliatifs", "L'amour est un guide dans ma vie. Bien plus qu'une étincelle belle, douce et accomplie. Il m'a appris à me servir de ses ailes." )
      let Martine = new Mate("Martine Gomis","/assets/images/mates/martine.png", "Martine Gomis secrétaire de l'association, assistante spécialisée dans le milieu du handicap, et infirmière.", "Ensemble, vivons des moments uniques, grandissons chaque jour, pour offrir le meilleur à chacun." )

      mates.value.push(Anne)
      mates.value.push(Yaye)
      mates.value.push(Minette)
      mates.value.push(Martine)


    }

    const initExpo = () =>
    {
        let first = "/assets/images/expo1.jpg"
        let second = "/assets/images/expo2.jpg"
      let third = "/assets/images/projet5.jpg"

        expo.value.push(first)
        expo.value.push(second)
        expo.value.push(third)

    }

    const openPDF = () =>
    {
      window.open("/assets/pdf/RAPPORT-AMP-AEH.pdf")
    }


    return {
      modules:[Navigation],
      mates,
      expo, openPDF
    }


  }

})

</script>

<template>
  <div class="content">

    <div class="first_page">
      <div class="first_page_filter">
        <div class="first_page_information">
          <img src="../assets/logo/logo1.png" >
          <p>
            Evail | Humanitaire
          </p>
        </div>
      </div>
    </div>

    <div class="second_page">
      <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; flex: 1; width: 100vw; padding : 1vh;">
        <p class="second_page_title">
          Trois Femmes
        </p>
        <p class="second_page_title">
          Une même ambition
        </p>
      </div>
      <div class="second_page_information">
        <p class="second_page_subtitle" style="background-color: var(--secondary-color); height: 70vh; display : flex; justify-content: center; align-items: center;padding: 3vw;">Notre histoire</p>
        <div class="second_page_text">

          <p class="second_page_paragraph">
            EVAIL humanitaire est née d’une amitié, d’un rêve commun : celui d’aider les autres aux delà des frontières. Pour concrétiser ce projet Annie, Minette et Yaye l’ont porté durant deux ans.
          </p>
          <p class="second_page_paragraph">
            Pour concrétiser ce projet Annie, Minette et Yaye l’ont porté durant deux ans. Elles se sont données comme premier objectif de voyager au Sénégal. En France, elles parlent de ce projet à leurs collègues. Sitôt, une équipe de soignants est montée.
          </p>
          <p class="second_page_paragraph">
            Les actions se multiplient telles que le démarchage en pharmacies partenaires ou pour des médicaments, en magasin pour des fournitures scolaire ou bien en recherche de bénévoles ou encore en organisation de réunion et de rencontres promotionnelles pour l'association.
          </p>
          <p class="second_page_paragraph">
            Ce premier voyage relevé avec brio, ce trio ne souhaite pas s’arrêter en si bon chemin et compte maintenant une équipe de plus de 30 soignants ainsi que de nouvelles actions à travers la France et le monde entier.
          </p>

        </div>
        <div class="second_page_image">
          <img src="../assets/images/troisfemmes.jpg" style="">
        </div>
      </div>
    </div>

    <div class="third_page">
      <div class="third_page_title">
      <p class="second_page_title">Une équipe pluri-professionnelle</p>
      </div>

      <div class="third_page_swiper_container">



          <div class="swiper-button-prev swiper-button-prev-1"></div>


      <swiper
          :modules="modules"
          :navigation="{
                                    nextEl: '.swiper-button-next-1' ,
                                    prevEl: '.swiper-button-prev-1'
                                    }"
          :pagination="{ clickable: true }"
          :slides-per-group="1"
          :slides-per-view="1"
          :space-between="50"
          :loop="true"
          class="third_page_swiper"
          style="width: 80vw"
      >
        <swiper-slide v-for="mate in mates" :key="mate.name" style="justify-content: center; align-items: center;display:flex;">
          <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; width: 100%; height: 100%;">
            <p class="third_page_swiper_name" >{{mate.name}}</p>
            <img class="third_page_swiper_image" :src="mate.imagePath" >

            <p class="third_page_swiper_description" >{{mate.description}}</p>
            <p class="third_page_swiper_citation" >
              &ldquo;{{ mate.citation }}&rdquo;
            </p>          </div>
        </swiper-slide>


      </swiper>




          <div class="swiper-button-next swiper-button-next-1"></div>



      </div>

    </div>


    <div class="fourth_page">

      <p class="fourth_page_title">Nos actions</p>
      <div class="fourth_page_information">
        <div class="fourth_page_image">
          <img src="../assets/images/car.jpg">
        </div>

          <div class="fourth_page_text">
            <p class="second_page_title">Soigner, un devoir.</p>
            <p class="fourth_page_paragraph">Notre souhait profond est de soigner, dans le champs de nos compétences chaque personne qui en a le besoin.</p>
            <p class="fourth_page_paragraph">Animé par ce devoir, nous sommes aujourd’hui une équipe composée d’infirmiers, médecins, d’aides-soignants  et bien d'autres professionnels de la santé publique. </p>
            <p class="fourth_page_paragraph">Nous voyageons depuis peu et rencontrons les populations sur le terrain pour comprendre leurs enjeux sanitaires et les préoccupations des habitants. Nous partons pendant deux semaines, dans chaque ville, même les plus reculées où nous faisons de la prévention sur des pathologies propres aux pays confrontés aux développements  et soignons des maladies qui ne nécessitent pas d’interventions chirurgicales. </p>
            <p class="fourth_page_paragraph">A terme, nous souhaiterions en collaboration avec les localités, permettre aux pays d’avoir des clés nécessaires pour être auto-suffisants en matière de préventions et de dépistage .  Donc d’encourager les initiatives locales et pérenniser l’éducation thérapeutique reçue. </p>
            <p class="fourth_page_plus" @click="openPDF" >En savoir plus</p>
            <div class="counter_content" >
              <div class="counter-container">
                <div class="counter">
                  <div class="digit">1</div>
                  <div class="digit">3</div>
                  <div class="digit">3</div>
                  <div class="digit">6</div>
                </div>
                <p>CONSULTATION</p>
              </div>

              <div class="counter-container">
                <div class="counter">
                  <div class="digit">0</div>
                  <div class="digit">2</div>
                  <div class="digit">5</div>
                  <div class="digit">0</div>
                </div>
                <p>MÉDICAMENTS RÉCOLTÉS</p>
              </div>

              <div class="counter-container">
                <div class="counter">
                  <div class="digit">0</div>
                  <div class="digit">0</div>
                  <div class="digit">3</div>
                  <div class="digit">5</div>
                </div>
                <p>SOIGNANTS MOBILISÉS</p>
              </div>
            </div>



          </div>

      </div>
    </div>

    <div class="fifth_page">




        <swiper
            :modules="modules"
            :navigation="{
                                    nextEl: '.swiper-button-next-2' ,
                                    prevEl: '.swiper-button-prev-2'
                                    }"
            :slides-per-group="1"
            :slides-per-view="1"

            :loop="true"
            style="width: 100vw;position: relative;"
        >

          <div class="swiper-button-prev swiper-button-prev-2"></div>
          <div class="swiper-button-next swiper-button-next-2"></div>
          <swiper-slide v-for="image in expo" :key="image">
            <div
                style=" width: 100vw; height:82vh; display: flex; justify-content: center; align-items: center;">
              <img :src="image" style="width: 100%; height: 100%; object-fit: cover; user-select: none">
            </div>
          </swiper-slide>

        </swiper>









    </div>

    <div class="sixth_page">
      <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;  width: 100vw; padding : 2vw; background-color: var(--primary-color); ">
        <p class="second_page_title" style="color: white;">Découvrez nos voyages humanitaires.</p>
        <p class="second_page_title" style="color: white">L’aide ne connais pas de frontières.</p>
      </div>

      <div class="timeline">
        <div class="event">
          <div class="circle">2024</div>
          <div class="event-text">Casamance</div>
        </div>
        <div class="event">
          <div class="circle">2025</div>
          <div class="event-text">Sénégal</div>
        </div>
        <div class="event">
          <div class="circle">2025</div>
          <div class="event-text">Togo</div>
        </div>
        <div class="event">
          <div class="circle">2025</div>
          <div class="event-text">Cameroun</div>
        </div>
        <div class="event">
          <div class="circle">2026</div>
          <div class="event-text">Inde</div>
        </div>
      </div>
      <div style="display: flex; flex-direction: row; width: 100vw; align-items: center; justify-content: center">
        <div style="display: flex; flex-direction: row; flex: 2;">
          <div class="disappear_on_mobile" style="flex: 0.5; background-color: var(--secondary-color); display : flex; justify-content: center; align-items: center; padding: 2vw">
            <p class="second_page_subtitle" style="color: white">Du Casamance aux parcelles de Dakar </p></div>
          <div class="second_page_text" style="flex: 1;color: black; display: flex; justify-content: center">
            <p class="second_page_paragraph">Ce premier voyage nous a permis d’être accueillies par les habitants des villages en collaboration avec l’association AMP présente sur place, le consulat général et les autorités du Sénégal.</p>
            <p class="second_page_paragraph">Nous avons majoritairement fait de la prévention sur des pathologies comme le diabète, l’hypertension artérielle, le cholestérol, les IST, les douleurs articulaires, l’arthrite, l’arthrose ainsi que les problèmes oculaires. </p>
            <p class="second_page_paragraph">Nous avons également soignés beaucoup de blessures liées à ces maladies. Notre équipe plus que jamais soudés par les difficultés n’a pas eu peur de se confronter à la dureté de la vie des habitants</p>

          </div>
        </div>

        <div style="flex:1;">

          <div style="display: flex; flex-direction: row; justify-content: center; align-items: center">
            <div style="display: flex; flex-direction: column; flex: 1">
              <div class="big_image">
                <img src="/assets/images/projet7.jpg" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
              <div class="little_image">
                <img src="/assets/images/projet2.jpg" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
            </div>

            <div style="display: flex; flex-direction: column; flex: 1">
              <div class="little_image">
                <img src="/assets/images/projet3.jpg" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
              <div class="big_image" >
                <img src="/assets/images/projet4.jpg" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
            </div>

            <div style="display: flex; flex-direction: column; flex: 1">
              <div class="middle_image" >
                <img src="/assets/images/projet5.jpg" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
              <div class="middle_image">
                <img src="/assets/images/projet6.jpg" style="width: 100%; height: 100%; object-fit: cover;">

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="seventh_page">
      <div class="second_page_title">Nous soutenir</div>
      <p style="font-size: 2vw; margin-bottom: 1vh">Vos dons sont essentiels pour rendre possible nos actions humanitaires.</p>
      <p style="font-size: 1.5vw; font-weight: bold">Faire un don, c'est permettre les soins sans frontières.</p>

      <img src="/assets/images/logo2.png" style="width: 20vw; height: auto; margin-top: 2vh;margin-bottom: 2vh">

      <a class="donate" href="https://www.payasso.fr/association-evail-humanitaire/don" style=" background-color: var(--primary-color); text-decoration: none; padding: 10px; color: white; display: flex; flex-direction: column;
       justify-content: center; align-items: center; border-radius: 2vw">
        <p style="font-size: 3vw; margin: 0;">Faire un don</p>
        <p style="font-size: 1vw; margin: 0;">Vos dons sont déductibles à hauteur de 66% des impôts sur le revenu.</p>
        <p style="font-size: 1vw; margin: 0;"> Pour 100€ donnés, votre don vous revient en réalité à 34€.</p>

      </a>

      <p style="font-size: 1.2vw; color: #333; font-style: italic; line-height: 1.5; margin-top: 1vw;">
        « S'ouvrir un peu aux uns, aux autres permet de faire tomber nos barrières et ainsi de réduire le malheur et l'indifférence. »
      </p>
      <p style="font-size: 1vw;">Présidente d'Evail</p>

    </div>

    <div style="background-color: var(--primary-color)">
      <div class="second_page_subtitle" style="color: white; padding: 1vw; display: flex; justify-content: center; align-items: center">
        Contact
      </div>

      <div style="display: flex; flex-direction: row; color: white; justify-content: center; align-items: center; margin-bottom: 0.5vw;">
        <img src="../assets/logo/mail-logo.png" style="width: 2.5vw; height: auto; margin-right: 0.5vw;">
        <p style="margin: 0; font-size: 1vw">Contact.evailhumanitaire@gmail.com</p>
      </div>

      <div style="display: flex; flex-direction: row; color: white; justify-content: center; align-items: center; ">
        <img src="../assets/logo/insta-logo.png" style="width: 2.5vw; height: auto; margin-right: 0.5vw;">
        <p style="margin: 0; font-size: 1vw">@evail_humanitaire</p>
      </div>



    </div>




  </div>
</template>


<style scoped>
.content
{
  width: 100vw;
  height: auto;
  display : flex;
  flex-direction : column;
  flex-wrap: wrap;

  overflow: auto;
  overflow-x: hidden;


}

.donate:hover
{
  background-color: var(--secondary-color) !important;
  padding-right: 15px !important;
  padding-left: 15px !important;
}


.counter_content
{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}


.counter-container {
  display: inline-block;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 20vw;
  padding-top: 5vh;
}

@media (max-width: 500px) {

  .counter-container
  {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2vh;
  }

  .counter-container p
  {
    font-size: 2vw;
  }

  .digit
  {
    width: 5vw;
    font-size: 5vw;
  }

  .counter_content
  {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }




;

}

.counter-container p {
  font-size: 1vw;
  color: black;
}

.counter {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.digit {
  width: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5vw;
  color: red;
  border: 0.2vw solid red;
  margin: 0 0.2vw;
  font-weight: bold;
}

@keyframes count-animation {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}

.digit {
  /* Ajoute l'animation ici */
  animation: count-animation 0.5s ease-in-out forwards;
}

.digit.animate {
  animation: count-animation 0.5s ease-in-out forwards;
}



.fifth_page
{
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  color: black;

  //border-top: 1vh solid var(--primary-color);
  //border-bottom: 5vh, solid var(--primary-color);
  //padding : 2vw;
}

.swiper-button-next-2, .swiper-button-prev-2 {
  position: absolute !important; /* Annule le positionnement absolu */
  width: auto !important; /* Annule la largeur par défaut */
  height: auto !important; /* Annule la hauteur par défaut */
  margin-top: 0 !important; /* Annule le marges par défaut */
  z-index: 10 !important; /* Réinitialise le z-index */
  color: var(--primary-color);
  padding: 2vw;

}



.swiper-button-next-2 {
  right: 10px;
  font-weight: bold;
}

.swiper-button-prev-2 {
  left: 10px;
  font-weight: bold;
}



.seventh_page
{
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  color: black;
  padding: 3vw;
}



</style>