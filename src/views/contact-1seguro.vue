<template>
<h1 style="margin-bottom: 1em; margin-top: 1em;">Contact</h1>
    <div class="parallax-effect2"></div>
    <div style="height:10px;background-image: linear-gradient(to right top, #1B4F07, #139415, #9FE755, #EAF5FA, #EAF5FA); font-size:36px; text-align: center; font-family: 'Raleway', Arial, sans-serif"></div>

    <div class="center">
      <h2 class="underlineHover">Horaire</h2>
    </div>
    <div>
      <p>10:00 - 18:00</p> 
    </div>
    <div style="margin-bottom: 20px;">
      <div class="center">
        <h2 class="underlineHover">COORDONNÉES SUPPLÉMENTAIRES</h2>
      </div>
      <div class="center gap">
        📞<a class="linkcontact" href="tel:+228 93 52 07 07">+228 93 52 07 07</a> 
      </div>
      <div class="center gap">
         📧 <a class="linkcontact" href="mailto:contact@villaseguro.com">contact@villaseguro.com</a> 
      </div>
      <div class="center gap">
         🏠 03BP30753, Lacs, Region Maritime, Togo
      </div>
      
    </div>
<div class="center">
  <div style="height: 75vh; width: 50vw; border: solid 1px black;">
      <l-map
        v-model="zoom"
        v-model:zoom="zoom"
        :center="[6.212862332689634, 1.4520282826854658]"
        @move="log('move')"
      >
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          
        ></l-tile-layer>
        <l-control-layers />
        <l-marker :lat-lng="[6.212862332689634, 1.4520282826854658]" draggable @moveend="log('moveend')">
          <l-tooltip>
          LOME-TOGO 00228 Lomé, Togo
          </l-tooltip>
        </l-marker>

        <l-marker :lat-lng="[6.140190028254394, 1.229652905066193]">
          <l-icon :icon-url="iconUrl" :icon-size="iconSize" />
          <l-tooltip>
          N1
          </l-tooltip>
        </l-marker>

        <!-- <l-marker :lat-lng="[50, 50]" draggable @moveend="log('moveend')">
          <l-popup>
            lol
          </l-popup>
        </l-marker> -->

        <!-- <l-polyline
          :lat-lngs="[
            [47.334852, -1.509485],
            [47.342596, -1.328731],
            [47.241487, -1.190568],
            [47.234787, -1.358337],
          ]"
          color="green"
        ></l-polyline>
        <l-polygon
          :lat-lngs="[
            [46.334852, -1.509485],
            [46.342596, -1.328731],
            [46.241487, -1.190568],
            [46.234787, -1.358337],
          ]"
          color="#41b782"
          :fill="true"
          :fillOpacity="0.5"
          fillColor="#41b782"
        />
        <l-rectangle
          :lat-lngs="[
            [46.334852, -1.509485],
            [46.342596, -1.328731],
            [46.241487, -1.190568],
            [46.234787, -1.358337],
          ]"
          :fill="true"
          color="#35495d"
        />
        <l-rectangle
          :bounds="[
            [46.334852, -1.190568],
            [46.241487, -1.090357],
          ]"
        >
          <l-popup>
            lol
          </l-popup>
        </l-rectangle> -->
      </l-map>
    
    </div>
  </div>
</template>
<script>
import {
  LMap,
  LIcon,
  LTileLayer,
  LMarker,
  LControlLayers,
  LTooltip,
  // LPopup,
  // LPolyline,
  // LPolygon,
  // LRectangle,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
export default {
  components: {
    LMap,
    LIcon,
    LTileLayer,
    LMarker,
    LControlLayers,
    LTooltip,
    // LPopup,
    // LPolyline,
    // LPolygon,
    // LRectangle,
  },
  data() {
    return {
      zoom: 13,
      minZoom: 15,
      iconWidth: 25,
      iconHeight: 40,
      
    };
  },
  computed: {
    
    iconSize() {
      return [this.iconWidth, this.iconHeight];
    },
  },
  methods: {
    log(a) {
      console.log(a);
    },
    changeIcon() {
      this.iconWidth += 2;
      if (this.iconWidth > this.iconHeight) {
        this.iconWidth = Math.floor(this.iconHeight / 2);
      }
    },
  },
};
</script>

<style>
p{
  font-weight: 500;
}
.parallax-effect2 {
  background-image: url("../assets/IMG-20220330-WA0007.jpg");
  min-height: 520px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.center{
  display: flex;
  justify-content: center;
}
.gap{
  gap: 10px;
}

.underlineHover:after {
  display: block;
  left: 0;
  bottom: -15px;
  width: 0;
  height: 5px;
  background-color: #40AF2A;
  content: "";
  transition: width 0.5s;
}

.underlineHover:hover {
  color: #0d0d0d;
  opacity: 0.9;
}

.underlineHover:hover:after {
  width: 100%;
}

a.linkcontact:hover{
  text-decoration: none;
  font-size: 1.1em;
}
</style>