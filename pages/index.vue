<template>
  <div>
    <div data-kinesistransformer data-ks-duration="1000" data-ks-perspective="800">
  <div data-kinesistransformer-element data-ks-strength="20"></div>
</div>
  </div>
</template>

<script setup>
import { initializeKinesis } from "@amineyarman/kinesis";

document.addEventListener("DOMContentLoaded", () => {
  initializeKinesis();
});
</script>

<style>

</style>