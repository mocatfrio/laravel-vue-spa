<template>
  <div>
    <div class="row" v-if="!loading">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">
            <h2> {{ bookable.title }} </h2>
            <hr>
            <article> {{ bookable.description }} </article>
          </div>
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
    <div v-else>
      <div class="row">
        <div class="col-12">
          Loading...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookable: null,
      loading: false
    };
  },
  created() {
    this.loading = true;
    axios.get(`/api/bookables/${this.$route.params.id}`).then((response => {
      this.bookable = response.data.data;
      this.loading = false
    }));
  }
}
</script>