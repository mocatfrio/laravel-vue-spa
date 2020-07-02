<template>
<div class="card w-100">
  <div class="card-body">
    <router-link :to="{ name: 'bookable', params: { id } }">
      <h5 class="card-title">
        {{ title }}
      </h5>
    </router-link>
    <div class="row">
      <div class="col-12">
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
  <h1></h1>
</div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    id: Number
  },
  mounted() {

  }
}
</script>
