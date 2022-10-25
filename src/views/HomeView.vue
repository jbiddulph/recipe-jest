<template>
  <JetHeader />
  <div class="home max-h-screen">
    <WelcomeComponent msg="Welcome to Just Eat Takeaway Recipes" />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Non tellus orci ac
      auctor. At augue eget arcu dictum. Feugiat nisl pretium fusce id velit ut
      tortor pretium viverra. Egestas sed sed risus pretium quam vulputate
      dignissim suspendisse. Hendrerit dolor magna eget est lorem ipsum dolor
      sit. Nec ullamcorper sit amet risus. Libero enim sed faucibus turpis in eu
      mi. Ut morbi tincidunt augue interdum. Enim sed faucibus turpis in. Sit
      amet aliquam id diam maecenas. Sem fringilla ut morbi tincidunt augue
      interdum velit. Pharetra convallis posuere morbi leo urna molestie at
      elementum. Imperdiet nulla malesuada pellentesque elit eget gravida cum.
      Semper eget duis at tellus at urna condimentum. Habitasse platea dictumst
      quisque sagittis purus sit amet volutpat consequat. Cursus eget nunc
      scelerisque viverra mauris in aliquam sem fringilla.
    </p>
    <p>
      Lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Donec
      ultrices tincidunt arcu non sodales neque sodales ut. Aliquet risus
      feugiat in ante metus dictum at tempor. Orci a scelerisque purus semper
      eget duis at tellus. Felis eget velit aliquet sagittis id consectetur
      purus ut. Facilisi morbi tempus iaculis urna id volutpat lacus. Ut diam
      quam nulla porttitor massa. Lectus mauris ultrices eros in. Feugiat
      vivamus at augue eget arcu dictum varius. Enim tortor at auctor urna nunc
      id cursus.
    </p>
    <p>
      Quisque egestas diam in arcu cursus euismod quis viverra. Consectetur
      lorem donec massa sapien faucibus et molestie ac feugiat. Ridiculus mus
      mauris vitae ultricies leo integer. Sapien faucibus et molestie ac feugiat
      sed. Dictum sit amet justo donec enim diam vulputate. Tincidunt nunc
      pulvinar sapien et ligula ullamcorper malesuada proin libero. Ut tellus
      elementum sagittis vitae et leo duis. Commodo quis imperdiet massa
      tincidunt nunc pulvinar sapien et ligula. Egestas dui id ornare arcu. Eget
      magna fermentum iaculis eu non diam phasellus. Dictum at tempor commodo
      ullamcorper a lacus. Mauris cursus mattis molestie a. Mauris vitae
      ultricies leo integer malesuada. Porttitor eget dolor morbi non arcu risus
      quis. Cras sed felis eget velit aliquet sagittis id consectetur purus. Mus
      mauris vitae ultricies leo.
    </p>
    <p>
      Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Volutpat
      sed cras ornare arcu dui vivamus arcu felis bibendum. Donec pretium
      vulputate sapien nec sagittis aliquam. Tortor pretium viverra suspendisse
      potenti nullam ac tortor. Dolor sit amet consectetur adipiscing. Mattis
      ullamcorper velit sed ullamcorper. Ipsum dolor sit amet consectetur
      adipiscing elit pellentesque habitant. Pellentesque habitant morbi
      tristique senectus et netus et malesuada. Lorem dolor sed viverra ipsum
      nunc aliquet bibendum. Enim nec dui nunc mattis. Nunc mi ipsum faucibus
      vitae aliquet nec ullamcorper. Orci phasellus egestas tellus rutrum tellus
      pellentesque eu tincidunt tortor. Sed blandit libero volutpat sed cras
      ornare arcu dui vivamus. Gravida arcu ac tortor dignissim convallis
      aenean. Risus sed vulputate odio ut enim blandit volutpat. Bibendum arcu
      vitae elementum curabitur vitae nunc sed. Mauris in aliquam sem fringilla.
      Est lorem ipsum dolor sit amet consectetur. Nascetur ridiculus mus mauris
      vitae ultricies leo integer malesuada.
    </p>
  </div>
  <JetFooter />
</template>

<script>
import WelcomeComponent from "@/components/WelcomeComponent.vue";
import JetHeader from "@/components/JetHeader.vue";
import JetFooter from "@/components/JetFooter.vue";
export default {
  name: "WelcomeComponent",
  components: {
    JetHeader,
    JetFooter,
    WelcomeComponent,
  },
};
</script>
