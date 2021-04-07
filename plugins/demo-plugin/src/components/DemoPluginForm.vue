<template>
  <div class="demo-plugin--form">
    <form @submit.prevent="onSubmit">
      <div>
        <label>
          First Name
          <input
            v-model="firstName"
            id="firstName"
            name="firstName"
            type="text" />
        </label>
      </div>

      <div>
        <label>
          Last Name
          <input
            v-model="lastName"
            id="lastName"
            name="lastName"
            type="text" />
        </label>
      </div>

      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>

    <div v-if="hasSubmitted">
      <p>Hello, {{fullName}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class DemoPluginFormComponent extends Vue {
  public firstName = '';

  public lastName = '';

  public hasSubmitted = false;

  public fullName = '';

  onSubmit(): void {
    this.hasSubmitted = true;
    this.fullName = `${this.firstName} ${this.lastName}`;
  }
}
</script>
