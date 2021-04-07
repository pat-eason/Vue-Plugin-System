<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <DemoPluginFormComponent />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DemoPlugin from '@vps-plugin/demo';

import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
    DemoPluginFormComponent: DemoPlugin.DemoPluginFormComponent,
  },
})
export default class Home extends Vue {}
</script>
