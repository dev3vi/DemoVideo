<template>
  <div id="app">
    <h2>Youtube Lazy Video</h2>

    <input
      class="input"
      type="text"
      @keydown.enter="handleSearch($event, 'youtube')"
      placeholder="Youtube Video Link or Video Id"
      :value="youtubeLink"
    />

    <LazyYoutube
      ref="youtubeLazyVideo"
      :src="youtubeLink"
      max-width="720px"
      aspect-ratio="16:9"
      thumbnail-quality="standard"
    />

    <div class="buttons">
      <button @click="handleClick('playVideo', 'youtubeLazyVideo')">
        Play
      </button>
      <button @click="handleClick('stopVideo', 'youtubeLazyVideo')">
        Stop
      </button>
      <button @click="handleClick('pauseVideo', 'youtubeLazyVideo')">
        Pause
      </button>
      <button @click="handleClick('resetView', 'youtubeLazyVideo')">
        Reset
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      youtubeLink: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      vimeoLink: "https://player.vimeo.com/video/64654583",
    };
  },

  mounted() {
    // this.$refs['lazyVideo'].playVideo();
  },
  methods: {
    handleClick(event, ref) {
      this.$refs[ref][event]();
    },
    handleSearch(e, platform) {
      if (platform === "youtube") this.youtubeLink = e.target.value;
      else this.vimeoLink = e.target.value;
    },
  },
};
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
h2 {
  margin-bottom: 0;
  margin-top: 2rem;
}
.input {
  padding: 5px;
  max-width: 720px;
  margin-top: 25px;
  margin-bottom: 25px;
  width: 90%;
}

.buttons {
  margin-top: 25px;
}
</style>

