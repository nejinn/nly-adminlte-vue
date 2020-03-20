<template>
  <nly-container>
    <nly-row>
      <nly-col>
        <button id="button" aria-describedby="tooltip">I'm a button</button>
        <div id="tooltip" role="tooltip">I'm a tooltip</div>
      </nly-col>
    </nly-row>
    <nly-row>
      <nly-col>
        <testComponent />
      </nly-col>
    </nly-row>
  </nly-container>
</template>

<script>
import { createPopper } from "@popperjs/core";
export default {
  name: "sss",
  mounted() {
    const button = document.querySelector("#button");
    const tooltip = document.querySelector("#tooltip");
    createPopper(button, tooltip, {
      placement: "right"
    });
  }
};
</script>

<style>
#tooltip {
  background-color: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 13px;
}
</style>
