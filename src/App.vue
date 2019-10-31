<template>
  <div id="app">
    <google-map :center="{lat: 1.38, lng: 103.8}" :zoom="12" style="width: 100%; height: 500px">
      <ground-overlay
        source="./overlay.png"
        :bounds="{
            north: 1.502,
            south: 1.185,
            east: 104.0262,
            west: 103.5998,
        }"
        :opacity="0.5"
      ></ground-overlay>
    </google-map>
  </div>
</template>

<script>
export default {};
</script>
